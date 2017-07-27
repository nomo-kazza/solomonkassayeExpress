const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/contact-me', function (req, res) {

    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'solomonneedajob@gmail.com',
            pass: 'papi5503'
        }
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: req.body.email,
        to: 'solomonjobsearch@gmail.com',
        subject: 'Contact Me message from your website',
        text: 'Hello world text',
        html: ` <table>
                    <tr>From :  ${req.body.name}</tr>
                    <tr>Sender Email : ${req.body.email}</tr>
                    <tr>  </tr>
                    <tr>Message : ${req.body.message}</tr>
                </table>`
    };

    // // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
        res.json({'ok': true});
    });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
