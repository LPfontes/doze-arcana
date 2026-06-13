import React from 'react';

export default function Attributes() {
 return (
 <section id="sec-atributos" className="content-section">
      <h2 className="text-3xl font-serif font-black text-magic-900 mb-6 pb-2 border-b-2 border-indigo-100 flex items-center gap-3">
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-lg text-2xl">2</span>
        Atributos e Perícias
      </h2>
 <p className="mb-4">O sistema divide as capacidades dos personagens em quatro pilares fundamentais,
 cada um com três perícias associadas.</p>

 <div className="overflow-x-auto">
 <table>
 <thead>
 <tr>
 <th>Atributo</th>
 <th>Descrição</th>
 <th>Perícias</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td className="font-bold text-magic-800">Físico</td>
 <td>Representa a capacidade física e a resistência corporal.</td>
 <td>Força, Destreza, Vigor.</td>
 </tr>
 <tr>
 <td className="font-bold text-magic-800">Social</td>
 <td>Mede a presença, influência e capacidade de articulação verbal.</td>
 <td>Persuadir, Enganar, Intimidar.</td>
 </tr>
 <tr>
 <td className="font-bold text-magic-800">Mental</td>
 <td>Define o intelecto, o foco psicológico e a capacidade analítica.</td>
 <td>Conhecimento, Percepção, Vontade.</td>
 </tr>
 <tr>
 <td className="font-bold text-magic-800">Magia</td>
 <td>Representa a intuição mágica, manufatura mística e canalização de Mana.</td>
 <td>Controle, Compreensão, Ofício.</td>
 </tr>
 </tbody>
 </table>
 </div>
 </section>
 );
}
