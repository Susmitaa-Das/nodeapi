import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'

const app = express()
//Using Meadelwears
app.use(express.json())
app.use( "/users",userRouter)

mongoose
  .connect('mongodb://127.0.0.1:27017', {
    dbName: 'backendapi',
  })
  .then(() => console.log('Database Connected'))
  .catch((e) => console.log(e))



app.get('/', (req, res) => {
  res.send('Nice working')
})

app.listen(4000, () => {
  console.log('Server is working')
})
