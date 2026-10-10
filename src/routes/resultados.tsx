import { createFileRoute } from '@tanstack/react-router';
import { ResultsSection, FeedbackSection, ContactSection } from '@/components/portfolio/sections';
import { portfolioHead } from '@/components/portfolio/content';
export const Route = createFileRoute('/resultados')({
  head: () => portfolioHead('Resultados reais gerados — Luan Carvalho', 'Mais de 1.7k pessoas alcançadas, mais de 40 mentorias realizadas e 15 projetos colaborados. Resultados e feedbacks reais.'),
  component: Resultados,
});
function Resultados() { return <main className="interior-page"><ResultsSection /><FeedbackSection /><ContactSection preview /></main>; }