import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateAppendix() {
    let md = '\n## Apêndice A: A Forja Arcana (Lista de Runas)\n\n';

    md += `### Formatos Místicos (Base)\n`;
    md += `- **Toque ou Aura** (0 PM): Afeta você ou criatura em contato corporal.\n`;
    md += `- **Projétil Mágico** (1 PM): Viaja até atingir alvo primário em Alcance Curto.\n`;
    md += `- **Raio Contínuo** (2 PM): Linha reta que atinge até 2 alvos alinhados.\n`;
    md += `- **Explosão em Área** (3 PM): Área Pequena (3x3).\n\n`;

    const { RUNES_BY_GRAU } = await import('file://' + path.resolve(__dirname, './src/data/runas.js'));

    for (const grau in RUNES_BY_GRAU) {
        const g = RUNES_BY_GRAU[grau];
        md += `### ${g.title}\n`;
        md += `_${g.nature}_\n\n`;
        
        md += `**Runas de Condição**\n`;
        g.conditionRunes.forEach(r => {
            let line = `- **${r.name}** (${r.cost}): ${r.desc}`;
            if (r.scale) line += ` *↑ Escala: ${r.scale}*`;
            md += line + '\n';
        });
        
        md += `\n**Modificadores**\n`;
        g.modifiers.forEach(r => {
            md += `- **${r.name}** (${r.cost}): ${r.desc}\n`;
        });
        
        md += `\n**Runas Específicas por Arcana**\n`;
        g.customRunes.forEach(ar => {
            md += `- **Arcana: ${ar.element.trim()}**\n`;
            ar.runes.forEach(r => {
                let line = `  - **${r.name}** (${r.cost}): ${r.desc}`;
                if (r.scale) line += ` *↑ Escala: ${r.scale}*`;
                md += line + '\n';
            });
        });
        md += `\n`;
    }

    const mdPath = 'C:\\Users\\lpfon\\.gemini\\antigravity-ide\\brain\\2282974b-99cd-4ffe-bc53-94cf1afd566f\\regras_doze_arcanas.md';
    let content = fs.readFileSync(mdPath, 'utf-8');
    const parts = content.split('## Apêndice A: A Forja Arcana (Lista de Runas)');
    content = parts[0] + md;
    fs.writeFileSync(mdPath, content, 'utf-8');
    console.log("Markdown atualizado.");
}

generateAppendix().catch(console.error);
