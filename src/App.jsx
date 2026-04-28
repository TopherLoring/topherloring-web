import React, { useState, useEffect, useRef } from 'react';
import { 
  Layers, 
  SmartphoneNfc, 
  BarChart2, 
  BookOpen, 
  Scissors, 
  ShoppingBag, 
  Flame, 
  RotateCcw, 
  Sun, 
  Moon, 
  Monitor, 
  Gift, 
  PartyPopper, 
  Brain, 
  Wrench, 
  Cpu, 
  HardDrive,
  X,
  User,
  MapPin,
  Mail,
  Send
} from 'lucide-react';

const portfolioData = {
  about: {
    id: 'about',
    title: "Leadership",
    subtitle: "Executive overview and direct contact channels.",
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
    title: "Active Operations",
    subtitle: "Units driving IP development, core technology, or active market presence.",
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
        category: "Fintech & Service Infrastructure",
        items: [
          { name: "laundr.me (Core OS)", desc: "A vertically integrated 'Operating System for the Independent Workforce' providing P2P payments, CRM, and talent discovery.", icon: Layers },
          { name: "MoneyMsg", desc: "OS-level Android keyboard (IMS) enabling frictionless payment initiation via deep links directly within messaging apps. (Sub-Product)", icon: SmartphoneNfc }
        ]
      },
      {
        category: "Analytics & Research",
        items: [
          { name: "Scratch That", desc: "Specialized lottery audit and analytics platform. Utilizes statistical models to track game performance and surface objective user probability.", icon: BarChart2 },
          { name: "Biblical Truths Trilogy", desc: "A forensic nonfiction series applying modern analytical frameworks (aerospace dynamics, forensic linguistics) to ancient historical data.", icon: BookOpen }
        ]
      },
      {
        category: "Design & Specialized Apparel",
        items: [
          { name: "Apex Undies", desc: "Premium private-label underwear handling the full lifecycle from conceptual design and in-house manufacturing to global DTC distribution.", icon: Scissors },
          { name: "Bulges & Bottoms", desc: "Curated inclusive apparel boutique utilizing a role-based personalization system (Top/Bottom/Vers/Side).", icon: ShoppingBag },
          { name: "Clstrfck Industries", desc: "High-impact design studio specializing in aggressive product posture and non-traditional branding for niche markets.", icon: Flame }
        ]
      }
    ]
  },
  pipeline: {
    id: 'pipeline',
    title: "Pipeline Registry",
    subtitle: "Conceptual logic awaiting resource allocation and integration with the proprietary e-commerce backend.",
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
        category: "Proprietary E-commerce Ecosystem",
        description: "Autonomous DTC backend and fulfillment engine currently in development to power:",
        items: [
          { name: "UndoHQ", desc: "Rental-friendly home upgrades focusing on reversible, high-yield aesthetic results.", icon: RotateCcw },
          { name: "Luma Reset", desc: "Recovery and wellness brand specializing in cold and red light therapy.", icon: Sun },
          { name: "SlumberLab", desc: "Sleep-engineered products for daily recovery and rest optimization.", icon: Moon },
          { name: "DeskMode", desc: "Functional gear and aesthetic curation for creators and remote work.", icon: Monitor },
          { name: "Heirloom Moments", desc: "Personalized keepsakes designed for high-significance milestones.", icon: Gift },
          { name: "EventLab", desc: "Celebration design and curated supply for standout events.", icon: PartyPopper }
        ]
      },
      {
        category: "Specialized Tools",
        items: [
          { name: "Forget-Me-Not", desc: "AI-assisted memory-harvesting tool for early cognitive decline support and legacy data preservation.", icon: Brain }
        ]
      }
    ]
  },
  legacy: {
    id: 'legacy',
    title: "Legacy Portfolio",
    subtitle: "Stabilized or retired entities; architectural foundations.",
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
        category: "Foundational Architecture",
        items: [
          { name: "Shore Assembly", desc: "Legacy handyman business (localized assembly and household infrastructure).", icon: Wrench },
          { name: "TechSolve NJ", desc: "Legacy PC repair/upgrade node (commercial and residential hardware support).", icon: Cpu },
          { name: "CR Tech Solutions", desc: "Legacy technical consulting and specialized data recovery services.", icon: HardDrive }
        ]
      }
    ]
  }
};

const styleSheet = `
  @keyframes auroraShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .iridescent-text {
    background: linear-gradient(
      to right, 
      #ffffff 0%, 
      #94a3b8 15%, 
      #60a5fa 30%, 
      #c084fc 45%, 
      #f472b6 60%, 
      #fbbf24 75%, 
      #94a3b8 85%, 
      #ffffff 100%
    );
    background-size: 300% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: auroraShift 8s linear infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(1deg); }
  }

  @keyframes slowSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .animate-float { animation: float 10s ease-in-out infinite; }
  .animate-spin-slow { animation: slowSpin 60s linear infinite; }
  .glass-panel { background: rgba(10, 10, 12, 0.7); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return;
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getTransform = (depth, reverse = false) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return 'translate3d(0,0,0)';
    const multiplier = reverse ? -1 : 1;
    return `translate3d(${mousePos.x * depth * multiplier}px, ${mousePos.y * depth * multiplier}px, 0)`;
  };

  const getAmbientGlow = () => {
    if (activeDrawer) return portfolioData[activeDrawer].theme;
    if (hoveredNode) return portfolioData[hoveredNode].theme;
    return { bg: 'bg-white/5' };
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Transmission initiated.");
  };

  const currentTheme = getAmbientGlow();

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen bg-[#050507] text-gray-300 font-sans overflow-hidden selection:bg-white/20 selection:text-white transition-colors duration-1000"
    >
      <style>{styleSheet}</style>

      {/* --- AMBIENT COLOR 3D BACKGROUND --- */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-all duration-1000 ease-out ${activeDrawer ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
        style={{ transform: getTransform(40, true) }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,0,0,0)_0%,rgba(5,5,7,1)_80%)] z-10" />
        
        <div className={`absolute top-0 left-1/4 w-[50vw] h-[50vw] rounded-full blur-[120px] transition-all duration-1000 opacity-40 ${hoveredNode === 'active' ? 'bg-fuchsia-600 scale-125' : hoveredNode ? 'opacity-0' : 'bg-purple-900/30'}`} />
        <div className={`absolute bottom-0 right-1/4 w-[60vw] h-[60vw] rounded-full blur-[150px] transition-all duration-1000 opacity-40 ${hoveredNode === 'pipeline' ? 'bg-cyan-600 scale-125' : hoveredNode ? 'opacity-0' : 'bg-cyan-900/30'}`} />
        <div className={`absolute top-1/3 right-1/3 w-[40vw] h-[40vw] rounded-full blur-[100px] transition-all duration-1000 opacity-40 ${hoveredNode === 'legacy' ? 'bg-amber-600 scale-125' : hoveredNode ? 'opacity-0' : 'bg-amber-900/20'}`} />
        <div className={`absolute top-1/4 left-1/4 w-[45vw] h-[45vw] rounded-full blur-[130px] transition-all duration-1000 opacity-30 ${hoveredNode === 'about' ? 'bg-slate-500 scale-125' : hoveredNode ? 'opacity-0' : 'bg-slate-800/20'}`} />

        <div className={`absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[800px] md:h-[800px] border rounded-full animate-spin-slow transition-colors duration-700 z-0 ${currentTheme.border || 'border-white/5'}`} />
        <div className={`absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] h-[180vw] md:w-[1200px] md:h-[1200px] border rounded-full animate-spin-slow transition-colors duration-700 z-0 delay-100 ${currentTheme.border || 'border-white/[0.02]'}`} style={{ animationDirection: 'reverse', animationDuration: '90s' }} />
      </div>

      {/* --- CENTRAL HUB (Brand Mark & Summary) --- */}
      <div 
        className={`absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none ${
          activeDrawer ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
        }`}
        style={{ transform: `translate(-50%, -50%) ${getTransform(15)}` }}
      >
        <div className="flex flex-col items-center animate-float w-full max-w-[90vw]">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4">
             <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
             {/* Iridescent Crest */}
             <div className="border border-white/50 rounded-full p-1 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
               <div className="border border-white/50 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent overflow-hidden">
                 <span className="font-serif iridescent-text text-sm md:text-lg font-bold">R</span>
               </div>
             </div>
             <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          </div>
          
          {/* Iridescent Main Logo */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl tracking-wider text-center w-full iridescent-text drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] font-medium">
            TopherLoring
          </h1>
          
          <div className="flex items-center gap-3 md:gap-6 mt-4 md:mt-6">
            <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-gray-500/50"></div>
            <h2 className="text-[10px] md:text-xl tracking-[0.3em] md:tracking-[0.4em] uppercase text-gray-400 font-light whitespace-nowrap">
              Industries
            </h2>
            <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-gray-500/50"></div>
          </div>

          <div className="mt-10 md:mt-12 flex flex-col items-center max-w-[85vw] md:max-w-xl text-center pointer-events-auto">
            <p className="text-[11px] md:text-sm text-gray-400 font-light tracking-wide leading-relaxed opacity-90">
              A private holding company driving active IP development, fintech infrastructure, and proprietary e-commerce ecosystems through lean architecture and rapid in-house execution.
            </p>
          </div>
        </div>
      </div>

      {/* --- NAVIGATION DOCK (Bottom Anchored) --- */}
      <div className={`absolute bottom-0 left-0 right-0 z-30 transition-all duration-700 ${activeDrawer ? 'opacity-0 pointer-events-none translate-y-12' : 'opacity-100 translate-y-0'}`}>
        <div className="max-w-4xl mx-auto flex justify-center items-end gap-4 md:gap-12 pb-12 px-6">
          {Object.values(portfolioData).map((node, i) => {
            const Icon = node.id === 'active' ? Layers : node.id === 'pipeline' ? RotateCcw : node.id === 'about' ? User : HardDrive;
            const isCenter = node.id === 'active' || node.id === 'pipeline';
            const isHovered = hoveredNode === node.id;
            
            return (
              <button 
                key={node.id}
                onClick={() => setActiveDrawer(node.id)} 
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`group flex flex-col items-center transition-transform duration-500 animate-float`}
                style={{ 
                  animationDelay: `${i * 0.5}s`,
                  transform: `translateY(${isCenter ? (typeof window !== 'undefined' && window.innerWidth >= 768 ? -20 : -10) : 0}px) ${getTransform(20)}`
                }}
              >
                <div className={`rounded-full glass-panel flex items-center justify-center relative border border-white/10 transition-all duration-500 w-14 h-14 md:w-20 md:h-20 ${isHovered ? node.theme.glow + ' ' + node.theme.border : ''}`}>
                   <div className={`absolute inset-0 rounded-full border opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ${node.theme.border}`}></div>
                   <Icon className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-300 ${isHovered ? node.theme.text : 'text-gray-400'}`} strokeWidth={1.5} />
                </div>
                <span className={`font-serif tracking-widest uppercase transition-colors duration-300 mt-3 md:mt-4 text-[10px] md:text-sm ${isHovered ? node.theme.text : 'text-gray-500 group-hover:text-gray-300'}`}>
                  {node.title.split(' ')[0]}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* --- MODAL DRAWER --- */}
      <div 
        className={`absolute inset-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          activeDrawer 
            ? 'bg-[#050507]/90 backdrop-blur-2xl pointer-events-auto opacity-100' 
            : 'bg-transparent pointer-events-none opacity-0'
        }`}
        onClick={() => setActiveDrawer(null)}
      >
        {activeDrawer && (
          <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${portfolioData[activeDrawer].theme.from} ${portfolioData[activeDrawer].theme.to} mix-blend-color pointer-events-none`} />
        )}
        
        <div 
          className={`absolute top-0 right-0 h-full w-full md:w-3/4 lg:max-w-4xl bg-[#0a0a0c]/80 border-l border-white/5 shadow-2xl p-6 md:p-16 overflow-y-auto hide-scrollbar transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] delay-100 backdrop-blur-xl ${
            activeDrawer ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={() => setActiveDrawer(null)}
            className="sticky top-0 float-right p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors group z-50 mb-8"
          >
            <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          </button>

          {activeDrawer && (
            <div className="relative z-10 pt-8 pb-24 clear-both animate-in fade-in duration-1000 slide-in-from-right-8">
              <div className="mb-12 md:mb-20 relative">
                <div className={`absolute -left-4 md:-left-8 -top-8 text-[80px] md:text-[120px] font-serif select-none pointer-events-none whitespace-nowrap opacity-[0.03] bg-gradient-to-r ${portfolioData[activeDrawer].theme.from} ${portfolioData[activeDrawer].theme.to} bg-clip-text text-transparent`}>
                  {portfolioData[activeDrawer].title.split(' ')[0]}
                </div>
                <h2 className={`font-serif text-3xl md:text-5xl mb-4 leading-tight bg-gradient-to-r ${portfolioData[activeDrawer].theme.from} ${portfolioData[activeDrawer].theme.to} bg-clip-text text-transparent drop-shadow-sm`}>
                  {portfolioData[activeDrawer].title}
                </h2>
                <div className={`h-[1px] w-16 md:w-24 bg-gradient-to-r ${portfolioData[activeDrawer].theme.from} to-transparent mb-6 opacity-50`}></div>
                <p className="text-gray-400 tracking-widest uppercase text-[10px] md:text-xs max-w-md leading-relaxed">
                  {portfolioData[activeDrawer].subtitle}
                </p>
              </div>

              {portfolioData[activeDrawer].type === 'list' ? (
                <div className="space-y-16 md:space-y-24">
                  {portfolioData[activeDrawer].sections.map((section, idx) => (
                    <div key={idx} className="relative">
                      <div className="sticky top-0 bg-[#0a0a0c]/90 backdrop-blur-md z-20 py-4 mb-6 md:mb-8 border-b border-white/5">
                        <h3 className="font-serif text-xl md:text-2xl text-gray-100 tracking-wide">{section.category}</h3>
                        {section.description && <p className="text-gray-500 text-xs md:text-sm mt-2 font-light">{section.description}</p>}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-12 relative">
                        {section.items.map((item, itemIdx) => {
                          const Icon = item.icon;
                          const isOffset = itemIdx % 2 !== 0;
                          return (
                            <div key={itemIdx} className={`group relative p-6 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.03] transition-all duration-500 rounded-lg overflow-hidden hover:${portfolioData[activeDrawer].theme.border} ${isOffset ? 'md:mt-12' : ''}`}>
                              <Icon className={`absolute -bottom-4 -right-4 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 transform group-hover:rotate-12 group-hover:scale-110 ${portfolioData[activeDrawer].theme.text}`} strokeWidth={1} />
                              <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-4 md:mb-6 bg-black/50 transition-colors duration-500 group-hover:${portfolioData[activeDrawer].theme.bg} group-hover:${portfolioData[activeDrawer].theme.border}`}>
                                  <Icon className={`w-5 h-5 text-gray-400 transition-colors group-hover:${portfolioData[activeDrawer].theme.text}`} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-serif text-base md:text-lg text-gray-200 mb-2 md:mb-3">{item.name}</h4>
                                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light transition-colors duration-500 group-hover:text-gray-300">{item.desc}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                  <div className="lg:col-span-2 space-y-12">
                    <div className="space-y-6">
                      <div className="w-12 h-12 rounded-full border border-slate-500/30 flex items-center justify-center bg-slate-800/20 mb-6"><User className="w-5 h-5 text-slate-300" /></div>
                      <div>
                        <h3 className="font-serif text-2xl text-gray-100">TopherLoring Industries</h3>
                        <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] tracking-widest uppercase text-gray-400 mt-2 mb-4">Private Holding Company</div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed font-light">Operated by Christopher Loring Rowden. TopherLoring Industries is a private holding company prioritizing lean architecture, rapid deployment, and in-house execution across a diversified portfolio of technology, consumer goods, and specialized operational ventures.</p>
                    </div>
                    <div className="space-y-6 border-t border-white/5 pt-8">
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.02] group-hover:border-slate-500/50 transition-colors shrink-0"><MapPin className="w-4 h-4 text-gray-500 group-hover:text-slate-300" /></div>
                        <div><h4 className="text-sm font-serif text-gray-200 mb-1">Headquarters</h4><p className="text-xs text-gray-500 font-light">Universal City, TX<br/>United States</p></div>
                      </div>
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.02] group-hover:border-slate-500/50 transition-colors shrink-0"><Mail className="w-4 h-4 text-gray-500 group-hover:text-slate-300" /></div>
                        <div><h4 className="text-sm font-serif text-gray-200 mb-1">Direct Routing</h4><a href="mailto:inquiries@topherloring.com" className="text-xs text-gray-500 font-light hover:text-slate-300">inquiries@topherloring.com</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="p-8 bg-white/[0.02] border border-white/5 rounded-lg relative overflow-hidden">
                      <Send className="absolute -bottom-12 -right-12 w-64 h-64 text-white/[0.01] transform -rotate-12 pointer-events-none" />
                      <form onSubmit={handleContactSubmit} className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2"><label className="text-xs tracking-widest uppercase text-gray-500">Originator</label><input type="text" required placeholder="Name / Entity" className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-slate-400 transition-all" /></div>
                          <div className="space-y-2"><label className="text-xs tracking-widest uppercase text-gray-500">Return Address</label><input type="email" required placeholder="Email Address" className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-slate-400 transition-all" /></div>
                        </div>
                        <div className="space-y-2"><label className="text-xs tracking-widest uppercase text-gray-500">Vector / Subject</label><input type="text" required placeholder="Nature of Inquiry" className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-slate-400 transition-all" /></div>
                        <div className="space-y-2"><label className="text-xs tracking-widest uppercase text-gray-500">Transmission</label><textarea required rows="5" placeholder="Enter transmission..." className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-slate-400 transition-all resize-none"></textarea></div>
                        <button type="submit" className="w-full md:w-auto px-8 py-3 bg-slate-800 text-slate-200 text-xs tracking-widest uppercase rounded hover:bg-slate-700 border border-slate-600/50 flex items-center justify-center gap-3">
                          <span>Initiate Transfer</span><Send className="w-4 h-4" />
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