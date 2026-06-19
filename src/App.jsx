import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import Toast from './components/Toast';

// Import all 10 sections of the rulebook
import Introduction from './sections/Introduction';
import Attributes from './sections/Attributes';
import Combate from './sections/Combate';
import Grimorio from './sections/Grimorio';
import Condicoes from './sections/Condicoes';
import Economia from './sections/Economia';
import Caminhos from './sections/Caminhos';
import Casas from './sections/Casas';
import Arcanas from './sections/Arcanas';
import CriacaoAluno from './sections/CriacaoAluno';

function App() {
  const [activeSection, setActiveSection] = useState('sec-mecanicas');
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
  };

  // Scrollspy to track viewport section with absolute position accuracy
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.content-section');
      const headerOffset = 140; // sticky header height + safety buffer

      let currentSection = 'sec-mecanicas';
      let closestSection = 'sec-mecanicas';
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        
        // 1. Threshold checking: Last section whose top has scrolled past the headerOffset line
        if (rect.top <= headerOffset) {
          currentSection = section.id;
        }

        // 2. Proximity checking: Track which section is closest to the headerOffset line overall
        const distance = Math.abs(rect.top - headerOffset);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section.id;
        }
      });

      // Prefer the threshold matched section, fall back to the closest one in view
      setActiveSection(currentSection || closestSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once initially to set correct state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative font-sans">
      
      {/* Premium Background Aesthetics: Glowing magical mesh gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 blur-[140px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-900/10 blur-[170px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[-20%] w-[40%] h-[40%] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* Header Bar */}
      <header className="sticky top-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 z-30 transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl select-none">🔮</span>
            <div>
              <h1 className="font-serif font-black text-lg md:text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-200 leading-none">
                DOZE ARCANAS
              </h1>
              <span className="text-[9px] uppercase tracking-widest font-bold text-indigo-400 block mt-0.5 font-sans">
                Grimório & Guia de Regras Oficial
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-sans border-l border-slate-800 pl-3 hidden sm:inline select-none">
              Versão 1.0.0
            </span>
          </div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 py-8 flex-1 z-10 relative">
        
        {/* Content Section Column — offset right on xl to clear fixed sidebar */}
        <main className="xl:ml-[312px] bg-white shadow-2xl rounded-2xl xl:rounded-3xl overflow-hidden border border-gray-200 p-6 md:p-12 text-gray-700 leading-relaxed">
          
          <p className="text-lg mb-8 italic text-center text-gray-600 font-sans">
            O <strong>Doze Arcanas</strong> é um sistema de RPG focado em aventuras dentro de escolas de magia e mistérios arcanos. O núcleo mecânico do jogo utiliza rolagens de 2d6+, combinando quatro atributos principais e doze perícias para definir as aptidões dos personagens.
          </p>

          <hr className="my-8 border-gray-200" />
          
          <Introduction />
          <Combate />
          <Economia />
          <CriacaoAluno />
          <Attributes />
          <Casas />
          <Arcanas />
          <Grimorio />
          <Caminhos />
          <Condicoes />

        </main>
      </div>

      {/* Floating elements */}
      <Sidebar activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default App;
