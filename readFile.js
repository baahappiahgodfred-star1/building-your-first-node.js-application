const fs = require('fs');

// Read the contents of `message.txt` synchronously and print to console
try {
	const content = fs.readFileSync('./message.txt', 'utf8');
	console.log(content);
} catch (err) {
	console.error('Failed to read message.txt:', err.message);
	process.exitCode = 1;
}