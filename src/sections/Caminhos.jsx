import React, { useState } from 'react';
import { CAMINHOS_DATA, ESCOLAS_GROUPING } from '../data/caminhosData';

export default function Caminhos() {
  const [activeEscola, setActiveEscola] = useState('guerra');
  const [activeCaminho, setActiveCaminho] = useState('guerreiro');

  const selectEscola = (escolaKey) => {
    setActiveEscola(escolaKey);
    const firstCaminho = ESCOLAS_GROUPING[escolaKey].caminhos[0];
    setActiveCaminho(firstCaminho);
  };

  const switchCaminho = (caminhoKey) => {
    setActiveCaminho(caminhoKey);
  };

  const getSchoolIcon = (schoolKey) => {
    switch (schoolKey) {
      case 'guerra': return '⚔️';
      case 'elemental': return '🔥';
      case 'vinculos': return '🔮';
      case 'artifices': return '⚙️';
      case 'vida': return '🧬';
      case 'mente': return '🎭';
      default: return '🛡️';
    }
  };

  // Helper to get styling based on theme color
  const getThemeClasses = (theme) => {
    switch (theme) {
      case 'indigo':
        return {
          borderActive: 'border-indigo-500 bg-indigo-50/10 shadow-md',
          hover: 'hover:border-indigo-500 hover:shadow-lg',
          svgBg: 'bg-indigo-500/5 group-hover:bg-indigo-500/10 text-indigo-600',
          textColor: 'text-indigo-600 group-hover:text-indigo-800',
          btnActive: 'bg-white border-indigo-200 text-indigo-900 shadow-sm',
          accentText: 'text-indigo-500',
          accentBg: 'bg-indigo-50/30 border-indigo-100/40',
          accentBgMedium: 'bg-indigo-50/50 border-indigo-100/60',
          accentBgDark: 'bg-indigo-50/70 border-indigo-200/50',
          bulletColor: 'bg-indigo-500'
        };
      case 'cyan':
        return {
          borderActive: 'border-cyan-500 bg-cyan-50/10 shadow-md',
          hover: 'hover:border-cyan-500 hover:shadow-lg',
          svgBg: 'bg-cyan-500/5 group-hover:bg-cyan-500/10 text-cyan-600',
          textColor: 'text-cyan-600 group-hover:text-cyan-800',
          btnActive: 'bg-white border-cyan-200 text-cyan-900 shadow-sm',
          accentText: 'text-cyan-500',
          accentBg: 'bg-cyan-50/30 border-cyan-100/40',
          accentBgMedium: 'bg-cyan-50/50 border-cyan-100/60',
          accentBgDark: 'bg-cyan-50/70 border-cyan-200/50',
          bulletColor: 'bg-cyan-500'
        };
      case 'emerald':
        return {
          borderActive: 'border-emerald-500 bg-emerald-50/10 shadow-md',
          hover: 'hover:border-emerald-500 hover:shadow-lg',
          svgBg: 'bg-emerald-500/5 group-hover:bg-emerald-500/10 text-emerald-600',
          textColor: 'text-emerald-600 group-hover:text-emerald-800',
          btnActive: 'bg-white border-emerald-200 text-emerald-900 shadow-sm',
          accentText: 'text-emerald-500',
          accentBg: 'bg-emerald-50/30 border-emerald-100/40',
          accentBgMedium: 'bg-emerald-50/50 border-emerald-100/60',
          accentBgDark: 'bg-emerald-50/70 border-emerald-200/50',
          bulletColor: 'bg-emerald-500'
        };
      case 'purple':
      default:
        return {
          borderActive: 'border-purple-500 bg-purple-50/10 shadow-md',
          hover: 'hover:border-purple-500 hover:shadow-lg',
          svgBg: 'bg-purple-500/5 group-hover:bg-purple-500/10 text-purple-600',
          textColor: 'text-purple-600 group-hover:text-purple-800',
          btnActive: 'bg-white border-purple-200 text-purple-900 shadow-sm',
          accentText: 'text-purple-500',
          accentBg: 'bg-purple-50/30 border-purple-100/40',
          accentBgMedium: 'bg-purple-50/50 border-purple-100/60',
          accentBgDark: 'bg-purple-50/70 border-purple-200/50',
          bulletColor: 'bg-purple-500'
        };
    }
  };

  const currentCaminho = CAMINHOS_DATA[activeCaminho];
  const currentTheme = getThemeClasses(currentCaminho.theme);

  return (
    <section id="sec-caminhos" className="content-section">
      <h2 className="chapter-title">
        <span className="chapter-number">Ap. B</span>
        Escolas, Caminhos e Habilidades
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed font-sans">
        O desenvolvimento dos personagens é feito através de <strong>Caminhos Tradicionais</strong> associados às Escolas Acadêmicas. 
        <strong> Magias de Caminho só podem ser aprendidas ganhando Níveis no respectivo Caminho. Ao ganhar um Nível de Caminho, o aluno pode escolher uma das seguintes opções para aquele Caminho: aprender uma nova Habilidade (no Grau I), evoluir/aprimorar o Grau (para Grau II ou Grau III) de uma Habilidade que já possui, aprender uma nova Magia de Caminho (no Nível 1), ou melhorar/aprimorar uma Magia de Caminho já aprendida. Não há ordem ou nível pré-requisito fixo para adquirir as habilidades ou magias de um Caminho.</strong>
      </p>

      {/* Menu de Abas das Escolas */}
      <div className="flex flex-wrap border-b border-slate-200 gap-1.5 mt-6 mb-6 font-sans bg-slate-50/50 p-1.5 rounded-xl">
        {Object.entries(ESCOLAS_GROUPING).map(([key, data]) => {
          const isActive = activeEscola === key;
          const firstCaminhoKey = data.caminhos[0];
          const firstCaminho = CAMINHOS_DATA[firstCaminhoKey];
          const schoolTheme = getThemeClasses(firstCaminho.theme);

          return (
            <button
              key={key}
              onClick={() => selectEscola(key)}
              className={`flex-1 min-w-[125px] py-3 px-3 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 border border-transparent shadow-xs ${
                isActive
                  ? `${schoolTheme.btnActive} border-slate-200/80 font-black`
                  : 'text-gray-500 hover:text-indigo-650 hover:bg-white/50'
              }`}
            >
              <span className="text-base">{getSchoolIcon(key)}</span>
              <span className="truncate">{data.name.replace('Escola da ', '').replace('Escola dos ', '').replace('Escola do ', '').replace('Escola ', '')}</span>
            </button>
          );
        })}
      </div>
f
      {/* Explorador de Talentos Dinâmico */}
      <div id="talent-explorer-section" className="mt-8 border border-indigo-100 rounded-xl overflow-hidden bg-slate-50 shadow-md transition-all duration-300">
        
        {/* Banner do Explorador com base no Caminho Ativo */}
        <div className={`text-white p-6 md:p-8 transition-colors duration-300 bg-gradient-to-r ${currentCaminho.bgGradient}`}>
          <div className="flex items-center gap-3">
            <div id="explorer-icon" className={`p-2.5 rounded-lg border shadow-inner flex items-center justify-center text-2xl bg-white/10 border-white/20`}>
              {currentCaminho.icon}
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider text-white/70 uppercase block mb-0.5">
                Caminho do Personagem
              </span>
              <h3 id="explorer-title" className="text-2xl md:text-3xl font-bold font-serif text-white leading-none">
                {currentCaminho.name}
              </h3>
            </div>
          </div>
          <p id="explorer-desc" className="text-gray-200 text-sm md:text-base leading-relaxed mt-4 border-t border-white/10 pt-4 font-sans font-light">
            {currentCaminho.desc}
          </p>
        </div>

        {/* Sub-Navegação interna (Abas dos caminhos pertencentes à Escola ativa) */}
        <div id="nav-escola-specs" className={`caminho-nav p-2 flex flex-wrap gap-2 border-b bg-white border-gray-100`}>
          {ESCOLAS_GROUPING[activeEscola].caminhos.map((caminhoKey) => {
            const path = CAMINHOS_DATA[caminhoKey];
            const isCaminhoActive = activeCaminho === caminhoKey;
            const pathTheme = getThemeClasses(path.theme);

            const btnClass = isCaminhoActive
              ? pathTheme.btnActive
              : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70';

            const subColor = isCaminhoActive ? pathTheme.accentText : 'text-gray-400';

            return (
              <button
                key={caminhoKey}
                onClick={() => switchCaminho(caminhoKey)}
                id={`tab-${caminhoKey}`}
                className={`flex-1 min-w-[140px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${btnClass}`}
              >
                <span className="font-serif text-base flex items-center gap-1.5">
                  <span>{path.icon}</span>
                  <span>{path.name}</span>
                </span>
                <span className={`text-[9px] uppercase tracking-wider font-sans font-normal ${subColor}`}>
                  {path.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Conteúdo Dinâmico dos Caminhos (Posturas, Habilidades, Magias, Totens, etc) */}
        <div className="p-6 md:p-8 bg-white space-y-8">
          {currentCaminho.blocks && currentCaminho.blocks.map((block, bIdx) => (
            <div key={bIdx} className="space-y-4">
              <h4 className="font-serif font-bold text-2xl text-magic-950 border-b border-gray-150 pb-2 mb-3 flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${currentTheme.bulletColor}`} />
                {block.title}
              </h4>
              
              {block.desc && (
                <p className="text-sm text-gray-650 leading-relaxed font-sans mb-3">{block.desc}</p>
              )}

              {/* Stances Block */}
              {block.type === 'postures' && block.items && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {block.items.map((item, idx) => (
                    <div key={idx} className={`border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between ${currentTheme.accentBg}`}>
                      <div>
                        <h5 className="font-bold text-magic-950 text-base mb-2 flex items-center gap-1.5 font-serif">
                          <span className={`w-2 h-2 rounded-full ${currentTheme.bulletColor}`} />
                          {item.name}
                        </h5>
                        <p className="text-xs text-gray-700 leading-relaxed font-sans">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Beast Stats Block */}
              {block.type === 'beast_stats' && block.stats && (
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 shadow-sm max-w-md font-sans">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🐾</span>
                    <h5 className="font-bold text-lg text-magic-900 font-serif">Companheiro Bestial</h5>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white border border-gray-150 p-2.5 rounded-lg text-center">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Vida</span>
                      <span className="font-serif text-lg font-bold text-emerald-700">{block.stats.hp}</span>
                    </div>
                    <div className="bg-white border border-gray-150 p-2.5 rounded-lg text-center">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Físico</span>
                      <span className="font-serif text-lg font-bold text-gray-800">{block.stats.fisico}</span>
                    </div>
                    <div className="bg-white border border-gray-150 p-2.5 rounded-lg text-center">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Mental</span>
                      <span className="font-serif text-lg font-bold text-gray-800">{block.stats.mental}</span>
                    </div>
                    <div className="bg-white border border-gray-150 p-2.5 rounded-lg text-center">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Social / Magia</span>
                      <span className="font-serif text-xs font-bold text-gray-800">Soc {block.stats.social} | Mag {block.stats.magia}</span>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-150 p-3 rounded-lg text-xs text-gray-700 leading-normal">
                    <strong>Ações por Turno:</strong> {block.stats.actions}
                  </div>
                </div>
              )}

              {/* Contract Block */}
              {block.type === 'contract' && (
                <div className={`border rounded-xl p-5 shadow-xs text-sm leading-relaxed ${currentTheme.accentBg}`}>
                  <p className="text-gray-700 font-sans">{block.desc}</p>
                </div>
              )}

              {/* Cartomante Deck Table Block */}
              {block.type === 'deck' && block.rows && (
                <div className="space-y-4 font-sans">
                  <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm bg-white">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-slate-700 text-xs font-bold font-sans border-b border-slate-200">
                          <th className="p-3">Resultado no d12</th>
                          <th className="p-3">Tipo de Carta</th>
                          <th className="p-3">Efeito do Saque</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs text-gray-700">
                        {block.rows.map((row, idx) => (
                          <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                            <td className="p-3 font-bold text-magic-950 font-serif text-sm">{row.roll}</td>
                            <td className="p-3">
                              <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                row.roll === '12' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                                row.roll === '6 a 11' ? 'bg-indigo-100 text-indigo-800 border border-indigo-200' :
                                'bg-rose-100 text-rose-800 border border-rose-200'
                              }`}>
                                {row.type}
                              </span>
                            </td>
                            <td className="p-3">
                              <div className="leading-relaxed">{row.effect}</div>
                              {row.subChoices && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 pl-2 border-l-2 border-amber-300">
                                  {row.subChoices.map((choice, cIdx) => (
                                    <div key={cIdx} className="bg-amber-50/40 border border-amber-100 p-2 rounded text-[11px] leading-relaxed">
                                      <strong>• {choice.name}:</strong> {choice.desc}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Totems Block */}
              {block.type === 'totems' && block.items && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {block.items.map((item, idx) => (
                    <div key={idx} className={`border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between ${currentTheme.accentBg}`}>
                      <div>
                        <h5 className="font-bold text-magic-950 text-base mb-2 flex items-center gap-1.5 font-serif">
                          <span className="text-sm">🪘</span>
                          {item.name}
                        </h5>
                        <p className="text-xs text-gray-700 leading-relaxed font-sans">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Spells or Abilities Block */}
              {(block.type === 'spells' || block.type === 'abilities') && block.items && (
                <div className="space-y-4">
                  {block.items.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-slate-300 hover:bg-slate-50/50 transition-all duration-250 shadow-sm">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <h5 className="font-bold text-lg text-magic-900 font-serif flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${currentTheme.bulletColor}`} />
                          {item.name}
                        </h5>
                        {item.details && (
                          <span className="bg-indigo-50 border border-indigo-200/60 text-indigo-800 text-[10px] font-bold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm font-sans uppercase tracking-wide">
                            {item.details}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-700 font-sans leading-relaxed">{item.desc}</p>
                      
                      {/* Sub-levels inside spell/ability */}
                      {item.levels && (
                        <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-normal">
                          {item.levels.map((level, lIdx) => (
                            <div key={lIdx} className={`rounded-lg p-2.5 ${
                              lIdx === 0 ? currentTheme.accentBg :
                              lIdx === 1 ? currentTheme.accentBgMedium :
                              currentTheme.accentBgDark
                            }`}>
                              <span className="font-bold text-gray-900 block mb-1">{level.name}</span>
                              <p className="text-gray-700">{level.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Improvements */}
                      {item.improvements && (
                        <div className="mt-2 text-xs bg-amber-50 border border-amber-100 text-amber-900 px-3 py-2 rounded-lg leading-relaxed font-sans">
                          <strong>Melhorias:</strong> {item.improvements}
                        </div>
                      )}
                      
                      {/* Sub-effects */}
                      {item.effects && (
                        <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-normal">
                          {item.effects.map((eff, eIdx) => (
                            <div key={eIdx} className={`rounded-lg p-2.5 ${currentTheme.accentBg}`}>
                              <strong className="text-gray-900 block mb-1 font-serif">{eff.name}</strong>
                              <p className="text-gray-755 font-sans">{eff.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Arcana (Signature Ability) Block */}
              {block.type === 'arcana' && block.items && (
                <div className="space-y-4">
                  {block.items.map((item, idx) => (
                    <div key={idx} className="border border-amber-300/80 rounded-xl p-6 bg-gradient-to-br from-amber-50/20 to-orange-50/10 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)] transition-all duration-300 shadow-md relative overflow-hidden font-sans">
                      {/* Decorative background flare */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <h5 className="font-bold text-xl text-amber-950 font-serif flex items-center gap-2">
                          <span className="text-xl">🌟</span>
                          {item.name}
                        </h5>
                        {item.details && (
                          <span className="bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-extrabold px-3 py-1 rounded flex items-center gap-1.5 shadow-sm uppercase tracking-wider">
                            {item.details}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-800 leading-relaxed border-t border-amber-150/60 pt-3 mt-2 font-sans">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
