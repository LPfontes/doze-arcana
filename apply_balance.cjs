import fs from 'fs';

let text = fs.readFileSync('src/sections/Caminhos.jsx', 'utf8');

// Function to replace within a specific substring
function replaceInBlock(startMarker, endMarker, replacements) {
    const startIndex = text.indexOf(startMarker);
    if (startIndex === -1) {
        console.error("Could not find start marker: " + startMarker);
        return;
    }
    const endIndex = text.indexOf(endMarker, startIndex);
    if (endIndex === -1) {
        console.error("Could not find end marker: " + endMarker);
        return;
    }
    
    let block = text.substring(startIndex, endIndex);
    for (const [search, replace] of replacements) {
        block = block.replace(search, replace);
    }
    
    text = text.substring(0, startIndex) + block + text.substring(endIndex);
}

// 1. Encantar
replaceInBlock('<h5 className="font-bold text-xl text-magic-900 font-serif">Encantar</h5>', 'Grau III', [
    ['2 Ações Padrões', '1 Ação Padrão'],
    ['2 Ações Padrões', '1 Ação Padrão'], // twice (one in the icon, one in the text)
    ['3 PM', '2 PM'],
    ['3 PM', '2 PM'], // twice
    ['>1 Ação Padrão<', '>1 Ação de Movimento<'],
    ['mantendo 3 PM', 'mantendo 2 PM']
]);

// Encantar Grau III text is below Grau III marker, so we do another pass
replaceInBlock('<span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>', '</div>', [
    ['Ação de Movimento', 'Ação Livre']
]);

// 2. Acelerar
replaceInBlock('<h5 className="font-bold text-xl text-magic-900 font-serif">Acelerar</h5>', '<h5', [
    ['2 Ações Padrões', '1 Ação Padrão'],
    ['2 Ações Padrões', '1 Ação Padrão'],
    ['>1 Ação Padrão<', '>1 Ação de Movimento<']
]);

// 3. Disparo Energizado
replaceInBlock('<h5 className="font-bold text-xl text-magic-900 font-serif">Disparo Energizado</h5>', '<h5', [
    ['2 Ações Padrões', '1 Ação Padrão'],
    ['2 Ações Padrões', '1 Ação Padrão'],
    ['3 PM', '2 PM'],
    ['3 PM', '2 PM'],
    ['>1 Ação Padrão<', '>1 Ação de Movimento<'],
    ['mantendo 3 PM', 'mantendo 2 PM']
]);

// 4. Toque da Atrofia
replaceInBlock('<h5 className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Toque da Atrofia</h5>', '<h5', [
    ['2 Ações Padrões', '1 Ação Padrão'],
    ['4 PM', '3 PM'],
    ['2 Ações Padrões (4 PM)', '1 Ação Padrão (3 PM)'],
    ['>1 Ação Padrão (3 PM)<', '>1 Ação de Movimento (2 PM)<']
]);

// 5. Chicote Psíquico
replaceInBlock('<h5 className="font-bold text-xl text-magic-900 font-serif text-purple-950">Chicote Psíquico</h5>', '<h5', [
    ['2 Ações Padrões', '1 Ação Padrão'],
    ['2 Ações Padrões (3 PM)', '1 Ação Padrão (3 PM)'],
    ['>1 Ação Padrão<', '>1 Ação de Movimento<']
]);


fs.writeFileSync('src/sections/Caminhos.jsx', text, 'utf8');
console.log("Done updating Caminhos.jsx");
