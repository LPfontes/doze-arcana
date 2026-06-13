const fs = require('fs');

const content = fs.readFileSync('src/sections/Caminhos.jsx', 'utf-8');
const lines = content.split('\n');

let summary = '# Resumo dos Caminhos e Talentos\n\n';

let currentH4 = '';

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Find Specialization
    const specMatch = line.match(/<h4 className="font-bold text-lg text-magic-900 font-serif">(.*?)<span/);
    if (specMatch) {
        currentH4 = specMatch[1].trim();
        summary += `\n## ${currentH4}\n`;
    }

    // Find Talent Name
    const h5Match = line.match(/<h5 className="font-bold text-xl[^"]*">(.*?)<\/h5>/);
    if (h5Match) {
        let name = h5Match[1].replace(/<[^>]+>/g, '').trim();
        summary += `\n### Talento: ${name}\n`;
        
        // Find Effect and Graus
        let effectFound = false;
        for (let j = i + 1; j < i + 50 && j < lines.length; j++) {
            if (lines[j].includes('Efeito:')) {
                let effect = lines[j].replace(/<[^>]+>/g, '').replace('Efeito:', '').trim();
                summary += `**Efeito Base:** ${effect}\n`;
                effectFound = true;
            }
            if (lines[j].includes('Grau I (Base):')) {
                let text = lines[j+1].replace(/<[^>]+>/g, '').trim();
                summary += `- **Grau I:** ${text}\n`;
            }
            if (lines[j].includes('Grau II (Avançado):')) {
                let text = lines[j+1].replace(/<[^>]+>/g, '').trim();
                summary += `- **Grau II:** ${text}\n`;
            }
            if (lines[j].includes('Grau III (Mestre):')) {
                let text = lines[j+1].replace(/<[^>]+>/g, '').trim();
                summary += `- **Grau III:** ${text}\n`;
                break; // stop searching for this talent
            }
        }
    }
}

fs.writeFileSync('C:\\Users\\lpfon\\.gemini\\antigravity-ide\\brain\\2282974b-99cd-4ffe-bc53-94cf1afd566f\\caminhos_extracted.md', summary);
console.log('Done!');
