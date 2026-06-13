import React from 'react';

// Helper component to highlight "Sucesso:" in description strings
export function DescWithHighlights({ text, className = '' }) {
    if (!text) return null;
    const parts = text.split(/(Sucesso:)/);
    return (
        <span className={className}>
            {parts.map((part, i) =>
                part === 'Sucesso:' ? (
                    <strong key={i} className="inline-flex items-center gap-0.5 text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded font-bold not-italic mx-0.5">
                        Sucesso no Teste:
                    </strong>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </span>
    );
}

// Renders a single base rune card
export function BaseRuneCard({ rune, variant = 'grimorio', grauBadge }) {
    const isGrimorio = variant === 'grimorio';
    
    // Styling classes based on page context
    const cardBg = isGrimorio 
        ? "bg-white border border-slate-150 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200 group relative overflow-hidden"
        : "bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm hover:shadow-md transition-all relative overflow-hidden";
        
    const titleCol = isGrimorio
        ? "flex justify-between font-serif font-bold text-sm text-slate-800 mb-1 group-hover:text-magic-900 transition-colors"
        : "flex justify-between items-center mb-2";

    const titleSpan = isGrimorio
        ? "text-slate-800 font-bold font-serif"
        : "font-bold text-indigo-900";

    const badgeCol = isGrimorio
        ? "font-mono text-indigo-650 bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 rounded text-[10px] font-bold"
        : "bg-indigo-100 text-indigo-800 text-xs px-2 py-0.5 rounded font-mono font-bold";

    const detailsWrap = isGrimorio
        ? "flex flex-wrap gap-1.5 mb-2"
        : "flex flex-wrap gap-2 mb-2 text-xs";

    const testBadge = isGrimorio
        ? "inline-flex items-center gap-0.5 bg-amber-50 text-amber-800 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-sans border border-amber-200 shadow-sm"
        : "bg-red-50 border border-red-100 px-1.5 py-0.5 rounded text-red-700";

    const timeBadge = isGrimorio
        ? "inline-flex items-center gap-0.5 bg-sky-50 text-sky-700 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-sans border border-sky-200 shadow-sm"
        : "bg-amber-50 border border-amber-100 px-1.5 py-0.5 rounded text-amber-700";

    const testIcon = isGrimorio ? <span className="text-amber-500">✦</span> : null;
    const timeIcon = isGrimorio ? <span className="text-sky-400">⏱</span> : null;

    const descClass = isGrimorio ? "text-xs text-gray-655 leading-relaxed font-sans" : "text-slate-700 mt-2";

    return (
        <div className={cardBg}>
            {grauBadge && (
                <div className="absolute right-0 top-0 bg-slate-100 text-slate-500 text-[8px] font-bold px-2 py-0.5 rounded-bl uppercase tracking-wider z-10">
                    {grauBadge}
                </div>
            )}
            <div className={titleCol}>
                <span className={titleSpan}>{rune.name}</span>
                <span className={badgeCol}>{rune.cost}</span>
            </div>
            <div className={detailsWrap}>
                {isGrimorio && (
                    <span className="bg-slate-100 text-slate-600 text-[9px] font-semibold px-1.5 py-0.5 rounded uppercase tracking-wider font-sans border border-slate-200/50">
                        Efeito Base
                    </span>
                )}
                {rune.type && (
                    <span className={isGrimorio ? "text-[9px] font-sans font-semibold text-indigo-600 bg-indigo-50/50 px-1.5 py-0.5 rounded border border-indigo-100/30" : "bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-600"}>
                        Tipo: {rune.type}
                    </span>
                )}
                {rune.test && (
                    <span className={testBadge}>
                        {testIcon} Teste: {rune.test}
                    </span>
                )}
                {rune.time && (
                    <span className={timeBadge}>
                        {timeIcon} {rune.time}
                    </span>
                )}
            </div>
            <p className={descClass}>
                <DescWithHighlights text={rune.desc} />
            </p>
            {rune.scale && (
                <div className="mt-2 text-[11px] font-sans text-indigo-900 bg-indigo-50/60 p-2 rounded-lg border border-indigo-100/50 shadow-sm">
                    <strong className="font-bold flex items-center gap-1"><span className="text-indigo-600">↑</span> Evolução:</strong> {rune.scale}
                </div>
            )}
            {rune.succ && (
                isGrimorio ? (
                    <div className="mt-2 flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/60 rounded-lg px-2.5 py-1.5">
                        <span className="shrink-0 font-bold text-[9px] text-emerald-700 uppercase tracking-wider bg-emerald-100 border border-emerald-300/50 px-1.5 py-0.5 rounded mt-0.5">Sucesso</span>
                        <span className="text-[11px] text-emerald-900 leading-snug font-sans">{rune.succ}</span>
                    </div>
                ) : (
                    <>
                        <p className="text-slate-500 mt-1 italic text-xs">Sucesso: {rune.succ}</p>
                    </>
                )
            )}
        </div>
    );
}

// Renders a single modifier card with automatic badge color categorization
export function ModifierCard({ modifier, variant = 'grimorio', grauBadge }) {
    const isGrimorio = variant === 'grimorio';
    
    let typeBadge = "Modificador";
    let badgeCol = "bg-slate-100 text-slate-700 border-slate-200";
    if (modifier.name.includes("Alcance")) {
        typeBadge = "Alcance";
        badgeCol = "bg-purple-50 text-purple-700 border-purple-100";
    } else if (modifier.name.includes("Área")) {
        typeBadge = "Área";
        badgeCol = "bg-amber-50 text-amber-700 border-amber-100";
    } else if (modifier.name.includes("Alvo")) {
        typeBadge = "Alvo";
        badgeCol = "bg-sky-50 text-sky-700 border-sky-100";
    } else {
        typeBadge = "Potência";
        badgeCol = "bg-rose-50 text-rose-700 border-rose-100";
    }

    if (isGrimorio) {
        return (
            <div className="bg-white border border-slate-150 rounded-xl p-3.5 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200 relative overflow-hidden">
                {grauBadge && (
                    <div className="absolute right-0 top-0 bg-slate-100 text-slate-500 text-[8px] font-bold px-2 py-0.5 rounded-bl uppercase tracking-wider z-10">
                        {grauBadge}
                    </div>
                )}
                <div className="flex justify-between items-start mb-1.5">
                    <span className="font-sans font-bold text-xs text-slate-800">{modifier.name}</span>
                    <span className="font-mono text-indigo-650 text-[10px] font-bold">{modifier.cost}</span>
                </div>
                <div className="mb-2">
                    <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded font-sans uppercase tracking-wider border ${badgeCol}`}>
                        {typeBadge}
                    </span>
                </div>
                <p className="text-[11px] text-gray-655 leading-relaxed font-sans">{modifier.desc}</p>
            </div>
        );
    } else {
        return (
            <div className="bg-slate-50/50 border border-slate-200 p-3 rounded-lg text-sm">
                <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-800">{modifier.name}</span>
                    <span className="text-slate-500 text-xs font-mono">{modifier.cost}</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">{modifier.desc}</p>
            </div>
        );
    }
}

// Renders a group of custom element/concept runes
export function CustomRuneGroup({ group, badgeText = '', variant = 'grimorio' }) {
    const isGrimorio = variant === 'grimorio';

    if (isGrimorio) {
        return (
            <div className={`border rounded-2xl p-4 md:p-5 bg-gradient-to-br shadow-xs border-slate-200/60 ${group.colorClass}`}>
                <div className="flex items-center justify-between mb-3.5 border-b border-black/5 pb-2">
                    <span className="font-serif font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                        {group.element}
                    </span>
                    <span className="text-[8px] font-bold bg-white/70 text-slate-600 px-2 py-0.5 rounded border border-black/5 uppercase font-sans tracking-wide">
                        {badgeText} - {group.runes.length} Efeitos
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    {group.runes.map((cr, crIdx) => (
                        <div key={crIdx} className="bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-white/50 shadow-xs hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
                            <div className="flex justify-between font-semibold text-slate-900 mb-1 text-xs items-center">
                                <span className="font-serif text-magic-900 font-bold">{cr.name}</span>
                                <span className="font-mono text-indigo-700 bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 rounded text-[9px] font-bold">{cr.cost}</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mb-1.5">
                                <span className="text-[9px] font-sans font-semibold text-indigo-600 bg-indigo-50/50 px-1.5 py-0.5 rounded border border-indigo-100/30">Efeito: {cr.type}</span>
                                {cr.test && <span className="inline-flex items-center gap-0.5 bg-amber-50 text-amber-800 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-sans border border-amber-200 shadow-sm"><span className="text-amber-500">✦</span> Teste: {cr.test}</span>}
                                {cr.time && <span className="inline-flex items-center gap-0.5 bg-sky-50 text-sky-700 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-sans border border-sky-200 shadow-sm"><span className="text-sky-400">⏱</span> {cr.time}</span>}
                            </div>
                            <p className="text-[11px] text-gray-655 leading-relaxed font-sans mt-1"><DescWithHighlights text={cr.desc} /></p>
                            {cr.scale && (
                                <div className="mt-2 text-[10px] font-sans text-indigo-900 bg-indigo-50/60 p-1.5 rounded-lg border border-indigo-100/50">
                                    <strong className="font-bold">↑ Escala:</strong> {cr.scale}
                                </div>
                            )}
                            {cr.succ && (
                                <div className="mt-2 flex items-start gap-1.5 bg-emerald-50 border border-emerald-200/60 rounded-lg px-2.5 py-1.5">
                                    <span className="shrink-0 font-bold text-[9px] text-emerald-700 uppercase tracking-wider bg-emerald-100 border border-emerald-300/50 px-1.5 py-0.5 rounded mt-0.5">Sucesso</span>
                                    <span className="text-[11px] text-emerald-900 leading-snug font-sans">{cr.succ}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className={`bg-gradient-to-r ${group.colorClass} border rounded-xl p-4`}>
                <h6 className="font-bold text-lg mb-3 flex items-center gap-2">{group.element}</h6>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {group.runes.map((rune, rIdx) => (
                        <div key={rIdx} className="bg-white/60 border border-white/40 p-3 rounded-lg shadow-sm text-sm">
                            <div className="flex justify-between items-start mb-1.5">
                                <span className="font-bold text-slate-800">{rune.name}</span>
                                <span className="bg-white/80 text-slate-700 text-xs px-1.5 py-0.5 rounded shadow-xs font-mono font-semibold">{rune.cost}</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mb-2 text-[10px] uppercase tracking-wider">
                                {rune.type && <span className="bg-black/5 px-1 rounded">{rune.type}</span>}
                                {rune.time && <span className="bg-black/5 px-1 rounded">{rune.time}</span>}
                                {rune.test && <span className="bg-red-900/10 text-red-800 px-1 rounded">{rune.test}</span>}
                            </div>
                            <p className="text-slate-700 text-xs leading-relaxed">
                                <DescWithHighlights text={rune.desc} />
                            </p>
                            {rune.scale && <p className="text-indigo-700 mt-1.5 font-semibold text-[10px] bg-indigo-50/50 p-1 rounded">↑ Escala: {rune.scale}</p>}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
