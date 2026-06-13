import React from 'react';

export default function Economia() {
 return (
 <section id="sec-economia" className="content-section">
 <h2 className="text-3xl border-b-2 border-magic-100 pb-2 mb-4">8. Economia Escolar: Créditos &amp; Prestígio</h2>
 
 {/* Dual Currency Container */}
 <div className="grid grid-cols-1 gap-8 mt-6">

 {/* CRÉDITOS ACADÊMICOS (COLUNA INDIGO) */}
 <div
 className="bg-indigo-50/20 border border-indigo-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
 {/* Header da Moeda */}
 <div className="flex items-center gap-3 pb-4 mb-5 border-b border-indigo-100">
 <div className="p-3 bg-indigo-600 text-white rounded-xl shadow-md">
 
 </div>
 <div>
 <h3 className="text-2xl font-serif text-magic-900 mb-0.5">Créditos Acadêmicos</h3>
 <span
 className="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded font-sans uppercase tracking-wider">A
 Moeda Prática</span>
 </div>
 </div>

 <p className="text-xs text-gray-600 font-sans leading-relaxed mb-6">Os Créditos são a representação tangível do seu valor para a instituição. Eles substituem o dinheiro comum e medem a confiança que a escola deposita no aluno, permitindo o intercâmbio de favores, recursos e privilégios.
 </p>

 <div className="space-y-4">
 {/* Como Ganhar */}
 <div
 className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition-all duration-200 shadow-sm">
 <div className="flex items-center gap-2 mb-2">
 
 <span className="font-serif font-bold text-base text-magic-900">Como
 Ganhar</span>
 </div>
 <ul className="text-xs text-gray-600 font-sans space-y-2 pl-4 list-disc mb-0">
 <li><strong>Desempenho Acadêmico:</strong><br></br>Tirar notas altas em exames (testes da perícia <em>Conhecimento</em>), apresentar trabalhos excepcionais ou auxiliar professores em pesquisas.</li>
 <li><strong>Atividades Extracurriculares:</strong><br></br>Participar de clubes acadêmicos (como o Clube de Duelos ou de Alquimia) e vencer torneios esportivos.</li>
 <li><strong>Missões Escolares:</strong><br></br>Cumprir tarefas dadas por monitores, professores ou pelo próprio diretor (ex: investigar uma criatura solta nas estufas).</li>
 </ul>
 </div>

 {/* Como Gastar */}
 <div
 className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition-all duration-200 shadow-sm">
 <div className="flex items-center gap-2 mb-2">
 
 <span className="font-serif font-bold text-base text-magic-900">Como
 Gastar</span>
 </div>
 <ul className="text-xs text-gray-600 font-sans space-y-2 pl-4 list-disc mb-0">
 <li><strong>Equipamentos:</strong><br></br>Adquirir novos itens com Redução de Dano (RD), varinhas catalisadoras, ingredientes raros de Ofício ou poções na intendência da escola.</li>
 <li><strong>Informação e Acesso:</strong><br></br>Pagar o passe para acessar a Seção Restrita da biblioteca, comprar chaves de laboratórios avançados para usar à noite ou solicitar permissões de saída para vilas vizinhas.</li>
 </ul>
 </div>

 {/* Como Perder (Punições) */}
 <div
 className="bg-rose-50/50 border border-rose-100 rounded-xl p-4 hover:border-rose-200 hover:shadow-md transition-all duration-200 shadow-sm">
 <div className="flex items-center gap-2 mb-2">
 
 <span className="font-serif font-bold text-base text-rose-900">Como Perder
 (Sistema de Punição)</span>
 </div>
 <p className="text-xs text-rose-950 font-sans leading-normal mb-0">Quebrar as regras da escola (ser pego fora da cama após o toque de recolher, usar magia em corredores, duelar sem supervisão ou invadir áreas restritas) resulta em multas e na <strong>dedução direta de Créditos</strong>. Um aluno com saldo negativo perde privilégios básicos e pode sofrer detenção ou até suspensão de privilégios.
 </p>
 </div>
 </div>
 </div>

 {/* PRESTÍGIO (COLUNA AMBER) */}
 <div
 className="bg-amber-50/20 border border-amber-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
 {/* Header da Moeda */}
 <div className="flex items-center gap-3 pb-4 mb-5 border-b border-amber-100">
 <div className="p-3 bg-amber-600 text-white rounded-xl shadow-md">
 
 </div>
 <div>
 <h3 className="text-2xl font-serif text-magic-900 mb-0.5">Prestígio</h3>
 <span
 className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded font-sans uppercase tracking-wider">A
 Moeda Social</span>
 </div>
 </div>

 <p className="text-xs text-gray-600 font-sans leading-relaxed mb-6">Se os Créditos ditam o que você pode <em>ter</em>, o Prestígio dita quem você <em>é</em>. Ele não é apenas um número a ser gasto, mas um status que acompanha o personagem e define como o ecossistema da escola reage a ele.
 </p>

 <div className="space-y-4">
 {/* A Dupla Natureza */}
 <div
 className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-amber-300 hover:shadow-md transition-all duration-200 shadow-sm">
 <div className="flex items-center gap-2 mb-2">
 
 <span className="font-serif font-bold text-base text-magic-900">A Dupla Natureza do Prestígio</span>
 </div>
 <ul className="text-xs text-gray-600 font-sans space-y-2 pl-4 list-disc mb-0">
 <li><strong>A Fama (O Quanto te conhecem):</strong><br></br>Vai do anonimato completo até a popularidade absoluta. Um aluno com alto Prestígio é reconhecido nos corredores; seus feitos (ou boatos sobre eles) chegam aos ouvidos dos professores e líderes de outras Casas.</li>
 <li><strong>A Reputação (Como te conhecem):</strong><br></br>O Prestígio carrega um "título" narrativo baseado em suas ações. Você pode ter um Prestígio alto como o <em className="text-amber-800 font-medium">"Gênio Benevolente"</em>, o <em className="text-amber-800 font-medium">"Encrenqueiro Temido"</em>ou o <em className="text-amber-800 font-medium">"Herdeiro Arrogante"</em>.
 </li>
 </ul>
 </div>

 {/* Impactos Mecânicos */}
 <div
 className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-amber-300 hover:shadow-md transition-all duration-200 shadow-sm">
 <div className="flex items-center gap-2 mb-2">
 
 <span className="font-serif font-bold text-base text-magic-900">Impacto Mecânico no Jogo</span>
 </div>
 <ul className="text-xs text-gray-600 font-sans space-y-2 pl-4 list-disc mb-0">
 <li><strong>Bônus Sociais:</strong><br></br>Ter um Prestígio alinhado com o NPC com quem você está interagindo pode conceder <strong>1 Vantagem (+1d6)</strong> em testes do atributo <strong>Social</strong> ( <em>Persuadir</em> ou <em>Intimidar</em> ). Por exemplo, um aluno com a reputação de "Encrenqueiro Perigoso" tem facilidade para intimidar calouros.</li>
 <li><strong>Abertura de Portas (Sem gastar Créditos):</strong><br></br>Certos NPCs (como o capitão do time esportivo ou o líder do grêmio estudantil) só aceitam conversar ou passar missões exclusivas para alunos que possuam um nível mínimo de Prestígio.</li>
 <li><strong>O Peso da Fama:</strong><br></br>Ter Prestígio muito alto torna quase impossível realizar ações Furtivas ou passar despercebido. Se você é a estrela da escola, sempre haverá alguém prestando atenção no que você está fazendo.</li>
 </ul>
 </div>
 </div>
 </div>

 </div>

 <hr />
 </section>
 );
}
