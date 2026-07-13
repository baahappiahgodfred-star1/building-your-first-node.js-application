const fs = require('fs');

function generateReport(name, scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    throw new Error('scores must be a non-empty array of numbers');
  }

  const total = scores.reduce((acc, cur) => acc + Number(cur), 0);
  const avg = total / scores.length;
  const status = avg >= 10 ? 'Pass' : 'Fail';
  const report = `Student ${name} - Average: ${avg.toFixed(2)} - Status: ${status}`;

  // Persist a copy of the report for record-keeping
  const outFile = avg >= 10 ? 'reportSuccess.txt' : 'reportFailure.txt';
  fs.writeFileSync(outFile, report, { encoding: 'utf8' });

  return report;
}

module.exports = generateReport;