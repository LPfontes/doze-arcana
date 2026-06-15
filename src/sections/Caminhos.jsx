import React, { useState } from 'react';
import Combatente from './caminhos/Combatente';
import Invocador from './caminhos/Invocador';
import Transmutador from './caminhos/Transmutador';
import Mentalista from './caminhos/Mentalista';

const ESCOLAS_DATA = {
  guerra: {
    name: 'Escola da Guerra',
    theme: 'indigo',
    bgGradient: 'from-magic-900 to-indigo-950',
    borderColor: 'border-indigo-500',
    bgLight: 'bg-indigo-50/10',
    desc: 'No sistema Doze Arcanas, a Escola da Guerra é focada naqueles que estão na linha de frente, mesclando aptidão física com canalização mágica. Eles não ficam na retaguarda lançando feitiços; eles são a própria arma.',
    specs: [
      { id: 'lamina', label: 'A Lâmina', subtitle: 'Ataque & Encantamento', icon: '⚔️' },
      { id: 'bastiao', label: 'O Bastião', subtitle: 'Defesa & Retaliação', icon: '🛡️' },
      { id: 'vanguarda', label: 'A Vanguarda', subtitle: 'Mobilidade & Habilidades', icon: '⚡' },
      { id: 'francoatirador', label: 'O Franco-Atirador', subtitle: 'À Distância & Precisão', icon: '🎯' }
    ]
  },
  elemental: {
    name: 'Escola Elemental',
    theme: 'cyan',
    bgGradient: 'from-cyan-900 to-cyan-950',
    borderColor: 'border-cyan-500',
    bgLight: 'bg-cyan-50/10',
    desc: 'A Escola Elemental estuda a manipulação direta e expansão das energias dos elementos primordiais e a alteração mística e física dos espaços de batalha.',
    specs: [
      { id: 'elementalista', label: 'Elementalista', subtitle: 'Dano em Área', icon: '🔥' },
      { id: 'dominios', label: 'Mestre de Domínios', subtitle: 'Alteração de Terreno', icon: '🪨' }
    ]
  },
  vinculos: {
    name: 'Escola dos Vínculos',
    theme: 'cyan',
    bgGradient: 'from-cyan-955 to-cyan-950',
    borderColor: 'border-cyan-500',
    bgLight: 'bg-cyan-50/10',
    desc: 'A Escola dos Vínculos foca na criação de conexões invisíveis, elos telepáticos/kármicos e na evocação e aprimoramento de familiares ou entidades arcanas.',
    specs: [
      { id: 'vinculos', label: 'Mestre de Vínculos', subtitle: 'Familiares & Evocações', icon: '🐾' }
    ]
  },
  artifices: {
    name: 'Escola dos Artífices',
    theme: 'emerald',
    bgGradient: 'from-emerald-900 to-emerald-950',
    borderColor: 'border-emerald-500',
    bgLight: 'bg-emerald-50/10',
    desc: 'A Escola dos Artífices foca no controle, manufatura e sobrecarga de constructos, na alteração e corrosão estrutural da matéria de equipamentos e em reações químicas voláteis.',
    specs: [
      { id: 'arquiteto', label: 'Arquiteto de Construtos', subtitle: 'Torres & Dispositivos', icon: '🤖' },
      { id: 'artifice', label: 'Artífice da Matéria', subtitle: 'Alteração de Cenário', icon: '🔨' },
      { id: 'alquimista', label: 'Alquimista Volátil', subtitle: 'Reações & Consumíveis', icon: '🧪' }
    ]
  },
  vida: {
    name: 'Escola da Vida',
    theme: 'emerald',
    bgGradient: 'from-emerald-900 to-emerald-955',
    borderColor: 'border-emerald-500',
    bgLight: 'bg-emerald-50/10',
    desc: 'A Escola da Vida estuda a biologia celular e metamorfose anatômica corporal, bem como a cura acelerada, controle do fluxo vital e atrofia corporal.',
    specs: [
      { id: 'metamorfo', label: 'Metamorfo', subtitle: 'Transformação Anatômica', icon: '🦎' },
      { id: 'biomante', label: 'Biomante', subtitle: 'Buffs & Debuffs Corporais', icon: '🧬' }
    ]
  },
  mente: {
    name: 'Escola da Mente',
    theme: 'purple',
    bgGradient: 'from-purple-900 to-purple-950',
    borderColor: 'border-purple-500',
    bgLight: 'bg-purple-50/10',
    desc: 'A Escola da Mente manipula os sentidos, pensamentos, emoções e a percepção dos adversários. Seus conhecimentos operam na ilusão, coerção, controle motor e na alteração de probabilidades.',
    specs: [
      { id: 'ilusionista', label: 'Ilusionista', subtitle: 'Falsa Realidade', icon: '👁️' },
      { id: 'controlador', label: 'Controlador', subtitle: 'Controle Mental', icon: '🧠' },
      { id: 'dobrador', label: 'Dobrador do Destino', subtitle: 'Probabilidades', icon: '🎲' },
      { id: 'oraculo', label: 'O Oráculo', subtitle: 'Premonição', icon: '🔮' }
    ]
  }
};

export default function Caminhos() {
    const [activeEscola, setActiveEscola] = useState('guerra');
    const [activeSpec, setActiveSpec] = useState('lamina');

    const selectEscola = (escola) => {
        setActiveEscola(escola);
        setActiveSpec(ESCOLAS_DATA[escola].specs[0].id);
    };

    const switchSpec = (spec) => {
        setActiveSpec(spec);
    };

    return (
        <section id="sec-caminhos" className="content-section">
            <h2 className="text-3xl border-b-2 border-magic-100 pb-2 mb-4">9. As Escolas e Talentos</h2>
            <p className="mb-4">O desenvolvimento dos personagens é feito através de Escolas, divididas em
                especializações que fornecem talentos escalonáveis (Níveis 1 a 3). <strong>Sempre que você ganha 1 nível em uma Escola, você pode escolher aprender um novo talento dessa escola ou evoluir o grau de um talento/caminho conhecido.</strong></p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {Object.entries(ESCOLAS_DATA).map(([key, data]) => {
                    const isActive = activeEscola === key;
                    const themeColor = data.theme;
                    
                    let activeStyles = '';
                    if (themeColor === 'indigo') activeStyles = 'border-indigo-500 bg-indigo-50/10 shadow-md hover:shadow-lg';
                    else if (themeColor === 'cyan') activeStyles = 'border-cyan-500 bg-cyan-50/10 shadow-md hover:shadow-lg';
                    else if (themeColor === 'emerald') activeStyles = 'border-emerald-500 bg-emerald-50/10 shadow-md hover:shadow-lg';
                    else if (themeColor === 'purple') activeStyles = 'border-purple-500 bg-purple-50/10 shadow-md hover:shadow-lg';
                    
                    let hoverStyles = '';
                    if (themeColor === 'indigo') hoverStyles = 'hover:border-indigo-500 hover:shadow-lg';
                    else if (themeColor === 'cyan') hoverStyles = 'hover:border-cyan-500 hover:shadow-lg';
                    else if (themeColor === 'emerald') hoverStyles = 'hover:border-emerald-500 hover:shadow-lg';
                    else if (themeColor === 'purple') hoverStyles = 'hover:border-purple-500 hover:shadow-lg';

                    let svgColor = '';
                    if (themeColor === 'indigo') svgColor = 'text-indigo-600';
                    else if (themeColor === 'cyan') svgColor = 'text-cyan-600';
                    else if (themeColor === 'emerald') svgColor = 'text-emerald-600';
                    else if (themeColor === 'purple') svgColor = 'text-purple-600';

                    let svgBg = '';
                    if (themeColor === 'indigo') svgBg = 'bg-indigo-500/5 group-hover:bg-indigo-500/10';
                    else if (themeColor === 'cyan') svgBg = 'bg-cyan-500/5 group-hover:bg-cyan-500/10';
                    else if (themeColor === 'emerald') svgBg = 'bg-emerald-500/5 group-hover:bg-emerald-500/10';
                    else if (themeColor === 'purple') svgBg = 'bg-purple-500/5 group-hover:bg-purple-500/10';

                    let textBottomColor = '';
                    if (themeColor === 'indigo') textBottomColor = 'text-indigo-600 group-hover:text-indigo-800';
                    else if (themeColor === 'cyan') textBottomColor = 'text-cyan-600 group-hover:text-cyan-800';
                    else if (themeColor === 'emerald') textBottomColor = 'text-emerald-600 group-hover:text-emerald-800';
                    else if (themeColor === 'purple') textBottomColor = 'text-purple-600 group-hover:text-purple-800';

                    return (
                        <div key={key} id={`card-${key}`} onClick={() => selectEscola(key)}
                            className={`p-5 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between ${isActive
                                ? activeStyles
                                : `bg-white border-magic-100 shadow-sm ${hoverStyles}`
                                }`}>
                            <div>
                                <div
                                    className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full transition-colors duration-300 flex items-start justify-end p-2 ${svgBg} ${svgColor}`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div className="flex justify-between items-start pr-6">
                                    <h4 className="font-bold text-xl text-magic-900 mb-3 flex items-center">{data.name}</h4>
                                </div>
                                <p className="text-sm text-gray-500 mb-3">{data.desc}</p>
                                <ul className="text-sm space-y-2 mb-4">
                                    {data.specs.map(spec => (
                                        <li key={spec.id} className="leading-tight">
                                            <strong>{spec.label}</strong> <span className="text-xs text-gray-400">({spec.subtitle})</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div
                                className={`pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold ${textBottomColor}`}>
                                <span>Explorar Especializações</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Detalhamento de Especializações e Talentos */}
            <div id="talent-explorer-section"
                className="mt-8 border border-indigo-100 rounded-xl overflow-hidden bg-slate-50 shadow-md transition-all duration-300">

                {/* Explorer Header Banner */}
                <div className={`text-white p-6 md:p-8 transition-colors duration-300 bg-gradient-to-r ${
                    ESCOLAS_DATA[activeEscola].bgGradient
                }`}>
                    <div className="flex items-center gap-3">
                        <div id="explorer-icon"
                            className={`p-2.5 rounded-lg border shadow-inner flex items-center justify-center text-amber-400 ${
                                activeEscola === 'guerra' ? 'bg-indigo-500/20 border-indigo-500/30' :
                                activeEscola === 'elemental' || activeEscola === 'vinculos' ? 'bg-cyan-500/20 border-cyan-500/30' :
                                activeEscola === 'artifices' || activeEscola === 'vida' ? 'bg-emerald-500/20 border-emerald-500/30' :
                                'bg-purple-500/20 border-purple-500/30'
                            }`}>
                            🔮
                        </div>
                        <div>
                            <span
                                className="text-xs font-semibold tracking-wider text-indigo-300 uppercase block mb-0.5">
                                Explorador de Talentos
                            </span>
                            <h3 id="explorer-title"
                                className="text-2xl md:text-3xl font-bold font-serif text-white leading-none">
                                {ESCOLAS_DATA[activeEscola].name}
                            </h3>
                        </div>
                    </div>
                    <p id="explorer-desc"
                        className={`text-gray-300 text-sm md:text-base leading-relaxed mt-4 border-t pt-4 font-sans font-light ${
                            activeEscola === 'guerra' ? 'border-indigo-800/50' :
                            activeEscola === 'elemental' || activeEscola === 'vinculos' ? 'border-cyan-800/50' :
                            activeEscola === 'artifices' || activeEscola === 'vida' ? 'border-emerald-800/50' :
                            'border-purple-800/50'
                        }`}>
                        {ESCOLAS_DATA[activeEscola].desc}
                    </p>
                </div>

                {/* Sub-Navigation Bar inside the active school */}
                <div id="nav-escola-specs"
                    className={`caminho-nav p-2 flex flex-wrap gap-2 border-b ${
                        ESCOLAS_DATA[activeEscola].theme === 'indigo' ? 'bg-indigo-50/50 border-indigo-100' :
                        ESCOLAS_DATA[activeEscola].theme === 'cyan' ? 'bg-cyan-50/50 border-cyan-100' :
                        ESCOLAS_DATA[activeEscola].theme === 'emerald' ? 'bg-emerald-50/50 border-emerald-100' :
                        'bg-purple-50/50 border-purple-100'
                    }`}>
                    {ESCOLAS_DATA[activeEscola].specs.map((spec) => {
                        const isSpecActive = activeSpec === spec.id;
                        const theme = ESCOLAS_DATA[activeEscola].theme;
                        
                        let btnActiveStyle = '';
                        if (theme === 'indigo') btnActiveStyle = 'bg-white border-indigo-200 text-indigo-900 shadow-sm';
                        else if (theme === 'cyan') btnActiveStyle = 'bg-white border-cyan-200 text-cyan-900 shadow-sm';
                        else if (theme === 'emerald') btnActiveStyle = 'bg-white border-emerald-200 text-emerald-900 shadow-sm';
                        else if (theme === 'purple') btnActiveStyle = 'bg-white border-purple-200 text-purple-900 shadow-sm';

                        let btnInactiveStyle = 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100/70';

                        let subtitleColor = '';
                        if (theme === 'indigo') subtitleColor = isSpecActive ? 'text-indigo-500' : 'text-gray-400';
                        else if (theme === 'cyan') subtitleColor = isSpecActive ? 'text-cyan-500' : 'text-gray-400';
                        else if (theme === 'emerald') subtitleColor = isSpecActive ? 'text-emerald-500' : 'text-gray-400';
                        else if (theme === 'purple') subtitleColor = isSpecActive ? 'text-purple-500' : 'text-gray-400';

                        return (
                            <button
                                key={spec.id}
                                onClick={() => switchSpec(spec.id)}
                                id={`tab-${spec.id}`}
                                className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 border focus:outline-none ${
                                    isSpecActive ? btnActiveStyle : btnInactiveStyle
                                }`}
                            >
                                <span className="font-serif text-base flex items-center gap-1.5">
                                    <span>{spec.icon}</span>
                                    <span>{spec.label}</span>
                                </span>
                                <span className={`text-[9px] uppercase tracking-wider font-sans font-normal ${subtitleColor}`}>
                                    {spec.subtitle}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Subcomponent content rendering */}
                <div className="bg-white">
                    {['lamina', 'bastiao', 'vanguarda', 'francoatirador'].includes(activeSpec) && (
                        <Combatente activeSpec={activeSpec} switchSpec={switchSpec} hideNav={true} />
                    )}
                    {['elementalista', 'vinculos', 'dominios', 'arquiteto'].includes(activeSpec) && (
                        <Invocador activeSpec={activeSpec} switchSpec={switchSpec} hideNav={true} />
                    )}
                    {['metamorfo', 'artifice', 'biomante', 'alquimista'].includes(activeSpec) && (
                        <Transmutador activeSpec={activeSpec} switchSpec={switchSpec} hideNav={true} />
                    )}
                    {['ilusionista', 'controlador', 'dobrador', 'oraculo'].includes(activeSpec) && (
                        <Mentalista activeSpec={activeSpec} switchSpec={switchSpec} hideNav={true} />
                    )}
                </div>

            </div>

            {/* Sinergia entre Escolas e Criação de Magias */}
            <div className="mt-12 bg-gradient-to-br from-indigo-950 to-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl border border-indigo-500/30">
                <h3 className="font-serif font-bold text-2xl mb-4 flex items-center gap-2.5 text-amber-300">Sinergia: Escolas e Limites de Feitiços
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-sans mb-6">Em <strong>Doze Arcanas</strong>, a evolução do seu personagem em uma Escola dita diretamente a sua capacidade de memorizar e utilizar os feitiços prontos e seus aprimoramentos do seu Grimório.
                </p>

                {/* Grid de Nível e Limites */}
                <div className="grid grid-cols-1 gap-6 mb-8">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/30 transition-all duration-300">
                        <div className="flex items-center gap-2.5 mb-3 text-amber-400">
                            <span className="font-serif font-bold text-lg">Nível 1: Aprendiz</span>
                        </div>
                        <ul className="text-xs text-gray-300 space-y-2 font-sans list-disc pl-4">
                            <li><strong>Limite de Feitiços:</strong><br></br>Apenas <strong>Feitiços de Grau I</strong> (Fundamentais).</li>
                            <li><strong>Feitiços Consolidados:</strong><br></br>Máximo de <strong>3 feitiços</strong> ativos no Grimório.</li>
                        </ul>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-indigo-400/30 transition-all duration-300">
                        <div className="flex items-center gap-2.5 mb-3 text-indigo-300">
                            <span className="font-serif font-bold text-lg">Nível 2: Experiente</span>
                        </div>
                        <ul className="text-xs text-gray-300 space-y-2 font-sans list-disc pl-4">
                            <li><strong>Limite de Feitiços:</strong><br></br>Desbloqueia <strong>Feitiços de Grau II</strong> (Avançados).</li>
                            <li><strong>Feitiços Consolidados:</strong><br></br>Máximo de <strong>6 feitiços</strong> ativos no Grimório.</li>
                        </ul>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-400/30 transition-all duration-300">
                        <div className="flex items-center gap-2.5 mb-3 text-purple-300">
                            <span className="font-serif font-bold text-lg">Nível 3: Graduante</span>
                        </div>
                        <ul className="text-xs text-gray-300 space-y-2 font-sans list-disc pl-4">
                            <li><strong>Limite de Feitiços:</strong><br></br>Desbloqueia <strong>Feitiços de Grau III</strong> (Espirituais/Obscuras).</li>
                            <li><strong>Feitiços Consolidados:</strong><br></br>Máximo de <strong>12 feitiços</strong> ativos no Grimório.</li>
                            <li><strong>Domínio de Aprimoramentos:</strong><br></br>Pode conjurar e ativar aprimoramentos de Grau III sem restrições.</li>
                        </ul>
                    </div>
                </div>

                {/* Aquisição de Novos Feitiços */}
                <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-5">
                    <h4 className="font-serif font-bold text-base text-amber-300 mb-2 flex items-center gap-2">Como obter novos Feitiços pela Escola
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans mb-3">O avanço em suas Especializações garante novos Feitiços no seu Grimório de duas maneiras complementares:
                    </p>
                    <ul className="text-xs space-y-2.5 text-gray-300 font-sans list-disc pl-4">
                        <li>
                            <strong>Sintonia Natural:</strong><br></br>Toda vez que você avança um nível em qualquer Especialização de sua Escola, você ganha instantaneamente <strong>1 Feitiço de Grau I</strong> pertencente às Arcanas associadas daquela especialidade. Isso representa suas horas de treinamento e conclusão de fórmulas práticas na escola de magia.
                        </li>
                        <li>
                            <strong>Pesquisa Extra-Curricular:</strong><br></br>Para aprender feitiços de Arcanas fora de sua Escola, você deve realizar atividades de pesquisa na biblioteca e gastar pergaminhos:
                            <ul className="list-disc pl-5 mt-1.5 space-y-1">
                                <li>Aprender Feitiço de Arcana afiliada à sua Escola: Teste de Magia (Controle) ou Mental (Conhecimento) contra <strong>DT 8 + Custo de PM do Feitiço</strong>.</li>
                                <li>Aprender Feitiço de Arcana estranha à sua Escola: Teste de Magia (Controle) ou Mental (Conhecimento) contra <strong>DT 10 + Custo de PM do Feitiço</strong>.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Sinergia Operacional com Conjurações */}
                <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-5">
                    <h4 className="font-serif font-bold text-base text-amber-300 mb-2 flex items-center gap-2">Sinergia Operacional com Conjurações
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans mb-3">
                        A economia de ações e os talentos de Escola possuem sinergia direta com a conjuração de magias do seu Grimório:
                    </p>
                    <ul className="text-xs space-y-2.5 text-gray-300 font-sans list-disc pl-4">
                        <li>
                            <strong>Ações Padrões Dobradas:</strong> Como um personagem possui <strong>2 Ações Padrões</strong> por turno, ele pode conjurar até <strong>2 Feitiços Consolidados</strong> (que custam 1 Ação Padrão cada) em um único turno, maximizando seu potencial mágico.
                        </li>
                        <li>
                            <strong>Multiplicadores de Ação:</strong> Habilidades que concedem Ações Padrões adicionais (como <em>Acelerar</em> de Vanguarda ou <em>Sobrecarga Vital</em> de Biomante) ampliam exponencialmente essa capacidade, permitindo conjurações consecutivas de magias complexas ou a mescla de ataques e feitiços no mesmo turno.
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
