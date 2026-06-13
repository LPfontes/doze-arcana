import React from 'react';

export default function Grimorio() {
    return (
        <section id="sec-grimorio" className="content-section">
            <h2 className="text-3xl border-b-2 border-magic-100 pb-2 mb-4">5. O Grimório e a Jornada do Conhecimento</h2>

            <div className="italic text-gray-655 bg-indigo-50/40 border-l-4 border-indigo-600 p-4 rounded-r-xl mb-6 font-serif">
                <p className="mb-1 text-base">“A magia não é um dom divino que jorra sem controle; é uma ciência matemática rigorosa. Seu grimório é a única diferença entre um arquimago formidável e um tolo que incendeia a própria túnica por acidente.”</p>
                <span className="text-sm font-sans font-semibold text-indigo-900">Grão-Mestre da Forja Arcana</span>
            </div>

            <h3 className="text-2xl mt-6 mb-2 flex items-center gap-2">
                <span>O Grimório</span>
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed font-sans">O grimório não é apenas um caderno de anotações, ele é a extensão viva da mente do conjurador, sua historia. Ele representa as equações mágicas que o aluno já testou, balanceou e dominou completamente. O grimório não é estático, ele evolui passo a passo com o conhecimento prático e teórico do aluno.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed font-sans">
                <strong>O Arsenal Inicial:</strong><br />Todo aluno do Primeiro Ano inicia sua jornada acadêmica com uma média de <strong>3 Feitiços Consolidados</strong> transcritos em seu grimório. Mecanicamente, estes feitiços compõem o seu "arsenal padrão", sendo as ferramentas primárias com as quais ele lidará durante os embates.
            </p>

            <hr className="my-6 border-slate-200" />

            <h3 className="text-2xl mt-6 mb-3 flex items-center gap-2">
                <span>Feitiços do Grimório vs. Conjuração Improvisada</span>
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed font-sans">Em combate, o tempo de reação é a linha tênue entre a vida e a morte. O sistema divide a forma como você tece a Trama Arcana em duas abordagens das quais você precisará se atentar:
            </p>

            <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="bg-indigo-50/40 border border-indigo-100 rounded-2xl p-5 shadow-sm">
                    <h4 className="font-serif font-bold text-lg text-magic-900 mb-2 flex items-center gap-2">
                        1. Feitiços do Grimório
                    </h4>
                    <p className="text-sm text-gray-655 font-sans leading-relaxed mb-3">São as magias que já constam no seu grimório. A estrutura delas já foi lapidada e o seu cérebro está condicionado a executá-las com fluidez cirúrgica.
                    </p>
                    <p className="text-xs text-indigo-950 font-sans bg-indigo-100/60 p-2.5 rounded-lg border border-indigo-200/50">
                        <strong>A Regra:</strong><br></br>Elas custam exatamente o valor base estipulado pela soma de suas Runas. A execução é limpa, rápida e extremamente eficiente.
                    </p>
                </div>

                <div className="bg-amber-50/30 border border-amber-100 rounded-2xl p-5 shadow-sm">
                    <h4 className="font-serif font-bold text-lg text-amber-900 mb-2 flex items-center gap-2">
                        2. Conjuração Improvisada
                    </h4>
                    <p className="text-sm text-gray-655 font-sans leading-relaxed mb-3">Você não terá a resposta perfeita para todas as situações. Se o momento exigir, o aluno pode "montar" um feitiço situacional na hora, unindo Runas conhecidas para criar um efeito volátil.
                    </p>
                    <p className="text-xs text-amber-950 font-sans bg-amber-100/60 p-2.5 rounded-lg border border-amber-200/50">
                        <strong>A Regra:</strong><br></br>Uma Conjuração Improvisada custa uma <strong>Ação Completa (Complexa)</strong> e <strong>+2 PM (Pontos de Mana)</strong> adicionais pela complexidade.
                    </p>
                </div>
            </div>

            <hr className="my-8 border-slate-200" />

            <h3 className="text-2xl mt-6 mb-3 flex items-center gap-2">
                <span>A Matemática da Magia: Criando um Feitiço</span>
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed font-sans">
                Seja para transcrever no seu grimório ou improvisar no meio do perigo, a construção de todo feitiço obedece a uma equação exata de três passos fundamentais. A soma de todos os passos ditará o custo total em Pontos de Mana (PM).
            </p>

            <div className="space-y-4 mb-8">
                {/* Passo 1 */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <h4 className="font-serif font-bold text-lg text-magic-900 mb-2 flex items-center gap-2">
                        <span className="bg-indigo-100 text-indigo-800 w-6 h-6 flex items-center justify-center rounded-full text-sm">1</span>
                        O Formato Místico
                    </h4>
                    <p className="text-sm text-gray-655 font-sans leading-relaxed">
                        A base do feitiço define como ele se projeta no espaço físico e o seu custo âncora.
                        Você pode escolher entre <strong>Toque/Aura (0 PM)</strong>, <strong>Projétil (1 PM)</strong>, <strong>Raio (2 PM)</strong> ou <strong>Explosão em Área (3 PM)</strong>.
                    </p>
                </div>

                {/* Passo 2 */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <h4 className="font-serif font-bold text-lg text-magic-900 mb-2 flex items-center gap-2">
                        <span className="bg-indigo-100 text-indigo-800 w-6 h-6 flex items-center justify-center rounded-full text-sm">2</span>
                        A Essência (Arcana)
                    </h4>
                    <p className="text-sm text-gray-655 font-sans leading-relaxed">
                        Aqui você insere o elemento base. Uma <em>Runa de Ataque (+1 PM)</em>, por exemplo, causará <strong>3 + 1d6 + Atributo Magia</strong>. Escolher a Essência de "Fogo" transformará esse dano matemático em dano de Fogo, possibilitando interações com o cenário.
                    </p>
                </div>

                {/* Passo 3 */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <h4 className="font-serif font-bold text-lg text-magic-900 mb-2 flex items-center gap-2">
                        <span className="bg-indigo-100 text-indigo-800 w-6 h-6 flex items-center justify-center rounded-full text-sm">3</span>
                        Runas de Condição e Modificadores
                    </h4>
                    <p className="text-sm text-gray-655 font-sans leading-relaxed">
                        A etapa de customização final. Você pode gastar PM extra para adicionar Runas de Condição (ex: aplicar Queimadura por +2 PM), ou escalar poder bruto gastando múltiplos de <strong>+3 PM para adicionar +1d6 extra de dano</strong> e +1 na Dificuldade (DT) do alvo resistir.
                        <br/><br/>
                        <strong>Importante:</strong> Você não pode aplicar efeitos arbitrariamente. Para que você possa atrelar um Modificador ou uma Runa de Condição ao seu feitiço, você precisa <strong>conhecer (ter transcrito ou estudado)</strong> a runa correspondente no seu grimório ou nas suas anotações de estudo.
                    </p>
                </div>
            </div>

            <hr className="my-8 border-slate-200" />

            <h3 className="text-2xl mt-6 mb-3 flex items-center gap-2">
                <span>A Aquisição de Conhecimento: Os Graus Rúnicos</span>
            </h3>
            <p className="mb-6 text-gray-700 leading-relaxed font-sans">Um aluno não é onipotente. Você não inicia o jogo conhecendo todas as Runas e variações matemáticas do sistema. O domínio das Arcanas exige pesquisa, frequentar aulas e, frequentemente, quebrar as regras da instituição. As Runas são categorizadas em três graus de complexidade e raridade.
            </p>

            {/* Transaction Downtime rule block */}
            <div className="bg-amber-50/45 border-l-4 border-amber-500 p-4 rounded-r-xl mt-6">
                <span className="font-serif font-bold text-amber-900 block mb-1 text-base">A Regra de Transcrição </span>
                <p className="text-sm text-gray-700 leading-relaxed font-sans">Ler sobre uma Runa não significa dominá-la imediatamente. Para transformar uma Runa recém-descoberta em um Feitiço Consolidado no seu grimório, o aluno precisa dedicar as fases de <strong>Tempo Livre </strong>. O jogador rolará testes de <em>Estudo/Magia</em>e gastará recursos materiais (como tintas condutoras arcanas e pergaminhos virgens) para tentar "fechar a equação" e adicionar o novo feitiço em segurança à sua ficha de personagem.
                </p>
            </div>
        </section>
    );
}
