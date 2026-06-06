import React, { useState } from 'react';

export default function Casas() {
 const [activeCasa, setActiveCasa] = useState('leao');

 const handleSelectCasa = (casaId) => {
 setActiveCasa(casaId);
 // Smooth scroll the explorer section into view
 const explorerEl = document.getElementById('house-explorer-section');
 if (explorerEl) {
 explorerEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
 }
 };

 // Emblem, Title, and Motto helper values
 const houseMeta = {
 leao: { icon: '', title: 'Casa do Leão', motto: '"A verdade deve ser dita e o mal deve ser exposto."', themeClass: 'bg-red-100 text-red-600 border border-red-200', mottoClass: 'text-red-800' },
 arvore: { icon: '', title: 'Casa da Árvore', motto: '"A vida persiste, o mundo é a rede dos corações dos vivos."', themeClass: 'bg-emerald-100 text-emerald-600 border border-emerald-200', mottoClass: 'text-emerald-800' },
 engrenagem: { icon: '', title: 'Casa da Engrenagem', motto: '"Os limites da verdade são frágeis sobre o limiar do conhecimento, avançamos sobre ambos."', themeClass: 'bg-amber-100 text-amber-600 border border-amber-200', mottoClass: 'text-amber-850' },
 noite: { icon: '', title: 'Casa da Noite', motto: '"O silêncio é o nosso guia, os segredos nossas armas, movemos as cordas para tocar a sintonia."', themeClass: 'bg-indigo-100 text-indigo-650 border border-indigo-200', mottoClass: 'text-indigo-800' }
 };

 const meta = houseMeta[activeCasa];

 return (
 <section id="sec-casas" className="content-section">
 <h2 className="text-3xl border-b-2 border-magic-100 pb-2 mb-4">8. O Sistema de Casas Acadêmicas</h2>

 <p className="mb-6 text-gray-700 leading-relaxed font-sans">As Casas não são meros alojamentos; são instituições de poder político e mágico dentro da
 academia. Ser aceito em uma delas é a garantia de que você terá uma rede de apoio poderosa,
 mas também significa comprar as inimizades que vêm com aquele brasão.
 </p>

 {/* Lore & Rules Callout */}
 <div className="grid grid-cols-1 gap-6 mb-8">
 <div className="bg-indigo-50/40 border border-indigo-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
 <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1.5 font-sans">Status Inicial</span>
 <h4 className="font-serif font-bold text-lg text-magic-900 mb-2">Novato Neutro</h4>
 <p className="text-xs text-gray-650 leading-relaxed font-sans">No início do primeiro ano, todos os alunos são considerados "Novatos Neutros". As Casas enviam seus veteranos
 como "olheiros" para observar o desempenho dos calouros nas aulas práticas e nos corredores.
 </p>
 </div>
 <div className="bg-indigo-50/40 border border-indigo-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
 <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1.5 font-sans">Admissão</span>
 <h4 className="font-serif font-bold text-lg text-magic-900 mb-2">O Rito de Ingresso</h4>
 <p className="text-xs text-gray-650 leading-relaxed font-sans">Cada Casa define suas próprias regras de admissão, o convite nunca é de graça. O jogador precisará passar
 por um Rito de Ingresso narrativo (geralmente durante o 1º Período) para provar seu valor.
 </p>
 </div>
 <div className="bg-indigo-50/40 border border-indigo-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
 <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1.5 font-sans">Influência</span>
 <h4 className="font-serif font-bold text-lg text-magic-900 mb-2">Poder Além dos Créditos</h4>
 <p className="text-xs text-gray-650 leading-relaxed font-sans">Um aluno sem Casa sobrevive, mas um aluno filiado prospera. Fazer parte de uma Casa concede acessos que nenhum
 Crédito pode comprar: o Cofre da Casa, a Biblioteca Privada e a Rede de Influência.
 </p>
 </div>
 </div>

 <p className="text-lg mb-6 text-gray-650 italic text-center font-sans">Escolha uma Casa abaixo para explorar suas filosofias, Arcanas associadas e benefícios exclusivos:
 </p>

 {/* Cards Grid */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 font-sans">
 {/* Casa do Leão */}
 <div
 onClick={() =>handleSelectCasa("leao")}
 className={`p-6 rounded-2xl border-2 shadow-sm cursor-pointer transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group flex flex-col items-center text-center ${
 activeCasa === 'leao'
 ? 'bg-red-50/20 border-red-500 shadow-md'
 : 'bg-white border-gray-100 hover:border-red-500'
 }`}
 >
 <div className="w-16 h-16 bg-red-50 rounded-2xl text-red-600 border border-red-100 shadow-inner flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
 
 </div>
 <h4 className="font-serif font-bold text-xl text-magic-900 mb-1">Casa do Leão</h4>
 <span className="text-[10px] bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-3">Voz e Convicção
 </span>
 <p className="text-xs text-gray-500 leading-tight">Alunos fiéis a seus princípios e defensores da justiça contra o peso do poder absoluto.
 </p>
 </div>

 {/* Casa da Árvore */}
 <div
 onClick={() =>handleSelectCasa("arvore")}
 className={`p-6 rounded-2xl border-2 shadow-sm cursor-pointer transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group flex flex-col items-center text-center ${
 activeCasa === 'arvore'
 ? 'bg-emerald-50/20 border-emerald-500 shadow-md'
 : 'bg-white border-gray-100 hover:border-emerald-500'
 }`}
 >
 <div className="w-16 h-16 bg-emerald-50 rounded-2xl text-emerald-600 border border-emerald-100 shadow-inner flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
 
 </div>
 <h4 className="font-serif font-bold text-xl text-magic-900 mb-1">Casa da Árvore</h4>
 <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-3">Raiz e Refúgio
 </span>
 <p className="text-xs text-gray-500 leading-tight">O coração pulsante focado em nutrir os outros e proteger os mais vulneráveis.
 </p>
 </div>

 {/* Casa da Engrenagem */}
 <div
 onClick={() =>handleSelectCasa("engrenagem")}
 className={`p-6 rounded-2xl border-2 shadow-sm cursor-pointer transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group flex flex-col items-center text-center ${
 activeCasa === 'engrenagem'
 ? 'bg-amber-50/20 border-amber-500 shadow-md'
 : 'bg-white border-gray-100 hover:border-amber-500'
 }`}
 >
 <div className="w-16 h-16 bg-amber-50 rounded-2xl text-amber-600 border border-amber-100 shadow-inner flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
 
 </div>
 <h4 className="font-serif font-bold text-xl text-magic-900 mb-1">Casa da Engrenagem</h4>
 <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-3">Busca e Limiar
 </span>
 <p className="text-xs text-gray-500 leading-tight">Mentes inquietas que desafiam os limites da magia e quebram regras antigas.
 </p>
 </div>

 {/* Casa da Noite */}
 <div
 onClick={() =>handleSelectCasa("noite")}
 className={`p-6 rounded-2xl border-2 shadow-sm cursor-pointer transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group flex flex-col items-center text-center ${
 activeCasa === 'noite'
 ? 'bg-indigo-50/20 border-indigo-600 shadow-md'
 : 'bg-white border-gray-100 hover:border-indigo-600'
 }`}
 >
 <div className="w-16 h-16 bg-indigo-50 rounded-2xl text-indigo-650 border border-indigo-150 shadow-inner flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
 
 </div>
 <h4 className="font-serif font-bold text-xl text-magic-900 mb-1">Casa da Noite</h4>
 <span className="text-[10px] bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-3">Silêncio e Segredo
 </span>
 <p className="text-xs text-gray-500 leading-tight">Observadores e estrategistas que agem silenciosamente nos bastidores.
 </p>
 </div>
 </div>

 {/* House Explorer Section */}
 <div id="house-explorer-section" className="bg-slate-50 border border-gray-200 rounded-2xl overflow-hidden shadow-inner p-6 md:p-8 transition-all duration-300 font-sans">
 
 {/* Banner Info (Emblem, Title, Motto) */}
 <div className="flex items-center gap-4 mb-6 pb-5 border-b border-gray-200 font-sans">
 <div className={`p-3 text-3xl rounded-xl shadow-inner flex items-center justify-center w-14 h-14 ${meta.themeClass}`}>
 {meta.icon}
 </div>
 <div>
 <h3 className="text-2xl font-serif text-magic-900 font-bold leading-none">
 {meta.title}
 </h3>
 <p className={`text-xs font-sans font-semibold italic mt-1.5 ${meta.mottoClass}`}>
 {meta.motto}
 </p>
 </div>
 </div>

 {/* HOUSE CONTENTS */}

 {/* 1. LEAO CONTENT */}
 <div className={`space-y-6 ${activeCasa === 'leao' ? '' : 'hidden'}`}>
 {/* Profile */}
 <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
 <h4 className="font-serif font-bold text-lg text-red-900 mb-2 flex items-center gap-2">Perfil do Estudante do Leão
 </h4>
 <p className="text-sm text-gray-750 leading-relaxed font-sans">Os alunos do Leão são fiéis a seus princípios, agentes da lei, buscadores da
 verdade, defensores daqueles que sofrem com a injustiça e sob o peso do poder
 absoluto. Aqueles que queimam com propósito e não se escondem nas sombras.
 </p>
 {/* Arcanas */}
 <div className="flex flex-wrap gap-2 mt-4">
 <span className="bg-red-50 border border-red-200/60 text-red-800 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
 <span className="w-2 h-2 rounded-full bg-red-500"></span>FOGO
 </span>
 <span className="bg-amber-50 border border-amber-200/60 text-amber-800 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
 <span className="w-2 h-2 rounded-full bg-amber-500"></span>LUZ
 </span>
 <span className="bg-blue-50 border border-blue-200/60 text-blue-800 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
 <span className="w-2 h-2 rounded-full bg-blue-500"></span>ORDEM
 </span>
 </div>
 </div>


 </div>

 {/* 2. ARVORE CONTENT */}
 <div className={`space-y-6 ${activeCasa === 'arvore' ? '' : 'hidden'}`}>
 {/* Profile */}
 <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
 <h4 className="font-serif font-bold text-lg text-emerald-900 mb-2 flex items-center gap-2">Perfil do Estudante da Árvore
 </h4>
 <p className="text-sm text-gray-750 leading-relaxed font-sans">Os alunos da Árvore são o coração pulsante da escola. Eles possuem uma conexão
 profunda e quase instintiva com o world natural e com as pessoas ao seu redor.
 Não buscam a glória ou o centro das atenções; em vez disso, encontram propósito
 em nutrir o crescimento dos outros, proteger os mais vulneráveis e manter o
 equilíbrio do ecossistema mágico e social da academia. São excelentes ouvintes,
 amigos leais e defensores implacáveis quando aqueles que amam estão em perigo.
 </p>
 {/* Arcanas */}
 <div className="flex flex-wrap gap-2 mt-4">
 <span className="bg-amber-100 border border-amber-200/60 text-amber-800 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
 <span className="w-2 h-2 rounded-full bg-amber-600"></span>TERRA
 </span>
 <span className="bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
 <span className="w-2 h-2 rounded-full bg-emerald-500"></span>VIDA
 </span>
 <span className="bg-indigo-50 border border-indigo-200/60 text-indigo-800 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
 <span className="w-2 h-2 rounded-full bg-indigo-500"></span>VÍNCULO
 </span>
 </div>
 </div>


 </div>

 {/* 3. ENGRENAGEM CONTENT */}
 <div className={`space-y-6 ${activeCasa === 'engrenagem' ? '' : 'hidden'}`}>
 {/* Profile */}
 <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
 <h4 className="font-serif font-bold text-lg text-amber-900 mb-2 flex items-center gap-2">Perfil do Estudante da Engrenagem
 </h4>
 <p className="text-sm text-gray-750 leading-relaxed font-sans">Os alunos da Engrenagem são as mentes inquietas da academia. Eles não se
 contentam em decorar feitiços antigos; eles querem desmontar a magia para ver
 como as peças funcionam por dentro. São inventores, teóricos e desbravadores de
 limiares. Muitas vezes vistos como excêntricos ou até perigosos pelos outros
 alunos, eles abraçam o risco com naturalidade, sabendo que a genialidade e a
 loucura são separadas por uma linha muito ténue. Se há uma regra dizendo "não
 misture essas duas poções", um aluno da Engrenagem será o primeiro a misturá-las
 só para anotar o resultado.
 </p>
 {/* Arcanas */}
 <div className="flex flex-wrap gap-2 mt-4">
 <span className="bg-sky-50 border border-sky-200/60 text-sky-800 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm font-sans">
 <span className="w-2 h-2 rounded-full bg-sky-500"></span>VENTO
 </span>
 <span className="bg-zinc-50 border border-zinc-200 text-zinc-800 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm font-sans">
 <span className="w-2 h-2 rounded-full bg-zinc-500"></span>ISOLAMENTO
 </span>
 <span className="bg-purple-50 border border-purple-200/60 text-purple-800 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm font-sans">
 <span className="w-2 h-2 rounded-full bg-purple-500"></span>CAOS
 </span>
 </div>
 </div>


 </div>

 {/* 4. NOITE CONTENT */}
 <div className={`space-y-6 ${activeCasa === 'noite' ? '' : 'hidden'}`}>
 {/* Profile */}
 <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
 <h4 className="font-serif font-bold text-lg text-indigo-900 mb-2 flex items-center gap-2">Perfil do Estudante da Noite
 </h4>
 <p className="text-sm text-gray-750 leading-relaxed font-sans">Os alunos da Noite são os observadores da academia. Eles não se destacam nas
 multidões; em vez disso, flutuam sobre os tecidos sociais de forma quase
 imperceptível. São calmos, calculistas e extremamente perceptivos. Eles sabem
 quem tem uma dívida com quem, conhecem as passagens secretas do colégio e
 guardam segredos que poderiam arruinar reputações (ou salvar vidas). Um aluno da
 Noite nunca age no impulso ou se exibe sem propósito; quando eles finalmente
 agem, o resultado já foi decidido muito antes de alguém notar a sua presença.
 </p>
 {/* Arcanas */}
 <div className="flex flex-wrap gap-2 mt-4">
 <span className="bg-blue-50 border border-blue-200/60 text-blue-800 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm font-sans">
 <span className="w-2 h-2 rounded-full bg-blue-500"></span>ÁGUA (GELO)
 </span>
 <span className="bg-slate-700 border border-slate-650 text-slate-105 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm font-sans">
 <span className="w-2 h-2 rounded-full bg-slate-400"></span>ESCURIDÃO
 </span>
 <span className="bg-purple-950/20 border border-purple-900/40 text-purple-950 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm font-sans">
 <span className="w-2 h-2 rounded-full bg-purple-900"></span>VAZIO
 </span>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
