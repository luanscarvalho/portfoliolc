import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { to: '/sobre', label: 'Sobre mim' },
  { to: '/atuacao', label: 'Atuação' },
  { to: '/resultados', label: 'Resultados' },
  { to: '/reconhecimentos', label: 'Reconhecimentos' },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });
  return <header className="site-header"><Link to="/" className="wordmark" onClick={() => setOpen(false)}>Luan Carvalho<span>.</span></Link><nav className="desktop-navigation" aria-label="Navegação principal">{navigation.map(item => <Link key={item.to} to={item.to} data-active={pathname === item.to}>{item.label}</Link>)}</nav><Button asChild variant="portfolio" className="header-contact"><Link to="/contato">Vamos conversar <ArrowUpRight /></Link></Button><Button variant="portfolioGhost" size="icon" className="mobile-menu-trigger" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</Button>{open && <nav className="mobile-navigation" aria-label="Navegação celular">{navigation.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight /></Link>)}<Link to="/contato" onClick={() => setOpen(false)}>Vamos conversar<ArrowUpRight /></Link></nav>}</header>;
}