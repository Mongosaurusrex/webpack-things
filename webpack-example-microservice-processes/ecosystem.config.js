const services = [
	{ name: 'auth-service', script:'./dist/auth-service.js', watch: true },  
	{ name: 'user-service', script:'./dist/user-service.js', watch: true },  
	{ name: 'order-service', script:'./dist/order-service.js', watch: true },  
];

module.exports = {
  apps : services,
};
