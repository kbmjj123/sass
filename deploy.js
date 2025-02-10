const Client = require('ssh2-sftp-client');
const path = require('path');

const sftp = new Client();
sftp.on('upload', info => {
	console.log(`Listener: Uploaded ${info.source}`);
})
sftp.connect({
	host: '175.178.180.62',
	port: '22',
	username: 'zhenggl',
	password: 'zgl3843386' || null, // if not specified, you can enter in the console
	// other options specified in https://github.com/theophilusx/ssh2-sftp-client#sec-4-2-2
	retries: 3
}).then(res => {
	console.info(res);
	sftp.uploadDir(path.join(__dirname, '_book'), '/usr/local/nginx/html/sass/').then(res => {
		console.info(res);
	});
});
