import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import './config/instrument.js'
import * as Sentry from "@sentry/node";


const app = express()

// connect db
await connectDB()

// middlewares
app.use(cors())
app.use(express.json())


// routes
app.get('/', (req, res) => res.send("API WORKING"))
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });
  

// PORT
const PORT = process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

