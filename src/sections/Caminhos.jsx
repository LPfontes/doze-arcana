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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você consegue encantar uma arma com um toque. Ela causa <strong>+1d6</strong>de dano Elemental até o final do seu turno.</p>
                                <p
                                    className="bg-blue-50/50 text-blue-900 px-3.5 py-2 rounded-lg border border-blue-100 text-xs flex items-center gap-2">

                                    <span><strong>Manutenção:</strong><br></br>Para manter o efeito, gaste <strong>+1 PM</strong>por turno adicional.</span>
                                </p>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 2 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você balança sua arma com tanta intensidade mágica que a energia do encantamento se projeta pelo ar. Você realiza um ataque corpo a corpo contra um alvo que esteja à distância (até alcance <strong>Médio</strong>). Se acertar, causa o dano normal da sua arma, substituindo o tipo de dano físico por dano puramente <strong>Mágico</strong>.
                                </p>
                                <p
                                    className="bg-emerald-50 text-emerald-950 px-3.5 py-2.5 rounded-lg border border-emerald-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Aprimoramento:</strong><br></br>Se a sua arma estiver sob efeito do talento <em>Encantar (Nível 1)</em>, a onda de energia carrega o dano elemental extra e atinge todos os inimigos em uma linha reta até o alvo.</span>
                                </p>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 3 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 6 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>O golpe de mestre ensinado aos duelistas de elite. Você concentra toda a sua força e mana em um único ataque devastador. Você realiza um ataque físico que ignora completamente a <strong>Proteção (PR)</strong> do alvo. Um acerto é considerado como <strong>Acerto Crítico</strong>.</p>
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
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Escudo Arcano
                                    </h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você conjura um complexo círculo mágico defensivo. Ele fornece <strong>12 pontos de Proteção (PR)</strong> para ataques vindos de fora até o início do seu próximo turno. Pode ser um círculo que emana de você ou um cone.</p>
                                <p
                                    className="bg-emerald-50 text-emerald-950 px-3.5 py-2.5 rounded-lg border border-emerald-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Aprimoramento:</strong><br></br>Pode ser individual ou em área, sendo necessário gastar <strong>+2 PM</strong> por unidade adicional protegida em forma de círculo ou cone emanado de você.</span>
                                </p>
                                <p
                                    className="bg-slate-100 text-slate-800 px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs flex items-start gap-2.5">

                                    <span><strong>Movimentação:</strong><br></br>Ele é um escudo unilateral, pessoas e ataques de dentro conseguem sair mas pessoas e ataques de fora não entram até quebrar a barreira.</span>
                                </p>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">Reação (1 PA)
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 2 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p
                                    className="bg-indigo-50/50 text-indigo-950 px-3.5 py-2.5 rounded-lg border border-indigo-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Gatilho:</strong><br></br>Quando um inimigo atingir você com um ataque corpo a corpo e o dano for absorvido pela sua Proteção (PR) ou pelo seu Escudo Arcano.</span>
                                </p>
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>As runas da sua defesa explodem em resposta ao impacto. O atacante sofre automaticamente <strong>1d6 + seu Atributo de Magia</strong>de dano mágico e é empurrado para o alcance <strong>Curto</strong>, sem necessidade de teste de ataque da sua parte.</p>
                            </div>
                        </div>

                        {/* Nivel 3 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-indigo-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    3</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif text-indigo-950">Fortaleza Inabalável</h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 5 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você ancora sua aura diretamente nas linhas de força do ambiente. Você e todos os aliados adjacentes ganham <strong>12 pontos de Proteção</strong>.</p>
                                <p
                                    className="bg-red-50 text-red-950 px-3.5 py-2.5 rounded-lg border border-red-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Ancoragem:</strong><br></br>Enquanto esta Proteção bônus existir, nenhum de vocês pode ser empurrado, derrubado ou movido contra a própria vontade por habilidades físicas ou mágicas. O efeito de ancoragem exige concentração, você gasta <strong>2 PA</strong>para manter, e quebra se você realizar uma ação de movimento voluntária.</span>
                                </p>
                                <p
                                    className="bg-amber-50 text-amber-950 px-3.5 py-2.5 rounded-lg border border-amber-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Duração:</strong><br></br>A barreira se renova no começo do seu turno e dura até ser quebrada, ou você perder 12 pontos Proteção ou mais em uma rodada.</span>
                                </p>
                                <p
                                    className="bg-emerald-50 text-emerald-950 px-3.5 py-2.5 rounded-lg border border-emerald-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Restaurar:</strong><br></br>No seu turno você pode gastar <strong>1 PA</strong>e <strong>1 PM</strong>para adicionar +</span>
                                </p>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 4 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você usa sua mana para ampliar sua capacidade física. Você ganha <strong>1 PA adicional</strong> por 3 turnos.</p>
                                <p
                                    className="bg-blue-50/50 text-blue-900 px-3.5 py-2 rounded-lg border border-blue-100 text-xs flex items-center gap-2">

                                    <span><strong>Manutenção:</strong><br></br>Após os 3 turnos iniciais, custa <strong>+1 PM</strong>por turno adicional para manter o efeito.</span>
                                </p>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você usa a gravidade e a magia a seu favor. Você salta magicamente para qualquer ponto até o alcance <strong>Médio</strong> e aterrissa com uma explosão cinética. Todos os inimigos adjacentes ao ponto de aterrissagem devem fazer um teste de Físico ou Destreza (<strong>DT igual a 12 + seu Atributo de Magia</strong>).</p>
                                <p
                                    className="bg-red-50 text-red-950 px-3.5 py-2.5 rounded-lg border border-red-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Consequência:</strong><br></br>Inimigos que falharem recebem<strong>3 + 1d6 + seu Atributo Físico</strong>de dano físico e ficam com a condição <strong>Caído</strong>. Inimigos que passarem sofrem apenas metade do dano e continuam de pé.</span>
                                </p>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">Reação (1 PA)
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 5 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p
                                    className="bg-indigo-50/50 text-indigo-950 px-3.5 py-2.5 rounded-lg border border-indigo-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Gatilho:</strong><br></br>Quando você for alvo de um ataque (físico ou mágico) e o mestre anunciar o resultado.</span>
                                </p>
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você literalmente rasga o espaço por um décimo de segundo para sair da trajetória do golpe. O ataque inimigo erra automaticamente (exceto se for um <strong>Acerto Crítico</strong>). Você reaparece imediatamente em qualquer espaço desocupado adjacente ao atacante.</p>
                                <p
                                    className="bg-purple-50 text-purple-950 px-3.5 py-2.5 rounded-lg border border-purple-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Vantagem Tática:</strong>O seu próximo ataque contra este inimigo no seu turno recebe <strong>1 Vantagem (+1d6)</strong>devido ao elemento surpresa.</span>
                                </p>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você concentra uma densa carga mágica na ponta do seu projétil. Você realiza um ataque à distância (alcance <strong>Longo</strong>). Se acertar, o projétil atravessa o alvo primário, atingindo também um inimigo que esteja em linha reta logo atrás dele. Ambos sofrem o dano normal da arma.</p>
                            </div>
                        </div>

                        {/* Nivel 2 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-indigo-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    2</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Mira Perfurante
                                    </h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 2 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você gasta um tempo precioso lendo o padrão de movimento do alvo e as frestas de sua armadura. O seu próximo ataque à distância contra esse alvo recebe <strong>1 Vantagem (+1d6)</strong>e ignora passivamente até <strong>3 Pontos de Proteção (PR)</strong>.
                                </p>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 3 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 6 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>O disparo perfeito, calibrado com a respiração e a pulsação do universo. Você realiza um ataque à distância. Se o alvo não estiver adjacente a nenhum aliado dele (isolado), este ataque causa <strong>dano máximo automático</strong>nos dados base, e o alvo perde a capacidade de usar Reações até o fim do próximo turno dele.</p>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você canaliza as forças brutas da natureza, conjurando uma explosão (fogo, gelo, raio ou vento) em um ponto até o alcance <strong>Médio</strong>. Todos os inimigos em um raio <strong>Curto</strong>a partir desse ponto devem fazer um teste de Físico + Destreza (<strong>DT 12 + seu Atributo de Magia</strong>).</p>
                                <p
                                    className="bg-red-50 text-red-950 px-3.5 py-2.5 rounded-lg border border-red-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Consequência:</strong><br></br>Quem falhar sofre o dano de um <em>Feitiço Simples (3 + 1d6 + Magia)</em>do elemento escolhido. Quem passar sofre apenas metade do dano.</span>
                                </p>
                            </div>
                        </div>

                        {/* Nivel 2 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    2</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Tempestade Persistente</h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Quando você conjura a <em>Erupção Elemental</em>, você pode usar este talento em conjunto para ancorar a magia no ambiente. A área da explosão se torna uma zona de risco elemental contínua (ex: chão em chamas, névoa congelante) por <strong>3 turnos</strong>.</p>
                                <p
                                    className="bg-red-50 text-red-950 px-3.5 py-2.5 rounded-lg border border-red-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Dano Contínuo:</strong><br></br>Qualquer criatura que iniciar o turno dentro dessa área, ou atravessá-la, sofre <strong>3 + 1d6</strong>de dano elemental automaticamente.</span>
                                </p>
                                <p
                                    className="bg-blue-50 text-blue-900 px-3.5 py-2 rounded-lg border border-blue-100 text-xs flex items-center gap-2">

                                    <span><strong>Renovar:</strong><br></br>Você pode renovar a magia por <strong>2 PM</strong>.</span>
                                </p>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 3 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 6 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>A destruição absoluta. Você lança um feitiço de devastação em uma área de alcance <strong>Médio</strong>. Os inimigos na área rolam a defesa (<strong>DT 14 + Magia</strong>).</p>
                                <p
                                    className="bg-red-50 text-red-950 px-3.5 py-2.5 rounded-lg border border-red-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Devastação:</strong><br></br>Quem falhar no teste é atingido de forma esmagadora: o ataque é considerado um <strong>Acerto Crítico</strong> (maximiza o dano base e adiciona +1d6). O ambiente ao redor é inevitavelmente destruído ou severamente alterado (pilares caem, chão cede, água evapora).</span>
                                </p>
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

                        {/* Nivel 1 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    1</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Evocar Servil Arcano</h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 4 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você invoca uma criatura feita de pura mana ou elementos (como um golem de pedra pequeno, lobo espectral ou corvo de chamas). Ele aparece em um espaço desocupado perto de você.</p>
                                <div
                                    className="bg-cyan-50/50 text-cyan-950 px-4 py-3 rounded-lg border border-cyan-150 text-xs">
                                    <span
                                        className="font-bold text-cyan-900 uppercase tracking-wider block mb-1.5 text-[10px]">Ficha
                                        do Servil:</span>
                                    <ul className="list-disc pl-4 space-y-1 mb-0 mt-0">
                                        <li><strong>PV:</strong><br></br> 10 + (sua Magia x 2)</li>
                                        <li><strong>Dano:</strong><br></br>Ataque corpo a corpo ou à distância causando <strong>1d6 + sua Magia</strong>.</li>
                                        <li><strong>Ações:</strong><br></br>O Servil age logo após o seu turno e possui <strong>2 PA próprios</strong>. Ele obedece aos seus comandos mentais de forma livre (não gasta seus PA para comandá-lo). Permanece na cena até seus PVs chegarem a 0 ou o combate acabar.</li>
                                    </ul>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">Reação (1 PA)
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 2 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p
                                    className="bg-indigo-50/50 text-indigo-950 px-3.5 py-2.5 rounded-lg border border-indigo-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Gatilho:</strong><br></br>Quando você ou seu Servil forem alvos de um ataque que causaria dano aos PVs.</span>
                                </p>
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você utiliza a ligação arcana entre vocês para transferir o perigo. Você pode fazer com que o dano que você sofreria seja transferido integralmente para o Servil (ou vice-versa).</p>
                                <p
                                    className="bg-red-50 text-red-950 px-3.5 py-2.5 rounded-lg border border-red-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Retaliação:</strong><br></br>Se o Servil for destruído usando esta reação, ele explode, causando <strong>1d6 + Magia</strong>de dano em quem desferiu o golpe fatal.</span>
                                </p>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 3 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 6 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você conjura uma entidade primordial de grande porte (ocupa espaço 3). Ela possui <strong>PV igual a 20 + (sua Magia x 3)</strong>, <strong>3 PA</strong> e seus ataques físicos causam <strong>3 + 2d6 + Magia</strong>.</p>
                                <p
                                    className="bg-amber-50 text-amber-950 px-3.5 py-2.5 rounded-lg border border-amber-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Concentração:</strong><br></br>Exige a concentração do invocador (custa <strong>1 PM por turno</strong>para ser mantido).</span>
                                </p>
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

                        {/* Nivel 1 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    1</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Muralha Mística
                                    </h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você ergue uma parede sólida de energia, gelo ou pedra (até 6 metros de comprimento e 3 de altura) em alcance <strong>Médio</strong>. Ela bloqueia a linha de visão e a movimentação.</p>
                                <p
                                    className="bg-emerald-50 text-emerald-950 px-3.5 py-2.5 rounded-lg border border-emerald-100 text-xs flex items-start gap-2.5">
                                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span><strong>Integridade:</strong><br></br>A muralha possui <strong>Proteção (PR) igual à sua Magia</strong>e <strong>15 PV.</strong> Você pode desfazê-la a qualquer momento (ação livre).</span>
                                </p>
                            </div>
                        </div>

                        {/* Nivel 2 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    2</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Pântano Arcano
                                        <span className="font-sans font-normal text-sm text-gray-500 ml-1">(Zona
                                            de Opressão)</span>
                                    </h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 4 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você
                                    transfigura uma área de até alcance <strong>Médio</strong>em um terreno
                                    hostil (lama movediça, gravidade alterada, gelo ou espinhos).</p>
                                <p
                                    className="bg-amber-50 text-amber-950 px-3.5 py-2.5 rounded-lg border border-amber-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Opressão:</strong><br></br>A área se torna <strong>Terreno
                                        Difícil</strong>. Além disso, inimigos que iniciam o turno lá
                                        dentro sofrem <strong>3 de dano mágico.</strong></span>
                                </p>
                            </div>
                        </div>

                        {/* Nivel 3 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    3</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif text-cyan-950">Santuário do Manipulador</h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 3 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 6 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você
                                    sobrepõe a realidade da arena com o seu próprio domínio mágico (um
                                    círculo imenso cobrindo o campo de batalha).</p>
                                <p
                                    className="bg-purple-50 text-purple-950 px-3.5 py-2.5 rounded-lg border border-purple-100 text-xs flex items-start gap-2.5">
                                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-purple-600" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span><strong>Regras da Casa:</strong>Dentro deste domínio, a realidade
                                        favorece você. Você e seus aliados ganham <strong>+1 de Vantagem
                                            (+1d6)</strong>em um teste por Rodada. Os ataques contra você
                                        recebem <strong>+1 de Desvantagem (-1d6)</strong>.</span>
                                </p>
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

                        {/* Nivel 1 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    1</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Sentinela Arcana
                                    </h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 4 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você
                                    conjura um cristal flutuante ou um totem mecânico em um espaço vazio até
                                    o alcance <strong>Médio</strong>. A Sentinela possui <strong>10
                                        PV</strong>e PR igual à sua Magia. No início de cada um de seus
                                    turnos, a Sentinela ataca automaticamente um inimigo em alcance
                                    <strong>Curto</strong>dela (rolando seu teste de Magia) e causando
                                    <strong>1d6 + Magia</strong>de dano (não gasta seus PA). Você pode
                                    manter até 2 Sentinelas ativas simultaneamente.
                                </p>
                            </div>
                        </div>

                        {/* Nivel 2 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    2</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Campo de
                                        Interação</h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você ativa uma ressonância entre você e suas Sentinelas. A área ao redor (alcance <strong>Curto</strong>) de cada Sentinela sua se torna uma zona de buff. Aliados dentro dessa área ganham <strong>+2 de Proteção (PR) passiva</strong> e regeneram 1 PM no início de seus turnos enquanto permanecerem lá.
                                </p>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 3 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 6 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você detona
                                    os núcleos de energia de todas as suas Sentinelas ativas
                                    simultaneamente. Cada Sentinela explode, forçando inimigos próximos a
                                    testarem <strong>Físico + Destreza (DT 14 + sua Magia)</strong>. Em caso
                                    de falha, sofrem <strong>3d6 + Magia</strong>de dano de força (metade
                                    no sucesso). Inimigos pegos na explosão de mais de uma Sentinela rolam o
                                    teste com <strong>1 Desvantagem (-1d6)</strong>.</p>
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

                        {/* Nivel 1 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    1</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Mutação de
                                        Batalha</h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você altera
                                    temporariamente a própria anatomia para o combate (crescendo garras
                                    afiadas, escamas endurecidas ou presas). Seus ataques desarmados passam
                                    a causar <strong>3 + 1d6 + Físico</strong>de dano letal. Além disso, a
                                    densidade da sua pele concede <strong>+2 Pontos de Proteção
                                        (PR)</strong>natural enquanto a mutação durar.</p>
                                <p
                                    className="bg-blue-50/50 text-blue-900 px-3.5 py-2 rounded-lg border border-blue-100 text-xs flex items-center gap-2">

                                    <span><strong>Manutenção:</strong><br></br>Dura até o final do combate ou até
                                        você decidir reverter (ação livre).</span>
                                </p>
                            </div>
                        </div>

                        {/* Nivel 2 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    2</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Fisiologia
                                        Fluida</h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">Reação (1 PA)
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p
                                    className="bg-indigo-50/50 text-indigo-950 px-3.5 py-2.5 rounded-lg border border-indigo-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Gatilho:</strong>Quando você for atingido por um ataque
                                        físico ou agarrado.</span>
                                </p>
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você
                                    transforma a área atingida do seu corpo em um estado maleável (como
                                    água, fumaça densa ou borracha). Você sofre apenas <strong>metade do
                                        dano</strong>do ataque (após reduzir pela sua PR) e escapa
                                    automaticamente de qualquer imobilização ou agarramento físico,
                                    deslizando para um espaço adjacente.</p>
                            </div>
                        </div>

                        {/* Nivel 3 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    3</span>
                                    <h5
                                        className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Quimera Arcana</h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 3 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 6 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>A maestria
                                    máxima da automutação. Você assume a forma de uma besta quimérica
                                    assustadora por <strong>3 turnos</strong>.</p>
                                <p
                                    className="bg-emerald-50 text-emerald-950 px-3.5 py-2.5 rounded-lg border border-emerald-100 text-xs flex items-start gap-2.5">
                                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span><strong>Atributos de Monstro:</strong><br></br>Seu atributo Físico recebe
                                        <strong>+2</strong> (podendo ultrapassar o limite normal de +3
                                        temporariamente). Você ganha <strong>1 Vantagem (+1d6)</strong>contínua em testes de Físico, e seu metabolismo acelerado regenera
                                        <strong>1d6 PV</strong>no início de cada um de seus turnos. No
                                        final do efeito, você perde <strong>2 PA</strong>no turno seguinte
                                        devido à exaustão.</span>
                                </p>
                                <p
                                    className="bg-blue-50 text-blue-900 px-3.5 py-2 rounded-lg border border-blue-100 text-xs flex items-center gap-2">

                                    <span><strong>Renovar:</strong><br></br>Custa <strong>3 PM</strong>.</span>
                                </p>
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

                        {/* Nivel 1 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    1</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Transmutar
                                        Objeto</h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você altera
                                    as propriedades físicas de um objeto não-mágico que possa ver em alcance
                                    <strong>Curto</strong>. Você pode transformar o piso de pedra em lama
                                    escorregadia, ou transformar água em gelo, além de abrir buracos em
                                    paredes ou no chão.
                                </p>
                                <p
                                    className="bg-emerald-50 text-emerald-950 px-3.5 py-2.5 rounded-lg border border-emerald-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Criação de Estruturas:</strong><br></br>Você pode criar
                                        <strong>zonas de Terreno Difícil</strong>em uma área de até 4
                                        espaços, ou erguer estruturas temporárias (como paredes, bolas de
                                        fogo/água, ou nuvens de neblina) de até 4 espaços de volume.</span>
                                </p>
                            </div>
                        </div>

                        {/* Nivel 2 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    2</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Sabotagem Arcana
                                    </h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 4 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você foca
                                    sua magia diretamente na estrutura molecular da proteção inimiga. Faça
                                    um ataque de feitiço corpo a corpo (<strong>Magia +
                                        Ofício/Controle</strong>).</p>
                                <p
                                    className="bg-red-50 text-red-950 px-3.5 py-2.5 rounded-lg border border-red-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Corrosão Estrutural:</strong><br></br>Se acertar, em vez de causar
                                        dano aos PV, o feitiço enferruja, apodrece ou estilhaça a armadura
                                        do alvo. A <strong>Proteção (PR) do alvo é reduzida a zero
                                            instantaneamente</strong>, e o item acumula 1 ponto de
                                        <strong>Danificado</strong> (se o inimigo for um NPC monstro com PR
                                        natural, a PR cai pela metade até o fim do combate).</span>
                                </p>
                            </div>
                        </div>

                        {/* Nivel 3 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    3</span>
                                    <h5
                                        className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Definir Ambiente</h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 3 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 6 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você
                                    transmuta a própria constituição de uma área (até alcance
                                    <strong>Médio</strong>), mudando drasticamente a região ao seu redor. Ao
                                    conjurar este talento, escolha uma das manifestações abaixo:
                                </p>

                                <div className="grid grid-cols-1 gap-2.5 mt-2 text-xs">
                                    <div className="bg-blue-50/70 p-3 rounded-lg border border-blue-100">
                                        <strong className="text-blue-900 font-semibold block mb-0.5">Gelo</strong>
                                        <span>O chão congela instantaneamente, virando Terreno Difícil.
                                            Todos dentro devem fazer um teste de <strong>Físico + Destreza
                                                (DT 12 + Magia)</strong>ou sofrem <strong>3 + 1d6 de dano
                                                    de gelo</strong>e ganham a condição
                                            <strong>Imobilizado</strong>.</span>
                                    </div>
                                    <div className="bg-emerald-50/70 p-3 rounded-lg border border-emerald-100">
                                        <strong className="text-emerald-900 font-semibold block mb-0.5">Nuvem
                                            de Veneno</strong>
                                        <span>O ar se transforma em gás opressor. Todos na área devem fazer
                                            um teste de <strong>Físico + Vigor (DT 12 + Magia)</strong>ou
                                            sofrem <strong>6 + 1d6 de dano de veneno</strong>.</span>
                                    </div>
                                    <div className="bg-orange-50/70 p-3 rounded-lg border border-orange-100">
                                        <strong className="text-orange-900 font-semibold block mb-0.5">Magma</strong>
                                        <span>O solo derrete em lava. Todos devem fazer um teste de
                                            <strong>Físico + Destreza (DT 12 + Magia)</strong>ou sofrem
                                            <strong>3 + 1d6 de dano de fogo</strong>e seu item de Proteção
                                            (PR) acumula 1 ponto de <strong>Danificado</strong>.</span>
                                    </div>
                                    <div className="bg-purple-50/70 p-3 rounded-lg border border-purple-100">
                                        <strong className="text-purple-900 font-semibold block mb-0.5">Espinhos de Cristal</strong>
                                        <span>Chão se torna lâminas de vidro. Teste de <strong>Físico +
                                            Destreza (DT 12 + Magia)</strong>ou sofrem <strong>3 + 1d6
                                                de dano de corte</strong>e sofrem <strong>1d6 de dano de
                                                    sangramento</strong>sempre que gastarem PA para se
                                            mover.</span>
                                    </div>
                                    <div className="bg-slate-100 p-3 rounded-lg border border-slate-200">
                                        <strong className="text-slate-900 font-semibold block mb-0.5">Lodo
                                            Gravitacional</strong>
                                        <span>Lama que puxa as vítimas com força gravitacional extrema.
                                            Teste de <strong>Físico + Força (DT 12 + Magia)</strong>ou
                                            sofrem <strong>1d6 de dano de esmagamento</strong>, caem
                                            (<strong>Caído</strong>), e ações de mover/levantar passam a
                                            custar <strong>2 PA</strong>.</span>
                                    </div>
                                </div>
                                <p
                                    className="bg-slate-100 text-slate-800 px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs flex items-start gap-2.5 mt-2">

                                    <span><strong>Nota:</strong><br></br>Criaturas que passarem no teste de
                                        resistência (sucesso) de qualquer uma dessas manifestações sofrem
                                        apenas <strong>metade do dano</strong>e evitam totalmente as
                                        condições ou efeitos secundários.</span>
                                </p>
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

                        {/* Nivel 1 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    1</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Costura Celular
                                    </h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você
                                    acelera drasticamente o metabolismo de um alvo aliado tocado, costurando
                                    ferimentos e revigorando o corpo. O alvo recupera <strong>1d6 + seu
                                        Atributo de Magia</strong>em PV.</p>
                                <p
                                    className="bg-emerald-50 text-emerald-950 px-3.5 py-2.5 rounded-lg border border-emerald-100 text-xs flex items-start gap-2.5">
                                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span><strong>Purificação:</strong><br></br>Ao usar esse talento, você pode
                                        escolher remover uma condição física mundana do alvo (como
                                        sangramento, envenenamento simples ou cegueira não-mágica) em vez de
                                        restaurar PV.</span>
                                </p>
                                <p
                                    className="bg-blue-50 text-blue-900 px-3.5 py-2 rounded-lg border border-blue-100 text-xs flex items-center gap-2">

                                    <span><strong>Bônus:</strong>Pode-se gastar <strong>+2 PM</strong>para
                                        adicionar <strong>+1d6</strong>à cura.</span>
                                </p>
                            </div>
                        </div>

                        {/* Nivel 2 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    2</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Toque da Atrofia
                                    </h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 4 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você
                                    inverte a lógica da cura, usando magia para enfraquecer músculos e
                                    travar as sinapses nervosas. Faça um teste de ataque mágico corpo a
                                    corpo.</p>
                                <p
                                    className="bg-red-50 text-red-950 px-3.5 py-2.5 rounded-lg border border-red-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Debilitamento:</strong><br></br>Se acertar, o alvo sofre apenas
                                        <strong>1d6 de dano base</strong>, mas seus músculos atrofiam. O
                                        atributo Físico do alvo é considerado <strong>-1</strong> (até um
                                        mínimo de -3) pelas próximas <strong>2 rodadas</strong>.</span>
                                </p>
                            </div>
                        </div>

                        {/* Nivel 3 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    3</span>
                                    <h5
                                        className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Sobrecarga Vital</h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 3 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 6 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você injeta
                                    pura adrenalina arcana na corrente sanguínea de um aliado tocado (ou em
                                    si mesmo), forçando o corpo além dos limites seguros.</p>
                                <p
                                    className="bg-emerald-50 text-emerald-950 px-3.5 py-2.5 rounded-lg border border-emerald-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Limite Quebrado:</strong><br></br>Por <strong>3 turnos</strong>, o
                                        alvo ganha <strong>2 PA adicionais</strong>por rodada, e recebe
                                        <strong>1 Vantagem (+1d6)</strong>em TODAS as suas rolagens.</span>
                                </p>
                                <p
                                    className="bg-red-50 text-red-950 px-3.5 py-2.5 rounded-lg border border-red-100 text-xs flex items-start gap-2.5">

                                    <span><strong>O Preço:</strong><br></br>Ao final dos 3 turnos, o corpo cobra o
                                        pedágio do estresse biológico extremo. O alvo perde instantaneamente
                                        <strong>metade de seus PV atuais</strong>e ganha a condição
                                        <strong>Esgotado</strong>por 1 rodada completa.</span>
                                </p>
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

                        {/* Nivel 1 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    1</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Mistura Instável
                                    </h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 2 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Como uma
                                    ação rápida, você transmuta os elements em um frasco explosivo e o
                                    arremessa. Escolha um elemento (Fogo, Gelo, Veneno). O frasco atinge uma
                                    pequena área (alcance <strong>Curto</strong>). Inimigos atingidos sofrem
                                    <strong>1d6 + seu Atributo de Magia</strong>do elemento escolhido. A
                                    área afetada fica coberta pelo elemento por 1 turno (ex: chão
                                    escorregadio, chamas).
                                </p>
                            </div>
                        </div>

                        {/* Nivel 2 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    2</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Catalisador
                                        Reativo</h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">Reação (1 PA)
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p
                                    className="bg-indigo-50/50 text-indigo-950 px-3.5 py-2.5 rounded-lg border border-indigo-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Gatilho:</strong><br></br>Quando um inimigo sofrer dano elemental
                                        de qualquer fonte (sua ou de um aliado).</span>
                                </p>
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você usa
                                    magia para acelerar drasticamente a reação molecular no corpo do
                                    inimigo. O dano elemental que ele acabou de sofrer é <strong>maximizado
                                        automaticamente</strong>nos dados. Além disso, o alvo sofre a
                                    condição <em>Cego</em>ou <em>Surdo</em>por 1 turno devido à explosão
                                    química repentina.</p>
                            </div>
                        </div>

                        {/* Nivel 3 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-emerald-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    3</span>
                                    <h5
                                        className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Transmutação Sanguínea</h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 3 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 7 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>O terror da
                                    biomagia química. Você altera a composição do sangue de um alvo vivo em
                                    alcance <strong>Curto</strong> (ex: transformando-o em chumbo pesado ou
                                    ácido fervente). O alvo testa <strong>Físico + Vigor (DT 14 + sua
                                        Magia)</strong>. Se falhar, sofre <strong>2d6 de dano contínuo
                                            (ignora PR)</strong>no início de seus próximos 3 turnos, e todos os
                                    seus Atributos Físicos contam como -2 enquanto o efeito durar.</p>
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

                        {/* Nivel 1 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    1</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Imagem Falsa
                                    </h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 2 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você cria
                                    uma ilusão audiovisual convincente de um objeto, criatura ou fenômeno
                                    (como uma parede falsa ou uma cópia de si mesmo) em alcance
                                    <strong>Médio</strong>.
                                </p>
                                <p
                                    className="bg-blue-50 text-blue-900 px-3.5 py-2.5 rounded-lg border border-blue-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Distração:</strong><br></br>Inimigos que tentarem interagir ou
                                        atacar a ilusão perdem o ataque automaticamente. Para perceber que é
                                        falso sem interagir, o inimigo deve passar em um teste de
                                        <strong>Mental + Percepção (DT 12 + seu Atributo
                                            Magia)</strong>.</span>
                                </p>
                            </div>
                        </div>

                        {/* Nivel 2 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    2</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Véu do Oculto
                                    </h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 4 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você
                                    distorce a luz ao seu redor ou de um aliado adjacente, tornando-o
                                    perfeitamente invisível.</p>
                                <p
                                    className="bg-emerald-50 text-emerald-950 px-3.5 py-2.5 rounded-lg border border-emerald-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Vantagem Invisível:</strong><br></br>Enquanto invisível, inimigos
                                        não podem alvejá-lo diretamente com feitiços de alvo único, e
                                        recebem <strong>1 Desvantagem (-1d6)</strong>em ataques em área que
                                        o atinjam. O seu próximo ataque feito a partir da invisibilidade
                                        recebe <strong>1 Vantagem (+1d6)</strong>. A invisibilidade quebra
                                        imediatamente após você realizar um ataque ou conjurar um feitiço
                                        hostil.</span>
                                </p>
                                <p
                                    className="bg-blue-50 text-blue-900 px-3.5 py-2 rounded-lg border border-blue-100 text-xs flex items-center gap-2">

                                    <span><strong>Bônus:</strong>Um alvo adicional custa <strong>+3
                                        PM</strong>.</span>
                                </p>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 3 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 6 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você
                                    arrasta a mente de um inimigo (alcance <strong>Médio</strong>) para um
                                    labirinto de horrores pessoais. O alvo deve fazer um teste de
                                    <strong>Mental + Vontade (DT 12 + seu Atributo Mental)</strong>.
                                </p>
                                <p
                                    className="bg-red-50 text-red-950 px-3.5 py-2.5 rounded-lg border border-red-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Trauma Psicológico:</strong><br></br>Em caso de falha, o alvo
                                        sofre <strong>3 + 2d6 + Mental</strong>de dano puramente psíquico
                                        (que ignora qualquer PR de armaduras físicas) e ganha a condição
                                        <strong>Atordoado</strong> (ele perde seu próximo turno em estado de
                                        choque). Em caso de sucesso, sofre metade do dano e não perde
                                        PA.</span>
                                </p>
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

                        {/* Nivel 1 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    1</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Chicote Psíquico
                                    </h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 3 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você atinge
                                    a mente do inimigo com uma descarga pura de dor telepática. Faça um
                                    ataque usando <strong>Magia ou Mental + Controle</strong>.</p>
                                <p
                                    className="bg-red-50 text-red-950 px-3.5 py-2.5 rounded-lg border border-red-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Dano Penetrante:</strong><br></br>Se acertar, o feitiço causa
                                        <strong>3 + 1d6 + Mental</strong>de dano. Diferente de magias
                                        convencionais, este dano <strong>ignora completamente Pontos de
                                            Proteção (PR)</strong> de escudos físicos ou tecidos, afetando
                                        diretamente a Vitalidade (PV) do alvo. (Escudos Arcanos mágicos
                                        ainda bloqueiam esse dano).</span>
                                </p>
                            </div>
                        </div>

                        {/* Nivel 2 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    2</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Comando
                                        Subconsciente</h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 4 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você planta
                                    uma palavra de ordem na mente do alvo (ex: "Ajoelhe", "Ataque",
                                    "Largue"). O inimigo deve testar <strong>Mental + Vontade (DT 12 + seu
                                        Atributo Mental)</strong>.</p>
                                <p
                                    className="bg-emerald-50 text-emerald-950 px-3.5 py-2.5 rounded-lg border border-emerald-100 text-xs flex items-start gap-2.5">
                                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span><strong>Obediência Cega:</strong><br></br>Em caso de falha, no próximo
                                        turno do alvo, o primeiro Ponto de Ação (PA) dele será
                                        <strong>obrigatoriamente gasto</strong>para cumprir a sua ordem da
                                        maneira mais literal possível (como atacar um aliado próprio ou
                                        largar a arma no chão).</span>
                                </p>
                                <p
                                    className="bg-blue-50 text-blue-900 px-3.5 py-2.5 rounded-lg border border-blue-100 text-xs flex items-center gap-2">

                                    <span><strong>Bônus:</strong>Você pode gastar <strong>+2 PM</strong>para adicionar mais um comando. Cada comando gasta <strong>1
                                        PA</strong>do alvo.</span>
                                </p>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 3 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 7 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>O ápice da
                                    dominação. Você usurpa o controle motor e psíquico de um alvo até o
                                    alcance <strong>Médio</strong>. O alvo testa <strong>Mental + Vontade
                                        (DT 12 + seu Atributo Mental)</strong>.</p>
                                <p
                                    className="bg-red-50 text-red-950 px-3.5 py-2.5 rounded-lg border border-red-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Posse:</strong><br></br>Em caso de falha, durante o próximo turno
                                        inteiro do inimigo, <strong>VOCÊ decide como ele gasta os 3 PA
                                            dele</strong>, podendo movê-lo, atacar inimigos dele (seus
                                        aliados), ou forçá-lo. O feitiço dura 1 turno completo.</span>
                                </p>
                                <p
                                    className="bg-blue-50 text-blue-900 px-3.5 py-2.5 rounded-lg border border-blue-100 text-xs flex items-center gap-2">

                                    <span><strong>Sustentação:</strong><br></br>Pode ser sustentado no turno
                                        seguinte se você gastar <strong>+3 PM</strong> (o alvo tem direito a
                                        um novo teste no início do turno dele para se libertar).</span>
                                </p>
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

                        {/* Nivel 1 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    1</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Fio da
                                        Causalidade</h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 1 PA
                                        <span
                                            className="text-[9px] uppercase text-orange-600 font-normal">(Reação)</span>
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 2 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p
                                    className="bg-purple-50 text-purple-900 px-3.5 py-2.5 rounded-lg border border-purple-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Gatilho:</strong>Quando um aliado errar um ataque, ou
                                        quando um inimigo acertar um ataque contra vocês (antes do dano ser
                                        rolado).</span>
                                </p>
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você
                                    manipula a "sorte". Você impõe <strong>1 Desvantagem (-1d6)</strong>retroativa no teste do inimigo (subtraindo o d6 do resultado que ele já
                                    havia rolado) ou concede <strong>1 Vantagem (+1d6)</strong>ao aliado
                                    que acabou de errar, podendo transformar a falha em sucesso, ou o
                                    sucesso em falha.</p>
                            </div>
                        </div>

                        {/* Nivel 2 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    2</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Sorte Roubada
                                    </h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 2 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 4 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você drena
                                    a probabilidade positiva de um inimigo para fortalecer o seu time. Um
                                    alvo em alcance <strong>Médio</strong>testa <strong>Mental + Vontade
                                        (DT 12 + seu Atributo Mental)</strong>.</p>
                                <p
                                    className="bg-emerald-50 text-emerald-950 px-3.5 py-2.5 rounded-lg border border-emerald-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Transferência:</strong><br></br>Se ele falhar, pelas próximas
                                        <strong>2 rodadas</strong>, todas as rolagens daquele inimigo sofrem
                                        <strong>1 Desvantagem (-1d6)</strong>. Simultaneamente, um aliado à
                                        sua escolha (pode ser você) ganha <strong>1 Vantagem (+1d6)</strong>em todas as rolagens pelo mesmo período.</span>
                                </p>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 3 PA
                                        <span
                                            className="text-[9px] uppercase text-orange-600 font-normal">(Reação)</span>
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 12 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p
                                    className="bg-purple-50 text-purple-900 px-3.5 py-2.5 rounded-lg border border-purple-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Gatilho:</strong><br></br>Imediatamente após qualquer rolagem de
                                        teste, ataque, ou evento ter sido anunciado pelo mestre (mesmo um
                                        Acerto ou Falha Crítica).</span>
                                </p>
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Uma
                                    habilidade raríssima e terrivelmente custosa, capaz de dobrar a própria
                                    realidade temporal e alterar o tecido do universo. Você literalmente
                                    rebobina os últimos segundos do tempo para desfazer algo que aconteceu.
                                </p>
                                <p
                                    className="bg-emerald-50 text-emerald-950 px-3.5 py-2.5 rounded-lg border border-emerald-100 text-xs flex items-start gap-2.5">
                                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span><strong>A Nova Realidade:</strong><br></br>A ação do alvo é apagada da
                                        existência e ele é forçado a realizar toda a rolagem novamente do
                                        zero. Como o evento agora ocorre sob a sua vontade imponente, a nova
                                        rolagem recebe <strong>1 Vantagem (+1d6)</strong>se for de um
                                        aliado, ou <strong>1 Desvantagem (-1d6)</strong>se for de um
                                        inimigo. O segundo resultado passa a ser o definitivo na linha do
                                        tempo.</span>
                                </p>
                                <p
                                    className="bg-red-50 text-red-950 px-3.5 py-2.5 rounded-lg border border-red-100 text-xs flex items-start gap-2.5 font-sans">

                                    <span><strong>Fadiga Temporal:</strong><br></br>Se você usar este talento fora
                                        do seu turno, ele consome antecipadamente todos os <strong>3
                                            PA</strong>do seu turno seguinte (você fica paralisado se
                                        recuperando da distorção temporal).</span>
                                </p>
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

                        {/* Nivel 1 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    1</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Visão de
                                        Segundos</h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">Reação (1 PA)
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 2 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p
                                    className="bg-indigo-50/50 text-indigo-950 px-3.5 py-2.5 rounded-lg border border-indigo-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Gatilho:</strong>Quando você ou um aliado em alcance
                                        <strong>Curto</strong>for alvo de um ataque (antes da
                                        rolagem).</span>
                                </p>
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você tem um
                                    vislumbre do futuro imediato e grita um aviso. O alvo do ataque ganha
                                    <strong>+3 na Defesa</strong>contra aquele golpe específico. Se o
                                    ataque errar por causa desse bônus, o inimigo fica confuso e perde 1 PA
                                    no turno dele.
                                </p>
                            </div>
                        </div>

                        {/* Nivel 2 */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-purple-300 hover:bg-slate-50/50 transition-all duration-200 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3"><span
                                    className="bg-slate-200 border border-slate-300 text-slate-800 text-[10px] font-bold px-2 py-1 rounded tracking-wider font-sans">NÍVEL
                                    2</span>
                                    <h5 className="font-bold text-xl text-magic-900 font-serif">Ruído de Pensamento
                                    </h5>
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-purple-50 border border-purple-200/60 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">Reação (2 PA)
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 4 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p
                                    className="bg-indigo-50/50 text-indigo-950 px-3.5 py-2.5 rounded-lg border border-indigo-100 text-xs flex items-start gap-2.5">

                                    <span><strong>Gatilho:</strong>Quando um inimigo começar a conjurar uma magia ou habilidade.</span>
                                </p>
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você invade a mente do conjurador com um grito psíquico para quebrar sua concentração. Faça uma rolagem disputada de <strong>Mental + Magia</strong>contra o inimigo. Se você vencer, a magia do inimigo falha miseravelmente. Ele gasta os PMs da habilidade, mas o efeito não acontece (os PAs dele também são consumidos).</p>
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
                                </div>
                                <div className="flex gap-2">
                                    <span
                                        className="bg-orange-50 border border-orange-200/60 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 3 PA
                                    </span>
                                    <span
                                        className="bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 6 PM
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-700 font-sans">
                                <p><strong className="text-magic-900 font-semibold">Efeito:</strong><br></br>Você conecta temporariamente a mente de todos os seus aliados, compartilhando sua precognição com eles. Durante a próxima rodada inteira de combate, o seu grupo age como uma mente coletiva: <strong>todos os seus aliados</strong> (incluindo você) recebem <strong>1 Vantagem (+1d6)</strong>em todas as rolagens de ataque e defesa. Além disso, aliados não podem ser flanqueados ou pegos de surpresa sob este efeito.
                                </p>
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
            </div>
        </section>
    );
}
