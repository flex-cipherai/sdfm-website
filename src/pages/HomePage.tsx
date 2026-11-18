import Hero from '../sections/Hero';
import HowWeHelp from '../sections/HowWeHelp';
import AiCheckBand from '../components/AiCheckBand';
import LatestGuides from '../sections/LatestGuides';
import AnyBusiness from '../sections/AnyBusiness';
import { guides } from '../data/guides';
import { usePageMeta } from '../hooks/usePageMeta';

export default function HomePage() {
  usePageMeta();

  return (
    <>
      <Hero />
      <HowWeHelp />
      <AiCheckBand />
      <LatestGuides guides={guides} />
      <AnyBusiness />
    </>
  );
}
