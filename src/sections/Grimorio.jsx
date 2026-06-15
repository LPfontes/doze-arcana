import React, { useState } from 'react';

export default function Grimorio() {
    const [activeTab, setActiveTab] = useState('feiticos'); // 'feiticos' | 'teoria'
    
    // Conjurador Attributes for simulation
    const [magia, setMagia] = useState(0);
    const [fisico, setFisico] = useState(0);

    // Spell 1: Chama de Agnes States
    const [chamaRange, setChamaRange] = useState(false);
    const [chamaBurn, setChamaBurn] = useState(false);
    const [chamaDmg, setChamaDmg] = useState(false);

    // Spell 2: Lança de Agnes States
    const [lancaMode, setLancaMode] = useState('corpo'); // 'corpo' | 'distancia'
    const [lancaDouble, setLancaDouble] = useState(false);

    // Spell 4: Controle de Vento de Lamur States
    const [lamurMode, setLamurMode] = useState('lufada'); // 'lufada' | 'barreira' | 'projetil'
    const [lamurConeLevel, setLamurConeLevel] = useState(0); // 0, 1, 2, 3 (0 = target, 1 = 4u, 2 = 8u, 3 = 12u)

    // Helpers to adjust attributes safely between -3 and +3
    const adjustMagia = (amount) => {
        setMagia(prev => Math.min(3, Math.max(-3, prev + amount)));
    };
    const adjustFisico = (amount) => {
        setFisico(prev => Math.min(3, Math.max(-3, prev + amount)));
    };

    // Spell Cost calculations
    const chamaCusto = 2 + (chamaRange ? 1 : 0) + (chamaBurn ? 2 : 0) + (chamaDmg ? 2 : 0);
    
    const lancaCusto = 3 + (lancaMode === 'distancia' && lancaDouble ? 2 : 0);
    
    const escudoCusto = 2;
    
    const lamurCusto = 3 + (lamurMode === 'lufada' ? lamurConeLevel * 2 : 0);

    const getChamaDmgText = () => {
        const dice = chamaDmg ? '2d6' : '1d6';
        const totalMagia = 3 + magia;
        return totalMagia === 0 ? dice : `${totalMagia} + ${dice}`;
    };

    const getLancaDmgText = () => {
        if (lancaMode === 'corpo') {
            const totalFisico = 3 + fisico;
            return totalFisico === 0 ? '1d6' : `1d6 + ${totalFisico}`;
        } else {
            const dice = lancaDouble ? '2d6' : '1d6';
            const totalMagia = 3 + magia;
            return totalMagia === 0 ? dice : `${totalMagia} + ${dice}`;
        }
    };

    return (
        <section id="sec-grimorio" className="content-section">
            <h2 className="text-3xl border-b-2 border-magic-100 pb-2 mb-4">5. O Grimório e a Jornada do Conhecimento</h2>

            {/* Lore Card: Agnes Hilmer */}
            <div className="bg-gradient-to-br from-amber-50/60 via-indigo-50/20 to-purple-50/40 border-l-4 border-indigo-600 p-6 rounded-r-2xl mb-8 font-sans shadow-sm">
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest block mb-1">A Origem da Magia Moderna</span>
                <h3 className="text-xl font-serif font-black text-magic-900 mb-2">O Grimório de Agnes Hilmer</h3>
                <p className="text-sm text-gray-700 leading-relaxed font-sans mb-3">
                    Agnes Hilmer foi a décima quinta rainha élfica e é considerada a maior de todos os tempos, recebendo o título de <strong>"A Grande Rainha"</strong>. Ela foi pioneira na elaboração da Teoria Geral da Magia, um estudo que levou 300 anos para ser concluído e se tornou o pilar da magia moderna. Agnes definiu os três pilares da magia: a <strong>Fonte</strong>, a <strong>Intenção</strong> e o <strong>Controle</strong>. Além disso, também desenvolveu os primeiros feitiços elementais.
                </p>
                <div className="italic text-xs text-indigo-950 font-serif border-t border-indigo-150 pt-2 mt-2">
                    “Magias em doze arcanas são frutos de dedicação e estudo prático. O grimório não é apenas um caderno de fórmulas; ele é a mente do conjurador moldada em equações ativas.”
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex border-b border-slate-200 mb-6 font-sans">
                <button
                    onClick={() => setActiveTab('feiticos')}
                    className={`py-3 px-5 font-bold text-sm transition-all border-b-2 -mb-[2px] cursor-pointer flex items-center gap-2 ${
                        activeTab === 'feiticos'
                            ? 'border-indigo-600 text-indigo-650 font-black'
                            : 'border-transparent text-gray-500 hover:text-indigo-600'
                    }`}
                >
                    <span>🔮</span> Feitiços Prontos & Aprimoramentos
                </button>
                <button
                    onClick={() => setActiveTab('teoria')}
                    className={`py-3 px-5 font-bold text-sm transition-all border-b-2 -mb-[2px] cursor-pointer flex items-center gap-2 ${
                        activeTab === 'teoria'
                            ? 'border-indigo-600 text-indigo-650 font-black'
                            : 'border-transparent text-gray-500 hover:text-indigo-600'
                    }`}
                >
                    <span>📖</span> Teoria Rúnica & Magia Narrativa
                </button>
            </div>

            {/* TAB 1: FEITIÇOS PRONTOS */}
            {activeTab === 'feiticos' && (
                <div className="space-y-8 animate-fadeIn">
                    
                    {/* Atributo Selector Bar */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-inner flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-sans">
                        <div>
                            <h4 className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
                                <span>⚡</span> Simulador de Atributos do Conjurador
                            </h4>
                            <p className="text-[11px] text-gray-500">
                                Ajuste seus atributos para que o dano e efeitos sejam calculados dinamicamente com base em seu personagem.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 w-full md:w-auto">
                            {/* Magia control */}
                            <div className="flex items-center gap-2.5 bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-lg shadow-sm flex-1 md:flex-initial justify-between">
                                <span className="text-xs font-bold text-indigo-900">Magia:</span>
                                <div className="flex items-center gap-2">
                                    <button 
                                        onClick={() => adjustMagia(-1)} 
                                        className="w-6 h-6 rounded bg-slate-100 hover:bg-indigo-100 active:bg-indigo-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer select-none"
                                    >
                                        -
                                    </button>
                                    <span className="text-xs font-mono font-bold w-6 text-center text-slate-800">
                                        {magia >= 0 ? `+${magia}` : magia}
                                    </span>
                                    <button 
                                        onClick={() => adjustMagia(1)} 
                                        className="w-6 h-6 rounded bg-slate-100 hover:bg-indigo-100 active:bg-indigo-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer select-none"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Fisico control */}
                            <div className="flex items-center gap-2.5 bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-lg shadow-sm flex-1 md:flex-initial justify-between">
                                <span className="text-xs font-bold text-amber-900">Físico:</span>
                                <div className="flex items-center gap-2">
                                    <button 
                                        onClick={() => adjustFisico(-1)} 
                                        className="w-6 h-6 rounded bg-slate-100 hover:bg-amber-100 active:bg-amber-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer select-none"
                                    >
                                        -
                                    </button>
                                    <span className="text-xs font-mono font-bold w-6 text-center text-slate-800">
                                        {fisico >= 0 ? `+${fisico}` : fisico}
                                    </span>
                                    <button 
                                        onClick={() => adjustFisico(1)} 
                                        className="w-6 h-6 rounded bg-slate-100 hover:bg-amber-100 active:bg-amber-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer select-none"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Spells Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                        
                        {/* FEITIÇO 1: CHAMA DE AGNES */}
                        <div className="bg-white border border-slate-200 hover:border-orange-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                            {/* Element decorator */}
                            <div className="absolute right-0 top-0 bg-orange-100 text-orange-800 text-[9px] font-bold px-3 py-0.5 rounded-bl uppercase tracking-wider">
                                Fogo
                            </div>
                            
                            <div>
                                <div className="flex items-baseline justify-between mb-1">
                                    <h4 className="font-serif font-black text-xl text-magic-900">Chama de Agnes</h4>
                                </div>
                                <div className="flex items-center gap-2 mb-3 text-[10px] text-gray-500 font-semibold">
                                    <span className="bg-orange-50 text-orange-700 px-1.5 py-0.5 rounded uppercase tracking-wider border border-orange-100/50">Elemento: Fogo</span>
                                    <span>•</span>
                                    <span>Ataque Mágico</span>
                                </div>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    Uma chama arcana e intensa. Faça um ataque mágico contra o alvo. Em um acerto, ele sofre dano de fogo e pode ser aprimorado com maiores alcances, chamas persistentes ou potência pura.
                                </p>

                                {/* Upgrades section */}
                                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 mb-4 space-y-2.5">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Aprimoramentos</span>
                                    
                                    <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer select-none">
                                        <input 
                                            type="checkbox" 
                                            checked={chamaRange} 
                                            onChange={(e) => setChamaRange(e.target.checked)} 
                                            className="mt-0.5 accent-indigo-650 cursor-pointer"
                                        />
                                        <div>
                                            <strong>+1 PM:</strong> Curta Distância
                                            <span className="text-gray-400 block text-[10px]">Altera o alcance de Toque para Curta Distância.</span>
                                        </div>
                                    </label>

                                    <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer select-none">
                                        <input 
                                            type="checkbox" 
                                            checked={chamaBurn} 
                                            onChange={(e) => setChamaBurn(e.target.checked)} 
                                            className="mt-0.5 accent-indigo-650 cursor-pointer"
                                        />
                                        <div>
                                            <strong>+2 PM:</strong> Incendiar Alvo
                                            <span className="text-gray-400 block text-[10px]">O alvo pega fogo. No próximo turno dele, sofre 3 de dano de fogo e faz salvamento de Físico Destreza. Sucesso encerra; Fracasso mantém o efeito.</span>
                                        </div>
                                    </label>

                                    <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer select-none">
                                        <input 
                                            type="checkbox" 
                                            checked={chamaDmg} 
                                            onChange={(e) => setChamaDmg(e.target.checked)} 
                                            className="mt-0.5 accent-indigo-650 cursor-pointer"
                                        />
                                        <div>
                                            <strong>+2 PM:</strong> Dano Extra (+1d6)
                                            <span className="text-gray-400 block text-[10px]">Aumenta a carga de destruição do impacto.</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Computed details footer */}
                            <div className="border-t border-slate-100 pt-4 mt-2">
                                <div className="grid grid-cols-3 gap-2 text-center mb-3">
                                    <div className="bg-indigo-50/50 p-2 rounded-lg border border-indigo-100/30">
                                        <span className="text-[9px] text-indigo-700 font-bold block uppercase tracking-wider">Custo</span>
                                        <span className="text-sm font-mono font-black text-indigo-900">{chamaCusto} PM</span>
                                    </div>
                                    <div className="bg-indigo-50/50 p-2 rounded-lg border border-indigo-100/30 col-span-2">
                                        <span className="text-[9px] text-indigo-700 font-bold block uppercase tracking-wider">Dano (Fogo)</span>
                                        <span className="text-sm font-mono font-black text-indigo-950">{getChamaDmgText()}</span>
                                    </div>
                                </div>
                                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 text-[11px] text-gray-700 leading-snug">
                                    <strong>Alcance:</strong> {chamaRange ? 'Curta Distância (6 espaços)' : 'Toque'}.
                                    {chamaBurn && (
                                        <span className="block mt-1 text-orange-900 font-medium bg-orange-50 border border-orange-100 p-1.5 rounded">
                                            🔥 <strong>Incendiar:</strong> Alvo sofre 3 de dano/turno. Salvamento Físico Destreza para apagar.
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* FEITIÇO 2: LANÇA DE AGNES */}
                        <div className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                            {/* Element decorator */}
                            <div className="absolute right-0 top-0 bg-blue-100 text-blue-800 text-[9px] font-bold px-3 py-0.5 rounded-bl uppercase tracking-wider">
                                Água / Gelo
                            </div>

                            <div>
                                <div className="flex items-baseline justify-between mb-1">
                                    <h4 className="font-serif font-black text-xl text-magic-900">Lança de Agnes</h4>
                                </div>
                                <div className="flex items-center gap-2 mb-3 text-[10px] text-gray-500 font-semibold">
                                    <span className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded uppercase tracking-wider border border-blue-100/50">Elemento: Gelo</span>
                                    <span>•</span>
                                    <span>Fórmula Híbrida</span>
                                </div>

                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                    Você conjura uma lança feita de gelo mágico, ela pode ser usada como uma arma de ataque corpo a corpo ou a distância.
                                </p>

                                {/* Mode Switcher */}
                                <div className="flex bg-slate-100 p-1 rounded-lg mb-4 text-xs font-semibold">
                                    <button 
                                        onClick={() => { setLancaMode('corpo'); setLancaDouble(false); }}
                                        className={`flex-1 py-1.5 text-center rounded-md cursor-pointer transition-all duration-200 select-none ${
                                            lancaMode === 'corpo' 
                                                ? 'bg-white text-blue-900 shadow-sm font-black' 
                                                : 'text-slate-500 hover:text-slate-800'
                                        }`}
                                    >
                                        ⚔️ Corpo a Corpo
                                    </button>
                                    <button 
                                        onClick={() => setLancaMode('distancia')}
                                        className={`flex-1 py-1.5 text-center rounded-md cursor-pointer transition-all duration-200 select-none ${
                                            lancaMode === 'distancia' 
                                                ? 'bg-white text-blue-900 shadow-sm font-black' 
                                                : 'text-slate-500 hover:text-slate-800'
                                        }`}
                                    >
                                        🎯 Arremesso (Distância)
                                    </button>
                                </div>

                                {/* Dynamic mode description & options */}
                                {lancaMode === 'corpo' ? (
                                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 mb-4 text-xs text-slate-700 space-y-2">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Detalhes Físicos</span>
                                        <p>
                                            <strong>Alcance ampliado:</strong> Possui <strong>2 unidades de distância</strong> (alcance de combate).
                                        </p>
                                        <p className="text-gray-500 text-[11px] leading-snug">
                                            A lança de gelo age como uma arma física em combate direto. Não possui aprimoramentos a distância disponíveis neste modo.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 mb-4 space-y-2.5">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Aprimoramentos</span>
                                        
                                        <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer select-none">
                                            <input 
                                                type="checkbox" 
                                                checked={lancaDouble} 
                                                onChange={(e) => setLancaDouble(e.target.checked)} 
                                                className="mt-0.5 accent-indigo-650 cursor-pointer"
                                            />
                                            <div>
                                                <strong>+2 PM:</strong> Lança Adicional
                                                <span className="text-gray-400 block text-[10px]">Conjura mais uma lança na jogada à distância, causando <strong>+1d6 de dano de gelo</strong> adicional.</span>
                                            </div>
                                        </label>
                                    </div>
                                )}
                            </div>

                            {/* Computed details footer */}
                            <div className="border-t border-slate-100 pt-4 mt-2">
                                <div className="grid grid-cols-3 gap-2 text-center mb-3">
                                    <div className="bg-indigo-50/50 p-2 rounded-lg border border-indigo-100/30">
                                        <span className="text-[9px] text-indigo-700 font-bold block uppercase tracking-wider">Custo</span>
                                        <span className="text-sm font-mono font-black text-indigo-900">{lancaCusto} PM</span>
                                    </div>
                                    <div className="bg-indigo-50/50 p-2 rounded-lg border border-indigo-100/30 col-span-2">
                                        <span className="text-[9px] text-indigo-700 font-bold block uppercase tracking-wider">Dano Calculado</span>
                                        <span className="text-sm font-mono font-black text-indigo-950">{getLancaDmgText()}</span>
                                    </div>
                                </div>
                                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 text-[11px] text-gray-700 leading-snug">
                                    <strong>Alcance:</strong> {lancaMode === 'corpo' ? '2 unidades (Combate estendido)' : 'Distância Média'}.
                                    <span className="block mt-1 text-[10px] text-slate-500 font-sans">
                                        {lancaMode === 'corpo' 
                                            ? 'Calculado com Atributo Físico do conjurador.' 
                                            : 'Calculado com Atributo de Magia (Ataque Mágico).'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* FEITIÇO 3: ESCUDO DE AGNES */}
                        <div className="bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                            {/* Element decorator */}
                            <div className="absolute right-0 top-0 bg-indigo-100 text-indigo-800 text-[9px] font-bold px-3 py-0.5 rounded-bl uppercase tracking-wider">
                                Arcana / Defesa
                            </div>

                            <div>
                                <div className="flex items-baseline justify-between mb-1">
                                    <h4 className="font-serif font-black text-xl text-magic-900">Escudo de Agnes</h4>
                                </div>
                                <div className="flex items-center gap-2 mb-3 text-[10px] text-gray-500 font-semibold">
                                    <span className="bg-indigo-50/50 text-indigo-700 px-1.5 py-0.5 rounded uppercase tracking-wider border border-indigo-100/30">Duração: 1 Rodada</span>
                                    <span>•</span>
                                    <span>Defensivo</span>
                                </div>

                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    Você tece a mana ao seu redor para criar um escudo místico e semi-translúcido de energia sólida. A barreira flutua à sua frente para interceptar ataques.
                                </p>

                                <div className="grid grid-cols-2 gap-3 mb-4 font-sans">
                                    <div className="bg-emerald-50/60 border border-emerald-100 p-3 rounded-xl text-center shadow-xs">
                                        <span className="text-emerald-800 font-bold block text-sm">+2 CA</span>
                                        <span className="text-[10px] text-emerald-600">Classe de Armadura</span>
                                    </div>
                                    <div className="bg-sky-50/60 border border-sky-100 p-3 rounded-xl text-center shadow-xs">
                                        <span className="text-sky-800 font-bold block text-sm">+2 RD</span>
                                        <span className="text-[10px] text-sky-600">Redução de Dano</span>
                                    </div>
                                </div>
                            </div>

                            {/* Computed details footer */}
                            <div className="border-t border-slate-100 pt-4 mt-2">
                                <div className="grid grid-cols-3 gap-2 text-center mb-3">
                                    <div className="bg-indigo-50/50 p-2 rounded-lg border border-indigo-100/30">
                                        <span className="text-[9px] text-indigo-700 font-bold block uppercase tracking-wider">Custo</span>
                                        <span className="text-sm font-mono font-black text-indigo-900">{escudoCusto} PM</span>
                                    </div>
                                    <div className="bg-indigo-50/50 p-2 rounded-lg border border-indigo-100/30 col-span-2">
                                        <span className="text-[9px] text-indigo-700 font-bold block uppercase tracking-wider">Duração</span>
                                        <span className="text-sm font-semibold text-indigo-950 font-sans">1 Rodada</span>
                                    </div>
                                </div>
                                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 text-[11px] text-gray-500 font-sans text-center italic">
                                    "Um escudo básico, prático e de conjuração extremamente veloz."
                                </div>
                            </div>
                        </div>

                        {/* FEITIÇO 4: CONTROLE DE VENTO DE LAMUR */}
                        <div className="bg-white border border-slate-200 hover:border-cyan-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                            {/* Element decorator */}
                            <div className="absolute right-0 top-0 bg-cyan-100 text-cyan-800 text-[9px] font-bold px-3 py-0.5 rounded-bl uppercase tracking-wider">
                                Vento
                            </div>

                            <div>
                                <div className="flex items-baseline justify-between mb-1">
                                    <h4 className="font-serif font-black text-xl text-magic-900">Controle de Vento de Lamur</h4>
                                </div>
                                <div className="flex items-center gap-2 mb-3 text-[10px] text-gray-500 font-semibold">
                                    <span className="bg-cyan-50 text-cyan-700 px-1.5 py-0.5 rounded uppercase tracking-wider border border-cyan-100/50">Elemento: Vento</span>
                                    <span>•</span>
                                    <span>Fórmula Versátil</span>
                                </div>

                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                    Você controla o fluxo de ar ao seu redor aplicando um dos três efeitos táticos de sua escolha.
                                </p>

                                {/* Effect Switcher */}
                                <div className="flex bg-slate-100 p-1 rounded-lg mb-4 text-[11px] font-semibold">
                                    <button 
                                        onClick={() => setLamurMode('lufada')}
                                        className={`flex-1 py-1.5 text-center rounded-md cursor-pointer transition-all duration-200 select-none ${
                                            lamurMode === 'lufada' 
                                                ? 'bg-white text-cyan-900 shadow-sm font-black' 
                                                : 'text-slate-500 hover:text-slate-800'
                                        }`}
                                    >
                                        💨 Lufada
                                    </button>
                                    <button 
                                        onClick={() => { setLamurMode('barreira'); setLamurConeLevel(0); }}
                                        className={`flex-1 py-1.5 text-center rounded-md cursor-pointer transition-all duration-200 select-none ${
                                            lamurMode === 'barreira' 
                                                ? 'bg-white text-cyan-900 shadow-sm font-black' 
                                                : 'text-slate-500 hover:text-slate-800'
                                        }`}
                                    >
                                        🛡️ Barreira
                                    </button>
                                    <button 
                                        onClick={() => { setLamurMode('projetil'); setLamurConeLevel(0); }}
                                        className={`flex-1 py-1.5 text-center rounded-md cursor-pointer transition-all duration-200 select-none ${
                                            lamurMode === 'projetil' 
                                                ? 'bg-white text-cyan-900 shadow-sm font-black' 
                                                : 'text-slate-500 hover:text-slate-800'
                                        }`}
                                    >
                                        🏹 Projétil
                                    </button>
                                </div>

                                {/* Dynamic effect panels */}
                                {lamurMode === 'lufada' && (
                                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 mb-4 space-y-3">
                                        <p className="text-xs text-slate-700 leading-relaxed">
                                            <strong>Base:</strong> O alvo faz salvamento de <strong>Físico Vigor</strong>. Sofre 6 de dano cortante e é empurrado 4 espaços numa direção escolhida. Em sucesso, sofre apenas 3 de dano.
                                        </p>
                                        
                                        <div className="border-t border-slate-200 pt-2.5">
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                                                Aprimoramento: Área em Cone (+2 PM por nível, máx 3)
                                            </span>
                                            
                                            <div className="flex justify-between items-center gap-1">
                                                {[0, 1, 2, 3].map((level) => (
                                                    <button
                                                        key={level}
                                                        onClick={() => setLamurConeLevel(level)}
                                                        className={`flex-1 py-1 px-2 text-[10px] font-mono font-bold border rounded transition-all cursor-pointer ${
                                                            lamurConeLevel === level
                                                                ? 'bg-cyan-150 border-cyan-400 text-cyan-900'
                                                                : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                                                        }`}
                                                    >
                                                        {level === 0 ? 'Único' : `+${level * 2}PM`}
                                                    </button>
                                                ))}
                                            </div>
                                            <span className="text-[9px] text-slate-400 mt-1 block">
                                                {lamurConeLevel === 0 && 'Atinge um único alvo.'}
                                                {lamurConeLevel === 1 && 'Cria área em cone com 4 unidades de distância.'}
                                                {lamurConeLevel === 2 && 'Cria área em cone com 8 unidades de distância.'}
                                                {lamurConeLevel === 3 && 'Cria área em cone com 12 unidades de distância.'}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {lamurMode === 'barreira' && (
                                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 mb-4 text-xs text-slate-700 space-y-2">
                                        <p>
                                            Você cria um vórtice de ar violento ao seu redor. Qualquer personagem adjacente a você sofre <strong>3 de dano cortante</strong> no início do turno dele.
                                        </p>
                                        <p>
                                            <strong>Cobertura Leve:</strong> Você é considerado sob cobertura protetora até o início de seu próximo turno.
                                        </p>
                                    </div>
                                )}

                                {lamurMode === 'projetil' && (
                                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 mb-4 text-xs text-slate-700 space-y-2">
                                        <p>
                                            Dispara uma massa compacta de vento de alta velocidade. Faça um ataque mágico contra o alvo.
                                        </p>
                                        <p>
                                            <strong>Em caso de acerto:</strong> Causa <strong>{3 + 1 + magia >= 0 ? `3+1d6+${magia}` : `3+1d6${magia}`}</strong> de dano de impacto e aplica <strong>1 ponto de Sangramento</strong> no alvo.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Computed details footer */}
                            <div className="border-t border-slate-100 pt-4 mt-2">
                                <div className="grid grid-cols-3 gap-2 text-center mb-3">
                                    <div className="bg-indigo-50/50 p-2 rounded-lg border border-indigo-100/30">
                                        <span className="text-[9px] text-indigo-700 font-bold block uppercase tracking-wider">Custo</span>
                                        <span className="text-sm font-mono font-black text-indigo-900">{lamurCusto} PM</span>
                                    </div>
                                    <div className="bg-indigo-50/50 p-2 rounded-lg border border-indigo-100/30 col-span-2">
                                        <span className="text-[9px] text-indigo-700 font-bold block uppercase tracking-wider">Efeito Principal</span>
                                        <span className="text-xs font-bold text-indigo-950 font-sans block truncate mt-1">
                                            {lamurMode === 'lufada' ? 'Derrubar/Empurrar Vigor' : ''}
                                            {lamurMode === 'barreira' ? 'CA Protetora + Dano Adj.' : ''}
                                            {lamurMode === 'projetil' ? 'Dano Mágico + Sangrar' : ''}
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 text-[11px] text-gray-700 leading-snug">
                                    <strong>Área/Alcance:</strong> {
                                        lamurMode === 'lufada' 
                                            ? (lamurConeLevel === 0 ? 'Alvo Único (Curto)' : `Cone de ${lamurConeLevel * 4} unidades`)
                                            : (lamurMode === 'barreira' ? 'Adjacente (Ao redor)' : 'Alcance Curto (6 espaços)')
                                    }.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}

            {/* TAB 2: TEORIA GERAL E REGRAS */}
            {activeTab === 'teoria' && (
                <div className="space-y-6 animate-fadeIn font-sans">
                    <h3 className="text-2xl mt-6 mb-2 flex items-center gap-2">
                        <span>A Teoria da Magia</span>
                    </h3>
                    <p className="mb-4 text-gray-700 leading-relaxed font-sans">
                        O grimório representa as equações mágicas que o aluno já testou, balanceou e dominou completamente. O grimório não é estático, ele evolui passo a passo com o conhecimento prático e teórico do aluno.
                    </p>
                    <p className="mb-6 text-gray-700 leading-relaxed font-sans">
                        <strong>O Arsenal Inicial:</strong> Todo aluno do Primeiro Ano inicia sua jornada acadêmica com uma média de <strong>3 Feitiços Consolidados</strong> transcritos em seu grimório (como os feitiços clássicos da Rainha Agnes). Mecanicamente, estes feitiços compõem o seu "arsenal padrão", sendo as ferramentas primárias com as quais ele lidará durante os embates.
                    </p>

                    <hr className="my-8 border-slate-200" />

                    <h3 className="text-2xl mt-6 mb-3 flex items-center gap-2">
                        <span>A Aquisição de Conhecimento: Os Graus de Feitiços</span>
                    </h3>
                    <p className="mb-6 text-gray-700 leading-relaxed font-sans">
                        Um aluno não é onipotente. Você não inicia o jogo conhecendo todas as magias. O domínio das Arcanas exige pesquisa, frequentar aulas e, frequentemente, quebrar as regras da instituição. Os feitiços são categorizados em três graus de complexidade e raridade (Grau I, II e III).
                    </p>

                    <div className="bg-amber-50/45 border-l-4 border-amber-500 p-4 rounded-r-xl mt-6">
                        <span className="font-serif font-bold text-amber-900 block mb-1 text-base">A Regra de Transcrição</span>
                        <p className="text-sm text-gray-700 leading-relaxed font-sans">
                            Ler sobre um feitiço não significa dominá-lo imediatamente. Para transcrever um feitiço recém-descoberto no seu grimório, o aluno precisa dedicar as fases de <strong>Tempo Livre</strong>. O jogador rolará testes de <em>Estudo/Magia</em> e gastará recursos materiais (como tintas condutoras arcanas e pergaminhos virgens) para consolidar a matriz mágica e adicionar o novo feitiço em segurança à sua ficha de personagem.
                        </p>
                    </div>

                    <hr className="my-8 border-slate-200" />

                    <h3 className="text-2xl mt-6 mb-3 flex items-center gap-2">
                        <span>Magia Narrativa (Fora de Combate)</span>
                    </h3>
                    <p className="mb-4 text-gray-700 leading-relaxed font-sans">
                        Para dar fluidez ao uso de magias no cotidiano escolar, o sistema adota regras narrativas que substituem a necessidade de cálculos mecânicos complexos para interações comuns:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                            <h4 className="font-serif font-bold text-lg text-magic-900 mb-2">
                                1. Esforço Zero (Conforto)
                            </h4>
                            <p className="text-sm text-gray-655 font-sans leading-relaxed">
                                Se o uso da magia for puramente estético ou não oferecer vantagens numéricas para resolver obstáculos, ela simplesmente acontece e <strong>não custa PM</strong> (ex: criar uma chama pequena para ler no escuro).
                            </p>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                            <h4 className="font-serif font-bold text-lg text-magic-900 mb-2">
                                2. Teste de Intenção
                            </h4>
                            <p className="text-sm text-gray-655 font-sans leading-relaxed">
                                Para resolver um obstáculo fora de combate (como arrombar uma fechadura com magia), faça um único teste de <strong>Magia + Perícia (Controle, Compreensão ou Ofício)</strong>. Sucesso com valor 13 ou mais resolve, sem custo de PM.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                            <h4 className="font-serif font-bold text-lg text-magic-900 mb-2">
                                3. Consequências da Falha
                            </h4>
                            <p className="text-sm text-gray-655 font-sans leading-relaxed">
                                Em vez de custos em PM na falha de um Teste de Intenção, aplique complicações: ganhar atenção de professores, deixar evidências mágicas rastreáveis ou sofrer Exaustão/Sobrecarga na próxima cena importante.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                            <h4 className="font-serif font-bold text-lg text-magic-900 mb-2">
                                4. Permissão Narrativa
                            </h4>
                            <p className="text-sm text-gray-655 font-sans leading-relaxed">
                                A Arcana e o Caminho ditam o que o aluno faz livremente. Um Ilusionista muda a cor de suas roupas como respira; um Biomante detecta venenos pelo faro. A matemática só entra em risco real.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
