var nodemailer = require('nodemailer');

function sendEmails(arrayOfEmailsToSend, subject, message, callback) {		
	var smtpConfig = {
		pool: true,
		host: 'smtp.gmail.com',
		port: 465,
		secure: true, // use SSL
		auth: {
			user: '', // email id for the email to be sent
			pass: ''  // password for the email id
		}
	};
	var transporter = nodemailer.createTransport(smtpConfig);

	var stringOfEmailsToSend = arrayOfEmailsToSend.join();

	var mailOptions = {
	    to: stringOfEmailsToSend,
	    subject: subject,
	    html: message 
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return callback(error);
	    }
	    else {
	    	return callback(null, info.response);
	    }
	});
}

module.exports = {
	sendEmails : sendEmails
};