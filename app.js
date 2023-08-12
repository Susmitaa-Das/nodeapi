import express from 'express'
import userRouter from './routes/user.js'
import { connectDb } from './data/database.js'

const app = express()
connectDb()
//Using Meadelwears
app.use(express.json())
app.use('/users', userRouter)

app.get('/', (req, res) => {
  res.send('Nice working')
})

app.listen(4000, () => {
  console.log('Server is working')
})
