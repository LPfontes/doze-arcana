import React from 'react';

export default function Combate() {
    return (
        <section id="sec-combate" className="content-section">
            <h2 className="text-3xl border-b-2 border-magic-100 pb-2 mb-4">4. Combate e Recursos</h2>
            <p className="mb-4">O combate é estruturado através de testes de atributos, comparando o ataque contra uma Defesa padrão.</p>

            <h3 className="text-2xl mt-6 mb-2">Atributos de Combate</h3>
            <ul>
                <li><strong>Defesa Padrão</strong><br />Calculada como <code>Atributo Físico x 2 + 10</code>.</li>
                <li><strong>Pontos de Vitalidade (PV)</strong><br />Medem a saúde física. Calculado como <code> 15 + (Atributo Físico x 3)</code>. Ao chegar a 0 PV, o personagem fica Esgotado e precisa passar em testes de Mental + Vontade (DT 12) a cada rodada para evitar desmaios ou sequelas.
                </li>
                <li><strong>Pontos de Mana (PM)</strong><br />Reservatório mágico para feitiços. Calculado como <code>12 + (seu atributo de Magia x 3)</code>.</li>
                <li><strong>Redução de Dano (RD)</strong><br />Reduz uma quantidade fixa do dano recebido de cada ataque. Sempre que o dano total recebido em um único ataque ultrapassar o <strong>Limite de Quebra</strong> de um item defensivo, esse item recebe 1 ponto de <strong>Quebra</strong>. Itens que atingem seu limite de Quebras deixam de fornecer RD até serem consertados. O Limite de Quebra não se acumula entre itens, aplica-se a cada item individualmente.</li>
                <li><strong>Cobertura</strong><br />Cobertura Leve impõe 1 Desvantagem ao ataque inimigo, enquanto Cobertura Pesada impõe 2 Desvantagens.</li>
            </ul>

            <h3 className="text-2xl mt-8 mb-3 font-serif text-magic-900 flex items-center">Cálculo de Danos & Sistema de Armas
            </h3>
            {/* Fórmulas Básicas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl shadow-sm">
                    <span
                        className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider font-sans block mb-1">Dano Físico Básico</span>
                    <div className="font-serif text-xl font-bold text-magic-900 mb-1">3 + 1d6 + Físico</div>
                    <p className="text-[11px] text-gray-500 font-sans leading-tight">Utilizado por armas físicas como espadas, machados, lanças e arcos.</p>
                </div>
                <div className="bg-cyan-50/50 border border-cyan-100 p-4 rounded-xl shadow-sm">
                    <span
                        className="text-[10px] font-bold text-cyan-600 uppercase tracking-wider font-sans block mb-1">Dano Mágico Básico</span>
                    <div className="font-serif text-xl font-bold text-magic-900 mb-1">3 + 1d6 + seu atributo de Magia</div>
                    <p className="text-[11px] text-gray-500 font-sans leading-tight">Utilizado por varinhas, cajados, orbes e canalizadores de Arcana.</p>
                </div>
                <div className="bg-amber-50/50 border border-amber-100 p-4 rounded-xl shadow-sm">
                    <span
                        className="text-[10px] font-bold text-amber-700 uppercase tracking-wider font-sans block mb-1">Dano Crítico</span>
                    <div className="font-serif text-lg font-bold text-amber-900 mb-1">Máximo + 1d6 Extra</div>
                    <p className="text-[11px] text-gray-500 font-sans leading-tight">Maximiza o valor base dos dados de dano e adiciona +1d6 extra.</p>
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
                            <p><strong>Efeito:</strong><br></br>O alvo recebe 1 Ponto de Sangramento. No início de cada um dos turnos dele, ele sofre <strong>2 de dano direto nos PV</strong> (ignora PRO) para cada Ponto de Sangramento ativo.</p>
                            <p
                                className="bg-red-50/50 text-red-950 px-2.5 py-1.5 rounded border border-red-100/60 text-[11px] flex items-start gap-1.5 leading-normal">

                                <span><strong>Salvamento:</strong><br></br>Após sofrer o dano no seu turno, o alvo testa <strong>Físico + Vigor (DT 12 + Pontos de Sangramento)</strong>. Sucesso zera os Pontos de Sangramentos; falha mantém o efeito ativo para a próxima rodada.</span>
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
                            <p><strong>Efeito:</strong><br></br>Você foca o impacto em um ponto vulnerável. O dano deste ataque <strong>ignora até 2 pontos de Redução de Dano (RD)</strong> do alvo, atingindo os PVs com mais facilidade.</p>
                        </div>
                    </div>

                    {/* Contusão */}
                    <div
                        className="bg-white border border-slate-200/80 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition-all duration-200 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-serif font-bold text-base text-magic-900">3. Contusão <span
                                className="font-sans font-normal text-xs text-gray-500 block md:inline md:ml-1">(Martelos, Maças, Bastões Pesados, Punhos)</span></span>
                            <span
                                className="bg-indigo-50 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded font-sans border border-indigo-100 uppercase tracking-wider">Quebra de Armadura</span>
                        </div>
                        <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">
                            <em>O impacto bruto projetado para esmagar couraças, amassar escudos e estilhaçar barreiras mágicas.</em>
                        </p>
                        <div className="space-y-2 text-xs text-gray-600 font-sans leading-normal">
                            <p><strong>Efeito:</strong><br></br>Você foca toda a energia cinética na estrutura defensiva do alvo. Ao acertar o ataque e gastar 1 Ação Padrão, o dano é <strong>dobrado exclusivamente para verificar se ultrapassa o Limite de Quebra</strong> dos itens do oponente. <em>(Nota: O dano extra não é aplicado contra a Vitalidade (PV), ele serve apenas para testar a durabilidade dos itens).</em>
                            </p>
                            <p
                                className="bg-red-50/50 text-red-950 px-2.5 py-1.5 rounded border border-red-100/60 text-[11px] flex items-start gap-1.5 mt-2">

                                <span><strong>Destruição de Item:</strong><br></br>Caso o dano total deste golpe ultrapasse o Limite de Quebra de um equipamento defensivo (armadura física, amuleto ou item mágico), o estresse mecânico é avassalador. O item recebe imediatamente <strong>2 pontos de Quebra (ao invés de 1).</strong></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <h3 className="text-2xl mt-6 mb-2">Economia de Ações</h3>
            <p className="mb-2">Todo personagem recebe <strong>(1 Ação de Movimento + 2 Ações Padrões) ou (1 Ação de Movimento + 1 Ação Complexa) ou 1 Ação Completa</strong> no início de seu turno. Além disso, todos têm direito a <strong>1 Reação por rodada</strong>.</p>
            <p className="mb-2"><strong>Exemplo:</strong></p>
            <p>Um aluno pode fazer um ataque basico usando uma <strong>Ação Padrão</strong> e em seguida fazer outra <strong>Ação Padrão</strong> para conjurar uma magia. Ou ele pode fazer um ataque basico usando uma <strong>Ação Padrão</strong> e em seguida fazer uma <strong>Ação de Movimento</strong> e atacar novamente usando outra <strong>Ação Padrão</strong> Entretando a ação de movimento tem que ser resolvida antes de outras ações, não é possivel se mover parte do movimento fazer outra ação e depois mover o restante.</p>
            <p className="mb-2">Se um personagem decide realizar uma Conjuração Improvisada (que exige uma <strong>Ação Complexa</strong>), ele ainda pode se mover (<strong>Ação de Movimento</strong>) antes ou depois da conjuração.</p>
            <p className="mb-2">Já a <strong>Ação Completa</strong> consome todo o tempo do turno, não sendo possível realizar nenhuma outra ação além da <strong>Ação Completa</strong>.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <span className="font-bold text-magic-800 text-lg block border-b mb-2">Ações do Turno</span>
                    <ul className="mb-0 space-y-2">
                        <li><strong>Ação de Movimento:</strong><br />Mover-se até 6 espaços, levantar-se (Caído), recolher um item do chão, etc.</li>
                        <li><strong>Ações Padrões (2 por turno):</strong><br />Realizar um ataque, conjurar um feitiço padrão ou realizar Testes Resistidos (Agarrar, Empurrar, Derrubar).</li>
                        <li><strong>Ação Complexa:</strong><br />Conjuração Improvisada, rituais complexos ou habilidades especiais que consomem todo o seu tempo de ação do turno.</li>
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
        </section>
    );
}
