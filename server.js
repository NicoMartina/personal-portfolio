const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');


//server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log('Server running on port 5000'));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "********@gmail.com",
        pass: ""
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('ready to send emails');
    }
});

router.post('/send', (req, res) => {
    const name = req.body.firstName + ' ' + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: '********@gmail.com',
        subject: 'Contact Form Submission - Portfolio',
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>phone: ${phone}</p>
               <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({error});
        } else {
            res.json({code: 200, status: 'Email sent successfully' });
        }
    });

});