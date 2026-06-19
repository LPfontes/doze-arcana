# Doze Arcanas - Livro de Regras

Bem-vindo a **Doze Arcanas**, um sistema de RPG focado em aventuras dentro de escolas de magia e mistérios arcanos. Aqui você encontrará o núcleo mecânico e as regras centrais do jogo.

---

## PARTE I: O SISTEMA E AS MECÂNICAS

### 1. Mecânicas Centrais de Teste

Todas as incertezas e conflitos do sistema são resolvidos através de Testes de Atributo.
A amplitude numérica básica varia de **2 a 12**, com uma média esperada de **7**.

*   **Teste Comum:** O resultado é a soma de `2d6 + Atributo`.
*   **Teste Especializado:** Utilizado quando o personagem possui treinamento na Perícia exigida. Adiciona-se 1d6 extra por possuir o treinamento (totalizando 3d6), mantendo apenas os dois maiores valores rolados. O resultado final é a soma dos `2 maiores d6 + Atributo`. Não existem pontos de Perícia, apenas o fato de ter ou não o treinamento. Um aluno começa tendo 2 treinamentos, dificilmente passa de 3, mas é possível trocá-los (algo que não é praticado acaba se perdendo).
*   **Vantagens e Desvantagens:** São modificadores situacionais que se anulam entre si.
    *   **Vantagem:** Adiciona **1d4** à rolagem.
    *   **Desvantagem:** Subtrai **1d4** da rolagem.
    *   *(Em caso de acúmulo de Vantagens, rola-se a quantidade total de d4s e aplica-se apenas o maior resultado).*
*   **Falha Crítica (1 e 1):** Representa uma falha garantida com consequências negativas e circunstâncias desfavoráveis.
*   **Acerto Crítico (6 e 6):** Representa um sucesso garantido, gerando bônus e vantagens adicionais para a cena. Note que o resultado máximo natural (6 e 6) continua somando 12, preservando o tema do nome "Doze Arcanas".

---

### 2. Combate e Recursos

O combate compara o ataque contra uma Defesa padrão.

*   **Defesa Base:** `7 + Físico`. (Representa a dificuldade para que um ataque te acerte).
*   **Defesa Mágica:** `7 + Vigor + Condições Mágicas`.
*   **Ataque:** `2d6 + Atributo de Ataque (Força/Destreza/Magia) + Modificadores`.

#### Recursos e Atributos de Combate
*   **Pontos de Vida (PV):** Medem a saúde física. Calculado como `20 + (Físico x 5)`. Ao chegar a 0 PV, o personagem fica Esgotado e precisa passar em testes de Mental + Vontade (DT 8) a cada rodada para evitar ficar inconsciente. Se sofrer qualquer tipo de dano enquanto estiver com 0 PV, ele sofre um Trauma (veja a Tabela de Traumas abaixo). Um personagem só pode possuir no máximo 2 Traumas ativos; ao acumular o 3º Trauma, ele cai inconsciente imediatamente.
*   **Pontos de Mana (PM):** Reservatório de energia mágica. Calculado como `12 + (Magia x 3)`.
*   **Pontos de Arcana:** Recursos poderosos que representam o seu potencial mágico latente. Eles podem ser utilizados para ativar habilidades especiais, magias e aprimorar testes. Você recebe Pontos de Arcana ao realizar acertos críticos in rolagens ou ao concluir missões importantes.
*   **Defesa (DF):** Sua capacidade de desviar e resistir a ataques. Representa a dificuldade (Dificuldade de Teste - DT) para que um ataque te acerte de modo a causar dano.
*   **Redução de Dano (RD):** Um atributo contínuo proveniente de **equipamentos** (como armaduras físicas) que reduz um valor fixo de todo dano sofrido de cada ataque.
*   **Proteção (PR):** Um valor temporário extra de vida que absorve o dano sofrido antes de atingi-lo (como escudos e armaduras mágicas temporárias). É consumido e destruído ao chegar a 0.

#### Cálculo de Danos
Em um acerto, o dano do ataque não é rolado separadamente. O dano é determinado diretamente pela própria rolagem de ataque:
*   **Dano Físico Básico:** `Maior d6 da rolagem de ataque + Físico`.
*   **Dano Mágico Básico:** `Maior d6 da rolagem de ataque + Magia`.
*   **Dano Crítico:** Maximiza o valor do maior d6 do ataque (dano igual a `6 + Atributo`).

Habilidades e aprimoramentos que concedem dados de dano bônus em um ataque (como `+1d6 de dano`) são rolados separadamente como dados extras de dano e somados ao total (ex: Maior d6 do ataque + Atributo + 1d6 de dano bônus).

#### Tabela de Traumas (Rolagem de 2d6)
Sempre que um personagem com 0 PV (Esgotado) sofrer dano de qualquer tipo, ele deve rolar 2d6 na tabela a seguir. Um personagem só pode ter no máximo 2 Traumas ativos antes de cair inconsciente (ao acumular o 3º Trauma, desmaia imediatamente):

| Resultado | Trauma | Efeito Mecânico |
| :--- | :--- | :--- |
| **2 (Falha Crítica)** | Inconsciente | O personagem cai inconsciente, não pode agir e corre risco de morrer. Um personagem só volta a ficar consciente após ser estabilizado e passar por um descanso longo. |
| **3 - 4** | Cicatriz Dolorosa | O golpe deixa uma marca profunda. O limite máximo de PV do personagem é reduzido em **3 PV** permanentemente. |
| **5 - 8** | Concussão Severa | Sofre **1 Desvantagem (-1d4)** em todos os testes Mentais e de Iniciativa até realizar um descanso longo. |
| **9 - 11** | Fratura Exposta | Um membro é quebrado. Sofre **1 Desvantagem (-1d4)** em testes Físicos até ser tratado com medicina (mental dificuldade 10) ou magia de cura (que cure pelo menos 5pv). |
| **12 (Sorte)** | Cicatriz Gloriosa | O personagem resiste bravamente. |

#### Iniciativa
No início de cada combate, todos os participantes rolam para determinar a ordem de ação. A **Iniciativa** é calculada como:

`2d6 + Mental`

Resultados mais altos agem primeiro. Em caso de empate, personagens jogadores têm prioridade sobre personagens do Mestre.

#### Ações de Combate
Em cada turno, um personagem possui:
*   **2 Ações Padrão:** Atacar, conjurar magia comum, interagir com objeto complexo.
*   **1 Ação de Movimento:** Deslocar-se pelo cenário, sacar arma, levantar-se.

*(Duas Ações Padrões podem ser combinadas em uma Ação Complexa, duas Ações de padrões podem ser combinadas em uma Ação Complexa, e duas Ações Padrão e uma Ação de Movimento podem ser combinadas em uma Ação Complexa).*

#### Descanso e Recuperação
Os personagens recuperam recursos através de dois tipos de descanso:

*   **Descanso Curto (mínimo 4 horas):** O personagem descansa, come e dorme parcialmente. Recupera `3 + 1d6` de **PV** e `3 + 1d6` de **PM**. Remove condições temporárias de combate (ex: Sangramento, Desorientado). Não remove Traumas nem condições de Fratura Exposta ou Concussão Severa.
*   **Descanso Longo (8 horas completas):** O personagem dorme uma noite inteira em segurança. Recupera **todos os PV e todos os PM**. Remove Concussão Severa, Fratura Exposta (se tratada) e outras condições com duração "até descanso longo". Um personagem Inconsciente só pode ser estabilizado e só desperta após um Descanso Longo.

---

### 3. Economia Escolar: Créditos & Prestígio

O dinheiro mundano não tem valor nos corredores da escola.

#### Créditos Acadêmicos (A Moeda Prática)
Substituem o dinheiro comum e medem a confiança que a escola deposita no aluno.
*   **Como Ganhar:** Notas altas, clubes acadêmicos, missões escolares.
*   **Como Gastar:** Equipamentos, acesso à biblioteca restrita, chaves de laboratórios.
*   **Como Perder:** Quebrar regras, multas, notas baixas.

#### Prestígio (A Moeda Social)
O status narrativo do personagem dentro do ecossistema da escola.
*   **Fama:** O quão conhecido você é.
*   **Reputação:** O "título" que carrega (ex: "Gênio", "Encrenqueiro").
*   **Impacto:** Permite conseguir Vantagens (+1d4) em testes sociais ou abrir portas sem gastar Créditos.

---

#### Recessos e Atividades de Tempo Livre

Os Recessos são períodos de rotina dentro do ano letivo da academia, dedicados aos estudos, descanso e outras atividades pessoais. Durante um recesso, o aluno tem direito a realizar **até 2 atividades** de sua escolha:

*   **Treinar um nível de caminho:** Dedicar tempo a aprimorar suas técnicas e avançar na sua trilha de especialização acadêmica.
*   **Aprender uma magia:** Praticar e transcrever um novo feitiço em seu grimório.
*   **Descobrir um boato:** Investigar mistérios, fofocas e segredos ocultos pelos corredores da escola.
*   **Cobrar um favor:** Usar suas conexões sociais e influência para reaver recursos ou favores de outros alunos ou funcionários.
*   **Ciclar Mana (Treinamento de Mana):** Um treinamento especial e arriscado que consiste em manipular e circular toda a mana do próprio corpo. O aluno pode escolher realizar esse treinamento como uma de suas ações de recesso. Exige um teste de **Magia + Controle (DT 10)**. Em caso de sucesso, o aluno recebe **+4 PM máximos** permanentemente.

---

## PARTE II: CRIAÇÃO DE PERSONAGEM

### 4. Criando a Ficha de Aluno

A jornada de um estudante na escola de magia começa pela sua origem e seus laços.

#### O Patrono
Representa alguém de grande importância na vida do estudante que atua como um elo com o mundo.
*   **Figuras Próximas:** Parente poderoso ou um mago famoso que enxergou potencial no aluno.
*   **Figuras Distantes:** O lorde ou líder da terra natal, que financia jovens promissores.
*   **Figuras Acadêmicas:** Um professor tutor ou um aluno veterano de grande prestígio.

---

### 5. Origens e Raças

As Raças fornecem a base cultural da sua interpretação e estipulam a sua faísca mágica original (Dádiva Arcana).

*   **🌿 Elfos:** Espécies primordiais e antigas, com ligação inata às correntes elementais do mundo. Existem quatro linhagens élficas, cada uma com cultura própria e resistência ao dano correspondente à sua arcana de origem.
    *   **Elfo do Fogo (Ign):** Apaixonados, intensos, guerreiros por natureza. Inicia com o Feitiço de Grau I de **Fogo** e possui **Resistência ao Fogo (RD 2 contra dano de fogo)**.
    *   **Elfo da Água (Flu):** Fluidos, contemplativos e adaptáveis. Inicia com o Feitiço de Grau I de **Água** e possui **Resistência ao Gelo (RD 2 contra dano de gelo/água)**.
    *   **Elfo da Natureza (Lar):** Serenos, protetores, ligados à biologia do mundo. Inicia com o Feitiço de Grau I de **Vida** e possui **Resistência ao Veneno (RD 2 contra dano de veneno ou Vida corrompida)**.
    *   **Elfo da Noite (Vat):** Sombrios, misteriosos e próximos do plano do Vazio. Inicia com o Feitiço de Grau I de **Vazio** e possui **Resistência às Trevas (RD 2 contra dano de Escuridão ou Vazio)**.
*   **⚔️ Humanos:** Numerosos e intensos. Iniciam com 1 Feitiço de Grau I das Arcanas: Luz, Água, Ordem ou Caos — e com **1 treinamento de Perícia extra** (3 treinamentos no total, em vez dos 2 padrões de outras raças).
*   **⛰️ Anões:** Atarracados e destemidos. Inicia com 1 Feitiço de Grau I das Arcanas: Terra, Escuridão, Vínculo ou Isolamento — e recebe **+1 no atributo Físico** (somado após a distribuição de pontos).
*   **🦋 Feéricos:** Seres do crepúsculo. Você pode escolher ser uma **Fada**, **Fauno** ou **Dríade**. Inicia com 1 Feitiço de Grau I de qualquer Arcana Espiritual — e recebe **+1 no atributo Social** (somado após a distribuição de pontos).
*   **🐉 Drakin:** Herdeiros de dragões. Recebe **+1 de RD natural** contra qualquer tipo de dano. Existe 1 linhagem para cada uma das seis Arcanas Elementais. Cada drakin inicia com 1 Feitiço de Grau I de sua arcana elemental e possui um **Ataque Natural Elemental** que causa **dano igual ao valor do maior d6 do ataque** do elemento correspondente (Sopro Flamejante para Fogo, Jorro Glacial para Água, Golpe Sísmico para Terra, Lâmina de Vento para Vento, Raio Solar para Luz, Garras Umbrais para Escuridão).
*   **👁️ Quiméricos:** Mestiços e anomalias. Inicia com 1 Feitiço de Grau I de qualquer Arcana (Livre Escolha). Existem linhagens como a **Bestial** (descendentes de povo-bicho; veja com o narrador um bônus de atributo condizente de +1 ou habilidade equivalente) e **Tocado pelas Arcanas** (tiveram contato com uma fonte de poder ainda jovens; escolha uma Arcana para receber resistência a dano correspondente de RD 2 e +1 Vantagem em testes dela). (Requer aprovação narrativa).

---

### 6. Atributos e Perícias

O sistema divide as capacidades dos personagens em quatro pilares fundamentais, cada um com três perícias associadas.

| Atributo | Descrição | Perícias Associadas |
| :--- | :--- | :--- |
| **Físico** | Capacidade física e resistência corporal. | Força, Destreza, Vigor |
| **Social** | Presença, influência e articulação verbal. | Persuadir, Enganar, Intimidar |
| **Mental** | Intelecto, foco psicológico e capacidade analítica. | Conhecimento, Percepção, Vontade |
| **Magia** | Intuição mágica, manufatura e canalização de Mana. | Controle, Compreensão, Ofício |

---

### 7. Casas Acadêmicas

As Casas não são meros alojamentos; são instituições de poder político e mágico dentro da academia. Ser aceito em uma delas é a garantia de que você terá uma rede de apoio poderosa, mas também significa comprar as inimizades que vêm com aquele brasão.

#### Status e Ingresso
*   **Novato Neutro:** No início do primeiro ano, todos os alunos são considerados "Novatos Neutros". As Casas enviam seus veteranos como "olheiros" para observar o desempenho dos calouros nas aulas práticas e nos corredores.
*   **O Rito de Ingresso:** Cada Casa define suas próprias regras de admissão, o convite nunca é de graça. O jogador precisará passar por um Rito de Ingresso narrativo (geralmente durante o 1º Período) para provar seu valor.
*   **Poder Além dos Créditos:** Um aluno sem Casa sobrevive, mas um aluno filiado prospera. Fazer parte de uma Casa concede acessos que nenhum Crédito pode comprar: o Cofre da Casa, a Biblioteca Privada e a Rede de Influência.

#### Perfis das Casas Acadêmicas

##### 🦁 Casa do Leão
*   **Lema:** *"A verdade deve ser dita e o mal deve ser exposto."*
*   **Arcanas Associadas:** Fogo (Igni), Luz (Lux), Ordem (Proto).
*   **Perfil do Estudante:** Os alunos do Leão são fiéis a seus princípios, agentes da lei, buscadores da verdade, defensores daqueles que sofrem com a injustiça e sob o peso do poder absoluto. Aqueles que queimam com propósito e não se escondem nas sombras.

##### 🌿 Casa da Árvore
*   **Lema:** *"A vida persiste, o mundo é a rede dos corações dos vivos."*
*   **Arcanas Associadas:** Terra (Tera), Vida (Lar), Vínculo (Vic).
*   **Perfil do Estudante:** Os alunos da Árvore são o coração pulsante da escola. Eles possuem uma conexão profunda e quase instintiva com o mundo natural e com as pessoas ao seu redor. Não buscam a glória ou o centro das atenções; em vez disso, encontram propósito em nutrir o crescimento dos outros, proteger os mais vulneráveis e manter o equilíbrio do ecossistema mágico e social da academia. São excelentes ouvintes, amigos leais e defensores implacáveis quando aqueles que amam estão em perigo.

##### ⚙️ Casa da Engrenagem
*   **Lema:** *"Os limites da verdade são frágeis sobre o limiar do conhecimento, avançamos sobre ambos."*
*   **Arcanas Associadas:** Vento (Aero), Isolamento (Nim), Caos (Kat).
*   **Perfil do Estudante:** Os alunos da Engrenagem são as mentes inquietas da academia. Eles não se contentam em decorar feitiços antigos; eles querem desmontar a magia para ver como as peças funcionam por dentro. São inventores, teóricos e desbravadores de limiares. Muitas vezes vistos como excêntricos ou até perigosos pelos outros alunos, eles abraçam o risco com naturalidade, sabendo que a genialidade e a loucura são separadas por uma linha muito tênue. Se há uma regra dizendo "não misture essas duas poções", um aluno da Engrenagem será o primeiro a misturá-las só para anotar o resultado.

##### 🌑 Casa da Noite
*   **Lema:** *"O silêncio é o nosso guia, os segredos nossas armas, movemos as cordas para tocar a sintonia."*
*   **Arcanas Associadas:** Água (Aqua), Escuridão (Nox), Vazio (Vat).
*   **Perfil do Estudante:** Os alunos da Noite são os observadores da academia. Eles não se destacam nas multidões; em vez disso, flutuam sobre os tecidos sociais de forma quase imperceptível. São calmos, calculistas e extremamente perceptivos. Eles sabem quem tem uma dívida com quem, conhecem as passagens secretas do colégio e guardam segredos que poderiam arruinar reputações (ou salvar vidas). Um aluno da Noite nunca age no impulso ou se exibe sem propósito; quando eles finalmente agem, o resultado já foi decidido muito antes de alguém notar a sua presença.

---

## PARTE III: O GRIMÓRIO E A MAGIA

### 8. As Doze Arcanas

As Arcanas representam os conceitos primordiais do universo que os magos podem dobrar.

#### Arcanas Elementais (Manipulação Física)
*   **Fogo (Igni):** Destruição, calor, energia.
*   **Água (Aqua):** Fluidez, cura física, adaptação.
*   **Terra (Tera):** Resiliência, peso, cristalização.
*   **Vento (Aero):** Mobilidade, dispersão, leveza.
*   **Luz (Lux):** Revelação, pureza, cegueira.
*   **Escuridão (Nox):** Ocultação, frio profundo, gravidade.

#### Arcanas Espirituais (Conceitual/Mental)
*   **Vida (Lar):** Metabolismo, biologia, crescimento.
*   **Vazio (Vat):** Entropia, anulação, antimagia.
*   **Vínculo (Vic):** Conexões invisíveis, telepatia.
*   **Isolamento (Nim):** Barreiras absolutas, repulsão.
*   **Ordem (Proto):** Precisão matemática, rituais exatos.
*   **Caos (Kat):** Acaso, probabilidades, imprevisibilidade.

---

### 9. O Grimório e os Feitiços

A magia em Doze Arcanas é uma ciência estruturada. Magias não são montadas livremente em combate; elas são aprendidas como **Feitiços Prontos** consolidados por grandes conjuradores e transcritos no grimório.

#### Estrutura dos Feitiços e Aprimoramentos
*   **Custo Base:** Cada feitiço tem um custo fixo de Pontos de Mana (PM) para conjurar sua versão mais simples.
*   **Aprimoramentos:** Ao conjurar, o mago pode investir Pontos de Mana (PM) extras para ativar aprimoramentos específicos do feitiço, melhorando o dano, alcance, área ou adicionando condições especiais.
*   **Graus de Feitiço:** As magias são divididas em Graus de complexidade (Grau I, II e III), exigindo maior domínio do conjurador para serem aprendidas.

Magias conjuradas custam **PM (Pontos de Mana)**. Se o personagem não tiver PM suficiente, sofre Exaustão.

#### Magia Narrativa (Fora de Combate)

Para dar fluidez ao uso de magias no cotidiano escolar, o sistema adota regras narrativas que substituem a necessidade constante de cálculos de aprimoramentos para problemas simples.

##### 1. A Regra do Esforço Zero (Magias de Conforto)
Se o uso da magia for puramente estético, para conforto pessoal, ou não der nenhuma vantagem mecânica para resolver um grande problema da aventura, ela simplesmente acontece e **não custa PM**.
*   **Como funciona:** Um aluno com o feitiço de Iluminação não precisa gastar mana para manter uma luzinha acesa para ler à noite. Um aluno de Água pode criar um pequeno guarda-chuva invisível para não se molhar no pátio.
*   **O Limite:** Se o jogador tentar usar esse feitiço "gratuito" para cegar um guarda ou apagar um incêndio perigoso, o Mestre avisa: "Isso exige esforço real. Vamos para as regras de Teste ou Combate".

##### 2. O Teste de Intenção (Substituindo a Conjuração Dinâmica)
Quando um jogador quer usar magia fora de combate para resolver um obstáculo real (arrombar uma porta, enganar um professor, levitar furtivamente um molho de chaves), não o faça calcular aprimoramentos. Reduza tudo a um único Teste de Atributo.
*   **A Rolagem:** Peça um teste do Atributo **Magia** somado à Perícia mais lógica (Controle, Compreensão ou Ofício).
*   **O Resultado:** Se ele tirar um valor alto (lembrando que a média é 7), a magia funciona perfeitamente. Não há contagem de PM ou dano; o problema narrativo é superado.

##### 3. Consequências em vez de Custos (O Preço da Falha)
Em vez de microgerenciar os Pontos de Mana (PM) dos alunos durante o tempo livre, gerencie a tensão narrativa. Se eles falharem no "Teste de Intenção", em vez de apenas dizer "não funcionou", aplique uma complicação:
*   **Sobrecarga / Exaustão:** A magia exige demais dele. O aluno consegue o que quer, mas começa a próxima cena importante (ou o próximo combate) com menos PM ou com uma desvantagem temporária.
*   **Efeito Colateral Revestido:** A magia do Caos destrancou a porta, mas derreteu a maçaneta em uma poça neon que denuncia exatamente quem passou por ali, arriscando seu Prestígio ou gerando perda de Créditos por vandalismo escolar.
*   **Atenção Indesejada:** O uso de magia alta fora do laboratório chama a atenção de monitores, dos gatos arcanos da escola ou de um professor rigoroso.

##### 4. Permissão Narrativa pelas Arcanas e Escolas
Use as Arcanas e as Escolas (Áreas) como "permissões verbais" para o que o personagem pode ou não tentar fazer narrativamente.
*   Um **Ilusionista** naturalmente pode pedir para mudar a cor das próprias roupas sem rolar dados.
*   Um **Biomante** pode perceber que a comida do refeitório está estragada só de sentir o cheiro, porque a vida e a biologia são sua segunda natureza.

A magia deles reflete quem eles são, não apenas os botões que eles apertam em combate. Dessa forma, os jogadores se sentem poderosos e mágicos o tempo todo, mas o jogo só exige matemática quando as coisas esquentam e vidas (ou notas bimestrais) estão em jogo.

---

## APÊNDICES DE REFERÊNCIA

### Apêndice A: Grimório e Feitiços Prontos

Em Doze Arcanas, a magia é expressa através de Feitiços Prontos. Abaixo estão os feitiços clássicos divididos pelas Doze Arcanas e categorizados por Grau de complexidade.

#### Arcanas Elementais

##### 1. Fogo (Ign)
*   **Chama de Agnes** (Grau I | Custo: 2 PM | Toque): Uma chama arcana e intensa, faça um ataque mágico contra o alvo. Em um acerto, ele sofre dano de fogo igual ao maior d6 do ataque + Magia.
    *   *Aprimoramentos:*
        *   `+1 PM`: Transforma em um ataque à curta distância.
        *   `+2 PM`: O alvo pega fogo. No próximo turno dele, ele sofre 3 de dano de fogo e faz um salvamento de Físico Destreza. Sucesso encerra o efeito; fracasso mantém.
        *   `+2 PM`: O ataque causa +1d6 de dano bônus.
*   **Combustão de Caelestus** (Grau II | Custo: 3 PM | Curto): O alvo faz um salvamento de Físico Agilidade (DT 8). Se falhar, fica Marcado por 1 Rodada. Se ele sofrer dano enquanto marcado, explode causando 6 de dano de fogo a ele e a inimigos adjacentes.
    *   *Aprimoramentos:*
        *   `+2 PM`: Aumenta o dano da explosão para 10 de fogo.
        *   `+2 PM`: Aplica Queimadura (3 de dano/turno) em todos os alvos atingidos.

##### 2. Água (Flu)
*   **Lança de Agnes** (Grau I | Custo: 3 PM | Híbrido): Corpo a corpo: alcance 2, dano igual ao maior d6 do ataque + Físico (cortante) em acerto. À Distância: arremesso médio, ataque mágico, dano de gelo igual ao maior d6 do ataque + Magia.
    *   *Aprimoramentos:*
        *   `+2 PM` (somente distância): Conjura mais uma lança que causa +1d6 de dano de gelo bônus.
*   **Nevoeiro de Vapor** (Grau I | Custo: 2 PM | Área Pequena): Cria uma nuvem de vapor 3x3 em alcance curto. Bloqueia linha de visão. Alvos internos ficam Cegos.
    *   *Aprimoramentos:*
        *   `+2 PM`: A nuvem aplica Hipotermia (alvo perde 1 Ação Padrão no próximo turno; salvamento Físico Vigor) para quem iniciar o turno nela.

##### 3. Terra (Ro)
*   **Barreira de Pedra** (Grau I | Custo: 3 PM | Adjacente): Ergue uma parede de rocha em um espaço adjacente. Fornece Cobertura Total e possui 10 PV.
    *   *Aprimoramentos:*
        *   `+2 PM`: A parede ganha +10 PV e causa 3 de dano contundente a qualquer inimigo adjacente no início do turno dele.
*   **Tremor de Tera** (Grau II | Custo: 3 PM | Área Pequena): Provoca um abalo no solo em uma área pequena (3x3). Alvos fazem salvamento de Físico Agilidade ou ficam Caídos e Impedidos até o fim do próximo turno.
    *   *Aprimoramentos:*
        *   `+2 PM`: A área afetada vira terreno difícil permanente até o fim do combate.
*   **Moldar Terra de Gaztle** (Grau II | Custo: 4 PM | 1 Ação Complexa): você consegue modelar a terra ao seu redor, criando, movendo ou destruindo estruturas.
    *   *Moldar:* você consegue criar e moldar uma área pequena de terra, pode criar plataformas, escadas, pilares etc.
    *   *Mover:* você consegue mover uma área pequena de terra ou rocha até 4 espaços, alvos nessa área devem fazer um teste de física destreza ou ficam caídos.
    *   *Destruir:* você destrói uma área pequena de terra ou rocha, você pode criar buracos de até 3 metros, alvos que estiverem nessa área devem fazer teste de física destreza ou caem nesse buraco e sofre 1d6 de dano de concussão.
*   **Pele de Rocha** (Grau II | Custo: 4 PM | 1 Ação Padrão): Uma camada de rocha revestiu sua pele, você recebe +2 de defesa e 4 de proteção.
    *   *Aprimoramentos:*
        *   `+3 PM`: O bônus de defesa se torna +3.

##### 4. Vento (Aer)
*   **Controle de Vento de Lamur** (Grau I | Custo: 3 PM | Curto): Escolha um efeito ao conjurar: Lufada (Físico Vigor ou sofre 6 dano cortante e é empurrado 4 espaços; sucesso = 3 dano), Barreira (adjacentes sofrem 3 dano cortante e você ganha Cobertura Leve) ou Projétil (ataque mágico, dano de impacto igual ao maior d6 do ataque + Magia e 1 Sangramento).
    *   *Aprimoramentos:*
        *   `+2 PM` (somente Lufada): Cone de 4 unidades (+2 PM = 4u, +4 PM = 8u, +6 PM = 12u, máx 3 vezes).

##### 5. Luz (Lit)
*   **Escudo de Agnes** (Grau I | Custo: 2 PM | 1 Rodada): Você recebe **+2 de Defesa** e **+2 de RD** até o início do seu próximo turno.
    *   *Aprimoramentos:*
        *   `+2 PM`: Ao receber um ataque, emite um clarão. O atacante faz salvamento de Físico Vigor ou fica Cego por 1 rodada.
*   **Clarão Solar** (Grau II | Custo: 2 PM | Raio): Dispara um raio luminoso em linha reta que atinge até 2 alvos. Alvos fazem salvamento de Físico Vigor ou ficam Cegos por 1 rodada.
    *   *Aprimoramentos:*
        *   `+2 PM`: Deixa um rastro de luz que concede **Vantagem (+1d4)** nos ataques de aliados contra quem estiver na linha da magia por 1 rodada.

##### 6. Escuridão (Ru)
*   **Garras da Umbra** (Grau I | Custo: 3 PM | Curto): Garras de sombra prendem o alvo. Ele faz um salvamento de Físico Destreza ou fica Imobilizado por 1 rodada.
    *   *Aprimoramentos:*
        *   `+2 PM`: Causa dano de frio igual ao maior d6 do ataque + Magia e o alvo ganha Desvantagem (-1d4) em testes físicos de força.
*   **Manto do Oculto** (Grau II | Custo: 3 PM | Pessoal): O conjurador ganha Invisibilidade até o final de seu próximo turno. O estado não é quebrado por desferir ataques ou lançar feitiços.
    *   *Aprimoramentos:*
        *   `+2 PM`: Aumenta a duração do efeito em +1 rodada.

#### Arcanas Espirituais

##### 7. Vida (Lar)
*   **Cura Vital** (Grau I | Custo: 2 PM | Curto): Cura 1d6 Pontos de Vida em um alvo a alcance curto.
    *   *Aprimoramentos:*
        *   `+2 PM`: Aumenta a cura em +1d6 PV.
        *   `+1 PM`: Limpa todas as condições de Sangramento e Veneno do alvo.
*   **Sifão de Seiva** (Grau II | Custo: 3 PM | Toque): Ataque mágico ao toque, causando dano igual ao maior d6 do ataque + Magia. Metade é revertido em cura para você ou aliado adjacente.
    *   *Aprimoramentos:*
        *   `+2 PM`: Causa +1d6 de dano bônus e a cura se torna igual a 100% do dano causado.
*   **Controle de Plantas de Mir** (Grau II | Custo: 4 PM | 1 Ação Padrão): Você consegue controlar as plantas ao seu redor, fazendo-as crescer, prender ou chicotear inimigos.

##### 8. Vazio (Vat)
*   **Privação Existencial** (Grau I | Custo: 3 PM | Curto): O alvo faz salvamento de Mental Vontade. Em caso de fracasso, fica Cego e Surdo por 1 rodada.
    *   *Aprimoramentos:*
        *   `+2 PM`: O alvo também fica Silenciado e impedido de conjurar magias.
*   **Singularidade Devoradora** (Grau III | Custo: 4 PM | Área Pequena): Cria área pequena (3x3). Projéteis físicos ou mágicos que passem por ela são sugados e anulados.
    *   *Aprimoramentos:*
        *   `+2 PM`: Inimigos que entrarem ou iniciarem o turno na área sofrem 3 de dano de força (ignora PR).

##### 9. Vínculo (Vic)
*   **Elo Kármico** (Grau I | Custo: 2 PM | Curto): Conecta duas criaturas (sente localização e estado emocional) por 1 rodada.
    *   *Aprimoramentos:*
        *   `+2 PM` (Ressonância): Qualquer dano sofrido por uma causa metade do valor como dano de força (ignora PR) na outra.
*   **Corrente de Submissão** (Grau II | Custo: 3 PM | Curto): Alvo faz salvamento de Físico Destreza ou fica acorrentado. Se afastar-se mais de 3m, sofre 6 de dano e perde a ação.
    *   *Aprimoramentos:*
        *   `+2 PM`: O alvo fica Imobilizado (movimento 0).
*   **Sonho** (Grau II | Custo: 3 PM | 1 Ação Complexa/Transe): Você entra nos sonhos de uma criatura. Uma vez lá, pode conversar com ela até que ela acorde. Se o alvo não estiver dormindo quando você lançar a magia, você pode permanecer em transe até que ele adormeça. Durante o transe, você fica indefeso e sem consciência dos arredores. Você pode sair do transe quando quiser, mas a magia termina.

##### 10. Isolamento (Nim)
*   **Quarentena Arcana** (Grau I | Custo: 3 PM | Curto): Alvo faz salvamento de Mental Vontade. Se falhar, fica Isolado: não pode receber curas, buffs, auras ou efeitos benéficos de aliados por 1 rodada.
    *   *Aprimoramentos:*
        *   `+2 PM`: Aumenta a duração para 2 rodadas.
*   **Redoma do Vácuo** (Grau II | Custo: 4 PM | Área Pequena): Ergue barreira de vácuo rígido. Impede ataques e projéteis de passarem em ambas as direções.
    *   *Aprimoramentos:*
        *   `+2 PM`: Aliados dentro da redoma regeneram 1d4 PV/rodada.

##### 11. Ordem (Proto)
*   **Cálculo Preciso** (Grau I | Custo: 2 PM | Pessoal): Até o próximo turno, todas as suas rolagens de ataque somam +2.
    *   *Aprimoramentos:*
        *   `+2 PM`: Estende o bônus para um aliado a alcance Curto.
*   **Prisão Geométrica** (Grau II | Custo: 3 PM | Curto): Cria grade de luz. Alvo faz salvamento de Físico Agilidade ou fica preso em uma caixa de luz (sem movimento, mas com proteção extra).
    *   *Aprimoramentos:*
        *   `+2 PM`: Dano recebido pela criatura na caixa é reduzido à metade.
*   **Selar Mana** (Grau III | Custo: 5 PM | 1 Ação Complexa): Você restringe as correntes de mana do alvo. Ele deve passar por um salvamento de Mental Vontade ou fica silenciado magicamente e impedido de gastar PM por 1 rodada.

##### 12. Caos (Kat)
*   **Cascata Estocástica** (Grau I | Custo: 3 PM | Curto): Ataque mágico de caos, causa dano de caos igual ao maior d6 do ataque + Magia. Qualquer 6 natural rolado no d6 de ataque explode, concedendo +1d6 de dano adicional.
    *   *Aprimoramentos:*
        *   `+2 PM` (Instabilidade): sempre que o alvo tentar usar PM, rola 1d6; em um número ímpar, os recursos são gastos e a magia implode (falha).
*   **Cara ou Coroa** (Grau III | Custo: 3 PM | Curto): Alvo faz salvamento de Magia Controle. Se falhar, rola uma moeda no início de cada ação: coroa perde a ação por travamento mental.
    *   *Aprimoramentos:*
        *   `+2 PM`: Alvo também sofre 3 de dano mental sempre que falhar na moeda.
*   **Relâmpago de Liz** (Grau II | Custo: 4 PM | 1 Ação Padrão): você conjura um relâmpago que salta de um alvo a outro, escolha um inimigo ele deve fazer um teste de físico destreza em um fracasso sofre 2d4 + magia, alvos hostis a até 3 espaços sofrem metade do dano.

---

### Apêndice B: Escolas, Caminhos e Habilidades

O desenvolvimento de Especialização dos alunos é feito através de 6 Escolas Acadêmicas, cada uma abrigando 2 Caminhos Tradicionais (totalizando 12 Caminhos).

#### As 6 Escolas e seus 12 Caminhos
1.  **Escola da Guerra:** Foco em combate físico, táticas de combate marciais e maestria das armas ou feras selvagens.
    *   **Guerreiro:** Lâmina, escudo e técnicas de combate armado.
    *   **Mestre de Bestas:** Laço animal e combate coordenado com feras selvagens.
2.  **Escola Elemental:** Manipulação direta da matéria elemental (fogo, água, vento, terra) e das energias totêmicas e espirituais.
    *   **Elemental:** Conjuração direta de feitiços de dano e efeitos de área.
    *   **Xamã:** Uso de totens de suporte e travessia incorpórea astral.
3.  **Escola dos Vínculos:** Criação de elos telepáticos, evocações de familiares e pactos com entidades planares.
    *   **Invocador:** Evocação de servos mágicos e avatares primordiais de combate.
    *   **Bruxo:** Pragas e maldições debilitantes, e pactos de sacrifício.
4.  **Escola dos Artífices:** Construção mecânica, alquimia e uso de artefatos e ferramentas rúnicas ou cartas mágicas.
    *   **Artífice:** Sentinelas mecânicas autônomas e alteração da matéria física.
    *   **Cartomante:** Manipulação da sorte por baralho místico e lâminas de papel.
5.  **Escola da Vida:** Alteração celular, cura avançada, regeneração de tecidos e metamorfose corporal biológica.
    *   **Metamorfo:** Autotransmutação celular (garras, escamas e forma quimérica).
    *   **Clérigo:** Cura sagrada, purificação de enfermidades e auras protetoras.
6.  **Escola da Mente:** Domínio psicológico, distorção dos sentidos e percepção através de canções de alento ou ilusões visuais.
    *   **Ilusionista:** Falsas realidades, decoys e projeções mentais assustadoras.
    *   **Bardo:** Canções de inspiração rúnica, buffs de PR e acordes sonoros dissonantes.

Magias de Caminho só podem ser aprendidas ganhando Níveis no respectivo Caminho. Ao ganhar um Nível de Caminho, o aluno pode escolher uma das seguintes opções para aquele Caminho:
*   Aprender uma nova Habilidade (no Grau I);
*   Evoluir/aprimorar o Grau (para Grau II ou Grau III) de uma Habilidade que já possui;
*   Aprender uma nova Magia de Caminho (no Nível 1);
*   Melhorar/aprimorar uma Magia de Caminho já aprendida.

Não há ordem ou nível pré-requisito fixo para adquirir as habilidades ou magias de um Caminho.


---

#### ⚔️ Caminho: Guerreiro
Focado no uso de lâminas, escudos e técnicas de combate armado. A magia aqui é aplicada diretamente na postura e no equipamento.

**Posturas de Combate**
Você adquire 3 posturas de combate. Custa 1 Ação Padrão para entrar ou trocar de postura:
*   **Ofensiva:** Posiciona o pé de apoio à frente, focando no alcance. Seus ataques corpo a corpo causam +2 de dano, mas sua Defesa é reduzida em -2.
*   **Defensiva:** Foco em proteção. Sua Defesa aumenta em +2, mas seu deslocamento (movimentação) é reduzido pela metade.
*   **Punitiva:** Preparação para explorar as brechas do oponente. Você ganha acesso à reação Resposta, permitindo realizar um ataque contra um oponente como uma Reação.

**Habilidades**
*   **Interpor (Passiva):** Você ganha a reação Interpor. Ao usá-la, você entra na frente de um ataque direcionado a um aliado adjacente, sofrendo o dano no lugar dele e recebendo +1 de Redução de Dano (PR) contra esse golpe.
*   **Espadachim (Ativação: 1 Ponto de Arcana):** Você manifesta um Dado de Espadachim que dura até o final da cena. No seu primeiro acerto corpo a corpo, o dado começa em 1d4. A cada acerto consecutivo, o dado "cresce" um passo (1d4 ➔ 1d6 ➔ 1d8 ➔ 1d10 ➔ 1d12). Você pode gastar este dado a qualquer momento para somar o valor rolado ao dano ou à rolagem de acerto de um ataque corpo a corpo. Se você errar um ataque ou consumir o dado, ele é reiniciado.

**Magias de Guerreiro**
*   **Encantar** (1 Ação Padrão | 3 PM): Você imbui uma arma com energia de uma Arcana. Até o final do seu próximo turno, a arma causa 1d4 de dano mágico extra do elemento escolhido. (Nível 2: O dano extra aumenta para 1d6).
*   **Velocidade de Mir** (1 Ação Padrão | 4 PM): Você impulsiona seu potencial físico com magia. No seu próximo turno, você recebe +1 Ação Padrão extra e +3 Espaços de movimento.
*   **Escudo Arcano** (1 Ação Padrão | 3 PM): Você gera uma barreira e recebe +2 de Redução de Dano até o seu próximo turno. (Melhoria: Por +2 PM, a duração aumenta em 1 turno). (Nível 2: Custa 4 PM e fornece +4 de Redução de Dano).

**Habilidade Suprema de Arcana**
*   **Maestria Incontestável** (Ação Livre | 1 Ponto de Arcana): Você transcende as limitações do combate básico. Até o final da cena, você pode manter duas Posturas de Combate simultaneamente.

---

#### 🐺 Caminho: Mestre de Bestas
Focado na criação de um laço inquebrável e no combate coordenado com feras selvagens.

**O Laço Animal (Nível 1)**
Você possui um companheiro bestial com as seguintes estatísticas base:
*   **Atributos:** 20 PV | Físico 2 | Mental 1 | Social 0 | Magia 0
*   **Ações por Turno:** 1 Ação Padrão e 1 Ação de Movimento.

**Habilidades**
*   **Coordenar Ataque** (1 Ação Complexa | 3 PM): Você e sua fera atacam simultaneamente. Você realiza um ataque contra o alvo com 1 Vantagem. Se acertar, causa o dano do seu ataque somado ao dano do ataque da fera, mais 1d6 de dano bônus.
*   **Marcar** (1 Ação Padrão | 4 PM): Você estipula um alvo. Pelo resto da cena, todos os ataques seus e do seu Laço Animal contra ele recebem 1 Vantagem, e a margem de acerto crítico contra este alvo é expandida para (11/11 e 12/12). (Melhoria: Por +3 PM, você pode marcar um alvo adicional).
*   **Rastrear** (1 Ação Padrão | 2 PM): Usa a conexão sensorial com a fera para buscar rastros. Exige um teste de Magia + Controle (DT 10). No sucesso, você descobre a posição relativa, a direção tomada e a quantidade aproximada de indivíduos.
*   **Domar** (1 Ação Complexa | 3 PM): Você acalma e se conecta com um animal ou besta mágica. Por 1 dia, a criatura o vê como aliado e obedece a ordens simples que não violem sua natureza (ordens suicidas quebram o encanto imediatamente e tornam a criatura hostil).

**Habilidade Suprema de Arcana**
*   **Sincronia Primal** (Ação Livre | 1 Ponto de Arcana): Você e sua fera lutam como um único organismo perfeito. Até o final da cena, você e seu Laço Animal compartilham a mesma reserva de Pontos de Vida (soma os PVs atuais de ambos). Além disso, a fera recebe +1 Ação Padrão adicional em todos os turnos dela, e qualquer ataque desferido por vocês contra um alvo Marcado ignora completamente a Redução de Dano (RD) do inimigo.

---

#### 🔥 Caminho: Elementalista
Focado na conjuração direta de magias destrutivas e manipulação de zonas de combate.

**Magias**
*   **Área Persistente:** Cria uma zona instável focada em uma Arcana. Inimigos sofrem dano ao entrar ou iniciar o turno nela.
    *   **Nível 1** (1 Ação Padrão | 2 PM): Área Pequena, causa 3 de dano mágico.
    *   **Nível 2** (1 Ação Padrão | 3 PM): Área Pequena, causa 6 de dano mágico.
    *   **Nível 3** (1 Ação Padrão | 5 PM): Área Média, causa 6 de dano mágico.
    *   *Melhorias:* +1 PM torna a área Terreno Difícil (reduz movimento); +2 PM permite conjurar como Ação de Movimento.
*   **Bola de Fogo** (1 Ação Padrão | 3 PM): Disparo clássico. Ataque mágico contra um alvo. No acerto, causa dano de fogo igual ao maior d6 do ataque + Atributo de Magia + 2. Efeito Secundário: Todas as criaturas em uma Emanação de raio 2 a partir do alvo sofrem 2 de dano de fogo.
*   **Flores de Liz** (1 Ação Padrão | 3 PM): Um campo de lótus de gelo eclode em uma Área Pequena. Alvos na área testam Físico + Destreza. Falha: Sofrem 6 de dano de gelo e perdem 1 Ação de Movimento e 1 Ação Padrão no próximo turno. Sucesso: Sofrem apenas 3 de dano de gelo. (Melhorias: +2 PM o alvo fica Paralisado se falhar; +2 PM causa +3 de dano extra na falha).
*   **Campo de Sombras** (1 Ação Padrão): Ergue uma área de escuridão Média obscurecida. Ataques feitos para dentro da área sofrem 2 Desvantagens (-2d6). Inimigos que entrarem ou iniciarem o turno nela testam Físico + Destreza para não serem Agarrados.
    *   **Nível 1** (2 PM): Efeitos base acima.
    *   **Nível 2** (3 PM): Adiciona 2d4 de dano de sombra caso o inimigo falhe no teste de Destreza.

**Habilidade Suprema de Arcana**
*   **Avatar da Destruição** (Ação Livre | 1 Ponto de Arcana): Você se torna a própria manifestação da fúria da natureza. Até o final da cena, todas as suas magias de dano elemental têm seu custo em PM reduzido em 2. Adicionalmente, quando você conjurar uma magia em área (como Bola de Fogo ou Área Persistente), você possui controle absoluto e escolhe quem sofre o dano e quem é ignorado, protegendo seus aliados perfeitamente.

---

#### 🦅 Caminho: Xamã
Uso de totens para suporte tático e travessia incorpórea pelo plano astral.

**Habilidades e Totens**
Você conhece 3 totens místicos e pode posicioná-los em um espaço adjacente a você ou arremessá-los até alcance Curto:
*   **Totem do Guardião (Urso/Touro):** Aliados adjacentes ao totem recebem Cobertura Leve e +2 de Proteção (PR).
*   **Totem do Flagelo:** Inimigos que passarem pelo totem sofrem 1d4 de dano elemental (o elemento é escolhido por você ao posicionar).
*   **Totem da Mãe:** Aliados adjacentes regeneram 1d4 PV no início de seus turnos.

**Magias e Rituais**
*   **Comunhão** (Ritual de 1 hora | 3 PM): Conecta sua mente com os espíritos guardiões para conversar, pedir conselhos e buscar conhecimento esquecido.
*   **Maldição** (1 Ação Padrão | 2 PM): Lançada em alcance Médio. Você só pode manter 1 maldição ativa por vez (conjurar uma nova anula a anterior). Escolha um dos efeitos:
    *   **Perseguidor:** Um espírito maldito assombra o alvo, causando 1d4 de dano mental no início do turno do inimigo. No final do turno dele, ele testa Magia + Controle para tentar banir o espírito.
    *   **Definhar:** O alvo sofre -1 em um Atributo à sua escolha. No final do turno dele, testa Magia + Controle para quebrar o efeito.
    *   **Malogro:** O alvo sofre 1 Desvantagem (-1d6) em todos os testes. No final do turno dele, testa Magia + Controle para se livrar do azar.

**Habilidade Suprema de Arcana**
*   **Convergência Ancestral** (Ação Padrão | 1 Ponto de Arcana): Os espíritos ancestrais respondem ao seu chamado todos de uma vez. Você invoca os 3 Totens (Guardião, Flagelo e Mãe) instantaneamente em três espaços diferentes à sua escolha em alcance Médio, sem gastar PM. Esses totens duram até o final da cena.

---

#### 👁️ Caminho: Invocador
Evocação de servos mágicos e avatares primordiais no campo de batalha.

**O Contrato**
Você serve de canal sob a tutela do "Senhor dos Contratos". Você escolhe e invoca um servo de outro plano (um elemental, um demônio menor ou um feérico). Enquanto o contrato for mantido e houver fluxo de mana, a criatura é sustentada no nosso plano material e é imune à morte definitiva.

**Habilidade Suprema de Arcana**
*   **Quebra do Selo (Libertação)** (Ação Livre | 1 Ponto de Arcana): Você afrouxa as correntes do contrato do seu Servo, permitindo que ele use seu verdadeiro poder cósmico. Até o final da cena, seu servo dobra seus PVs atuais e máximos, e todos os ataques que ele desferir recebem +2d4 de dano bônus. Durante essa cena, se o servo for morto, a entidade volta para seu plano de origem em uma explosão que causa 2d6 de dano mágico a todos os inimigos adjacentes a ele.

---

#### 🔮 Caminho: Bruxo
Especialista em pragas, enfraquecimento e pactos de poder.

**Maldições Avançadas** (1 Ação Padrão | 2 PM)
Compartilha a mesma lista de Maldições do Xamã (Perseguidor, Definhar, Malogro), porém o Bruxo possui um domínio superior e pode manter até 2 maldições simultaneamente em oponentes distintos (ou acumuladas). Conjurar uma terceira dissipa a primeira.

**Habilidade Suprema de Arcana**
*   **Peste Inevitável** (Ação Padrão | 1 Ponto de Arcana): O seu rancor se espalha como uma praga. Escolha uma das suas Maldições (Perseguidor, Definhar ou Malogro). Em vez de afetar um único alvo, você lança essa maldição sobre todos os inimigos presentes em uma Área Média ao seu redor. Os testes de Magia + Controle para se livrarem dela nos turnos subsequentes são feitos com 1 Desvantagem (-1d6).

---

#### ⚙️ Caminho: Artífice
Inventor tático que aprimora permanentemente equipamentos do grupo.

**Habilidades**
*   **Projeto Especial:** Você pode trabalhar na criação de um Artefato único em colaboração com o Narrador, que definirá a Dificuldade e o tempo necessário para o projeto.
*   **Melhoria de Equipamento:** Durante um Descanso Longo, você pode realizar manutenção e melhorar até 2 itens do seu grupo. Os efeitos duram até o próximo descanso longo e não se acumulam:
    *   **Afiar:** A arma passa a causar +2 de dano.
    *   **Balancear:** A arma ganha +1 na rolagem de Acerto.
    *   **Reforçar:** A armadura/escudo ganha +1 de Redução de Dano.
*   **Escrita Arcana** (Ritual de 1 hora | 4 PM): Imprime selos rúnicos latentes em equipamentos, válidos até o próximo descanso longo. Durante o combate, o usuário da arma/armadura pode gastar 1 PM para ativar o selo inscrito:
    *   **Runa de Fogo (Arma):** Ativa antes ou depois de acertar; causa +2 de dano de fogo.
    *   **Runa de Água (Defesa):** Aumenta a Defesa em +2 até o próximo turno do usuário.
    *   **Runa de Terra (Defesa):** Concede +2 de Redução de Dano até o próximo turno do usuário.
    *   **Runa de Ar (Defesa):** Ao sofrer dano corpo a corpo, empurra o atacante 3 Espaços para trás imediatamente, sem provocar reações.

**Habilidade Suprema de Arcana**
*   **Sobrecarga de Engenho** (Ação de Movimento | 1 Ponto de Arcana): Você força os mecanismos e runas aos seus limites. Até o final do combate, todos os benefícios de Melhoria de Equipamento (Afiar, Balancear, Reforçar) que você aplicou na sua equipe são dobrados (ex: uma arma afiada passa a dar +4 de dano em vez de +2). Além disso, ativar qualquer selo da sua Escrita Arcana passa a custar 0 PM para os seus aliados.

---

#### 🃏 Caminho: Cartomante
Manipulação pura da probabilidade mística e canalização por meio de um baralho arcano.

**Baralho do Destino**
Você canaliza seus poderes sacando cartas aleatórias. Seu baralho possui 12 cartas. Quando o deck acabar, é necessário um Ritual de 4 horas para recarregá-lo de mana. Sempre que usar a habilidade, role 1d12 para determinar a carta puxada:

| Resultado no d12 | Tipo de Carta | Efeito do Saque |
| :--- | :--- | :--- |
| **1 a 5** | Carta de Maldição | Ativa Malogro (desvantagens) ou Perseguidor (dano mental). |
| **6 a 11** | Carta de Combate | Dispara um ataque mágico (toque ou distância Média) que causa 6 de dano base se acertar. |
| **12** | Arcano Maior | Escolha um de quatro milagres: **Carrasco** (Corta o PV atual do alvo pela metade), **Madrona** (Cura o alvo totalmente e fornece +6 de Proteção (PR)), **Valete** (Invoca uma Entidade poderosa aliada para a cena), ou **Rainha** (Restaura 12 Pontos de Mana (PM) do alvo). |

**Habilidade Suprema de Arcana**
*   **As Cartas Não Mentem (O Destino Certo)** (Ação Livre ao usar a habilidade "Baralho do Destino" | 1 Ponto de Arcana): Seu baralho se torna infinito até o final da cena. Você pode puxar 2 cartas e escolher uma (você rola 2d12 e escolhe qualquer um dos resultados).

---

#### 🧬 Caminho: Metamorfo
Baseia-se na autotransmutação celular imediata para ganhar traços animais.

**Habilidade**
*   **Mutação** (1 Ação Padrão | 4 PM): Altera violentamente a sua biologia. Apenas 1 mutação pode ser mantida por vez:
    *   **Alada:** Desenvolve asas. Você adquire a Ação de Movimento Alçar Voo (move-se pelo ar em sua velocidade padrão) e a Ação Padrão Planar (para permanecer suspenso no mesmo lugar sem cair). Armaduras pesadas impedem o voo.
    *   **Ofensiva:** Cresce garras, caudas perfurantes ou chifres. O primeiro ataque corpo a corpo feito no seu turno recebe 1 Vantagem e causa +1d4 de dano físico.
    *   **Defensiva:** Pele engrossa ou brotam escamas espessas. Você recebe +2 de Redução de Dano (PR) permanente enquanto mantido.

**Habilidade Suprema de Arcana**
*   **A Quimera Apex** (Ação Padrão | 1 Ponto de Arcana): Seu corpo quebra o limite biológico, fundindo todas as suas evoluções. Até o final da cena, você ativa as três mutações (Alada, Ofensiva e Defensiva) simultaneamente, sem gastar nenhum PM para isso. Seu corpo se torna uma máquina de caça perfeita: enquanto estiver voando, seus ataques corpo a corpo ignoram a Cobertura Leve.

---

#### 🕊️ Caminho: Clérigo
Mestres da cura milagrosa, proteção de grupo e purificação física/espiritual.

**Magias**
*   **Cura** (1 Ação Complexa | 3 PM): Pelo toque, você restaura 3 + 1d4 + (2x Atributo Magia) Pontos de Vida de um aliado. (Melhorias modulares: +2 PM estende a cura a um aliado adjacente ao alvo; +2 PM permite conjurar a uma distância Média; +2 PM adiciona mais 1d4 na rolagem de cura).
*   **Bênção** (1 Ação Padrão | 2 PM): Canaliza mana positiva em um aliado a alcance Curto. Ele recebe 1 Vantagem na próxima rolagem ou teste que realizar. (Melhoria: Por +2 PM, abençoa um aliado extra).

**Habilidade Suprema de Arcana**
*   **Intervenção Milagrosa** (Reação Instantânea | 1 Ponto de Arcana | Gatilho: Quando um aliado em alcance Médio tiver seus PVs reduzidos a 0): Antes que o aliado caia, um feixe de luz arcana o atinge. Ele não cai; em vez disso, seus Pontos de Vida são totalmente restaurados para o valor máximo instantaneamente, e o aliado recebe um bônus de +2 Vantagens no seu próximo turno como resultado.

---

#### 🎭 Caminho: Ilusionista
Criadores de falsas realidades, iscas visuais e projeções aterrorizantes.

**Magia**
*   **Ilusão** (1 Ação Padrão | 4 PM): Conjura um construto áudio/visual em alcance Médio. Inimigos que tiverem linha de visão para a ilusão devem passar em um teste de Mental + Vontade ou sofrerão o efeito de engano:
    *   **Monstruosa:** Alvos creem ver uma criatura irreal terrível. Gastarão suas ações atacando-a ou fugindo dela.
    *   **Desorientadora:** O cenário gira e distorce. Alvos sentem náuseas, perdendo a Ação de Movimento no próximo turno e sofrendo 1 Desvantagem (-1d6) em ataques à distância (físicos ou mágicos).
    *   **Distração:** Pequenos enganos constantes fadigam a mente. O alvo sofre 2 Desvantagens (-2d6) em testes físicos e rolagens de ataque.

**Habilidade Suprema de Arcana**
*   **Realidade Fraturada** (Ação Livre ao conjurar a magia "Ilusão" | 1 Ponto de Arcana): A linha entre o real e o falso colapsa. Até o final da cena, a sua ilusão ganha forma física e letal. Inimigos que falharem no teste de Mental + Vontade não sofrem apenas efeitos narrativos e desvantagens; eles passam a sofrer 2d4 + seu Atributo de Magia em dano psíquico/físico direto no início de seus turnos, enquanto continuarem engajados ou acreditando na Ilusão.

---

#### 🪕 Caminho: Bardo
Especialistas na condução de canções mágicas e melodias rúnicas que manipulam o fluxo de combate.

**Habilidades e Magias**
*   **Sifra Destoante** (1 Ação Padrão | 2 PM): Um ataque mágico sonoro que força o alvo a um teste de Mental + Vontade. Em caso de falha, sofre 2 + 2d4 + Atributo de Magia de dano mental direto.
*   **Refrão de Inspiração** (1 Ação Complexa | 4 PM): Você entoa uma melodia heróica encorajando até 3 aliados em alcance Curto. Eles recebem 1 Vantagem no próximo teste que realizarem. (Melhorias: +1 PM inclui mais 1 aliado; +2 PM propaga a melodia até alcance Médio).
*   **Verso de Conforto** (1 Ação Padrão | 3 PM): Um cantar suave que acalma a mente em alcance Médio. O alvo regenera 1d4 de cura e é purificado de 1 efeito ou condição psicológica ativa (medo, desorientação, etc). (Melhoria: +2 PM permite confortar 1 alvo adicional).

**Habilidade Suprema de Arcana**
*   **Opus Magnum (A Grande Sinfonia)** (Ação Padrão | 1 Ponto de Arcana): Você inicia uma canção que se torna uma aura viva em torno de você. Pelo resto da cena, você emana a Opus Magnum em uma Área Média ao seu redor (a aura se move com você). Todo aliado que iniciar o turno dentro dessa área é purificado automaticamente de todas as condições negativas e ganha +1 Ação Rápida e +2 na Proteção enquanto estiver na zona de som.

---

### Apêndice C: Condições de Combate

No campo de batalha mágico, as Condições alteram drasticamente as capacidades físicas, sensoriais e místicas dos personagens.

#### Condições Físicas (Mobilidade e Defesa)
*   **Caído:** O alvo está no chão. Seu deslocamento cai para 0 e ele deve gastar uma Ação de Movimento para se levantar. Enquanto estiver Caído, ataques corpo a corpo contra ele recebem 1 Vantagem (+1d4), e ataques à distância sofrem 1 Desvantagem (-1d4).
*   **Imobilizado:** O alvo está preso (por raízes, gelo, estase). Seu deslocamento torna-se 0 e ele não pode ser empurrado ou puxado. Não pode realizar ações que exijam as pernas e sofre 1 Desvantagem (-1d4) em testes de Físico (Destreza).
*   **Desarmado:** O alvo deixou cair seu catalisador ou arma. Ele não pode realizar ataques marciais ou conjurar feitiços que exijam aquele foco. Recolher o item do chão custa 1 Ação de Movimento.

#### Condições Sensoriais e Mentais (Percepção e Foco)
*   **Cego:** A visão foi anulada. O alvo falha em testes de Percepção baseados em visão, sofre 1 Desvantagem (-1d4) em rolagens de ataque e feitiços, e atacantes recebem 1 Vantagem (+1d4) contra ele.
*   **Surdo:** A audição foi anulada. O alvo falha em testes baseados em som, fica imune a magias de comando de voz ou encantos cantados, e sofre 1 Desvantagem (-1d4) em testes de Iniciativa.
*   **Desorientado:** Mente atordoada. O alvo não consegue se focar, sofrendo 1 Desvantagem (-1d4) em ataques e magias, não pode usar Reações e só recebe 1 Ação (Padrão ou de Movimento) no seu turno.
*   **Assustado:** Medo irracional. O alvo sofre 1 Desvantagem (-1d4) em todos os testes e ataques enquanto a fonte do medo estiver visível, e não pode se aproximar voluntariamente dela.

#### Condições Mágicas e de Degradação
*   **Silenciado:** Cordas vocais bloqueadas. Não pode conjurar magias que exijam componentes verbais.
*   **Dano Contínuo (Queimando, Sangrando, Envenenado):** O alvo sofre dano fixo no início de seus turnos (ignora RD). Dura o tempo especificado ou até ser tratado (gastando 1 turno para apagar o fogo/estancar ferimento).
*   **Esgotado:** Limite físico/mental. O personagem sofre 1 Desvantagem (-1d4) para qualquer teste realizado.

#### Regras Gerais de Resolução
*   **Não Cumulativas:** Efeitos da mesma condição não se acumulam; apenas reiniciam a duração.
*   **Sobreposição:** Vantagens (+1d4) e Desvantagens (-1d4) se anulam mutuamente.
*   **Fim do Efeito:** A maioria das condições dura até o final do próximo turno do causador ou exige ações específicas para remoção (ex: levantar-se ou apagar chamas).

