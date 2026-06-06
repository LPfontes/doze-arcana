import React from 'react';

export default function Introduction() {
 return (
 <section id="sec-mecanicas" className="content-section">
 <h2 className="text-3xl border-b-2 border-magic-100 pb-2 mb-4">1. Mecânicas Centrais de Teste</h2>
 <p className="mb-4">Todas as incertezas mecânicas e conflitos do sistema são resolvidos através de Testes de Atributo. A amplitude numérica básica varia de 2 a 24, com uma média esperada de 13.</p>

 <ul className="space-y-2">
 <li><strong>Teste Comum</strong><br />O resultado é a soma de <code
 className="bg-gray-100 px-1 rounded text-magic-800 font-semibold">2d12 + Atributo</code>.
 </li>
 <li><strong>Teste Especializado</strong><br />Utilizado quando o personagem possui treinamento na Perícia exigida. Adiciona-se 1d12 extra para cada ponto (P) na Perícia, mantendo apenas os dois maiores valores rolados. O resultado final é a soma desses <code
 className="bg-gray-100 px-1 rounded text-magic-800 font-semibold"><br />2 maiores d12 + Atributo</code>.
 </li>
 <li><strong>Vantagens e Desvantagens</strong><br />São modificadores situacionais que se anulam entre si. Uma Vantagem adiciona <strong>1d6</strong>à rolagem. Uma Desvantagem subtrai <strong>1d6</strong>da rolagem. Em caso de acúmulo de Vantagens, rola-se a quantidade total de d6s e aplica-se apenas o maior resultado.</li>
 <li style={{ backgroundColor: "rgba(220, 20, 60, 0.5)" }}><strong>Falha Crítica (1 e 1)</strong><br />Representa uma falha garantida com consequências negativas e circunstâncias desfavoráveis.</li>
 <li style={{ backgroundColor: "rgba(126, 252, 0, 0.5)" }}><strong>Acerto Crítico (12 e 12)</strong><br />Representa um sucesso garantido, gerando bônus e vantagens adicionais para a cena.</li>
 </ul>
 </section>
 );
}
