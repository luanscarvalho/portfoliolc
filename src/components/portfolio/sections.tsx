import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, ArrowDown, Download, Users, Presentation, ClipboardList, Mail, Phone, Linkedin, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { assets } from './assets';
import { biography, purpose, statement, journey, themes, feedbacks, awards, recognitionTexts } from './content';

export function Hero() {
  return <section className="portfolio-hero">
    <img className="hero-photo" src={assets.hero} alt="Luan Carvalho apresentando uma palestra para o público" fetchPriority="high" />
    <div className="hero-shade" />
    <div className="hero-heading"><h1>Luan Carvalho<span className="name-period">.</span></h1><p>Portfólio</p></div>
    <div className="hero-message"><div className="speech-bubble">Pensando inovação,<br />ciência, impacto e<br />empreendedorismo</div><Button asChild variant="portfolio"><Link to="/contato">Vamos conversar? <ArrowUpRight /></Link></Button></div>
    <div className="hero-bottom"><span>CIÊNCIA + EMPREENDEDORISMO</span><Button asChild variant="portfolioGhost"><Link to="/sobre">quem é Luan? <ArrowDown /></Link></Button></div>
  </section>;
}

export function AboutSection({ preview = false }: { preview?: boolean }) {
  return <section className="about-section section-dark">
    <div className="about-photo"><img src={assets.portrait} alt="Retrato de Luan Carvalho" loading={preview ? 'lazy' : 'eager'} /></div>
    <div className="about-copy"><span className="eyebrow">CIÊNCIA, INOVAÇÃO E IMPACTO</span><h2>quem é Luan?</h2><p>{biography}</p><h3>o que busca?</h3><p>{purpose}</p><blockquote className="speech-bubble">{statement}</blockquote>{preview && <Button asChild variant="portfolioGhost"><Link to="/sobre">a trajetória até aqui... <ArrowUpRight /></Link></Button>}</div>
  </section>;
}

export function JourneySection() {
  return <section className="journey-section section-light"><div className="journey-photo"><img src={assets.journey} alt="Luan Carvalho com fones e caneca Mirai" loading="lazy" /></div><div className="journey-copy"><span className="eyebrow">LUAN CARVALHO</span><h2>a trajetória até aqui...</h2><ul>{journey.map((text, i) => <li key={text}><span className="journey-number">0{i + 1}</span><p>{text}</p></li>)}</ul></div></section>;
}

export function NetworkSection() {
  const organizations = [
    { image: assets.annis, name: 'ANNIS', role: 'FUNDADOR E CONSELHEIRO', text: 'Construo, junto à ANNIS, caminhos para fortalecer negócios que unem sustentabilidade, inovação e impacto. Atua como representação jovem.' },
    { image: assets.wylinka, name: 'Wylinka', role: 'EMBAIXADOR', text: 'Conecto a atuação da Wylinka com deeptechs e ecossistemas em Alagoas, com o foco em movimentar a inovação e ciência na região.' },
    { image: assets.simpacto, name: 'SIMPACTO', role: 'REPRESENTANTE DE ALAGOAS', text: 'Atuo na articulação de Alagoas (GAS) com uma rede nacional dedicada ao fortalecimento dos investimentos, negócios de impacto e das políticas públicas do setor.' },
  ];
  return <section className="network-section section-light"><div className="event-strip">{[assets['event-1'], assets['event-2'], assets['event-3'], assets['event-4'], assets.hero].map((url,i) => <img key={url} src={url} alt={`Atuação de Luan no ecossistema de inovação ${i+1}`} loading="lazy" />)}</div><div className="network-grid">{organizations.map(org => <article key={org.name}><div className="organization-logo"><img src={org.image} alt={org.name} loading="lazy" /></div><h3>{org.role}</h3><p>{org.text}</p></article>)}</div></section>;
}

export function ThemesSection({ preview = false }: { preview?: boolean }) {
  return <section className={`themes-section ${preview ? 'themes-preview' : ''}`}><img src={assets.workshops} className="themes-photo" alt="Luan conduzindo uma palestra" loading="lazy" /><div className="themes-overlay" /><div className="themes-content"><span className="eyebrow">INOVAÇÃO EM PRÁTICA</span><h2>TEMAS JÁ<br className="desktop-break" /> TRABALHADOS</h2><div className="themes-grid">{themes.map((theme, i) => <article className="theme-column" key={theme.name}><span className="theme-number">0{i + 1}</span><h3>{theme.name}</h3><ul>{theme.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>{preview && <Button asChild variant="portfolio"><Link to="/atuacao">Oficinas, palestras e mentorias <ArrowUpRight /></Link></Button>}</div></section>;
}

export function ResultsSection({ preview = false }: { preview?: boolean }) {
  return <section className="results-section section-dark"><div className="results-copy"><span className="eyebrow">IMPACTO QUE ACONTECE</span><h2>RESULTADOS<br />REAIS GERADOS</h2><div className="stats-list">{[{ icon: Users, value: '+1.7k', label: 'PESSOAS ALCANÇADAS' }, { icon: Presentation, value: '+40', label: 'MENTORIAS REALIZADAS' }, { icon: ClipboardList, value: '15', label: 'PROJETOS COLABORADOS' }].map(stat => <div className="stat" key={stat.label}><stat.icon strokeWidth={1} /><div><strong>{stat.value}</strong><span>{stat.label}</span></div></div>)}</div>{preview && <Button asChild variant="portfolioGhost"><Link to="/resultados">Feedbacks reais <ArrowUpRight /></Link></Button>}</div><div className="results-photo"><img src={assets.results} alt="Luan Carvalho realizando uma mentoria" loading="lazy" /></div></section>;
}

export function FeedbackSection() {
  return <section className="feedback-section section-dark"><div className="feedback-photo"><img src={assets.feedback} alt="Luan Carvalho sentado, sorrindo" loading="lazy" /></div><div className="feedback-copy"><span className="eyebrow">QUEM VIVEU, CONTA</span><h2>FEEDBACKS REAIS</h2><div className="feedback-list">{feedbacks.map((text,i) => <blockquote key={text} className={`speech-bubble feedback-bubble feedback-${i % 4}`}>“{text}”</blockquote>)}</div></div></section>;
}

export function AwardsSection({ preview = false }: { preview?: boolean }) {
  const [selected, setSelected] = useState<(typeof awards)[number] | null>(null);
  const shown = preview ? awards.slice(5) : awards;
  return <section className="awards-section section-light"><div className="section-heading"><div><span className="eyebrow">DESAFIOS QUE VIRARAM CONQUISTAS</span><h2>alguns prêmios e<br />reconhecimento...</h2></div><blockquote className="speech-bubble">Meus “rolês” preferidos são: participar de eventos de inovação, hackathons e enfrentar novos desafios...</blockquote></div><div className="awards-grid">{shown.map(award => <article className="award" key={award.title}><Button variant="image" className="award-image" onClick={() => setSelected(award)} aria-label={`Ampliar imagem: ${award.title}`}><img src={assets[award.image]} alt={award.title} loading="lazy" /><span className="image-zoom"><ZoomIn /></span><span className="award-year">{award.year}</span></Button><h3>{award.title}</h3><p>{award.organization} ({award.year})</p></article>)}</div>{preview && <Button asChild variant="portfolioLight"><Link to="/reconhecimentos">Todos os reconhecimentos <ArrowUpRight /></Link></Button>}
    {!preview && <div className="demoday"><img src={assets.demoday} alt="Apresentação no Demoday em Belém" loading="lazy" /><div><h3>Apresentação no Demoday</h3><p>Eneb na UFPA - Belém/PA</p><h3>Recebendo o Prêmio</h3><p>Final do Eneb no Hangar - Belém/PA</p></div></div>}
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="award-dialog"><DialogTitle>{selected?.title}</DialogTitle>{selected && <img src={assets[selected.image]} alt={selected.title} />}<p>{selected?.organization} ({selected?.year})</p>{selected && recognitionTexts[selected.image]?.map(text => <p key={text} className="recognition-text">{text}</p>)}</DialogContent></Dialog>
  </section>;
}

export function ContactSection({ preview = false }: { preview?: boolean }) {
  return <section className={`contact-section ${preview ? 'contact-preview' : ''}`}><img className="contact-photo" src={assets.contact} alt="Luan Carvalho com fones de ouvido" loading={preview ? 'lazy' : 'eager'} /><div className="contact-shade" /><div className="contact-intro"><span className="eyebrow">VAMOS CONSTRUIR JUNTOS</span><h1>Vamos construir juntos uma solução que faça sentido para os seus objetivos?</h1></div><div className="contact-links"><h2 className="speech-bubble">Vamos conversar?</h2><Button asChild variant="speech"><a href="https://wa.me/5582991167429" target="_blank" rel="noopener noreferrer"><Phone /> <span>(82) 9 9116-7429</span><ArrowUpRight /></a></Button><Button asChild variant="speech"><a href="mailto:luancarvalho.bio@gmail.com"><Mail /><span>luancarvalho.bio@gmail.com</span><ArrowUpRight /></a></Button><Button asChild variant="speech"><a href="https://www.linkedin.com/in/oluancarvalho" target="_blank" rel="noopener noreferrer"><Linkedin /><span>linkedin.com/in/oluancarvalho</span><ArrowUpRight /></a></Button></div></section>;
}

export function DownloadPortfolio() {
  return <Button variant="portfolioGhost" asChild><a href={assets.portfolio} target="_blank" rel="noopener noreferrer" download="Portfolio-Luan-Carvalho.pdf"><Download /> Portfólio em PDF</a></Button>;
}