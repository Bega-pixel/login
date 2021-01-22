const nodemailer = require('nodemailer');
const appUrl = process.env.APP_URL;

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;

const transport = nodemailer.createTransport({ 
    service: 'Gmail' ,
    auth: {
        user ,
        pass
    },

});

module.exports.sendValidationEmail = (email,activationToken,name) => {
    transport.sendMail({
        to: email,
        from: `templating <${user}>`,
        subject:'activate your account',
        html: `<h1> Hey  ${name} </h1>
        <p>click the button below </p>
        <a href= "${appUrl}/activate?token=${activationToken}" >click</a>
        `
       // <a href= "${appUrl}/activate/${activationToken}" sty >
    })
}