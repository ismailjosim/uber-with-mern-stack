import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())


app.get("/", (req, res) => {
    res.send("Welcome to Uber")
})

module.exports = app;
