import React from 'react';

export default function Combate() {
    return (
        <section id="sec-combate" className="content-section">
            <h2 className="chapter-title">
                <span className="chapter-number">2</span>
                Combate e Recursos
            </h2>
            <p className="mb-4">O combate é estruturado através de testes de atributos, comparando o ataque contra uma Defesa padrão.</p>

            <h3 className="text-2xl mt-6 mb-2">Atributos de Combate</h3>
            <ul>
                <li><strong>Defesa Padrão</strong><br />A capacidade de desviar e resistir a ataques. Representa a dificuldade para que um ataque te acerte de modo a causar dano. Calculada como <code>7 + Fisico</code>.</li>
                <li><strong>Pontos de Vida (PV)</strong><br />Medem a saúde física. Calculado como <code>20 + (Fisico x 5)</code>. Ao chegar a 0 PV, o personagem fica Esgotado. Se sofrer qualquer tipo de dano enquanto estiver com 0 PV, ele sofre um Trauma (veja a tabela de traumas abaixo).</li>
                <li><strong>Pontos de Mana (PM)</strong><br />Reservatório mágico para feitiços. Calculado como <code>12 + (seu atributo de Magia x 3)</code>.</li>
                <li><strong>Pontos de Arcana</strong><br />Recursos poderosos que representam o seu potencial mágico latente. Podem ser utilizados para ativar habilidades especiais, magias e aprimorar testes. Você recebe Pontos de Arcana ao realizar acertos críticos em rolagens ou ao concluir missões importantes.</li>
                <li><strong>Redução de Dano (RD)</strong><br />Um atributo contínuo proveniente de equipamentos (como armaduras) que reduz uma quantidade fixa do dano recebido de cada ataque.</li>
                <li><strong>Proteção (PR)</strong><br />Um valor extra de vida temporário (concedido por magias e habilidades temporárias) que absorve o dano sofrido antes de atingir seus Pontos de Vida (PV). É consumido e destruído ao chegar a 0.</li>
                <li><strong>Cobertura</strong><br />Cobertura Leve impõe 1 Desvantagem ao ataque inimigo, enquanto Cobertura Pesada impõe 2 Desvantagens.</li>
            </ul>

            {/* Tabela de Traumas */}
            <div className="bg-rose-50/30 border border-rose-200/60 rounded-xl p-5 mt-6 shadow-sm">
                <h4 className="font-serif font-bold text-rose-950 text-lg mb-3 flex items-center gap-2">
                    <span>🩸</span> Tabela de Traumas (Rolagem de 2d6)
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed mb-4">
                    Sempre que um personagem estiver com <strong>0 PV</strong> (Esgotado) e sofrer qualquer tipo de dano, ele deve rolar <strong>2d6</strong> e aplicar o trauma correspondente:
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse border border-rose-100/50">
                        <thead>
                            <tr className="bg-rose-50/50 text-rose-900 font-bold font-sans">
                                <th className="p-2.5 border border-rose-100">Resultado (2d6)</th>
                                <th className="p-2.5 border border-rose-100">Trauma</th>
                                <th className="p-2.5 border border-rose-100">Efeito Mecânico</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 font-sans">
                            <tr className="bg-rose-50/10">
                                <td className="p-2.5 border border-rose-100 font-bold text-rose-950">2 (Falha Crítica)</td>
                                <td className="p-2.5 border border-rose-100 font-serif font-bold text-magic-950">inconsciente</td>
                                <td className="p-2.5 border border-rose-100">O personagem cai inconsciente, não pode agir e corre risco de morrer. Um personagem so volta a ficar consciente apos ser estabilizado (pvs acima de 0) e passar por um descanso longo.</td>
                            </tr>
                            <tr>
                                <td className="p-2.5 border border-rose-100 font-bold">3 -4</td>
                                <td className="p-2.5 border border-rose-100 font-serif font-semibold">Cicatriz Dolorosa</td>
                                <td className="p-2.5 border border-rose-100">O golpe deixa uma marca profunda. O limite máximo de PV do personagem é reduzido em <strong>3 PV</strong> permanentemente. A Recuperação disso fica a cargo do narrador, pode ser necessário magias poderosas ou rituais arcanos. </td>
                            </tr>
                            <tr>
                                <td className="p-2.5 border border-rose-100 font-bold">5 - 8</td>
                                <td className="p-2.5 border border-rose-100 font-serif font-semibold">Fratura Exposta</td>
                                <td className="p-2.5 border border-rose-100">Um membro é quebrado. Sofre <strong>+1 Desvantagem (-1d4)</strong> em testes Físicos até ser tratado com medicina (mental dificuldade 10) ou magia de cura (que cure pelo menos 5pv).</td>
                            </tr>
                            <tr>
                                <td className="p-2.5 border border-rose-100 font-bold">9 - 11</td>
                                <td className="p-2.5 border border-rose-100 font-serif font-semibold">Concussão Severa</td>
                                <td className="p-2.5 border border-rose-100">Sofre <strong>+1 Desvantagem (-1d4)</strong> em todos os testes Mentais e de Iniciativa e conjuração de magia até realizar um descanso longo.</td>
                            </tr>
                            <tr className="bg-rose-50/10">
                                <td className="p-2.5 border border-rose-100 font-bold text-emerald-800">12 (Acerto de Sorte)</td>
                                <td className="p-2.5 border border-rose-100 font-serif font-bold text-emerald-900">Cicatriz Gloriosa</td>
                                <td className="p-2.5 border border-rose-100">O personagem resiste bravamente.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h3 className="text-2xl mt-8 mb-3 font-serif text-magic-900 flex items-center">Cálculo de Danos & Sistema de Armas
            </h3>
            {/* Fórmulas Básicas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl shadow-sm">
                    <span
                        className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider font-sans block mb-1">Dano Físico Básico</span>
                    <div className="font-serif text-xl font-bold text-magic-900 mb-1">Maior d6 do ataque + Físico</div>
                    <p className="text-[11px] text-gray-500 font-sans leading-tight">Determinado pelo maior d6 rolado no teste de ataque físico, somado ao seu atributo Físico.</p>
                </div>
                <div className="bg-cyan-50/50 border border-cyan-100 p-4 rounded-xl shadow-sm">
                    <span
                        className="text-[10px] font-bold text-cyan-600 uppercase tracking-wider font-sans block mb-1">Dano Mágico Básico</span>
                    <div className="font-serif text-xl font-bold text-magic-900 mb-1">Maior d6 do ataque + Magia</div>
                    <p className="text-[11px] text-gray-500 font-sans leading-tight">Determinado pelo maior d6 rolado no teste de ataque mágico, somado ao seu atributo de Magia.</p>
                </div>
                <div className="bg-amber-50/50 border border-amber-100 p-4 rounded-xl shadow-sm">
                    <span
                        className="text-[10px] font-bold text-amber-700 uppercase tracking-wider font-sans block mb-1">Dano Crítico</span>
                    <div className="font-serif text-lg font-bold text-amber-900 mb-1">dano base Maximizado + 1d6 + Atributo</div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-6">
                {/* FÍSICOS */}
                <div className="space-y-4">
                    <div
                        className="bg-slate-900 text-white px-4 py-3 rounded-xl flex items-center justify-between shadow-md">
                        <span className="font-serif font-bold text-base flex items-center gap-2">Danos Físicos <span
                            className="text-[10px] text-slate-300 font-sans font-normal">(Custo: +1 Ação Padrão)</span>
                        </span>
                        <span
                            className="bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider font-sans">Físico
                            Ativo</span>
                    </div>
                    <p className="text-xs text-gray-500 italic font-sans px-1">Ao acertar um ataque físico, o atacante pode gastar <strong>1 Ação Padrão adicional</strong> no mesmo turno para ativar o efeito especial da sua arma.
                    </p>

                    {/* Cortante */}
                    <div
                        className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition-all duration-200 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-serif font-bold text-base text-magic-900">1. Cortante <span
                                className="font-sans font-normal text-xs text-gray-500 block md:inline md:ml-1">(Espadas, Machados, Foices)</span></span>
                            <span
                                className="bg-red-50 text-red-800 text-[10px] font-bold px-2 py-0.5 rounded font-sans border border-red-100 uppercase tracking-wider">Sangramento</span>
                        </div>
                        <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">
                            <em>O corte limpo que rompe a carne.</em>
                        </p>
                        <div className="space-y-2 text-xs text-gray-600 font-sans">
                            <p><strong>Efeito:</strong><br></br>O alvo recebe 1 Ponto de Sangramento. No início de cada um dos turnos dele, ele sofre <strong>2 de dano direto nos PV (ignora Proteção (PR) e Redução de Dano (RD))</strong> para cada Ponto de Sangramento ativo.</p>
                            <p
                                className="bg-red-50/50 text-red-950 px-2.5 py-1.5 rounded border border-red-100/60 text-[11px] flex items-start gap-1.5 leading-normal">

                                <span><strong>Salvamento:</strong><br></br>Após sofrer o dano no seu turno, o alvo testa <strong>Físico + Vigor (DT 7 + Pontos de Sangramento)</strong>. Sucesso zera os Pontos de Sangramentos; falha mantém o efeito ativo para a próxima rodada.</span>
                            </p>
                        </div>
                    </div>

                    {/* Perfurante */}
                    <div
                        className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition-all duration-200 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-serif font-bold text-base text-magic-900">2. Perfurante <span
                                className="font-sans font-normal text-xs text-gray-500 block md:inline md:ml-1">(Adagas, Lanças, Flechas)</span></span>
                            <span
                                className="bg-amber-50 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded font-sans border border-amber-100 uppercase tracking-wider">Perfuração</span>
                        </div>
                        <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">
                            <em>O ataque preciso que busca as frestas das armaduras e pontos vitais.</em>
                        </p>
                        <div className="space-y-2 text-xs text-gray-600 font-sans leading-normal">
                            <p><strong>Efeito:</strong><br></br>Você foca o impacto em um ponto vulnerável. O dano deste ataque <strong>ignora até 4 pontos de Redução de Dano (RD)</strong> do alvo, atingindo os PVs com mais facilidade.</p>
                        </div>
                    </div>

                    {/* Contusão */}
                    <div
                        className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition-all duration-200 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-serif font-bold text-base text-magic-900">3. Contusão <span
                                className="font-sans font-normal text-xs text-gray-500 block md:inline md:ml-1">(Martelos, Maças, Bastões Pesados, Punhos)</span></span>
                            <span
                                className="bg-indigo-50 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded font-sans border border-indigo-100 uppercase tracking-wider">Derrubar / Empurrar</span>
                        </div>
                        <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">
                            <em>O impacto bruto projetado para desestabilizar oponentes e quebrar sua postura.</em>
                        </p>
                        <div className="space-y-2 text-xs text-gray-650 font-sans leading-normal">
                            <p><strong>Efeito:</strong><br></br>Você foca toda a energia do impacto no equilíbrio do alvo. Ao acertar o ataque e gastar 1 Ação Padrão, o alvo deve fazer um teste de salvamento de <strong>Físico + Vigor (DT 8 + seu Atributo Físico)</strong>. Em caso de falha, ele é empurrado até 2 espaços e fica Caído.</p>
                        </div>
                    </div>
                </div>
            </div>=

            <hr />

            <h3 className="text-2xl mt-6 mb-2">Economia de Ações</h3>
            <p className="mb-2">Todo personagem recebe <strong>(1 Ação de Movimento + 2 Ações Padrões) ou (1 Ação de Movimento + 1 Ação Complexa) ou 1 Ação Completa</strong> no início de seu turno. Além disso, todos têm direito a <strong>1 Reação por rodada</strong>.</p>
            <p className="mb-2"><strong>Exemplo:</strong></p>
            <p>Um aluno pode fazer um ataque basico usando uma <strong>Ação Padrão</strong> e em seguida fazer outra <strong>Ação Padrão</strong> para conjurar uma magia. Ou ele pode fazer um ataque basico usando uma <strong>Ação Padrão</strong> e em seguida fazer uma <strong>Ação de Movimento</strong> e atacar novamente usando outra <strong>Ação Padrão</strong> Entretando a ação de movimento tem que ser resolvida antes de outras ações, não é possivel se mover parte do movimento fazer outra ação e depois mover o restante.</p>
            <p className="mb-2">Se um personagem decide realizar uma <strong>Ação Complexa</strong> (como rituais ou habilidades especiais), ele ainda pode se mover (<strong>Ação de Movimento</strong>) antes ou depois de realizá-la.</p>
            <p className="mb-2">Já a <strong>Ação Completa</strong> consome todo o tempo do turno, não sendo possível realizar nenhuma outra ação além da <strong>Ação Completa</strong>.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <span className="font-bold text-magic-800 text-lg block border-b mb-2">Ações do Turno</span>
                    <ul className="mb-0 space-y-2">
                        <li><strong>Ação de Movimento:</strong><br />Mover-se até 6 espaços, levantar-se (Caído), recolher um item do chão, etc.</li>
                        <li><strong>Ações Padrões (2 por turno):</strong><br />Realizar um ataque, conjurar um feitiço padrão ou realizar Testes Resistidos (Agarrar, Empurrar, Derrubar).</li>
                        <li><strong>Ação Complexa:</strong><br />Rituais complexos ou habilidades especiais que consomem todo o seu tempo de ação do turno.</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <span className="font-bold text-magic-800 text-lg block border-b mb-2">Reações (1 por rodada)</span>
                    <ul className="mb-0 space-y-2">
                        <li><strong>Defender:</strong><br />Dobra a sua Redução de Dano (RD) até o início do seu próximo turno.</li>
                        <li><strong>Esquivar:</strong><br />Realiza um teste de Físico (Destreza) contra o acerto inimigo para tentar anular o ataque completamente.</li>
                    </ul>
                </div>
            </div>

            <hr className="my-6" />

            {/* Iniciativa */}
            <h3 className="text-2xl mt-6 mb-2">Iniciativa</h3>
            <p className="mb-3 text-gray-700 leading-relaxed">No início de cada combate, todos os participantes rolam para determinar a ordem de ação. O resultado mais alto age primeiro.</p>
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-4 mb-4 flex items-center gap-4 shadow-sm">
                <div className="text-center">
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-1">Fórmula</span>
                    <span className="font-serif text-2xl font-black text-magic-900">2d6 + Mental</span>
                </div>
                <p className="text-xs text-gray-600 font-sans leading-relaxed">Em caso de empate, personagens <strong>jogadores</strong> têm prioridade sobre personagens do Mestre.</p>
            </div>

            <hr className="my-6" />

            {/* Descanso */}
            <h3 className="text-2xl mt-6 mb-3">Descanso e Recuperação</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-amber-50/40 border border-amber-200/60 rounded-xl p-4 shadow-sm">
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block mb-1 font-sans">🌙 Descanso Curto</span>
                    <span className="font-serif font-bold text-base text-amber-900 block mb-1">Mínimo 4 horas</span>
                    <ul className="text-xs text-gray-700 font-sans space-y-1 leading-relaxed">
                        <li>Recupera <strong>3 + 1d6 PV</strong></li>
                        <li>Recupera <strong>3 + 1d6 PM</strong></li>
                        <li>Remove condições temporárias (Sangramento, Desorientado, etc.)</li>
                        <li className="text-amber-700 italic">Não remove Traumas, Fratura Exposta ou Concussão Severa.</li>
                    </ul>
                </div>
                <div className="bg-indigo-50/40 border border-indigo-200/60 rounded-xl p-4 shadow-sm">
                    <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider block mb-1 font-sans">⭐ Descanso Longo</span>
                    <span className="font-serif font-bold text-base text-indigo-900 block mb-1">8 horas completas</span>
                    <ul className="text-xs text-gray-700 font-sans space-y-1 leading-relaxed">
                        <li>Recupera <strong>todos os PV</strong></li>
                        <li>Recupera <strong>todos os PM</strong></li>
                        <li>Remove Concussão Severa, Fratura Exposta (se tratada) e todas as condições "até descanso longo"</li>
                        <li className="text-indigo-700 italic">Personagem Inconsciente só desperta após um Descanso Longo.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
