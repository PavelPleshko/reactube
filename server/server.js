import devBundle from './devBundle';
import config from './config/config';
import app from './express';
import path from 'path';
import mongoose from 'mongoose';
import initPassport from './config/passport';
// import spdy from 'spdy';
// import fs from 'fs';


// const options = {
//     key: fs.readFileSync(__dirname + '/server.key'),
//     cert:  fs.readFileSync(__dirname + '/server.crt')
// }

// import cluster from 'cluster';
// import os from 'os';


// if(cluster.isMaster){
// 	const cpus = os.cpus().length;
// 	console.log(`Forking for ${cpus} CPUs`);
// 	for(let i = 0;i<cpus;i++){
// 		cluster.fork();
// 	}
// 	cluster.on('exit',(worket,code,signal)=>{
// 		if(code !== 0 && !worker.exitedAfterDisconnect){
// 			console.log(`Worker ${worker.id} crashed. Starting a new worker`);
// 			cluster.fork();
// 		}
// 	})
// }else{
	if(process.env.NODE_ENV === 'development'){
		devBundle.compile(app);
	}
	initPassport(app);
	mongoose.connect(config.mongoUri);


	// spdy
 // 	 .createServer(options, app)
 	 app.listen(config.port, (err) => {
	  if (err) {
	    console.log(err) 
	  }
	  console.info(`Server started on port ${config.port}.`
	   )
	});

	mongoose.connection.on('error', () => {
	  throw new Error(`unable to connect to database: ${config.mongoUri}`)
	})
//}




