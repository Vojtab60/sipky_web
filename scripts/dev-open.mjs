import { spawn, spawnSync } from "node:child_process";

const url = "http://localhost:3000/";

async function isRunning() {
  try {
    const response = await fetch(url, { redirect: "manual" });
    return response.ok || response.status === 308;
  } catch {
    return false;
  }
}

function openBrowser() {
  const browsers = ["Safari", "Google Chrome"];
  const freshUrl = `${url}?t=${Date.now()}`;

  for (const browser of browsers) {
    const result = spawnSync("open", ["-a", browser, freshUrl], {
      stdio: "ignore",
    });

    if (result.status === 0) {
      return;
    }
  }

  spawn("open", [freshUrl], {
    stdio: "ignore",
    detached: true,
  }).unref();
}

async function waitForServer() {
  for (let i = 0; i < 60; i += 1) {
    if (await isRunning()) {
      return true;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  return false;
}

if (await isRunning()) {
  openBrowser();
} else {
  const server = spawn("npm", ["run", "dev"], {
    stdio: "inherit",
    shell: true,
  });

  if (await waitForServer()) {
    openBrowser();
  }

  server.on("exit", (code) => {
    process.exit(code ?? 0);
  });
}
