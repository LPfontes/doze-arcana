const fs = require('fs');

let text = fs.readFileSync('src/sections/Caminhos.jsx', 'utf8');

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
        block = block.replaceAll(search, replace);
    }
    
    text = text.substring(0, startIndex) + block + text.substring(endIndex);
}

replaceInBlock('<h5 className="font-bold text-xl text-magic-900 font-serif">Encantar</h5>', 'Grau III', [
    ['2 Ações Padrões', '1 Ação Padrão'],
    ['3 PM', '2 PM'],
    ['>1 Ação Padrão<', '>1 Ação de Movimento<'],
    ['mantendo 3 PM', 'mantendo 2 PM']
]);

// Special case for Encantar Grau III
const grau3Marker = '<span className="font-bold text-indigo-950 block mb-0.5">Grau III (Mestre):</span>';
let startIndex = text.indexOf('<h5 className="font-bold text-xl text-magic-900 font-serif">Encantar</h5>');
let g3Start = text.indexOf(grau3Marker, startIndex);
let g3End = text.indexOf('</div>', g3Start);
let block = text.substring(g3Start, g3End);
block = block.replace('Ação de Movimento', 'Ação Livre');
text = text.substring(0, g3Start) + block + text.substring(g3End);

replaceInBlock('<h5 className="font-bold text-xl text-magic-900 font-serif">Acelerar</h5>', '<h5', [
    ['2 Ações Padrões', '1 Ação Padrão'],
    ['>1 Ação Padrão<', '>1 Ação de Movimento<']
]);

replaceInBlock('<h5 className="font-bold text-xl text-magic-900 font-serif">Disparo Energizado</h5>', '<h5', [
    ['2 Ações Padrões', '1 Ação Padrão'],
    ['3 PM', '2 PM'],
    ['>1 Ação Padrão<', '>1 Ação de Movimento<'],
    ['mantendo 3 PM', 'mantendo 2 PM']
]);

replaceInBlock('<h5 className="font-bold text-xl text-magic-900 font-serif text-emerald-950">Toque da Atrofia</h5>', '<h5', [
    ['2 Ações Padrões', '1 Ação Padrão'],
    ['4 PM', '3 PM'],
    ['>1 Ação Padrão (3 PM)<', '>1 Ação de Movimento (2 PM)<']
]);

replaceInBlock('<h5 className="font-bold text-xl text-magic-900 font-serif text-purple-950">Chicote Psíquico</h5>', '<h5', [
    ['2 Ações Padrões', '1 Ação Padrão'],
    ['>1 Ação Padrão<', '>1 Ação de Movimento<']
]);

fs.writeFileSync('src/sections/Caminhos.jsx', text, 'utf8');
console.log("Done updating Caminhos.jsx");
