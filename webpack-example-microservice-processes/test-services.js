const Promise = require('bluebird');
const config = require('config');
const axios = require('axios');

const pingHealthCheckEndpoint = (host, port) => {
	return axios.get('http://' + host + ':' + port + '/health');
}

const services = config.get('services');

Promise.all([
	pingHealthCheckEndpoint(services.userService.host, services.userService.port),
	pingHealthCheckEndpoint(services.authService.host, services.authService.port),
	pingHealthCheckEndpoint(services.orderService.host, services.orderService.port)
])
	.then((result)=> {
		let failed = false;
		let parsedResults = [];
		for(let i = 0; i < result.length; i++) {
			parsedResults.push({
				from: result[i].data.from, 
				status: result[i].status
			});
			if(result[i].status !== 200) {
				failed = true;
			}
		}
		console.info('It ' + (failed ? 'failed' : 'succeded') );
		console.log('Dumping requests to log:\n', parsedResults);
	});
