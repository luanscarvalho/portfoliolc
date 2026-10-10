import { createFileRoute } from '@tanstack/react-router';
import { ContactSection } from '@/components/portfolio/sections';
import { portfolioHead } from '@/components/portfolio/content';
export const Route = createFileRoute('/contato')({
  head: () => portfolioHead('Vamos conversar? — Luan Carvalho', 'Vamos construir juntos uma solução que faça sentido para os seus objetivos? Entre em contato com Luan Carvalho.'),
  component: Contato,
});
function Contato() { return <main className="interior-page"><ContactSection /></main>; }