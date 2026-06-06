import React, { useState, useEffect } from 'react';

// Hardcoded data mapping for the Spell Forging System
const TAGS_DATA = {
 // Alcance
 toque: { id: 'toque', name: 'Toque', type: 'alcance', cost: 0, slot: false, desc: 'Alcance Toque / Pessoal (0 metros). O custo é nulo porque o risco é máximo.' },
 curto: { id: 'curto', name: 'Alcance Curto', type: 'alcance', cost: 2, slot: true, desc: 'Alcance Curto (Até 6m / 6 quadrados). Exige esforço para projetar arcana pelo ar.' },
 medio: { id: 'medio', name: 'Alcance Médio', type: 'alcance', cost: 4, slot: true, desc: 'Alcance Médio (Até 12m / 12 quadrados). Permite se posicionar de forma segura.' },
 longo: { id: 'longo', name: 'Alcance Longo', type: 'alcance', cost: 6, slot: true, desc: 'Alcance Longo (Até 24m / 24 quadrados). Projetado para artilharia pesada.' },

 // Área
 nenhuma: { id: 'nenhuma', name: 'Alvo Único', type: 'area', cost: 0, slot: false, desc: 'Afeta apenas o alvo primário selecionado.' },
 pequena: { id: 'pequena', name: 'Área Pequena', type: 'area', cost: 2, slot: true, desc: 'Área Pequena de 3x3 quadrados (~3m de diâmetro). Permite punir alvos adjacentes.' },
 media: { id: 'media', name: 'Área Média', type: 'area', cost: 4, slot: true, desc: 'Área Média de 6x6 quadrados (~6m de diâmetro). Controle de ambiente com risco de fogo amigo.' },
 grande: { id: 'grande', name: 'Área Grande', type: 'area', cost: 6, slot: true, desc: 'Área Grande de 9x9 quadrados (~9m de diâmetro). Explosão massiva ideal para dizimar hordas.' },

 // Alvo
 unico: { id: 'unico', name: 'Alvo Único', type: 'alvo', cost: 0, slot: false, desc: 'Comportamento padrão, atinge uma criatura ou ponto específico.' },
 gemeo: { id: 'gemeo', name: 'Alvo Gêmeo', type: 'alvo', cost: 2, slot: true, desc: 'A magia se divide. Atinja um 2º alvo dentro do Alcance. Realize rolagens separadas.' },
 seletivo: { id: 'seletivo', name: 'Alvo Seletivo', type: 'alvo', cost: 2, slot: true, desc: 'Aliados na área iguais ou menores que seu atributo de Magia ignoram o dano/efeitos.' },
 inevitavel: { id: 'inevitavel', name: 'Alvo Inevitável', type: 'alvo', cost: 4, slot: true, desc: 'A magia persegue e contorna coberturas, quinas e ignora camuflagem ou ilusões.' },
 chuva: { id: 'chuva', name: 'Chuva de Alvos', type: 'alvo', cost: 4, slot: true, desc: 'A magia fragmenta. Atinja até 4 alvos no Alcance. Compare uma única rolagem contra as defesas.' },

 // Efeitos - Leão
 fogo: { id: 'fogo', name: 'Runa de Fogo (ign) (Queimadura)', type: 'efeito', house: 'leao', cost: 0, slot: true, test: 'Físico Agilidade', desc: 'As chamas grudam no alvo. No início dos próximos 2 turnos dele, ele sofre 1d6 de dano direto (ignora PR). Sucesso: sofre apenas 3 de dano de fogo.' },
 luz: { id: 'luz', name: 'Runa de Luz (Lit) (Ofuscamento)', type: 'efeito', house: 'leao', cost: 0, slot: true, test: 'Físico Vigor', desc: 'Clarão queima as retinas. O alvo fica Cego até o fim do próximo turno, e +1 Vantagem para ataques contra ele até o final do seu próximo turno. Sucesso: não fica cego mas ataques contra ele têm +1 Vantagem até seu próximo turno.' },
 ordem: { id: 'ordem', name: 'Runa de Ordem (proto) (Supressão)', type: 'efeito', house: 'leao', cost: 0, slot: true, test: 'Magia Controle', desc: 'A gravidade esmaga o alvo. Ele perde Reações e tem movimento reduzido a 0 pelos próximos 2 turnos. Sucesso: Não perde Reações mas movimento é reduzido pela metade por 1 turno.' },

 // Efeitos - Árvore
 terra: { id: 'terra', name: 'Runa de Terra (ro) (Tremor / Esmagamento)', type: 'efeito', house: 'arvore', cost: 0, slot: true, test: 'Físico Agilidade', desc: 'Pedras e raízes restringem o alvo. Ele fica Impedido até o final do seu próximo turno. Sucesso: movimento reduzido pela metade.' },
 vida: { id: 'vida', name: 'Runa de Vida (lar) (Sifão Vital)', type: 'efeito', house: 'arvore', cost: 0, slot: true, test: 'Físico Vigor', desc: 'Rouba energia. Metade do dano causado aos PVs do alvo é revertido como cura para o conjurador ou aliado adjacente. Sucesso: alvo sofre apenas metade do dano.' },
 vinculo: { id: 'vinculo', name: 'Runa de Vínculo (vic) (Marca do Caçador)', type: 'efeito', house: 'arvore', cost: 0, slot: true, test: 'Magia Controle', desc: 'Fios de mana se prendem. Todos os ataques contra este inimigo recebem +1 Vantagem (+1d6) e +2 de dano bônus. Sucesso: O alvo sofre apenas 3 de dano.' },

 // Efeitos - Engrenagem
 vento: { id: 'vento', name: 'Runa de Vento (ar) (Lançamento Turbulento)', type: 'efeito', house: 'engrenagem', cost: 0, slot: true, test: 'Físico Agilidade', desc: 'Uma lufada empurra o alvo em até 4q (4m) em qualquer direção. Sofre 3 de dano extra se colidir com paredes ou inimigos. Sucesso: Fica apenas Derrubado no mesmo lugar.' },
 isolamento: { id: 'isolamento', name: 'Runa de Isolamento (nim) (Prisão de Estase)', type: 'efeito', house: 'engrenagem', cost: 0, slot: true, test: 'Mental Vontade', desc: 'Espaço endurece como vidro. Ele fica Imobilizado, não pode ser curado ou receber buffs de aliados até o final do seu próximo turno. Sucesso: O alvo sofre apenas 3 de dano.' },
 caos: { id: 'caos', name: 'Runa de Caos (kat) (Desorientação Mágica)', type: 'efeito', house: 'engrenagem', cost: 0, slot: true, test: 'Magia Controle', desc: 'Magia em curto-circuito. No próximo turno dele, o original feitiço custa o dobro de PM. Se não tiver PM suficiente, falha. Sucesso: O alvo tem +1 de desvantagem neste turno.' },

 // Efeitos - Noite
 agua: { id: 'agua', name: 'Runa de Água (flu) (Hipotermia / Lerdeza)', type: 'efeito', house: 'noite', cost: 0, slot: true, test: 'Físico Vigor', desc: 'Frio nos ossos. O limite de ações do inimigo cai de 3 PA para 2 PA até o final do seu próximo turno.' },
 escuridao: { id: 'escuridao', name: 'Runa de Escuridão (Ru) (Terror Sombrio)', type: 'efeito', house: 'noite', cost: 0, slot: true, test: 'Mental Vontade', desc: 'Alvo fica cego e surdo, recebe desvantagem em ataques e fica impedido de conjurar magias até o final do seu próximo turno. Sucesso: +1 desvantagem neste turno.' },
 vazio: { id: 'vazio', name: 'Runa de Vazio (vat) (Exaustão)', type: 'efeito', house: 'noite', cost: 0, slot: true, test: 'Mental Vontade', desc: 'Drena a energia do alvo para o vazio. Ele fica Debilitado até o final do seu próximo turno. Sucesso: sofre apenas 3 de dano.' }
};

export default function Forja({ showToast }) {
 // State management matching original logic
 const [category, setCategory] = useState('simple');
 const [name, setName] = useState('Lança de Gelo Básica');
 const [formato, setFormato] = useState('Raio');
 const [alcance, setAlcance] = useState('medio');
 const [area, setArea] = useState('nenhuma');
 const [alvo, setAlvo] = useState('unico');
 const [efetivos, setEfetivos] = useState([]);
 const [houseTab, setHouseTab] = useState('leao');
 const [potencia, setPotencia] = useState({
 foco: 0,
 quebra: false,
 sobrecarga: 0,
 guiada: false,
 acelerada: false,
 ricochete: false
 });
 const [savedSpells, setSavedSpells] = useState([]);

 // Max slots depending on category
 const maxSlots = category === 'simple' ? 3 : 6;
 const basePM = category === 'simple' ? 2 : 4;

 // Load saved spells from localStorage on mount
 useEffect(() => {
 try {
 const json = localStorage.getItem('grimorio_spells');
 if (json) {
 setSavedSpells(JSON.parse(json));
 }
 } catch (e) {
 console.error("Failed to load saved spells from localStorage", e);
 }
 }, []);

 // Sync state input field
 const handleNameChange = (e) => {
 setName(e.target.value || 'Feitiço Sem Nome');
 };

 const handleFormatoChange = (e) => {
 setFormato(e.target.value);
 };

 // Slots calculations
 const getSlotsUsed = () => {
 let slots = 0;
 if (TAGS_DATA[alcance] && TAGS_DATA[alcance].slot) slots++;
 if (TAGS_DATA[area] && TAGS_DATA[area].slot) slots++;
 if (TAGS_DATA[alvo] && TAGS_DATA[alvo].slot) slots++;
 slots += efetivos.length;
 slots += potencia.foco;
 slots += potencia.sobrecarga;
 if (potencia.quebra) slots++;
 if (potencia.guiada) slots++;
 if (potencia.acelerada) slots++;
 if (potencia.ricochete) slots++;
 return slots;
 };

 const slotsUsed = getSlotsUsed();

 // Reset helpers to fit slot restrictions on category switch
 const resetModifiersToFit = (targetCategory, currentEfetivos, currentPotencia, currentAlvo, currentArea, currentAlcance) => {
 const limit = targetCategory === 'simple' ? 3 : 6;
 let tempAlvo = currentAlvo;
 let tempArea = currentArea;
 let tempAlcance = currentAlcance;
 let tempEfetivos = [...currentEfetivos];
 let tempPotencia = { ...currentPotencia };

 const getTempSlots = () => {
 let slots = 0;
 if (TAGS_DATA[tempAlcance] && TAGS_DATA[tempAlcance].slot) slots++;
 if (TAGS_DATA[tempArea] && TAGS_DATA[tempArea].slot) slots++;
 if (TAGS_DATA[tempAlvo] && TAGS_DATA[tempAlvo].slot) slots++;
 slots += tempEfetivos.length;
 slots += tempPotencia.foco;
 slots += tempPotencia.sobrecarga;
 if (tempPotencia.quebra) slots++;
 if (tempPotencia.guiada) slots++;
 if (tempPotencia.acelerada) slots++;
 if (tempPotencia.ricochete) slots++;
 return slots;
 };

 while (getTempSlots() >limit) {
 if (tempPotencia.ricochete) { tempPotencia.ricochete = false; continue; }
 if (tempPotencia.acelerada) { tempPotencia.acelerada = false; continue; }
 if (tempPotencia.guiada) { tempPotencia.guiada = false; continue; }
 if (tempPotencia.quebra) { tempPotencia.quebra = false; continue; }
 if (tempPotencia.sobrecarga > 0) { tempPotencia.sobrecarga--; continue; }
 if (tempPotencia.foco > 0) { tempPotencia.foco--; continue; }
 if (tempEfetivos.length > 0) { tempEfetivos.pop(); continue; }
 if (tempAlvo !== 'unico') { tempAlvo = 'unico'; continue; }
 if (tempArea !== 'nenhuma') { tempArea = 'nenhuma'; continue; }
 if (tempAlcance !== 'toque') { tempAlcance = 'toque'; continue; }
 break;
 }

 setAlvo(tempAlvo);
 setArea(tempArea);
 setAlcance(tempAlcance);
 setEfetivos(tempEfetivos);
 setPotencia(tempPotencia);
 };

 const handleCategorySwitch = (cat) => {
 setCategory(cat);
 if (cat === 'simple' && getSlotsUsed() > 3) {
 resetModifiersToFit('simple', efetivos, potencia, alvo, area, alcance);
 showToast("Categoria alterada. Algumas runas foram removidas para caber nos 3 slots!");
 }
 };

 // Modifiers selection with slot restriction check
 const setAlcanceWithLimit = (alc) => {
 const currentAlc = alcance;
 const isCurSlot = TAGS_DATA[currentAlc].slot;
 const isNewSlot = TAGS_DATA[alc].slot;
 let delta = 0;
 if (!isCurSlot && isNewSlot) delta = 1;
 if (isCurSlot && !isNewSlot) delta = -1;

 if (delta > 0 && slotsUsed >= maxSlots) {
 showToast("Limite de slots atingido! Não é possível alterar o alcance.");
 return;
 }
 setAlcance(alc);
 };

 const setAreaWithLimit = (ar) => {
 const currentArea = area;
 const isCurSlot = TAGS_DATA[currentArea].slot;
 const isNewSlot = TAGS_DATA[ar].slot;
 let delta = 0;
 if (!isCurSlot && isNewSlot) delta = 1;
 if (isCurSlot && !isNewSlot) delta = -1;

 if (delta > 0 && slotsUsed >= maxSlots) {
 showToast("Limite de slots atingido! Não é possível alterar a área.");
 return;
 }
 setArea(ar);
 };

 const setAlvoWithLimit = (alv) => {
 const currentAlvo = alvo;
 const isCurSlot = TAGS_DATA[currentAlvo].slot;
 const isNewSlot = TAGS_DATA[alv].slot;
 let delta = 0;
 if (!isCurSlot && isNewSlot) delta = 1;
 if (isCurSlot && !isNewSlot) delta = -1;

 if (delta > 0 && slotsUsed >= maxSlots) {
 showToast("Limite de slots atingido! Não é possível alterar o alvo.");
 return;
 }
 setAlvo(alv);
 };

 const toggleEffectWithLimit = (effId) => {
 const isSelected = efetivos.includes(effId);
 if (isSelected) {
 setEfetivos(efetivos.filter(id =>id !== effId));
 } else {
 // Net slot delta is 1 minus active effects count (capped at 1 active effect)
 const potentialSlots = slotsUsed - efetivos.length + 1;
 if (potentialSlots >maxSlots) {
 showToast("Limite de slots atingido! Remova alguma runa primeiro.");
 return;
 }
 setEfetivos([effId]);
 }
 };

 const changePowerLevelWithLimit = (power, val) => {
 const curVal = potencia[power];
 const newVal = Math.max(0, curVal + val);

 if (newVal >curVal && slotsUsed >= maxSlots) {
 showToast("Limite de slots atingido!");
 return;
 }

 setPotencia({
 ...potencia,
 [power]: newVal
 });
 };

 const toggleCheckboxWithLimit = (power) => {
 const cur = potencia[power];
 if (!cur && slotsUsed >= maxSlots) {
 showToast("Limite de slots atingido!");
 return;
 }
 setPotencia({
 ...potencia,
 [power]: !cur
 });
 };

 // Mana Calculation
 const calculatePM = () => {
 let pm = basePM;
 pm += TAGS_DATA[alcance].cost;
 pm += TAGS_DATA[area].cost;
 pm += TAGS_DATA[alvo].cost;
 pm += potencia.foco * 1;
 pm += potencia.sobrecarga * 2;
 if (potencia.quebra) pm += 2;
 if (potencia.guiada) pm += 2;
 if (potencia.acelerada) pm += 3;
 if (potencia.ricochete) pm += 3;
 return pm;
 };

 const pmCost = calculatePM();

 // Spell Generators & Randomizers
 const randomizeName = () => {
 const prefixes = ["Lança", "Tempestade", "Sopro", "Chuva", "Raio", "Estouro", "Vórtice", "Bastião", "Prisão", "Sifão", "Esmagamento", "Fúria", "Presença", "Eco", "Chama", "Cascata", "Estilhaço", "Dardo", "Explosão"];
 const connectors = ["de", "da", "do", "etéreo de", "místico de", "infernal de", "glacial de"];
 const mid = ["Fogo", "Gelo", "Vento", "Terra", "Luz", "Sombra", "Vida", "Vazio", "Caos", "Ordem", "Ferrugem", "Estrelas", "Metal", "Cinzas", "Sangue"];
 const suffixes = ["dos Anciãos", "da Academia", "de Inverno", "dos Bastiões", "do Leão", "da Árvore", "da Engrenagem", "da Noite", "Devastador", "Primordial", "Absoluto", "Proibido"];

 const p = prefixes[Math.floor(Math.random() * prefixes.length)];
 const c = connectors[Math.floor(Math.random() * connectors.length)];
 const m = mid[Math.floor(Math.random() * mid.length)];
 const s = suffixes[Math.floor(Math.random() * suffixes.length)];

 setName(`${p} ${c} ${m} ${s}`);
 };

 // Persistence helpers
 const saveSpell = () => {
 const spell = {
 id: Date.now(),
 category,
 name,
 formato,
 alcance,
 area,
 efetivos: [...efetivos],
 potencia: { ...potencia },
 alvo,
 pm: pmCost,
 slots: slotsUsed
 };

 const updated = [...savedSpells, spell];
 setSavedSpells(updated);
 try {
 localStorage.setItem('grimorio_spells', JSON.stringify(updated));
 } catch (e) {
 console.error(e);
 }
 showToast(`Feitiço "${spell.name}" foi salvo em seu Grimório!`);
 };

 const loadSpell = (id) => {
 const spell = savedSpells.find(s =>s.id === id);
 if (!spell) return;

 setCategory(spell.category);
 setName(spell.name);
 setFormato(spell.formato);
 setAlcance(spell.alcance);
 setArea(spell.area);
 setEfetivos([...spell.efetivos]);
 setPotencia({ ...spell.potencia });
 setAlvo(spell.alvo);

 showToast(`Feitiço "${spell.name}" carregado na Forja!`);
 };

 const deleteSpell = (id, event) => {
 event.stopPropagation();
 const spell = savedSpells.find(s =>s.id === id);
 if (!spell) return;

 const updated = savedSpells.filter(s =>s.id !== id);
 setSavedSpells(updated);
 try {
 localStorage.setItem('grimorio_spells', JSON.stringify(updated));
 } catch (e) {
 console.error(e);
 }
 showToast(`Feitiço "${spell.name}" apagado do Grimório!`);
 };

 const copySpellText = () => {
 const catName = category === 'simple' ? 'Magia Simples (Feitiço de Batalha)' : 'Magia Complexa (Ritual Maior)';
 let damage = "3 + 1d6 + Magia";
 if (potencia.sobrecarga > 0) damage += ` + ${potencia.sobrecarga}d6`;

 let text = ` FEITIÇO: ${name.toUpperCase()} \n`;
 text += `• Categoria: ${catName}\n`;
 text += `• Formato Místico: ${formato || 'Nenhum'}\n`;
 text += `• Custo de Energia: ${pmCost} PM\n`;
 text += `• Tempo de Conjuração: ${potencia.acelerada ? '1 PA (Reduzido)' : '1 PA'}\n`;
 text += `• Slots de Runas Ocupados: ${slotsUsed} / ${maxSlots}\n`;
 text += `• Alcance: ${TAGS_DATA[alcance].name} (${alcance === 'toque' ? '0m' : alcance === 'curto' ? '6m' : alcance === 'medio' ? '12m' : '24m'})\n`;
 text += `• Área: ${TAGS_DATA[area].name}\n`;
 text += `• Seleção de Alvos: ${TAGS_DATA[alvo].name}\n`;
 text += `• Fórmula de Dano: ${damage}\n\n`;

 text += `--- EFEITOS DA MATRIZ MÁGICA ---\n`;
 if (efetivos.length === 0 && slotsUsed === 0) {
 text += `• Efeito Base: Nenhum efeito adicional selecionado.\n`;
 } else {
 efetivos.forEach(effId => {
 const eff = TAGS_DATA[effId];
 text += `• ${eff.name} [Teste: ${eff.test}]: ${eff.desc}\n`;
 });
 }

 if (potencia.foco > 0) {
 text += `• Foco Perfurante (Nív ${potencia.foco}): Ignora passivamente ${potencia.foco * 3} PR do alvo.\n`;
 }
 if (potencia.quebra) {
 text += `• Quebra-Escudos: Dano causado à Proteção (PR) é dobrado.\n`;
 }
 if (potencia.sobrecarga > 0) {
 text += `• Sobrecarga Arcana (Nív ${potencia.sobrecarga}): +${potencia.sobrecarga}d6 dano bruto.\n`;
 }
 if (potencia.guiada) {
 text += `• Precisão Guiada: +1 Vantagem na rolagem de ataque OU impõe -1 Desvantagem na resistência do inimigo.\n`;
 }
 if (potencia.ricochete) {
 text += `• Ricochete: A magia salta para um alvo secundário a até alcance Curto (6m) causando metade do dano e sem debuffs.\n`;
 }

 text += `\nGerado automaticamente pela Forja Arcana de Doze Arcanas.`;

 navigator.clipboard.writeText(text).then(() => {
 showToast("Copiado com sucesso para a Área de Transferência!");
 }).catch(err => {
 console.error(err);
 showToast("Erro ao copiar! Selecione e copie manualmente.");
 });
 };

 // Build Slots circles to render React-side
 const renderSlotsList = () => {
 let list = [];
 if (TAGS_DATA[alcance] && TAGS_DATA[alcance].slot) {
 list.push({ name: 'Alcance', bg: 'bg-cyan-600 border-cyan-500 shadow-cyan-500/20' });
 }
 if (TAGS_DATA[area] && TAGS_DATA[area].slot) {
 list.push({ name: 'Área', bg: 'bg-teal-600 border-teal-500 shadow-teal-500/20' });
 }
 if (TAGS_DATA[alvo] && TAGS_DATA[alvo].slot) {
 list.push({ name: 'Alvo', bg: 'bg-purple-600 border-purple-500 shadow-purple-500/20' });
 }
 efetivos.forEach(eff => {
 list.push({ name: TAGS_DATA[eff].name.split(' (')[0], bg: 'bg-orange-600 border-orange-500 shadow-orange-500/20' });
 });
 for (let i = 0; i < potencia.foco; i++) {
 list.push({ name: 'Foco Perf.', bg: 'bg-red-700 border-red-600 shadow-red-600/20' });
 }
 for (let i = 0; i < potencia.sobrecarga; i++) {
 list.push({ name: 'Sobrecarga', bg: 'bg-red-700 border-red-600 shadow-red-600/20' });
 }
 if (potencia.quebra) list.push({ name: 'Q. Escudo', bg: 'bg-red-700 border-red-600 shadow-red-600/20' });
 if (potencia.guiada) list.push({ name: 'Guiada', bg: 'bg-red-700 border-red-600 shadow-red-600/20' });
 if (potencia.acelerada) list.push({ name: 'Acelerada', bg: 'bg-red-700 border-red-600 shadow-red-600/20' });
 if (potencia.ricochete) list.push({ name: 'Ricochete', bg: 'bg-red-700 border-red-600 shadow-red-600/20' });
 return list;
 };

 const activeSlots = renderSlotsList();
 const progressPct = Math.min(100, (slotsUsed / maxSlots) * 100);
 const progressBarColor = slotsUsed >maxSlots ? 'bg-red-600' : slotsUsed === maxSlots ? 'bg-amber-500 animate-pulse' : 'bg-indigo-500';

 // House effects listed dynamically
 const activeHouseEffects = Object.values(TAGS_DATA).filter(t =>t.type === 'efeito' && t.house === houseTab);

 return (
 <section id="sec-forja" className="content-section">
 <h2 className="text-3xl border-b-2 border-magic-100 pb-2 mb-4">10. A Forja Arcana: Simulador de Runas e Feitiços</h2>
 <p className="mb-6 font-sans text-gray-700 leading-relaxed">Bem-vindo à <strong>Forja Arcana</strong>. Use este simulador interativo para estruturar, balancear e testar equações de magias.
 Escolha o formato místico, adicione as Runas desejadas de acordo com as Casas Acadêmicas e aplique Modificadores de Potência para ver o custo final em <strong>Pontos de Mana (PM)</strong>e conferir a viabilidade rúnica da sua criação.
 </p>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 font-sans">
 {/* LEFT PANEL: CONFIGURATION */}
 <div className="lg:col-span-5 space-y-6">
 
 {/* CATEGORIA DA MAGIA */}
 <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
 <h4 className="font-serif text-sm font-semibold text-indigo-300 uppercase tracking-wider">
 1. Categoria da Equação
 </h4>
 <div className="grid grid-cols-2 gap-4">
 <div
 onClick={() =>handleCategorySwitch('simple')}
 className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center text-center select-none ${
 category === 'simple'
 ? 'border-indigo-600 bg-indigo-950/20 shadow-md scale-100'
 : 'border-slate-800 bg-slate-950/40 hover:bg-slate-900 opacity-60 hover:-translate-y-0.5'
 }`}
 >
 <span className="text-lg mb-1 block"></span>
 <span className="text-sm font-bold text-indigo-100 block font-serif">Magia Simples</span>
 <span className="text-[10px] text-slate-400 mt-1 leading-tight font-sans">2 PM Base | 3 Slots Máx</span>
 </div>
 <div
 onClick={() =>handleCategorySwitch('complex')}
 className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center text-center select-none ${
 category === 'complex'
 ? 'border-amber-600 bg-amber-950/20 shadow-md scale-100'
 : 'border-slate-800 bg-slate-950/40 hover:bg-slate-900 opacity-60 hover:-translate-y-0.5'
 }`}
 >
 <span className="text-lg mb-1 block"></span>
 <span className="text-sm font-bold text-amber-100 block font-serif">Magia Complexa</span>
 <span className="text-[10px] text-slate-400 mt-1 leading-tight font-sans">4 PM Base | 6 Slots Máx</span>
 </div>
 </div>
 </div>

 {/* DADOS GERAIS */}
 <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4">
 <h4 className="font-serif text-sm font-semibold text-indigo-300 uppercase tracking-wider">
 2. Definições Primordiais
 </h4>
 <div className="space-y-3.5">
 <div>
 <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Nome do Feitiço
 </label>
 <div className="flex gap-2">
 <input
 type="text"
 value={name}
 onChange={handleNameChange}
 className="flex-1 bg-slate-950 border border-slate-800 text-indigo-50 text-xs py-2.5 px-3.5 rounded-xl focus:outline-none focus:border-indigo-500 font-medium"
 placeholder="Ex: Lança de Gelo Básica"
 />
 <button
 onClick={randomizeName}
 className="bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-indigo-300 rounded-xl px-3 flex items-center justify-center font-bold text-lg leading-none transition-colors focus:outline-none"
 title="Nome Aleatório"
 >
 
 </button>
 </div>
 </div>
 <div>
 <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Formato Místico (Estética)
 </label>
 <input
 type="text"
 value={formato}
 onChange={handleFormatoChange}
 className="w-full bg-slate-950 border border-slate-800 text-indigo-50 text-xs py-2.5 px-3.5 rounded-xl focus:outline-none focus:border-indigo-500 font-medium"
 placeholder="Ex: Raio, Projétil, Onda, Esfera..."
 />
 </div>
 </div>
 </div>

 {/* MODIFICADORES DE ESTRUTURA */}
 <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4">
 <h4 className="font-serif text-sm font-semibold text-indigo-300 uppercase tracking-wider">
 3. Parâmetros Físicos (Alcance, Área, Alvo)
 </h4>
 
 {/* Alcance */}
 <div className="space-y-2">
 <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Alcance do Feitiço</span>
 <div className="grid grid-cols-4 gap-1.5">
 {['toque', 'curto', 'medio', 'longo'].map(alc => (
 <button
 key={alc}
 onClick={() =>setAlcanceWithLimit(alc)}
 className={`py-2 px-1 text-center rounded-xl text-xs transition-all focus:outline-none ${
 alcance === alc
 ? 'bg-indigo-900 border-2 border-indigo-500 text-indigo-100 font-semibold shadow-inner'
 : 'bg-slate-950/50 border border-slate-800 text-slate-400 hover:text-slate-200 font-medium hover:bg-slate-950'
 }`}
 >
 {TAGS_DATA[alc].name.replace('Alcance ', '')}
 <span className="block text-[9px] text-green-400 font-mono mt-0.5">+{TAGS_DATA[alc].cost} PM</span>
 </button>
 ))}
 </div>
 </div>

 {/* Área */}
 <div className="space-y-2">
 <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Área de Efeito</span>
 <div className="grid grid-cols-4 gap-1.5">
 {['nenhuma', 'pequena', 'media', 'grande'].map(ar => (
 <button
 key={ar}
 onClick={() =>setAreaWithLimit(ar)}
 className={`py-2 px-1 text-center rounded-xl text-xs transition-all focus:outline-none ${
 area === ar
 ? 'bg-indigo-900 border-2 border-indigo-500 text-indigo-100 font-semibold shadow-inner'
 : 'bg-slate-950/50 border border-slate-800 text-slate-400 hover:text-slate-200 font-medium hover:bg-slate-950'
 }`}
 >
 {TAGS_DATA[ar].name.replace('Área ', '')}
 <span className="block text-[9px] text-green-400 font-mono mt-0.5">+{TAGS_DATA[ar].cost} PM</span>
 </button>
 ))}
 </div>
 </div>

 {/* Alvo */}
 <div className="space-y-2">
 <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Seleção de Alvos</span>
 <div className="grid grid-cols-5 gap-1">
 {['unico', 'gemeo', 'seletivo', 'inevitavel', 'chuva'].map(alv => (
 <button
 key={alv}
 onClick={() =>setAlvoWithLimit(alv)}
 className={`py-2 px-0.5 text-center rounded-xl text-[10px] transition-all focus:outline-none ${
 alvo === alv
 ? 'bg-indigo-900 border-2 border-indigo-500 text-indigo-100 font-semibold shadow-inner'
 : 'bg-slate-950/50 border border-slate-800 text-slate-400 hover:text-slate-200 font-medium hover:bg-slate-950'
 }`}
 >
 {TAGS_DATA[alv].name.split(' ')[1] || TAGS_DATA[alv].name}
 <span className="block text-[8px] text-green-400 font-mono mt-0.5">+{TAGS_DATA[alv].cost} PM</span>
 </button>
 ))}
 </div>
 </div>
 </div>
 </div>

 {/* MIDDLE PANEL: ACTIVE HOUSE EFFECTS & POWER MODIFIERS */}
 <div className="lg:col-span-7 space-y-6">
 
 {/* EFEITOS DE CASAS */}
 <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4">
 <div className="flex items-center justify-between gap-2 flex-wrap">
 <h4 className="font-serif text-sm font-semibold text-indigo-300 uppercase tracking-wider">
 4. Runas de Casas Acadêmicas
 </h4>
 <span className="text-xs text-green-400 font-mono">+0 PM | Limite: 1 Runa Arcana</span>
 </div>

 {/* Abas das Casas */}
 <div className="flex border-b border-slate-850 pb-2 gap-1 overflow-x-auto">
 {[
 { id: 'leao', icon: '', label: 'Leão' },
 { id: 'arvore', icon: '', label: 'Árvore' },
 { id: 'engrenagem', icon: '', label: 'Engrenagem' },
 { id: 'noite', icon: '', label: 'Noite' }
 ].map(house => (
 <button
 key={house.id}
 onClick={() =>setHouseTab(house.id)}
 className={`px-3 py-1.5 text-xs font-serif font-bold rounded-lg border focus:outline-none transition-all ${
 houseTab === house.id
 ? 'bg-indigo-900 border-indigo-700 text-indigo-100 shadow-md'
 : 'border-slate-800 text-slate-400 hover:text-slate-200 bg-slate-950/20'
 }`}
 >
 {house.icon} {house.label}
 </button>
 ))}
 </div>

 {/* Painel de Efeitos */}
 <div className="grid grid-cols-1 gap-2 pt-2">
 {activeHouseEffects.map(eff => {
 const isSelected = efetivos.includes(eff.id);
 return (
 <div
 key={eff.id}
 onClick={() =>toggleEffectWithLimit(eff.id)}
 className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 flex flex-col justify-between min-h-[90px] ${
 isSelected
 ? 'bg-indigo-950/50 border-indigo-600 shadow-lg text-indigo-100'
 : 'bg-slate-950/40 border-slate-850 text-slate-300 hover:border-slate-800'
 }`}
 >
 <div>
 <div className="flex items-center justify-between gap-1 mb-1">
 <span className="text-sm font-bold font-serif">{eff.name.split(' (')[0]}</span>
 {isSelected && (
 <span className="text-[9px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded uppercase font-mono font-semibold">Ativa
 </span>
 )}
 </div>
 <p className="text-xs text-slate-400 leading-snug font-sans">
 {eff.desc.split('Sucesso:')[0]}
 {eff.desc.includes('Sucesso:') && (
 <>
 <br />
 <strong className="text-emerald-400 font-semibold bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-900/30 mt-1.5 inline-block font-sans">Sucesso:
 </strong>
 {eff.desc.split('Sucesso:')[1]}
 </>
 )}
 </p>
 </div>
 <div className="flex justify-between items-center border-t border-slate-900 mt-2.5 pt-1.5 text-[10px]">
 <span className="text-indigo-400 font-mono font-semibold">Teste: {eff.test}</span>
 <span className="text-green-400 font-mono font-semibold">+0 PM</span>
 </div>
 </div>
 );
 })}
 </div>
 </div>

 {/* TAGS DE POTÊNCIA */}
 <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4">
 <h4 className="font-serif text-sm font-semibold text-indigo-300 uppercase tracking-wider">
 5. Runas de Potência (Modificadores)
 </h4>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
 
 {/* Foco Perfurante */}
 <div className="bg-slate-950/50 border border-slate-850 p-3 rounded-xl flex items-center justify-between gap-3">
 <div className="flex-1 min-w-0">
 <span className="text-xs font-bold block text-indigo-100">Foco Perfurante</span>
 <span className="text-[10px] text-slate-400 block leading-tight mt-0.5">Ignora 3 PR do alvo por nível</span>
 <span className="text-[10px] text-indigo-400 font-mono mt-0.5 block font-semibold">+1 PM | 1 Slot / Nível</span>
 </div>
 <div className="flex items-center gap-1.5">
 <button
 onClick={() =>changePowerLevelWithLimit('foco', -1)}
 className="w-6 h-6 bg-slate-900 hover:bg-slate-800 border border-slate-750 text-indigo-300 rounded flex items-center justify-center font-bold text-xs focus:outline-none"
 >
 -
 </button>
 <span className="w-5 text-center text-xs font-mono font-bold">{potencia.foco}</span>
 <button
 onClick={() =>changePowerLevelWithLimit('foco', 1)}
 className="w-6 h-6 bg-slate-900 hover:bg-slate-800 border border-slate-750 text-indigo-300 rounded flex items-center justify-center font-bold text-xs focus:outline-none"
 >
 +
 </button>
 </div>
 </div>

 {/* Sobrecarga Arcana */}
 <div className="bg-slate-950/50 border border-slate-850 p-3 rounded-xl flex items-center justify-between gap-3">
 <div className="flex-1 min-w-0">
 <span className="text-xs font-bold block text-indigo-100">Sobrecarga Arcana</span>
 <span className="text-[10px] text-slate-400 block leading-tight mt-0.5">Adiciona +1d6 dano por nível</span>
 <span className="text-[10px] text-indigo-400 font-mono mt-0.5 block font-semibold">+2 PM | 1 Slot / Nível</span>
 </div>
 <div className="flex items-center gap-1.5">
 <button
 onClick={() =>changePowerLevelWithLimit('sobrecarga', -1)}
 className="w-6 h-6 bg-slate-900 hover:bg-slate-800 border border-slate-750 text-indigo-300 rounded flex items-center justify-center font-bold text-xs focus:outline-none"
 >
 -
 </button>
 <span className="w-5 text-center text-xs font-mono font-bold">{potencia.sobrecarga}</span>
 <button
 onClick={() =>changePowerLevelWithLimit('sobrecarga', 1)}
 className="w-6 h-6 bg-slate-900 hover:bg-slate-800 border border-slate-750 text-indigo-300 rounded flex items-center justify-center font-bold text-xs focus:outline-none"
 >
 +
 </button>
 </div>
 </div>

 {/* Checkbox-based Power Modifiers */}
 {[
 { id: 'quebra', name: 'Quebra-Escudos', desc: 'Dano causado à Proteção (PR) é dobrado', pm: '+2 PM | 1 Slot' },
 { id: 'guiada', name: 'Precisão Guiada', desc: '+1 Vantagem ou -1 Resis. no inimigo', pm: '+2 PM | 1 Slot' },
 { id: 'acelerada', name: 'Conjuração Acelerada', desc: 'Reduz o custo em -1 PA (mínimo 1 PA)', pm: '+3 PM | 1 Slot' },
 { id: 'ricochete', name: 'Ricochete', desc: 'Salto a outro alvo em Alcance Curto', pm: '+3 PM | 1 Slot' }
 ].map(item => {
 const isSelected = potencia[item.id];
 return (
 <button
 key={item.id}
 onClick={() =>toggleCheckboxWithLimit(item.id)}
 className={`p-3 rounded-xl border text-left flex items-start justify-between gap-2 transition-all duration-200 ${
 isSelected
 ? 'bg-indigo-950/40 border-2 border-indigo-600 shadow-inner'
 : 'bg-slate-950/50 border border-slate-850 hover:bg-slate-950 hover:border-slate-700'
 }`}
 >
 <div className="flex-1 min-w-0">
 <span className="text-xs font-bold block text-indigo-100">{item.name}</span>
 <span className="text-[10px] text-slate-400 block leading-tight mt-0.5">{item.desc}</span>
 </div>
 <span className="text-[10px] text-indigo-400 font-mono font-semibold shrink-0">{item.pm}</span>
 </button>
 );
 })}
 </div>
 </div>
 </div>
 </div>

 {/* LOWER ROW: EQUATION PREVIEW AND GRIMORIO PERSISTENCE */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
 
 {/* EQUAÇÃO VISUAL E PREVIEW DO CARD */}
 <div className="lg:col-span-7 space-y-6">
 
 {/* EQUAÇÃO VISUAL (SLOTS PROGRESS) */}
 <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3 font-sans">
 <div className="flex items-center justify-between text-xs font-bold">
 <span className="font-serif text-indigo-300">Estrutura da Equação Mágica</span>
 <span className="font-mono text-indigo-400">{slotsUsed} / {maxSlots} Slots</span>
 </div>

 {/* Slots List Rendering */}
 <div className="grid grid-cols-6 gap-2">
 {Array.from({ length: maxSlots }).map((_, i) => {
 if (i < activeSlots.length) {
 const s = activeSlots[i];
 return (
 <div
 key={i}
 className={`h-10 rounded-xl border flex flex-col items-center justify-center text-center shadow-lg transition-transform ${s.bg}`}
 >
 <span className="text-[8px] font-sans font-bold leading-none uppercase text-white truncate max-w-full px-1">
 {s.name}
 </span>
 </div>
 );
 } else {
 return (
 <div
 key={i}
 className="h-10 rounded-xl border border-dashed border-slate-800 flex items-center justify-center bg-slate-950/20 text-slate-600 font-mono text-xs select-none"
 >
 [ {i + 1} ]
 </div>
 );
 }
 })}
 </div>

 {/* Progress Bar */}
 <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800 mt-2">
 <div
 className={`${progressBarColor} h-full transition-all duration-300`}
 style={{ width: `${progressPct}%` }}
 ></div>
 </div>
 </div>

 {/* SPELL CARD PREVIEW CARD */}
 <div className="bg-slate-950 border-2 border-indigo-500/25 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-md flex flex-col justify-between font-sans">
 <div className="absolute -top-10 -left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>

 <div>
 {/* Card Header */}
 <div className="flex justify-between items-start border-b border-indigo-900/60 pb-4 mb-4 gap-3">
 <div className="flex-1 min-w-0">
 <h4 className="font-serif text-xl md:text-2xl text-amber-400 font-bold leading-tight truncate">
 {name}
 </h4>
 <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mt-0.5">
 {category === 'simple' ? 'Magia Simples' : 'Magia Complexa'} | Formato: {formato || 'Nenhum'}
 </span>
 </div>
 {/* PM cost bubble */}
 <div className="flex-shrink-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full w-14 h-14 font-serif text-lg font-bold shadow-lg shadow-indigo-500/25">
 {pmCost}
 <span className="text-[10px] font-sans font-normal uppercase leading-none mt-0.5">PM</span>
 </div>
 </div>

 {/* Attributes Matrix */}
 <div className="grid grid-cols-2 gap-3 mb-5 text-xs bg-slate-900/40 p-3 rounded-xl border border-slate-900/80">
 <div>
 <span className="text-slate-500 block uppercase tracking-wider text-[9px] mb-0.5">Alcance</span>
 <span className="text-indigo-200 font-medium truncate block">
 {TAGS_DATA[alcance].name} ({alcance === 'toque' ? '0m' : alcance === 'curto' ? 'Até 6m' : alcance === 'medio' ? 'Até 12m' : 'Até 24m'})
 </span>
 </div>
 <div>
 <span className="text-slate-500 block uppercase tracking-wider text-[9px] mb-0.5">Área / Volume</span>
 <span className="text-indigo-200 font-medium truncate block">
 {TAGS_DATA[area].name} ({area === 'nenhuma' ? 'Único' : area === 'pequena' ? '3x3q' : area === 'media' ? '6x6q' : '9x9q'})
 </span>
 </div>
 <div>
 <span className="text-slate-500 block uppercase tracking-wider text-[9px] mb-0.5">Alvo</span>
 <span className="text-indigo-200 font-medium truncate block">
 {TAGS_DATA[alvo].name}
 </span>
 </div>
 <div>
 <span className="text-slate-500 block uppercase tracking-wider text-[9px] mb-0.5">Conjuração</span>
 <span className={`font-bold ${potencia.acelerada ? 'text-green-400' : 'text-amber-400'}`}>
 {potencia.acelerada ? '1 PA (Acelerado)' : '1 PA'}
 </span>
 </div>
 </div>

 {/* Damage Block */}
 <div className="mb-4 bg-indigo-950/20 border border-indigo-900/35 rounded-xl p-3 text-center">
 <span className="text-[9px] uppercase tracking-widest text-indigo-400 block font-semibold">Fórmula de Dano Estimada</span>
 <div className="font-serif text-lg text-indigo-200 font-bold mt-0.5">
 3 + 1d6 + Magia {potencia.sobrecarga > 0 && `+ ${potencia.sobrecarga}d6`}
 </div>
 </div>

 {/* Dynamic Descriptions list */}
 <div className="space-y-3 text-xs text-slate-300 border-t border-indigo-900/40 pt-4 max-h-[220px] overflow-y-auto pr-1">
 <p className="leading-relaxed">
 <span className="font-mono text-cyan-400 uppercase text-[10px] tracking-wider font-semibold block mb-0.5">ALCANCE</span>
 {TAGS_DATA[alcance].desc}
 </p>
 {area !== 'nenhuma' && (
 <p className="leading-relaxed">
 <span className="font-mono text-teal-400 uppercase text-[10px] tracking-wider font-semibold block mb-0.5">ÁREA</span>
 {TAGS_DATA[area].desc}
 </p>
 )}
 {alvo !== 'unico' && (
 <p className="leading-relaxed">
 <span className="font-mono text-purple-400 uppercase text-[10px] tracking-wider font-semibold block mb-0.5">SELEÇÃO DE ALVO</span>
 {TAGS_DATA[alvo].desc}
 </p>
 )}

 {/* Arcane Effects */}
 {efetivos.length > 0 && (
 <div className="border-t border-slate-900/50 my-2 pt-2">
 <span className="font-serif text-xs text-amber-500 uppercase tracking-wider block mb-1.5 font-bold">Efeitos de Arcana Ativos
 </span>
 {efetivos.map(effId => {
 const eff = TAGS_DATA[effId];
 const icon = effId === 'fogo' ? '' : effId === 'luz' ? '' : effId === 'ordem' ? '' : effId === 'terra' ? '🪨' : effId === 'vida' ? '' : effId === 'vinculo' ? '' : effId === 'vento' ? '' : effId === 'isolamento' ? '' : effId === 'caos' ? '' : effId === 'agua' ? '' : effId === 'escuridao' ? '' : '';
 return (
 <div key={effId} className="mb-2 leading-relaxed bg-slate-950/60 p-2.5 rounded-lg border border-slate-900">
 <div className="flex items-center justify-between mb-0.5 gap-2 flex-wrap">
 <strong className="text-indigo-200 text-xs">{icon} {eff.name.replace('Runa de ', '')}</strong>
 <span className="text-[9px] bg-slate-900 border border-slate-800 text-indigo-400 px-1 py-0.2 rounded font-mono font-semibold">Teste: {eff.test}
 </span>
 </div>
 <p className="text-xs text-slate-400 mt-1">
 {eff.desc.split('Sucesso:')[0]}
 {eff.desc.includes('Sucesso:') && (
 <>
 <br />
 <strong className="text-emerald-400 font-semibold bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-900/30 mt-1 inline-block font-sans">Sucesso:
 </strong>
 {eff.desc.split('Sucesso:')[1]}
 </>
 )}
 </p>
 </div>
 );
 })}
 </div>
 )}

 {/* Potency list */}
 {slotsUsed > 0 && (
 <div className="border-t border-slate-900/50 my-2 pt-2">
 <span className="font-serif text-xs text-red-500 uppercase tracking-wider block mb-1.5 font-bold">Modificadores de Potência
 </span>
 <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-400">
 {potencia.foco > 0 && (
 <li>
 <strong>Foco Perfurante (Nív {potencia.foco})</strong>: Ignora passivamente até {potencia.foco * 3} Pontos de Proteção (PR) do alvo.
 </li>
 )}
 {potencia.quebra && (
 <li>
 <strong>Quebra-Escudos</strong>: O dano causado à Proteção (PR) do alvo é dobrado.
 </li>
 )}
 {potencia.sobrecarga > 0 && (
 <li>
 <strong>Sobrecarga Arcana (Nív {potencia.sobrecarga})</strong>: Adiciona +{potencia.sobrecarga}d6 de dano bruto à rolagem final do feitiço.
 </li>
 )}
 {potencia.guiada && (
 <li>
 <strong>Precisão Guiada</strong>: Concede +1 Vantagem (+1d6) no ataque OU impõe -1 Desvantagem (-1d6) no teste de resistência do alvo.
 </li>
 )}
 {potencia.acelerada && (
 <li>
 <strong>Conjuração Acelerada</strong>: O custo de ativação é reduzido para 1 PA.
 </li>
 )}
 {potencia.ricochete && (
 <li>
 <strong>Ricochete</strong>: O feitiço salta para um segundo alvo a até alcance Curto (6m) do primeiro, causando metade do dano.
 </li>
 )}
 </ul>
 </div>
 )}
 </div>
 </div>

 {/* Card Actions buttons */}
 <div className="grid grid-cols-2 gap-3 mt-6 border-t border-indigo-900/40 pt-4">
 <button
 onClick={saveSpell}
 className="bg-indigo-600 hover:bg-indigo-500 text-white font-sans text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/10 hover:shadow-lg transition-all focus:outline-none"
 >Salvar no Grimório
 </button>
 <button
 onClick={copySpellText}
 className="bg-slate-900 hover:bg-slate-800 text-indigo-300 border border-slate-850 hover:border-slate-700 font-sans text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all focus:outline-none"
 >Copiar Feitiço
 </button>
 </div>
 </div>
 </div>

 {/* MEUS FEITIÇOS SALVOS (PERSISTENT GRIMORIO) */}
 <div className="lg:col-span-5 space-y-6">
 <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 font-sans">
 <h4 className="font-serif text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-4 flex items-center gap-1.5">Meu Grimório de Feitiços
 </h4>
 
 <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
 {savedSpells.length === 0 ? (
 <div className="text-center text-xs text-slate-500 italic py-12">Nenhum feitiço no grimório ainda. Crie um feitiço e salve-o!
 </div>
 ) : (
 savedSpells.map(s => {
 const catIcon = s.category === 'simple' ? '' : '';
 const tagsText = s.efetivos.map(eff =>TAGS_DATA[eff]?.name.split(' (')[0]).join(', ') || 'Nenhum Efeito';
 return (
 <div
 key={s.id}
 onClick={() =>loadSpell(s.id)}
 className="p-3 bg-slate-950/70 border border-slate-850 hover:border-indigo-850 rounded-xl flex items-center justify-between gap-3 cursor-pointer group transition-all duration-200 hover:bg-slate-950 shadow-inner"
 >
 <div className="flex-1 min-w-0">
 <div className="flex items-center gap-1.5">
 <span className="text-xs font-serif font-bold text-indigo-200 truncate group-hover:text-amber-400 transition-colors">
 {s.name}
 </span>
 <span className="text-[9px] bg-slate-900 border border-slate-800 text-indigo-400 px-1 py-0.2 rounded font-mono font-semibold">
 {s.pm} PM
 </span>
 </div>
 <p className="text-[10px] text-slate-500 font-sans truncate mt-0.5">
 {catIcon} Formato: {s.formato || 'Nenhum'} | {tagsText} | Slots: {s.slots}
 </p>
 </div>
 <button
 onClick={(e) =>deleteSpell(s.id, e)}
 className="text-slate-650 hover:text-red-400 p-1 font-semibold text-xs leading-none shrink-0 transition-colors focus:outline-none opacity-40 group-hover:opacity-100"
 title="Apagar Feitiço"
 >
 ✕
 </button>
 </div>
 );
 })
 )}
 </div>
 </div>
 </div>

 </div>
 </section>
 );
}
