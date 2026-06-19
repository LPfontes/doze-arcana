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
            name: "Tremor de Tera",
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
            cost: 4,
            type: "Defesa / Área",
            desc: "Ergue uma redoma de vácuo em área pequena. Impede ataques e projéteis físicos ou mágicos de passar em ambas as direções.",
            upgrades: [
                { cost: 2, desc: "Aliados dentro da redoma regeneram 1 Ponto de Mana (PM) no início de seus turnos." }
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
            desc: "Marca o alvo com leis severas. Se ele desferir ataques ou magias que não tenham você como alvo, sofre Desvantagem no acerto e 3 de dano mental.",
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
        }
    ]
};
