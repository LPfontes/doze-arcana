const fs = require('fs');

const content = fs.readFileSync('src/sections/Caminhos.jsx', 'utf-8');
const lines = content.split('\n');

let summary = '';
let currentCaminho = '';
let currentSpec = '';

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Look for Caminho tabs/headers
    // Looking for activeCaminho matches or Spec buttons
    const specMatch = line.match(/onClick=\{\(\) => switchSpec\('([^']+)'\)\}/);
    if (specMatch) {
        // Find the text of the button
        let textLine = lines[i+1] || '';
        let nameMatch = textLine.match(/>([^<]+)<\/span>/);
        if(nameMatch) {
            currentSpec = nameMatch[1].trim();
            summary += `\n## Especialização: ${currentSpec} (${specMatch[1]})\n`;
        }
    }
    
    const h4Match = line.match(/<h4 className="text-lg font-bold[^>]*>(.*?)<\/h4>/);
    if (h4Match) {
        // It's a talent
        const name = h4Match[1].replace(/<[^>]+>/g, '').trim();
        summary += `\n### Talento: ${name}\n`;
        
        // Read next lines to get the effect
        for (let j = i + 1; j < i + 15 && j < lines.length; j++) {
            if (lines[j].includes('Efeito:')) {
                // Extract effect text
                let effectLine = lines[j];
                // it might span multiple lines
                let fullEffect = '';
                for(let k = j; k < j+10; k++) {
                    fullEffect += lines[k] + ' ';
                    if (lines[k].includes('</p>')) break;
                }
                const effectText = fullEffect.replace(/<[^>]+>/g, '').replace('Efeito:', '').trim();
                summary += `- Efeito: ${effectText}\n`;
                break;
            }
        }
    }
}

fs.writeFileSync('caminhos_summary.md', summary);
console.log('Summary created.');
