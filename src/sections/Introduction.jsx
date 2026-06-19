import React from 'react';

export default function Introduction() {
  return (
    <section id="sec-mecanicas" className="content-section">
      <h2 className="chapter-title">
        <span className="chapter-number">1</span>
        Mecânicas Centrais de Teste
      </h2>
      <p className="mb-4">Todas as incertezas mecânicas e conflitos do sistema são resolvidos através de Testes de Atributo. A amplitude numérica básica varia de 2 a 12, com uma média esperada de 7.</p>

      <ul className="space-y-2">
        <li><strong>Teste Comum</strong><br />O resultado é a soma de <code
          className="bg-gray-100 px-1 rounded text-magic-800 font-semibold">2d6 + Atributo</code>.
        </li>
        <li><strong>Teste Especializado</strong><br />Utilizado quando o personagem possui treinamento na Perícia exigida. Adiciona-se 1d6 extra por possuir o treinamento (totalizando 3d6), mantendo apenas os dois maiores valores rolados. Não existem pontos de Perícia, apenas o fato de ter ou não o treinamento. Um aluno começa tendo 2 treinamentos, dificilmente passa de 3, mas é possível trocá-los (algo que não é praticado acaba se perdendo). O resultado final é a soma desses <code
          className="bg-gray-100 px-1 rounded text-magic-800 font-semibold"><br />2 maiores d6 + Atributo</code>.
        </li>
        <li><strong>Vantagens e Desvantagens</strong><br />São modificadores situacionais que se anulam entre si. Uma Vantagem adiciona <strong>1d4</strong> à rolagem. Uma Desvantagem subtrai <strong>1d4</strong> da rolagem. Em caso de acúmulo de Vantagens, rola-se a quantidade total de d4s e aplica-se apenas o maior resultado.</li>
        <li style={{ backgroundColor: "rgba(220, 20, 60, 0.5)" }}><strong>Falha Crítica (1 e 1)</strong><br />Representa uma falha garantida com consequências negativas e circunstâncias desfavoráveis.</li>
        <li style={{ backgroundColor: "rgba(126, 252, 0, 0.5)" }}><strong>Acerto Crítico (6 e 6)</strong><br />Representa um sucesso garantido, gerando bônus e vantagens adicionais para a cena.</li>
      </ul>
    </section>
  );
}
