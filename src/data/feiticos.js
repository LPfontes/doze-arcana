// Master data for Spells (Feitiços Prontos) categorized by Arcana/Element
// Every spell has a base PM cost, dynamic modifiers, and specific upgrades (aprimoramentos).

export const FEITICOS_BY_ARCANA = {
    fogo: [
        {
            id: 'chama_agnes',
            name: "Chama de Agnes",
            grau: "Grau I",
            cost: 2,
            type: "Dano / Combate",
            desc: "Uma chama arcana e intensa, faça um ataque mágico contra o alvo em um acerto ele sofre dano de fogo igual ao maior d6 do ataque + Magia.",
            upgrades: [
                { cost: 1, desc: "Transforma em um ataque à curta distância." },
                { cost: 2, desc: "O alvo pega fogo: no próximo turno dele, sofre 3 de dano de fogo e faz um salvamento de Físico Destreza. Sucesso encerra o efeito; fracasso mantém." },
                { cost: 2, desc: "O ataque causa +1d6 de dano bônus." }
            ]
        },
        {
            id: 'combustao_caelestus',
            name: "Combustão de Caelestus",
            grau: "Grau II",
            cost: 3,
            type: "Controle / Área",
            desc: "O alvo faz um salvamento de Físico Agilidade (DT 8). Se falhar, fica Marcado por 1 Rodada. Se sofrer qualquer dano enquanto marcado, explode causando 6 de dano de fogo a ele e a inimigos adjacentes.",
            upgrades: [
                { cost: 2, desc: "Aumenta o dano da explosão para 10 de fogo." },
                { cost: 2, desc: "Aplica a condição Queimadura (3 de dano/turno) em todos os alvos atingidos." }
            ]
        },
        {
            id: 'labareda_dancante',
            name: "Labareda Dançante",
            grau: "Grau I",
            cost: 2,
            type: "Dano / Combate",
            desc: "Você cria e controla uma esfera de fogo flutuante. Como uma Ação Padrão, você realiza um ataque mágico contra um alvo a alcance Curto. Em caso de acerto, causa dano de fogo igual ao Maior d6 + Magia.",
            upgrades: [
                { cost: 2, desc: "Você pode usar uma Ação de Movimento no seu turno para mover a esfera até 4 espaços; se ela passar pelo espaço de um oponente, ele deve passar em um salvamento de Físico Vigor ou sofrer 3 de dano de fogo (limite de 1 vez por rodada)." },
                { cost: 2, desc: "O ataque mágico causa +1d6 de dano de fogo bônus." }
            ]
        },
        {
            id: 'calor_fenix',
            name: "Calor da Fênix",
            grau: "Grau II",
            cost: 3,
            type: "Defesa / Elemental",
            desc: "Você é envolto por asas espirituais de fogo que duram até o final da cena. Você recebe Resistência a Fogo (RD 4 contra dano de fogo) e todo dano físico ou mágico causado por seus ataques ou magias pode ser convertido em dano de fogo.",
            upgrades: [
                { cost: 2, desc: "O manto térmico protege aliados adjacentes, concedendo-lhes Resistência a Fogo (RD 2)." },
                { cost: 2, desc: "Sempre que sofrer um ataque corpo a corpo, as chamas retaliam causando 3 de dano de fogo ao atacante." }
            ]
        }
    ],
    agua: [
        {
            id: 'lanca_agnes',
            name: "Lança de Agnes",
            grau: "Grau I",
            cost: 3,
            type: "Combate Híbrido",
            desc: "Conjura uma lança de gelo mágico. Corpo a corpo: alcance 2, dano igual ao maior d6 do ataque + Físico (cortante) em um acerto. À Distância: arremesso médio, ataque mágico, dano de gelo igual ao maior d6 do ataque + Magia.",
            upgrades: [
                { cost: 2, desc: "No arremesso (distância), o ataque causa +1d6 de dano de gelo bônus." }
            ]
        },
        {
            id: 'nevoeiro_vapor',
            name: "Nevoeiro de Vapor",
            grau: "Grau I",
            cost: 2,
            type: "Controle / Área",
            desc: "Cria uma nuvem de vapor 3x3 em alcance curto. Bloqueia linha de visão. Alvos internos ficam Cegos.",
            upgrades: [
                { cost: 2, desc: "A nuvem aplica Hipotermia (alvo perde 1 Ação Padrão no próximo turno; salvamento Físico Vigor) para quem iniciar o turno nela." }
            ]
        },
        {
            id: 'globo_oceano',
            name: "Globo do Oceano",
            grau: "Grau I",
            cost: 3,
            type: "Defesa",
            desc: "Um globo protetor de água salgada envolve seu corpo até o fim da cena. Ele fornece Cobertura Leve e Resistência a Gelo (RD 2). Se você estiver submerso nele, sofre metade do dano de ataques físicos cortantes e de impacto, mas precisa prender a respiração (a menos que possa respirar sob a água).",
            upgrades: [
                { cost: 2, desc: "A água se congela parcialmente em espinhos afiados. Sempre que for atingido por um ataque corpo a corpo, o atacante sofre 3 de dano de gelo." }
            ]
        },
        {
            id: 'chuva_alento',
            name: "Chuva de Alento",
            grau: "Grau II",
            cost: 3,
            type: "Suporte / Área",
            desc: "Você evoca uma névoa chuvosa e restauradora em uma Área Média (5x5). Aliados que terminarem seus turnos dentro da área recuperam 2 PV e reduzem a duração de qualquer condição de lentidão ou congelamento pela metade. A chuva dura 3 rodadas.",
            upgrades: [
                { cost: 2, desc: "A névoa se torna densa e quente, bloqueando a linha de visão de criaturas fora da área e fornecendo camuflagem total para quem estiver dentro." }
            ]
        }
    ],
    terra: [
        {
            id: 'barreira_pedra',
            name: "Barreira de Pedra",
            grau: "Grau I",
            cost: 3,
            type: "Defesa / Utilidade",
            desc: "Ergue uma parede de rocha em um espaço adjacente. Fornece Cobertura Total e possui 10 PV.",
            upgrades: [
                { cost: 2, desc: "A parede ganha +10 PV e passa a causar 3 de dano contundente a qualquer inimigo adjacente no início do turno dele." }
            ]
        },
        {
            id: 'tremor_tera',
            name: "Tremor de Terra",
            grau: "Grau II",
            cost: 3,
            type: "Controle / Área",
            desc: "Provoca um abalo no solo em uma área pequena (3x3). Alvos fazem salvamento de Físico Agilidade ou ficam Caídos e Impedidos até o fim do próximo turno.",
            upgrades: [
                { cost: 2, desc: "A área afetada vira terreno difícil permanente até o fim do combate." }
            ]
        },
        {
            id: 'moldar_terra_gaztle',
            name: "Moldar Terra de Gaztle",
            grau: "Grau II",
            cost: 4,
            type: "Controle / Utilidade",
            desc: "Você consegue modelar a terra ao seu redor (1 Ação Complexa). Moldar: você consegue criar e moldar uma área pequena de terra, pode criar plataformas, escadas, pilares etc. Mover: você consegue mover uma área pequena de terra ou rocha até 4 espaços; alvos nessa área devem fazer um teste de Físico Destreza ou ficam caídos. Destruir: você destrói uma área pequena de terra ou rocha, podendo criar buracos de até 3 metros; alvos nela devem fazer teste de Físico Destreza ou caem no buraco sofrendo 1d6 de dano de concussão.",
            upgrades: []
        },
        {
            id: 'pele_rocha',
            name: "Pele de Rocha",
            grau: "Grau II",
            cost: 4,
            type: "Defesa",
            desc: "Uma camada de rocha reveste sua pele (1 Ação Padrão). Você recebe +2 de Defesa e 4 de Proteção.",
            upgrades: [
                { cost: 3, desc: "O bônus de Defesa se torna +3." }
            ]
        },
        {
            id: 'casca_arborea',
            name: "Casca Arbórea",
            grau: "Grau I",
            cost: 3,
            type: "Defesa / Suporte",
            desc: "O conjurador transmuta as vestes ou pele de uma criatura voluntária em cascas de madeira rígidas. O alvo recebe +2 de Defesa e +2 de Proteção (PR) até o final da cena. Só pode ser lançada em ambientes naturais ou com vegetação adjacente.",
            upgrades: [
                { cost: 2, desc: "O bônus de Defesa aumenta para +3 e o alvo recebe +1 de Redução de Dano (RD) física natural." },
                { cost: 2, desc: "A vegetação se adapta às cores do ambiente, concedendo Vantagem (+1d4) em testes de Furtividade." }
            ]
        },
        {
            id: 'muralha_espinhos',
            name: "Muralha de Espinhos",
            grau: "Grau II",
            cost: 4,
            type: "Controle / Área",
            desc: "Você ergue vinhas espessas e pontiagudas do solo em uma Área Pequena (3x3). A área é considerada terreno difícil. Qualquer inimigo que entrar ou iniciar seu turno na área sofre 4 de dano físico de corte e deve passar em um teste de Físico Vigor ou fica Envenenado (sofre 2 de dano de Vida corrompida por rodada).",
            upgrades: [
                { cost: 2, desc: "Inimigos que falharem no salvamento também ficam Impedidos (movimento reduzido a 0) por 1 rodada devido às amarras." }
            ]
        }
    ],
    vento: [
        {
            id: 'vento_lamur',
            name: "Controle de Vento de Lamur",
            grau: "Grau I",
            cost: 3,
            type: "Controle / Versátil",
            desc: "Escolha um efeito ao conjurar: Lufada (alvo faz salvamento Físico Vigor ou sofre 6 dano cortante e é empurrado 4 espaços; sucesso = 3 dano), Barreira (vórtice ao redor: adjacentes sofrem 3 dano cortante e você ganha Cobertura Leve) ou Projétil (ataque mágico, dano de impacto igual ao maior d6 do ataque + Magia e 1 Sangramento).",
            upgrades: [
                { cost: 2, desc: "Lufada em cone de 4 unidades (+2 PM = 4u, +4 PM = 8u, +6 PM = 12u, máx 3 vezes)." }
            ]
        },
        {
            id: 'lamina_vacuo',
            name: "Lâmina de Vácuo",
            grau: "Grau I",
            cost: 2,
            type: "Dano / Combate",
            desc: "Você projeta uma lâmina invisível de vento altamente comprimido. Realize um ataque mágico. Em caso de acerto, o alvo sofre dano de vento igual ao Maior d6 + Magia. Se você obtiver um Acerto Crítico (6 e 6), o alvo sofre a condição Sangramento.",
            upgrades: [
                { cost: 2, desc: "A lâmina ignora barreiras comuns e Cobertura Leve." },
                { cost: 2, desc: "Se o ataque acertar, o alvo é empurrado 3 espaços para trás." }
            ]
        },
        {
            id: 'tempestade_dispersora',
            name: "Tempestade Dispersora",
            grau: "Grau II",
            cost: 3,
            type: "Controle / Área",
            desc: "Ventos circulares violentos cercam a área (esfera de 5 espaços de raio). Projéteis físicos ou mágicos que atravessarem a área sofrem 1 Desvantagem (-1d4) em rolagens de ataque. Inimigos na área devem passar em um teste de Físico Vigor ou são empurrados para fora de seus limites.",
            upgrades: [
                { cost: 2, desc: "A velocidade do vento impulsiona os aliados, concedendo-lhes Vantagem (+1d4) em testes de Iniciativa e +2 espaços de deslocamento." }
            ]
        }
    ],
    luz: [
        {
            id: 'escudo_agnes',
            name: "Escudo de Agnes",
            grau: "Grau I",
            cost: 4,
            type: "Defesa",
            desc: "Você recebe +2 de Defesa até o início do seu próximo turno.",
            upgrades: [
                { cost: 2, desc: "Ao receber um ataque, emite um clarão. O atacante faz salvamento de Físico Vigor ou fica Cego por 1 rodada." }
            ]
        },
        {
            id: 'clarao_solar',
            name: "Clarão Solar",
            grau: "Grau II",
            cost: 2,
            type: "Controle / Raio",
            desc: "Dispara um raio luminoso em linha reta que atinge até 2 alvos. Alvos fazem salvamento de Físico Vigor ou ficam Cegos por 1 rodada.",
            upgrades: [
                { cost: 2, desc: "Deixa um rastro de luz que concede Vantagem (+1d4) nos ataques de aliados contra quem estiver na linha da magia por 1 rodada." }
            ]
        },
        {
            id: 'flecha_luminosa',
            name: "Flecha Luminosa",
            grau: "Grau I",
            cost: 2,
            type: "Dano / Controle",
            desc: "Um dardo de luz sólida e perfurante é disparado. Faça um ataque mágico. Em caso de acerto, o alvo sofre dano de luz igual ao Maior d6 + Magia e fica Ofuscado por 1 rodada (sofre 1 Desvantagem (-1d4) em testes físicos de Precisão e ataque).",
            upgrades: [
                { cost: 2, desc: "O alvo deve fazer um salvamento de Físico Vigor; em caso de falha, fica Cego por 1 rodada." },
                { cost: 2, desc: "A flecha energiza o local. O próximo aliado que causar dano a este alvo recebe +4 de Proteção (PR) temporária." }
            ]
        },
        {
            id: 'julgamento_solar',
            name: "Julgamento Solar",
            grau: "Grau III",
            cost: 5,
            type: "Dano / Área",
            desc: "Uma coluna de luz solar purificadora incide sobre uma Área Média. Todos os inimigos na área sofrem 8 de dano de luz direto (que ignora Proteção/PR) e ficam Cegos por 1 rodada. Um salvamento de Físico Vigor reduz o dano pela metade e anula a cegueira.",
            upgrades: [
                { cost: 2, desc: "A luz dissolve ilusões e sombras, dissipando instantaneamente quaisquer efeitos mágicos de Escuridão ativos na área de Grau I ou II." }
            ]
        }
    ],
    escuridao: [
        {
            id: 'garras_umbra',
            name: "Garras da Umbra",
            grau: "Grau I",
            cost: 3,
            type: "Controle",
            desc: "Garras de sombra emergem do solo e prendem o alvo. Ele faz um salvamento de Físico Destreza ou fica Imobilizado por 1 rodada.",
            upgrades: [
                { cost: 2, desc: "Causa dano de frio igual ao maior d6 do ataque + Magia e o alvo ganha Desvantagem (-1d4) em testes físicos de força." }
            ]
        },
        {
            id: 'manto_oculto',
            name: "Manto do Oculto",
            grau: "Grau II",
            cost: 3,
            type: "Suporte / Buff",
            desc: "O conjurador ganha Invisibilidade até o final de seu próximo turno. O estado não é quebrado por desferir ataques ou lançar feitiços.",
            upgrades: [
                { cost: 2, desc: "Aumenta a duração do efeito em +1 rodada." }
            ]
        },
        {
            id: 'drenar_vigor',
            name: "Drenar Vigor",
            grau: "Grau I",
            cost: 3,
            type: "Dano / Cura",
            desc: "Você toca a sombra do inimigo para drenar sua energia vital. Realize um ataque mágico ao toque. Em um acerto, causa dano de escuridão igual ao Maior d6 + Magia. Você ou um aliado a alcance curto recupera PV igual à metade do dano causado.",
            upgrades: [
                { cost: 2, desc: "O alvo fica Fraco (sofre 1 Desvantagem (-1d4) em testes de Físico Força e Físico Vigor) por 1 rodada." }
            ]
        },
        {
            id: 'aura_sombria',
            name: "Aura Sombria",
            grau: "Grau II",
            cost: 3,
            type: "Controle / Área",
            desc: "Uma névoa escura e sussurrante emana de você em uma Área Pequena (3x3) que o acompanha. Inimigos dentro da área sofrem 1 Desvantagem (-1d4) em testes de Percepção e rolagens de ataque físico ou mágico.",
            upgrades: [
                { cost: 2, desc: "O frio da noite gela os ossos. Inimigos que iniciarem seus turnos dentro da área sofrem 3 de dano de frio." },
                { cost: 2, desc: "O sussurro das sombras atinge a mente. Inimigos na área devem passar em um salvamento de Mental Vontade ou ficam Abalados por 1 rodada." }
            ]
        }
    ],
    vida: [
        {
            id: 'cura_vital',
            name: "Cura Vital",
            grau: "Grau I",
            cost: 2,
            type: "Cura / Suporte",
            desc: "Cura 1d6 Pontos de Vida em um alvo a alcance curto.",
            upgrades: [
                { cost: 2, desc: "Aumenta a cura em +1d6 PV." },
                { cost: 1, desc: "Limpa instantaneamente todas as condições de Sangramento e Veneno do alvo." }
            ]
        },
        {
            id: 'sifao_seiva',
            name: "Sifão de Seiva",
            grau: "Grau II",
            cost: 3,
            type: "Combate / Cura",
            desc: "Ataque mágico ao toque, causando dano igual ao maior d6 do ataque + Magia. Metade do dano causado é revertido em cura para o conjurador ou um aliado adjacente.",
            upgrades: [
                { cost: 2, desc: "Causa +1d6 de dano bônus e a cura se torna igual a 100% do dano causado." }
            ]
        },
        {
            id: 'controle_plantas_mir',
            name: "Controle de Plantas de Mir",
            grau: "Grau II",
            cost: 4,
            type: "Controle",
            desc: "Você consegue controlar as plantas ao seu redor (1 Ação Padrão), fazendo-as crescer, prender ou chicotear inimigos.",
            upgrades: []
        },
        {
            id: 'flor_germinacao',
            name: "Flor da Germinação",
            grau: "Grau I",
            cost: 2,
            type: "Cura / Suporte",
            desc: "Você planta uma magissemente etérea de cura no peito de um aliado. No início de cada um dos próximos 3 turnos dele, o alvo recupera 1d4 PV de forma passiva.",
            upgrades: [
                { cost: 2, desc: "No momento em que a magia é conjurada, limpa as condições Envenenado ou Sangramento do alvo." },
                { cost: 2, desc: "Aumenta a cura por turno em +1d4 PV." }
            ]
        },
        {
            id: 'brisa_purificadora',
            name: "Brisa Purificadora",
            grau: "Grau II",
            cost: 3,
            type: "Suporte / Área",
            desc: "Você emana uma lufada de vento restaurador que purifica a atmosfera. Elimina todo tipo de fumaça, névoa tóxica, poeira ou venenos de área. Aliados na área recebem Vantagem (+1d4) em salvamentos contra venenos ou doenças por 1 rodada.",
            upgrades: [
                { cost: 2, desc: "O frescor acalma o corpo, suprimindo temporariamente os efeitos negativos de qualquer veneno ou doença nos alvos até o final da cena." }
            ]
        }
    ],
    vazio: [
        {
            id: 'privacao_existencial',
            name: "Privação Existencial",
            grau: "Grau I",
            cost: 3,
            type: "Controle",
            desc: "O alvo faz salvamento de Mental Vontade. Em caso de fracasso, fica Cego e Surdo por 1 rodada.",
            upgrades: [
                { cost: 2, desc: "O alvo também fica Silenciado e impedido de conjurar magias." }
            ]
        },
        {
            id: 'singularidade_devoradora',
            name: "Singularidade Devoradora",
            grau: "Grau III",
            cost: 4,
            type: "Controle / Área",
            desc: "Cria uma área pequena (3x3). Qualquer ataque físico à distância ou projétil mágico que passe pela área é sugado e anulado.",
            upgrades: [
                { cost: 2, desc: "Inimigos que entrarem ou iniciarem o turno na área sofrem 3 de dano de força (ignora PR)." }
            ]
        },
        {
            id: 'dissipar_mana',
            name: "Dissipar Mana",
            grau: "Grau I",
            cost: 3,
            type: "Anulação / Suporte",
            desc: "Você desfaz as correntes energéticas que alimentam um feitiço. Escolha uma criatura ou objeto; se estiver sob efeito de um feitiço de Grau I ou II com duração 'Cena', esse efeito é imediatamente encerrado.",
            upgrades: [
                { cost: 2, desc: "Pode ser lançada como uma Reação para anular um feitiço inimigo no momento de sua conjuração (exige teste resistido de Magia Controle contra a Magia do conjurador adversário)." }
            ]
        },
        {
            id: 'anomalia_existencial',
            name: "Anomalia Existencial",
            grau: "Grau II",
            cost: 4,
            type: "Controle / Combate",
            desc: "Você distorce a essência física ou elemental do alvo. Escolha um tipo de dano contra o qual o alvo seja Imune ou Resistente. Até o final da cena, o alvo perde essa imunidade/resistência, passando a sofrer dano normal daquele tipo.",
            upgrades: [
                { cost: 2, desc: "O alvo torna-se Vulnerável (sofre +3 de dano adicional) àquele tipo de dano por 1 rodada." }
            ]
        }
    ],
    vinculo: [
        {
            id: 'elo_karmico',
            name: "Elo Kármico",
            grau: "Grau I",
            cost: 2,
            type: "Suporte / Tático",
            desc: "Cria um elo de conexão entre duas criaturas por 1 rodada. Permite sentir a localização e o estado emocional delas.",
            upgrades: [
                { cost: 2, desc: "Qualquer dano sofrido por uma das criaturas causa metade desse valor como dano de força (ignora PR) na outra." }
            ]
        },
        {
            id: 'corrente_submissao',
            name: "Corrente de Submissão",
            grau: "Grau II",
            cost: 3,
            type: "Controle",
            desc: "Prende a alma do alvo a um ponto físico. Ele faz um salvamento de Físico Destreza ou fica acorrentado. Se afastar-se mais de 3 metros, é puxado, perde a ação e sofre 6 de dano.",
            upgrades: [
                { cost: 2, desc: "O alvo fica Imobilizado (movimento 0) e não pode se deslocar." }
            ]
        },
        {
            id: 'sonho',
            name: "Sonho",
            grau: "Grau II",
            cost: 3,
            type: "Utilidade / Mental",
            desc: "Você entra nos sonhos de uma criatura (1 Ação Complexa/Transe). Uma vez lá, pode conversar com ela até que ela acorde. Se o alvo não estiver dormindo quando você lançar a magia, você pode permanecer em transe até que ele adormeça. Durante o transe, você fica indefeso e sem consciência dos arredores. Você pode sair do transe quando quiser, mas a magia termina.",
            upgrades: []
        },
        {
            id: 'elo_ressonancia',
            name: "Elo de Ressonância",
            grau: "Grau I",
            cost: 2,
            type: "Suporte / Tático",
            desc: "Você conecta a essência vital de duas criaturas voluntárias (ou uma voluntária e um oponente que falhe em um salvamento de Mental Vontade) até o final da cena. Sempre que uma delas sofrer dano, la outra sofre metade daquele valor como dano de força (ignora PR e RD).",
            upgrades: [
                { cost: 2, desc: "A ligação é harmoniosa. Se uma das criaturas receber cura de PV, a outra recupera metade do valor curado." }
            ]
        },
        {
            id: 'chamado_lamina',
            name: "Chamado da Lâmina",
            grau: "Grau I",
            cost: 2,
            type: "Defesa / Utilidade",
            desc: "Você vincula sua alma a uma arma que esteja empunhando. Você recebe +4 de bônus contra manobras inimigas de Desarmar ou Quebrar a arma. Caso a arma seja arremessada ou tirada de você involuntariamente, você pode invocá-la de volta à sua mão instantaneamente como uma Ação Livre, desde que esteja a alcance Curto ou Médio.",
            upgrades: [
                { cost: 2, desc: "O alcance de retorno aumenta para Longo. A arma se torna considerada mágica e recebe +1 nas rolagens de dano." }
            ]
        }
    ],
    isolamento: [
        {
            id: 'quarentena_arcana',
            name: "Quarentena Arcana",
            grau: "Grau I",
            cost: 3,
            type: "Controle",
            desc: "O alvo faz um salvamento de Mental Vontade. Se falhar, fica Isolado: não pode receber curas, buffs, auras ou efeitos benéficos de aliados por 1 rodada.",
            upgrades: [
                { cost: 2, desc: "Aumenta a duração do isolamento para 2 rodadas." }
            ]
        },
        {
            id: 'redoma_vacuo',
            name: "Redoma do Vácuo",
            grau: "Grau II",
            cost: 6,
            type: "Defesa / Área",
            desc: "Ergue uma redoma de vácuo em área pequena. Impede ataques e projéteis físicos ou mágicos de passar em ambas as direções.",
            upgrades: [
                { cost: 2, desc: "Aliados dentro da redoma regeneram 1 Ponto de Mana (PM) no início de seus turnos." }
            ]
        },
        {
            id: 'instante_estoico',
            name: "Instante Estoico",
            grau: "Grau I",
            cost: 4,
            type: "Defesa / Reação",
            desc: "Gatilho: Ao sofrer dano de um ataque físico ou mágico. Você enrijece sua barreira pessoal instantaneamente, recebendo Redução de Dano (RD) 6 contra o golpe que engatilhou a magia.",
            upgrades: [
                { cost: 2, desc: "O valor da Redução de Dano (RD) aumenta para 12 contra o ataque." },
                { cost: 2, desc: "A energia absorvida é canalizada. Seu próximo ataque físico ou feitiço ofensivo conjurado até o fim do seu próximo turno causa +1d6 de dano de força adicional." }
            ]
        }
    ],
    ordem: [
        {
            id: 'axioma_duelo',
            name: "Axioma do Duelo",
            grau: "Grau I",
            cost: 2,
            type: "Controle / Combate",
            desc: "Marca o alvo com laws severas. Se ele desferir ataques ou magias que não tenham você como alvo, sofre Desvantagem no acerto e 3 de dano mental.",
            upgrades: [
                { cost: 2, desc: "O alvo é banido de usar ou receber qualquer Vantagem (+1d4) de qualquer fonte." }
            ]
        },
        {
            id: 'gravidade_singular',
            name: "Gravidade Singular",
            grau: "Grau III",
            cost: 3,
            type: "Controle",
            desc: "O alvo faz um salvamento de Físico Vigor. Em caso de falha, é Derrubado, perde a capacidade de voar/saltar e cada espaço de movimento custa o dobro.",
            upgrades: [
                { cost: 2, desc: "O alvo fica Imobilizado (movimento reduzido a 0)." }
            ]
        },
        {
            id: 'selar_mana',
            name: "Selar Mana",
            grau: "Grau III",
            cost: 5,
            type: "Controle / Anulação",
            desc: "Você restringe as correntes de mana do alvo (1 Ação Complexa). Ele deve passar em um salvamento de Mental Vontade ou fica Silenciado magicamente e impedido de gastar PM por 1 rodada.",
            upgrades: []
        },
        {
            id: 'foco_absoluto',
            name: "Foco Absoluto",
            grau: "Grau I",
            cost: 2,
            type: "Suporte / Utilidade",
            desc: "Você submete suas correntes de mana a uma lógica matemática exata. No próximo teste de ataque físico ou mágico que realizar nesta rodada (Ação Livre), você rola 3d6 em vez de 2d6 e escolhe as duas rolagens mais altas.",
            upgrades: [
                { cost: 2, desc: "Altera o tempo de execução para Ação Padrão e a duração para 1 rodada. O bônus se aplica a todas as suas rolagens do turno." }
            ]
        },
        {
            id: 'seta_geometrica',
            name: "Seta Geométrica",
            grau: "Grau I",
            cost: 3,
            type: "Dano / Combate",
            desc: "Você projeta dardos de pura geometria de luz que viajam em trajetórias retas exatas. Eles acertam o alvo automaticamente (não exige teste de ataque). O feitiço causa 4 de dano de força direto (ignora PR e RD).",
            upgrades: [
                { cost: 1, desc: "Cria um dardo adicional, causando +4 de dano de força. Você pode dividir as setas entre alvos diferentes que consiga ver (máximo 3 dardos)." },
                { cost: 2, desc: "Caso o mesmo inimigo seja atingido por 2 ou mais setas, a precisão matemática o prende, deixando-o Impedido por 1 rodada." }
            ]
        }
    ],
    caos: [
        {
            id: 'cascata_estocastica',
            name: "Cascata Estocástica",
            grau: "Grau I",
            cost: 3,
            type: "Dano / Caótico",
            desc: "Ataque mágico que causa dano de caos igual ao maior d6 do ataque + Magia. Qualquer 6 natural rolado no d6 de ataque explode, concedendo +1d6 de dano adicional.",
            upgrades: [
                { cost: 2, desc: "Instabilidade: sempre que o alvo tentar usar PM, rola 1d6; em um número ímpar, os recursos são gastos e a magia implode (falha)." }
            ]
        },
        {
            id: 'cara_coroa',
            name: "Cara ou Coroa",
            grau: "Grau III",
            cost: 3,
            type: "Controle",
            desc: "Alvo faz salvamento de Magia Controle. Se falhar, rola uma moeda no início de cada ação: coroa perde a ação por travamento mental.",
            upgrades: [
                { cost: 2, desc: "Alvo também sofre 3 de dano mental sempre que falhar na moeda." }
            ]
        },
        {
            id: 'relampago_liz',
            name: "Relâmpago de Liz",
            grau: "Grau II",
            cost: 4,
            type: "Dano / Combate",
            desc: "Você conjura um relâmpago que salta de um alvo a outro (1 Ação Padrão). Escolha um inimigo; ele deve fazer um teste de Físico Destreza. Em um fracasso sofre 2d4 + Magia de dano de eletricidade/caos. Alvos hostis a até 3 espaços sofrem metade do dano.",
            upgrades: []
        },
        {
            id: 'bofetada_acaso',
            name: "Bofetada do Acaso",
            grau: "Grau I",
            cost: 3,
            type: "Controle / Caótico",
            desc: "Uma manifestação de pura energia caótica atinge a face do alvo. Faça um teste de Magia + Controle contra a Vontade do oponente. Em caso de sucesso, role 1d6 na tabela de inconstância para determinar o efeito: 1=Atordoado, 2=Lento e Abalado, 3=1d6 de dano de caos e Caído, 4=Teleporte 3 espaços em direção aleatória, 5=Mana implode (perde 8 PM), 6=1 Desvantagem (-1d4).",
            upgrades: [
                { cost: 2, desc: "O conjurador rola 2d6 na tabela e escolhe qual dos dois resultados quer aplicar ao alvo." }
            ]
        },
        {
            id: 'instabilidade_dadivosa',
            name: "Instabilidade Dadivosa",
            grau: "Grau I",
            cost: 3,
            type: "Suporte / Caótico",
            desc: "Você conecta seu fluxo de mana às correntes da imprevisibilidade até o final da cena. No início de cada um dos seus turnos, role 1d6. Em um resultado 5 ou 6, você recebe +2 PM temporários (só para aprimoramentos e expiram no fim da cena). Em um resultado 1, você perde 2 PM da sua reserva.",
            upgrades: [
                { cost: 2, desc: "A probabilidade de ganho aumenta. Você recebe +3 PM temporários em rolagens de 4, 5 ou 6 no d6 de início de turno." }
            ]
        }
    ]
};
