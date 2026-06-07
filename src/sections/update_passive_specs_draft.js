const fs = require('fs');
const path = require('path');

const filePath = 'c:\\Users\\lpfon\\Downloads\\doze-arcana\\src\\sections\\Caminhos.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Mestre de Vínculos runes
const vinculosTarget = `<p className="text-xs text-gray-750 font-sans leading-relaxed">
                                Você aprende automaticamente a invocar uma criatura feita de pura mana ou elementos (como um golem de pedra pequeno, lobo espectral ou corvo de chamas). Ele aparece em um espaço desocupado perto de você.
                            </p>`;
const vinculosReplacement = `<p className="text-xs text-gray-750 font-sans leading-relaxed">
                                Você aprende automaticamente a invocar uma criatura feita de pura mana ou elementos (como um golem de pedra pequeno, lobo espectral ou corvo de chamas). Ele aparece em um espaço desocupado perto de você.
                            </p>
                            <p className="text-xs text-cyan-950 font-semibold font-sans mt-2">Você aprende automaticamente as runas de Vínculo: <strong>Conectar</strong> e <strong>Marca</strong>.</p>`;

if (content.includes(vinculosTarget)) {
  content = content.replace(vinculosTarget, vinculosReplacement);
  console.log("Mestre de Vínculos runes updated.");
} else {
  console.log("ERROR: Mestre de Vínculos target not found!");
}

// 2. Metamorfo
const metamorfoNew = `                    <div id="spec-content-metamorfo" className={\`spec-content space-y-6 \${activeSpec === 'metamorfo' ? '' : 'hidden'}\`}>
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
                                    <li><strong>Garras de Fera:</strong> Seus ataques desarmados passam a causar <strong>1d6 + seu atributo de Físico</strong> de dano letal.</li>
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
                                        <p className="text-gray-600"><strong>Predador Perfeito:</strong> O dano básico de suas garras desarmadas aumenta para <strong>1d8 + Físico</strong>. Além disso, uma vez por turno, após atingir um inimigo com as garras, você pode fazer um ataque rápido de mordida extra como Ação Livre (causa 1d4 de dano e aplica 1d6 de Sangramento).</p>
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
                                        <p className="text-gray-600">Como uma Ação Complexa (6 PM), você assume a forma de besta quimérica por <strong>3 turnos</strong>. Seu atributo Físico recebe <strong>+2</strong> (podendo ultrapassar o limite), ganha <strong>1 Vantagem (+1d6)</strong> em testes de Físico e regenera <strong>1d6 PV</strong> no início de seus turnos. Ao final do efeito, você sofre Fadiga e perde <strong>2 Ações Padrões</strong> no seu próximo turno.</p>
                                    </div>
                                    <div className="bg-emerald-50/50 border border-emerald-100/60 rounded-lg p-2.5">
                                        <span className="font-bold text-emerald-950 block mb-0.5">Grau II (Avançado):</span>
                                        <p className="text-gray-600"><strong>Quimera Elemental:</strong> Ao se transformar, escolha um elemento (Fogo, Gelo ou Veneno). Seus ataques corporais causam <strong>+2 de dano bônus</strong> daquele elemento e a regeneração de PVs por turno aumenta para <strong>2d6 PV</strong>.</p>
                                    </div>
                                    <div className="bg-emerald-50/70 border border-emerald-200/50 rounded-lg p-2.5 shadow-xs">
                                        <span className="font-bold text-emerald-950 block mb-0.5">Grau III (Mestre):</span>
                                        <p className="text-gray-600"><strong>Quimera Suprema:</strong> O custo de ativação é reduzido para <strong>1 Ação Padrão</strong> e <strong>5 PM</strong>. Além disso, seu metabolismo estabiliza o estresse biológico e você não sofre a penalidade de Fadiga (perda de ações) ao término do efeito.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
`;

function replaceSection(id, endComment, newContent) {
  const startTag = `<div id="${id}"`;
  const startIndex = content.indexOf(startTag);
  if (startIndex === -1) {
    console.error(`ERROR: Start tag for ${id} not found!`);
    return false;
  }
  
  const endIndex = content.indexOf(endComment, startIndex);
  if (endIndex === -1) {
    console.error(`ERROR: End comment '${endComment}' not found after ${id}!`);
    return false;
  }
  
  // We want to find the closing </div> of the section which is before endComment.
  // The structure is:
  // <div id="spec-content-X" ...>
  //    ...
  // </div>
  // \n\n                    {/* NEXT SPEC CONTENT */}
  
  const partBefore = content.substring(0, startIndex);
  const partAfter = content.substring(endIndex);
  
  content = partBefore + newContent + '\n\n                    ';
  // We need to keep the endComment, but wait! Since we split at endIndex, partAfter contains the endComment.
  content += partAfter;
  console.log(`Successfully replaced ${id}.`);
  return true;
}

replaceSection('spec-content-metamorfo', '{/* ARTÍFICE DA MATÉRIA SPEC CONTENT */}', metamorfoNew);

// Write changes back to file
fs.writeFileSync(filePath, content, 'utf8');
console.log("Done.");
