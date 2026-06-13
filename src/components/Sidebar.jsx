import React from 'react';

const NAV_ITEMS = [
  { id: 'sec-mecanicas', label: '1. Testes', icon: '🎲' },
  { id: 'sec-atributos', label: '2. Atributos', icon: '📊' },
  { id: 'sec-criacao', label: '3. Criando Aluno', icon: '📝' },
  { id: 'sec-combate', label: '4. Combate', icon: '⚔️' },
  { id: 'sec-grimorio', label: '5. O Grimório', icon: '📖' },
  { id: 'sec-filosofia', label: '6. Arcanas', icon: '🔮' },
  { id: 'sec-condicoes', label: '7. Condições', icon: '⚠️' },
  { id: 'sec-economia', label: '8. Economia', icon: '🎓' },
  { id: 'sec-caminhos', label: '9. Caminhos', icon: '📜' },
  { id: 'sec-casas', label: '10. Casas Acadêmicas', icon: '🏛️' }
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
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl transition-all duration-200 border-l-4 font-medium leading-tight ${
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
