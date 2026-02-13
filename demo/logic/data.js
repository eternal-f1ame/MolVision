function SV(sh, lb, c) {
  return (
    '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g stroke="' +
    c +
    '" stroke-width="1.4" fill="none">' +
    sh +
    '</g><text x="100" y="194" fill="#4a4e5a" font-size="8" text-anchor="middle" font-family="IBM Plex Mono">' +
    lb +
    "</text></svg>"
  );
}

var bace = [
  {
    name: "Verubecestat",
    smiles: "O=C1N(C)C(=N[C@@H]1CC2=CC(=CC(F)=C2)C(F)(F)F)N",
    mw: "321.3 Da",
    lab: 1,
    lt: "Inhibitor",
    conf: 88,
    pic: "8.2 nM",
    note: "Potent BACE-1 inhibitor by Merck; reached Phase III for Alzheimer\u2019s.",
    svg: SV(
      '<polygon points="65,55 95,40 125,55 125,90 95,105 65,90"/><line x1="73" y1="59" x2="73" y2="86" stroke-dasharray="4,3"/><line x1="117" y1="59" x2="117" y2="86" stroke-dasharray="4,3"/><line x1="125" y1="72" x2="155" y2="60"/><line x1="155" y1="60" x2="175" y2="72"/><text x="180" y="70" fill="#f87171" font-size="9" font-family="IBM Plex Mono">F</text><line x1="155" y1="60" x2="155" y2="38"/><text x="155" y="32" fill="#8a8f9e" font-size="8" text-anchor="middle" font-family="IBM Plex Mono">CF\u2083</text><line x1="65" y1="90" x2="45" y2="105"/><rect x="32" y="108" rx="4" width="36" height="16" fill="rgba(110,231,183,.06)" stroke="none"/><text x="50" y="120" fill="#6ee7b7" font-size="8" text-anchor="middle" font-family="IBM Plex Mono">N-C=O</text><line x1="95" y1="105" x2="95" y2="130"/><text x="95" y="142" fill="#60a5fa" font-size="9" text-anchor="middle" font-family="IBM Plex Mono">NH\u2082</text>',
      "Verubecestat",
      "#6ee7b7",
    ),
  },
  {
    name: "Lanabecestat",
    smiles: "CN1C(=O)[C@@H](NC1=N)CC2=CC(F)=CC=C2",
    mw: "441.5 Da",
    lab: 1,
    lt: "Inhibitor",
    conf: 82,
    pic: "7.6 nM",
    note: "AstraZeneca/Eli Lilly BACE-1 inhibitor; discontinued Phase III.",
    svg: SV(
      '<polygon points="55,58 85,44 115,58 115,92 85,106 55,92"/><line x1="63" y1="62" x2="63" y2="88" stroke-dasharray="4,3"/><line x1="107" y1="62" x2="107" y2="88" stroke-dasharray="4,3"/><text x="132" y="56" fill="#f87171" font-size="9" font-family="IBM Plex Mono">F</text><line x1="115" y1="58" x2="128" y2="54"/><line x1="115" y1="92" x2="140" y2="106"/><line x1="140" y1="106" x2="168" y2="106"/><text x="154" y="98" fill="#60a5fa" font-size="8" text-anchor="middle" font-family="IBM Plex Mono">NH</text><line x1="168" y1="106" x2="184" y2="122"/><text x="184" y="136" fill="#f87171" font-size="8" text-anchor="middle" font-family="IBM Plex Mono">C=O</text><path d="M55,92 L38,108 Q28,118 38,130 L55,138"/><text x="24" y="118" fill="#8a8f9e" font-size="8" font-family="IBM Plex Mono">CH\u2083</text>',
      "Lanabecestat",
      "#6ee7b7",
    ),
  },
  {
    name: "Atabecestat",
    smiles: "CC(=O)NC1=NN=C(C)S1",
    mw: "157.2 Da",
    lab: 1,
    lt: "Inhibitor",
    conf: 76,
    pic: "6.9 nM",
    note: "Janssen thiadiazole-based inhibitor; halted due to liver toxicity.",
    svg: SV(
      '<polygon points="75,65 105,50 135,65 125,98 85,98"/><text x="105" y="44" fill="#fbbf24" font-size="9" text-anchor="middle" font-family="IBM Plex Mono">S</text><text x="68" y="62" fill="#60a5fa" font-size="9" font-family="IBM Plex Mono">N</text><text x="140" y="62" fill="#60a5fa" font-size="9" font-family="IBM Plex Mono">N</text><line x1="85" y1="98" x2="85" y2="125"/><text x="85" y="138" fill="#8a8f9e" font-size="9" text-anchor="middle" font-family="IBM Plex Mono">CH\u2083</text><line x1="75" y1="65" x2="52" y2="78"/><text x="45" y="92" fill="#60a5fa" font-size="9" text-anchor="middle" font-family="IBM Plex Mono">NH</text><line x1="45" y1="94" x2="45" y2="118"/><text x="45" y="130" fill="#f87171" font-size="9" text-anchor="middle" font-family="IBM Plex Mono">C=O</text>',
      "Atabecestat",
      "#6ee7b7",
    ),
  },
  {
    name: "Donepezil",
    smiles: "COc1cc2CC(CC2=O)CC3CCN(CC3)Cc4ccccc4OC",
    mw: "379.5 Da",
    lab: 0,
    lt: "Non-inhibitor",
    conf: 79,
    pic: "N/A",
    note: "Acetylcholinesterase inhibitor \u2014 treats Alzheimer\u2019s via a DIFFERENT mechanism, not BACE-1.",
    svg: SV(
      '<polygon points="55,48 85,36 115,48 115,80 85,93 55,80"/><line x1="63" y1="52" x2="63" y2="76" stroke-dasharray="4,3"/><line x1="107" y1="52" x2="107" y2="76" stroke-dasharray="4,3"/><line x1="55" y1="48" x2="35" y2="38"/><text x="22" y="34" fill="#8a8f9e" font-size="8" font-family="IBM Plex Mono">OCH\u2083</text><line x1="115" y1="48" x2="135" y2="38"/><text x="140" y="34" fill="#8a8f9e" font-size="8" font-family="IBM Plex Mono">OCH\u2083</text><line x1="85" y1="93" x2="85" y2="115"/><line x1="85" y1="115" x2="65" y2="132"/><line x1="65" y1="132" x2="85" y2="148"/><text x="85" y="162" fill="#60a5fa" font-size="9" text-anchor="middle" font-family="IBM Plex Mono">N</text><line x1="85" y1="115" x2="105" y2="132"/><line x1="105" y1="132" x2="85" y2="148"/><line x1="115" y1="80" x2="140" y2="92"/><text x="148" y="98" fill="#f87171" font-size="9" font-family="IBM Plex Mono">O</text>',
      "Donepezil",
      "#6ee7b7",
    ),
  },
  {
    name: "Memantine",
    smiles: "C1C2CC3CC1CC(C2)(C3)N",
    mw: "179.3 Da",
    lab: 0,
    lt: "Non-inhibitor",
    conf: 91,
    pic: "N/A",
    note: "NMDA receptor antagonist \u2014 NOT a BACE-1 inhibitor. Rigid adamantane cage.",
    svg: SV(
      '<line x1="100" y1="38" x2="65" y2="60"/><line x1="65" y1="60" x2="65" y2="100"/><line x1="65" y1="100" x2="100" y2="122"/><line x1="100" y1="122" x2="135" y2="100"/><line x1="135" y1="100" x2="135" y2="60"/><line x1="135" y1="60" x2="100" y2="38"/><line x1="100" y1="38" x2="100" y2="72"/><line x1="65" y1="100" x2="100" y2="72"/><line x1="135" y1="100" x2="100" y2="72"/><line x1="65" y1="60" x2="100" y2="72" stroke-dasharray="4,3"/><line x1="100" y1="122" x2="100" y2="148"/><text x="100" y="162" fill="#60a5fa" font-size="10" text-anchor="middle" font-family="IBM Plex Mono">NH\u2082</text>',
      "Memantine",
      "#6ee7b7",
    ),
  },
];

var esol = [
  {
    name: "Ethanol",
    smiles: "CCO",
    mw: "46.1 Da",
    meas: 0.97,
    pred: 0.82,
    mae: 0.15,
    sc: "Highly Soluble",
    note: "Tiny polar molecule \u2014 miscible with water.",
    svg: SV(
      '<line x1="68" y1="92" x2="100" y2="76" stroke-width="2"/><line x1="100" y1="76" x2="132" y2="92" stroke-width="2"/><text x="56" y="98" fill="#8a8f9e" font-size="12" text-anchor="middle" font-family="IBM Plex Mono">CH\u2083</text><text x="144" y="98" fill="#f87171" font-size="12" text-anchor="middle" font-family="IBM Plex Mono">OH</text><circle cx="100" cy="76" r="3" fill="#60a5fa" stroke="none"/>',
      "Ethanol",
      "#60a5fa",
    ),
  },
  {
    name: "Caffeine",
    smiles: "Cn1c(=O)c2c(ncn2C)n(C)c1=O",
    mw: "194.2 Da",
    meas: -0.55,
    pred: -0.72,
    mae: 0.17,
    sc: "Moderately Soluble",
    note: "Purine alkaloid \u2014 carbonyl groups add polarity.",
    svg: SV(
      '<polygon points="70,58 110,46 135,66 120,103 80,103"/><line x1="135" y1="66" x2="160" y2="53"/><line x1="160" y1="53" x2="160" y2="88"/><line x1="160" y1="88" x2="120" y2="103"/><text x="110" y="40" fill="#60a5fa" font-size="9" text-anchor="middle" font-family="IBM Plex Mono">N</text><text x="166" y="46" fill="#60a5fa" font-size="9" font-family="IBM Plex Mono">N</text><text x="78" y="114" fill="#f87171" font-size="9" text-anchor="middle" font-family="IBM Plex Mono">O</text><text x="166" y="98" fill="#f87171" font-size="9" font-family="IBM Plex Mono">O</text><line x1="70" y1="58" x2="50" y2="48"/><text x="38" y="44" fill="#8a8f9e" font-size="8" font-family="IBM Plex Mono">CH\u2083</text><line x1="88" y1="62" x2="88" y2="99" stroke-dasharray="4,3"/>',
      "Caffeine",
      "#60a5fa",
    ),
  },
  {
    name: "Naphthalene",
    smiles: "c1ccc2ccccc2c1",
    mw: "128.2 Da",
    meas: -2.04,
    pred: -2.28,
    mae: 0.24,
    sc: "Poorly Soluble",
    note: "Non-polar fused aromatic rings \u2014 hydrophobic.",
    svg: SV(
      '<polygon points="50,60 80,45 110,60 110,95 80,110 50,95"/><polygon points="110,60 140,45 170,60 170,95 140,110 110,95"/><line x1="58" y1="64" x2="58" y2="91" stroke-dasharray="4,3"/><line x1="102" y1="64" x2="102" y2="91" stroke-dasharray="4,3"/><line x1="148" y1="49" x2="148" y2="91" stroke-dasharray="4,3"/><line x1="140" y1="106" x2="162" y2="91" stroke-dasharray="4,3"/>',
      "Naphthalene",
      "#60a5fa",
    ),
  },
  {
    name: "Aspirin",
    smiles: "CC(=O)Oc1ccccc1C(=O)O",
    mw: "180.2 Da",
    meas: -1.13,
    pred: -1.3,
    mae: 0.17,
    sc: "Slightly Soluble",
    note: "Aromatic ring + carboxylic acid balances polarity.",
    svg: SV(
      '<polygon points="78,50 112,36 146,50 146,88 112,102 78,88"/><line x1="86" y1="54" x2="86" y2="84" stroke-dasharray="4,3"/><line x1="138" y1="54" x2="138" y2="84" stroke-dasharray="4,3"/><line x1="78" y1="50" x2="58" y2="38"/><text x="48" y="34" fill="#f87171" font-size="8" font-family="IBM Plex Mono">O</text><line x1="48" y1="36" x2="32" y2="26"/><text x="22" y="22" fill="#8a8f9e" font-size="7" font-family="IBM Plex Mono">OC=O</text><line x1="146" y1="88" x2="168" y2="100"/><text x="174" y="106" fill="#f87171" font-size="8" font-family="IBM Plex Mono">C=O</text><line x1="168" y1="108" x2="168" y2="128"/><text x="168" y="140" fill="#f87171" font-size="9" text-anchor="middle" font-family="IBM Plex Mono">OH</text>',
      "Aspirin",
      "#60a5fa",
    ),
  },
  {
    name: "Pyrene",
    smiles: "c1cc2ccc3cccc4ccc(c1)c2c34",
    mw: "202.3 Da",
    meas: -4.58,
    pred: -4.21,
    mae: 0.37,
    sc: "Insoluble",
    note: "Large PAH (4 fused rings) \u2014 virtually insoluble.",
    svg: SV(
      '<polygon points="48,56 74,40 106,40 132,56 132,88 106,104 74,104 48,88"/><line x1="74" y1="40" x2="74" y2="104"/><line x1="106" y1="40" x2="106" y2="104"/><line x1="56" y1="60" x2="56" y2="84" stroke-dasharray="4,3"/><line x1="124" y1="60" x2="124" y2="84" stroke-dasharray="4,3"/><line x1="82" y1="44" x2="98" y2="44" stroke-dasharray="4,3"/><line x1="82" y1="100" x2="98" y2="100" stroke-dasharray="4,3"/><line x1="74" y1="72" x2="106" y2="72" stroke-dasharray="3,3"/>',
      "Pyrene",
      "#60a5fa",
    ),
  },
];

var icons = [
  "\uD83E\uDDEA",
  "\u2615",
  "\uD83D\uDCA7",
  "\uD83D\uDC8A",
  "\u26A0\uFE0F",
  "\uD83E\uDDEC",
  "\uD83E\uDDE0",
  "\u2B50",
  "\uD83D\uDD2C",
  "\uD83C\uDF0A",
];

var TK = {
  bace: {
    id: "bace",
    nm: "BACE-V",
    bc: "c",
    bt: "Classification",
    tt: "BACE-1 Inhibitor Prediction (Alzheimer\u2019s)",
    td: "BACE-1 (\u03B2-secretase 1) cleaves amyloid precursor protein, producing \u03B2-amyloid peptides linked to Alzheimer\u2019s. The task: predict if a molecule <strong>inhibits BACE-1</strong> \u2014 binary classification.",
    data: bace,
    pr: function (m) {
      return (
        '"Given the molecular structure image and SMILES: ' +
        m.smiles +
        ' \u2014 Does this molecule inhibit BACE-1? Answer True or False."'
      );
    },
    gt: "Classification Output",
    gd: function (m) {
      return (
        'Model outputs "' +
        (m.lab === 1 ? "True" : "False") +
        '" \u2014 predicted as ' +
        m.lt.toLowerCase() +
        "."
      );
    },
    ro: function (m) {
      var i = m.lab === 1;
      return (
        '<div class="oi"><div class="ol">BACE-1 Inhibition</div><div class="ov ' +
        (i ? "pos" : "neg") +
        '">' +
        (i ? "\u2713 Inhibitor" : "\u2717 Non-inhibitor") +
        '</div></div><div class="oi"><div class="ol">Confidence</div><div class="ov num">' +
        m.conf +
        '%</div><div class="ob"><div class="obf" style="width:0;background:' +
        (i ? "var(--ac)" : "var(--rd)") +
        '" data-w="' +
        m.conf +
        '"></div></div></div>' +
        (m.pic !== "N/A"
          ? '<div class="oi"><div class="ol">Reported pIC50</div><div class="ov num">' +
            m.pic +
            '</div><div class="os">Lower IC50 \u2192 stronger inhibition</div></div>'
          : "") +
        '<div class="oi"><div class="ol">Note</div><div class="os" style="color:var(--tx)">' +
        m.note +
        "</div></div>"
      );
    },
  },
  esol: {
    id: "esol",
    nm: "ESOL-V",
    bc: "r",
    bt: "Regression",
    tt: "Aqueous Solubility Prediction (ESOL)",
    td: "ESOL predicts water solubility as <strong>log(S) in mol/L</strong>. Solubility is critical for drug absorption. The VLM outputs a continuous numeric value.",
    data: esol,
    pr: function (m) {
      return (
        '"Given the molecular structure image and SMILES: ' +
        m.smiles +
        ' \u2014 Predict the aqueous solubility (log S in mol/L)."'
      );
    },
    gt: "Regression Output",
    gd: function (m) {
      return (
        'Model generates: "' +
        m.pred.toFixed(2) +
        ' log(mol/L)" as predicted solubility.'
      );
    },
    ro: function (m) {
      var R = 6,
        pN = Math.max(5, ((m.pred + 5) / R) * 100),
        mN = Math.max(5, ((m.meas + 5) / R) * 100);
      return (
        '<div class="oi"><div class="ol">Predicted logS</div><div class="ov num">' +
        m.pred.toFixed(2) +
        ' log(mol/L)</div><div class="ob"><div class="obf" style="width:0;background:var(--bl)" data-w="' +
        pN +
        '"></div></div></div><div class="oi"><div class="ol">Measured logS (ground truth)</div><div class="ov pos">' +
        m.meas.toFixed(2) +
        ' log(mol/L)</div><div class="ob"><div class="obf" style="width:0;background:var(--ac)" data-w="' +
        mN +
        '"></div></div></div><div class="oi"><div class="ol">Absolute Error</div><div class="ov" style="color:' +
        (m.mae < 0.25 ? "var(--ac)" : "var(--or)") +
        '">' +
        m.mae.toFixed(2) +
        '</div><div class="os">' +
        (m.mae < 0.2 ? "Excellent" : m.mae < 0.3 ? "Good" : "Moderate error") +
        '</div></div><div class="oi"><div class="ol">Solubility Class</div><div class="ov ' +
        (m.meas > 0 ? "pos" : m.meas > -2 ? "num" : "neg") +
        '">' +
        m.sc +
        '</div></div><div class="oi"><div class="ol">Note</div><div class="os" style="color:var(--tx)">' +
        m.note +
        "</div></div>"
      );
    },
  },
};
