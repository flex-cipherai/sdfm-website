import { type FormEvent, useEffect, useId, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isEmail, readUtm, submitForm } from '../lib/forms';
import { pushEvent } from '../lib/tracking';
import { site } from '../config/site';
import { CheckIcon } from './Icons';
import '../styles/forms.css';
import './CustomBuildForm.css';

export const ORG_SIZES = ['1–5', '6–15', '16–50', '51–100', 'More than 100'];

export interface CustomBuildFormProps {
  /** Industry key for hidden fields and tracking, e.g. 'law' */
  industry: string;
  orgLabel: string;
  orgSizeLabel: string;
  taskPlaceholder: string;
  toolsLabel: string;
  toolsPlaceholder: string;
}

type Fields = { name: string; email: string; org: string; size: string; task: string; tools: string; phone: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: '', email: '', org: '', size: '', task: '', tools: '', phone: '' };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = 'Please enter your full name.';
  if (!f.email.trim()) e.email = 'Please enter your work email.';
  else if (!isEmail(f.email)) e.email = 'Please enter a valid email address.';
  if (!f.org.trim()) e.org = 'Please fill this in.';
  if (!f.size) e.size = 'Please choose one.';
  if (!f.task.trim()) e.task = 'Please tell us the task.';
  if (f.phone.trim() && !/^\+?[\d\s().-]{7,20}$/.test(f.phone.trim()))
    e.phone = 'Please enter a number with its country code, e.g. +44 20 7946 0000.';
  return e;
}

/** Custom-build request form. Reused on every industry page and on /custom-builds. */
export default function CustomBuildForm(props: CustomBuildFormProps) {
  const { industry, orgLabel, orgSizeLabel, taskPlaceholder, toolsLabel, toolsPlaceholder } = props;
  const id = useId();
  const { pathname } = useLocation();
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [sentName, setSentName] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === 'sent') successRef.current?.focus();
  }, [status]);

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(fields);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus('sending');
    try {
      await submitForm('custom-build', {
        full_name: fields.name.trim(),
        email: fields.email.trim(),
        org_name: fields.org.trim(),
        org_size: fields.size,
        task: fields.task.trim(),
        tools: fields.tools.trim(),
        phone: fields.phone.trim(),
        industry,
        source_page: pathname,
        ...readUtm(),
      });
      pushEvent({ event: 'submit_custom_build', industry, firm_size: fields.size });
      setSentName(fields.name.trim().split(/\s+/)[0]);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="build-form build-form--sent">
        <div ref={successRef} className="form-success" role="status" tabIndex={-1}>
          <span className="form-success__icon" aria-hidden="true">
            <CheckIcon size={20} />
          </span>
          <p>
            Thanks, {sentName}. We've got your request and will reply within {site.replyTime} with next steps.
          </p>
        </div>
      </div>
    );
  }

  const fid = (k: string) => `${id}-${k}`;
  const errProps = (k: keyof Fields) =>
    errors[k] ? { 'aria-invalid': true as const, 'aria-describedby': fid(`${k}-err`) } : {};
  const Err = ({ k }: { k: keyof Fields }) =>
    errors[k] ? (
      <p id={fid(`${k}-err`)} className="field__error">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form ref={formRef} className="build-form" onSubmit={onSubmit} noValidate>
      <div className="build-form__row">
        <div className="field">
          <label className="field__label" htmlFor={fid('name')}>
            Full name
          </label>
          <input id={fid('name')} name="name" className="field__input" autoComplete="name" required value={fields.name} onChange={set('name')} {...errProps('name')} />
          <Err k="name" />
        </div>
        <div className="field">
          <label className="field__label" htmlFor={fid('email')}>
            Work email
          </label>
          <input id={fid('email')} name="email" type="email" className="field__input" autoComplete="email" required value={fields.email} onChange={set('email')} {...errProps('email')} />
          <Err k="email" />
        </div>
      </div>

      <div className="build-form__row">
        <div className="field">
          <label className="field__label" htmlFor={fid('org')}>
            {orgLabel}
          </label>
          <input id={fid('org')} name="org" className="field__input" autoComplete="organization" required value={fields.org} onChange={set('org')} {...errProps('org')} />
          <Err k="org" />
        </div>
        <div className="field">
          <label className="field__label" htmlFor={fid('size')}>
            {orgSizeLabel}
          </label>
          <select id={fid('size')} name="size" className="field__input" required value={fields.size} onChange={set('size')} {...errProps('size')}>
            <option value="" disabled>
              Choose one
            </option>
            {ORG_SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <Err k="size" />
        </div>
      </div>

      <div className="field">
        <label className="field__label" htmlFor={fid('task')}>
          What task would you love to never do again?
        </label>
        <textarea id={fid('task')} name="task" rows={4} className="field__input" placeholder={taskPlaceholder} required value={fields.task} onChange={set('task')} {...errProps('task')} />
        <Err k="task" />
      </div>

      <div className="field">
        <label className="field__label" htmlFor={fid('tools')}>
          {toolsLabel} <span className="field__optional">(optional)</span>
        </label>
        <input id={fid('tools')} name="tools" className="field__input" placeholder={toolsPlaceholder} value={fields.tools} onChange={set('tools')} />
      </div>

      <div className="field">
        <label className="field__label" htmlFor={fid('phone')}>
          WhatsApp or phone <span className="field__optional">(optional)</span>
        </label>
        <input
          id={fid('phone')}
          name="phone"
          type="tel"
          inputMode="tel"
          className="field__input"
          autoComplete="tel"
          placeholder="Include your country code, e.g. +44"
          value={fields.phone}
          onChange={set('phone')}
          {...errProps('phone')}
        />
        <Err k="phone" />
      </div>

      {status === 'error' && (
        <p className="form-alert" role="alert">
          Something went wrong and your request wasn't sent. Please try again, or email{' '}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
        </p>
      )}

      <div className="build-form__submit">
        <button type="submit" className="btn-primary form-btn" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send my request'}
        </button>
        <p className="form-note">
          We only use your details to reply to your request.{' '}
          <Link to="/privacy-policy" className="ulink">
            Privacy policy
          </Link>
        </p>
      </div>
    </form>
  );
}
