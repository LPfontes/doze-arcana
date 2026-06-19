// Centralized database for the 12 Paths of the Doze Arcanas RPG system.
// Grouped under the 6 main Schools (Escolas).

const CAMINHOS_DATA = {
  guerreiro: {
    name: 'Guerreiro',
    icon: '⚔️',
    theme: 'indigo',
    bgGradient: 'from-indigo-600 to-blue-700',
    desc: 'Focado no uso de lâminas, escudos e técnicas de combate armado. A magia aqui é aplicada diretamente na postura e no equipamento.',
    subtitle: 'Caminho: Guerreiro',
    blocks: [
      {
        title: 'Posturas de Combate',
        type: 'postures',
        desc: 'Você adquire 3 posturas de combate. Custa 1 Ação Padrão para entrar ou trocar de postura:',
        items: [
          { name: 'Ofensiva', desc: 'Posiciona o pé de apoio à frente, focando no alcance. Seus ataques corpo a corpo causam +2 de dano, mas sua Defesa é reduzida em -2.' },
          { name: 'Defensiva', desc: 'Foco em proteção. Sua Defesa aumenta em +2, mas seu deslocamento (movimentação) é reduzido pela metade.' },
          { name: 'Punitiva', desc: 'Preparação para explorar as brechas do oponente. Você ganha acesso à reação Resposta, permitindo realizar um ataque contra um oponente como uma Reação.' }
        ]
      },
      {
        title: 'Habilidades',
        type: 'abilities',
        items: [
          { name: 'Interpor', details: 'Passiva', desc: 'Você ganha a reação Interpor. Ao usá-la, você entra na frente de um ataque direcionado a um aliado adjacente, sofrendo o dano no lugar dele e recebendo +1 de Redução de Dano (PR) contra esse golpe.' },
          { name: 'Espadachim', details: 'Ativação: 1 Ponto de Arcana', desc: 'Você manifesta um Dado de Espadachim que dura até o final da cena. No seu primeiro acerto corpo a corpo, o dado começa in 1d4. A cada acerto consecutivo, o dado "cresce" um passo (1d4 ➔ 1d6 ➔ 1d8 ➔ 1d10 ➔ 1d12). Você pode gastar este dado a qualquer momento para somar o valor rolado ao dano ou à rolagem de acerto de um ataque corpo a corpo. Se você errar um ataque ou consumir o dado, ele é reiniciado.' }
        ]
      },
      {
        title: 'Magias de Guerreiro',
        type: 'spells',
        items: [
          { name: 'Encantar', details: '1 Ação Padrão | 3 PM', desc: 'Você imbui uma arma com energia de uma Arcana. Até o final do seu próximo turno, a arma causa 1d4 de dano mágico extra do elemento escolhido. (Nível 2: O dano extra aumenta para 1d6).' },
          { name: 'Velocidade de Mir', details: '1 Ação Padrão | 4 PM', desc: 'Você impulsiona seu potencial físico com magia. No seu próximo turno, você recebe +1 Ação Padrão extra e +3 Espaços de movimento.' },
          { name: 'Escudo Arcano', details: '1 Ação Padrão | 3 PM', desc: 'Você gera uma barreira e recebe +2 de Redução de Dano até o seu próximo turno. (Melhoria: Por +2 PM, a duração aumenta em 1 turno). (Nível 2: Custa 4 PM e fornece +4 de Redução de Dano).' }
        ]
      },
      {
        title: 'Habilidade Suprema de Arcana',
        type: 'arcana',
        items: [
          {
            name: 'Maestria Incontestável',
            details: 'Ação Livre | 1 Ponto de Arcana',
            desc: 'Você transcende as limitações do combate básico. Até o final da cena, você pode manter duas Posturas de Combate simultaneamente.'
          }
        ]
      }
    ]
  },
  mestre_bestas: {
    name: 'Mestre de Bestas',
    icon: '🐺',
    theme: 'emerald',
    bgGradient: 'from-emerald-600 to-teal-700',
    desc: 'Focado na criação de um laço inquebrável e no combate coordenado com feras selvagens.',
    subtitle: 'Caminho: Mestre de Bestas',
    blocks: [
      {
        title: 'O Laço Animal (Nível 1)',
        type: 'beast_stats',
        desc: 'Você possui um companheiro bestial com as seguintes estatísticas base:',
        stats: {
          hp: '20 PV',
          fisico: '2',
          mental: '1',
          social: '0',
          magia: '0',
          actions: '1 Ação Padrão e 1 Ação de Movimento por turno.'
        }
      },
      {
        title: 'Habilidades',
        type: 'abilities',
        items: [
          { name: 'Coordenar Ataque', details: '1 Ação Complexa | 3 PM', desc: 'Você e sua fera atacam simultaneamente. Você realiza um ataque contra o alvo com 1 Vantagem. Se acertar, causa o dano do seu ataque somado ao dano do ataque da fera, mais 1d6 de dano bônus.' },
          { name: 'Marcar', details: '1 Ação Padrão | 4 PM', desc: 'Você estipula um alvo. Pelo resto da cena, todos os ataques seus e do seu Laço Animal contra ele recebem 1 Vantagem, e a margem de acerto crítico contra este alvo é expandida para (11/11 e 12/12). (Melhoria: Por +3 PM, você pode marcar um alvo adicional).' },
          { name: 'Rastrear', details: '1 Ação Padrão | 2 PM', desc: 'Usa a conexão sensorial com a fera para buscar rastros. Exige um teste de Magia + Controle (DT 10). No sucesso, você descobre a posição relativa, a direção tomada e a quantidade aproximada de indivíduos.' },
          { name: 'Domar', details: '1 Ação Complexa | 3 PM', desc: 'Você acalma e se conecta com um animal ou besta mágica. Por 1 dia, a criatura o vê como aliado e obedece a ordens simples que não violem sua natureza (ordens suicidas quebram o encanto imediatamente e tornam a criatura hostil).' }
        ]
      },
      {
        title: 'Habilidade Suprema de Arcana',
        type: 'arcana',
        items: [
          {
            name: 'Sincronia Primal',
            details: 'Ação Livre | 1 Ponto de Arcana',
            desc: 'Você e sua fera lutam como um único organismo perfeito. Até o final da cena, você e seu Laço Animal compartilham a mesma reserva de Pontos de Vida (soma os PVs atuais de ambos). Além disso, a fera recebe +1 Ação Padrão adicional em todos os turnos dela, e qualquer ataque desferido por vocês contra um alvo Marcado ignora completamente a Redução de Dano (RD) do inimigo.'
          }
        ]
      }
    ]
  },
  elemental: {
    name: 'Elementalista',
    icon: '🔥',
    theme: 'cyan',
    bgGradient: 'from-cyan-600 to-blue-700',
    desc: 'Focado na conjuração direta de magias destrutivas e manipulação de zonas de combate.',
    subtitle: 'Caminho: Elementalista',
    blocks: [
      {
        title: 'Magias',
        type: 'spells',
        items: [
          {
            name: 'Área Persistente',
            details: 'Vários Custos',
            desc: 'Cria uma zona instável focada em uma Arcana. Inimigos sofrem dano ao entrar ou iniciar o turno nela.',
            levels: [
              { name: 'Nível 1 (1 Ação Padrão | 2 PM)', desc: 'Área Pequena, causa 3 de dano mágico.' },
              { name: 'Nível 2 (1 Ação Padrão | 3 PM)', desc: 'Área Pequena, causa 6 de dano mágico.' },
              { name: 'Nível 3 (1 Ação Padrão | 5 PM)', desc: 'Área Média, causa 6 de dano mágico.' }
            ],
            improvements: '+1 PM torna a área Terreno Difícil (reduz movimento); +2 PM permite conjurar como Ação de Movimento.'
          },
          { name: 'Bola de Fogo', details: '1 Ação Padrão | 3 PM', desc: 'Disparo clássico. Ataque mágico contra um alvo. No acerto, causa dano de fogo igual ao maior d6 do ataque + Atributo de Magia + 2. Efeito Secundário: Todas as criaturas em uma Emanação de raio 2 a partir do alvo sofrem 2 de dano de fogo.' },
          { name: 'Flores de Liz', details: '1 Ação Padrão | 3 PM', desc: 'Um campo de lótus de gelo eclode em uma Área Pequena. Alvos na área testam Físico + Destreza. Falha: Sofrem 6 de dano de gelo e perdem 1 Ação de Movimento e 1 Ação Padrão no próximo turno. Sucesso: Sofrem apenas 3 de dano de gelo. (Melhorias: +2 PM o alvo fica Paralisado se falhar; +2 PM causa +3 de dano extra na falha).' },
          {
            name: 'Campo de Sombras',
            details: '1 Ação Padrão | Vários Custos',
            desc: 'Ergue uma area de escuridão Média obscurecida. Ataques feitos para dentro da área sofrem 2 Desvantagens (-2d6). Inimigos que entrarem ou iniciarem o turno nela testam Físico + Destreza para não serem Agarrados.',
            levels: [
              { name: 'Nível 1 (2 PM)', desc: 'Efeitos base acima.' },
              { name: 'Nível 2 (3 PM)', desc: 'Adiciona 2d4 de dano de sombra caso o inimigo falhe no teste de Destreza.' }
            ]
          }
        ]
      },
      {
        title: 'Habilidade Suprema de Arcana',
        type: 'arcana',
        items: [
          {
            name: 'Avatar da Destruição',
            details: 'Ação Livre | 1 Ponto de Arcana',
            desc: 'Você se torna a própria manifestação da fúria da natureza. Até o final da cena, todas as suas magias de dano elemental têm seu custo em PM reduzido em 2. Adicionalmente, quando você conjurar uma magia em área (como Bola de Fogo ou Área Persistente), você possui controle absoluto e escolhe quem sofre o dano e quem é ignorado, protegendo seus aliados perfeitamente.'
          }
        ]
      }
    ]
  },
  xama: {
    name: 'Xamã',
    icon: '🦅',
    theme: 'purple',
    bgGradient: 'from-purple-600 to-indigo-700',
    desc: 'Uso de totens para suporte tático e travessia incorpórea pelo plano astral.',
    subtitle: 'Caminho: Xamã',
    blocks: [
      {
        title: 'Habilidades e Totens',
        type: 'totems',
        desc: 'Você conhece 3 totens místicos e pode posicioná-los em um espaço adjacente a você ou arremessá-los até alcance Curto:',
        items: [
          { name: 'Totem do Guardião (Urso/Touro)', desc: 'Aliados adjacentes ao totem recebem Cobertura Leve e +2 de Proteção (PR).' },
          { name: 'Totem do Flagelo', desc: 'Inimigos que passarem pelo totem sofrem 1d4 de dano elemental (o elemento é escolhido por você ao posicionar).' },
          { name: 'Totem da Mãe', desc: 'Aliados adjacentes regeneram 1d4 PV no início de seus turnos.' }
        ]
      },
      {
        title: 'Magias e Rituais',
        type: 'spells',
        items: [
          { name: 'Comunhão', details: 'Ritual de 1 hora | 3 PM', desc: 'Conecta sua mente com os espíritos guardiões para conversar, pedir conselhos e buscar conhecimento esquecido.' },
          {
            name: 'Maldição',
            details: '1 Ação Padrão | 2 PM',
            desc: 'Lançada em alcance Médio. Você só pode manter 1 maldição ativa por vez (conjurar uma nova anula a anterior). Escolha um dos efeitos:',
            effects: [
              { name: 'Perseguidor', desc: 'Um espírito maldito assombra o alvo, causando 1d4 de dano mental no início do turno do inimigo. No final do turno dele, ele testa Magia + Controle para tentar banir o espírito.' },
              { name: 'Definhar', desc: 'O alvo sofre -1 em um Atributo à sua escolha. No final do turno dele, testa Magia + Controle para quebrar o efeito.' },
              { name: 'Malogro', desc: 'O alvo sofre 1 Desvantagem (-1d6) em todos os testes. No final do turno dele, testa Magia + Controle para se livrar do azar.' }
            ]
          }
        ]
      },
      {
        title: 'Habilidade Suprema de Arcana',
        type: 'arcana',
        items: [
          {
            name: 'Convergência Ancestral',
            details: 'Ação Padrão | 1 Ponto de Arcana',
            desc: 'Os espíritos ancestrais respondem ao seu chamado todos de uma vez. Você invoca os 3 Totens (Guardião, Flagelo e Mãe) instantaneamente em três espaços diferentes à sua escolha em alcance Médio, sem gastar PM. Esses totens duram até o final da cena.'
          }
        ]
      }
    ]
  },
  invocador: {
    name: 'Invocador',
    icon: '👁️',
    theme: 'indigo',
    bgGradient: 'from-indigo-700 to-purple-800',
    desc: 'Evocação de servos mágicos e avatares primordiais no campo de batalha.',
    subtitle: 'Caminho: Invocador',
    blocks: [
      {
        title: 'O Contrato',
        type: 'contract',
        desc: 'Você serve de canal sob a tutela do "Senhor dos Contratos". Você escolhe e invoca um servo de outro plano (um elemental, um demônio menor ou um feérico). Enquanto o contrato for mantido e houver fluxo de mana, a criatura é sustentada no nosso plano material e é imune à morte definitiva.'
      },
      {
        title: 'Habilidade Suprema de Arcana',
        type: 'arcana',
        items: [
          {
            name: 'Quebra do Selo (Libertação)',
            details: 'Ação Livre | 1 Ponto de Arcana',
            desc: 'Você afrouxa as correntes do contrato do seu Servo, permitindo que ele use seu verdadeiro poder cósmico. Até o final da cena, seu servo dobra seus PVs atuais e máximos, e todos os ataques que ele desferir recebem +2d4 de dano bônus. Durante essa cena, se o servo for morto, a entidade volta para seu plano de origem em uma explosão que causa 2d6 de dano mágico a todos os inimigos adjacentes a ele.'
          }
        ]
      }
    ]
  },
  bruxo: {
    name: 'Bruxo',
    icon: '🔮',
    theme: 'purple',
    bgGradient: 'from-purple-700 to-fuchsia-800',
    desc: 'Especialista em pragas, enfraquecimento e pactos de poder.',
    subtitle: 'Caminho: Bruxo',
    blocks: [
      {
        title: 'Habilidades',
        type: 'abilities',
        items: [
          { name: 'Maldições Avançadas', details: '1 Ação Padrão | 2 PM', desc: 'Compartilha a mesma lista de Maldições do Xamã (Perseguidor, Definhar, Malogro), porém o Bruxo possui um domínio superior e pode manter até 2 maldições simultaneamente em oponentes distintos (ou acumuladas). Conjurar uma terceira dissipa a primeira.' }
        ]
      },
      {
        title: 'Habilidade Suprema de Arcana',
        type: 'arcana',
        items: [
          {
            name: 'Peste Inevitável',
            details: 'Ação Padrão | 1 Ponto de Arcana',
            desc: 'O seu rancor se espalha como uma praga. Escolha uma das suas Maldições (Perseguidor, Definhar ou Malogro). Em vez de afetar um único alvo, você lança essa maldição sobre todos os inimigos presentes em uma Área Média ao seu redor. Os testes de Magia + Controle para se livrarem dela nos turnos subsequentes são feitos com 1 Desvantagem (-1d6).'
          }
        ]
      }
    ]
  },
  artifice: {
    name: 'Artífice',
    icon: '⚙️',
    theme: 'indigo',
    bgGradient: 'from-slate-700 to-indigo-800',
    desc: 'Inventor tático que aprimora permanentemente equipamentos do grupo.',
    subtitle: 'Caminho: Artífice',
    blocks: [
      {
        title: 'Habilidades',
        type: 'abilities',
        items: [
          { name: 'Projeto Especial', desc: 'Você pode trabalhar na criação de um Artefato unique em colaboração com o Narrador, que definirá a Dificuldade e o tempo necessário para o projeto.' },
          {
            name: 'Melhoria de Equipamento',
            desc: 'Durante um Descanso Longo, você pode realizar manutenção e melhorar até 2 itens do seu grupo. Os efeitos duram até o próximo descanso longo e não se acumulam:',
            effects: [
              { name: 'Afiar', desc: 'A arma passa a causar +2 de dano.' },
              { name: 'Balancear', desc: 'A arma ganha +1 na rolagem de Acerto.' },
              { name: 'Reforçar', desc: 'A armadura/escudo ganha +1 de Redução de Dano.' }
            ]
          },
          {
            name: 'Escrita Arcana',
            details: 'Ritual de 1 hora | 4 PM',
            desc: 'Imprime selos rúnicos latentes em equipamentos, válidos até o próximo descanso longo. Durante o combate, o usuário da arma/armadura pode gastar 1 PM para ativar o selo inscrito:',
            effects: [
              { name: 'Runa de Fogo (Arma)', desc: 'Ativa antes ou depois de acertar; causa +2 de dano de fogo.' },
              { name: 'Runa de Água (Defesa)', desc: 'Aumenta a Defesa em +2 até o próximo turno do usuário.' },
              { name: 'Runa de Terra (Defesa)', desc: 'Concede +2 de Redução de Dano até o próximo turno do usuário.' },
              { name: 'Runa de Ar (Defesa)', desc: 'Ao sofrer dano corpo a corpo, empurra o atacante 3 Espaços para trás imediatamente, sem provocar reações.' }
            ]
          }
        ]
      },
      {
        title: 'Habilidade Suprema de Arcana',
        type: 'arcana',
        items: [
          {
            name: 'Sobrecarga de Engenho',
            details: 'Ação de Movimento | 1 Ponto de Arcana',
            desc: 'Você força os mecanismos e runas aos seus limites. Até o final do combate, todos os benefícios de Melhoria de Equipamento (Afiar, Balancear, Reforçar) que você aplicou na sua equipe são dobrados (ex: uma arma afiada passa a dar +4 de dano em vez de +2). Além disso, ativar qualquer selo da sua Escrita Arcana passa a custar 0 PM para os seus aliados.'
          }
        ]
      }
    ]
  },
  cartomante: {
    name: 'Cartomante',
    icon: '🃏',
    theme: 'purple',
    bgGradient: 'from-purple-800 to-pink-800',
    desc: 'Manipulação pura da probabilidade mística e canalização por meio de um baralho arcano.',
    subtitle: 'Caminho: Cartomante',
    blocks: [
      {
        title: 'Baralho do Destino',
        type: 'deck',
        desc: 'Você canaliza seus poderes sacando cartas aleatórias. Seu baralho possui 12 cartas. Quando o deck acabar, é necessário um Ritual de 4 horas para recarregá-lo de mana. Sempre que usar a habilidade, role 1d12 para determinar a carta puxada:',
        rows: [
          { roll: '1 a 5', type: 'Carta de Maldição', effect: 'Ativa Malogro (desvantagens) ou Perseguidor (dano mental).' },
          { roll: '6 a 11', type: 'Carta de Combate', effect: 'Dispara um ataque mágico (toque ou distância Média) que causa 6 de dano base se acertar.' },
          {
            roll: '12',
            type: 'Arcano Maior',
            effect: 'Escolha um de quatro milagres:',
            subChoices: [
              { name: 'Carrasco', desc: 'Corta o PV atual do alvo pela metade.' },
              { name: 'Madrona', desc: 'Cura o alvo totalmente e fornece +6 de Proteção (PR).' },
              { name: 'Valete', desc: 'Invoca uma Entidade poderosa aliada para a cena.' },
              { name: 'Rainha', desc: 'Restaura 12 Pontos de Mana (PM) do alvo.' }
            ]
          }
        ]
      },
      {
        title: 'Habilidade Suprema de Arcana',
        type: 'arcana',
        items: [
          {
            name: 'As Cartas Não Mentem (O Destino Certo)',
            details: 'Ação Livre | 1 Ponto de Arcana',
            desc: 'Seu baralho se torna infinito até o final da cena. Você pode puxar 2 cartas e escolher uma (você rola 2d12 e escolhe qualquer um dos resultados).'
          }
        ]
      }
    ]
  },
  metamorfo: {
    name: 'Metamorfo',
    icon: '🧬',
    theme: 'emerald',
    bgGradient: 'from-emerald-700 to-green-800',
    desc: 'Baseia-se na autotransmutação celular imediata para ganhar traços animais.',
    subtitle: 'Caminho: Metamorfo',
    blocks: [
      {
        title: 'Habilidade',
        type: 'abilities',
        items: [
          {
            name: 'Mutação',
            details: '1 Ação Padrão | 4 PM',
            desc: 'Altera violentamente a sua biologia. Apenas 1 mutação pode ser mantida por vez:',
            effects: [
              { name: 'Alada', desc: 'Desenvolve asas. Você adquire a Ação de Movimento Alçar Voo (move-se pelo ar em sua velocidade padrão) e a Ação Padrão Planar (para permanecer suspenso no mesmo lugar sem cair). Armaduras pesadas impedem o voo.' },
              { name: 'Ofensiva', desc: 'Cresce garras, caudas perfurantes ou chifres. O primeiro ataque corpo a corpo feito no seu turno recebe 1 Vantagem e causa +1d4 de dano físico.' },
              { name: 'Defensiva', desc: 'Pele engrossa ou brotam escamas espessas. Você recebe +2 de Redução de Dano (PR) permanente enquanto mantido.' }
            ]
          }
        ]
      },
      {
        title: 'Habilidade Suprema de Arcana',
        type: 'arcana',
        items: [
          {
            name: 'A Quimera Apex',
            details: 'Ação Padrão | 1 Ponto de Arcana',
            desc: 'Seu corpo quebra o limite biológico, fundindo todas as suas evoluções. Até o final da cena, você ativa as três mutações (Alada, Ofensiva e Defensiva) simultaneamente, sem gastar nenhum PM para isso. Seu corpo se torna uma máquina de caça perfeita: enquanto estiver voando, seus ataques corpo a corpo ignoram a Cobertura Leve.'
          }
        ]
      }
    ]
  },
  clerigo: {
    name: 'Clérigo',
    icon: '🕊️',
    theme: 'emerald',
    bgGradient: 'from-emerald-600 to-teal-800',
    desc: 'Mestres da cura milagrosa, proteção de grupo e purificação física/espiritual.',
    subtitle: 'Caminho: Clérigo',
    blocks: [
      {
        title: 'Magias',
        type: 'spells',
        items: [
          { name: 'Cura', details: '1 Ação Complexa | 3 PM', desc: 'Pelo toque, você restaura 3 + 1d4 + (2x Atributo Magia) Pontos de Vida de um aliado. (Melhorias modulares: +2 PM estende a cura a um aliado adjacente ao alvo; +2 PM permite conjurar a uma distância Média; +2 PM adiciona mais 1d4 na rolagem de cura).' },
          { name: 'Bênção', details: '1 Ação Padrão | 2 PM', desc: 'Canaliza mana positiva em um aliado a alcance Curto. Ele recebe 1 Vantagem na próxima rolagem ou teste que realizar. (Melhoria: Por +2 PM, abençoa um aliado extra).' }
        ]
      },
      {
        title: 'Habilidade Suprema de Arcana',
        type: 'arcana',
        items: [
          {
            name: 'Intervenção Milagrosa',
            details: 'Reação Instantânea | 1 Ponto de Arcana',
            desc: 'Gatilho: Quando um aliado em alcance Médio tiver seus PVs reduzidos a 0. Efeito: Antes que o aliado caia, um feixe de luz arcana o atinge. Ele não cai; em vez disso, seus Pontos de Vida são totalmente restaurados para o valor máximo instantaneamente, e o aliado recebe um bônus de +2 Vantagens no seu próximo turno como resultado.'
          }
        ]
      }
    ]
  },
  ilusionista: {
    name: 'Ilusionista',
    icon: '🎭',
    theme: 'purple',
    bgGradient: 'from-indigo-800 to-purple-900',
    desc: 'Criadores de falsas realidades, iscas visuais e projeções aterrorizantes.',
    subtitle: 'Caminho: Ilusionista',
    blocks: [
      {
        title: 'Magia',
        type: 'spells',
        items: [
          {
            name: 'Ilusão',
            details: '1 Ação Padrão | 4 PM',
            desc: 'Conjura um construto áudio/visual em alcance Médio. Inimigos que tiverem linha de visão para a ilusão devem passar em um teste de Mental + Vontade ou sofrerão o efeito de engano:',
            effects: [
              { name: 'Monstruosa', desc: 'Alvos creem ver uma criatura irreal terrível. Gastarão suas ações atacando-a ou fugindo dela.' },
              { name: 'Desorientadora', desc: 'O cenário gira e distorce. Alvos sentem náuseas, perdendo a Ação de Movimento no próximo turno e sofrendo 1 Desvantagem (-1d6) em ataques à distância (físicos ou mágicos).' },
              { name: 'Distração', desc: 'Pequenos enganos constantes fadigam a mente. O alvo sofre 2 Desvantagens (-2d6) em testes físicos e rolagens de ataque.' }
            ]
          }
        ]
      },
      {
        title: 'Habilidade Suprema de Arcana',
        type: 'arcana',
        items: [
          {
            name: 'Realidade Fraturada',
            details: 'Ação Livre | 1 Ponto de Arcana',
            desc: 'Gatilho: Ao conjurar a magia "Ilusão". Efeito: A linha entre o real e o falso colapsa. Até o final da cena, a sua ilusão ganha forma física e letal. Inimigos que falharem no teste de Mental + Vontade passam a sofrer 2d4 + seu Atributo de Magia em dano psíquico/físico direto no início de seus turnos, enquanto continuarem engajados ou acreditando na Ilusão.'
          }
        ]
      }
    ]
  },
  bardo: {
    name: 'Bardo',
    icon: '🪕',
    theme: 'purple',
    bgGradient: 'from-purple-900 to-pink-900',
    desc: 'Especialistas na condução de canções mágicas e melodias rúnicas que manipulam o fluxo de combate.',
    subtitle: 'Caminho: Bardo',
    blocks: [
      {
        title: 'Habilidades e Magias',
        type: 'spells',
        items: [
          { name: 'Sifra Destoante', details: '1 Ação Padrão | 2 PM', desc: 'Um ataque mágico sonoro que força o alvo a um teste de Mental + Vontade. Em caso de falha, sofre 2 + 2d4 + Atributo de Magia de dano mental direto.' },
          { name: 'Refrão de Inspiração', details: '1 Ação Complexa | 4 PM', desc: 'Você entoa uma melodia heróica encorajando até 3 aliados em alcance Curto. Eles recebem 1 Vantagem no próximo teste que realizarem. (Melhorias: +1 PM inclui mais 1 aliado; +2 PM propaga a melodia até alcance Médio).' },
          { name: 'Verso de Conforto', details: '1 Ação Padrão | 3 PM', desc: 'Um cantar suave que acalma a mente em alcance Médio. O alvo regenera 1d4 de cura e é purificado de 1 efeito ou condição psicológica ativa (medo, desorientação, etc). (Melhoria: +2 PM permite confortar 1 alvo adicional).' }
        ]
      },
      {
        title: 'Habilidade Suprema de Arcana',
        type: 'arcana',
        items: [
          {
            name: 'Opus Magnum (A Grande Sinfonia)',
            details: 'Ação Padrão | 1 Ponto de Arcana',
            desc: 'Você inicia uma canção que se torna uma aura viva em torno de você. Pelo resto da cena, você emana a Opus Magnum em uma Área Média ao seu redor (a aura se move com você). Todo aliado que iniciar o turno dentro dessa área é purificado automaticamente de todas as condições negativas e ganha +1 Ação Rápida e +2 na Proteção enquanto estiver na zona de som.'
          }
        ]
      }
    ]
  }
};

const ESCOLAS_GROUPING = {
  guerra: {
    name: 'Escola da Guerra',
    desc: 'Focada em combate físico, táticas de combate marciais e maestria das armas ou feras selvagens.',
    caminhos: ['guerreiro', 'mestre_bestas']
  },
  elemental: {
    name: 'Escola Elemental',
    desc: 'Manipulação direta da matéria elemental (fogo, água, vento, terra) e das energias totêmicas e espirituais.',
    caminhos: ['elemental', 'xama']
  },
  vinculos: {
    name: 'Escola dos Vínculos',
    desc: 'Criação de elos telepáticos, evocações de familiares e pactos com entidades planares.',
    caminhos: ['invocador', 'bruxo']
  },
  artifices: {
    name: 'Escola dos Artífices',
    desc: 'Construção mecânica, alquimia e uso de artefatos e ferramentas rúnicas ou cartas mágicas.',
    caminhos: ['artifice', 'cartomante']
  },
  vida: {
    name: 'Escola da Vida',
    desc: 'Alteração celular, cura avançada, regeneração de tecidos e metamorfose corporal biológica.',
    caminhos: ['metamorfo', 'clerigo']
  },
  mente: {
    name: 'Escola da Mente',
    desc: 'Domínio psicológico, distorção dos sentidos e percepção através de canções de alento ou ilusões visuais.',
    caminhos: ['ilusionista', 'bardo']
  }
};

export { CAMINHOS_DATA, ESCOLAS_GROUPING };
