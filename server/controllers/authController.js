const aws = require('aws-sdk')

aws.config.update({
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
    region:process.env.AWS_REGION
})

const ses = new aws.SES({apiVersion:'2010-12-01'})

exports.register = (req,res) =>{

    //console.log("REGISTER CONTROLLER",req.body)
    const {name,email,password} = req.body
    const params = {
        Source:process.env.EMAIL_FROM,
        Destination:{
            ToAddresses: [email]
        },
        ReplyToAddresses:[process.env.EMAIL_TO],
        Message:{
            Body:{
                Html:{
                    Charset: 'UTF-8',
                    Data:`<html><body><h1 style="color:red;">Hello ${name}</h1><p>Test Email</p></body></html>`
                }
            },
            Subject:{
                Charset: 'UTF-8',
                Data:'Complete your registration'
            }
        }
    };

    const sendEmailOnRegister = ses.sendEmail(params).promise()

    sendEmailOnRegister
    .then((data) => {console.log('EMAIL SUBMITTED TO SES',data) 
            res.send('EMAIL SENT')})
    .catch((err) => {console.log('SES EMAIL ON REGISTER ERROR --->',err)
        res.send('EMAIL FAILED')
    })

}