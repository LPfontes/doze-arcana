import React, { useState } from 'react';

export default function Caminhos() {
    const [activeCaminho, setActiveCaminho] = useState('combatente');
    const [activeSpec, setActiveSpec] = useState('lamina');

    const selectCaminho = (caminho) => {
        setActiveCaminho(caminho);
        if (caminho === 'combatente') setActiveSpec('lamina');
        else if (caminho === 'invocador') setActiveSpec('elementalista');
        else if (caminho === 'transmutador') setActiveSpec('metamorfo');
        else if (caminho === 'mentalista') setActiveSpec('ilusionista');
    };

    const switchSpec = (spec) => {
        setActiveSpec(spec);
    };
    return (
        <section id="sec-caminhos" className="content-section">
            <h2 className="text-3xl border-b-2 border-magic-100 pb-2 mb-4">7. Os Caminhos e Talentos</h2>
            <p className="mb-4">O desenvolvimento dos personagens é feito através de Caminhos, divididos em
                especializações que fornecem talentos escalonáveis (Níveis 1 a 3).</p>

            <div className="grid grid-cols-1 gap-6 mt-6">

                {/* Combatente */}
                <div id="card-combatente" onClick={() => selectCaminho("combatente")}
                    className={`p-5 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group ${activeCaminho === 'combatente'
                        ? 'border-indigo-500 bg-indigo-50/10 shadow-md hover:shadow-lg'
                        : 'bg-white border-magic-100 shadow-sm hover:border-indigo-500 hover:shadow-lg'
                        }`}>
                    <div
                        className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 group-hover:bg-indigo-500/10 rounded-bl-full transition-colors duration-300 flex items-start justify-end p-2 text-indigo-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="flex justify-between items-start pr-6">
                        <h4 className="font-bold text-xl text-magic-900 mb-3 flex items-center">Caminho do Combatente
                        </h4>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Foco na linha de frente e em canalização mágica
                        através do corpo.</p>
                    <ul className="text-sm space-y-2">
                        <li><strong>A Lâmina</strong > Ataques e encantamentos <br /><span
                            className="text-xs text-gray-500">(Encantar, Fenda, Execução Arcana)</span></li>
                        <li><strong>O Bastião</strong> Defesa e retaliação <br /><span
                            className="text-xs text-gray-500">(Escudo Arcano, Retaliação Rúnica, Fortaleza
                            Inabalável)</span></li>
                        <li><strong>A Vanguarda</strong> Mobilidade e impacto <br /><span
                            className="text-xs text-gray-500">(Acelerar, Impacto Meteórico, Deslize
                            Dimensional)</span></li>
                        <li><strong>O Franco-Atirador</strong> Distância e precisão <br /><span
                            className="text-xs text-gray-500">(Disparo Energizado, Mira Perfurante, Tiro de
                            Execução)</span></li>
                    </ul>
                    <div
                        className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-indigo-600 font-semibold group-hover:text-indigo-800">
                        <span>Explorar Especializações</span>

                    </div>
                </div>

                {/* Invocador */}
                <div id="card-invocador" onClick={() => selectCaminho("invocador")}
                    className={`p-5 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group ${activeCaminho === 'invocador'
                        ? 'border-cyan-500 bg-cyan-50/10 shadow-md hover:shadow-lg'
                        : 'bg-white border-magic-100 shadow-sm hover:border-cyan-500 hover:shadow-lg'
                        }`}>
                    <div
                        className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 group-hover:bg-cyan-500/10 rounded-bl-full transition-colors duration-300 flex items-start justify-end p-2 text-cyan-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="flex justify-between items-start pr-6">
                        <h4 className="font-bold text-xl text-magic-900 mb-3 flex items-center">Caminho do Invocador
                        </h4>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Foco em invocações e controle de zona.</p>
                    <ul className="text-sm space-y-2">
                        <li><strong>Elementalista</strong> Dano em área <br /><span
                            className="text-xs text-gray-500">(Erupção
                            Elemental, Tempestade Persistente,
                            Cataclismo)</span></li>
                        <li><strong>Mestre de Vínculos</strong> Familiares e evocações <br /><span
                            className="text-xs text-gray-500">(Evocar Servil Arcano, Elo de Sangue e Mana,
                            Avatar de Invocação)</span></li>
                        <li><strong>Mestre de Domínios</strong> Alteração de terreno <br /><span
                            className="text-xs text-gray-500">(Muralha Mística, Pântano Arcano, Santuário do
                            Manipulador)</span></li>
                        <li><strong>O Arquiteto de Construtos</strong> Torres e dispositivos <br /><span
                            className="text-xs text-gray-500">(Sentinela Arcana, Campo de Interação,
                            Sobrecarga do Arquiteto)</span></li>
                    </ul>
                    <div
                        className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-cyan-600 font-semibold group-hover:text-cyan-800">
                        <span>Explorar Especializações</span>

                    </div>
                </div>

                {/* Transmutador */}
                <div id="card-transmutador" onClick={() => selectCaminho("transmutador")}
                    className={`p-5 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group ${activeCaminho === 'transmutador'
                        ? 'border-emerald-500 bg-emerald-50/10 shadow-md hover:shadow-lg'
                        : 'bg-white border-emerald-500 hover:shadow-lg shadow-sm border-magic-100'
                        }`}>
                    <div
                        className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 group-hover:bg-emerald-500/10 rounded-bl-full transition-colors duration-300 flex items-start justify-end p-2 text-emerald-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="flex justify-between items-start pr-6">
                        <h4 className="font-bold text-xl text-magic-900 mb-3 flex items-center">Caminho do Transmutador
                        </h4>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Foco na biologia e química molecular.</p>
                    <ul className="text-sm space-y-2">
                        <li><strong>Metamorfo</strong> Transformação anatômica <br /><span
                            className="text-xs text-gray-500">(Mutação de Batalha, Fisiologia Fluida,
                            Quimera Arcana)</span></li>
                        <li><strong>Artífice da Matéria</strong> Alteração de cenário <br /><span
                            className="text-xs text-gray-500">(Transmutar Objeto, Sabotagem Arcana, Definir
                            Ambiente)</span></li>
                        <li><strong>Biomante</strong> Buffs e debuffs corporais <br /><span
                            className="text-xs text-gray-500">(Costura Celular, Toque da Atrofia, Sobrecarga
                            Vital)</span></li>
                        <li><strong>O Alquimista Volátil</strong >Reações e consumíveis <br /><span
                            className="text-xs text-gray-500">(Mistura Instável, Catalisador Reativo,
                            Transmutação Sanguínea)</span></li>
                    </ul>
                    <div
                        className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-emerald-600 font-semibold group-hover:text-emerald-800">
                        <span>Explorar Especializações</span>

                    </div>
                </div>

                {/* Mentalista */}
                <div id="card-mentalista" onClick={() => selectCaminho("mentalista")}
                    className={`p-5 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group ${activeCaminho === 'mentalista'
                        ? 'border-purple-500 bg-purple-50/10 shadow-md hover:shadow-lg'
                        : 'bg-white border-magic-100 shadow-sm hover:border-purple-500 hover:shadow-lg'
                        }`}>
                    <div
                        className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 group-hover:bg-purple-500/10 rounded-bl-full transition-colors duration-300 flex items-start justify-end p-2 text-purple-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="flex justify-between items-start pr-6">
                        <h4 className="font-bold text-xl text-magic-900 mb-3 flex items-center">Caminho do Mentalista
                        </h4>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Foco em dano psicológico e ilusões.</p>
                    <ul className="text-sm space-y-2">
                        <li><strong>Ilusionista</strong> Falsa realidade<br /><span
                            className="text-xs text-gray-500">(Imagem Falsa, Véu do Oculto, Pesadelo)</span>
                        </li>
                        <li><strong>Controlador</strong> Controle mental<br /><span
                            className="text-xs text-gray-500">(Chicote Psíquico, Comando Subconsciente,
                            Marionete Arcana)</span></li>
                        <li><strong>Dobrador do Destino</strong> Probabilidades<br /><span
                            className="text-xs text-gray-500">(Fio da Causalidade, Sorte Roubada, Isso não
                            aconteceu)</span></li>
                        <li><strong>O Oráculo</strong> Premonição<br /><span
                            className="text-xs text-gray-500">(Visão de Segundos, Ruído de Pensamento,
                            Sincronia Tática Absoluta)</span></li>
                    </ul>
                    <div
                        className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-purple-600 font-semibold group-hover:text-purple-800">
                        <span>Explorar Especializações</span>

                    </div>
                </div>

            </div>

            {/* Detalhamento de Especializações e Talentos */}
            <div id="talent-explorer-section"
                className="mt-8 border border-indigo-100 rounded-xl overflow-hidden bg-slate-50 shadow-md transition-all duration-300">

                {/* Explorer Header Banner */}
                <div className={`text-white p-6 md:p-8 transition-colors duration-300 bg-gradient-to-r ${activeCaminho === 'combatente' ? 'from-magic-900 to-indigo-950' :
                    activeCaminho === 'invocador' ? 'from-cyan-900 to-cyan-950' :
                        activeCaminho === 'transmutador' ? 'from-emerald-900 to-emerald-950' :
                            'from-purple-900 to-purple-950'
                    }`}>
                    <div className="flex items-center gap-3"><div id="explorer-icon"
                        className={`p-2.5 rounded-lg border shadow-inner flex items-center justify-center text-amber-400 ${activeCaminho === 'combatente' ? 'bg-indigo-500/20 border-indigo-500/30' :
                            activeCaminho === 'invocador' ? 'bg-cyan-500/20 border-cyan-500/30' :
                                activeCaminho === 'transmutador' ? 'bg-emerald-500/20 border-emerald-500/30' :
                                    'bg-purple-500/20 border-purple-500/30'
                            }`}>

                    </div>
                        <div>
                            <span
                                className="text-xs font-semibold tracking-wider text-indigo-300 uppercase block mb-0.5">Explorador
                                de Talentos</span>
                            <h3 id="explorer-title"
                                className="text-2xl md:text-3xl font-bold font-serif text-white leading-none">
                                {activeCaminho === 'combatente' && 'O Caminho do Combatente'}
                                {activeCaminho === 'invocador' && 'O Caminho do Invocador'}
                                {activeCaminho === 'transmutador' && 'O Caminho do Transmutador'}
                                {activeCaminho === 'mentalista' && 'O Caminho do Mentalista'}
                            </h3>
                        </div>
                    </div>
                    <p id="explorer-desc"
                        className={`text-gray-300 text-sm md:text-base leading-relaxed mt-4 border-t pt-4 font-sans font-light ${activeCaminho === 'combatente' ? 'border-indigo-800/50' :
                            activeCaminho === 'invocador' ? 'border-cyan-800/50' :
                                activeCaminho === 'transmutador' ? 'border-emerald-800/50' :
                                    'border-purple-800/50'
                            }`}>
                        {activeCaminho === 'combatente' && 'No sistema Doze Arcanas, o Caminho do Combatente é focado naqueles que estão na linha de frente, mesclando aptidão física com canalização mágica. Eles não ficam na retaguarda lançando feitiços; eles são a própria arma.'}
                        {activeCaminho === 'invocador' && 'O Invocador foca na manipulação de criaturas e na alteração mística do cenário de batalha. Eles dominam o espaço físico através de evocações, portais e barreiras intransponíveis.'}
                        {activeCaminho === 'transmutador' && 'O Transmutador altera a matéria física e a biologia celular. Seu poder reside na transformação anatômica pessoal, na criação de compostos alquímicos e na mutação direta de aliados e inimigos.'}
                        {activeCaminho === 'mentalista' && 'O Mentalista manipula a percepção, as emoções e a mente profunda dos oponentes. Suas magias operam na ilusão, no controle de ações e na alteração sutil das probabilidades e do próprio tempo.'}
                    </p>
                </div>

                {/* Specialization Navigation for Combatente */}
                <div id="nav-combatente"
                    className={`caminho-nav bg-indigo-50/50 border-b border-indigo-100 p-2 flex flex-wrap gap-2 ${activeCaminho === 'combatente' ? '' : 'hidden'}`}>
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
                        className="flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70 focus:outline-none">
                        <span className="font-serif text-base">O Bastião</span>
                        <span
                            className="text-[9px] text-gray-400 uppercase tracking-wider font-sans font-normal">Defesa
                            & Retaliação</span>
                    </button>
                    <button onClick={() => switchSpec("vanguarda")} id="tab-vanguarda"
                        className="flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70 focus:outline-none">
                        <span className="font-serif text-base">A Vanguarda</span>
                        <span
                            className="text-[9px] text-gray-400 uppercase tracking-wider font-sans font-normal">Mobilidade
                            & Feitiços</span>
                    </button>
                    <button onClick={() => switchSpec("francoatirador")} id="tab-francoatirador"
                        className="flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70 focus:outline-none">
                        <span className="font-serif text-base">O Franco-Atirador</span>
                        <span
                            className="text-[9px] text-gray-400 uppercase tracking-wider font-sans font-normal">À
                            Distância & Precisão</span>
                    </button>
                </div>

                {/* Specialization Navigation for Invocador */}
                <div id="nav-invocador"
                    className={`caminho-nav bg-cyan-50/50 border-b border-cyan-100 p-2 flex flex-wrap gap-2 ${activeCaminho === 'invocador' ? '' : 'hidden'}`}>
                    <button onClick={() => switchSpec("elementalista")} id="tab-elementalista"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'elementalista'
                            ? 'bg-white border-cyan-200 text-cyan-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">Elementalista</span>
                        <span
                            className="text-[9px] text-indigo-500 uppercase tracking-wider font-sans font-normal">Área
                            & Elementos</span>
                    </button>
                    <button onClick={() => switchSpec("vinculos")} id="tab-vinculos"
                        className="flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70 focus:outline-none">
                        <span className="font-serif text-base">Mestre de Vínculos</span>
                        <span
                            className="text-[9px] text-gray-400 uppercase tracking-wider font-sans font-normal">Criaturas
                            & Familiares</span>
                    </button>
                    <button onClick={() => switchSpec("dominios")} id="tab-dominios"
                        className="flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70 focus:outline-none">
                        <span className="font-serif text-base">Mestre de Domínios</span>
                        <span
                            className="text-[9px] text-gray-400 uppercase tracking-wider font-sans font-normal">Terreno
                            & Espaço</span>
                    </button>
                    <button onClick={() => switchSpec("arquiteto")} id="tab-arquiteto"
                        className="flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70 focus:outline-none">
                        <span className="font-serif text-base">O Arquiteto</span>
                        <span
                            className="text-[9px] text-gray-400 uppercase tracking-wider font-sans font-normal">Torres
                            & Dispositivos</span>
                    </button>
                </div>

                {/* Specialization Navigation for Transmutador */}
                <div id="nav-transmutador"
                    className={`caminho-nav bg-emerald-50/50 border-b border-emerald-100 p-2 flex flex-wrap gap-2 ${activeCaminho === 'transmutador' ? '' : 'hidden'}`}>
                    <button onClick={() => switchSpec("metamorfo")} id="tab-metamorfo"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'metamorfo'
                            ? 'bg-white border-emerald-200 text-emerald-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">Metamorfo</span>
                        <span
                            className="text-[9px] text-indigo-500 uppercase tracking-wider font-sans font-normal">Transformação
                            Pessoal</span>
                    </button>
                    <button onClick={() => switchSpec("artifice")} id="tab-artifice"
                        className="flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70 focus:outline-none">
                        <span className="font-serif text-base">Artífice da Matéria</span>
                        <span
                            className="text-[9px] text-gray-400 uppercase tracking-wider font-sans font-normal">Alteração
                            de Cenário</span>
                    </button>
                    <button onClick={() => switchSpec("biomante")} id="tab-biomante"
                        className="flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70 focus:outline-none">
                        <span className="font-serif text-base">Biomante</span>
                        <span
                            className="text-[9px] text-gray-400 uppercase tracking-wider font-sans font-normal">Buffs
                            & Debuffs</span>
                    </button>
                    <button onClick={() => switchSpec("alquimista")} id="tab-alquimista"
                        className="flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70 focus:outline-none">
                        <span className="font-serif text-base">Alquimista Volátil</span>
                        <span
                            className="text-[9px] text-gray-400 uppercase tracking-wider font-sans font-normal">Reações
                            & Consumíveis</span>
                    </button>
                </div>

                {/* Specialization Navigation for Mentalista */}
                <div id="nav-mentalista"
                    className={`caminho-nav bg-purple-50/50 border-b border-purple-100 p-2 flex flex-wrap gap-2 ${activeCaminho === 'mentalista' ? '' : 'hidden'}`}>
                    <button onClick={() => switchSpec("ilusionista")} id="tab-ilusionista"
                        className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${activeSpec === 'ilusionista'
                            ? 'bg-white border-purple-200 text-purple-900 shadow-sm'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70'
                            }`}>
                        <span className="font-serif text-base">Ilusionista</span>
                        <span
                            className="text-[9px] text-indigo-500 uppercase tracking-wider font-sans font-normal">Falsa
                            Realidade & Engano</span>
                    </button>
                    <button onClick={() => switchSpec("controlador")} id="tab-controlador"
                        className="flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70 focus:outline-none">
                        <span className="font-serif text-base">Controlador</span>
                        <span
                            className="text-[9px] text-gray-400 uppercase tracking-wider font-sans font-normal">Controle
                            & Dano Mental</span>
                    </button>
                    <button onClick={() => switchSpec("dobrador")} id="tab-dobrador"
                        className="flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70 focus:outline-none">
                        <span className="font-serif text-base">Dobrador do Destino</span>
                        <span
                            className="text-[9px] text-gray-400 uppercase tracking-wider font-sans font-normal">Manipulação
                            de Sorte</span>
                    </button>
                    <button onClick={() => switchSpec("oraculo")} id="tab-oraculo"
                        className="flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70 focus:outline-none">
                        <span className="font-serif text-base">O Oráculo</span>
                        <span
                            className="text-[9px] text-gray-400 uppercase tracking-wider font-sans font-normal">Premonição
                            & Interrupção</span>
                    </button>
                </div>

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
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 Ações Padrões
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você consegue encantar uma arma com um toque, imbuindo-a com energia elemental ativa. O talento evolui conforme seu domínio arcano se aprofunda.</p>

                                <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                    <div className="bg-indigo-50/30 border border-indigo-100/40 rounded-lg p-2.5">
                                        <span className="font-bold text-indigo-950 block mb-0.5">Grau I (Base):</span>
                                        <p className="text-gray-600">A arma causa <strong>+1d6</strong> de dano Elemental até o final do seu turno. (Custo: 2 Ações Padrões, 3 PM. Manutenção: +1 PM por turno adicional).</p>
                                    </div>
                                    <div className="bg-indigo-50/50 border border-indigo-100/60 rounded-lg p-2.5">
                                        <span className="font-bold text-indigo-950 block mb-0.5">Grau II (Avançado):</span>
                                        <p className="text-gray-600">O custo de ativação é reduzido para <strong>1 Ação Padrão</strong> (mantendo 3 PM). O dano elemental extra aumenta para <strong>1d6 + seu atributo de Magia</strong>.</p>
                                    </div>
                                    <div className="bg-indigo-50/70 border border-indigo-200/50 rounded-lg p-2.5 shadow-xs">
                                        <span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>
                                        <p className="text-gray-600">Pode ser ativado como <strong>Ação de Movimento</strong> ou como <strong>Reação</strong> ao desembainhar a arma (custo de 4 PM). Além disso, o primeiro ataque bem-sucedido de cada turno aplica a Condição rúnica correspondente ao elemento (ex: Fogo aplica Queimadura, Água aplica Hipotermia).</p>
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
                                        <p className="text-gray-600">O ataque físico ignora completamente a Proteção (PR) do alvo. O acerto é considerado automaticamente como <strong>Acerto Crítico</strong> e causa +6 de dano adicional.</p>
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
                                className="font-sans font-normal text-sm text-gray-500 ml-1">|
                                Especialização focada em Defesa e Retaliação</span></h4>
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
                                        <p className="text-gray-600">A explosão rúnica se torna mais destrutiva. O dano aumenta para <strong>6 + seu atributo de Magia</strong>, o atacante é empurrado para alcance <strong>Médio</strong> e deve passar em um teste de <strong>Físico + Destreza (DT 12 + seu atributo de Magia)</strong> ou ficará <strong>Caído</strong>.</p>
                                    </div>
                                    <div className="bg-indigo-50/70 border border-indigo-200/50 rounded-lg p-2.5 shadow-xs">
                                        <span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>
                                        <p className="text-gray-600">Você pode infundir o dano com o Elemento de uma runa ativa. Se o atacante falhar no teste físico, ele também sofre a Condição correspondente ao elemento (ex: Fogo aplica Queimadura, Água aplica Hipotermia) por 1 rodada. Se o ataque inimigo for completamente absorvido pelo Escudo Arcano, a retaliação não consome sua Reação da rodada.</p>
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
                                        <p className="text-gray-600">Voce conseque ativar uma runa elemental na sua armadura. </p>
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
                                className="font-sans font-normal text-sm text-gray-500 ml-1">|
                                Especialização focada em Mobilidade e Feitiços de Impacto</span></h4>
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
                                        <p className="text-gray-600">Voce consegue aplicar um efeito elemental, nos inimigos que falharem no teste de Físico + Destreza (DT 12 + seu atributo de Magia).
                                        </p>
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
                                        <p className="text-gray-600">Você lê as defesas do inimigo.O alvo tem a condição <strong>Vigiado</strong> e seu próximo ataque à distância contra o alvo cosnome a condição <strong>Vigiado</strong>, recebe <strong>1 Vantagem (+1d6)</strong> e ignora passivamente até <strong>3 Pontos de Proteção (PR)</strong>.</p>
                                    </div>
                                    <div className="bg-indigo-50/50 border border-indigo-100/60 rounded-lg p-2.5">
                                        <span className="font-bold text-indigo-950 block mb-0.5">Grau II (Avançado):</span>
                                        <p className="text-gray-600">A mira se torna letal. A Proteção (PR) ignorada aumenta para <strong>6 pontos</strong>,alem disso voce pode usar Mira Perfurante gastando 1 ação padrão + 1 ação de movimento.</p>
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
                                        <p className="text-gray-600">O tiro ignora 5 pontos de Proteção (PR) e causa <strong>dano máximo</strong> mesmo que o alvo não esteja isolado.</p>
                                    </div>
                                    <div className="bg-indigo-50/70 border border-indigo-200/50 rounded-lg p-2.5 shadow-xs">
                                        <span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>
                                        <p className="text-gray-600">O tiro ignora completamente qualquer Proteção (PR). Se o alvo for derrotado por este ataque, você recupera 3 PM.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ELEMENTALISTA SPEC CONTENT */}
                    <div id="spec-content-elementalista" className={`spec-content space-y-6 ${activeSpec === 'elementalista' ? '' : 'hidden'}`}>
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                            <h4 className="font-bold text-lg text-magic-900 font-serif">Elementalista <span
                                className="font-sans font-normal text-sm text-gray-500 ml-1">|
                                Especialização focada em Dano em Área e Manipulação de Elementos</span>
                            </h4>
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
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>O estudo aprofundado dos elementos fundamentais. Você aprende a moldar a mana em chamas, geada, eletricidade e tempestades, canalizando runas elementais para criar feitiços poderosos.</p>

                                <div className="mt-3 space-y-2 border-t border-slate-200/60 pt-3 text-xs leading-relaxed">
                                    <div className="bg-cyan-50/30 border border-cyan-100/40 rounded-lg p-2.5">
                                        <span className="font-bold text-cyan-950 block mb-0.5">Grau I (Base):</span>
                                        <p className="text-gray-600">Você aprende <strong>2 runas elementais de Grau I</strong> à sua escolha (de Fogo, Água, Terra ou Vento). Ao conjurar um feitiço usando elementos conhecidos por você, você adiciona <strong>+1 de dano bônus</strong> por dado de dano do feitiço.</p>
                                    </div>
                                    <div className="bg-cyan-50/50 border border-cyan-100/60 rounded-lg p-2.5">
                                        <span className="font-bold text-cyan-950 block mb-0.5">Grau II (Avançado):</span>
                                        <p className="text-gray-600">Você aprende <strong>2 runas elementais adicionais de Grau I ou II</strong> à sua escolha. Além disso, você recebe <strong>1 Vantagem (+1d6)</strong> no teste de conjuração para feitiços que utilizem elementos conhecidos por você.</p>
                                    </div>
                                    <div className="bg-cyan-50/70 border border-cyan-200/50 rounded-lg p-2.5 shadow-xs">
                                        <span className="font-bold text-cyan-950 block mb-0.5">Grau III (Mestre):</span>
                                        <p className="text-gray-600">Você aprende <strong>2 runas adicionais de qualquer Grau</strong> (incluindo Grau III) à sua escolha. O custo total em PM para conjurar magias elementais é reduzido em <strong>1 PM</strong> (mínimo 1 PM), e a dificuldade (DT) para os alvos resistirem a essas magias aumenta em <strong>+2</strong>.</p>
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
                                <p>Você aprende as runas modificadoras de <strong>Alcance Curto</strong> e <strong>Área Pequena</strong>.</p>
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
                                        <p className="text-gray-600">Você aprende as runas modificadoras de <strong>Alcance Curto</strong> e <strong>Área Pequena</strong>sues ataques de area causam <strong>1d6 extra</strong> de dano.</p>
                                    </div>
                                    <div className="bg-cyan-50/50 border border-cyan-100/60 rounded-lg p-2.5">
                                        <span className="font-bold text-cyan-950 block mb-0.5">Grau II (Avançado):</span>
                                        <p className="text-gray-600">Você aprende a runa modificadora de <strong>Runa de Foco</strong>. A Dificuldade dos testes da sua área de efeito aumenta em <strong>2</strong>.</p>
                                    </div>
                                    <div className="bg-cyan-50/70 border border-cyan-200/50 rounded-lg p-2.5 shadow-xs">
                                        <span className="font-bold text-cyan-950 block mb-0.5">Grau III (Mestre):</span>
                                        <p className="text-gray-600">Você aprende a runa modificadora de <strong>Área Grande</strong>. A Dificuldade dos testes da sua área de efeito aumenta em <strong>4</strong>. Em caso de acerto crítico com uma magia de área o alvo sofre o dano maximizado da magia.</p>
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
                            <p className="text-xs text-cyan-950 font-semibold font-sans mt-2">Você aprende automaticamente as runas de Vínculo: <strong>Conectar</strong> e <strong>Marca</strong>.</p>
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
                                        <p className="text-gray-600"><strong>Gatilho:</strong> Quando você ou seu Servil forem alvos de um ataque que causaria dano aos PVs.<br></br>Você faz com que o dano que sofreria seja transferido integralmente para o Servil (ou vice-versa). Se o Servil for destruído usando esta reação, ele explode, causando <strong>1d6 + seu atributo de Magia</strong> de dano no atacante.</p>
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
                                className="font-sans font-normal text-sm text-gray-500 ml-1">|
                                Especialização focada em Controle de Terreno e Alteração Espacial</span>
                            </h4>
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
                            <p className="text-xs text-cyan-950 font-semibold font-sans mt-2">Você aprende automaticamente as runas de <strong>Barricada</strong>, <strong>Construção</strong> e <strong>Restauração</strong>.</p>
                            <div className="bg-white/60 border border-cyan-100/40 rounded-lg p-2.5 text-xs leading-relaxed text-gray-655">
                                <strong>Integridade:</strong>
                                <ul className="list-disc pl-4 space-y-0.5 mt-0.5">
                                    <li>A muralha possui <strong>Proteção (PR) igual ao seu atributo de Magia</strong> e <strong>15 PV.</strong></li>
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
                            <h4 className="font-bold text-lg text-magic-900 font-serif">O Arquiteto de
                                Construtos <span className="font-sans font-normal text-sm text-gray-500 ml-1">|
                                    Especialização focada em Torres Autônomas e Dispositivos</span></h4>
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
                            <p className="text-xs text-cyan-950 font-semibold font-sans mt-2">Você aprende automaticamente as runas de <strong>Conectar</strong> e <strong>Deslocar</strong>.</p>
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

                    {/* METAMORFO SPEC CONTENT */}
                                        <div id="spec-content-metamorfo" className={`spec-content space-y-6 ${activeSpec === 'metamorfo' ? '' : 'hidden'}`}>
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                            <h4 className="font-bold text-lg text-magic-900 font-serif">Metamorfo <span
                                className="font-sans font-normal text-sm text-gray-500 ml-1">|
                                Especialização focada em Transformação Pessoal</span></h4>
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
                            <div className="bg-white/60 border border-emerald-100/40 rounded-lg p-2.5 text-xs leading-relaxed text-gray-655 space-y-1">
                                <p><strong>Opções de Adaptação:</strong></p>
                                <ul className="list-disc pl-4 space-y-0.5">
                                    <li><strong>Garras de Fera:</strong> Seus ataques desarmados passam a causar <strong>3 + 1d3 + seu atributo de Físico</strong>. Elas são armas Cortantes.</li>
                                    <li><strong>Escamas Espessas:</strong> Sua pele enrijece, concedendo-lhe <strong>+2 Pontos de Proteção (PR)</strong>.</li>
                                </ul>
                                <p className="text-[10px] text-gray-500 pt-1">Duração: Até o final da cena ou até decidir reverter (Ação Livre).</p>
                            </div>
                            <p className="text-xs text-emerald-950 font-semibold font-sans mt-2">Você aprende automaticamente as runas de Vida e Água: <strong>Curar</strong> e <strong>Correnteza</strong>.</p>
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
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você transmuta a estrutura cellular instantaneamente para desviar de ferimentos letais ou escapar de restrições físicas.</p>
                                
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
                            <h4 className="font-bold text-lg text-magic-900 font-serif">Artífice da Matéria
                                <span className="font-sans font-normal text-sm text-gray-500 ml-1">|
                                    Especialização focada em Alteração de Cenário e Objetos</span>
                            </h4>
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
                            <p className="text-xs text-emerald-950 font-semibold font-sans mt-2">Você aprende automaticamente as runas de Terra: <strong>Construção</strong> e <strong>Restauração</strong>.</p>
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
                                        <p className="text-gray-600"><strong>Corrosão Estrutural:</strong> Como 2 Ações Padrões (4 PM), faça um ataque mágico (teste de Magia + Controle contra a Defesa do alvo). Se acertar, a <strong>PR de armadura do alvo é reduzida a zero instantaneamente</strong> e o item acumula 1 ponto de <strong>Danificado</strong>.</p>
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
                                className="font-sans font-normal text-sm text-gray-500 ml-1">|
                                Especialização focada em Buffs e Debuffs Corporais</span></h4>
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
                            <p className="text-xs text-emerald-950 font-semibold font-sans mt-2">Você aprende automaticamente as runas de Vida: <strong>Curar</strong> e <strong>Avaliar</strong>.</p>
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
                                        <p className="text-gray-600"><strong>Regeneração Tecidual:</strong> Como 2 Ações Padrões (3 PM), você cura <strong>3 + 1d6 + seu atributo de Magia</strong> em PV de um aliado tocado, ou purifica totalmente uma condição física mundana ativa (como envenenamento simples ou sangramento).</p>
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
                            <h4 className="font-bold text-lg text-magic-900 font-serif">O Alquimista Volátil
                                <span className="font-sans font-normal text-sm text-gray-500 ml-1">|
                                    Especialização focada em Reações Químicas e Consumíveis</span>
                            </h4>
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
                            <p className="text-xs text-emerald-950 font-semibold font-sans mt-2">Você aprende automaticamente as runas de Fogo: <strong>Fusão</strong> e <strong>Ignição</strong>.</p>
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
                                <div className="flex gap-2">
                                    <span
                                        className="bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">Reação
                                    </span>
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

                    {/* ILUSIONISTA SPEC CONTENT */}
                                        <div id="spec-content-ilusionista" className={`spec-content space-y-6 ${activeSpec === 'ilusionista' ? '' : 'hidden'}`}>
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                            <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                            <h4 className="font-bold text-lg text-magic-900 font-serif">Ilusionista <span
                                className="font-sans font-normal text-sm text-gray-500 ml-1">|
                                Especialização focada em Falsa Realidade e Engano</span></h4>
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
                            <p className="text-xs text-purple-950 font-semibold font-sans mt-2">Você aprende automaticamente as runas de Luz: <strong>Brilho</strong> e <strong>Formar</strong>.</p>
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
                                className="font-sans font-normal text-sm text-gray-500 ml-1">|
                                Especialização focada em Controle e Dano Mental Direto</span></h4>
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
                            <p className="text-xs text-purple-950 font-semibold font-sans mt-2">Você aprende automaticamente as runas de Vínculo e Isolamento: <strong>Conectar</strong> e <strong>Quarto</strong>.</p>
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
                                        <p className="text-gray-600"><strong>Chicote Mental:</strong> Como 2 Ações Padrões (3 PM), faça um ataque psíquico (teste de Mental + Vontade contra a Defesa do alvo). Se acertar, causa <strong>3 + 1d6 + seu atributo de Mental</strong> de dano mental direto (que **ignora completamente a Proteção (PR) física** do alvo).</p>
                                    </div>
                                    <div className="bg-purple-50/50 border border-purple-100/60 rounded-lg p-2.5">
                                        <span className="font-bold text-purple-950 block mb-0.5">Grau II (Avançado):</span>
                                        <p className="text-gray-600"><strong>Chicote Dilacerador:</strong> O dano do feitiço aumenta para <strong>2d6 + seu atributo de Mental</strong>, e o alvo atingido fica sob a condição <strong>Desorientado</strong> por 1 rodada, recebendo -2 de penalidade em rolagens de salvamento mental.</p>
                                    </div>
                                    <div className="bg-purple-50/70 border border-purple-200/50 rounded-lg p-2.5 shadow-xs">
                                        <span className="font-bold text-purple-950 block mb-0.5">Grau III (Mestre):</span>
                                        <p className="text-gray-600"><strong>Laço Psíquico:</strong> O custo de ativação é reduzido para <strong>1 Ação Padrão</strong>. Ao acertar, você pode puxar fisicamente o alvo por até 3 quadrados em qualquer direção de sua escolha (o inimigo faz um teste de Físico para resistir e não ser arrastado).</p>
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
                                        <span className="font-bold text-purple-950 block mb-0.5">Grau II (Avançado):</span>
                                        <p className="text-gray-600"><strong>Marionete Armada:</strong> O alvo sob controle motor recebe um bônus de <strong>+2 em testes de ataque</strong> e causa <strong>+1d6 de dano mágico adicional</strong> caso você o force a atacar seus próprios aliados.</p>
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
                            <h4 className="font-bold text-lg text-magic-900 font-serif">Dobrador do Destino
                                <span className="font-sans font-normal text-sm text-gray-500 ml-1">|
                                    Especialização focada em Manipulação de Probabilidade</span>
                            </h4>
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
                            <p className="text-xs text-purple-950 font-semibold font-sans mt-2">Você aprende automaticamente as runas de Luz: <strong>Revelação</strong> e <strong>Refração</strong>.</p>
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
                                className="font-sans font-normal text-sm text-gray-500 ml-1">|
                                Especialização focada em Premonição e Interrupção</span></h4>
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
                            <p className="text-xs text-purple-950 font-semibold font-sans mt-2">Você aprende automaticamente as runas de Vida e Vínculo: <strong>Avaliar</strong> e <strong>Conectar</strong>.</p>
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
            </div>

            {/* Sinergia entre Caminhos e Criação de Magias */}
            <div className="mt-12 bg-gradient-to-br from-indigo-950 to-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl border border-indigo-500/30">
                <h3 className="font-serif font-bold text-2xl mb-4 flex items-center gap-2.5 text-amber-300">Sinergia: Caminhos, Criação de Magias e Aquisição de Runas
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-sans mb-6">Em <strong>Doze Arcanas</strong>, a evolução do seu personagem em um Caminho e suas respectivas Especializações dita diretamente a sua capacidade de desvendar a Trama Arcana, influenciando o limite de complexidade das Runas que você pode dominar e como você forja novos feitiços para o seu Grimório.
                </p>

                {/* Grid de Nível e Limites */}
                <div className="grid grid-cols-1 gap-6 mb-8">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/30 transition-all duration-300">
                        <div className="flex items-center gap-2.5 mb-3 text-amber-400">
                            <span className="font-serif font-bold text-lg">Nível 1: Aprendiz</span>
                        </div>
                        <ul className="text-xs text-gray-300 space-y-2 font-sans list-disc pl-4">
                            <li><strong>Limite de Runas:</strong><br></br>Apenas <strong>Runas de Grau I</strong> (Fundamentais).</li>
                            <li><strong>Feitiços Consolidados:</strong><br></br>Máximo de <strong>3 feitiços</strong> ativos no Grimório.</li>
                        </ul>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-indigo-400/30 transition-all duration-300">
                        <div className="flex items-center gap-2.5 mb-3 text-indigo-300">
                            <span className="font-serif font-bold text-lg">Nível 2: Experiente</span>
                        </div>
                        <ul className="text-xs text-gray-300 space-y-2 font-sans list-disc pl-4">
                            <li><strong>Limite de Runas:</strong><br></br>Desbloqueia <strong>Runas de Grau II</strong> (Avançadas).</li>
                            <li><strong>Feitiços Consolidados:</strong><br></br>Máximo de <strong>6 feitiços</strong> ativos no Grimório.</li>
                        </ul>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-400/30 transition-all duration-300">
                        <div className="flex items-center gap-2.5 mb-3 text-purple-300">
                            <span className="font-serif font-bold text-lg">Nível 3: Graduante</span>
                        </div>
                        <ul className="text-xs text-gray-300 space-y-2 font-sans list-disc pl-4">
                            <li><strong>Limite de Runas:</strong><br></br>Desbloqueia <strong>Runas de Grau III</strong> (Espirituais/Obscuras).</li>
                            <li><strong>Feitiços Consolidados:</strong><br></br>Máximo de <strong>12 feitiços</strong> ativos no Grimório.</li>
                            <li><strong>Estabilidade Rúnica:</strong><br></br>Pode criar feitiços misturando até 3 Arcanas diferentes.</li>
                        </ul>
                    </div>
                </div>


                {/* Aquisição de Novas Runas */}
                <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-5">
                    <h4 className="font-serif font-bold text-base text-amber-300 mb-2 flex items-center gap-2">Como obter novas Runas pelo Caminho
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans mb-3">O avanço em suas Especializações garante novas Runas de duas maneiras complementares:
                    </p>
                    <ul className="text-xs space-y-2.5 text-gray-300 font-sans list-disc pl-4">
                        <li>
                            <strong>Sintonia Natural:</strong><br></br>Toda vez que você avança um nível em qualquer Especialização de seu Caminho, você ganha instantaneamente <strong>1 Runa de Grau I</strong> pertencente às Arcanas associadas daquela especialidade. Isso representa suas horas de treinamento e conclusão de fórmulas práticas na escola de magia.
                        </li>
                        <li>
                            <strong>Pesquisa Extra-Curricular:</strong><br></br>Para aprender runas de Arcanas fora do seu Caminho, você deve realizar atividades de pesquisa na biblioteca e gastar pergaminhos:
                            <ul className="list-disc pl-5 mt-1.5 space-y-1">
                                <li>Aprender Runa de Arcana afiliada ao seu Caminho: Teste de Magia(Controle) ou Mental (Conhecimento) contra <strong>DT 8 + Custo de PM da Runa</strong>.</li>
                                <li>Aprender Runa de Arcana estranha ao seu Caminho: Teste de Magia(Controle) ou Mental (Conhecimento) contra <strong>DT 10 + Custo de PM da Runa</strong>.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Sinergia Operacional com Conjurações */}
                <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-5">
                    <h4 className="font-serif font-bold text-base text-amber-300 mb-2 flex items-center gap-2">Sinergia Operacional com Conjurações
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans mb-3">
                        A economia de ações e os talentos de Caminho possuem sinergia direta com a conjuração de magias do seu Grimório:
                    </p>
                    <ul className="text-xs space-y-2.5 text-gray-300 font-sans list-disc pl-4">
                        <li>
                            <strong>Ações Padrões Dobradas:</strong> Como um personagem possui <strong>2 Ações Padrões</strong> por turno, ele pode conjurar até <strong>2 Feitiços Consolidados</strong> (que custam 1 Ação Padrão cada) em um único turno, maximizando seu potencial mágico.
                        </li>
                        <li>
                            <strong>Multiplicadores de Ação:</strong> Talentos que concedem Ações Padrões adicionais (como <em>Acelerar</em> de Vanguarda ou <em>Sobrecarga Vital</em> de Biomante) ampliam exponencialmente essa capacidade, permitindo conjurações consecutivas de magias complexas ou a mescla de ataques e feitiços no mesmo turno.
                        </li>
                        <li>
                            <strong>Interrupção e Controle de Iniciativa:</strong> Reações baseadas em contra-feitiço (como <em>Ruído de Pensamento</em> do Oráculo) permitem anular feitiços inteiros inimigos, forçando-os a gastar PM e consumir suas ações correspondentes, controlando a dinâmica do combate.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
