import { type FormEvent, useId, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { isEmail, submitForm } from '../lib/forms';
import { pushEvent } from '../lib/tracking';
import { CheckIcon } from './Icons';
import '../styles/forms.css';
import './GuideSignup.css';

interface GuideSignupProps {
  heading: string;
  /** Industry key for the hidden field and tracking, e.g. 'law' */
  industry: string;
}

/** Email sign-up for an industry's guides. */
export default function GuideSignup({ heading, industry }: GuideSignupProps) {
  const id = useId();
  const { pathname } = useLocation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isEmail(email)) {
      setError(email.trim() ? 'Please enter a valid email address.' : 'Please enter your work email.');
      return;
    }
    setError('');
    setStatus('sending');
    try {
      await submitForm('guide-signup', { email: email.trim(), industry, source_page: pathname });
      pushEvent({ event: 'submit_guide_signup', industry });
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="signup">
      <h3 className="signup__title">{heading}</h3>
      {status === 'sent' ? (
        <div className="form-success" role="status">
          <span className="form-success__icon" aria-hidden="true">
            <CheckIcon size={20} />
          </span>
          <p>You're in. The next guide will land in your inbox.</p>
        </div>
      ) : (
        <form className="signup__form" onSubmit={onSubmit} noValidate>
          <div className="field signup__field">
            <label className="field__label" htmlFor={`${id}-email`}>
              Work email
            </label>
            <input
              id={`${id}-email`}
              type="email"
              className="field__input"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              {...(error ? { 'aria-invalid': true, 'aria-describedby': `${id}-err` } : {})}
            />
            {error && (
              <p id={`${id}-err`} className="field__error">
                {error}
              </p>
            )}
          </div>
          <button type="submit" className="btn-primary form-btn signup__btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send me the guides'}
          </button>
          {status === 'error' && (
            <p className="form-alert signup__full" role="alert">
              Something went wrong and you weren't signed up. Please try again.
            </p>
          )}
          <p className="form-note signup__full">No spam. Unsubscribe in one click.</p>
        </form>
      )}
    </div>
  );
}
