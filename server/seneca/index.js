import senecaCli from 'seneca';

const emailService = senecaCli().client({host:'127.0.0.1',port:4000});


export {
	emailService
}