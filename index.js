const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
var username = encodeURIComponent(process.env.username);
var password = encodeURIComponent(process.env.password);

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.9uip3.mongodb.net/House?retryWrites=true&w=majority`)
.then(() => console.log("sucessful"))
.catch((error) => console.error(error))


app.get('/api/test',() => {console.log("test is succesfully");})

app.listen(process.env.PORT || 5000,() => {console.log(`server is running 5000`);})