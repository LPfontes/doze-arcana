// Master data for Runes categorized by Degree (Grau)
export const RUNES_BY_GRAU = {
    grau1: {
        title: 'Grau I: Runas Fundamentais',
        badge: 'Comum',
        badgeClass: 'bg-green-50/80 text-green-700 border-green-200/50',
        nature: 'Runas Elementais puras e comuns (Fogo, Água, Terra, Vento), formatos básicos (Raio, Esfera) e alvos únicos.',
        acquisition: 'O aluno as aprende naturalmente assistindo às aulas regulares da grade curricular, lendo a apostila oficial da academia ou praticando feitiços simples no pátio da Forja.',
        baseRunes: [
            { id: 'fogo', name: 'Queimadura', cost: '2 PM', type: 'Debuff', test: 'Físico Agilidade', succ: 'sofre apenas 3 de dano de fogo imediato', desc: 'As chamas grudam no alvo. No início dos próximos 2 turnos dele, ele sofre 6 de dano direto (ignora PR).' },
            { id: 'agua', name: 'Hipotermia', cost: '2 PM', type: 'Debuff', test: 'Físico Vigor', time: '1 Rodada', succ: 'sofre 1 Desvantagem (-1d6) no próximo turno.', desc: 'Frio nos ossos. O inimigo perde 1 de suas Ações Padrões no seu próximo turno (recebendo apenas 1 Ação de Movimento e 1 Ação Padrão).' },
            { id: 'terra', name: 'Tremor', cost: '2 PM', type: 'Condição', test: 'Físico Agilidade', succ: 'movimento reduzido pela metade até o seu proximo turno.', desc: 'Pedras e raízes restringem o alvo. Ele fica Impedido até o seu proximo turno.' },
            { id: 'vento', name: 'Lufada', cost: '2 PM', type: 'Movimento', test: 'Físico Agilidade', succ: 'Fica Derrubado.', desc: 'Uma lufada empurra o alvo em até 4 Espaços em qualquer direção. Sofre 3 de dano extra se colidir com obstáculos/inimigos.' }
        ],
        modifiers: [
            { id: 'ataque', name: 'Runa de Ataque', cost: '+1 PM', desc: 'Define a magia como ofensiva, canalizando energia para causar dano direto (Base: 3 + 1d6 + seu atributo de Magia).' },
            { id: 'toque', name: 'Toque (Alcance)', cost: '0 PM', desc: 'Alcance Toque ou Pessoal.' },
            { id: 'unico_alvo', name: 'Alvo Único (Alvo)', cost: '0 PM', desc: 'Atinge uma criatura ou ponto específico dentro do alcance.' },
            { id: 'sem_area', name: 'Alvo Único (Área)', cost: '0 PM', desc: 'A magia afeta apenas o alvo primário selecionado, sem dispersão de área.' }
        ],
        customRunes: [
            {
                element: ' Fogo',
                colorClass: 'from-orange-500/10 to-orange-600/5 border-orange-200 text-orange-900 bg-orange-50/20',
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
                colorClass: 'from-blue-500/10 to-blue-600/5 border-blue-200 text-blue-900 bg-blue-50/20',
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
                element: 'Terra',
                colorClass: 'from-yellow-500/10 to-yellow-600/5 border-yellow-200 text-yellow-900 bg-yellow-50/15',
                runes: [
                    { name: 'Fissura', cost: '+2 PM', type: 'Área de Efeito', time: '1 Rodada', desc: ' A área afetada vira terreno perigoso. Entrar ou começar o turno na área aplica automaticamente 1 Ponto de Sangramento.' },
                    { name: 'Ancoragem', cost: '+2 PM', type: 'Debuff', test: 'Físico Destreza', time: '1 Rodada', desc: ' Falha: Imobilizado e ganha a condição "Ancorado" (imune a empurrões, puxões ou arremessos forçados de qualquer origem).' },
                    { name: 'Barricada', cost: '+3 PM', type: 'Área de Efeito', time: 'Contínua', desc: 'Ergue uma parede de rocha em um Espaço adjacente ao conjurador. Cria Cobertura Total e possui 10 Pontos de Vida (PV).' },
                    { name: 'Petrificação', cost: '+4 PM', type: 'Debuff', test: 'Físico Vigor', time: 'Contínua', desc: ' Falha: Qualquer ação do alvo que custe uma Ação Padrão ou de Movimento consome 1 ação adicional do mesmo tipo (ex: realizar Ação Padrão consome ambas as ações padrões). O alvo realiza um teste no início de cada turno para encerrar o efeito.' },
                    { name: 'Restauração', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Repara pequenas fraturas, rachaduras ou rasgos em objetos inanimados (como chaves quebradas, cerâmicas trincadas ou elos de correntes partidos).' },
                    { name: 'Construção', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Cria estruturas de terra temporárias (30 minutos), como rampas, degraus ou pequenas barreiras, com até 1 metro de altura e 1 metro de espessura.' },
                    { name: 'Deslocar', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Move um objeto inanimado de até 50kg por até 10 metros.' }
                ]
            },
            {
                element: ' Vento',
                colorClass: 'from-cyan-500/10 to-cyan-600/5 border-cyan-200 text-cyan-900 bg-cyan-50/20',
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
                colorClass: 'from-green-500/10 to-green-600/5 border-green-200 text-green-900 bg-green-50/20',
                runes: [
                    { name: 'Curar', cost: '+2 PM', type: 'Utilidade', time: 'Imediato', desc: 'Cura 1d6 PV em um alvo em alcance curto.' },
                    { name: 'Avaliar', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Avalia um alvo ao toque, revelando seu estado físico e mental básicos.(PV, PM, condição atual, etc)' }
                ]
            },
            {
                element: 'Luz',
                colorClass: 'from-yellow-500/10 to-yellow-600/5 border-yellow-200 text-yellow-900 bg-yellow-50/15',
                runes: [
                    { name: 'Brilho', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Cria um bola de luz que voce pode controlar.' },
                    { name: 'Iluminar', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Ilumina uma área de até 12 metros ao redor do conjurador.' },
                    { name: 'Formar', cost: '+1 PM', type: 'Utilidade', time: 'Imediato', desc: 'Voce molda a luz a vontade, criando formas e cores basicas.' }
                ]
            },
            {
                element: 'Vinculo',
                colorClass: 'from-yellow-500/10 to-yellow-600/5 border-yellow-200 text-indigo-900 bg-yellow-50/15',
                runes: [
                    { name: 'Conectar', cost: '+2 PM', type: 'Utilidade', time: 'Imediato', desc: 'Voce cria um vinculo com uma criatura em alcance curto. Voce pode sentir a localização da criatura e seu estado emocional. A conexão dura por 1 hora.' }
                ]
            },
            {
                element: 'Isolamento',
                colorClass: 'from-yellow-500/10 to-yellow-600/5 border-yellow-200 text-zinc-900 bg-yellow-50/15',
                runes: [
                    { name: 'Quarto', cost: '+2 PM', type: 'Utilidade', time: 'Imediato', desc: 'Voce cria uma area de 3x3 metros ao seu redor onde onde o som é abafado e as pessoas ao redor nao escutam nada de dentro da area. A área dura por 1 hora.' }
                ]
            },
            {
                element: 'Escuridão',
                colorClass: 'from-yellow-500/10 to-yellow-600/5 border-yellow-200 text-slate-900 bg-yellow-50/15',
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
                colorClass: 'from-amber-500/10 to-amber-600/5 border-amber-200 text-amber-900 bg-amber-50/15',
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
                    { name: 'Transição Umbral', cost: '+4 PM', type: 'Movimento', time: 'Imediato', desc: ' No instante em que o feitiço atinge o alvo, o conjurador dissolve-se in névoa negra e teletransporta-se para um quadrado adjacente a ele.' }
                ]
            },
            {
                element: ' Vida',
                colorClass: 'from-emerald-500/10 to-emerald-600/5 border-emerald-200 text-emerald-900 bg-emerald-50/20',
                runes: [
                    { name: 'Esporos Revitalizantes', cost: '+2 PM', type: 'Buff', time: 'Imediato', desc: ' Libera esporos curativos. Aliados adjacentes ao alvo recuperam (4 + seu atributo de Magia) Pontos de Vida e limpam instantaneamente todos os seus Sangramentos.' },
                    { name: 'Parasita de Mana', cost: '+3 PM', type: 'Debuff', time: '1 Rodada', desc: ' Fixa uma trepadeira parasita no alvo. Se ele gastar qualquer PM no próximo turno, sofre 6 de dano de espinhos(ignora PR) e você recupera 2 PM.' },
                    { name: 'Distrofia', cost: '+2 PM', type: 'Debuff', test: 'Fisico (Vigor)', time: '2 Rodadas', desc: ' Falha: O organismo do inimigo entra em colapso temporário, aplicando imediatamente a condição Enfraquecido.' },
                    { name: 'Florescer Cadavérico', cost: '+4 PM', type: 'Área de Efeito', time: 'Gatilho de Morte', desc: ' Se o alvo morrer nesta rodada, seu corpo floresce em uma Lótus de Seiva. Aliados que passarem por ali curam 4 PV.' }
                ]
            },
            {
                element: ' Vínculo',
                colorClass: 'from-indigo-500/10 to-indigo-600/5 border-indigo-200 text-indigo-900 bg-indigo-50/20',
                runes: [
                    { name: 'Ressonância de Dor', cost: '+3 PM', type: 'Condição', time: '1 Rodada', desc: ' Vincula a alma do alvo primário a um alvo secundário. Qualquer dano causado ao primário causa metade desse valor em Dano de Força (ignora PR) no secundário.' },
                    { name: 'Corrente de Submissão', cost: '+2 PM', type: 'Debuff', test: 'Fisico (Destreza)', time: 'Contínuo', desc: ' Falha: Fica Acorrentado a um ponto fixo do grid. Se tentar se afastar mais de 3m, é puxado de volta, perde a ação e sofre 6 de dano.' },
                    { name: 'Transposição Kármica', cost: '+2 PM', type: 'Movimento', time: '1 Rodada', desc: ' Estabelece elo. Um aliado em linha de visão pode gastar uma Reação para trocar de coordenada instantaneamente com o inimigo marcado.' },
                    { name: 'Eco de Debilidade', cost: '+2 PM', type: 'Efeito', time: '1 Rodada', desc: ' Caso você ou um aliado aplique uma Condição prejudicial ao alvo, a mesma condição exige um teste de resistência imediato em outro inimigo.' }
                ]
            },
            {
                element: ' Isolamento',
                colorClass: 'from-zinc-500/10 to-zinc-600/5 border-zinc-200 text-zinc-900 bg-zinc-50/50',
                runes: [
                    { name: 'Quarentena', cost: '+3 PM', type: 'Debuff', test: 'Mental (Vontade)', time: '1 Rodada', desc: ' Falha: Alvo fica Isolado. Não pode receber curas, buffs e auras benéficas.' },
                    { name: 'Redoma Arcana', cost: '+4 PM', type: 'Efeito', time: '1 Rodada', desc: ' Constrói uma parede impenetrável de vácuo rígido. Impede qualquer ataque ou projétil de passar nas duas direções.' },
                    { name: 'Supressão de Aura', cost: '+2 PM', type: 'Debuff', time: '1 Rodada', desc: ' Silencia os arredores do alvo. Desliga instantaneamente todas as suas habilidades passivas, auras ativas e efeitos contínuos emanados.' },
                    { name: 'Fricção Espacial', cost: '+4 PM', type: 'Área de Efeito', time: '1 Rodada', desc: ' Os Espaços adjacentes ao alvo tornam-se densos. Cada Espaço de movimento dentro da área custa o dobro (2 Espaços de deslocamento). Movimentos que iniciam fora da área e adentram terminam imediatamente. Aliados e inimigos são impactados igualmente.' },
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
            { id: 'acelerada', name: 'Conjuração Acelerada', cost: '+3 PM', desc: 'Comprime o tempo verbal de tecedura. Reduz o custo de conjuração de uma Ação Padrão para uma Ação de Movimento.' },
            { id: 'ricochete', name: 'Ricochete', cost: '+2 PM', desc: 'Se a magia falhar contra o alvo principal, ricocheteia contra um novo alvo a até 6 Espaços do original, infligindo metade do dano.' }
        ],
        customRunes: [
            {
                element: ' Ordem',
                colorClass: 'from-blue-600/10 to-blue-700/5 border-blue-300 text-blue-900 bg-blue-50/20',
                runes: [
                    { name: 'Gravidade Singular', cost: '+2 PM', type: 'Debuff', test: 'Fisico (Vigor)', time: '1 Rodada', desc: ' Falha: O alvo é derrubado, perde a capacidade de voar/saltar e cada único Espaço de movimento custa o dobro (2 Espaços de deslocamento).' },
                    { name: 'Axioma do Duelo', cost: '+2 PM', type: 'Condição', time: '1 Rodada', desc: ' Marca o alvo sobre leis estritas. Se ele proferir ataques ou magias que não tenham você como alvo, sofre +2 Desvantagens no acerto e 3 de dano mental.' },
                    { name: 'Inércia Punitiva', cost: '+3 PM', type: 'Efeito', time: 'Até ser Destruída', desc: ' Tranca o alvo em coordenadas matemáticas. Se ele se mover 1m, sofre 6 de dano de força e seu movimento é cortado. Pode gastar 1 Ação Complexa (ou 2 Ações Padrões) para romper.' },
                    { name: 'Padronização Estrita', cost: '+4 PM', type: 'Debuff', test: 'Mental (Vontade)', time: '1 Rodada', desc: ' Falha: O alvo é banido de usar ou receber qualquer Vantagem (+1d6). Todo dado de dano que ele rolar será computado com o valor mínimo possível (ex: 1d6 vira 1).' }
                ]
            },
            {
                element: ' Caos',
                colorClass: 'from-purple-500/10 to-purple-600/5 border-purple-200 text-purple-900 bg-purple-50/20',
                runes: [
                    { name: 'Cascata Estocástica', cost: '+3 PM', type: 'Buff', time: 'Imediato', desc: ' Qualquer dado de dano do feitiço que rolar o valor máximo explode, concedendo +1 rolagem de dado idêntico. Esse efeito é só se aplica ao dado base da magia. Não se aplica em danos bônus.' },
                    { name: 'Cara ou Coroa', cost: '+3 PM', type: 'Condição', test: 'Magia (Controle)', time: '1 Rodada', desc: ' Falha: Rola uma moeda no início de cada ação. Cara: Ação normal. Coroa: Perde a ação correspondente do seu turno e o cérebro entra em travamento.' },
                    { name: 'Loop de Redirecionamento', cost: '+2 PM', type: 'Efeito', time: '1 Rodada', desc: ' Cria uma dobra probabilística. Se o alvo falhar em um teste de ataque contra você ou aliados, o projétil atinge automaticamente um aliado dele adjacente.' },
                    { name: 'Sobrecarga de Exceção', cost: '+4 PM', type: 'Debuff', time: '1 Rodada', desc: ' Sempre que o alvo tentar usar uma habilidade que consuma PM, rola 1d6. Em um número ímpar, os recursos são gastos e a magia simplesmente implode, ela falha.' }
                ]
            },
            {
                element: ' Vazio',
                colorClass: 'from-violet-500/10 to-violet-600/5 border-violet-200 text-violet-900 bg-violet-50/15',
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
