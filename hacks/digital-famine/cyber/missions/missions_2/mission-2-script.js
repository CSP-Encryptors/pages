(() => {
  const form = document.getElementById("breach-form");
  const consoleLog = document.getElementById("console-log");
  const secureToggle = document.getElementById("secure-toggle");
  const indicatorBreach = document.getElementById("indicator-breach");
  const indicatorTelemetry = document.getElementById("indicator-telemetry");
  const successCodeDisplay = document.getElementById("success-code");
  const payloadButton = document.getElementById("btn-inject-payload");
  const agentButton = document.getElementById("btn-load-agent");
  const clearButton = document.getElementById("btn-clear-log");
  const transmission = document.getElementById("mission-transmission");

  if (!form || !consoleLog || !secureToggle || !indicatorBreach || !indicatorTelemetry) {
    console.warn("Mission 2 simulator is missing required elements.");
    return;
  }

  const AGENT_DB = [
    { codename: "GhostWolf", passcode: "hunter2", clearance: "Top Secret" },
    { codename: "NightFox", passcode: "wrath238", clearance: "Secret" },
    { codename: "AstraZero", passcode: "blueNova!", clearance: "Confidential" },
  ];

  const PAYLOAD = "' OR '1'='1";
  const VAULT_CODE = "BRAVO-4M8Q";
  const DEFAULT_CONSOLE_TEXT = "$ Awaiting input…";
  const INITIAL_TRANSMISSION =
    "🛰️ HQ Transmission: Trigger the payload first. Then lock it down in secure mode.";

  const indicatorBaseClass = indicatorBreach.dataset.baseClass ?? "";
  const telemetryBaseClass = indicatorTelemetry.dataset.baseClass ?? "";
  const indicatorClasses = {
    neutral: "border-slate-700 bg-slate-900/60 text-slate-300",
    breach: "border-rose-500/40 bg-rose-500/10 text-rose-200",
    safe: "border-emerald-500/40 bg-emerald-500/10 text-emerald-200",
  };

  const successBaseClass = successCodeDisplay?.dataset.baseClass ?? "";
  const successLockedClasses = "tracking-[0.35em] uppercase text-slate-500";
  const successUnlockedClasses = "text-cyan-300";

  let vaultUnlocked = false;

  const applyIndicatorState = (element, baseClass, state) => {
    if (!element) return;
    const stateClasses = indicatorClasses[state] ?? indicatorClasses.neutral;
    element.className = `${baseClass} ${stateClasses}`;
  };

  const lockVault = () => {
    if (!successCodeDisplay) return;
    successCodeDisplay.textContent = "Locked";
    successCodeDisplay.className = `${successBaseClass} ${successLockedClasses}`.trim();
  };

  const unlockVault = () => {
    if (!successCodeDisplay) return;
    successCodeDisplay.textContent = VAULT_CODE;
    successCodeDisplay.className = `${successBaseClass} ${successUnlockedClasses}`.trim();
  };

  const printToConsole = (lines) => {
    consoleLog.textContent = `$ ${lines.join("\n$ ")}`;
  };

  const setIndicators = ({ breach, message }) => {
    const state = breach ? "breach" : "safe";
    indicatorBreach.textContent = `Breach Status: ${breach ? "ACTIVE" : "CONTAINED"}`;
    indicatorTelemetry.textContent = `Telemetry: ${message}`;
    applyIndicatorState(indicatorBreach, indicatorBaseClass, state);
    applyIndicatorState(indicatorTelemetry, telemetryBaseClass, state);
  };

  const setTransmission = (message) => {
    if (!transmission) return;
    transmission.textContent = message;
  };

  const runQuery = (codename, passcode, secureMode) => {
    const isPayload = codename.includes(PAYLOAD) || passcode.includes(PAYLOAD);

    if (!secureMode && isPayload) {
      return {
        query: `SELECT * FROM agents WHERE codename = '${codename}' AND passcode = '${passcode}';`,
        rows: AGENT_DB,
        breach: true,
        message: "All agent records leaked. Wormhole remains open.",
      };
    }

    const matched = AGENT_DB.filter(
      (agent) => agent.codename === codename && agent.passcode === passcode,
    );

    return {
      query: secureMode
        ? "SELECT * FROM agents WHERE codename = ? AND passcode = ?;"
        : `SELECT * FROM agents WHERE codename = '${codename}' AND passcode = '${passcode}';`,
      rows: matched,
      breach: matched.length === 0,
      message:
        matched.length === 0
          ? "Payload treated as literal text. Wormhole collapse confirmed."
          : `Agent ${matched[0].codename} authenticated with clearance ${matched[0].clearance}.`,
    };
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const codename = form.codename.value.trim();
    const passcode = form.passcode.value.trim();
    const secureMode = secureToggle.checked;

    const result = runQuery(codename, passcode, secureMode);
    const rowsDisplay =
      result.rows.length > 0
        ? result.rows
            .map((row, index) => `${index + 1}. ${row.codename} — ${row.clearance}`)
            .join("\n  ")
        : "0 rows returned";

    printToConsole([
      result.query,
      "",
      "Result:",
      rowsDisplay,
      "",
      secureMode ? "[Secure Mode ENABLED]" : "[Secure Mode DISABLED]",
    ]);

    setIndicators({ breach: result.breach, message: result.message });

    if (secureMode && !result.breach && !vaultUnlocked) {
      unlockVault();
      vaultUnlocked = true;
    } else if (!vaultUnlocked) {
      lockVault();
    }

    if (transmission) {
      if (!secureMode && result.breach) {
        setTransmission("⚠️ Wormhole wide open. Flip secure mode and fire again.");
      } else if (secureMode && result.breach) {
        setTransmission("🛑 Secure mode blocked those creds. Use HQ login.");
      } else if (secureMode && !result.breach && result.rows.length === 0) {
        setTransmission("🔒 Payload bounced. Wormhole stabilizing.");
      } else if (secureMode && result.rows.length > 0) {
        setTransmission("🛡️ GhostWolf cleared. Vault fragment inbound.");
      } else {
        setTransmission("📡 Partial leak detected. Engage secure mode.");
      }
    }
  });

  if (payloadButton) {
    payloadButton.addEventListener("click", () => {
      form.codename.value = PAYLOAD;
      form.passcode.value = "glitch";
      secureToggle.checked = false;
      vaultUnlocked = false;
      lockVault();
      setTransmission("💥 Payload primed. Run it with secure off.");
    });
  }

  if (agentButton) {
    agentButton.addEventListener("click", () => {
      form.codename.value = "GhostWolf";
      form.passcode.value = "hunter2";
      secureToggle.checked = true;
      setTransmission("🛡️ GhostWolf queued. Keep secure on.");
    });
  }

  const resetSimulation = () => {
    form.reset();
    form.codename.value = "GhostWolf";
    form.passcode.value = "hunter2";
    secureToggle.checked = false;
    consoleLog.textContent = DEFAULT_CONSOLE_TEXT;
    indicatorBreach.textContent = "Breach Status: Unknown";
    indicatorTelemetry.textContent = "Telemetry: No anomalies";
    applyIndicatorState(indicatorBreach, indicatorBaseClass, "neutral");
    applyIndicatorState(indicatorTelemetry, telemetryBaseClass, "neutral");
    vaultUnlocked = false;
    lockVault();
    setTransmission(INITIAL_TRANSMISSION);
  };

  if (clearButton) {
    clearButton.addEventListener("click", resetSimulation);
  }

  form.codename.value = "GhostWolf";
  form.passcode.value = "hunter2";

  applyIndicatorState(indicatorBreach, indicatorBaseClass, "neutral");
  applyIndicatorState(indicatorTelemetry, telemetryBaseClass, "neutral");
  lockVault();
  setTransmission(INITIAL_TRANSMISSION);
})();
