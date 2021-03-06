const express = require('express')
const app = express()
const fs = require('fs')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

///import routes
const authRoutes = require('./routes/auth')

//db connection
mongoose.connect(process.env.DATABASE_CLOUD,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(() => console.log("DB CONNECTED SUCCESFULLY IN THE CLOUD"))
.catch((err) => {
    console.log("DB CONNECTED FAILED",err)
})


//apply middlewares
app.use(morgan('dev'))
app.use(bodyParser.json({limit:"2mb"}))
//app.use(cors());
app.use(cors({origin: process.env.CLIENT_URL}))

//middlewares
//app.use('/api',authRoutes)

fs.readdirSync('./routes').map((route) => 
app.use("/api",require('./routes/' + route))
);






const port = process.env.PORT

app.listen(port, () => console.log(`API IS RUNING ON PORT ${8000}`))