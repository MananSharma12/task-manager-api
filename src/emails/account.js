const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'manan.sharma1205@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })    
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'manan.sharma1205@gmail.com',
        subject: 'Goodbye!',
        text: `We are sad to see you go ${name}. Let us know What we could've done better.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}