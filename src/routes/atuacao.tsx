import { createFileRoute } from '@tanstack/react-router';
import { ThemesSection, NetworkSection, ContactSection } from '@/components/portfolio/sections';
import { portfolioHead } from '@/components/portfolio/content';
export const Route = createFileRoute('/atuacao')({
  head: () => portfolioHead('Oficinas, palestras e mentorias — Luan Carvalho', 'Pitch, ideação, negócios de impacto, empreendedorismo científico, inovação e planejamento de carreira. Temas já trabalhados por Luan Carvalho.'),
  component: Atuacao,
});
function Atuacao() { return <main className="interior-page"><ThemesSection /><NetworkSection /><ContactSection preview /></main>; }