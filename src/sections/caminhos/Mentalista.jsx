import React from 'react';

export default function Mentalista({ activeSpec, switchSpec, hideNav }) {
    return (
        <>
            {/* Specialization Navigation for Mentalista */}
            {!hideNav && (
                <div id="nav-mentalista"
                    className="caminho-nav bg-purple-50/50 border-b border-purple-100 p-2 flex flex-wrap gap-2">
                    <button onClick={() => switchSpec("ilusionista")} id="tab-ilusionista"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'ilusionista'
                            ? 'bg-white border-purple-200 text-purple-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">Ilusionista</span>
                        <span
                            className={`text-[9px] uppercase tracking-wider font-sans font-normal ${activeSpec === 'ilusionista' ? 'text-indigo-500' : 'text-gray-400'}`}>Falsa
                            Realidade & Engano</span>
                    </button>
                    <button onClick={() => switchSpec("controlador")} id="tab-controlador"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'controlador'
                            ? 'bg-white border-purple-200 text-purple-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">Controlador</span>
                        <span
                            className={`text-[9px] uppercase tracking-wider font-sans font-normal ${activeSpec === 'controlador' ? 'text-indigo-500' : 'text-gray-400'}`}>Controle
                            & Dano Mental</span>
                    </button>
                    <button onClick={() => switchSpec("dobrador")} id="tab-dobrador"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'dobrador'
                            ? 'bg-white border-purple-200 text-purple-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">Dobrador do Destino</span>
                        <span
                            className={`text-[9px] uppercase tracking-wider font-sans font-normal ${activeSpec === 'dobrador' ? 'text-indigo-500' : 'text-gray-400'}`}>Manipulação
                            de Sorte</span>
                    </button>
                    <button onClick={() => switchSpec("oraculo")} id="tab-oraculo"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'oraculo'
                            ? 'bg-white border-purple-200 text-purple-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">O Oráculo</span>
                        <span
                            className={`text-[9px] uppercase tracking-wider font-sans font-normal ${activeSpec === 'oraculo' ? 'text-indigo-500' : 'text-gray-400'}`}>Premonição
                            & Interrupção</span>
                    </button>
                </div>
            )}

            {/* Talent Content Area */}
            <div className="p-6 md:p-8 bg-white">

                {/* ILUSIONISTA SPEC CONTENT */}
                <div id="spec-content-ilusionista" className={`spec-content space-y-6 ${activeSpec === 'ilusionista' ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                        <h4 className="font-bold text-lg text-magic-900 font-serif">Ilusionista <span
                            className="font-sans font-normal text-sm text-gray-500 ml-1">| Especialização focada em Falsa Realidade e Engano</span></h4>
                    </div>

                    {/* Efeito de Especialização */}
                    <div className="bg-purple-50/20 border border-purple-200/50 rounded-xl p-5 shadow-xs space-y-3 text-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <h5 className="font-bold text-base text-purple-950 font-serif flex items-center gap-2">
                                <span className="w-2 h-2 rounded bg-purple-500 block"></span>
                                Efeito de Especialização: Truque de Espelhos
                            </h5>
                            <div className="flex gap-2">
                                <span className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Ação de Movimento
                                </span>
                                <span className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 2 PM
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-750 font-sans leading-relaxed">
                            Você cria um clone holográfico perfeitamente intangível de si mesmo em um quadrado livre adjacente. Ele imita todas as suas ações, fazendo com que qualquer ataque desferido contra você tenha 50% de chance de atingir a ilusão (dissipando-a).
                        </p>
                        <p className="text-xs text-purple-950 font-semibold font-sans mt-2">Você aprende automaticamente os feitiços de Luz: <strong>Clarão Solar</strong> e <strong>Escudo de Agnes</strong>.</p>
                    </div>

                    {/* Nivel 1 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                1</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-purple-950">Imagem Falsa</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você conjura imagens e projeções complexas no campo para enganar os sentidos dos oponentes.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-purple-50/30 border border-purple-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Holograma Distrativo:</strong> Como 1 Ação Padrão (2 PM), você cria uma ilusão de um objeto, criatura ou cópia de si mesmo em alcance Médio. Inimigos que interagirem com ela perdem o ataque automaticamente. Teste de Mental + Percepção (DT 12 + seu atributo de Magia) para discernir sem interagir.</p>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Ilusão Dinâmica:</strong> A imagem falsa criada pode mover-se de forma realista e emitir sons complexos. A DT para discernir a natureza falsa da ilusão aumenta em <strong>+2</strong>.</p>
                                </div>
                                <div className="bg-purple-50/70 border border-purple-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Ilusão Sólida:</strong> A imagem falsa simula massa física sólida temporariamente. Ela pode obstruir caminhos físicos (como uma parede ou ponte falsa) até que seja atacada (se dissipa se sofrer dano) ou descoberta.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 2 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                2</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-purple-950">Véu do Oculto</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você dobra a luz e oculta assinaturas térmicas para tornar criaturas completamente invisíveis.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-purple-50/30 border border-purple-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Como 2 Ações Padrões (4 PM), torna a si mesmo ou um aliado adjacente invisível. Ataques de alvo único não podem alvejá-lo, e ataques em área têm <strong>1 Desvantagem (-1d6)</strong> contra ele. O próximo ataque feito a partir da invisibilidade recebe <strong>1 Vantagem (+1d6)</strong>. Quebra ao atacar ou conjurar magia hostil.</p>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Ocultamento Persistente:</strong> A invisibilidade não se desfaz ao realizar interações simples ou movimentação física (apenas ao desferir ataques ou conjurar magias que causem dano a oponentes).</p>
                                </div>
                                <div className="bg-purple-50/70 border border-purple-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Dobra de Véu:</strong> O custo de ativação é reduzido para <strong>1 Ação Padrão</strong>. Além disso, você pode ocultar até <strong>duas criaturas simultaneamente</strong> pelo mesmo custo em PM.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 3 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                3</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-purple-950">Pesadelo</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você invade a mente profunda de oponentes, forçando-os a experimentar seus piores medos em um horror psíquico.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-purple-50/30 border border-purple-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Como 1 Ação Complexa (6 PM), arrasta a mente de um inimigo em alcance Médio. O alvo testa Mental + Vontade (DT 12 + seu Atributo Mental). Se falhar, sofre <strong>3 + 2d6 + seu atributo de Mental</strong> de dano psíquico (ignora PR) e ganha a condição <strong>Atordoado</strong> por 1 rodada.</p>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Paralisia de Choque:</strong> O dano mental aumenta para <strong>4d6 + seu atributo de Mental</strong> e o alvo que falhar no teste de resistência fica sob a condição <strong>Paralisado</strong> (em vez de Atordoado) por 1 rodada.</p>
                                </div>
                                <div className="bg-purple-50/70 border border-purple-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Pesadelo Coletivo:</strong> O custo de ativação é reduzido para <strong>1 Ação Padrão</strong>. O horror psíquico se espalha, permitindo atingir até <strong>3 inimigos</strong> que estejam a alcance Curto uns dos outros (exige testes separados para cada um).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTROLADOR SPEC CONTENT */}
                <div id="spec-content-controlador" className={`spec-content space-y-6 ${activeSpec === 'controlador' ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                        <h4 className="font-bold text-lg text-magic-900 font-serif">Controlador <span
                            className="font-sans font-normal text-sm text-gray-500 ml-1">| Especialização focada em Controle e Dano Mental Direto</span></h4>
                    </div>

                    {/* Efeito de Especialização */}
                    <div className="bg-purple-50/20 border border-purple-200/50 rounded-xl p-5 shadow-xs space-y-3 text-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <h5 className="font-bold text-base text-purple-950 font-serif flex items-center gap-2">
                                <span className="w-2 h-2 rounded bg-purple-500 block"></span>
                                Efeito de Especialização: Presença Imponente
                            </h5>
                            <div className="flex gap-2">
                                <span className="bg-gray-50 border border-gray-200/60 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Passivo
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-750 font-sans leading-relaxed">
                            Você emana uma aura invisível de dominância psíquica. Sempre que um oponente iniciar seu turno adjacente a você, ele deve passar em um teste de Mental + Vontade (DT 10 + seu Atributo Mental) ou sofrerá <strong>1 Desvantagem (-1d6)</strong> em todas as jogadas de ataque contra você até o início de seu próximo turno.
                        </p>
                        <p className="text-xs text-purple-950 font-semibold font-sans mt-2">Você aprende automaticamente os feitiços de <strong>Conectar Mentes</strong> e <strong>Quarto Isolado</strong>.</p>
                    </div>

                    {/* Nivel 1 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                1</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-purple-950">Chicote Psíquico</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você atinge os pensamentos do inimigo com uma descarga pura de dor e coerção telepática.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-purple-50/30 border border-purple-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Chicote Mental:</strong> Como 2 Ações Padrões (3 PM), faça um ataque psíquico (teste de Mental + Vontade contra a Defesa do alvo). Se acertar, causa <strong>3 + 1d6 + seu atributo de Mental</strong> de dano mental direto (que **ignora completamente a Redução de Dano (RD) física** do alvo).</p>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Chicote Dilacerador:</strong> O dano do feitiço aumenta para <strong>2d6 + seu atributo de Mental</strong>, e o alvo atingido fica sob a condição <strong>Desorientado</strong> por 1 rodada, recebendo -2 de penalidade em rolagens de salvamento mental.</p>
                                </div>
                                <div className="bg-purple-50/70 border border-purple-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Laço Psíquico:</strong> O custo de ativação é reduzido para <strong>1 Ação Padrão</strong>. Ao acertar, você pode puxar fisicamente o alvo por até 3 quadrados em qualquer direção de sua escolha (el inimigo faz um teste de Físico para resistir e não ser arrastado).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 2 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                2</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-purple-950">Comando Subconsciente</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você planta pensamentos imperativos na mente consciente de um alvo, forçando-o a obedecer a suas ordens.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-purple-50/30 border border-purple-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Palavra de Ordem:</strong> Como 2 Ações Padrões (4 PM), force uma ordem verbal (como "Ajoelhe", "Largue a arma" ou "Recue") a um oponente em alcance Médio. O alvo testa Mental + Vontade (DT 12 + seu Atributo Mental). Se falhar, no próximo turno dele, a primeira Ação Padrão dele será **gasta obrigatoriamente** para cumprir a ordem.</p>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Sugestão Complexa:</strong> Gastando <strong>+2 PM</strong> durante a conjuração, a ordem psíquica é prolongada para abranger as duas principais ações do turno do alvo (ex: "Corra e caia no chão", consumindo a Ação de Movimento e a Ação Padrão dele).</p>
                                </div>
                                <div className="bg-purple-50/70 border border-purple-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Comando de Grupo:</strong> O custo de ativação é reduzido para <strong>1 Ação Padrão</strong> (4 PM). A palavra de ordem projeta-se em ressonância mental, permitindo controlar até <strong>2 inimigos simultaneamente</strong> na cena (rolagens de resistência individuais).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 3 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                3</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-purple-950">Marionete Arcana</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você usurpa o controle motor e os sentidos de uma criatura, manipulando seu corpo como um fantoche de fios de mana.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-purple-50/30 border border-purple-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Posse Psíquica:</strong> Como 1 Ação Complexa (7 PM), controle totalmente as ações de um alvo em alcance Médio por <strong>1 turno</strong>. Teste de Mental + Vontade (DT 12 + seu Atributo Mental) para resistir. Se falhar, você escolhe todas as ações do alvo (1 Movimento, 2 Padrões). Pode sustentar gastando +3 PM por rodada (novo teste a cada turno).</p>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Marionete Armada:</span>
                                    <p className="text-gray-600">O alvo sob controle motor recebe um bônus de <strong>+2 em testes de ataque</strong> e causa <strong>+1d6 de dano mágico adicional</strong> caso você o force a atacar seus próprios aliados.</p>
                                </div>
                                <div className="bg-purple-50/70 border border-purple-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Dominação Instantânea:</strong> O custo de ativação é reduzido para <strong>1 Ação Padrão</strong>. Além disso, o alvo realiza o teste de resistência com <strong>1 Desvantagem (-1d6)</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DOBRADOR DO DESTINO SPEC CONTENT */}
                <div id="spec-content-dobrador" className={`spec-content space-y-6 ${activeSpec === 'dobrador' ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                        <h4 className="font-bold text-lg text-magic-900 font-serif">Dobrador do Destino <span
                            className="font-sans font-normal text-sm text-gray-500 ml-1">| Especialização focada em Manipulação de Probabilidade</span></h4>
                    </div>

                    {/* Efeito de Especialização */}
                    <div className="bg-purple-50/20 border border-purple-200/50 rounded-xl p-5 shadow-xs space-y-3 text-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <h5 className="font-bold text-base text-purple-950 font-serif flex items-center gap-2">
                                <span className="w-2 h-2 rounded bg-purple-500 block"></span>
                                Efeito de Especialização: Intuição Probabilística
                            </h5>
                            <div className="flex gap-2">
                                <span className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Ação Livre
                                </span>
                                <span className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 1 PM
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-750 font-sans leading-relaxed">
                            Uma vez por rodada, prevendo pequenas variações e perturbações quânticas da causalidade, você pode conceder a si mesmo um bônus de <strong>+1 na sua próxima rolagem de dado</strong>.
                        </p>
                        <p className="text-xs text-purple-950 font-semibold font-sans mt-2">Você aprende automaticamente os feitiços de <strong>Revelação</strong> e <strong>Refração de Luz</strong>.</p>
                    </div>

                    {/* Nivel 1 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                1</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-purple-950">Fio da Causalidade</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">Reação
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você manipula o destino imediato, distorcendo a "sorte" para reverter sucessos ou falhas anunciadas.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-purple-50/30 border border-purple-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Gatilho:</strong> Quando um aliado errar um teste ou quando um inimigo acertar um ataque (antes do dano).<br></br>Como Reação (2 PM), você aplica <strong>1 Desvantagem (-1d6)</strong> retroativa na rolagem do inimigo (subtraindo do valor final) ou concede <strong>1 Vantagem (+1d6)</strong> na rolagem do aliado.</p>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Destino Selado:</strong> A vantagem ou desvantagem aplicada retroativamente aumenta para <strong>2d6</strong> (você subtrai o menor/soma o maior dado rolado, definindo o novo resultado).</p>
                                </div>
                                <div className="bg-purple-50/70 border border-purple-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Causalidade Perfeita:</strong> O custo em PM cai para <strong>1 PM</strong>. Se sua reação converter o erro do aliado em sucesso, ele causa +3 de dano bônus. Se converter o acerto do inimigo em erro, o oponente fica <strong>Desestabilizado</strong> (-2 na Defesa por 1 rodada).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 2 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                2</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-purple-950">Sorte Roubada</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você drena a probabilidade positiva de um inimigo, canalizando essa energia de sorte diretamente para fortalecer seu grupo.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-purple-50/30 border border-purple-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Sifão de Sorte:</strong> Como 2 Ações Padrões (4 PM), selecione um inimigo em alcance Médio. O alvo testa Mental + Vontade (DT 12 + seu Atributo Mental). Se falhar, por <strong>2 rodadas</strong>, todas as rolagens dele sofrem <strong>1 Desvantagem (-1d6)</strong> e um aliado ganha <strong>1 Vantagem (+1d6)</strong>.</p>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Roubo Exponencial:</strong> O inimigo que falhar no teste sofre <strong>2 Desvantagens (-2d6)</strong> nas rolagens, e você pode conceder a condição benéfica de 1 Vantagem para <strong>dois aliados diferentes</strong> simultaneamente.</p>
                                </div>
                                <div className="bg-purple-50/70 border border-purple-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Dreno da Causalidade:</strong> O custo de ativação é reduzido para <strong>1 Ação Padrão</strong>. Além disso, sempre que o inimigo sob o efeito do Sifão errar um teste ou ataque devido às desvantagens, você recupera <strong>1 PM</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 3 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                3</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-purple-950">Isso não aconteceu</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">Reação
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você dobra a realidade temporal imediata, rebobinando os últimos segundos para reescrever um acontecimento catastrófico.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-purple-50/30 border border-purple-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Gatilho:</strong> Imediatamente após qualquer teste, ataque ou evento ser anunciado pelo mestre.<br></br>Como Reação (12 PM), você desfaz a ação: a rolagem anterior é apagada e refeita com <strong>1 Vantagem</strong> (aliado) ou <strong>1 Desvantagem</strong> (inimigo). Consome todas as ações de seu próximo turno (Fadiga Temporal).</p>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Âncora Temporal:</strong> O custo é reduzido para <strong>10 PM</strong>. Ao forçar a nova rolagem de um aliado, você pode optar por manter o resultado original caso o novo valor rolado seja pior.</p>
                                </div>
                                <div className="bg-purple-50/70 border border-purple-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Rebobinar Supremo:</strong> O custo é reduzido para <strong>8 PM</strong>. A Fadiga é atenuada: você perde apenas <strong>1 Ação Padrão</strong> no seu próximo turno (em vez de todas as ações).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* O ORÁCULO SPEC CONTENT */}
                <div id="spec-content-oraculo" className={`spec-content space-y-6 ${activeSpec === 'oraculo' ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                        <h4 className="font-bold text-lg text-magic-900 font-serif">O Oráculo <span
                            className="font-sans font-normal text-sm text-gray-500 ml-1">| Especialização focada em Premonição e Interrupção</span></h4>
                    </div>

                    {/* Efeito de Especialização */}
                    <div className="bg-purple-50/20 border border-purple-200/50 rounded-xl p-5 shadow-xs space-y-3 text-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <h5 className="font-bold text-base text-purple-950 font-serif flex items-center gap-2">
                                <span className="w-2 h-2 rounded bg-purple-500 block"></span>
                                Efeito de Especialização: Olhar do Amanhã
                            </h5>
                            <div className="flex gap-2">
                                <span className="bg-gray-50 border border-gray-200/60 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Passivo
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-750 font-sans leading-relaxed">
                            Você soma seu atributo de Magia ou Mental em testes de Iniciativa. Além disso, seu vislumbre antecipado do perigo impede que você seja pego na condição <strong>Surpreso</strong> no início do combate.
                        </p>
                        <p className="text-xs text-purple-950 font-semibold font-sans mt-2">Você aprende automaticamente o feitiço de Vínculo: <strong>Elo Kármico</strong>.</p>
                    </div>

                    {/* Nivel 1 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                1</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-purple-950">Visão de Segundos</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">Reação
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você prevê golpes milissegundos antes que ocorram, permitindo alertar e reposicionar aliados em perigo.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-purple-50/30 border border-purple-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Aviso Precognitivo:</strong> Gatilho: Quando você ou um aliado em alcance Curto for alvo de um ataque (antes da rolagem). Como Reação (2 PM), você grita um aviso: o alvo ganha <strong>+3 na Defesa</strong> contra aquele golpe. Se o ataque errar, o atacante perde 1 Ação Padrão no próprio turno dele.</p>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Defesa Antecipada:</strong> O bônus concedido na Defesa aumenta para <strong>+5</strong>. Adicionalmente, você pode projetar o aviso para aliados situados até alcance Médio.</p>
                                </div>
                                <div className="bg-purple-50/70 border border-purple-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Contra-Ataque Profético:</strong> Caso o ataque inimigo erre devido ao bônus de sua premonição, o aliado protegido pode desferir um contra-ataque físico imediato contra o atacante como uma Reação gratuita.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 2 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                2</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-purple-950">Ruído de Pensamento</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">Reação
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você projeta um grito psíquico direcionado para quebrar a concentração e interromper a conjuração inimiga.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-purple-50/30 border border-purple-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Contra-Feitiço Psíquico:</strong> Gatilho: Quando um inimigo começar a conjurar. Como Reação (4 PM), faça uma disputa de Magia + Controle contra a conjuração dele. Se você vencer, a magia falha (consome os PMs e as ações do oponente), mas você consome 1 Ação Padrão do seu próximo turno.</p>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Silêncio Psíquico:</strong> Se você vencer a disputa, o conjurador sofre <strong>1d6 + seu atributo de Magia</strong> de dano psíquico e fica impedido de conjurar qualquer magia na rodada seguinte devido ao choque neural.</p>
                                </div>
                                <div className="bg-purple-50/70 border border-purple-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Fluidez de Interrupção:</strong> A reação torna-se perfeitamente fluida, não consumindo nenhuma ação de seu próprio turno seguinte caso você vença a disputa contra o conjurador.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 3 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                3</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-purple-950">Sincronia Tática Absoluta</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você conecta a consciência dos aliados, compartilhando precognição e criando uma perfeita mente tática coletiva.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-purple-50/30 border border-purple-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Como 1 Ação Complexa (6 PM), você sincroniza a mente de todos os aliados por <strong>1 rodada</strong>. Todos os aliados (inclusive você) recebem <strong>1 Vantagem (+1d6)</strong> em todas as rolagens de ataque e defesa. Aliados não podem ser flanqueados ou surpresos.</p>
                                </div>
                                <div className="bg-purple-50/50 border border-purple-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Coordenação Perfeita:</strong> A duração da sincronia aumenta para <strong>2 rodadas</strong>. Enquanto conectados, todos os aliados ganham <strong>+2 na Defesa</strong> se estiverem em alcance Curto de pelo menos um outro aliado conectado.</p>
                                </div>
                                <div className="bg-purple-50/70 border border-purple-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-purple-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Sincronia Fluida:</strong> O custo de ativação é reduzido para <strong>1 Ação Padrão</strong>. Adicionalmente, toda vez que um aliado conectado realizar um acerto crítico, você recupera <strong>1 PM</strong> (máximo de 3 PM recuperados por conjuração).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
