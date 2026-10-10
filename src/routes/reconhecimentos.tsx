import { createFileRoute } from '@tanstack/react-router';
import { AwardsSection, ContactSection } from '@/components/portfolio/sections';
import { portfolioHead } from '@/components/portfolio/content';
export const Route = createFileRoute('/reconhecimentos')({
  head: () => portfolioHead('Prêmios e reconhecimento — Luan Carvalho', 'Conquistas em hackathons, eventos de inovação e premiações nacionais. Reconhecimentos de Luan Carvalho entre 2022 e 2026.'),
  component: Reconhecimentos,
});
function Reconhecimentos() { return <main className="interior-page"><AwardsSection /><ContactSection preview /></main>; }