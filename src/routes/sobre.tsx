import { createFileRoute } from '@tanstack/react-router';
import { AboutSection, JourneySection, NetworkSection, ContactSection } from '@/components/portfolio/sections';
import { portfolioHead } from '@/components/portfolio/content';
export const Route = createFileRoute('/sobre')({
  head: () => portfolioHead('Quem é Luan? — Luan Carvalho', 'Uma trajetória que conecta o universo acadêmico e empreendedorismo, com atuação em pesquisa, negócios de impacto e no ecossistema de inovação.'),
  component: Sobre,
});
function Sobre() { return <main className="interior-page"><AboutSection /><JourneySection /><NetworkSection /><ContactSection preview /></main>; }