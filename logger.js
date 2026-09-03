const logs = [];

function addLog(message) {
  const time = new Date().toLocaleTimeString();
  const formatted = `[${time}] ${message}`;

  console.log(formatted); // still goes to Render logs

  logs.push(formatted);

  if (logs.length > 300) logs.shift();
}

function getLogs() {
  return logs;
}

module.exports = { addLog, getLogs };