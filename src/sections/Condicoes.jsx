import React from 'react';

export default function Condicoes() {
 return (
 <section id="sec-condicoes" className="content-section">
 <h2 className="text-3xl border-b-2 border-magic-100 pb-2 mb-4">7. Condições de Combate</h2>
 <p className="mb-6 text-gray-700 leading-relaxed font-sans">No campo de batalha mágico, controlar o posicionamento, os sentidos e o fluxo arcano dos
 adversários é tão vital quanto desferir golpes mortais. As <strong>Condições</strong> alteram drasticamente as capacidades físicas, sensoriais e místicas de alvos aliados ou
 inimigos.
 </p>

 {/* Conditions Columns Grid */}
 <div className="grid grid-cols-1 gap-8 mt-6">

 {/* CONDIÇÕES FÍSICAS (COLUNA SLATE) */}
 <div
 className="bg-slate-50/40 border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
 <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-200">
 <div className="p-3 bg-slate-600 text-white rounded-xl shadow-md">
 
 </div>
 <div>
 <h3 className="text-lg font-serif text-magic-900 mb-0.5 font-bold">Físicas</h3>
 <span
 className="bg-slate-100 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded font-sans uppercase tracking-wider">Mobilidade & Defesa</span>
 </div>
 </div>

 <div className="space-y-4">
 {/* Caído */}
 <div
 className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition-all duration-200 shadow-sm">
 <div className="flex items-center justify-between mb-2">
 <span className="font-serif font-bold text-base text-magic-900">1. Caído</span>
 <span
 className="bg-slate-100 text-slate-700 text-[9px] font-bold px-2 py-0.5 rounded font-sans border border-slate-200 uppercase tracking-wider">No Chão</span>
 </div>
 <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">O alvo está no chão, seja por ter sido derrubado, tropeçado ou por escolha própria.
 </p>
 <div className="space-y-2 text-xs text-gray-650 font-sans leading-normal">
 <p><strong>Mobilidade:</strong><br></br>Seu deslocamento cai para<strong> 0</strong>. Ele deve gastar uma <strong>Ação de Movimento</strong> no seu turno exclusivamente para se levantar.
 </p>
 <p><strong>Ataques de Perto:</strong><br></br>Enquanto estiver Caído, ataques corpo a corpo contra ele recebe <strong>1 Vantagem (+1d6)</strong>.</p>
 <p><strong>Ataques à Distância:</strong><br></br>Ataques à distância sofrem <strong>+1 Desvantagem (-1d6)</strong>.</p>
 </div>
 </div>

 {/* Imobilizado */}
 <div
 className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition-all duration-200 shadow-sm">
 <div className="flex items-center justify-between mb-2">
 <span className="font-serif font-bold text-base text-magic-900">2. Imobilizado</span>
 <span
 className="bg-indigo-50 text-indigo-800 text-[9px] font-bold px-2 py-0.5 rounded font-sans border border-indigo-100 uppercase tracking-wider">Preso</span>
 </div>
 <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">O alvo está preso (por raízes, gelo, estase ou agarrado).
 </p>
 <div className="space-y-2 text-xs text-gray-655 font-sans leading-normal">
 <p><strong>Mobilidade:</strong><br></br>Seu deslocamento torna-se <strong>0</strong> e ele não pode sofrer efeitos que o empurrem ou puxem.</p>
 <p><strong>Restrição:</strong><br></br>Não pode usar nenhuma ação que exija as pernas.</p>
 <p><strong>Penalidade:</strong><br></br>Sofre <strong>+1 Desvantagem (-1d6)</strong> em testes de <strong>Físico (Destreza)</strong>.</p>
 </div>
 </div>

 {/* Desarmado */}
 <div
 className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition-all duration-200 shadow-sm">
 <div className="flex items-center justify-between mb-2">
 <span className="font-serif font-bold text-base text-magic-900">3. Desarmado</span>
 <span
 className="bg-rose-50 text-rose-800 text-[9px] font-bold px-2 py-0.5 rounded font-sans border border-rose-100 uppercase tracking-wider">Sem Foco</span>
 </div>
 <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">O alvo deixou cair seu catalisador (varinha/tomo) ou arma.
 </p>
 <div className="space-y-2 text-xs text-gray-655 font-sans leading-normal">
 <p><strong>Bloqueio:</strong><br></br>Ele não pode realizar ataques marciais com a arma ou conjurar feitiços que exijam aquele foco específico.</p>
 <p><strong>Recuperação:</strong><br></br>Recolher o item do chão custa <strong>1 Ação de Movimento</strong>.</p>
 </div>
 </div>
 </div>
 </div>

 {/* CONDIÇÕES SENSORIAIS E MENTAIS (COLUNA AMBER) */}
 <div
 className="bg-amber-50/20 border border-amber-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
 <div className="flex items-center gap-3 pb-4 mb-5 border-b border-amber-100">
 <div className="p-3 bg-amber-600 text-white rounded-xl shadow-md">
 
 </div>
 <div>
 <h3 className="text-lg font-serif text-magic-900 mb-0.5 font-bold">Sensoriais e Mentais</h3>
 <span
 className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded font-sans uppercase tracking-wider font-semibold">Percepção & Foco</span>
 </div>
 </div>

 <div className="space-y-4">
 {/* Cego */}
 <div
 className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-amber-300 hover:shadow-md transition-all duration-200 shadow-sm">
 <div className="flex items-center justify-between mb-2">
 <span className="font-serif font-bold text-base text-magic-900">1. Cego</span>
 <span
 className="bg-amber-50 text-amber-800 text-[9px] font-bold px-2 py-0.5 rounded font-sans border border-amber-100 uppercase tracking-wider">Visão Anulada</span>
 </div>
 <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">A visão do alvo foi temporariamente ou totalmente anulada.
 </p>
 <div className="space-y-2 text-xs text-gray-655 font-sans leading-normal">
 <p><strong>Percepção:</strong><br></br>O alvo falha automaticamente em testes de Percepção baseados em visão.</p>
 <p><strong>Ataques:</strong><br></br>Ele sofre <strong>+1 Desvantagem (-1d6)</strong> em todas as suas rolagens de ataque e feitiços com alvo.</p>
 <p><strong>Abertura:</strong><br></br>Qualquer personagem que ataque um alvo Cego recebe <strong>1 Vantagem (+1d6)</strong>.</p>
 </div>
 </div>

 {/* Surdo */}
 <div
 className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-amber-300 hover:shadow-md transition-all duration-200 shadow-sm">
 <div className="flex items-center justify-between mb-2">
 <span className="font-serif font-bold text-base text-magic-900">2. Surdo</span>
 <span
 className="bg-amber-50 text-amber-800 text-[9px] font-bold px-2 py-0.5 rounded font-sans border border-amber-100 uppercase tracking-wider">Audição Anulada</span>
 </div>
 <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">O alvo perdeu a audição (explosões sonoras, bloqueio de cera).
 </p>
 <div className="space-y-2 text-xs text-gray-655 font-sans leading-normal">
 <p><strong>Percepção:</strong><br></br>Falha automaticamente em Percepção baseada em som.</p>
 <p><strong>Imunidade/Bloqueio:</strong><br></br>Não pode ser alvo de magias de comando de voz ou efeitos de encanto cantados.</p>
 <p><strong>Iniciativa:</strong><br></br>Sofre <strong>+1 Desvantagem (-1d6)</strong> em testes de Iniciativa (já que não consegue ouvir os inimigos se movendo).</p>
 </div>
 </div>

 {/* Desorientado */}
 <div
 className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-amber-300 hover:shadow-md transition-all duration-200 shadow-sm">
 <div className="flex items-center justify-between mb-2">
 <span className="font-serif font-bold text-base text-magic-900">3. Desorientado</span>
 <span
 className="bg-red-50 text-red-800 text-[9px] font-bold px-2 py-0.5 rounded font-sans border border-red-100 uppercase tracking-wider">Aturdido</span>
 </div>
 <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">A mente do alvo está atordoada por um impacto forte ou confusão mágica.
 </p>
 <div className="space-y-2 text-xs text-gray-655 font-sans leading-normal">
 <p><strong>Foco:</strong><br></br>O alvo não consegue se focar. Sofre <strong>+1 Desvantagem (-1d6)</strong> em ataques corpo a corpo, ataques a distância e magias.</p>
 <p><strong>Reações:</strong><br></br>Não pode usar Reações.</p>
 <p><strong>Economia:</strong><br></br>Só recebe <strong>1 Ação (Padrão ou de Movimento)</strong> no início do seu turno, em vez do conjunto normal de ações.</p>
 </div>
 </div>

 {/* Assustado */}
 <div
 className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-amber-300 hover:shadow-md transition-all duration-200 shadow-sm">
 <div className="flex items-center justify-between mb-2">
 <span className="font-serif font-bold text-base text-magic-900">4. Assustado</span>
 <span
 className="bg-amber-50 text-amber-800 text-[9px] font-bold px-2 py-0.5 rounded font-sans border border-amber-100 uppercase tracking-wider">Pavor</span>
 </div>
 <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">O alvo está sob efeito de medo irracional provocado por uma criatura ou feitiço.
 </p>
 <div className="space-y-2 text-xs text-gray-655 font-sans leading-normal">
 <p><strong>Desvantagem:</strong><br></br>Sofre <strong>+1 Desvantagem (-1d6)</strong> em todos os testes e ataques enquanto a fonte do medo estiver na sua linha de visão.</p>
 <p><strong>Movimento:</strong><br></br>Não pode se mover voluntariamente para um quadrado que o aproxime da fonte do medo.</p>
 </div>
 </div>
 </div>
 </div>

 {/* CONDIÇÕES MÁGICAS (COLUNA PURPLE) */}
 <div
 className="bg-purple-50/20 border border-purple-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
 <div className="flex items-center gap-3 pb-4 mb-5 border-b border-purple-100">
 <div className="p-3 bg-purple-600 text-white rounded-xl shadow-md">
 
 </div>
 <div>
 <h3 className="text-lg font-serif text-magic-900 mb-0.5 font-bold">Mágicas e Degradação</h3>
 <span
 className="bg-purple-100 text-purple-900 text-[10px] font-bold px-2 py-0.5 rounded font-sans uppercase tracking-wider font-semibold">Anulação & Degradação</span>
 </div>
 </div>

 <div className="space-y-4">
 {/* Silenciado */}
 <div
 className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-purple-300 hover:shadow-md transition-all duration-200 shadow-sm mb-4">
 <div className="flex items-center justify-between mb-2">
 <span className="font-serif font-bold text-base text-magic-900">1. Silenciado</span>
 <span
 className="bg-purple-50 text-purple-800 text-[9px] font-bold px-2 py-0.5 rounded font-sans border border-purple-100 uppercase tracking-wider">Voz Bloqueada</span>
 </div>
 <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">O alvo teve suas cordas vocais bloqueadas por magia ou está impedido de falar.
 </p>
 <div className="space-y-2 text-xs text-gray-655 font-sans leading-normal">
 <p><strong>Bloqueio Mágico:</strong><br></br>Ele não pode conjurar <strong>magia</strong> que exija componentes verbais (a menos que ele possua um Talento que permita conjurar em silêncio).</p>
 </div>
 </div>

 {/* Dano Contínuo */}
 <div
 className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-purple-300 hover:shadow-md transition-all duration-200 shadow-sm mb-4">
 <div className="flex items-center justify-between mb-2">
 <span className="font-serif font-bold text-base text-magic-900">2. Dano Contínuo</span>
 <span
 className="bg-rose-50 text-rose-800 text-[9px] font-bold px-2 py-0.5 rounded font-sans border border-rose-100 uppercase tracking-wider">Degradação</span>
 </div>
 <p className="text-[11px] text-gray-550 font-sans italic mb-2"> (Ex: Queimando, Sangrando, Envenenado)
 </p>
 <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">O alvo está perdendo PV lentamente por degradação ativa.
 </p>
 <div className="space-y-2 text-xs text-gray-655 font-sans leading-normal">
 <p><strong>Efeito Direto:</strong><br></br>No início de cada um dos turnos do alvo, ele sofre uma quantidade fixa de dano. Esse dano <strong>ignora Redução de Dano (RD)</strong>.
 </p>
 <p><strong>Resolução:</strong><br></br>A condição dura o tempo especificado pelo feitiço, ou até que o alvo (ou um aliado adjacente) gaste <strong>1 turno</strong> para estancar o ferimento/apagar o fogo.</p>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* CATEGORY 4: GENERAL RULES CALLOUT */}
 <div
 className="bg-indigo-950 text-white rounded-2xl p-6 mt-8 shadow-lg border border-indigo-800/40 relative overflow-hidden">
 <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl">
 </div>

 <div
 className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-800/60 pb-4 mb-4">
 <span className="font-serif font-bold text-lg flex items-center gap-2">Regras Gerais de Condições (Como o Mestre Resolve)
 </span>
 <span
 className="bg-indigo-800 text-indigo-200 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans border border-indigo-700/50 font-semibold">Resolução</span>
 </div>

 <div className="grid grid-cols-1 gap-6 font-sans text-xs text-indigo-100 leading-relaxed">
 <div className="bg-indigo-900/30 p-4 rounded-xl border border-indigo-800/40">
 <h4
 className="font-serif font-bold text-sm text-white mb-2 flex items-center gap-1.5 font-bold">Não Cumulativas
 </h4>
 <p>Se um personagem já está sob uma condição (ex: Assustado) e sofre uma nova aplicação da mesma condição, os efeitos não se acumulam (ele não ganha duas desvantagens). Apenas a duração da condição é reiniciada.
 </p>
 </div>

 <div className="bg-indigo-900/30 p-4 rounded-xl border border-indigo-800/40">
 <h4
 className="font-serif font-bold text-sm text-white mb-2 flex items-center gap-1.5 font-bold">Sobreposição de Modificadores
 </h4>
 <p>As Vantagens (+1d6) e Desvantagens (-1d6) se anulam mutuamente. Se um personagem Cego (Desvantagem) ataca um inimigo Caído no chão (Vantagem para perto), a matemática se anula perfeitamente e ele rola o teste de forma pura (2d12 puros).
 </p>
 </div>

 <div className="bg-indigo-900/30 p-4 rounded-xl border border-indigo-800/40">
 <h4
 className="font-serif font-bold text-sm text-white mb-2 flex items-center gap-1.5 font-bold">Fim do Efeito
 </h4>
 <p>Salvo exceções de magias muito poderosas, a maioria das condições temporárias dura "até o final do próximo turno de quem as causou" ou exige que o alvo gaste ações para se livrar delas (como gastar uma Ação de Movimento para se levantar ou uma Ação Padrão para apagar chamas).
 </p>
 </div>
 </div>
 </div>

 </section>
 );
}
