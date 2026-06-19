import React from 'react';

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

export default function Sidebar({ activeSection }) {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside className="hidden xl:block fixed top-20 left-[max(1rem,calc((100vw-1400px)/2+2rem))] w-[280px] bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-indigo-100 shadow-xl overflow-y-auto max-h-[calc(100vh-6rem)] z-20">
      <h3 className="font-serif font-bold text-lg text-magic-900 mb-4 pb-2 border-b border-indigo-100 flex items-center gap-2">
        🧭 Navegação
      </h3>
      <nav className="space-y-1">
        {NAV_ITEMS.map((item, index) => {
          if (item.type === 'header') {
            return (
              <div
                key={`header-${index}`}
                className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mt-4 mb-2 first:mt-0 px-3 select-none font-sans"
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
              onClick={(e) => handleClick(e, item.id)}
              className={`flex items-center gap-3 px-3 py-2 text-sm rounded-xl transition-all duration-200 border-l-4 font-medium leading-tight ${
                isActive
                  ? 'text-indigo-900 bg-indigo-50/70 border-indigo-600 font-semibold'
                  : 'text-gray-500 border-transparent hover:text-indigo-900 hover:bg-indigo-50/50'
              }`}
            >
              <span className="text-base select-none">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
