import React from 'react';

export default function Invocador({ activeSpec, switchSpec, hideNav }) {
    return (
        <>
            {/* Specialization Navigation for Invocador */}
            {!hideNav && (
                <div id="nav-invocador"
                    className="caminho-nav bg-cyan-50/50 border-b border-cyan-100 p-2 flex flex-wrap gap-2">
                    <button onClick={() => switchSpec("elementalista")} id="tab-elementalista"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'elementalista'
                            ? 'bg-white border-cyan-200 text-cyan-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">Elementalista</span>
                        <span
                            className={`text-[9px] uppercase tracking-wider font-sans font-normal ${activeSpec === 'elementalista' ? 'text-indigo-500' : 'text-gray-400'}`}>Área
                            & Elementos</span>
                    </button>
                    <button onClick={() => switchSpec("vinculos")} id="tab-vinculos"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'vinculos'
                            ? 'bg-white border-cyan-200 text-cyan-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">Mestre de Vínculos</span>
                        <span
                            className={`text-[9px] uppercase tracking-wider font-sans font-normal ${activeSpec === 'vinculos' ? 'text-indigo-500' : 'text-gray-400'}`}>Criaturas
                            & Familiares</span>
                    </button>
                    <button onClick={() => switchSpec("dominios")} id="tab-dominios"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'dominios'
                            ? 'bg-white border-cyan-200 text-cyan-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">Mestre de Domínios</span>
                        <span
                            className={`text-[9px] uppercase tracking-wider font-sans font-normal ${activeSpec === 'dominios' ? 'text-indigo-500' : 'text-gray-400'}`}>Terreno
                            & Espaço</span>
                    </button>
                    <button onClick={() => switchSpec("arquiteto")} id="tab-arquiteto"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'arquiteto'
                            ? 'bg-white border-cyan-200 text-cyan-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">O Arquiteto</span>
                        <span
                            className={`text-[9px] uppercase tracking-wider font-sans font-normal ${activeSpec === 'arquiteto' ? 'text-indigo-500' : 'text-gray-400'}`}>Torres
                            & Dispositivos</span>
                    </button>
                </div>
            )}

            {/* Talent Content Area */}
            <div className="p-6 md:p-8 bg-white">

                {/* ELEMENTALISTA SPEC CONTENT */}
                <div id="spec-content-elementalista" className={`spec-content space-y-6 ${activeSpec === 'elementalista' ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                        <h4 className="font-bold text-lg text-magic-900 font-serif">Elementalista <span
                            className="font-sans font-normal text-sm text-gray-500 ml-1">| Especialização focada em Dano em Área e Manipulação de Elementos</span></h4>
                    </div>

                    {/* Nivel 1 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                1</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Erupção Elemental</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-gray-50 border border-gray-200/60 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Passivo
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>O estudo aprofundado dos elementos fundamentais. Você aprende a moldar a mana em chamas, geada, terra e ventos, canalizando arcanas elementais para criar feitiços poderosos.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-cyan-50/30 border border-cyan-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Você aprende <strong>2 feitiços elementais de Grau I</strong> à sua escolha (de Fogo, Água, Terra ou Vento). Ao conjurar um feitiço de uma Arcana que você domina, você adiciona <strong>+1 de dano bônus</strong> por dado de dano do feitiço.</p>
                                </div>
                                <div className="bg-cyan-50/50 border border-cyan-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">Você aprende <strong>2 feitiços elementais adicionais de Grau I ou II</strong> à sua escolha. Além disso, você recebe <strong>1 Vantagem (+1d6)</strong> no teste de conjuração para feitiços que utilizem elementos conhecidos por você.</p>
                                </div>
                                <div className="bg-cyan-50/70 border border-cyan-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">Você aprende <strong>2 feitiços adicionais de qualquer Grau</strong> (incluindo Grau III) à sua escolha. O custo total em PM para conjurar magias elementais é reduzido em <strong>1 PM</strong> (mínimo 1 PM), e a dificuldade (DT) para os alvos resistirem a essas magias aumenta em <strong>+2</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 2 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                2</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Área Persistente</h5>
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
                            <p>Você aprende a moldar e expandir a energia dos seus feitiços para que persistam no campo de batalha.</p>
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Quando você conjura um feitiço elemental de área, você pode usar este talento em conjunto para ancorar a magia no ambiente. Você deve pagar o custo do feitiço mais o custo da habilidade. A área afetada se torna uma zona de risco elemental contínua (ex: chão em chamas, névoa congelante) por <strong>1 Rodada</strong>.</p>
                            <p
                                className="bg-blue-50 text-blue-900 px-3.5 py-2 rounded-lg border border-blue-100 text-xs flex items-center gap-2">
                                <span><strong>Renovar:</strong><br></br>Você pode renovar a magia da área no início do seu turno por <strong>2 PM</strong>.</span>
                            </p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-cyan-50/30 border border-cyan-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Aplica-se apenas a <strong>Áreas Pequenas (3x3)</strong>. Qualquer criatura que iniciar o turno dentro da área, ou atravessá-la, sofre <strong>3</strong> de dano elemental automaticamente.</p>
                                </div>
                                <div className="bg-cyan-50/50 border border-cyan-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">O dano contínuo da área ancorada aumenta para <strong>6</strong> de dano elemental.</p>
                                </div>
                                <div className="bg-cyan-50/70 border border-cyan-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">Você pode aplicar em <strong>Áreas Médias (6x6)</strong>. O dano contínuo da área ancorada aumenta para <strong>9</strong> de dano elemental.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 3 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                3</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-cyan-950">Cataclismo</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-gray-50 border border-gray-200/60 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Passivo
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você aprende a manipular e maximizar os modificadores que ampliam a área e alcance de suas magias elementais, invocando a devastação total no campo de batalha.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-cyan-50/30 border border-cyan-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Seus feitiços de área de Grau I ou II causam <strong>1d6 extra</strong> de dano.</p>
                                </div>
                                <div className="bg-cyan-50/50 border border-cyan-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">A Dificuldade (DT) dos testes de resistência das suas magias de área aumenta em <strong>+2</strong>.</p>
                                </div>
                                <div className="bg-cyan-50/70 border border-cyan-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">A Dificuldade (DT) dos testes de resistência das suas magias de área aumenta em <strong>+4</strong>. Em caso de acerto crítico com uma magia de área, o alvo sofre o dano maximizado do feitiço.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MESTRE DE VÍNCULOS SPEC CONTENT */}
                <div id="spec-content-vinculos" className={`spec-content space-y-6 ${activeSpec === 'vinculos' ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                        <h4 className="font-bold text-lg text-magic-900 font-serif">Mestre de Vínculos <span
                            className="font-sans font-normal text-sm text-gray-500 ml-1">Especialização focada em Evocação de Criaturas e Familiares</span></h4>
                    </div>

                    {/* Efeito de Especialização */}
                    <div className="bg-cyan-50/20 border border-cyan-200/50 rounded-xl p-5 shadow-xs space-y-3 text-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <h5 className="font-bold text-base text-cyan-950 font-serif flex items-center gap-2">
                                <span className="w-2 h-2 rounded bg-cyan-500 block"></span>
                                Efeito de Especialização: Evocar Servil Arcano
                            </h5>
                            <div className="flex gap-2">
                                <span className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 Ações Padrões
                                </span>
                                <span className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 4 PM
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-750 font-sans leading-relaxed">
                            Você aprende automaticamente a invocar uma criatura feita de pura mana ou elementos (como um golem de pedra pequeno, lobo espectral ou corvo de chamas). Ele aparece em um espaço desocupado perto de você.
                        </p>
                        <p className="text-xs text-cyan-950 font-semibold font-sans mt-2">Você aprende automaticamente o feitiço de Vínculo: <strong>Elo Kármico</strong>.</p>
                        <div className="bg-white/60 border border-cyan-100/40 rounded-lg p-2.5 text-xs leading-relaxed text-gray-655">
                            <strong>Ficha do Servil Arcano:</strong>
                            <ul className="list-disc pl-4 space-y-0.5 mt-0.5">
                                <li><strong>PV:</strong> 10 + (seu atributo de Magia x 2)</li>
                                <li><strong>Dano:</strong> Ataque corpo a corpo ou à distância causando <strong>1d3 + seu atributo de Magia</strong>.</li>
                                <li><strong>Ações:</strong> O Servil age logo após o seu turno e possui <strong>1 Ação de Movimento e 1 Ação Padrão própria</strong> (comandos livres). Permanece na cena até seus PVs chegarem a 0 ou o combate acabar.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Nivel 1 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                1</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Evolução: Servil Arcano</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-gray-50 border border-gray-200/60 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Passivo
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Seu elo com o Servil se aprofunda, permitindo imbuí-lo com poderes e formas mais potentes.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-cyan-50/30 border border-cyan-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">O Servil canaliza energia elemental. Seus ataques desferem <strong>+2 de dano bônus</strong> elemental de sua escolha (Fogo, Água, Terra, Vento) e ele recebe <strong>+5 PV</strong> adicionais.</p>
                                </div>
                                <div className="bg-cyan-50/50 border border-cyan-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">O Servil ganha a habilidade <strong>Interposição</strong>. Uma vez por rodada, se um aliado adjacente ao Servil for alvo de um ataque, o Servil pode usar uma <strong>Reação</strong> para se tornar o alvo desse ataque em seu lugar.</p>
                                </div>
                                <div className="bg-cyan-50/70 border border-cyan-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">O Servil se torna um <strong>Servil Maior</strong>. O dado de dano de seu ataque aumenta para <strong>1d6</strong> (em vez de 1d3).Você tambem ganha a capcidade de lançar magias pro meio dele, gastando suas ações no seu turno.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 2 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                2</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Elo de Sangue e Mana</h5>
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
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você utiliza a ligação arcana entre vocês para transferir o perigo, dividindo o peso das feridas.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-cyan-50/30 border border-cyan-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Gatilho:</strong> Quando você ou seu Servil forem alvos de um ataque que causaria dano aos PVs.<br></br>Você faz com que o dano que sofreria seja transferido integralmente para o Servil (or vice-versa). Se o Servil for destruído usando esta reação, ele explode, causando <strong>1d6 + seu atributo de Magia</strong> de dano no atacante.</p>
                                </div>
                                <div className="bg-cyan-50/50 border border-cyan-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">Enquanto o Servil estiver ativo, você recebe <strong>+2 de Proteção (PR)</strong> passiva. A explosão de destruição do Servil aumenta para <strong>2d6 + seu atributo de Magia</strong> de dano.</p>
                                </div>
                                <div className="bg-cyan-50/70 border border-cyan-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">Seu servil ganha +1 ação padrão. você pode lançar magias pro meio dele, gastando suas ações no seu turno.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 3 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                3</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-cyan-950">Avatar de Invocação</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 Ação Completa
                                </span>
                                <span
                                    className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 6 PM
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você conjura uma entidade primordial de grande porte (ocupa espaço 3).</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-cyan-50/30 border border-cyan-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Exige a concentração do invocador (custa <strong>1 PM por turno</strong> para ser mantido). O Avatar possui <strong>PV igual a 20 + (seu atributo de Magia x 2)</strong>, <strong>1 Ação de Movimento e 1 Ações Padrões</strong> e seus ataques físicos causam <strong>4 + 1d6 + seu atributo de Magia</strong> de dano.</p>
                                </div>
                                <div className="bg-cyan-50/50 border border-cyan-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">O Avatar emana uma <strong>Presença Aterradora</strong>. Inimigos adjacentes ao Avatar devem fazer um Teste de Vontade (DT 14) ou receberão a condição <strong>Assustado.</strong></p>
                                </div>
                                <div className="bg-cyan-50/70 border border-cyan-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">Sinergia Primordial. Não exige mais o custo de Concentração por turno (custo de manutenção reduzido para <strong>0 PM</strong>).A vida do Avatar aumenta para <strong>25 + (seu atributo de Magia x 2)</strong> e o dano dos seus ataques aumenta para <strong>4 + 2d6 + seu atributo de Magia.</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MESTRE DE DOMÍNIOS SPEC CONTENT */}
                <div id="spec-content-dominios" className={`spec-content space-y-6 ${activeSpec === 'dominios' ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                        <h4 className="font-bold text-lg text-magic-900 font-serif">Mestre de Domínios <span
                            className="font-sans font-normal text-sm text-gray-500 ml-1">| Especialização focada em Controle de Terreno e Alteração Espacial</span></h4>
                    </div>

                    {/* Efeito de Especialização */}
                    <div className="bg-cyan-50/20 border border-cyan-200/50 rounded-xl p-5 shadow-xs space-y-3 text-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <h5 className="font-bold text-base text-cyan-950 font-serif flex items-center gap-2">
                                <span className="w-2 h-2 rounded bg-cyan-500 block"></span>
                                Efeito de Especialização: Muralha Mística
                            </h5>
                            <div className="flex gap-2">
                                <span className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 Ações Padrões
                                </span>
                                <span className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-750 font-sans leading-relaxed">
                            Você ergue uma parede sólida de energia, gelo ou pedra (até 6 metros de comprimento e 3 de altura) em alcance <strong>Médio</strong>. Ela bloqueia a linha de visão e a movimentação.
                        </p>
                        <p className="text-xs text-cyan-950 font-semibold font-sans mt-2">Você aprende automaticamente o feitiço de Terra: <strong>Barreira de Pedra</strong>.</p>
                        <div className="bg-white/60 border border-cyan-100/40 rounded-lg p-2.5 text-xs leading-relaxed text-gray-655">
                            <strong>Integridade:</strong>
                            <ul className="list-disc pl-4 space-y-0.5 mt-0.5">
                                <li>A muralha possui <strong>Redução de Dano (RD) igual à metade do seu atributo de Magia (arredondado para cima)</strong> e <strong>15 PV.</strong></li>
                                <li>Você pode desfazê-la a qualquer momento (ação livre).</li>
                            </ul>
                        </div>
                    </div>

                    {/* Nivel 1 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                1</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Evolução: Muralha Mística</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-gray-50 border border-gray-200/60 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Passivo
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Sua capacidade de modelar e fortificar as barreiras mágicas atinge novos patamares táticos.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-cyan-50/30 border border-cyan-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">A muralha ganha <strong>+10 PV</strong> (totalizando 25 PV) e você pode criá-la em formato de semicírculo ou ângulo de até 90 graus para isolar ou cercar inimigos.</p>
                                </div>
                                <div className="bg-cyan-50/50 border border-cyan-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">A muralha emana energia elemental instável. Criaturas que iniciarem o turno adjacentes à muralha sofrem <strong>1d6 + seu atributo de Magia</strong> de dano mágico do elemento correspondente à barreira (Fogo, Gelo, Terra ou Vento).</p>
                                </div>
                                <div className="bg-cyan-50/70 border border-cyan-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">Você pode erguer a Muralha Mística como uma <strong>Reação</strong> ao ser alvo de um ataque físico ou mágico à distância, interceptando-o completamente (a muralha recebe o dano do ataque em seu lugar).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 2 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                2</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Pântano Arcano</h5>
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
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você transfigura o terreno à sua escolha em alcance <strong>Médio</strong>, dificultando e punindo o movimento inimigo.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-cyan-50/30 border border-cyan-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">O pântano cobre uma <strong>Área Pequena</strong>. O solo se torna <strong>Terreno Difícil</strong> e inimigos que iniciarem o turno lá dentro sofrem <strong>3 + seu atributo de Magia</strong> de dano mágico.</p>
                                </div>
                                <div className="bg-cyan-50/50 border border-cyan-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">A área do pântano aumenta para <strong>Área Média</strong>. Inimigos que iniciarem o turno na área devem fazer um teste de <strong>Físico + Vigor (DT 12 + seu atributo de Magia)</strong> ou ganham a condição <strong>Lento</strong> (velocidade reduzida pela metade) por 1 rodada.</p>
                                </div>
                                <div className="bg-cyan-50/70 border border-cyan-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">O custo de ativação é reduzido para <strong>1 Ação Padrão</strong> (mantendo 4 PM). Além disso, inimigos que falharem no teste de Físico + Vigor sofrem a condição <strong>Imobilizado</strong> (em vez de Lento) por 1 rodada.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 3 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                3</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Santuário do Manipulador</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 Ação Complexa
                                </span>
                                <span
                                    className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 8 PM
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você projeta a sua própria realidade dimensional sobre o campo de batalha, distorcendo o espaço a seu favor.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-cyan-50/30 border border-cyan-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Você projeta um santuário em uma <strong>Área Grande</strong> em alcance Médio. Você e seus aliados ganham <strong>+1 de Vantagem (+1d6)</strong> em um teste por rodada, e inimigos rolam ataques contra você com <strong>1 Desvantagem (-1d6)</strong>.</p>
                                </div>
                                <div className="bg-cyan-50/50 border border-cyan-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">Sinergia Dimensional. Enquanto o Santuário estiver ativo, qualquer feitiço ou habilidade sua que crie barreiras ou altere o terreno (como Muralha ou Pântano) tem seu custo reduzido em <strong>-1 PM</strong> (mínimo 1 PM).</p>
                                </div>
                                <div className="bg-cyan-50/70 border border-cyan-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">O custo de ativação é reduzido para <strong>1 Ação Padrão</strong>. Além disso, uma vez por rodada, se um inimigo tentar se mover voluntariamente dentro do Santuário, você pode usar uma <strong>Reação</strong> para teleportá-lo para qualquer outro espaço desocupado dentro do Santuário.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* O ARQUITETO DE CONSTRUTOS SPEC CONTENT */}
                <div id="spec-content-arquiteto" className={`spec-content space-y-6 ${activeSpec === 'arquiteto' ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                        <h4 className="font-bold text-lg text-magic-900 font-serif">O Arquiteto de Construtos <span
                            className="font-sans font-normal text-sm text-gray-500 ml-1">| Especialização focada em Torres Autônomas e Dispositivos</span></h4>
                    </div>

                    {/* Efeito de Especialização */}
                    <div className="bg-cyan-50/20 border border-cyan-200/50 rounded-xl p-5 shadow-xs space-y-3 text-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <h5 className="font-bold text-base text-cyan-950 font-serif flex items-center gap-2">
                                <span className="w-2 h-2 rounded bg-cyan-500 block"></span>
                                Efeito de Especialização: Sentinela Arcana
                            </h5>
                            <div className="flex gap-2">
                                <span className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 Ações Padrões
                                </span>
                                <span className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 4 PM
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-750 font-sans leading-relaxed">
                            Você conjura um cristal flutuante ou um totem mecânico em um espaço vazio até o alcance <strong>Médio</strong>. No início de cada um de seus turnos, a Sentinela causa 3 de dano a um inimigo em alcance <strong>Curto</strong>. Você pode manter até 2 Sentinelas ativas simultaneamente.
                        </p>
                        <p className="text-xs text-cyan-950 font-semibold font-sans mt-2">Você aprende a projetar e comandar construtos mecânicos.</p>
                        <div className="bg-white/60 border border-cyan-100/40 rounded-lg p-2.5 text-xs leading-relaxed text-gray-655">
                            <strong>Ficha da Sentinela:</strong>
                            <ul className="list-disc pl-4 space-y-0.5 mt-0.5">
                                <li>A Sentinela possui <strong>10 PV</strong> e PR igual ao seu atributo de Magia.</li>
                                <li>Você pode desfazê-la a qualquer momento (ação livre).</li>
                            </ul>
                        </div>
                    </div>

                    {/* Nivel 1 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                1</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Evolução: Sentinela Arcana</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-gray-50 border border-gray-200/60 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Passivo
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Sua competência na fabricação de construtos e no aprimoramento de sentinelas mecânicas se expande significativamente.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-cyan-50/30 border border-cyan-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Sentinela Blindada. Suas Sentinelas passam a ter <strong>15 PV</strong> máximos (em vez de 10) e você pode manter até <strong>3 Sentinelas</strong> ativas simultaneamente.</p>
                                </div>
                                <div className="bg-cyan-50/50 border border-cyan-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">Sentinela Elemental. Ao conjurar, escolha um elemento (Fogo, Gelo, Veneno). O ataque da Sentinela aplica dano desse elemento (Gelo reduz velocidade em 1 quadrado, Fogo causa +2 de dano bônus).</p>
                                </div>
                                <div className="bg-cyan-50/70 border border-cyan-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">Torre de Artilharia. Você pode usar uma Ação Padrão para fazer com que uma Sentinela ative um disparo concentrado de longo alcance, desferindo um ataque que atinge até alcance <strong>Médio</strong> e causa <strong>2d6 + seu atributo de Magia</strong> de dano (consome 1 PM do conjurador).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 2 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                2</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif">Campo de Interação</h5>
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
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você ativa uma ressonância entre você e suas Sentinelas, gerando uma zona protetora e revitalizadora.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-cyan-50/30 border border-cyan-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Ressonância de Proteção. A área ao redor (alcance <strong>Curto</strong>) de cada Sentinela sua se torna uma zona de buff. Aliados dentro dessa área ganham <strong>+2 de Proteção (PR) passiva</strong> e regeneram <strong>1 PV por rodada</strong> enquanto permanecerem lá.</p>
                                </div>
                                <div className="bg-cyan-50/50 border border-cyan-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">Campo de Bateria. Aliados na área também regeneram <strong>1 PM</strong> no início de seus turnos. Além disso, a área del campo ao redor das Sentinelas aumenta para alcance <strong>Médio</strong>.</p>
                                </div>
                                <div className="bg-cyan-50/70 border border-cyan-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">Escudo de Retaliação. O custo é reduzido para <strong>Ação de Movimento</strong> (mantendo 3 PM). Quando um aliado dentro do campo de uma Sentinela é atacado, ela pode disparar um pulso defensivo como uma <strong>Reação</strong>, reduzindo o dano sofrido pelo aliado em <strong>1d6 + seu atributo de Magia</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 3 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                3</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-cyan-950">Sobrecarga do Arquiteto</h5>
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
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você detona os núcleos de energia de suas Sentinelas em uma explosão devastadora.</p>

                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-cyan-50/30 border border-cyan-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Núcleos Detonadores. Você detona todas as Sentinelas ativas. Cada uma explode em alcance <strong>Curto</strong>. Inimigos na área testam Físico + Destreza (DT 14 + seu atributo de Magia) ou sofrem <strong>3d6 + seu atributo de Magia</strong> de dano (metade no sucesso). Acúmulo de explosões impõe <strong>1 Desvantagem (-1d6)</strong>.</p>
                                </div>
                                <div className="bg-cyan-50/50 border border-cyan-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">Sobrecarga de Pulso. O dano aumenta para <strong>4d6 + seu atributo de Magia</strong> de dano. Inimigos que falharem no teste físico também são empurrados para alcance <strong>Médio</strong> a partir do centro da Sentinela.</p>
                                </div>
                                <div className="bg-cyan-50/70 border border-cyan-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-cyan-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600">Detonação Seletiva. O custo de ativação é reduzido para <strong>1 Ação Padrão</strong>. Aliados na área da explosão ignoram o dano da explosão e você regenera <strong>1 PM</strong> (máximo 3 PM) por Sentinela detonada.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
