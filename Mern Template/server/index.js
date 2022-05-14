import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'


const app = express()


app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors())

app.use('/', (req, res) => {
    res.send('APP STARTED')
})


const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:admin@cluster0.agfvl.mongodb.net/forum?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected db')
})

app.listen(PORT, () => console.log('server started'))