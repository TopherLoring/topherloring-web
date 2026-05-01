/*
 * TopherLoring Industries Interactive Portfolio
 * Version: v1.1.0
 * Updated: 2026.05.01
 * Status: Review
 * Parent: TopherLoring Industries
 * Project: TopherLoring.com
 * Author: Christopher Rowden
 *
 * Changelog
 * v1.0.0 — 2026.05.01
 * - Initial interactive portfolio application
 *
 * v1.1.0 — 2026.05.01
 * - Added canonical cross-links for TopherLoring.com, MoneyMsg, and laundr.me
 * - Added brand-safe MoneyMsg and laundr.me wordmark rendering
 * - Made portfolio cards linkable where a live landing page exists
 * - Replaced console-only contact form behavior with a mailto fallback
 * - Removed render-time window dependency by tracking desktop viewport in state
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  BarChart2,
  BookOpen,
  Brain,
  Cpu,
  ExternalLink,
  Flame,
  Gift,
  HardDrive,
  Layers,
  Mail,
  MapPin,
  Monitor,
  Moon,
  PartyPopper,
  RotateCcw,
  Scissors,
  Send,
  ShoppingBag,
  SmartphoneNfc,
  Sun,
  User,
  Wrench,
  X
} from 'lucide-react';

const LINKS = {
  topherloring: 'https://www.TopherLoring.com/',
  moneymsg: 'https://moneymsg.laundr.me/',
  laundr: 'https://www.laundr.me/'
};

const portfolioData = {
  about: {
    id: 'about',
    title: 'Leadership',
    subtitle: 'Executive overview and direct contact channels.',
    type: 'custom',
    theme: {
      from: 'from-slate-300',
      to: 'to-slate-600',
      text: 'text-slate-300',
      border: 'border-slate-400/30',
      bg: 'bg-slate-800/20',
      glow: 'shadow-[0_0_30px_rgba(148,163,184,0.3)]'
    }
  },
  active: {
    id: 'active',
    title: 'Active Operations',
    subtitle: 'Units driving IP development, core technology, or active market presence.',
    type: 'list',
    theme: {
      from: 'from-fuchsia-500',
      to: 'to-purple-600',
      text: 'text-fuchsia-400',
      border: 'border-fuchsia-500/30',
      bg: 'bg-fuchsia-900/20',
      glow: 'shadow-[0_0_30px_rgba(217,70,239,0.3)]'
    },
    sections: [
      {
        category: 'Fintech & Service Infrastructure',
        items: [
          {
            name: 'laundr.me',
            label: 'Core OS',
            brand: 'laundr',
            url: LINKS.laundr,
            desc: "A vertically integrated operating system for the independent workforce providing P2P payments, CRM, bookings, activity history, and talent discovery.",
            icon: Layers
          },
          {
            name: 'MoneyMsg',
            label: 'Sub-product',
            brand: 'moneymsg',
            url: LINKS.moneymsg,
            desc: 'Conversation-native payment initiation for the laundr.me fintech ecosystem, designed to make send, request, split, and claim flows easier to start.',
            icon: SmartphoneNfc
          }
        ]
      },
      {
        category: 'Analytics & Research',
        items: [
          {
            name: 'Scratch That',
            desc: 'Specialized lottery audit and analytics platform using statistical models to track game performance and surface objective user probability.',
            icon: BarChart2
          },
          {
            name: 'Biblical Truths Trilogy',
            desc: 'A forensic nonfiction series applying modern analytical frameworks, aerospace dynamics, and forensic linguistics to ancient historical data.',
            icon: BookOpen
          }
        ]
      },
      {
        category: 'Design & Specialized Apparel',
        items: [
          {
            name: 'Apex Undies',
            desc: 'Premium private-label underwear handling the full lifecycle from conceptual design and in-house manufacturing to global DTC distribution.',
            icon: Scissors
          },
          {
            name: 'Bulges & Bottoms',
            desc: 'Curated inclusive apparel boutique utilizing a role-based personalization system for stronger product discovery and brand positioning.',
            icon: ShoppingBag
          },
          {
            name: 'Clstrfck Industries',
            desc: 'High-impact design studio specializing in aggressive product posture and non-traditional branding for niche markets.',
            icon: Flame
          }
        ]
      }
    ]
  },
  pipeline: {
    id: 'pipeline',
    title: 'Pipeline Registry',
    subtitle: 'Conceptual logic awaiting resource allocation and integration with the proprietary e-commerce backend.',
    type: 'list',
    theme: {
      from: 'from-cyan-500',
      to: 'to-blue-600',
      text: 'text-cyan-400',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-900/20',
      glow: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]'
    },
    sections: [
      {
        category: 'Proprietary E-commerce Ecosystem',
        description: 'Autonomous DTC backend and fulfillment engine currently in development to power:',
        items: [
          {
            name: 'UndoHQ',
            desc: 'Rental-friendly home upgrades focused on reversible, high-yield aesthetic results.',
            icon: RotateCcw
          },
          {
            name: 'Luma Reset',
            desc: 'Recovery and wellness brand specializing in cold and red light therapy.',
            icon: Sun
          },
          {
            name: 'SlumberLab',
            desc: 'Sleep-engineered products for daily recovery and rest optimization.',
            icon: Moon
          },
          {
            name: 'DeskMode',
            desc: 'Functional gear and aesthetic curation for creators and remote work.',
            icon: Monitor
          },
          {
            name: 'Heirloom Moments',
            desc: 'Personalized keepsakes designed for high-significance milestones.',
            icon: Gift
          },
          {
            name: 'EventLab',
            desc: 'Celebration design and curated supply for standout events.',
            icon: PartyPopper
          }
        ]
      },
      {
        category: 'Specialized Tools',
        items: [
          {
            name: 'Forget-Me-Not',
            desc: 'AI-assisted memory-harvesting tool for early cognitive decline support and legacy data preservation.',
            icon: Brain
          }
        ]
      }
    ]
  },
  legacy: {
    id: 'legacy',
    title: 'Legacy Portfolio',
    subtitle: 'Stabilized or retired entities; architectural foundations.',
    type: 'list',
    theme: {
      from: 'from-amber-400',
      to: 'to-orange-600',
      text: 'text-amber-400',
      border: 'border-amber-500/30',
      bg: 'bg-amber-900/20',
      glow: 'shadow-[0_0_30px_rgba(251,191,36,0.3)]'
    },
    sections: [
      {
        category: 'Foundational Architecture',
        items: [
          {
            name: 'Shore Assembly',
            desc: 'Legacy handyman business for localized assembly and household infrastructure.',
            icon: Wrench
          },
          {
            name: 'TechSolve NJ',
            desc: 'Legacy PC repair and upgrade node for commercial and residential hardware support.',
            icon: Cpu
          },
          {
            name: 'CR Tech Solutions',
            desc: 'Legacy technical consulting and specialized data recovery services.',
            icon: HardDrive
          }
        ]
      }
    ]
  }
};

const styleSheet = `
  @keyframes iridescentFlow {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(1deg); }
  }

  @keyframes slowSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .iridescent-text {
    background: linear-gradient(
      -45deg,
      #ffffff 0%,
      #a5f3fc 10%,
      #38bdf8 25%,
      #818cf8 40%,
      #c084fc 55%,
      #f472b6 70%,
      #fbbf24 85%,
      #ffffff 100%
    ) !important;
    background-size: 200% 200% !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    color: transparent !important;
    animation: iridescentFlow 5s ease-in-out infinite !important;
    display: inline-block !important;
    line-height: 1.25 !important;
    padding-bottom: 0.15em !important;
    position: relative;
    z-index: 1;
  }

  .text-glow { text-shadow: 0 0 30px rgba(255, 255, 255, 0.15); }
  .animate-float { animation: float 10s ease-in-out infinite; }
  .animate-spin-slow { animation: slowSpin 60s linear infinite; }
  .glass-panel { background: rgba(10, 10, 12, 0.7); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

  .brand-moneymsg-money { color: #ffffff; }
  .brand-moneymsg-msg { color: #00F8F8; text-shadow: 0 0 16px rgba(0, 248, 248, 0.28); }
  .brand-laundr-root { color: #ffffff; }
  .brand-laundr-dot { color: #FF0088; text-shadow: 0 0 16px rgba(255, 0, 136, 0.28); }

  .link-chip:focus-visible,
  .brand-link:focus-visible,
  .portfolio-link:focus-visible,
  .drawer-close:focus-visible,
  .dock-button:focus-visible,
  .contact-link:focus-visible,
  .submit-button:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.7);
    outline-offset: 4px;
  }
`;

function MoneyMsgWordmark({ className = '' }) {
  return (
    <span className={`font-semibold tracking-tight whitespace-nowrap ${className}`}>
      <span className="brand-moneymsg-money">Money</span>
      <span className="brand-moneymsg-msg">Msg</span>
    </span>
  );
}

function LaundrMeWordmark({ className = '' }) {
  return (
    <span className={`font-semibold tracking-tight whitespace-nowrap ${className}`}>
      <span className="brand-laundr-root">laundr</span>
      <span className="brand-laundr-dot">.me</span>
    </span>
  );
}

function BrandName({ item }) {
  if (item.brand === 'moneymsg') {
    return <MoneyMsgWordmark />;
  }

  if (item.brand === 'laundr') {
    return <LaundrMeWordmark />;
  }

  return <>{item.name}</>;
}

function ExternalTextLink({ href, children, className = '', ariaLabel }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className={`brand-link inline-flex items-center gap-1 transition-colors hover:text-white ${className}`}
    >
      {children}
      <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
    </a>
  );
}

function LinkChip({ href, children, accent = 'slate', ariaLabel }) {
  const accentClasses = {
    slate: 'border-white/10 bg-white/[0.03] text-gray-300 hover:border-white/30 hover:bg-white/[0.07] hover:text-white',
    cyan: 'border-cyan-400/30 bg-cyan-950/20 text-cyan-300 hover:border-cyan-300/70 hover:bg-cyan-900/30 hover:text-cyan-100',
    pink: 'border-fuchsia-400/30 bg-fuchsia-950/20 text-fuchsia-300 hover:border-fuchsia-300/70 hover:bg-fuchsia-900/30 hover:text-fuchsia-100'
  };

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-chip inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.18em] transition-all ${accentClasses[accent]}`}
    >
      {children}
      <ExternalLink className="h-3 w-3" aria-hidden="true" />
    </a>
  );
}

function useDesktopViewport() {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth >= 768;
  });

  useEffect(() => {
    const updateViewport = () => setIsDesktop(window.innerWidth >= 768);
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  return isDesktop;
}

function PortfolioCard({ item, theme, isOffset }) {
  const Icon = item.icon;
  const CardTag = item.url ? 'a' : 'div';
  const cardProps = item.url
    ? {
        href: item.url,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `Open ${item.name}`
      }
    : {};

  return (
    <CardTag
      {...cardProps}
      className={`portfolio-link group relative block overflow-hidden rounded-lg border border-white/[0.03] bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] ${isOffset ? 'md:mt-12' : ''}`}
    >
      <Icon className={`absolute -bottom-4 -right-4 h-32 w-32 opacity-[0.03] transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 group-hover:opacity-[0.08] ${theme.text}`} strokeWidth={1} />
      <div className="relative z-10 flex h-full flex-col">
        <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 transition-colors duration-500 md:mb-6 ${theme.bg} ${theme.border}`}>
          <Icon className={`h-5 w-5 transition-colors ${theme.text}`} strokeWidth={1.5} />
        </div>
        <div className="mb-2 flex flex-wrap items-center gap-2 md:mb-3">
          <h4 className="font-serif text-base text-gray-200 md:text-lg">
            <BrandName item={item} />
          </h4>
          {item.label && (
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-gray-500">
              {item.label}
            </span>
          )}
          {item.url && <ExternalLink className="h-3.5 w-3.5 text-gray-500 transition-colors group-hover:text-gray-200" aria-hidden="true" />}
        </div>
        <p className="text-xs font-light leading-relaxed text-gray-400 transition-colors duration-500 group-hover:text-gray-300 md:text-sm">
          {item.desc}
        </p>
      </div>
    </CardTag>
  );
}

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const containerRef = useRef(null);
  const isDesktop = useDesktopViewport();

  useEffect(() => {
    if (!isDesktop) return undefined;

    const handleMouseMove = (event) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop]);

  const getTransform = (depth, reverse = false) => {
    if (!isDesktop) return 'translate3d(0,0,0)';
    const multiplier = reverse ? -1 : 1;
    return `translate3d(${mousePos.x * depth * multiplier}px, ${mousePos.y * depth * multiplier}px, 0)`;
  };

  const getAmbientGlow = () => {
    if (activeDrawer) return portfolioData[activeDrawer].theme;
    if (hoveredNode) return portfolioData[hoveredNode].theme;
    return { bg: 'bg-white/5', border: 'border-white/5' };
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const mailSubject = encodeURIComponent(subject ? `TopherLoring inquiry: ${subject}` : 'TopherLoring inquiry');
    const mailBody = encodeURIComponent([
      `Originator: ${name}`,
      `Return Address: ${email}`,
      '',
      message
    ].join('\n'));

    window.location.href = `mailto:inquiries@topherloring.com?subject=${mailSubject}&body=${mailBody}`;
  };

  const currentTheme = getAmbientGlow();

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#050507] font-sans text-gray-300 selection:bg-white/20 selection:text-white"
    >
      <style>{styleSheet}</style>

      <div className="absolute left-0 right-0 top-0 z-40 flex items-center justify-between gap-4 px-4 py-4 md:px-8">
        <ExternalTextLink href={LINKS.topherloring} ariaLabel="Open TopherLoring.com" className="font-serif text-sm text-gray-300 md:text-base">
          TopherLoring.com
        </ExternalTextLink>

        <nav className="flex flex-wrap justify-end gap-2" aria-label="External ecosystem links">
          <LinkChip href={LINKS.moneymsg} accent="cyan" ariaLabel="Open MoneyMsg">
            <MoneyMsgWordmark />
          </LinkChip>
          <LinkChip href={LINKS.laundr} accent="pink" ariaLabel="Open laundr.me">
            <LaundrMeWordmark />
          </LinkChip>
        </nav>
      </div>

      <div
        className={`pointer-events-none absolute inset-0 transition-all duration-1000 ease-out ${activeDrawer ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
        style={{ transform: getTransform(40, true) }}
      >
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(0,0,0,0)_0%,rgba(5,5,7,1)_80%)]" />
        <div className={`absolute left-1/4 top-0 h-[50vw] w-[50vw] rounded-full blur-[120px] transition-all duration-1000 ${hoveredNode === 'active' ? 'scale-125 bg-fuchsia-600 opacity-40' : hoveredNode ? 'bg-purple-900/30 opacity-0' : 'bg-purple-900/30 opacity-40'}`} />
        <div className={`absolute bottom-0 right-1/4 h-[60vw] w-[60vw] rounded-full blur-[150px] transition-all duration-1000 ${hoveredNode === 'pipeline' ? 'scale-125 bg-cyan-600 opacity-40' : hoveredNode ? 'bg-cyan-900/30 opacity-0' : 'bg-cyan-900/30 opacity-40'}`} />
        <div className={`absolute right-1/3 top-1/3 h-[40vw] w-[40vw] rounded-full blur-[100px] transition-all duration-1000 ${hoveredNode === 'legacy' ? 'scale-125 bg-amber-600 opacity-40' : hoveredNode ? 'bg-amber-900/20 opacity-0' : 'bg-amber-900/20 opacity-40'}`} />
        <div className={`absolute left-1/4 top-1/4 h-[45vw] w-[45vw] rounded-full blur-[130px] transition-all duration-1000 ${hoveredNode === 'about' ? 'scale-125 bg-slate-500 opacity-30' : hoveredNode ? 'bg-slate-800/20 opacity-0' : 'bg-slate-800/20 opacity-30'}`} />
        <div className={`animate-spin-slow absolute left-1/2 top-[30%] z-0 h-[120vw] w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors duration-700 md:h-[800px] md:w-[800px] ${currentTheme.border || 'border-white/5'}`} />
        <div className={`animate-spin-slow absolute left-1/2 top-[30%] z-0 h-[180vw] w-[180vw] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors delay-100 duration-700 md:h-[1200px] md:w-[1200px] ${currentTheme.border || 'border-white/[0.02]'}`} style={{ animationDirection: 'reverse', animationDuration: '90s' }} />
      </div>

      <div
        className={`pointer-events-none absolute left-1/2 top-[30%] z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeDrawer ? 'scale-75 opacity-0' : 'scale-100 opacity-100'}`}
        style={{ transform: `translate(-50%, -50%) ${getTransform(15)}` }}
      >
        <div className="animate-float flex w-full max-w-[90vw] flex-col items-center">
          <a href={LINKS.topherloring} target="_blank" rel="noopener noreferrer" className="brand-link pointer-events-auto flex flex-col items-center" aria-label="Open TopherLoring.com">
            <div className="mb-4 flex items-center justify-center gap-2 md:gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/50 to-transparent md:w-24" />
              <div className="rounded-full border border-white/50 p-1 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-white/50 bg-gradient-to-br from-white/10 to-transparent md:h-10 md:w-10">
                  <span className="iridescent-text font-serif text-sm font-black md:text-lg">R</span>
                </div>
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/50 to-transparent md:w-24" />
            </div>

            <h1 className="w-full text-center font-serif text-4xl font-medium tracking-wider sm:text-6xl md:text-8xl">
              <span className="iridescent-text text-glow">TopherLoring</span>
            </h1>
          </a>

          <div className="mt-4 flex items-center gap-3 md:mt-6 md:gap-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-gray-600 to-transparent md:w-16" />
            <h2 className="whitespace-nowrap font-serif text-[10px] font-light uppercase tracking-[0.4em] text-gray-400 opacity-80 md:text-xl">
              Industries
            </h2>
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-gray-600 to-transparent md:w-16" />
          </div>

          <div className="pointer-events-auto mt-10 flex max-w-[85vw] flex-col items-center text-center md:mt-12 md:max-w-xl">
            <p className="text-[11px] font-light leading-relaxed tracking-wide text-gray-400 opacity-90 md:text-sm">
              A private holding company driving active IP development, fintech infrastructure, and proprietary e-commerce ecosystems through lean architecture and rapid in-house execution.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <LinkChip href={LINKS.topherloring} ariaLabel="Open TopherLoring.com">TopherLoring.com</LinkChip>
              <LinkChip href={LINKS.moneymsg} accent="cyan" ariaLabel="Open MoneyMsg"><MoneyMsgWordmark /></LinkChip>
              <LinkChip href={LINKS.laundr} accent="pink" ariaLabel="Open laundr.me"><LaundrMeWordmark /></LinkChip>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 z-30 transition-all duration-700 ${activeDrawer ? 'pointer-events-none translate-y-12 opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="mx-auto flex max-w-4xl items-end justify-center gap-4 px-6 pb-12 md:gap-12">
          {Object.values(portfolioData).map((node, index) => {
            const Icon = node.id === 'active' ? Layers : node.id === 'pipeline' ? RotateCcw : node.id === 'about' ? User : HardDrive;
            const isCenter = node.id === 'active' || node.id === 'pipeline';
            const isHovered = hoveredNode === node.id;

            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveDrawer(node.id)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="dock-button animate-float group flex flex-col items-center transition-transform duration-500"
                style={{
                  animationDelay: `${index * 0.5}s`,
                  transform: `translateY(${isCenter ? (isDesktop ? -20 : -10) : 0}px) ${getTransform(20)}`
                }}
              >
                <div className={`glass-panel relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition-all duration-500 md:h-20 md:w-20 ${isHovered ? `${node.theme.glow} ${node.theme.border}` : ''}`}>
                  <div className={`absolute inset-0 rounded-full border opacity-0 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 ${node.theme.border}`} />
                  <Icon className={`h-6 w-6 transition-colors duration-300 md:h-7 md:w-7 ${isHovered ? node.theme.text : 'text-gray-400'}`} strokeWidth={1.5} />
                </div>
                <span className={`mt-3 font-serif text-[10px] uppercase tracking-widest transition-colors duration-300 md:mt-4 md:text-sm ${isHovered ? node.theme.text : 'text-gray-500 group-hover:text-gray-300'}`}>
                  {node.title.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        className={`absolute inset-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeDrawer ? 'pointer-events-auto bg-[#050507]/90 opacity-100 backdrop-blur-2xl' : 'pointer-events-none bg-transparent opacity-0'}`}
        onClick={() => setActiveDrawer(null)}
      >
        {activeDrawer && (
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-20 mix-blend-color ${portfolioData[activeDrawer].theme.from} ${portfolioData[activeDrawer].theme.to}`} />
        )}

        <div
          className={`hide-scrollbar absolute right-0 top-0 h-full w-full overflow-y-auto border-l border-white/5 bg-[#0a0a0c]/80 p-6 shadow-2xl backdrop-blur-xl transition-transform delay-100 duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:w-3/4 md:p-16 lg:max-w-4xl ${activeDrawer ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setActiveDrawer(null)}
            className="drawer-close sticky top-0 z-50 float-right mb-8 rounded-full bg-white/5 p-3 transition-colors hover:bg-white/10"
            aria-label="Close drawer"
          >
            <X className="h-6 w-6 text-gray-400 transition-colors group-hover:text-white" />
          </button>

          {activeDrawer && (
            <div className="relative z-10 clear-both pb-24 pt-8 duration-1000 animate-in fade-in slide-in-from-right-8">
              <div className="relative mb-12 md:mb-20">
                <div className={`pointer-events-none absolute -left-4 -top-8 select-none whitespace-nowrap bg-gradient-to-r bg-clip-text font-serif text-[80px] text-transparent opacity-[0.03] md:-left-8 md:text-[120px] ${portfolioData[activeDrawer].theme.from} ${portfolioData[activeDrawer].theme.to}`}>
                  {portfolioData[activeDrawer].title.split(' ')[0]}
                </div>
                <h2 className={`mb-4 bg-gradient-to-r bg-clip-text font-serif text-3xl leading-tight text-transparent drop-shadow-sm md:text-5xl ${portfolioData[activeDrawer].theme.from} ${portfolioData[activeDrawer].theme.to}`}>
                  {portfolioData[activeDrawer].title}
                </h2>
                <div className={`mb-6 h-px w-16 bg-gradient-to-r opacity-50 md:w-24 ${portfolioData[activeDrawer].theme.from} to-transparent`} />
                <p className="max-w-md text-[10px] uppercase leading-relaxed tracking-widest text-gray-400 md:text-xs">
                  {portfolioData[activeDrawer].subtitle}
                </p>
              </div>

              {portfolioData[activeDrawer].type === 'list' ? (
                <div className="space-y-16 md:space-y-24">
                  {portfolioData[activeDrawer].sections.map((section, sectionIndex) => (
                    <div key={section.category} className="relative">
                      <div className="sticky top-0 z-20 mb-6 border-b border-white/5 bg-[#0a0a0c]/90 py-4 backdrop-blur-md md:mb-8">
                        <h3 className="font-serif text-xl tracking-wide text-gray-100 md:text-2xl">{section.category}</h3>
                        {section.description && (
                          <p className="mt-2 text-xs font-light text-gray-500 md:text-sm">{section.description}</p>
                        )}
                      </div>
                      <div className="relative grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 md:gap-y-12">
                        {section.items.map((item, itemIndex) => (
                          <PortfolioCard
                            key={`${sectionIndex}-${item.name}`}
                            item={item}
                            theme={portfolioData[activeDrawer].theme}
                            isOffset={itemIndex % 2 !== 0}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
                  <div className="space-y-12 lg:col-span-2">
                    <div className="space-y-6">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-slate-500/30 bg-slate-800/20">
                        <User className="h-5 w-5 text-slate-300" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl text-gray-100">
                          <ExternalTextLink href={LINKS.topherloring} ariaLabel="Open TopherLoring.com">TopherLoring Industries</ExternalTextLink>
                        </h3>
                        <div className="mb-4 mt-2 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-widest text-gray-400">
                          Private Holding Company
                        </div>
                      </div>
                      <p className="text-sm font-light leading-relaxed text-gray-400">
                        Operated by Christopher Loring Rowden. TopherLoring Industries is a private holding company prioritizing lean architecture, rapid deployment, and in-house execution across a diversified portfolio of technology, consumer goods, and specialized operational ventures.
                      </p>
                    </div>

                    <div className="space-y-6 border-t border-white/5 pt-8">
                      <div className="group flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] transition-colors group-hover:border-slate-500/50">
                          <MapPin className="h-4 w-4 text-gray-500 transition-colors group-hover:text-slate-300" />
                        </div>
                        <div>
                          <h4 className="mb-1 font-serif text-sm text-gray-200">Headquarters</h4>
                          <p className="text-xs font-light text-gray-500">Universal City, TX<br />United States</p>
                        </div>
                      </div>

                      <div className="group flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] transition-colors group-hover:border-slate-500/50">
                          <Mail className="h-4 w-4 text-gray-500 transition-colors group-hover:text-slate-300" />
                        </div>
                        <div>
                          <h4 className="mb-1 font-serif text-sm text-gray-200">Direct Routing</h4>
                          <a href="mailto:inquiries@topherloring.com" className="contact-link text-xs font-light text-gray-500 transition-colors hover:text-slate-300">
                            inquiries@topherloring.com
                          </a>
                        </div>
                      </div>

                      <div className="grid gap-2 pt-2">
                        <LinkChip href={LINKS.topherloring} ariaLabel="Open TopherLoring.com">TopherLoring.com</LinkChip>
                        <LinkChip href={LINKS.moneymsg} accent="cyan" ariaLabel="Open MoneyMsg"><MoneyMsgWordmark /></LinkChip>
                        <LinkChip href={LINKS.laundr} accent="pink" ariaLabel="Open laundr.me"><LaundrMeWordmark /></LinkChip>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3">
                    <div className="relative overflow-hidden rounded-lg border border-white/5 bg-white/[0.02] p-8">
                      <Send className="pointer-events-none absolute -bottom-12 -right-12 h-64 w-64 -rotate-12 text-white/[0.01]" />
                      <form onSubmit={handleContactSubmit} className="relative z-10 space-y-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <div className="space-y-2">
                            <label htmlFor="contact-name" className="text-xs uppercase tracking-widest text-gray-500">Originator</label>
                            <input id="contact-name" name="name" type="text" required placeholder="Name / Entity" className="w-full rounded border border-white/10 bg-black/40 px-4 py-3 text-sm text-gray-200 placeholder-gray-700 transition-all focus:border-slate-400 focus:bg-black/60 focus:outline-none" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="contact-email" className="text-xs uppercase tracking-widest text-gray-500">Return Address</label>
                            <input id="contact-email" name="email" type="email" required placeholder="Email Address" className="w-full rounded border border-white/10 bg-black/40 px-4 py-3 text-sm text-gray-200 placeholder-gray-700 transition-all focus:border-slate-400 focus:bg-black/60 focus:outline-none" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="contact-subject" className="text-xs uppercase tracking-widest text-gray-500">Vector / Subject</label>
                          <input id="contact-subject" name="subject" type="text" required placeholder="Nature of Inquiry" className="w-full rounded border border-white/10 bg-black/40 px-4 py-3 text-sm text-gray-200 placeholder-gray-700 transition-all focus:border-slate-400 focus:bg-black/60 focus:outline-none" />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-gray-500">Transmission</label>
                          <textarea id="contact-message" name="message" required rows="5" placeholder="Enter transmission..." className="w-full resize-none rounded border border-white/10 bg-black/40 px-4 py-3 text-sm text-gray-200 placeholder-gray-700 transition-all focus:border-slate-400 focus:bg-black/60 focus:outline-none" />
                        </div>

                        <button type="submit" className="submit-button flex w-full items-center justify-center gap-3 rounded border border-slate-600/50 bg-slate-800 px-8 py-3 text-xs uppercase tracking-widest text-slate-200 transition-colors hover:bg-slate-700 hover:text-white md:w-auto">
                          <span>Initiate Transmission</span>
                          <Send className="h-4 w-4" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
