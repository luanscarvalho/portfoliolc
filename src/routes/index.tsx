import { createFileRoute } from "@tanstack/react-router";
import { Hero, AboutSection, ThemesSection, ResultsSection, AwardsSection, ContactSection } from '@/components/portfolio/sections';
import { portfolioHead } from '@/components/portfolio/content';
export const Route = createFileRoute("/")({
  head: () => portfolioHead('Luan Carvalho — Portfólio', 'Pensando inovação, ciência, impacto e empreendedorismo. Conheça a trajetória, a atuação e os resultados de Luan Carvalho.'),
  component: Index,
});
function Index() {
  return <main><Hero /><AboutSection preview /><ThemesSection preview /><ResultsSection preview /><AwardsSection preview /><ContactSection preview /></main>;
}
