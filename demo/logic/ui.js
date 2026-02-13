var aT = "bace",
  aM = 0;
var highlightStepTimers = [];
var highlightResetTimer = null;
var outputRevealTimer = null;
var HIGHLIGHT_STEP_INTERVAL_MS = 180;
var HIGHLIGHT_TOTAL_STEPS = 4;
var HIGHLIGHT_TRANSITION_MS = 3000;
var OUTPUT_REVEAL_BUFFER_MS = 200;
var HIGHLIGHT_RESET_BUFFER_MS = 700;

function E(i) {
  return document.getElementById(i);
}

function processingOutputMarkup() {
  return '<div class="oi"><div class="ol">Prediction</div><div class="ov num">Processing...</div><div class="os">Running multimodal inference</div></div>';
}

function render() {
  var t = TK[aT],
    m = t.data[aM];
  E("tabs").innerHTML = Object.keys(TK)
    .map(function (k) {
      var tk = TK[k];
      return (
        '<button class="tt' +
        (aT === k ? " on" : "") +
        '" onclick="sw(\'' +
        k +
        "')\">" +
        tk.nm +
        ' <span class="tbg ' +
        tk.bc +
        '">' +
        tk.bt +
        "</span></button>"
      );
    })
    .join("");
  E("tdesc").innerHTML =
    '<div class="t1">' + t.tt + '</div><div class="t2">' + t.td + "</div>";
  E("mcv").innerHTML = m.svg;
  E("mname").textContent = m.name;
  E("msmi").textContent = m.smiles;
  E("mmw").textContent = m.mw;
  E("ptxt").textContent = t.pr(m);
  E("gtit").textContent = t.gt;
  E("gdsc").textContent = t.gd(m);
  E("outp").innerHTML = processingOutputMarkup();

  highlightStepTimers.forEach(function (timerId) {
    clearTimeout(timerId);
  });
  highlightStepTimers = [];

  if (highlightResetTimer) {
    clearTimeout(highlightResetTimer);
    highlightResetTimer = null;
  }

  if (outputRevealTimer) {
    clearTimeout(outputRevealTimer);
    outputRevealTimer = null;
  }

  document.querySelectorAll(".pbb").forEach(function (b) {
    b.classList.remove("on");
  });

  ["s1", "s2", "s3", "s4"].forEach(function (id, i) {
    var timerId = setTimeout(function () {
      E(id).classList.add("on");
    }, i * HIGHLIGHT_STEP_INTERVAL_MS);
    highlightStepTimers.push(timerId);
  });

  var highlightEndMs =
    (HIGHLIGHT_TOTAL_STEPS - 1) * HIGHLIGHT_STEP_INTERVAL_MS +
    HIGHLIGHT_TRANSITION_MS;

  outputRevealTimer = setTimeout(function () {
    E("outp").innerHTML = t.ro(m);
    document.querySelectorAll(".obf[data-w]").forEach(function (b) {
      b.style.width = b.getAttribute("data-w") + "%";
    });
  }, highlightEndMs + OUTPUT_REVEAL_BUFFER_MS);

  highlightResetTimer = setTimeout(function () {
    document.querySelectorAll(".pbb").forEach(function (b) {
      b.classList.remove("on");
    });
  }, highlightEndMs + HIGHLIGHT_RESET_BUFFER_MS);
}

function sw(k) {
  aT = k;
  aM = 0;
  render();
  closeModal();
}
function pk(i) {
  aM = i;
  render();
  closeModal();
}

function openModal() {
  var t = TK[aT];
  E("modal-title").textContent = "Select Molecule \u2014 " + t.nm;
  E("modal-sub").textContent =
    t.id === "bace"
      ? "Choose a molecule to test for BACE-1 inhibition:"
      : "Choose a molecule to predict aqueous solubility:";
  E("modal-list").innerHTML = t.data
    .map(function (m, i) {
      return (
        '<div class="mol-opt' +
        (i === aM ? " active" : "") +
        '" onclick="pk(' +
        i +
        ')">' +
        '<div class="mo-icon">' +
        icons[i] +
        "</div>" +
        '<div><div class="mo-name">' +
        m.name +
        "</div>" +
        '<div class="mo-smi">' +
        m.smiles +
        "</div>" +
        '<div class="mo-mw">' +
        m.mw +
        "</div></div></div>"
      );
    })
    .join("");
  E("modal").classList.add("show");
}

function closeModal() {
  E("modal").classList.remove("show");
}

E("modal").addEventListener("click", function (e) {
  if (e.target === E("modal")) closeModal();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

render();
var obs = new IntersectionObserver(
  function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add("vis");
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".an").forEach(function (el) {
  obs.observe(el);
});
