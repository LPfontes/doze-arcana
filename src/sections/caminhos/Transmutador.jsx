import React from 'react';

export default function Transmutador({ activeSpec, switchSpec, hideNav }) {
    return (
        <>
            {/* Specialization Navigation for Transmutador */}
            {!hideNav && (
                <div id="nav-transmutador"
                    className="caminho-nav bg-emerald-50/50 border-b border-emerald-100 p-2 flex flex-wrap gap-2">
                    <button onClick={() => switchSpec("metamorfo")} id="tab-metamorfo"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'metamorfo'
                            ? 'bg-white border-emerald-200 text-emerald-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">Metamorfo</span>
                        <span
                            className={`text-[9px] uppercase tracking-wider font-sans font-normal ${activeSpec === 'metamorfo' ? 'text-indigo-500' : 'text-gray-400'}`}>Transformação
                            Pessoal</span>
                    </button>
                    <button onClick={() => switchSpec("artifice")} id="tab-artifice"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'artifice'
                            ? 'bg-white border-emerald-200 text-emerald-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">Artífice da Matéria</span>
                        <span
                            className={`text-[9px] uppercase tracking-wider font-sans font-normal ${activeSpec === 'artifice' ? 'text-indigo-500' : 'text-gray-400'}`}>Alteração
                            de Cenário</span>
                    </button>
                    <button onClick={() => switchSpec("biomante")} id="tab-biomante"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'biomante'
                            ? 'bg-white border-emerald-200 text-emerald-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">Biomante</span>
                        <span
                            className={`text-[9px] uppercase tracking-wider font-sans font-normal ${activeSpec === 'biomante' ? 'text-indigo-500' : 'text-gray-400'}`}>Buffs
                            & Debuffs</span>
                    </button>
                    <button onClick={() => switchSpec("alquimista")} id="tab-alquimista"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'alquimista'
                            ? 'bg-white border-emerald-200 text-emerald-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">Alquimista Volátil</span>
                        <span
                            className={`text-[9px] uppercase tracking-wider font-sans font-normal ${activeSpec === 'alquimista' ? 'text-indigo-500' : 'text-gray-400'}`}>Reações
                            & Consumíveis</span>
                    </button>
                </div>
            )}

            {/* Talent Content Area */}
            <div className="p-6 md:p-8 bg-white">

                {/* METAMORFO SPEC CONTENT */}
                <div id="spec-content-metamorfo" className={`spec-content space-y-6 ${activeSpec === 'metamorfo' ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        <h4 className="font-bold text-lg text-magic-900 font-serif">Metamorfo <span
                            className="font-sans font-normal text-sm text-gray-500 ml-1">| Especialização focada em Transformação Pessoal</span></h4>
                    </div>

                    {/* Efeito de Especialização */}
                    <div className="bg-emerald-50/20 border border-emerald-200/50 rounded-xl p-5 shadow-xs space-y-3 text-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <h5 className="font-bold text-base text-emerald-950 font-serif flex items-center gap-2">
                                <span className="w-2 h-2 rounded bg-emerald-500 block"></span>
                                Efeito de Especialização: Mutação Adaptativa
                            </h5>
                            <div className="flex gap-2">
                                <span className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 Ação Padrão
                                </span>
                                <span className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 2 PM
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-750 font-sans leading-relaxed">
                            Você aprende a transmutar temporariamente sua própria anatomia. Ao ativar a mutação, escolha um dos efeitos abaixo:
                        </p>
                        <p className="text-xs text-emerald-950 font-semibold font-sans mt-2">Você aprende automaticamente os feitiços de Vida e Água: <strong>Cura Vital</strong> e <strong>Lança de Agnes</strong>.</p>
                        <div className="bg-white/60 border border-emerald-100/40 rounded-lg p-2.5 text-xs leading-relaxed text-gray-655 space-y-1">
                            <p><strong>Opções de Adaptação:</strong></p>
                            <ul className="list-disc pl-4 space-y-0.5">
                                <li><strong>Garras de Fera:</strong> Seus ataques desarmados passam a causar <strong>3 + 1d3 + seu atributo de Físico</strong>. Elas são armas Cortantes.</li>
                                <li><strong>Escamas Espessas:</strong> Sua pele enrijece, concedendo-lhe <strong>+1 Ponto de Redução de Dano (RD)</strong>.</li>
                            </ul>
                            <p className="text-[10px] text-gray-500 pt-1">Duração: Até o final da cena ou até decidir reverter (Ação Livre).</p>
                        </div>
                    </div>

                    {/* Nivel 1 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                1</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Mutação de Batalha</h5>
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
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Sua capacidade de automutação biológica se aprofunda, permitindo manifestações mais agressivas e eficientes em combate.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-emerald-50/30 border border-emerald-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Mutação Sinergética:</strong> Você pode ativar ambas as adaptações (Garras e Escamas) simultaneamente ao usar o Efeito de Especialização. Seus ataques desarmados passam a causar <strong>3 + 1d6 + seu atributo de Físico</strong> de dano letal.</p>
                                </div>
                                <div className="bg-emerald-50/50 border border-emerald-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Mutação Ampliada:</strong> Adiciona novas opções de mutação que você pode escolher: <strong>Membros Estendidos</strong> (seus ataques desarmados passam a ter alcance Curto/2 quadrados) ou <strong>Membros Alados</strong> (ganha deslocamento de voo igual ao seu movimento terrestre).</p>
                                </div>
                                <div className="bg-emerald-50/70 border border-emerald-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Predador Perfeito:</strong> O dano básico de suas garras desarmadas aumenta para <strong>6 + 1d6 + seu atributo de Físico</strong>. Além disso, uma vez por turno, após atingir um inimigo com as garras, você pode fazer um ataque rápido de mordida extra como Ação Livre (causa 1d4 de dano).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 2 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                2</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Fisiologia Fluida</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                            <div className="flex gap-2">
                                <span
                                    className="bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">Reação
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você transmuta a estrutura celular instantaneamente para desviar de ferimentos letais ou escapar de restrições físicas.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-emerald-50/30 border border-emerald-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Gatilho:</strong> Quando for atingido por um ataque físico ou agarrado.<br></br>Como Reação (3 PM), você liquefaz a área atingida de seu corpo: sofre apenas <strong>metade do dano</strong> (após reduzir pela sua PR) e escapa de qualquer imobilização ou agarramento, deslizando para um espaço adjacente livre.</p>
                                </div>
                                <div className="bg-emerald-50/50 border border-emerald-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600">O custo da reação é reduzido para <strong>2 PM</strong>. Além disso, você pode deslizar até <strong>2 espaços</strong> (em vez de 1) sem provocar ataques de Reação dos oponentes.</p>
                                </div>
                                <div className="bg-emerald-50/70 border border-emerald-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Fluidez Absoluta:</strong> Se você passar em um teste de Físico + Agilidade (DT igual ao ataque do inimigo), o dano sofrido é reduzido a <strong>zero</strong> (em vez de metade). Além disso, você pode deslizar para qualquer espaço livre dentro de alcance Curto.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 3 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                3</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Quimera Arcana</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você libera toda a estabilidade celular, transfigurando seu corpo temporariamente na temida Forma Quimérica.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-emerald-50/30 border border-emerald-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Como uma <strong>Ação Completa</strong> (8 PM), você assume a forma de besta quimérica por <strong>3 turnos</strong>. Seu atributo Físico recebe <strong>+2</strong> (podendo ultrapassar o limite), ganha <strong>1 Vantagem (+1d6)</strong> em testes de Físico e regenera <strong>1d4 PV</strong> no início de seus turnos. Ao final do efeito, você sofre Fadiga e perde <strong>2 Ações Padrões</strong> no seu próximo turno.</p>
                                </div>
                                <div className="bg-emerald-50/50 border border-emerald-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Quimera Elemental:</strong> Ao se transformar, escolha um elemento (Fogo, Gelo ou Veneno). Seus ataques corporais causam <strong>+2 de dano bônus</strong> daquele elemento e a regeneração de PVs por turno aumenta para <strong>2d4 PV</strong>.</p>
                                </div>
                                <div className="bg-emerald-50/70 border border-emerald-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Quimera Suprema:</strong> O custo de ativação é reduzido para <strong>1 Ação Padrão e 1 Ação de Movimento</strong> e <strong>6 PM</strong>. Além disso, seu metabolismo estabiliza o estresse biológico e você não sofre a penalidade de Fadiga (perda de ações) ao término do efeito.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ARTÍFICE DA MATÉRIA SPEC CONTENT */}
                <div id="spec-content-artifice" className={`spec-content space-y-6 ${activeSpec === 'artifice' ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        <h4 className="font-bold text-lg text-magic-900 font-serif">Artífice da Matéria <span
                            className="font-sans font-normal text-sm text-gray-500 ml-1">| Especialização focada em Alteração de Cenário e Objetos</span></h4>
                    </div>

                    {/* Efeito de Especialização */}
                    <div className="bg-emerald-50/20 border border-emerald-200/50 rounded-xl p-5 shadow-xs space-y-3 text-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <h5 className="font-bold text-base text-emerald-950 font-serif flex items-center gap-2">
                                <span className="w-2 h-2 rounded bg-emerald-500 block"></span>
                                Efeito de Especialização: Manipulação da Matéria
                            </h5>
                            <div className="flex gap-2">
                                <span className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 Ação Padrão
                                </span>
                                <span className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 2 PM
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-750 font-sans leading-relaxed">
                            Você altera as propriedades físicas básicas de um objeto não-mágico que possa ver em alcance <strong>Curto</strong>. Você pode transformar o piso de pedra em lama escorregadia, ou transformar água em gelo, além de abrir buracos em paredes ou no chão.
                        </p>
                        <p className="text-xs text-emerald-950 font-semibold font-sans mt-2">Você aprende automaticamente os feitiços de <strong>Construção de Solo</strong> e <strong>Restauração Material</strong>.</p>
                    </div>

                    {/* Nivel 1 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                1</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Transmutar Objeto</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você altera a matéria ao redor para erguer defesas ou bloquear caminhos.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-emerald-50/30 border border-emerald-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Alteração de Terreno:</strong> Como 2 Ações Padrões (3 PM), você cria zonas de Terreno Difícil em uma área de até 4 espaços ou ergue estruturas temporárias (como paredes ou rampas) de até 4 espaços de volume.</p>
                                </div>
                                <div className="bg-emerald-50/50 border border-emerald-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Estruturas Complexas:</strong> A área ou o volume das estruturas aumenta para até <strong>6 espaços</strong>. As barreiras erguidas agora possuem <strong>15 PV</strong> e podem ser usadas como cobertura parcial ou total contra ataques.</p>
                                </div>
                                <div className="bg-emerald-50/70 border border-emerald-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Transmutação Dinâmica:</strong> O custo de ativação é reduzido para <strong>1 Ação Padrão</strong> (mantendo 3 PM). Além disso, você pode prender um inimigo erguendo o solo ao redor dele, exigindo um teste de Físico + Agilidade (DT 12 + seu atributo de Magia) para não ganhar a condição <strong>Impedido</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 2 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                2</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Sabotagem Arcana</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você foca sua magia diretamente na estrutura física dos equipamentos dos oponentes para destruí-los.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-emerald-50/30 border border-emerald-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Corrosão Estrutural:</strong> Como 2 Ações Padrões (4 PM), faça um ataque mágico (teste de Magia + Controle contra a Defesa do alvo). Se acertar, a <strong>RD de armadura do alvo é reduzida a zero instantaneamente</strong> e o item acumula 1 ponto de <strong>Danificado</strong>.</p>
                                </div>
                                <div className="bg-emerald-50/50 border border-emerald-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Ruína de Equipamento:</strong> Se o alvo utilizar armas ou escudos físicos, você pode optar por enferrujar a arma (impondo <strong>1 Desvantagem</strong> contínua nas rolagens de ataque dela) ou estilhaçar o escudo (removendo seu bônus de Defesa permanentemente).</p>
                                </div>
                                <div className="bg-emerald-50/70 border border-emerald-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Sobrecarga Molecular:</strong> O custo de ativação é reduzido para <strong>1 Ação Padrão</strong> (3 PM). Se o alvo sabotado portar armaduras ou armas mágicas, o colapso de mana gera uma micro-explosão que causa <strong>2d6 + seu atributo de Magia</strong> de dano mágico direto no portador.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 3 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                3</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Definir Ambiente</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você transmuta a própria constituição do campo de batalha ao seu redor, alterando o ambiente para debilitar os oponentes.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-emerald-50/30 border border-emerald-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Como 1 Ação Complexa (6 PM), você transmuta uma área <strong>Média (6x6)</strong> em alcance Médio em um ambiente extremo por <strong>1 rodada</strong>. Alvos na área devem passar no teste de resistência correspondente ou sofrer os efeitos:</p>
                                    <div className="mt-2 space-y-1.5 text-[11px] text-gray-550 border-t border-emerald-100/30 pt-1.5 leading-normal">
                                        <p><strong>• Gelo (Agilidade DT 12 + Magia):</strong> Falha aplica a condição <strong>Caído</strong>. A área é considerada Terreno Difícil.</p>
                                        <p><strong>• Magma (Vigor DT 12 + Magia para metade):</strong> Causa <strong>2d6 + seu atributo de Magia</strong> de dano de Fogo e aplica <strong>Dano Contínuo</strong> (1d6 de Fogo por 2 rodadas) em caso de falha.</p>
                                        <p><strong>• Nuvem de Veneno (Vigor DT 12 + Magia):</strong> Falha causa <strong>1d6</strong> de dano (ignora PR) e aplica a condição <strong>Desorientado</strong> por 1 rodada. A nuvem concede Cobertura Parcial.</p>
                                        <p><strong>• Espinhos de Cristal (Agilidade DT 12 + Magia para metade):</strong> Causa <strong>1d6 + seu atributo de Magia</strong> de dano de Perfuração e aplica a condição <strong>Impedido</strong> por 1 rodada em caso de falha.</p>
                                        <p><strong>• Lodo Gravitacional (Vigor DT 12 + Magia):</strong> Falha aplica a condição <strong>Imobilizado</strong>. O custo de movimento é triplicado e projéteis arremessados caem no chão.</p>
                                    </div>
                                </div>
                                <div className="bg-emerald-50/50 border border-emerald-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Ambiente Persistente:</strong> A transmutação climática torna-se estável e dura por até <strong>3 rodadas</strong> (exige manutenção de 1 PM por turno do conjurador no início de seu turno).</p>
                                </div>
                                <div className="bg-emerald-50/70 border border-emerald-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Domínio Ambiental Absoluto:</strong> O custo de ativação é reduzido para <strong>1 Ação Padrão</strong>. Além disso, você e seus aliados tornam-se imunes e ignoram completamente os danos e condições nocivas do ambiente transmutado.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BIOMANTE SPEC CONTENT */}
                <div id="spec-content-biomante" className={`spec-content space-y-6 ${activeSpec === 'biomante' ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        <h4 className="font-bold text-lg text-magic-900 font-serif">Biomante <span
                            className="font-sans font-normal text-sm text-gray-500 ml-1">| Especialização focada em Buffs e Debuffs Corporais</span></h4>
                    </div>

                    {/* Efeito de Especialização */}
                    <div className="bg-emerald-50/20 border border-emerald-200/50 rounded-xl p-5 shadow-xs space-y-3 text-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <h5 className="font-bold text-base text-emerald-950 font-serif flex items-center gap-2">
                                <span className="w-2 h-2 rounded bg-emerald-500 block"></span>
                                Efeito de Especialização: Diagnóstico Vital
                            </h5>
                            <div className="flex gap-2">
                                <span className="bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Ação Livre
                                </span>
                                <span className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 1 PM
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-750 font-sans leading-relaxed">
                            Ao tocar um ser vivo, você faz uma leitura instantânea do seu fluxo biológico (revelando PVs atuais, PMs e todas as condições físicas ativas ou imunidades do alvo).
                        </p>
                        <p className="text-xs text-emerald-950 font-semibold font-sans mt-2">Você aprende automaticamente o feitiço de <strong>Cura Vital</strong>.</p>
                    </div>

                    {/* Nivel 1 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                1</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Costura Celular</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você acelera o metabolismo celular para restaurar tecidos rompidos ou purificar infecções do organismo.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-emerald-50/30 border border-emerald-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Regeneração Tecidual:</strong> Como 2 Ações Padrões (3 PM), você cura <strong>3 + 1d6 + seu atributo de Magia</strong> em PV de um aliado tocado, ou purifica totalmente uma condição física mundana activa (como envenenamento simples ou sangramento).</p>
                                </div>
                                <div className="bg-emerald-50/50 border border-emerald-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Restauração Acelerada:</strong> O valor da cura celular aumenta para <strong>5 + 1d6 + seu atributo de Magia</strong>. Além disso, você pode gastar <strong>+2 PM</strong> para projetar a cura por meio do ar, estendendo o alcance para Curto.</p>
                                </div>
                                <div className="bg-emerald-50/70 border border-emerald-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Milagre Biológico:</strong> A cura aumenta para <strong>7 + 2d6 + seu atributo de Magia</strong> em PV. Adicionalmente, você pode purificar até <strong>duas condições físicas</strong> simultaneamente (incluindo condições mágicas como Cegueira ou Surdez).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 2 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                2</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Toque da Atrofia</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você inverte a lógica do fluxo vital, enfraquecendo e atrofiando o sistema biológico dos oponentes.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-emerald-50/30 border border-emerald-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Enfraquecimento Corporal:</strong> Como 2 Ações Padrões (4 PM), faça um ataque mágico corpo a corpo contra a Defesa do alvo. Se acertar, causa <strong>1d6 de dano base</strong> e o Atributo Físico do alvo é reduzido em <strong>-1</strong> por 2 rodadas.</p>
                                </div>
                                <div className="bg-emerald-50/50 border border-emerald-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Paralisia Nervosa:</strong> A penalidade no Atributo Físico do alvo aumenta para <strong>-2</strong>. Além disso, se ele falhar em um teste de Físico + Vigor (DT 12 + seu atributo de Magia), ele fica sob a condição <strong>Enfraquecido</strong>.</p>
                                </div>
                                <div className="bg-emerald-50/70 border border-emerald-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Necrose Localizada:</strong> O custo de ativação é reduzido para <strong>1 Ação Padrão</strong> (3 PM). Além da atrofia dos atributos, o alvo sofre <strong>4 de dano contínuo (que ignora PR)</strong> no início de seus próximos 2 turnos devido à rápida degradação tecidual.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 3 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                3</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Sobrecarga Vital</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você injeta pura energia arcana no metabolismo, forçando o corpo do alvo muito além dos limites biológicos normais.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-emerald-50/30 border border-emerald-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Como 1 Ação Complexa (6 PM), você concede a um aliado tocado (ou a si mesmo) <strong>+2 Ações Padrões adicionais</strong> por rodada e <strong>1 Vantagem (+1d6)</strong> em todas as rolagens por <strong>3 turnos</strong>. Ao término, o alvo perde <strong>metade de seus PV atuais</strong> e fica <strong>Esgotado</strong> por 1 rodada.</p>
                                </div>
                                <div className="bg-emerald-50/50 border border-emerald-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Metabolismo de Aço:</strong> Durante os 3 turnos de sobrecarga, o alvo protegido torna-se completamente <strong>imune a todas as condições físicas e mentais</strong>, e ganha um bônus de <strong>+4 de Proteção (PR)</strong>.</p>
                                </div>
                                <div className="bg-emerald-50/70 border border-emerald-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Hiper-Canalização Segura:</strong> O preço cobrado ao final do efeito é suavizado: o alvo perde apenas <strong>25% de seus PV atuais</strong> (em vez de metade) e não sofre a condição <strong>Esgotado</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* O ALQUIMISTA VOLÁTIL SPEC CONTENT */}
                <div id="spec-content-alquimista" className={`spec-content space-y-6 ${activeSpec === 'alquimista' ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        <h4 className="font-bold text-lg text-magic-900 font-serif">O Alquimista Volátil <span
                            className="font-sans font-normal text-sm text-gray-500 ml-1">| Especialização focada em Reações Químicas e Consumíveis</span></h4>
                    </div>

                    {/* Efeito de Especialização */}
                    <div className="bg-emerald-50/20 border border-emerald-200/50 rounded-xl p-5 shadow-xs space-y-3 text-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <h5 className="font-bold text-base text-emerald-950 font-serif flex items-center gap-2">
                                <span className="w-2 h-2 rounded bg-emerald-500 block"></span>
                                Efeito de Especialização: Destilar Reagente
                            </h5>
                            <div className="flex gap-2">
                                <span className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Ação Rápida
                                </span>
                                <span className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 1 PM
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-750 font-sans leading-relaxed">
                            Você sintetiza instantaneamente um reagente ácido ou básico volátil em um frasco. Você pode arremessá-lo a alcance Curto como ataque livre (causa 1d3 de dano elemental: Fogo, Água ou Terra/Ácido) ou usá-lo fora de combate para corroer amarras ou fechaduras.
                        </p>
                        <p className="text-xs text-emerald-950 font-semibold font-sans mt-2">Você aprende automaticamente os feitiços de <strong>Fusão Elemental</strong> e <strong>Ignição Volátil</strong>.</p>
                    </div>

                    {/* Nivel 1 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                1</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Mistura Instável</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você cria e arremessa poções arcanas que explodem ao impacto, cobrindo o solo de elementos.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-emerald-50/30 border border-emerald-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Frasco Elemental:</strong> Como 1 Ação Padrão (2 PM), você arremessa um frasco explosivo a alcance Curto. Escolha um elemento (Fogo, Gelo ou Veneno). Inimigos em uma área **Pequena (3x3)** sofrem <strong>1d6 + seu atributo de Magia</strong> de dano daquele elemento.</p>
                                </div>
                                <div className="bg-emerald-50/50 border border-emerald-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Névoa Química persistente:</strong> O dano elemental aumenta para <strong>2d6 + seu atributo de Magia</strong>. A área atingida fica impregnada pelo elemento por <strong>2 rodadas</strong>, agindo como terreno perigoso (sofre 3 de dano elemental ao entrar ou começar o turno na área).</p>
                                </div>
                                <div className="bg-emerald-50/70 border border-emerald-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Explosivos em Cadeia:</strong> O alcance do arremesso aumenta para Médio. O custo em ações é de 1 Ação Padrão (2 PM), e o frasco se divide em <strong>3 fragmentos</strong>, permitindo atingir 3 alvos diferentes ou cobrir uma área muito maior.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 2 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                2</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Catalisador Reativo</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você usa sua magia para catalisar reações elementares, maximizando os danos no corpo dos oponentes.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-emerald-50/30 border border-emerald-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600"><strong>Gatilho:</strong> Quando um inimigo sofrer dano elemental de qualquer fonte.<br></br>Como Reação (3 PM), você acelera a reação molecular: o dano é <strong>maximizado nos dados automaticamente</strong>, e o alvo principal ganha a condição <strong>Cego</strong> ou <strong>Surdo</strong> por 1 rodada.</p>
                                </div>
                                <div className="bg-emerald-50/50 border border-emerald-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Reação em Cadeia:</strong> A catalisação química expande-se para inimigos adjacentes ao alvo primário, fazendo com que eles também sofram metade do dano elemental maximizado.</p>
                                </div>
                                <div className="bg-emerald-50/70 border border-emerald-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Combustão Repentina:</strong> O custo em PM cai para <strong>2 PM</strong>. O alvo catalisado explode, espalhando chamas/estilhaços que aplicam a condição elemental correspondente (ex: Queimadura ou Hipotermia) a todas as criaturas em alcance Curto.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nivel 3 */}
                    <div
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3"><span
                                className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                3</span>
                                <h5 className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Transmutação Sanguínea</h5>
                                <span className="bg-teal-50 border border-teal-200 text-teal-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider font-sans uppercase">Evolutivo</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 font-sans">
                            <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você altera a composição do sangue de oponentes vivos, transformando-o em chumbo pesado ou ácido corrosivo.</p>
                            
                            <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                <div className="bg-emerald-50/30 border border-emerald-100/40 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau I (Base):</span>
                                    <p className="text-gray-600">Como 1 Ação Complexa (7 PM), transmuta o sangue de um alvo vivo em alcance Curto. O inimigo faz um teste de Físico + Vigor (DT 14 + seu atributo de Magia). Se falhar, sofre <strong>2d6 de dano contínuo (que ignora PR)</strong> no início de seus próximos 3 turnos, e todos os seus Atributos Físicos contam como -2.</p>
                                </div>
                                <div className="bg-emerald-50/50 border border-emerald-100/60 rounded-lg p-2.5">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau II (Avançado):</span>
                                    <p className="text-gray-600"><strong>Peste Biológica:</strong> O dano contínuo aumenta para <strong>3d6</strong>. Se o inimigo morrer sob o efeito deste feitiço, seu corpo explode em uma névoa ácida infectando todos os oponentes adjacentes (que devem fazer novos testes).</p>
                                </div>
                                <div className="bg-emerald-50/70 border border-emerald-200/50 rounded-lg p-2.5 shadow-xs">
                                    <span className="font-bold text-emerald-950 block mb-0.5">Grau III (Mestre):</span>
                                    <p className="text-gray-600"><strong>Alquimia Hemática Rápida:</strong> O custo de ativação é reduzido para <strong>1 Ação Padrão</strong>. Além disso, o alvo rola o teste de resistência com <strong>1 Desvantagem (-1d6)</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
