import React from 'react';

import { RUNES_BY_GRAU } from '../data/runas';
import { BaseRuneCard, ModifierCard, CustomRuneGroup } from '../components/Runas';

export default function Arcanas() {
    return (
        <section id="sec-filosofia" className="content-section">
            <h2 className="text-3xl border-b-2 border-magic-100 pb-2 mb-4">9. A Filosofia da Magia e As Doze Arcanas</h2>

            {/* A Filosofia da Magia */}
            <div className="mb-8">
                <p className="mb-4 text-lg italic text-gray-600 border-l-4 border-indigo-500 pl-4">
                    "Em Doze Arcanas, jogar feitiços não é apenas gritar uma palavra e rolar dados. A magia
                    é um ato consciente de manipular a realidade. Para que um feitiço exista no plano
                    físico, ele precisa respeitar os três pilares fundamentais, conhecidos nas academias
                    como A Trindade da Magia."
                </p>

                <h3 className="text-2xl mt-6 mb-4 font-serif text-magic-900 flex items-center">A Trindade da Magia</h3>

                <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-3">
                    {/* A Fonte */}
                    <div className="bg-gradient-to-br from-indigo-50/30 to-indigo-100/10 border border-indigo-100 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <h4 className="font-bold text-lg font-serif text-magic-900 leading-tight">A Fonte
                                <br /><span className="text-xs font-sans text-indigo-500 uppercase tracking-wider">(O Quê)</span>
                            </h4>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed font-sans">
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
                        <p className="text-sm text-gray-700 leading-relaxed font-sans">
                            A energia arcana é caótica e destrutiva em seu estado natural. O Controle é o
                            gesto, a runa, o encantamento verbal ou a varinha que dá formato à Fonte. Sem
                            Controle, a magia explode; com ele, torna-se uma espada ou um escudo.
                        </p>
                    </div>

                    {/* A Intenção */}
                    <div className="bg-gradient-to-br from-indigo-50/30 to-indigo-100/10 border border-indigo-100 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <h4 className="font-bold text-lg font-serif text-magic-900 leading-tight">A Intenção
                                <br /><span className="text-xs font-sans text-indigo-500 uppercase tracking-wider">(O Porquê)</span>
                            </h4>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed font-sans">
                            Magia requer vontade. Uma mesma Fonte (ex: Água) moldada pelo mesmo Controle
                            (ex: criar uma esfera de água) pode ter Intenções drásticas dependendo do
                            conjurador. A Intenção dita se aquela água vai saciar a sede de um aliado ou
                            afogar os pulmões de um inimigo.
                        </p>
                    </div>
                </div>
            </div>

            {/* As Doze Arcanas */}
            <div>
                <h3 className="text-2xl font-serif text-magic-900 flex items-center mb-3">AS DOZE ARCANAS</h3>
                <p className="mb-6 text-sm text-gray-600 leading-relaxed font-sans">
                    O tecido do universo é costurado por doze fios primordiais. As escolas de magia separam
                    esses fios em dois grandes espectros: as <strong>Arcanas Elementais</strong> (que regem
                    a matéria e a energia palpável) e as <strong>Arcanas Espirituais</strong> (que regem os
                    conceitos, a mente e o tecido da realidade). Todo feitiço, poção ou encantamento
                    obrigatoriamente se baseia em uma (ou na mistura) dessas Arcanas.
                </p>

                {/* Tabela de Radicais Arcanos */}
                <div className="bg-slate-50/50 border border-slate-200/80 rounded-2xl p-5 shadow-sm mb-12">
                    <h4 className="font-serif font-bold text-lg text-slate-800 mb-1 flex items-center gap-2">
                        <span>Radicais Arcanos & Espectros de Estudo</span>
                    </h4>
                    <p className="text-xs text-gray-500 mb-4">Todo feitiço possui uma assinatura fonética e matemática baseada nos radicais das Arcanas conjuradas.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Elementais */}
                        <div className="bg-white/80 border border-slate-150 rounded-xl p-4 shadow-xs">
                            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                                <span className="font-serif font-bold text-sm text-indigo-950 flex items-center gap-1.5">Arcanas Elementais</span>
                                <span className="bg-indigo-50 text-indigo-700 text-[9px] font-bold px-2 py-0.5 rounded border border-indigo-100 uppercase tracking-wider font-semibold">Físico/Material</span>
                            </div>
                            <div className="space-y-2.5 text-xs">
                                <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1.5">
                                    <span className="font-semibold text-blue-900 flex items-center gap-1">Água <code className="bg-blue-50 text-blue-800 text-[14px] px-1 rounded font-mono font-bold">(Flu)</code></span>
                                    <span className="text-gray-600 text-right leading-tight">Fluidez, adaptação e pressão.</span>
                                </div>
                                <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1.5">
                                    <span className="font-semibold text-orange-900 flex items-center gap-1">Fogo <code className="bg-orange-50 text-orange-800 text-[14px] px-1 rounded font-mono font-bold">(Ign)</code></span>
                                    <span className="text-gray-600 text-right leading-tight">Energia, combustão e destruição pura.</span>
                                </div>
                                <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1.5">
                                    <span className="font-semibold text-cyan-900 flex items-center gap-1">Vento <code className="bg-cyan-50 text-cyan-800 text-[14px] px-1 rounded font-mono font-bold">(Aer)</code></span>
                                    <span className="text-gray-600 text-right leading-tight">Movimento, erosão e liberdade.</span>
                                </div>
                                <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1.5">
                                    <span className="font-semibold text-yellow-900 flex items-center gap-1">Terra <code className="bg-yellow-50 text-yellow-800 text-[14px] px-1 rounded font-mono font-bold">(Ro)</code></span>
                                    <span className="text-gray-600 text-right leading-tight">Estabilidade, solidez e defesa.</span>
                                </div>
                                <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1.5">
                                    <span className="font-semibold text-amber-900 flex items-center gap-1">Luz <code className="bg-amber-50 text-amber-800 text-[14px] px-1 rounded font-mono font-bold">(Lit)</code></span>
                                    <span className="text-gray-600 text-right leading-tight">Revelação, ilusões e fótons.</span>
                                </div>
                                <div className="flex items-start justify-between gap-2">
                                    <span className="font-semibold text-slate-800 flex items-center gap-1">Escuridão <code className="bg-slate-100 text-slate-800 text-[14px] px-1 rounded font-mono font-bold">(Ru)</code></span>
                                    <span className="text-gray-600 text-right leading-tight">Ausência, cegueira e frio absoluto.</span>
                                </div>
                            </div>
                        </div>

                        {/* Espirituais */}
                        <div className="bg-white/80 border border-slate-150 rounded-xl p-4 shadow-xs">
                            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                                <span className="font-serif font-bold text-sm text-purple-950 flex items-center gap-1.5">Arcanas Espirituais</span>
                                <span className="bg-purple-50 text-purple-700 text-[12px] font-bold px-2 py-0.5 rounded border border-purple-100 uppercase tracking-wider font-semibold">Conceitual/Mental</span>
                            </div>
                            <div className="space-y-2.5 text-xs">
                                <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1.5">
                                    <span className="font-semibold text-emerald-900 flex items-center gap-1">Vida <code className="bg-emerald-50 text-emerald-800 text-[14px] px-1 rounded font-mono font-bold">(Lar)</code></span>
                                    <span className="text-gray-600 text-right leading-tight">Metabolismo, biologia e crescimento.</span>
                                </div>
                                <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1.5">
                                    <span className="font-semibold text-violet-900 flex items-center gap-1">Vazio <code className="bg-violet-50 text-violet-800 text-[14px] px-1 rounded font-mono font-bold">(Vat)</code></span>
                                    <span className="text-gray-600 text-right leading-tight">Entropia, anulação e antimagia.</span>
                                </div>
                                <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1.5">
                                    <span className="font-semibold text-indigo-900 flex items-center gap-1">Vínculo <code className="bg-indigo-50 text-indigo-800 text-[14px] px-1 rounded font-mono font-bold">(Vic)</code></span>
                                    <span className="text-gray-600 text-right leading-tight">Conexões invisíveis e telepatia.</span>
                                </div>
                                <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1.5">
                                    <span className="font-semibold text-zinc-800 flex items-center gap-1">Isolamento <code className="bg-zinc-100 text-zinc-800 text-[14px] px-1 rounded font-mono font-bold">(Nim)</code></span>
                                    <span className="text-gray-600 text-right leading-tight">Barreiras absolutas e repulsão.</span>
                                </div>
                                <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1.5">
                                    <span className="font-semibold text-blue-900 flex items-center gap-1">Ordem <code className="bg-blue-50 text-blue-800 text-[14px] px-1 rounded font-mono font-bold">(Proto)</code></span>
                                    <span className="text-gray-600 text-right leading-tight">Precisão matemática e rituais exatos.</span>
                                </div>
                                <div className="flex items-start justify-between gap-2">
                                    <span className="font-semibold text-purple-900 flex items-center gap-1">Caos <code className="bg-purple-50 text-purple-800 text-[14px] px-1 rounded font-mono font-bold">(Kat)</code></span>
                                    <span className="text-gray-600 text-right leading-tight">Acaso, probabilidades e imprevisibilidade.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Catálogo de Runas por Grau */}
                <h3 className="text-2xl font-serif text-magic-900 flex items-center mb-6">CATÁLOGO DE RUNAS</h3>
                <div className="space-y-12">
                    {Object.entries(RUNES_BY_GRAU).map(([key, grau]) => (
                        <div key={key} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

                            {/* Header do Grau */}
                            <div className="flex flex-col md:flex-row md:items-center gap-4 border-b border-slate-100 pb-4 mb-6">
                                <h4 className="text-xl font-serif text-slate-800 font-bold m-0">{grau.title}</h4>
                                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${grau.badgeClass}`}>
                                    {grau.badge}
                                </span>
                            </div>

                            {/* Natureza e Aquisição */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
                                <div>
                                    <span className="block font-bold text-slate-700 mb-1">Natureza:</span>
                                    <p className="text-slate-600">{grau.nature}</p>
                                </div>
                                <div>
                                    <span className="block font-bold text-slate-700 mb-1">Aquisição:</span>
                                    <p className="text-slate-600">{grau.acquisition}</p>
                                </div>
                            </div>

                            {/* Base Runes */}
                            {grau.baseRunes && grau.baseRunes.length > 0 && (
                                <div className="mb-8">
                                    <h5 className="font-serif font-bold text-slate-700 mb-4 border-b border-slate-100 pb-2">Runas Base</h5>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {grau.baseRunes.map((rune, idx) => (
                                            <BaseRuneCard key={idx} rune={rune} variant="arcanas" />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Modificadores */}
                            {grau.modifiers && grau.modifiers.length > 0 && (
                                <div className="mb-8">
                                    <h5 className="font-serif font-bold text-slate-700 mb-4 border-b border-slate-100 pb-2">Modificadores Compatíveis</h5>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                        {grau.modifiers.map((mod, idx) => (
                                            <ModifierCard key={idx} modifier={mod} variant="arcanas" />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Custom Runes (Elements) */}
                            {grau.customRunes && grau.customRunes.length > 0 && (
                                <div>
                                    <h5 className="font-serif font-bold text-slate-700 mb-4 border-b border-slate-100 pb-2">Variações e Efeitos Específicos</h5>
                                    <div className="space-y-4">
                                        {grau.customRunes.map((elementGroup, idx) => (
                                            <CustomRuneGroup key={idx} group={elementGroup} variant="arcanas" />
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}