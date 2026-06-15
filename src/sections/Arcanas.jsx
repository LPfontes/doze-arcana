import React, { useState } from 'react';
import { FEITICOS_BY_ARCANA } from '../data/feiticos';

export default function Arcanas() {
    const [selectedArcana, setSelectedArcana] = useState('fogo');

    // Metadata for each Arcana to display in the explorer
    const arcanaMeta = {
        fogo: { name: 'Fogo', icon: '🔥', radical: 'Ign', type: 'Elemental', themeClass: 'bg-orange-50 text-orange-600 border-orange-200', desc: 'Regue a energia térmica, combustão e destruição pura. Ideal para combatentes e transmutadores ofensivos.' },
        agua: { name: 'Água', icon: '💧', radical: 'Flu', type: 'Elemental', themeClass: 'bg-blue-50 text-blue-600 border-blue-200', desc: 'Compreende a fluidez, adaptação e pressão física da água e do gelo. Comum em técnicas de suporte e controle.' },
        terra: { name: 'Terra', icon: '⛰️', radical: 'Ro', type: 'Elemental', themeClass: 'bg-amber-50 text-amber-700 border-amber-200', desc: 'Governa a estabilidade, solidez e defesa mineral. Focado em erguer barreiras e limitar o avanço inimigo.' },
        vento: { name: 'Vento', icon: '💨', radical: 'Aer', type: 'Elemental', themeClass: 'bg-cyan-50 text-cyan-600 border-cyan-200', desc: 'Controla a dinâmica do ar, erosão e liberdade cinética. Fornece alta mobilidade e dispersão tática.' },
        luz: { name: 'Luz', icon: '☀️', radical: 'Lit', type: 'Elemental', themeClass: 'bg-yellow-50 text-yellow-600 border-yellow-200', desc: 'Rege a revelação, ilusões ópticas e clarões. Ideal para cegar oponentes e guiar ataques aliados.' },
        escuridao: { name: 'Escuridão', icon: '🌙', radical: 'Ru', type: 'Elemental', themeClass: 'bg-slate-100 text-slate-700 border-slate-300', desc: 'Domina a ocultação nas sombras, frio profundo e anomalias de gravidade.' },
        vida: { name: 'Vida', icon: '🌱', radical: 'Lar', type: 'Espiritual', themeClass: 'bg-emerald-50 text-emerald-600 border-emerald-200', desc: 'Conecta-se ao metabolismo, biologia orgânica e regeneração. Essencial para biomantes e curadores.' },
        vazio: { name: 'Vazio', icon: '🌌', radical: 'Vat', type: 'Espiritual', themeClass: 'bg-purple-50 text-purple-700 border-purple-200', desc: 'Rege a entropia, anulação de energia mágica e dissipação da Trama Arcana.' },
        vinculo: { name: 'Vínculo', icon: '🔗', radical: 'Vic', type: 'Espiritual', themeClass: 'bg-indigo-50 text-indigo-600 border-indigo-200', desc: 'Traça conexões invisíveis, telepatia e elos vitais de dor ou cura entre almas.' },
        isolamento: { name: 'Isolamento', icon: '🛡️', radical: 'Nim', type: 'Espiritual', themeClass: 'bg-zinc-100 text-zinc-700 border-zinc-300', desc: 'Cria barreiras impenetráveis, abafamento acústico e restrições absolutas de espaço.' },
        ordem: { name: 'Ordem', icon: '⚖️', radical: 'Proto', type: 'Espiritual', themeClass: 'bg-blue-50 text-indigo-700 border-blue-200', desc: 'Rege leis universais estritas, precisão matemática absoluta e banimento de vantagens.' },
        caos: { name: 'Caos', icon: '🎲', radical: 'Kat', type: 'Espiritual', themeClass: 'bg-purple-50 text-fuchsia-700 border-purple-200', desc: 'Controla oscilações de probabilidades, acasos imprevisíveis e falhas críticas induzidas.' }
    };

    const currentMeta = arcanaMeta[selectedArcana];
    const currentFeiticos = FEITICOS_BY_ARCANA[selectedArcana] || [];

    return (
        <section id="sec-filosofia" className="content-section">
            <h2 className="text-3xl border-b-2 border-magic-100 pb-2 mb-4">6. A Filosofia da Magia e As Doze Arcanas</h2>

            {/* Trindade da Magia */}
            <div className="mb-8">
                <p className="mb-4 text-lg italic text-gray-600 border-l-4 border-indigo-500 pl-4">
                    "Em Doze Arcanas, jogar feitiços não é apenas gritar uma palavra e rolar dados. A magia
                    é um ato consciente de manipular a realidade. Para que um feitiço exista no plano
                    físico, ele precisa respeitar os três pilares fundamentais, conhecidos nas academias
                    como A Trindade da Magia."
                </p>

                <h3 className="text-2xl mt-6 mb-4 font-serif text-magic-900 flex items-center">A Trindade da Magia</h3>

                <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-3 font-sans">
                    {/* A Fonte */}
                    <div className="bg-gradient-to-br from-indigo-50/30 to-indigo-100/10 border border-indigo-100 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <h4 className="font-bold text-lg font-serif text-magic-900 leading-tight">A Fonte
                                <br /><span className="text-xs font-sans text-indigo-500 uppercase tracking-wider">(O Quê)</span>
                            </h4>
                        </div>
                        <p className="text-xs text-gray-700 leading-relaxed">
                            É a substância primordial, a energia bruta extraída do universo. Define qual das
                            Doze Arcanas está sendo canalizada (Fogo, Vida, Ordem, etc.). Mecanicamente,
                            representa o seu <strong>Atributo de Magia</strong> e o gasto dos seus <strong>Pontos de Mana (PM)</strong>.
                        </p>
                    </div>

                    {/* O Controle */}
                    <div className="bg-gradient-to-br from-indigo-50/30 to-indigo-100/10 border border-indigo-100 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <h4 className="font-bold text-lg font-serif text-magic-900 leading-tight">O Controle
                                <br /><span className="text-xs font-sans text-indigo-500 uppercase tracking-wider">(O Como)</span>
                            </h4>
                        </div>
                        <p className="text-xs text-gray-700 leading-relaxed">
                            A energia arcana é caótica em seu estado natural. O Controle é a fórmula mecânica
                            do feitiço pronto e seus aprimoramentos. Ele canaliza a mana bruta em uma estrutura lógica estável de alcance, área e dano calculado.
                        </p>
                    </div>

                    {/* A Intenção */}
                    <div className="bg-gradient-to-br from-indigo-50/30 to-indigo-100/10 border border-indigo-100 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <h4 className="font-bold text-lg font-serif text-magic-900 leading-tight">A Intenção
                                <br /><span className="text-xs font-sans text-indigo-500 uppercase tracking-wider">(O Porquê)</span>
                            </h4>
                        </div>
                        <p className="text-xs text-gray-700 leading-relaxed">
                            Magia requer foco e vontade. A Intenção dita se a conjuração de um feitiço pronto
                            vai de fato atingir a vulnerabilidade do oponente, auxiliando a focar e transpor as defesas inimigas durante as rolagens.
                        </p>
                    </div>
                </div>
            </div>

            {/* As Doze Arcanas Grid Selectors */}
            <div className="mt-8">
                <h3 className="text-2xl font-serif text-magic-900 flex items-center mb-3">AS DOZE ARCANAS</h3>
                <p className="mb-6 text-sm text-gray-600 leading-relaxed font-sans">
                    O tecido do universo é costurado por doze fios primordiais. As escolas de magia separam
                    esses fios em dois espectros: as <strong>Arcanas Elementais</strong> (matéria física) e as <strong>Arcanas Espirituais</strong> (conceitos abstratos). Todo feitiço ou técnica baseia-se em uma dessas Arcanas.
                </p>

                {/* Explorer grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-6 font-sans">
                    {Object.entries(arcanaMeta).map(([key, value]) => (
                        <button
                            key={key}
                            onClick={() => setSelectedArcana(key)}
                            className={`p-3.5 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${
                                selectedArcana === key
                                    ? 'bg-indigo-50 border-indigo-500 shadow-xs'
                                    : 'bg-white border-slate-200 hover:border-indigo-300'
                            }`}
                        >
                            <span className="text-2xl mb-1 select-none">{value.icon}</span>
                            <span className="font-bold text-[11px] text-slate-800 leading-tight block">{value.name}</span>
                            <span className="text-[9px] font-mono text-indigo-650 bg-indigo-50/50 px-1 rounded mt-0.5">({value.radical})</span>
                        </button>
                    ))}
                </div>

                {/* Explorer Display */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 font-sans shadow-inner">
                    <div className="flex flex-wrap items-center gap-4 mb-4 pb-4 border-b border-slate-200">
                        <div className={`p-3 text-3xl rounded-xl shadow-inner flex items-center justify-center w-12 h-12 ${currentMeta.themeClass}`}>
                            {currentMeta.icon}
                        </div>
                        <div>
                            <h4 className="text-xl font-serif text-magic-900 font-bold flex items-center gap-2 leading-none">
                                Arcana: {currentMeta.name}
                                <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-slate-200/60 text-slate-700">
                                    Radical: {currentMeta.radical}
                                </span>
                            </h4>
                            <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider block mt-1">Espectro: {currentMeta.type}</span>
                        </div>
                    </div>
                    
                    <p className="text-xs text-gray-600 leading-relaxed mb-6 font-sans">
                        {currentMeta.desc}
                    </p>

                    {/* Spells list for selected Arcana */}
                    <div className="space-y-5">
                        <h5 className="font-serif font-bold text-slate-800 text-sm border-b border-slate-200 pb-1.5 uppercase tracking-wider">
                            Feitiços Clássicos Relacionados
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {currentFeiticos.map((spell, idx) => (
                                <div key={idx} className="bg-white border border-slate-200/80 rounded-xl p-4.5 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <span className="font-serif font-bold text-base text-magic-900">{spell.name}</span>
                                            <span className="font-mono text-indigo-650 bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 rounded text-[10px] font-bold">{spell.cost} PM</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[9px] font-semibold text-gray-400 mb-3">
                                            <span className="bg-slate-100 text-slate-600 px-1 py-0.2 rounded uppercase tracking-wider">{spell.grau}</span>
                                            <span>•</span>
                                            <span>{spell.type}</span>
                                        </div>
                                        <p className="text-[11px] text-gray-600 leading-relaxed mb-4">
                                            {spell.desc}
                                        </p>
                                    </div>
                                    
                                    {spell.upgrades && spell.upgrades.length > 0 && (
                                        <div className="border-t border-slate-100 pt-3 mt-1.5 space-y-1.5">
                                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Aprimoramentos</span>
                                            {spell.upgrades.map((up, uIdx) => (
                                                <div key={uIdx} className="text-[11px] text-slate-700 flex items-start gap-1.5">
                                                    <span className="text-indigo-600 font-mono font-bold shrink-0">+{up.cost}PM:</span>
                                                    <span className="leading-tight">{up.desc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}