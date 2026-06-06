const fs = require('fs');

const file = 'src/sections/Grimorio.jsx';
let code = fs.readFileSync(file, 'utf8');

// Replace Duração: X. or Duração: X inside desc
code = code.replace(/desc:\s*'Duração:\s*([^.]+)[.]([^']*)'/g, "time: '$1', desc: '$2'");
// In some cases, Duração is not followed by a period. Let's see: 'Duração:1 Rodada Aprisiona o alvo...'
code = code.replace(/desc:\s*'Duração:\s*([^A-Z]*)([A-Z][^']*)'/g, "time: '$1', desc: '$2'");
// Let's just use a custom function
code = code.replace(/desc:\s*'([^']*)'/g, (match, descStr) => {
    let timeStr = null;
    let newDescStr = descStr.trim();

    if (newDescStr.startsWith('Duração:')) {
        const parts = newDescStr.split('.');
        const firstPart = parts[0];
        timeStr = firstPart.replace('Duração:', '').trim();
        newDescStr = parts.slice(1).join('.').trim();
        if (!newDescStr && parts.length === 1) {
            // handle cases without period
            const m = newDescStr.match(/^Duração:\s*(\d+\s*[a-zA-Z]+)(.*)/i);
            if (m) {
                timeStr = m[1].trim();
                newDescStr = m[2].trim();
            }
        }
    }
    
    // Sometimes it's like 'Falha: perde 3 Pontos de Proteção (PR) 1 Rodada.'
    // Let's not try to be too smart about those unless they have "Duração:"
    // actually, let's fix them manually or with regex.

    if (timeStr) {
        // cleanup any trailing colon or hyphen or period from time
        timeStr = timeStr.replace(/^[-\s:]+/, '').trim();
        return `time: '${timeStr}', desc: '${newDescStr}'`;
    }
    return match;
});

// Update the render
code = code.replace(
    /<div className="flex flex-wrap gap-2 mb-1.5 items-center">([\s\S]*?)<\/div>/g,
    (match, inner) => {
        if (!inner.includes('r.time')) {
            return `<div className="flex flex-wrap gap-2 mb-1.5 items-center">${inner}\n                                                        {r.time && <span className="text-[9px] font-sans text-sky-700 font-semibold">⌛ Time: {r.time}</span>}\n                                                    </div>`;
        }
        return match;
    }
);

code = code.replace(
    /<p className="text-\[10px\] text-gray-500 font-semibold mb-1">Efeito: \{cr.type\}<\/p>/g,
    `<p className="text-[10px] text-gray-500 font-semibold mb-1">Efeito: {cr.type}</p>\n                                                                {cr.time && <p className="text-[10px] text-sky-700 font-semibold mb-1">⌛ Time: {cr.time}</p>}`
);

fs.writeFileSync(file, code, 'utf8');
console.log('Done');
