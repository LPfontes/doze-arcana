import React, { useState } from 'react';

const NAV_ITEMS = [
  { type: 'header', label: 'Parte I: Mecânicas' },
  { id: 'sec-mecanicas', label: '1. Testes de Atributo', icon: '🎲' },
  { id: 'sec-combate', label: '2. Combate e Recursos', icon: '⚔️' },
  { id: 'sec-economia', label: '3. Economia Escolar', icon: '🎓' },
  { type: 'header', label: 'Parte II: Personagens' },
  { id: 'sec-criacao', label: '4. Ficha & Raças', icon: '📝' },
  { id: 'sec-atributos', label: '6. Atributos & Perícias', icon: '📊' },
  { id: 'sec-casas', label: '7. Casas Acadêmicas', icon: '🏛️' },
  { type: 'header', label: 'Parte III: Magia' },
  { id: 'sec-filosofia', label: '8. As Doze Arcanas', icon: '🔮' },
  { id: 'sec-grimorio', label: '9. O Grimório', icon: '📖' },
  { type: 'header', label: 'Apêndices' },
  { id: 'sec-caminhos', label: 'Apêndice B: Caminhos', icon: '📜' },
  { id: 'sec-condicoes', label: 'Apêndice C: Condições', icon: '⚠️' }
];

export default function MobileNav({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = (val) => {
    setIsOpen(val);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      setTimeout(() => {
        targetEl.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <>
      {/* Mobile Floating Button */}
      <button
        onClick={() => toggleNav(true)}
        className="xl:hidden fixed bottom-6 right-6 w-14 h-14 bg-magic-900 text-white rounded-full shadow-2xl z-40 border border-indigo-400/30 flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none"
        title="Abrir Menu"
      >
        🧭
      </button>

      {/* Mobile Navigation Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => toggleNav(false)}
      >
        {/* Drawer Panel */}
        <div
          className={`fixed top-0 right-0 w-72 h-full bg-white shadow-2xl p-6 flex flex-col transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-6 font-sans">
            <h3 className="font-serif font-bold text-lg text-magic-900 flex items-center gap-2">
              🧭 Navegação
            </h3>
            <button
              onClick={() => toggleNav(false)}
              className="text-gray-400 hover:text-gray-600 focus:outline-none text-xl font-sans font-semibold"
            >
              ✕
            </button>
          </div>

          {/* Links inside Drawer */}
          <nav className="space-y-1.5 flex-1 overflow-y-auto font-sans">
            {NAV_ITEMS.map((item, index) => {
              if (item.type === 'header') {
                return (
                  <div
                    key={`header-${index}`}
                    className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mt-4 mb-2 first:mt-0 px-3 select-none"
                  >
                    {item.label}
                  </div>
                );
              }
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`flex items-center gap-3 px-3 py-3 text-sm rounded-xl transition-all duration-200 border-l-4 font-medium leading-tight ${
                    isActive
                      ? 'text-indigo-900 bg-indigo-50/70 border-indigo-600 font-semibold'
                      : 'text-gray-600 border-transparent hover:bg-indigo-50/50 hover:text-indigo-900'
                  }`}
                >
                  <span className="text-base select-none">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
