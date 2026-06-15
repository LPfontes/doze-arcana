import React from 'react';

export default function Combatente({ activeSpec, switchSpec, hideNav }) {
    return (
        <>
            {/* Specialization Navigation for Combatente */}
            {!hideNav && (
                <div id="nav-combatente"
                    className="caminho-nav bg-indigo-50/50 border-b border-indigo-100 p-2 flex flex-wrap gap-2">
                    <button onClick={() => switchSpec("lamina")} id="tab-lamina"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'lamina'
                            ? 'bg-white border-indigo-200 text-indigo-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">A Lâmina</span>
                        <span
                            className="text-[9px] text-indigo-500 uppercase tracking-wider font-sans font-normal">Ataque
                            & Encantamento</span>
                    </button>
                    <button onClick={() => switchSpec("bastiao")} id="tab-bastiao"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'bastiao'
                            ? 'bg-white border-indigo-200 text-indigo-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">O Bastião</span>
                        <span
                            className="text-[9px] text-gray-400 uppercase tracking-wider font-sans font-normal">Defesa
                            & Retaliação</span>
                    </button>
                    <button onClick={() => switchSpec("vanguarda")} id="tab-vanguarda"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'vanguarda'
                            ? 'bg-white border-indigo-200 text-indigo-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">A Vanguarda</span>
                        <span
                            className="text-[9px] text-gray-400 uppercase tracking-wider font-sans font-normal">Mobilidade
                            & Feitiços</span>
                    </button>
                    <button onClick={() => switchSpec("francoatirador")} id="tab-francoatirador"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'francoatirador'
                            ? 'bg-white border-indigo-200 text-indigo-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">O Franco-Atirador</span>
                        <span
                            className="text-[9px] text-gray-400 uppercase tracking-wider font-sans font-normal">À
                            Distância & Precisão</span>
                    </button>
                </div>
            )}

            {/* Talent Content Area */}
            <div className="p-6 md:p-8 bg-white">

                {/* A LÂMINA SPEC CONTENT */}
                <div id="spec-content-lamina" className={`spec-content space-y-6 ${activeSpec === 'lamina' ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                        <h4 className="font-bold text-lg text-magic-900 font-serif">A Lâmina <span
                            className="font-sans font-normal text-sm text-gray-500 ml-1">| Especialização focada em Ataque e Encantamento</span></h4>
                    </div>

                    {/* Nivel 1 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-indigo-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                1</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Encantar</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 Ação Padrão
                                </span>
                                <span
                                    className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 2 PM
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você consegue encantar uma arma com um toque, imbuindo-a com energia elemental ativa. O talento evolui conforme seu domínio arcano se aprofunda.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-indigo-50/30 border border-indigo-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">A arma causa <strong>+1d6</strong> de dano Elemental até o final do seu turno. (Custo: 1 Ação Padrão, 2 PM. Manutenção: +1 PM por turno adicional).</p>
                                </div>
                                <div className="bg-indigo-50/50 border border-indigo-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">O custo de ativação é reduzido para <strong>1 Ação de Movimento</strong> (mantendo 2 PM). O dano elemental extra aumenta para <strong>1d6 + seu atributo de Magia</strong>.</p>
                                </div>
                                <div className="bg-indigo-50/70 border border-indigo-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">Pode ser ativado como <strong>Ação Livre</strong> ou como <strong>Reação</strong> ao desembainhar a arma (custo de 4 PM). Além disso, o primeiro ataque bem-sucedido de cada turno aplica a Condição rúnica correspondente ao elemento (ex: Fogo aplica Queimadura, Água aplica Hipotermia).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 2 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-indigo-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                2</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Fenda</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 Ação Padrão
                                </span>
                                <span
                                    className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 2 PM
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você projeta a energia do encantamento à distância por meio de uma fenda no espaço.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-indigo-50/30 border border-indigo-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Ataque corpo a corpo até alcance <strong>Curto(3 quadrados)</strong>. Causa o dano normal da arma, transformado em <strong>Mágico</strong>. Se a arma estiver sob efeito de <em>Encantar</em>, a fenda carrega o dano elemental extra e atinge todos em linha reta até o alvo.</p>
                                </div>
                                <div className="bg-indigo-50/50 border border-indigo-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">O alcance do corte se estende para <strong>Médio(6 quadrados)</strong> e o ataque recebe <strong>+1d6</strong> de dano mágico adicional.</p>
                                </div>
                                <div className="bg-indigo-50/70 border border-indigo-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">O ataque ignora <strong>Cobertura Leve</strong>. Se a arma estiver encantada, a fenda deixa um rastro rúnico na trajetória por 1 rodada, causando <strong>3</strong> de dano elemental a qualquer criatura que a atravesse.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 3 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-indigo-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                3</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-indigo-950">Execução Arcana</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 Ação Complexa
                                </span>
                                <span
                                    className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 6 PM
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você concentra toda a sua força e mana em um único golpe finalizador absoluto.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-indigo-50/30 border border-indigo-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">O ataque físico ignora completamente a Redução de Dano (RD) do alvo. O acerto é considerado automaticamente como <strong>Acerto Crítico</strong> e causa +6 de dano adicional.</p>
                                </div>
                                <div className="bg-indigo-50/50 border border-indigo-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">Você aplica uma condição(Caído ou Desarmado ou Desorientado) por 1 rodada. Se o ataque derrotar o alvo, você recupera imediatamente 2 PM.</p>
                                </div>
                                <div className="bg-indigo-50/70 border border-indigo-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">Voce sabe aplicar seu golpe em uma area(linha(5 quadrados) ou cone(3 quadrados)) voce faz apenas um ataque contra a defesa de todos os alvos, em um acerto causa o dano completo em um erro causa apenas a metade do dano.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* O BASTIÃO SPEC CONTENT */}
                <div id="spec-content-bastiao" className={`spec-content space-y-6 ${activeSpec === 'bastiao' ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                        <h4 className="font-bold text-lg text-magic-900 font-serif">O Bastião <span
                            className="font-sans font-normal text-sm text-gray-500 ml-1">| Especialização focada em Defesa e Retaliação</span></h4>
                    </div>

                    {/* Nivel 1 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-indigo-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                1</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Escudo Arcano</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 Ação Padrão
                                </span>
                                <span
                                    className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você conjura um escudo mágico unilateral que evolui conforme seu domínio defensivo se aprofunda.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-indigo-50/30 border border-indigo-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Você conjura um escudo mágico unilateral. Ele fornece <strong>6 pontos de Proteção (PR)</strong> para ataques vindos de fora até o início do seu próximo turno. Ataques/pessoas de dentro conseguem sair, mas os de fora não entram.</p>
                                </div>
                                <div className="bg-indigo-50/50 border border-indigo-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">A barreira é reforçada e se torna mais flexível. A Proteção (PR) fornecida aumenta para <strong>8 pontos</strong> e voce consegue estender o escudo em um circulo emanando de você com 2 quadrados de raio ou um cone emanando de você com até 4,5 quadrados de comprimento.</p>
                                </div>
                                <div className="bg-indigo-50/70 border border-indigo-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">Você pode conjurar o escudo como uma <strong>Reação</strong> ao receber um ataque, com custo de 4 PM. Além disso, quando o escudo é quebrado por um ataque inimigo, ele gera uma onda de choque que empurra todos os inimigos adjacentes a alcance Curto.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 2 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-indigo-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                2</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Retaliação Rúnica</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">Reação
                                </span>
                                <span
                                    className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 2 PM
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Suas defesas reagem violentamente contra agressores físicos, liberando explosões de mana rúnica.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-indigo-50/30 border border-indigo-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Gatilho:</strong> Quando um inimigo atinge você com um ataque corpo a corpo e o dano é absorvido por sua Proteção (PR) ou Escudo Arcano.<br></br>O atacante sofre automaticamente <strong>3 + seu atributo de Magia</strong> de dano mágico e é empurrado para alcance Curto.</p>
                                </div>
                                <div className="bg-indigo-50/50 border border-indigo-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">A explosão rúnica se torna mais destrutiva. O dano aumenta para <strong>6 + seu atributo de Magia</strong>, o atacante é empurrado para alcance <strong>Médio</strong> e deve passar in um teste de <strong>Físico + Destreza (DT 12 + seu atributo de Magia)</strong> ou ficará <strong>Caído</strong>.</p>
                                </div>
                                <div className="bg-indigo-50/70 border border-indigo-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">Você pode infundir o dano com o Elemento de um feitiço ativo ou de uma das suas Arcanas dominadas. Se o atacante falhar no teste físico, ele também sofre a Condição correspondente ao elemento (ex: Fogo aplica Queimadura, Água aplica Hipotermia) por 1 rodada. Se o ataque inimigo for completamente absorvido pelo Escudo Arcano, a retaliação não consome sua Reação da rodada.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 3 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-indigo-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                3</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-indigo-950">Armadura Arcana</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 Ação Padrão
                                </span>
                                <span
                                    className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 4 PM
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você canaliza energia rúnica para criar uma armadura mágica protetora ao seu redor. ela concede 12 pontos de Proteção bonus que duram até o final do combate ou até perderem toda a sua durabilidade.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-indigo-50/30 border border-indigo-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Você consegue infundir uma das suas Arcanas elementais dominadas na sua armadura. </p>
                                    <p><strong>Fogo:</strong> Todo personagem que atacar você corpo a corpo sofrera 3 pontos de dano de fogo. </p>
                                    <p><strong>Gelo:</strong> Todo personagem que atacar você tem +1 desvantagem. </p>
                                    <p><strong>Eletricidade:</strong> todo personagem que estiver adjacente a você no inicio do seu turno sofreram 2 pontos de dano de eletricidade. </p>
                                    <p><strong>Plantas:</strong> personagem adjacente a você no inicio do seu turno precisam passar em teste de Fisico Agilidade <strong>10 + atributo magia</strong> ou ficarão Imobilizados por um turno.</p>
                                </div>
                                <div className="bg-indigo-50/50 border border-indigo-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">Você cosegue conjurar armaduras em aliados a alcance curto de você. cada armadura custa 4 PM adicional e segue as mesma regras que a sua armadura. </p>
                                </div>
                                <div className="bg-indigo-50/70 border border-indigo-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">Você reduz o custo da armadura para 3 PM e ganha a reação de reativar a armadura como uma reação sempre que ela for desativada pagando 2 PM. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* A VANGUARDA SPEC CONTENT */}
                <div id="spec-content-vanguarda" className={`spec-content space-y-6 ${activeSpec === 'vanguarda' ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                        <h4 className="font-bold text-lg text-magic-900 font-serif">A Vanguarda <span
                            className="font-sans font-normal text-sm text-gray-500 ml-1">| Especialização focada em Mobilidade e Feitiços de Impacto</span></h4>
                    </div>

                    {/* Nivel 1 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-indigo-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                1</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Acelerar</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 Ações Padrões
                                </span>
                                <span
                                    className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 4 PM
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você usa sua mana para ampliar sua capacidade física. O talento evolui conforme sua velocidade e força se aprimoram.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-indigo-50/30 border border-indigo-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Você usa sua mana para ampliar sua capacidade física. Você ganha <strong>1 Ação Padrão adicional</strong> por 2 Rodadas. (Custo: 2 Ações Padrões, 3 PM).</p>
                                </div>
                                <div className="bg-indigo-50/50 border border-indigo-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">A aceleração também canaliza energia cinética para seus músculos. Enquanto <em>Acelerar</em> estiver ativo, você amplia sua força, aumentando seu dano em <strong>+2</strong> para ataques físicos.</p>
                                </div>
                                <div className="bg-indigo-50/70 border border-indigo-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">O fluxo de mana se torna instantâneo. O custo de ativação do <em>Acelerar</em> é reduzido para <strong>1 Ação Padrão</strong>. Além disso, enquanto estiver ativo, você recebe <strong>1 Vantagem</strong> em todos os testes de Físico.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 2 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-indigo-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                2</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Impacto Meteórico</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 Ações Padrões
                                </span>
                                <span
                                    className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você usa a gravidade e a magia para cair como um meteoro sobre os inimigos.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-indigo-50/30 border border-indigo-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Você realiza um salto mágico até alcance <strong>Médio (6 quadrados)</strong> e aterrissa causando uma explosão cinética. Todos os inimigos adjacentes ao ponto de aterrissagem devem fazer um teste de <strong>Físico + Destreza (DT 12 + seu atributo de Magia)</strong> ou sofrem <strong>3 + 1d6 + Físico</strong> de dano físico e ficam <strong>Caídos</strong> (metade do dano em caso de sucesso). (Custo: 2 Ações Padrões, 3 PM).</p>
                                </div>
                                <div className="bg-indigo-50/50 border border-indigo-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">O impacto é mais devastador. O raio da explosão cinética se expande para atingir todos os inimigos a alcance <strong>Curto (3 quadrados)</strong> de você na aterrissagem.</p>
                                </div>
                                <div className="bg-indigo-50/70 border border-indigo-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">Voce consegue aplicar um efeito elemental, nos inimigos que falharem no teste de Físico + Destreza (DT 12 + seu atributo de Magia).</p>
                                    <p>Fogo: Inimigos sofrem +3 de dano de fogo.</p>
                                    <p>Agua: Inimigos são empurrados 3 quadrados.</p>
                                    <p>Terra: Inimigos ficam Imobilizados.</p>
                                    <p>Ar: inimigos sofre 1 ponto de Sangramento</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 3 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-indigo-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                3</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-indigo-950">Deslize Dimensional</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">Reação
                                </span>
                                <span
                                    className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 5 PM
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você manipula o espaço para evitar ataques, surgindo em uma posição de vantagem.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-indigo-50/30 border border-indigo-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Gatilho:</strong> Quando você é alvo de um ataque.<br></br>Você manipula o espaço para se esquivar: o ataque inimigo erra automaticamente (exceto se for um Acerto Crítico natural 12/12) e você reaparece em um espaço adjacente a sua posição inicial.</p>
                                </div>
                                <div className="bg-indigo-50/50 border border-indigo-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">O alcance do teleporte de reaparecimento aumenta para até alcance <strong>Curto (3 quadrados)</strong> de onde você estava.</p>
                                </div>
                                <div className="bg-indigo-50/70 border border-indigo-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">Controle do fluxo dimensional. O custo do deslize é reduzido para <strong>4 PM</strong>. Em caso de sucesso na esquiva, você pode optar por teletransportar a si mesmo E um aliado adjacente para qualquer espaço livre a alcance Curto de onde estavam. Se o ataque que desencadeou o gatilho era de área, ambos saem da área e não sofrem dano.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* O FRANCO-ATIRADOR SPEC CONTENT */}
                <div id="spec-content-francoatirador" className={`spec-content space-y-6 ${activeSpec === 'francoatirador' ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                        <h4 className="font-bold text-lg text-magic-900 font-serif">O Franco-Atirador <span
                            className="font-sans font-normal text-sm text-gray-500 ml-1">| Especialização focada em Combate à Distância e Precisão</span></h4>
                    </div>

                    {/* Nivel 1 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-indigo-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                1</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Disparo Energizado</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 Ações Padrões
                                </span>
                                <span
                                    className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você concentra uma densa carga mágica na ponta do seu projétil. O talento evolui conforme sua precisão e potência de disparo se aprimoram.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-indigo-50/30 border border-indigo-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Você realiza um ataque à distância (alcance <strong>Longo</strong>). Se acertar, o projétil atravessa o alvo primário, atingindo também um inimigo que esteja em linha reta logo atrás dele. Ambos sofrem o dano normal da arma. (Custo: 2 Ações Padrões, 3 PM).</p>
                                </div>
                                <div className="bg-indigo-50/50 border border-indigo-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">O disparo se torna uma linha de energia devastadora. O projétil atravessa o primeiro alvo e continua em uma linha de até <strong>3 quadrados (4,5 metros)</strong> a partir do primeiro alvo, atingindo todos os inimigos no caminho.</p>
                                </div>
                                <div className="bg-indigo-50/70 border border-indigo-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">O custo de ativação é reduzido para <strong>1 Ação Padrão</strong> (mantendo 3 PM). Além disso, o ataque causa <strong>+1d6</strong> de dano bônus no primeiro alvo atingido.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 2 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-indigo-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                2</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Mira Perfurante</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 Ação Padrão
                                </span>
                                <span
                                    className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 2 PM
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você gasta tempo lendo a movimentação e armadura do alvo, localizando pontos vulneráveis.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-indigo-50/30 border border-indigo-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Você lê as defesas do inimigo.O alvo tem a condição <strong>Vigiado</strong> e seu próximo ataque à distância contra o alvo cosnome a condição <strong>Vigiado</strong>, recebe <strong>1 Vantagem (+1d6)</strong> e ignora passivamente até <strong>3 Pontos de Redução de Dano (RD)</strong>.</p>
                                </div>
                                <div className="bg-indigo-50/50 border border-indigo-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">A mira se torna letal. A Redução de Dano (RD) ignorada aumenta para <strong>6 pontos</strong>,alem disso voce pode usar Mira Perfurante gastando 1 ação padrão + 1 ação de movimento.</p>
                                </div>
                                <div className="bg-indigo-50/70 border border-indigo-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">Você ganha a reação de <strong>Sob Vigia</strong>, quando um aliado atacar o alvo que você esta vigiando, você pode usar essa habilidade para dar <strong>+1d6 de dano</strong> no ataque aliado. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 3 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-indigo-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                3</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-indigo-950">Tiro de Execução</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 Ação Complexa
                                </span>
                                <span
                                    className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 6 PM
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>O disparo perfeito, calibrado com a respiração e a pulsação do universo.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-indigo-50/30 border border-indigo-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Se o alvo estiver sem aliados adjacentes (isolado), o ataque causa <strong>dano máximo</strong> nos dados base.</p>
                                </div>
                                <div className="bg-indigo-50/50 border border-indigo-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">O tiro ignora 5 pontos de Redução de Dano (RD) e causa <strong>dano máximo</strong> mesmo que o alvo não esteja isolado.</p>
                                </div>
                                <div className="bg-indigo-50/70 border border-indigo-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">O tiro ignora completamente qualquer Redução de Dano (RD). Se o alvo for derrotado por este ataque, você recupera 3 PM.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
