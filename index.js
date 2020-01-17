const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
var path = require('path');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const base64 = require('base64topdf');
const serveStatic = require('serve-static');

const app = express()


app.use(cors());
app.use(express.json());

//Nodemailer Transport Setting
var transport = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'mtaanike@gmail.com',
    pass: 'theoracle'
  }
}));

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, 'rony-app/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, 'rony-app/dist/index.html'))
})


app.post('/freelance/proposal',function (req,res) {

  console.log(req)

  var mailOptions = {
                    from: `${req.body.email}`,
                    to: 'ronymarinequail@hotmail.com',
                    subject: `NEW PROPOSAL RECEIVED!`,
                    text:'',
                    html: '<!DOCTYPE html>'+
                              '<html><head><title>Proposal Received.</title>'+
                              '</head><body><div>'+
                              `<h4><strong>Proposal Received From ${req.body.businessname}, ${req.body.email}</strong></h4>`+
                              `<h4>Proposal Summary:<br/>${req.body.summary}.</h4>`+
                              '<p><strong>Email Generated From rony-quail.herokuapp.com.</p>' +
                        '</div></body></html>'


                  }

                  console.log(mailOptions)

                  transport.sendMail(mailOptions, function(err,info){

                    if (err) console.log(err)

                    res.status(200).json({
                      title: 'Sent'

                    })

                    console.log(info)

                  })

})

const port = process.env.PORT || 7000
app.listen(port)


console.log(`app is listening on port: ${port}`)