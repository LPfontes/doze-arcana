import React from 'react';

export default function CriacaoAluno() {
  return (
    <section id="sec-criacao" className="content-section">
      <h2 className="text-3xl font-serif font-black text-magic-900 mb-6 pb-2 border-b-2 border-indigo-100 flex items-center gap-3">
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-lg text-2xl">3</span>
        Criando a Ficha de Aluno
      </h2>
      <p className="mb-4">
        A jornada de um estudante na escola de magia começa pela sua origem e seus laços. A ficha de aluno documenta as características vitais que definem quem o personagem é antes mesmo de suas notas ou habilidades.
      </p>

      <h3 className="text-2xl text-magic-800 mt-8 mb-3 font-serif font-bold border-l-4 border-indigo-500 pl-3">O Patrono</h3>
      <p className="mb-4 text-gray-700 leading-relaxed">
        O primeiro elemento de destaque da ficha de um aluno é o <strong>Patrono</strong>. Ele representa alguém de grande importância na vida do estudante.
      </p>
      
      <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 my-4 shadow-sm">
        <ul className="space-y-3 list-none">
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 mt-1">✦</span>
            <div>
              <strong className="text-indigo-900">Figuras Próximas:</strong> Pode ser um parente poderoso e influente, ou um mago famoso que enxergou um potencial raro em você.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 mt-1">✦</span>
            <div>
              <strong className="text-indigo-900">Figuras Distantes:</strong> O lorde ou líder da sua terra natal, que financia e patrocina jovens promissores em troca de lealdade futura.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 mt-1">✦</span>
            <div>
              <strong className="text-indigo-900">Figuras Acadêmicas:</strong> Um professor da própria escola de magia que o tomou como tutelado particular, ou até mesmo um aluno veterano de grande prestígio.
            </div>
          </li>
        </ul>
      </div>

      <p className="mb-4 mt-6 text-gray-700">
        Seu Patrono funciona como um gancho vivo para o Mestre: ele pode fornecer recursos e proteção política, mas também cobrar favores e enviar missões extracurriculares.
      </p>

      <hr className="my-8 border-gray-200" />

      <h3 className="text-2xl text-magic-800 mt-8 mb-3 font-serif font-bold border-l-4 border-indigo-500 pl-3">Objetivos e Motivações</h3>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Seu personagem não é uma folha em branco; ele é alguém vivo no mundo, com <strong>sonhos e motivações</strong> muito reais. Essas motivações refletem diretamente os objetivos que você busca alcançar durante seu tempo na escola de magia.
      </p>

      <div className="bg-amber-50/50 border border-amber-200/60 rounded-xl p-5 mb-8">
        <h4 className="font-serif font-bold text-amber-900 mb-2">Exemplos de Motivações:</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-amber-500 mt-0.5">⭐</span>
            <span><strong>Aprovação:</strong> Satisfazer as altas expectativas impostas pelo seu Patrono ou família.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 mt-0.5">🛡️</span>
            <span><strong>Proteção:</strong> Ganhar poder mágico forte o suficiente para proteger pessoas importantes do seu passado.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 mt-0.5">👑</span>
            <span><strong>Ambição Pura:</strong> Tornar-se um Mago Supremo apenas pela glória, título e reconhecimento inquestionável.</span>
          </li>
        </ul>
      </div>

      <hr className="my-8 border-gray-200" />

      <h3 className="text-2xl text-magic-800 mt-8 mb-3 font-serif font-bold border-l-4 border-indigo-500 pl-3">A Raça</h3>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Em geral, as Raças não conferem discrepâncias numéricas gigantescas ou poderes desbalanceados; elas fornecem a <strong>base cultural da sua interpretação</strong> e estipulam a sua faísca mágica original. 
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6 mb-8">
        {/* Elfos */}
        <div className="bg-emerald-50/40 border border-emerald-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300">
          <h4 className="font-serif font-bold text-xl text-emerald-900 mb-2 flex items-center gap-2">
            <span className="text-2xl drop-shadow-sm">🌿</span> Elfos
          </h4>
          <p className="text-sm text-emerald-950/80 mb-5 leading-relaxed min-h-[60px]">
            As espécies primordiais do mundo, dotadas de uma ligação profunda, serena e natural com o fluxo das Arcanas.
          </p>
          <div className="bg-white border border-emerald-100 p-3.5 rounded-xl text-sm shadow-inner">
            <strong className="text-emerald-800 block mb-1.5 uppercase text-[10px] tracking-wider font-bold">Conexão Inata</strong>
            <span className="text-gray-700">
              Inicia com <strong>uma Runa de Grau 1</strong> das Arcanas:<br/>
              <span className="inline-block mt-1 font-medium text-emerald-900">Fogo, Vento, Vida ou Vazio.</span>
            </span>
          </div>
        </div>

        {/* Humanos */}
        <div className="bg-blue-50/40 border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300">
          <h4 className="font-serif font-bold text-xl text-blue-900 mb-2 flex items-center gap-2">
            <span className="text-2xl drop-shadow-sm">⚔️</span> Humanos
          </h4>
          <p className="text-sm text-blue-950/80 mb-5 leading-relaxed min-h-[60px]">
            Os mais numerosos. Suas vidas curtas fazem com que sejam intensos, passionais e irredutíveis em suas convicções.
          </p>
          <div className="bg-white border border-blue-100 p-3.5 rounded-xl text-sm shadow-inner">
            <strong className="text-blue-800 block mb-1.5 uppercase text-[10px] tracking-wider font-bold">Conexão Inata</strong>
            <span className="text-gray-700">
              Inicia com <strong>uma Runa de Grau 1</strong> das Arcanas:<br/>
              <span className="inline-block mt-1 font-medium text-blue-900">Luz, Água, Ordem ou Caos.</span>
            </span>
          </div>
        </div>

        {/* Anões */}
        <div className="bg-amber-50/40 border border-amber-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300">
          <h4 className="font-serif font-bold text-xl text-amber-900 mb-2 flex items-center gap-2">
            <span className="text-2xl drop-shadow-sm">⛰️</span> Anões
          </h4>
          <p className="text-sm text-amber-950/80 mb-5 leading-relaxed min-h-[60px]">
            Compartilham origens com os elfos, mas são atarracados, com personas fortes, destemidos e cabeça-duras.
          </p>
          <div className="bg-white border border-amber-100 p-3.5 rounded-xl text-sm shadow-inner">
            <strong className="text-amber-800 block mb-1.5 uppercase text-[10px] tracking-wider font-bold">Conexão Inata</strong>
            <span className="text-gray-700">
              Inicia com <strong>uma Runa de Grau 1</strong> das Arcanas:<br/>
              <span className="inline-block mt-1 font-medium text-amber-900">Terra, Escuridão, Vínculo ou Isolamento.</span>
            </span>
          </div>
        </div>

        {/* Feéricos */}
        <div className="bg-fuchsia-50/40 border border-fuchsia-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-fuchsia-300 transition-all duration-300">
          <h4 className="font-serif font-bold text-xl text-fuchsia-900 mb-2 flex items-center gap-2">
            <span className="text-2xl drop-shadow-sm">🦋</span> Feéricos
          </h4>
          <p className="text-sm text-fuchsia-950/80 mb-5 leading-relaxed min-h-[60px]">
            Seres travessos nascidos de bolsões de mana do Crepúsculo. Guiam-se por intuição pura e são mestres das sutilezas emocionais.
          </p>
          <div className="bg-white border border-fuchsia-100 p-3.5 rounded-xl text-sm shadow-inner">
            <strong className="text-fuchsia-800 block mb-1.5 uppercase text-[10px] tracking-wider font-bold">Conexão Inata</strong>
            <span className="text-gray-700">
              Inicia com <strong>uma Runa de Grau 1</strong> de livre escolha entre qualquer uma das <br/>
              <span className="inline-block mt-1 font-medium text-fuchsia-900">Seis Arcanas Espirituais.</span>
            </span>
          </div>
        </div>

        {/* Drakin */}
        <div className="bg-rose-50/40 border border-rose-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-rose-300 transition-all duration-300">
          <h4 className="font-serif font-bold text-xl text-rose-900 mb-2 flex items-center gap-2">
            <span className="text-2xl drop-shadow-sm">🐉</span> Drakin
          </h4>
          <p className="text-sm text-rose-950/80 mb-5 leading-relaxed min-h-[60px]">
            Herdeiros do sangue de dragões ancestrais. Possuem escamas esparsas pelo corpo, um orgulho inabalável e grande ferocidade.
          </p>
          <div className="bg-white border border-rose-100 p-3.5 rounded-xl text-sm shadow-inner">
            <strong className="text-rose-800 block mb-1.5 uppercase text-[10px] tracking-wider font-bold">Conexão Inata</strong>
            <span className="text-gray-700">
              Inicia com <strong>uma Runa de Grau 1</strong> de livre escolha entre qualquer uma das <br/>
              <span className="inline-block mt-1 font-medium text-rose-900">Seis Arcanas Elementais.</span>
            </span>
          </div>
        </div>

        {/* Quiméricos */}
        <div className="bg-violet-50/40 border border-violet-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-violet-300 transition-all duration-300">
          <h4 className="font-serif font-bold text-xl text-violet-900 mb-2 flex items-center gap-2">
            <span className="text-2xl drop-shadow-sm">👁️</span> Quiméricos
          </h4>
          <p className="text-sm text-violet-950/80 mb-5 leading-relaxed min-h-[60px]">
            Mestiços ou indivíduos tocados por fortes anomalias arcanas. Carregam mutações físicas e um fluxo de mana instável e caótico.
          </p>
          <div className="bg-white border border-violet-100 p-3.5 rounded-xl text-sm shadow-inner">
            <strong className="text-violet-800 block mb-1.5 uppercase text-[10px] tracking-wider font-bold">Conexão Inata</strong>
            <span className="text-gray-700">
              Inicia com <strong>uma Runa de Grau 1</strong> de <br/>
              <span className="inline-block mt-1 font-medium text-violet-900">Qualquer Arcana (Livre Escolha).</span>
              <br/><span className="text-[10px] uppercase tracking-wider text-violet-600 mt-1 block">Requer aprovação narrativa.</span>
            </span>
          </div>
        </div>
      </div>
      <hr className="my-8 border-gray-200" />

      <h3 className="text-2xl text-magic-800 mt-8 mb-3 font-serif font-bold border-l-4 border-indigo-500 pl-3">Os Atributos Iniciais</h3>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Com sua origem definida, o próximo passo é estipular as suas capacidades fundamentais. Em Doze Arcanas, existem quatro pilares que definem o seu personagem: <strong>Físico, Social, Mental e Magia</strong>.
      </p>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-8 relative overflow-hidden">
        {/* Decorator */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full pointer-events-none"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div>
            <h4 className="font-serif text-lg text-indigo-900 font-bold mb-3 flex items-center gap-2">
              <span className="text-xl">⚖️</span> Sistema de Pontos
            </h4>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              Os atributos de um personagem sempre variam numa escala de <strong>-3 a +3</strong>. 
            </p>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              Todos os seus quatro atributos <strong>começam em 0</strong>. Como um aluno iniciante, você tem um total de <strong>3 pontos</strong> para distribuir livremente entre eles, podendo colocar até um máximo de 3 pontos em um único atributo (ex: Físico +2, Magia +1, Social 0, Mental 0).
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-rose-900 font-bold mb-3 flex items-center gap-2">
              <span className="text-xl">📉</span> Sacrifícios e Foco
            </h4>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              Se você quiser um personagem ainda mais focado, você pode optar por <strong>diminuir atributos</strong> abaixo de zero. 
            </p>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              Para cada ponto que você subtrair de um atributo (até o limite de -3), você ganha <strong>1 ponto extra</strong> para colocar em outro atributo, desde que nenhum deles ultrapasse o limite máximo de +3 ou o mínimo de -3.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-slate-50 border border-slate-100 rounded-xl p-4">
          <p className="text-xs text-slate-500 font-mono text-center">
            <strong>Exemplo Extremo:</strong> Um feiticeiro brilhante mas muito frágil poderia começar com:<br/>
            <span className="text-indigo-700 font-bold">Magia +3</span> | <span className="text-blue-700 font-bold">Mental +2</span> | <span className="text-amber-700 font-bold">Social -1</span> | <span className="text-rose-700 font-bold">Físico -1</span>
          </p>
        </div>
      </div>

      <h3 className="text-2xl text-magic-800 mt-8 mb-3 font-serif font-bold border-l-4 border-indigo-500 pl-3">Evolução de Atributos</h3>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Não existe uma tabela mecânica rígida para ganhar pontos de atributos matando monstros. Em <em>Doze Arcanas</em>, a evolução é intimamente ligada ao tempo que o aluno investe na academia.
      </p>

      <div className="bg-indigo-50/40 border border-indigo-100 rounded-xl p-5 mb-8">
        <ul className="space-y-4 text-sm text-gray-700">
          <li className="flex gap-3">
            <span className="text-lg">⏳</span>
            <div>
              <strong className="text-indigo-900 block mb-0.5">Longo Prazo Narrativo</strong>
              O aluno pode dedicar parte do seu dia a dia e tempo livre para estudar avidamente na biblioteca (Mental), treinar o corpo na Forja (Físico), etc. É recomendado alinhar esse desejo com o Mestre. A evolução de um ponto de atributo é um processo demorado que costuma acontecer apenas <strong>ao final de cada período letivo (o equivalente a 6 meses de tempo no mundo do jogo)</strong>.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-lg">🌟</span>
            <div>
              <strong className="text-indigo-900 block mb-0.5">O Limite do Potencial</strong>
              Embora atributos individuais variem de -3 a +3, a <strong>soma total de todos os atributos</strong> de um personagem dificilmente ultrapassa o valor de <strong>6</strong>. Apenas magos e seres verdadeiramente extraordinários e lendários chegam a patamares superiores a isso em seu ápice.
            </div>
          </li>
        </ul>
      </div>

      <hr className="my-8 border-gray-200" />

      <h3 className="text-2xl text-magic-800 mt-8 mb-3 font-serif font-bold border-l-4 border-indigo-500 pl-3">O Caminho Inicial</h3>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Além das Arcanas e Atributos, todo aluno iniciante possui conhecimento tático e prático focado em uma área de atuação. 
      </p>
      
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm mb-8 hover:shadow-md transition-all duration-300">
        <h4 className="font-serif text-lg text-indigo-900 font-bold mb-3 flex items-center gap-2">
          <span className="text-xl">📜</span> Escolha e Coerência Narrativa
        </h4>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Na criação do personagem, você inicia sabendo o <strong>Nível 1 de uma Especialização de Caminho</strong> (Lâmina, Metamorfo, Ilusionista, etc). Você é livre para escolher qual talento busca desenvolver inicialmente.
        </p>

        <div className="bg-amber-50/50 border-l-4 border-amber-400 p-4 rounded-r-lg text-sm text-gray-700">
          <p className="mb-2"><strong>Importante:</strong> A sua escolha de Caminho <strong>deve refletir a sua narrativa e rotina</strong> dentro da academia.</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Dificilmente um aluno que gasta seus dias trancado na biblioteca estudando teoria desenvolverá o Nível 1 em um Caminho puramente físico, como o do <strong>Combatente</strong>.</li>
            <li>Da mesma forma, um atleta que passa os dias focando no esporte e nos treinos de luta corporal não fará sentido ganhar um nível em um Caminho do <strong>Mentalista</strong>.</li>
          </ul>
        </div>
      </div>

      <h4 className="font-serif text-lg text-indigo-900 font-bold mb-3 flex items-center gap-2 mt-6">
        <span className="text-xl">📈</span> Evolução nos Caminhos
      </h4>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Assim como a evolução dos atributos, o avanço para o <strong>Nível 2 e Nível 3</strong> de um Caminho não ocorre por um acúmulo genérico de pontos de experiência, mas é ditado pelo progresso da sua narrativa.
      </p>

      <div className="bg-indigo-50/40 border border-indigo-100 rounded-xl p-5 mb-8">
        <ul className="space-y-4 text-sm text-gray-700">
          <li className="flex gap-3">
            <span className="text-lg">🎯</span>
            <div>
              <strong className="text-indigo-900 block mb-0.5">Recompensas e Treinamento</strong>
              Aprender um novo nível em um Caminho exige tempo e esforço dedicado. Um nível pode ser destravado como <strong>recompensa por completar missões difíceis</strong>, conquistar o acesso a mestres excepcionais, ou encontrar grimórios e manuais perdidos relacionados à sua especialização. Esse avanço exige bastante tempo de prática.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-lg">🔀</span>
            <div>
              <strong className="text-indigo-900 block mb-0.5">Múltiplos Caminhos</strong>
              O aluno não está preso a um único Caminho pelo resto da vida. Ele é totalmente <strong>livre para aprender e ter mais de um Caminho</strong> ao mesmo tempo (iniciando os novos Caminhos no Nível 1), desde que sua narrativa de treino justifique como ele adquiriu e pratica essas novas habilidades diversificadas.
            </div>
          </li>
        </ul>
      </div>

    </section>
  );
}
