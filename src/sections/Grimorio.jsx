import React, { useState } from 'react';

// Master data for Runes categorized by Degree (Grau)
const RUNES_BY_GRAU = {
    grau1: {
        title: 'Grau I: Runas Fundamentais',
        badge: 'Comum',
        badgeClass: 'bg-green-50/80 text-green-700 border-green-200/50',
        nature: 'Runas Elementais puras e comuns (Fogo, Água, Terra, Vento), formatos básicos (Raio, Esfera) e alvos únicos.',
        acquisition: 'O aluno as aprende naturalmente assistindo às aulas regulares da grade curricular, lendo a apostila oficial da academia ou praticando feitiços simples no pátio da Forja.',
        baseRunes: [
            { id: 'fogo', name: 'Queimadura', cost: '2 PM', type: 'Debuff', test: 'Físico Agilidade', succ: 'sofre apenas 3 de dano de fogo imediato', desc: 'As chamas grudam no alvo. No início dos próximos 2 turnos dele, ele sofre 6 de dano direto (ignora PR).' },
            { id: 'agua', name: 'Hipotermia', cost: '2 PM', type: 'Debuff', test: 'Físico Vigor', time: '1 Rodada', succ: 'sofre 1 Desvantagem (-1d6) no próximo turno.', desc: 'Frio nos ossos. O limite de ações do inimigo cai de 3 PA para 2 PA até o seu proximo turno.' },
            { id: 'terra', name: 'Tremor', cost: '2 PM', type: 'Condição', test: 'Físico Agilidade', succ: 'movimento reduzido pela metade até o seu proximo turno.', desc: 'Pedras e raízes restringem o alvo. Ele fica Impedido até o seu proximo turno.' },
            { id: 'vento', name: 'Lufada', cost: '2 PM', type: 'Movimento', test: 'Físico Agilidade', succ: 'Fica Derrubado.', desc: 'Uma lufada empurra o alvo em até 4 Espaços em qualquer direção. Sofre 3 de dano extra se colidir com obstáculos/inimigos.' }
        ],
        modifiers: [
            { id: 'toque', name: 'Toque (Alcance)', cost: '0 PM', desc: 'Alcance Toque ou Pessoal.' },
            { id: 'unico_alvo', name: 'Alvo Único (Alvo)', cost: '0 PM', desc: 'Atinge uma criatura ou ponto específico dentro do alcance.' },
            { id: 'sem_area', name: 'Alvo Único (Área)', cost: '0 PM', desc: 'A magia afeta apenas o alvo primário selecionado, sem dispersão de área.' }
        ],
        customRunes: [
            {
                element: ' Fogo',
                colorClass: 'from-orange-500/10 to-orange-600/5 border-orange-200 text-orange-955 bg-orange-50/20',
                runes: [
                    { name: 'Derretimento', cost: '+3 PM', type: 'Debuff', test: 'Físico Vigor', desc: 'Falha: perde 3 Pontos de Proteção (PR) 1 Rodada.' },
                    { name: 'Brasas', cost: '+2 PM', type: 'Área de Efeito', time: '1 Rodada', desc: ' A área afetada vira terreno perigoso. Qualquer um que entrar ou começar o turno no espaço sofre 3 de dano de fogo imediato.' },
                    { name: 'Cinzas', cost: '+2 PM', type: 'Área de Efeito', time: '1 Rodada', desc: ' Bloqueia linha de visão (Camuflagem). Inimigos que respiram na área devem passar em um Teste de Vigor ou recebem a condição Desorientado.' },
                    { name: 'Combustão', cost: '+2 PM', type: 'Condição', time: '1 Rodada', desc: ' Alvo fica "Marcado". Se sofrer qualquer dano enquanto marcado, explode: ele e inimigos adjacentes sofrem 6 de dano de fogo extra, consumindo a marca.' },
                    { name: 'Fusão', cost: '1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Gera calor extremo localizado para fundir metais, soldar fendas ou derreter ligas. Pode ser usado para unir duas superfícies metálicas ou inutilizar mecanismos simples de fechaduras de metal.' },
                    { name: 'Ignição', cost: '1 PM', type: 'Utilidade', time: 'Imediato', desc: 'voce gera uma pequena faisca ou chama que pode acender objetos inflamaveis como tochas, lampioes, fogueiras ou pavios.' }
                ]
            },
            {
                element: ' Água',
                colorClass: 'from-blue-500/10 to-blue-600/5 border-blue-200 text-blue-955 bg-blue-50/20',
                runes: [
                    { name: 'Nevoeiro', cost: '+2 PM', type: 'Área de Efeito', time: '1 Rodada', desc: ' Nuvem de vapor (3x3). Bloqueia totalmente a visão. Alvos internos ficam Cegos. Ataques de fora para dentro sofrem 2 de Desvantagem.' },
                    { name: 'Congelamento', cost: '+3 PM', type: 'Debuff', test: 'Físico Vigor', time: '1 Rodada', desc: ' Falha: A Proteção (PR) do alvo cai para 0 apenas contra o próximo ataque físico que ele receber.' },
                    { name: 'Correnteza', cost: '+2 PM', type: 'Movimento', time: 'Imediato', desc: ' Após a conjuração do feitiço, o conjurador desliza até 2 Espaços livremente pelo mapa, sem provocar ataques de Reação.' },
                    { name: 'Afogamento', cost: '+4 PM', type: 'Debuff', test: 'Físico Destreza', time: 'Contínuo', desc: ' Falha: Alvo fica Silenciado. Deve gastar todo seu turno para quebrar a bolha d\'água, caso contrário sofre 6 de dano contundente no fim do turno.' },
                    { name: 'Condensação', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Condensa a umidade do ar para criar até 5 litros de água pura e potável em um recipiente ou fluxo contínuo.' },
                    { name: 'Pressão', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Cria alta pressão em um pequeno ponto, usado para estourar objetos frágeis, desatarraxar tampas ou facilitar a entrada de água em sistemas hídricos.' },
                    { name: 'Evaporação', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Evapora até 5 litros de água de uma superfície, objeto ou área delimitada.' }
                ]
            },
            {
                element: '🪨 Terra',
                colorClass: 'from-yellow-500/10 to-yellow-600/5 border-yellow-250 text-yellow-955 bg-yellow-50/15',
                runes: [
                    { name: 'Fissura', cost: '+2 PM', type: 'Área de Efeito', time: '1 Rodada', desc: ' A área afetada vira terreno perigoso. Entrar ou começar o turno na área aplica automaticamente 1 Ponto de Sangramento.' },
                    { name: 'Ancoragem', cost: '+2 PM', type: 'Debuff', test: 'Físico Destreza', time: '1 Rodada', desc: ' Falha: Imobilizado e ganha a condição "Ancorado" (imune a empurrões, puxões ou arremessos forçados de qualquer origem).' },
                    { name: 'Barricada', cost: '+3 PM', type: 'Área de Efeito', time: 'Contínua', desc: 'Ergue uma parede de rocha em um Espaço adjacente ao conjurador. Cria Cobertura Total e possui 10 Pontos de Vida (PV).' },
                    { name: 'Petrificação', cost: '+4 PM', type: 'Debuff', test: 'Físico Vigor', time: 'Contínua', desc: ' Falha: Qualquer ação do alvo que custe PA passa a custar +1 PA adicional. O alvo realiza um teste no início de cada turno para encerrar o efeito.' },
                    { name: 'Restauração', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Repara pequenas fraturas, rachaduras ou rasgos em objetos inanimados (como chaves quebradas, cerâmicas trincadas ou elos de correntes partidos).' },
                    { name: 'Construção', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Cria estruturas de terra temporárias (30 minutos), como rampas, degraus ou pequenas barreiras, com até 1 metro de altura e 1 metro de espessura.' },
                    { name: 'Deslocar', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Move um objeto inanimado de até 50kg por até 10 metros.' }
                ]
            },
            {
                element: ' Vento',
                colorClass: 'from-cyan-500/10 to-cyan-600/5 border-cyan-200 text-cyan-955 bg-cyan-50/20',
                runes: [
                    { name: 'Vórtice', cost: '+2 PM', type: 'Área de Efeito', time: 'Imediato', desc: ' Puxa todos os alvos na área em até 3 Espaços em linha reta na direção do conjurador ou do centro da explosão.' },
                    { name: 'Deflexão', cost: '+2 PM', type: 'Buff', time: '1 Rodada', desc: ' Cria uma cúpula de vento. Ataques à distância direcionados a qualquer criatura que esteja dentro dela sofrem 1 Desvantagem (-1d6).' },
                    { name: 'Suspensão', cost: '+2 PM', type: 'Debuff', test: 'Físico Vigor', time: 'Imediato', desc: ' Falha: Arremessado para cima e flutua. No início do seu próximo turno, cai recebendo 3 de dano de queda contundente (ignora PR) e fica Caído.' },
                    { name: 'Cisalhamento', cost: '+3 PM', type: 'Efeito', test: 'Físico Vigor', time: 'Imediato', desc: ' Falha: Aplica automaticamente 1 Ponto de Sangramento junto com o dano base da magia.' },
                    { name: 'Levitação', cost: '+1 PM', type: 'Utilidade', time: 'Concentração', desc: 'Ergue e move lentamente pequenos objetos inanimados de até 15kg pelo ar a uma distância de até 6 Espaços. Pode ser usado para acionar alavancas, destrancar trincos visíveis ou resgatar itens fora de alcance.' },
                    { name: 'Ciclone', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Gera uma rajada forte de vento que remove objetos leves, como folhas, panfletos ou poeira, espalhando-os por até 12 Espaços em linha reta.' },
                    { name: 'Corte', cost: '+1 PM', type: 'Efeito', test: 'Físico Destreza', time: 'Imediato', desc: 'Sopro afiado que causa 1 ponto de dano cortante a um alvo em alcance curto. Não requer munição e é ideal para cortar cordas finas, fitas ou papéis.' }
                ]
            },
            {
                element: 'Vida',
                colorClass: 'from-green-500/10 to-green-600/5 border-green-250 text-green-955 bg-green-50/20',
                runes: [
                    { name: 'Curar', cost: '+2 PM', type: 'Utilidade', time: 'Imediato', desc: 'Cura 1d6 PV em um alvo em alcance curto.' },
                    { name: 'Avaliar', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Avalia um alvo ao toque, revelando seu estado físico e mental básicos.(PV, PM, condição atual, etc)' }

                ]
            },
            {
                element: 'Luz',
                colorClass: 'from-yellow-500/10 to-yellow-600/5 border-yellow-250 text-yellow-955 bg-yellow-50/15',
                runes: [
                    { name: 'Brilho', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Cria um bola de luz que voce pode controlar.' },
                    { name: 'Iluminar', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Ilumina uma área de até 12 metros ao redor do conjurador.' },
                    { name: 'Formar', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Voce molda a luz a vontade, criando formas e cores basicas.' }
                ]
            },
            {
                element: 'Vinculo',
                colorClass: 'from-yellow-500/10 to-yellow-600/5 border-yellow-250 text-yellow-955 bg-yellow-50/15',
                runes: [
                    { name: 'Conectar', cost: '+2 PM', type: 'Utilidade', time: 'Imediato', desc: 'Voce cria um vinculo com uma criatura em alcance curto. Voce pode sentir a localização da criatura e seu estado emocional. A conexão dura por 1 hora.' }


                ]
            },
            {
                element: 'Isolamento',
                colorClass: 'from-yellow-500/10 to-yellow-600/5 border-yellow-250 text-yellow-955 bg-yellow-50/15',
                runes: [
                    { name: 'Quarto', cost: '+2 PM', type: 'Utilidade', time: 'Imediato', desc: 'Voce cria uma area de 3x3 metros ao seu redor onde onde o som é abafado e as pessoas ao redor nao escutam nada de dentro da area. A área dura por 1 hora.' }


                ]
            },
            {
                element: 'Escuridão',
                colorClass: 'from-yellow-500/10 to-yellow-600/5 border-yellow-250 text-yellow-955 bg-yellow-50/15',
                runes: [
                    { name: 'Moldar', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Voce molda as sombras a vontade criando formas com elas. as sombras se dissipam sobre luz forte.' },
                    { name: 'Visão', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Voce ganha visão na escuridão total por 1 hora.' },
                    { name: 'Esconder', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Voce se esconde nas sombras. Uma pessoa alerta pode te procurar fazendo um teste de Mente Percepção cd 14.' }

                ]
            }

        ]
    },
    grau2: {
        title: 'Grau II: Runas Avançadas',
        badge: 'Raro',
        badgeClass: 'bg-blue-50/80 text-blue-700 border-blue-200/50',
        nature: 'Runas de utilidade tática avançada, manipulação espacial, ampliação de coordenadas matemáticas e efeitos conceituais (Luz, Vida, Vínculo, Isolamento, Escuridão).',
        acquisition: 'Exigem proatividade e esforço extra do estudante. O aluno precisará utilizar seu tempo livre estudando pilhas de livros na biblioteca restrita, realizando favores para professores ou comprando teses de veteranos.',
        baseRunes: [
            { id: 'luz', name: 'Ofuscamento', cost: '3 PM', type: 'Debuff', test: 'Físico Vigor', time: '1 Rodada', succ: 'Ataques contra ele têm +1 Vantagem até o início do próximo turno.', desc: 'Clarão queima as retinas. O alvo fica Cego até o fim do próximo turno, e ataques contra ele ganham +1 Vantagem 1 Rodada.' },
            { id: 'vida', name: 'Sifão', cost: '3 PM', type: 'Efeito', test: 'Físico Vigor', desc: 'Rouba a centelha vital. Metade de todo o dano causado aos PVs do alvo é imediatamente revertido como cura para o conjurador ou um aliado adjacente.' },
            { id: 'vinculo', name: 'Marca', cost: '3 PM', type: 'Debuff', test: 'Magia Controle', succ: 'sofre 3 de dano direto.', desc: 'Fios invisíveis de mana se prendem. Todos os ataques subsequentes contra este inimigo recebem +1 Vantagem (+1d6) e +2 de dano bônus.' },
            { id: 'isolamento', name: 'Prisão', cost: '4 PM', type: 'Debuff', test: 'Magia Controle', time: '1 Rodada', succ: 'sofre 3 de dano.', desc: 'O espaço se cristaliza como vidro. O alvo fica Imobilizado e não pode ser curado ou receber buffs/bençãos de aliados 1 Rodada.' },
            { id: 'escuridao', name: 'Terror', cost: '4 PM', type: 'Debuff', test: 'Mental Vontade', time: '1 Rodada', succ: '+1 desvantagem neste turno para qualquer ação.', desc: 'Mergulha o alvo em breu. Ele fica Cego e Surdo, recebe desvantagem em ataques e fica impedido de conjurar magias 1 Rodada.' }
        ],
        modifiers: [
            { id: 'curto', name: 'Alcance Curto', cost: '+2 PM', desc: 'Estende o alcance para até 6 Espaços. Exige esforço para projetar e sustentar a matriz mágica pelo ar.' },
            { id: 'medio', name: 'Alcance Médio', cost: '+4 PM', desc: 'Estende o alcance para até 12 Espaços. Permite que o conjurador se posicione de forma segura e estratégica.' },
            { id: 'pequena', name: 'Área Pequena', cost: '+2 PM', desc: 'Cria uma área de 3x3 Espaços, punindo alvos agrupados ou adjacentes.' },
            { id: 'media', name: 'Área Média', cost: '+4 PM', desc: 'Cria uma área de 6x6 Espaços. Altamente eficiente para controle, mas aumenta o risco de fogo amigo.' },
            { id: 'gemeo', name: 'Alvo Gêmeo', cost: '+2 PM', desc: 'A magia se bifurca. Atinja um segundo alvo dentro do alcance estipulado. Realize rolagens de acerto separadas.' },
            { id: 'seletivo', name: 'Alvo Seletivo', cost: '+2 PM', desc: 'Aliados na área da explosão iguais ou menores que seu atributo de Magia ignoram completamente o dano e efeitos nocivos.' },
            { id: 'foco', name: 'Runa de Foco', cost: '+1 PM / slot', desc: 'Máximo 2 slots. Cada slot alocado nesta runa adiciona +2 de dano bônus ao total causado pelo feitiço ou aumenta a dificuldade do teste de resistência em +2.' },
            { id: 'guiada', name: 'Magia Guiada', cost: '+2 PM', desc: 'A fórmula faz ajustes dinâmicos em pleno vôo. Rola o teste de acerto do feitiço com +1 Vantagem (+1d6).' }
        ],
        customRunes: [
            {
                element: ' Luz',
                colorClass: 'from-amber-500/10 to-amber-600/5 border-amber-200 text-amber-955 bg-amber-50/15',
                runes: [
                    { name: 'Revelação', cost: '+2 PM', type: 'Efeito', time: '1 Rodada', desc: 'Anula todos os benefícios de Invisibilidade e Camuflagem. O alvo brilha intensamente, sendo impossibilitado de se esconder.' },
                    { name: 'Miragem', cost: '+3 PM', type: 'Buff', time: 'Até ser Ativado', desc: ' Cria uma cópia ilusória em um quadrado adjacente. O primeiro ataque direcionado a você atinge a miragem, dissipando-a. a mirragem se move com você.' },
                    { name: 'Luz Sólida', cost: '+4 PM', type: 'Debuff', time: '1 Rodada', desc: 'Aprisiona o alvo em uma redoma geométrica sólida. Ele fica Imobilizado. Ele não pode desferir ataques corpo a corpo para fora dela. Ataques à distância contra ele tem +1 Desvantagem.' },
                    { name: 'Refração', cost: '+3 PM', type: 'Efeito', time: 'Imediato', desc: ' O feitiço rebate em superfícies rígidas (paredes, pilares), contornando Cobertura Total e ignorando bônus defensivos de terreno.' }
                ]
            },
            {
                element: ' Escuridão',
                colorClass: 'from-slate-500/10 to-slate-600/5 border-slate-200 text-slate-900 bg-slate-50/50',
                runes: [
                    { name: 'Garras da Umbra', cost: '+2 PM', type: 'Debuff', test: 'Fisico (Destreza)', time: 'Contínuo', desc: ' Falha: Imobilizado pelas sombras e sofre 1 Desvantagem (-1d6) em testes e ataques físicos. Repete teste no início do turno.' },
                    { name: 'Manto do Oculto', cost: '+3 PM', type: 'Buff', time: '1 Rodada', desc: ' O conjurador ganha Invisibilidade automática até o final de seu próximo turno. O ataque ou magia que desencadeou esta runa não quebra o manto.' },
                    { name: 'Sussurros Enlouquecedores', cost: '+4 PM', type: 'Condição', test: 'Mental (Vontade)', time: '1 Rodada', desc: ' Falha: O alvo não pode receber curas. Ao tentar atacar ou conjurar, rola 1d6: par ataca o aliado mais próximo, ímpar o inimigo.' },
                    { name: 'Transição Umbral', cost: '+4 PM', type: 'Movimento', time: 'Imediato', desc: ' No instante em que o feitiço atinge o alvo, o conjurador dissolve-se em névoa negra e teletransporta-se para um quadrado adjacente a ele.' }
                ]
            },
            {
                element: ' Vida',
                colorClass: 'from-emerald-500/10 to-emerald-600/5 border-emerald-250 text-emerald-955 bg-emerald-50/20',
                runes: [
                    { name: 'Esporos Revitalizantes', cost: '+2 PM', type: 'Buff', time: 'Imediato', desc: ' Libera esporos curativos. Aliados adjacentes ao alvo recuperam (4 + Magia) Pontos de Vida e limpam instantaneamente todos os seus Sangramentos.' },
                    { name: 'Parasita de Mana', cost: '+3 PM', type: 'Debuff', time: '1 Rodada', desc: ' Fixa uma trepadeira parasita no alvo. Se ele gastar qualquer PM no próximo turno, sofre 6 de dano de espinhos(ignora PR) e você recupera 2 PM.' },
                    { name: 'Distrofia', cost: '+2 PM', type: 'Debuff', test: 'Fisico (Vigor)', time: '2 Rodadas', desc: ' Falha: O organismo do inimigo entra em colapso temporário, aplicando imediatamente a condição Enfraquecido.' },
                    { name: 'Florescer Cadavérico', cost: '+4 PM', type: 'Área de Efeito', time: 'Gatilho de Morte', desc: ' Se o alvo morrer nesta rodada, seu corpo floresce em uma Lótus de Seiva. Aliados que passarem por ali curam 4 PV.' }
                ]
            },
            {
                element: ' Vínculo',
                colorClass: 'from-indigo-500/10 to-indigo-600/5 border-indigo-250 text-indigo-955 bg-indigo-50/20',
                runes: [
                    { name: 'Ressonância de Dor', cost: '+3 PM', type: 'Condição', time: '1 Rodada', desc: ' Vincula a alma do alvo primário a um alvo secundário. Qualquer dano causado ao primário causa metade desse valor em Dano de Força (ignora PR) no secundário.' },
                    { name: 'Corrente de Submissão', cost: '+2 PM', type: 'Debuff', test: 'Fisico (Destreza)', time: 'Contínuo', desc: ' Falha: Fica Acorrentado a um ponto fixo do grid. Se tentar se afastar mais de 3m, é puxado de volta, perde a ação e sofre 6 de dano.' },
                    { name: 'Transposição Kármica', cost: '+2 PM', type: 'Movimento', time: '1 Rodada', desc: ' Estabelece elo. Um aliado em linha de visão pode gastar uma Reação para trocar de coordenada instantaneamente com o inimigo marcado.' },
                    { name: 'Eco de Debilidade', cost: '+2 PM', type: 'Efeito', time: '1 Rodada', desc: ' Caso você ou um aliado aplique uma Condição prejudicial ao alvo, a mesma condição exige um teste de resistência imediato em outro inimigo.' }
                ]
            },
            {
                element: ' Isolamento',
                colorClass: 'from-zinc-500/10 to-zinc-600/5 border-zinc-300 text-zinc-955 bg-zinc-50/50',
                runes: [
                    { name: 'Quarentena', cost: '+3 PM', type: 'Debuff', test: 'Mental (Vontade)', time: '1 Rodada', desc: ' Falha: Alvo fica Isolado. Não pode receber curas, buffs e auras benéficas.' },
                    { name: 'Redoma Arcana', cost: '+4 PM', type: 'Efeito', time: '1 Rodada', desc: ' Constrói uma parede impenetrável de vácuo rígido. Impede qualquer ataque ou projétil de passar nas duas direções.' },
                    { name: 'Supressão de Aura', cost: '+2 PM', type: 'Debuff', time: '1 Rodada', desc: ' Silencia os arredores do alvo. Desliga instantaneamente todas as suas habilidades passivas, auras ativas e efeitos contínuos emanados.' },
                    { name: 'Fricção Espacial', cost: '+4 PM', type: 'Área de Efeito', time: '1 Rodada', desc: ' Os Espaços adjacentes ao alvo tornam-se densos. Cada movimento dentro da área custa 2 PA. Movimentos que iniciam fora da área e adentram terminam imediatamente. Aliados e inimigos são impactados igualmente.' },
                    { name: 'Selamento', cost: '+2 PM', type: 'Utilidade', time: 'Até ser Desfeito', desc: 'Sela hermeticamente uma porta, baú, janela ou passagem com uma barreira arcana invisível. Exige um teste de Magia do conjurador (15) ou força física bruta excepcional (20) para ser forçada ou arrombada.' }
                ]
            }
        ]
    },
    grau3: {
        title: 'Grau III: Runas Espirituais e Obscuras',
        badge: 'Proibido',
        badgeClass: 'bg-purple-900 text-purple-100 border-purple-800',
        nature: 'Magias que dobram e rasgam a estrutura lógica, espacial e temporal da realidade. Envolve as Arcanas de alteração conceitual absoluta (Ordem, Caos, Vazio) e modificadores matemáticos extremos.',
        acquisition: 'Conhecimento altamente perigoso e selado pelas autoridades acadêmicas. Para obtê-las, o grupo precisará planejar invasões à Seção Proibida da Grande Biblioteca, decifrar grimórios de bruxos hereges derrotados ou extrair runas de monolitos ancestrais nas Ruínas da Trama.',
        baseRunes: [
            { id: 'ordem', name: 'Supressão', cost: '3 PM', type: 'Debuff', test: 'Magia Controle', desc: 'A gravidade do cosmos esmaga a iniciativa do alvo. Ele perde todas as suas Reações e seu movimento é reduzido a 0 pelos próximos 2 turnos.' },
            { id: 'caos', name: 'Desorientação Mágica', cost: '3 PM', type: 'Debuff', test: 'Magia Controle', desc: 'Provoca oscilações de probabilidade. No próximo turno do alvo, a primeira magia que conjurar custa o dobro de PM. Se não puder pagar, ela falha catastroficamente.' },
            { id: 'vazio', name: 'Exaustão', cost: '3 PM', type: 'Condição', test: 'Mental Vontade', time: '1 Rodada', desc: 'Drena a energia existencial. O inimigo contrai a condição Debilitado, reduzindo drasticamente seus atributos físicos.' }
        ],
        modifiers: [
            { id: 'longo', name: 'Alcance Longo', cost: '+6 PM', desc: 'Estende o alcance do feitiço para impressionantes 24 Espaços.' },
            { id: 'grande', name: 'Área Grande', cost: '+6 PM', desc: 'Ergue uma explosão colossal de 9x9 Espaços.' },
            { id: 'inevitavel', name: 'Inevitável', cost: '+4 PM', desc: 'A magia move-se de forma inteligente, contornando quinas, ignorando coberturas, camuflagem, fumaça ou ilusões ópticas.' },
            { id: 'chuva', name: 'Chuva de Alvos', cost: '+4 PM', desc: 'A magia fragmenta-se em projéteis teleguiados. Atinge até 3 alvos distintos no alcance, comparando um único teste de acerto.' },
            { id: 'sobrecarga', name: 'Sobrecarga', cost: '+2 PM / slot', desc: 'Máximo 2 slots para magias simples e 3 slots para magias complexas. Cada slot alocado nesta runa adiciona +1d6 de dano extra ao impacto da magia.' },
            { id: 'acelerada', name: 'Conjuração Acelerada', cost: '+3 PM', desc: 'Comprime o tempo verbal de tecedura. Reduz o custo em Pontos de Ação (PA) em 1 (mínimo 1 PA).' },
            { id: 'ricochete', name: 'Ricochete', cost: '+2 PM', desc: 'Se a magia falhar contra o alvo principal, ricocheteia contra um novo alvo a até 6 Espaços do original, infligindo metade do dano.' }
        ],
        customRunes: [
            {
                element: ' Ordem',
                colorClass: 'from-blue-600/10 to-blue-700/5 border-blue-300 text-blue-955 bg-blue-50/20',
                runes: [
                    { name: 'Gravidade Singular', cost: '+2 PM', type: 'Debuff', test: 'Fisico (Vigor)', time: '1 Rodada', desc: ' Falha: O alvo é derrubado, perde a capacidade de voar/saltar e cada único quadrado de movimento custa 2 PA.' },
                    { name: 'Axioma do Duelo', cost: '+2 PM', type: 'Condição', time: '1 Rodada', desc: ' Marca o alvo sobre leis estritas. Se ele proferir ataques ou magias que não tenham você como alvo, sofre +2 Desvantagens no acerto e 3 de dano mental.' },
                    { name: 'Inércia Punitiva', cost: '+3 PM', type: 'Efeito', time: 'Até ser Destruída', desc: ' Tranca o alvo em coordenadas matemáticas. Se ele se mover 1m, sofre 6 de dano de força e seu movimento é cortado. Pode gastar 2 PA para romper.' },
                    { name: 'Padronização Estrita', cost: '+4 PM', type: 'Debuff', test: 'Mental (Vontade)', time: '1 Rodada', desc: ' Falha: O alvo é banido de usar ou receber qualquer Vantagem (+1d6). Todo dado de dano que ele rolar será computado com o valor mínimo possível (ex: 1d6 vira 1).' }
                ]
            },
            {
                element: ' Caos',
                colorClass: 'from-purple-500/10 to-purple-600/5 border-purple-200 text-purple-955 bg-purple-50/20',
                runes: [
                    { name: 'Cascata Estocástica', cost: '+3 PM', type: 'Buff', time: 'Imediato', desc: ' Qualquer dado de dano do feitiço que rolar o valor máximo explode, concedendo +1 rolagem de dado idêntico. Esse efeito é só se aplica ao dado base da magia. Não se aplica em danos bônus.' },
                    { name: 'Cara ou Coroa', cost: '+3 PM', type: 'Condição', test: 'Magia (Controle)', time: '1 Rodada', desc: ' Falha: Rola uma moeda no início de cada ação. Cara: Ação normal. Coroa: Perde a ação (PA gasto) e o cérebro entra em travamento.' },
                    { name: 'Loop de Redirecionamento', cost: '+2 PM', type: 'Efeito', time: '1 Rodada', desc: ' Cria uma dobra probabilística. Se o alvo falhar em um teste de ataque contra você ou aliados, o projétil atinge automaticamente um aliado dele adjacente.' },
                    { name: 'Sobrecarga de Exceção', cost: '+4 PM', type: 'Debuff', time: '1 Rodada', desc: ' Sempre que o alvo tentar usar uma habilidade que consuma PM, rola 1d6. Em um número ímpar, os recursos são gastos e a magia simplesmente implode, ela falha.' }
                ]
            },
            {
                element: ' Vazio',
                colorClass: 'from-violet-500/10 to-violet-600/5 border-violet-250 text-violet-955 bg-violet-50/15',
                runes: [
                    { name: 'Privação Sensorial', cost: '+3 PM', type: 'Debuff', test: 'Mental (Vontade)', time: '1 Rodada', desc: ' Falha: Alvo fica Cego e Surdo. Ele é impossibilitado de reagir a qualquer gatilho sonoro ou visual do mapa.' },
                    { name: 'Amnésia Seletiva', cost: '+3 PM', type: 'Debuff', test: 'Mental (Vontade)', time: '2 Rodadas', desc: ' Falha: Você escolhe um talento, técnica ou feitiço que viu o alvo conjurar. O alvo esquece temporariamente como utilizá-la.' },
                    { name: 'Singularidade Devoradora', cost: '+4 PM', type: 'Área de Efeito', time: '1 Rodada', desc: ' Colapsa a gravidade em um quadrado. Qualquer ataque físico à distância ou projétil mágico que trace sua trajetória pela área é sugado e deletado.' },
                    { name: 'Fome Entrópica', cost: '+5 PM', type: 'Efeito', time: 'Fim da Cena', desc: ' O dano infligido por este feitiço reduz permanentemente a capacidade de Pontos de Vida Máximos do alvo pelo restante do combate.' }
                ]
            }
        ]
    }
};

// Helper: renderiza a descrição destacando o bloco "Sucesso:" em verde
function DescWithHighlights({ text, className = '' }) {
    if (!text) return null;
    const parts = text.split(/(Sucesso:)/);
    return (
        <span className={className}>
            {parts.map((part, i) =>
                part === 'Sucesso:' ? (
                    <strong key={i} className="inline-flex items-center gap-0.5 text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded font-bold not-italic mx-0.5">
                        Sucesso:
                    </strong>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </span>
    );
}

export default function Grimorio() {
    const [selectedGrau, setSelectedGrau] = useState('grau1');
    const [searchQuery, setSearchQuery] = useState('');

    // Filtering runes based on search query
    const getFilteredData = () => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return null;

        const results = {
            baseRunes: [],
            modifiers: [],
            customRunes: []
        };

        Object.entries(RUNES_BY_GRAU).forEach(([grauKey, data]) => {
            const gName = data.title;
            // Search base runes
            data.baseRunes.forEach(r => {
                if (
                    r.name.toLowerCase().includes(query) ||
                    r.desc.toLowerCase().includes(query) ||
                    (r.test && r.test.toLowerCase().includes(query)) ||
                    (r.type && r.type.toLowerCase().includes(query))
                ) {
                    results.baseRunes.push({ ...r, grauName: gName });
                }
            });
            // Search modifiers
            data.modifiers.forEach(m => {
                if (m.name.toLowerCase().includes(query) || m.desc.toLowerCase().includes(query)) {
                    results.modifiers.push({ ...m, grauName: gName });
                }
            });
            // Search custom runes
            data.customRunes.forEach(group => {
                const matchingRunes = group.runes.filter(cr => cr.name.toLowerCase().includes(query) ||
                    cr.desc.toLowerCase().includes(query) ||
                    cr.type.toLowerCase().includes(query)
                );

                if (matchingRunes.length > 0) {
                    results.customRunes.push({
                        element: `${group.element} (${gName})`,
                        colorClass: group.colorClass,
                        runes: matchingRunes
                    });
                }
            });
        });

        return results;
    };

    const filteredResults = getFilteredData();
    const currentData = RUNES_BY_GRAU[selectedGrau];

    return (
        <section id="sec-grimorio" className="content-section">
            <h2 className="text-3xl border-b-2 border-magic-100 pb-2 mb-4">4. O Grimório e a Jornada do Conhecimento</h2>

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
                <strong>O Arsenal Inicial:</strong><br />Todo aluno do Primeiro Ano inicia sua jornada acadêmica com uma média de <strong>3 Feitiços Consolidados</strong>transcritos em seu grimório. Mecanicamente, estes feitiços compõem o seu "arsenal padrão", sendo as ferramentas primárias com as quais ele lidará durante os embates.
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
                        <strong>A Regra:</strong><br></br>Uma Conjuração Improvisada custa<strong> +2 PA (Ponto de Ação) </strong>e <strong> +2 PM (Pontos de Mana)</strong>adicionais pela complexidade.
                    </p>
                </div>
            </div>

            <hr className="my-6 border-slate-200" />

            <h3 className="text-2xl mt-6 mb-3 flex items-center gap-2">
                <span>A Aquisição de Conhecimento: Os Graus Rúnicos</span>
            </h3>
            <p className="mb-6 text-gray-700 leading-relaxed font-sans">Um aluno não é onipotente. Você não inicia o jogo conhecendo todas as Runas e variações matemáticas do sistema. O domínio das Arcanas exige pesquisa, frequentar aulas e, frequentemente, quebrar as regras da instituição. As Runas são categorizadas em três graus de complexidade e raridade.
            </p>

            {/* Modern Interactive Runic Explorer */}
            <div className="bg-slate-50/50 border border-slate-200/80 rounded-2xl p-4 md:p-6 shadow-sm mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h4 className="font-serif font-bold text-xl text-slate-800">Explorador de Runas e Graus</h4>
                        <p className="text-xs text-gray-500 mt-0.5">Consulte toda a biblioteca de Runas do sistema dividida por Graus Acadêmicos.</p>
                    </div>

                    {/* Search bar inside explorer */}
                    <div className="relative w-full md:w-72">
                        <input
                            type="text"
                            placeholder="Buscar runa ou efeito..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-sans"
                        />
                        <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-2 text-slate-400 hover:text-slate-600 text-xs font-semibold"
                            >Limpar
                            </button>
                        )}
                    </div>
                </div>

                {/* Tab Controls (Hidden when searching) */}
                {!searchQuery && (
                    <div className="flex flex-wrap gap-2 p-1 bg-slate-100 rounded-xl mb-6 border border-slate-200/40">
                        <button
                            onClick={() => setSelectedGrau('grau1')}
                            className={`flex-1 min-w-[120px] px-4 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 ${selectedGrau === 'grau1'
                                ? 'bg-white text-green-700 shadow-sm border border-slate-200/50'
                                : 'text-gray-550 hover:text-gray-800 hover:bg-white/40'
                                }`}
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>Grau I (Fundamentais)
                        </button>
                        <button
                            onClick={() => setSelectedGrau('grau2')}
                            className={`flex-1 min-w-[120px] px-4 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 ${selectedGrau === 'grau2'
                                ? 'bg-white text-blue-700 shadow-sm border border-slate-200/50'
                                : 'text-gray-550 hover:text-gray-800 hover:bg-white/40'
                                }`}
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>Grau II (Avançadas)
                        </button>
                        <button
                            onClick={() => setSelectedGrau('grau3')}
                            className={`flex-1 min-w-[120px] px-4 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 ${selectedGrau === 'grau3'
                                ? 'bg-white text-purple-700 shadow-sm border border-slate-200/50'
                                : 'text-gray-550 hover:text-gray-800 hover:bg-white/40'
                                }`}
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>Grau III (Proibidas)
                        </button>
                    </div>
                )}

                {/* Searching Results view */}
                {searchQuery ? (
                    <div>
                        <div className="mb-4">
                            <span className="text-xs text-indigo-700 font-semibold bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">Resultados da Busca para "{searchQuery}"
                            </span>
                        </div>

                        {filteredResults && (filteredResults.baseRunes.length > 0 || filteredResults.modifiers.length > 0 || filteredResults.customRunes.length > 0) ? (
                            <div className="space-y-6">
                                {/* Search base runes */}
                                {filteredResults.baseRunes.length > 0 && (
                                    <div>
                                        <h5 className="font-serif font-semibold text-sm text-slate-800 border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-1.5">
                                            <span>Runas de Efeito Base</span>
                                            <span className="text-[10px] font-sans font-normal text-slate-400">({filteredResults.baseRunes.length})</span>
                                        </h5>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                                            {filteredResults.baseRunes.map((r, idx) => (
                                                <div key={idx} className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm relative overflow-hidden group hover:border-indigo-300 transition-all">
                                                    <div className="absolute right-0 top-0 bg-slate-100 text-slate-550 text-[8px] font-bold px-2 py-0.5 rounded-bl uppercase tracking-wider">{r.grauName.split(':')[0]}</div>
                                                    <div className="flex justify-between font-serif font-bold text-sm text-slate-800 mb-1">
                                                        <span>{r.name}</span>
                                                        <span className="font-mono text-indigo-650 text-xs font-semibold">{r.cost}</span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 mb-1.5 items-center">
                                                        <span className="text-[9px] font-sans font-semibold text-indigo-600 bg-indigo-50/50 px-1.5 py-0.2 rounded border border-indigo-100/30">Tipo: {r.type}
                                                        </span>
                                                        {r.test && <span className="text-[9px] font-sans text-amber-700 font-semibold">Teste: {r.test}</span>}

                                                        {r.time && <span className="text-[9px] font-sans text-sky-700 font-semibold">Time: {r.time}</span>}
                                                    </div>
                                                    <p className="text-xs text-gray-600 leading-relaxed font-sans mt-1">{r.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Search modifiers */}
                                {filteredResults.modifiers.length > 0 && (
                                    <div>
                                        <h5 className="font-serif font-semibold text-sm text-slate-800 border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-1.5">
                                            <span>Modificadores de Conectividade</span>
                                            <span className="text-[10px] font-sans font-normal text-slate-400">({filteredResults.modifiers.length})</span>
                                        </h5>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                                            {filteredResults.modifiers.map((m, idx) => (
                                                <div key={idx} className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm relative overflow-hidden hover:border-indigo-300 transition-all">
                                                    <div className="absolute right-0 top-0 bg-slate-100 text-slate-550 text-[8px] font-bold px-2 py-0.5 rounded-bl uppercase tracking-wider">{m.grauName.split(':')[0]}</div>
                                                    <div className="flex justify-between font-semibold text-xs text-slate-800 mb-1">
                                                        <span className="font-medium text-slate-800">{m.name}</span>
                                                        <span className="font-mono text-indigo-650 font-bold">{m.cost}</span>
                                                    </div>
                                                    <p className="text-xs text-gray-655 leading-relaxed font-sans mt-1">{m.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Search custom runes */}
                                {filteredResults.customRunes.length > 0 && (
                                    <div>
                                        <h5 className="font-serif font-semibold text-sm text-slate-800 border-b border-slate-200 pb-1.5 mb-3">Runas de Efeito Customizado
                                        </h5>
                                        <div className="space-y-4">
                                            {filteredResults.customRunes.map((group, idx) => (
                                                <div key={idx} className={`border rounded-xl p-4 bg-gradient-to-br ${group.colorClass}`}>
                                                    <h6 className="font-serif font-bold text-xs uppercase tracking-wider mb-2">{group.element}</h6>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        {group.runes.map((cr, cIdx) => (
                                                            <div key={cIdx} className="bg-white/80 p-3 rounded-lg border border-slate-100 shadow-xs">
                                                                <div className="flex justify-between font-semibold text-slate-900 mb-1 text-xs">
                                                                    <span className="font-serif font-bold">{cr.name}</span>
                                                                    <span className="font-mono text-indigo-700 text-[10px]">{cr.cost}</span>
                                                                </div>
                                                                <div className="flex flex-wrap gap-1 mb-1.5">
                                                                    <span className="text-[9px] font-sans font-semibold text-indigo-600 bg-indigo-50/50 px-1.5 py-0.5 rounded border border-indigo-100/30">Efeito: {cr.type}</span>
                                                                    {cr.test && <span className="inline-flex items-center gap-0.5 bg-amber-50 text-amber-800 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-sans border border-amber-200 shadow-sm"><span className="text-amber-500">✦</span> Teste: {cr.test}</span>}
                                                                    {cr.time && <span className="inline-flex items-center gap-0.5 bg-sky-50 text-sky-700 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-sans border border-sky-200 shadow-sm"><span className="text-sky-400">⏱</span> {cr.time}</span>}
                                                                </div>
                                                                <p className="text-[11px] text-gray-655 leading-snug"><DescWithHighlights text={cr.desc} /></p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-white rounded-xl border border-slate-200/50">
                                <span className="text-3xl"></span>
                                <h5 className="font-serif font-bold text-sm text-slate-700 mt-2">Nenhuma runa encontrada</h5>
                                <p className="text-xs text-gray-400 mt-1 font-sans">Experimente buscar por outros termos como "Fogo", "Cego", "Dano" ou "Sangramento".</p>
                            </div>
                        )}
                    </div>
                ) : (
                    /* Normal Tabbed view categorized by Degrees */
                    <div className="space-y-6">
                        {/* Degree Header Details */}
                        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 h-full w-1.5 bg-indigo-600"></div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-serif font-bold text-lg text-magic-900">{currentData.title}</span>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded font-sans border uppercase tracking-wider ${currentData.badgeClass}`}>
                                    {currentData.badge}
                                </span>
                            </div>
                            <p className="text-xs text-gray-700 leading-relaxed font-sans mb-3">
                                <strong>Natureza:</strong> {currentData.nature}
                            </p>
                            <p className="text-xs text-gray-600 font-sans bg-slate-50 p-3 rounded-lg border border-slate-100 leading-relaxed">
                                <strong>Como Adquirir:</strong> {currentData.acquisition}
                            </p>
                        </div>

                        {/* 1. Runas de Efeito Base */}
                        <div>
                            <h5 className="font-serif font-semibold text-sm text-indigo-900 border-b border-indigo-100 pb-1 mb-3 flex items-center gap-1.5">
                                <span className="w-1.5 h-3 bg-indigo-600 rounded-full"></span>
                                <span>Runas de Efeito Base ({currentData.baseRunes.length})</span>
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {currentData.baseRunes.map((r, idx) => (
                                    <div key={idx} className="bg-white border border-slate-150 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200 group relative overflow-hidden">
                                        <div className="flex justify-between font-serif font-bold text-sm text-slate-800 mb-1 group-hover:text-magic-900 transition-colors">
                                            <span>{r.name}</span>
                                            <span className="font-mono text-indigo-650 bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 rounded text-[10px] font-bold">{r.cost}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5 mb-2">
                                            <span className="bg-slate-100 text-slate-600 text-[9px] font-semibold px-1.5 py-0.5 rounded uppercase tracking-wider font-sans border border-slate-200/50">Efeito Base</span>
                                            <span className="text-[9px] font-sans font-semibold text-indigo-600 bg-indigo-50/50 px-1.5 py-0.5 rounded border border-indigo-100/30">Tipo: {r.type}</span>
                                            {r.test && <span className="inline-flex items-center gap-0.5 bg-amber-50 text-amber-800 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-sans border border-amber-200 shadow-sm"><span className="text-amber-500">✦</span> Teste: {r.test}</span>}
                                            {r.time && <span className="inline-flex items-center gap-0.5 bg-sky-50 text-sky-700 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-sans border border-sky-200 shadow-sm"><span className="text-sky-400">⏱</span> {r.time}</span>}
                                        </div>
                                        <p className="text-xs text-gray-655 leading-relaxed font-sans"><DescWithHighlights text={r.desc} /></p>
                                        {r.succ && (
                                            <div className="mt-2 flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/60 rounded-lg px-2.5 py-1.5">
                                                <span className="shrink-0 font-bold text-[9px] text-emerald-700 uppercase tracking-wider bg-emerald-100 border border-emerald-300/50 px-1.5 py-0.5 rounded mt-0.5">Sucesso</span>
                                                <span className="text-[11px] text-emerald-900 leading-snug font-sans">{r.succ}</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. Modificadores de Conectividade */}
                        <div>
                            <h5 className="font-serif font-semibold text-sm text-indigo-900 border-b border-indigo-100 pb-1 mb-3 flex items-center gap-1.5">
                                <span className="w-1.5 h-3 bg-indigo-600 rounded-full"></span>
                                <span>Modificadores de Conectividade & Potência ({currentData.modifiers.length})</span>
                            </h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                                {currentData.modifiers.map((m, idx) => {
                                    let typeBadge = "Modificador";
                                    let badgeCol = "bg-slate-100 text-slate-700 border-slate-200";
                                    if (m.name.includes("Alcance")) { typeBadge = "Alcance"; badgeCol = "bg-purple-50 text-purple-700 border-purple-100"; }
                                    else if (m.name.includes("Área")) { typeBadge = "Área"; badgeCol = "bg-amber-50 text-amber-700 border-amber-100"; }
                                    else if (m.name.includes("Alvo")) { typeBadge = "Alvo"; badgeCol = "bg-sky-50 text-sky-700 border-sky-100"; }
                                    else { typeBadge = "Potência"; badgeCol = "bg-rose-50 text-rose-700 border-rose-100"; }

                                    return (
                                        <div key={idx} className="bg-white border border-slate-150 rounded-xl p-3.5 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200">
                                            <div className="flex justify-between items-start mb-1.5">
                                                <span className="font-sans font-bold text-xs text-slate-800">{m.name}</span>
                                                <span className="font-mono text-indigo-650 text-[10px] font-bold">{m.cost}</span>
                                            </div>
                                            <div className="mb-2">
                                                <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded font-sans uppercase tracking-wider border ${badgeCol}`}>
                                                    {typeBadge}
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-gray-655 leading-relaxed font-sans">{m.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 3. Runas de Efeito Customizado */}
                        <div>
                            <h5 className="font-serif font-semibold text-sm text-indigo-900 border-b border-indigo-100 pb-1 mb-3 flex items-center gap-1.5">
                                <span className="w-1.5 h-3 bg-indigo-600 rounded-full"></span>
                                <span>Runas de Efeitos Customizados por Elemento / Conceito</span>
                            </h5>
                            <div className="space-y-5">
                                {currentData.customRunes.map((group, groupIdx) => (
                                    <div key={groupIdx} className={`border rounded-2xl p-4 md:p-5 bg-gradient-to-br shadow-xs border-slate-200/60 ${group.colorClass}`}>
                                        <div className="flex items-center justify-between mb-3.5 border-b border-black/5 pb-2">
                                            <span className="font-serif font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                                                {group.element}
                                            </span>
                                            <span className="text-[8px] font-bold bg-white/70 text-slate-600 px-2 py-0.5 rounded border border-black/5 uppercase font-sans tracking-wide">
                                                {currentData.badge} - {group.runes.length} Efeitos
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                                            {group.runes.map((cr, crIdx) => (
                                                <div key={crIdx} className="bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-white/50 shadow-xs hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
                                                    <div className="flex justify-between font-semibold text-slate-900 mb-1 text-xs items-center">
                                                        <span className="font-serif text-magic-900 font-bold">{cr.name}</span>
                                                        <span className="font-mono text-indigo-700 bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 rounded text-[9px] font-bold">{cr.cost}</span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-1 mb-1.5">
                                                        <span className="text-[9px] font-sans font-semibold text-indigo-600 bg-indigo-50/50 px-1.5 py-0.5 rounded border border-indigo-100/30">Efeito: {cr.type}</span>
                                                        {cr.test && <span className="inline-flex items-center gap-0.5 bg-amber-50 text-amber-800 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-sans border border-amber-200 shadow-sm"><span className="text-amber-500">✦</span> Teste: {cr.test}</span>}
                                                        {cr.time && <span className="inline-flex items-center gap-0.5 bg-sky-50 text-sky-700 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-sans border border-sky-200 shadow-sm"><span className="text-sky-400">⏱</span> {cr.time}</span>}
                                                    </div>
                                                    <p className="text-[11px] text-gray-655 leading-relaxed font-sans mt-1"><DescWithHighlights text={cr.desc} /></p>
                                                    {cr.succ && (
                                                        <div className="mt-2 flex items-start gap-1.5 bg-emerald-50 border border-emerald-200/60 rounded-lg px-2.5 py-1.5">
                                                            <span className="shrink-0 font-bold text-[9px] text-emerald-700 uppercase tracking-wider bg-emerald-100 border border-emerald-300/50 px-1.5 py-0.5 rounded mt-0.5">Sucesso</span>
                                                            <span className="text-[11px] text-emerald-900 leading-snug font-sans">{cr.succ}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4. Runas de Utilidade */}
                        {currentData.utilityRunes && currentData.utilityRunes.length > 0 && (
                            <div>
                                <h5 className="font-serif font-semibold text-sm text-teal-900 border-b border-teal-100 pb-1 mb-3 flex items-center gap-1.5">
                                    <span className="w-1.5 h-3 bg-teal-500 rounded-full"></span>
                                    <span>Runas de Utilidade por Elemento / Conceito</span>
                                </h5>
                                <div className="space-y-4">
                                    {currentData.utilityRunes.map((group, groupIdx) => (
                                        <div key={groupIdx} className={`border rounded-2xl p-4 md:p-5 bg-gradient-to-br shadow-xs border-teal-100/60 ${group.colorClass}`}>
                                            <div className="flex items-center justify-between mb-3 border-b border-black/5 pb-2">
                                                <span className="font-serif font-bold text-sm text-slate-900 uppercase tracking-wider">{group.element}</span>
                                                <span className="text-[8px] font-bold bg-teal-50 text-teal-700 border border-teal-200/50 px-2 py-0.5 rounded uppercase font-sans tracking-wide">Utilidade &bull; {group.runes.length}</span>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                                                {group.runes.map((ur, urIdx) => (
                                                    <div key={urIdx} className="bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-white/50 shadow-xs hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
                                                        <div className="flex justify-between font-semibold text-slate-900 mb-1 text-xs items-center">
                                                            <span className="font-serif text-teal-900 font-bold">{ur.name}</span>
                                                            <span className="font-mono text-teal-700 bg-teal-50 border border-teal-100/50 px-2 py-0.5 rounded text-[9px] font-bold">{ur.cost}</span>
                                                        </div>
                                                        <div className="flex flex-wrap gap-1 mb-1.5">
                                                            <span className="text-[9px] font-sans font-semibold text-teal-600 bg-teal-50/80 px-1.5 py-0.5 rounded border border-teal-100/50">Utilidade</span>
                                                            {ur.time && <span className="inline-flex items-center gap-0.5 bg-sky-50 text-sky-700 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-sans border border-sky-200 shadow-sm"><span className="text-sky-400">&#9201;</span> {ur.time}</span>}
                                                        </div>
                                                        <p className="text-[11px] text-gray-655 leading-relaxed font-sans mt-1">{ur.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Transaction Downtime rule block */}
            <div className="bg-amber-50/45 border-l-4 border-amber-500 p-4 rounded-r-xl mt-6">
                <span className="font-serif font-bold text-amber-900 block mb-1 text-base">A Regra de Transcrição </span>
                <p className="text-sm text-gray-700 leading-relaxed font-sans">Ler sobre uma Runa não significa dominá-la imediatamente. Para transformar uma Runa recém-descoberta em um Feitiço Consolidado no seu grimório, o aluno precisa dedicar as fases de <strong>Tempo Livre </strong>. O jogador rolará testes de <em>Estudo/Magia</em>e gastará recursos materiais (como tintas condutoras arcanas e pergaminhos virgens) para tentar "fechar a equação" e adicionar o novo feitiço em segurança à sua ficha de personagem.
                </p>
            </div>
        </section>
    );
}
