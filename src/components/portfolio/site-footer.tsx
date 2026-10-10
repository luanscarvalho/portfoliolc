import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { DownloadPortfolio } from './sections';

export function SiteFooter() {
  return <footer className="site-footer"><Link to="/" className="wordmark">Luan Carvalho<span>.</span></Link><span className="footer-tagline">Pensando inovação, ciência, impacto e empreendedorismo</span><DownloadPortfolio /><a href="https://www.linkedin.com/in/oluancarvalho" aria-label="LinkedIn de Luan Carvalho" target="_blank" rel="noopener noreferrer"><ArrowUpRight /></a></footer>;
}