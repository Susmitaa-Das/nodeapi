import express from 'express'
import mongoose from 'mongoose'

const app = express()
//Using Meadelwears
app.use(express.json())

mongoose
  .connect('mongodb://127.0.0.1:27017', {
    dbName: 'backendapi',
  })
  .then(() => console.log('Database Connected'))
  .catch((e) => console.log(e))

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
})

const User = mongoose.model('User', schema)

app.get('/', (req, res) => {
  res.send('Nice working')
})
app.post('/users/new', async (req, res) => {
    const {name,email,password} = req.body
   await User.create({
    name,
    email,
    password,
  })
  res.status(201).json({
    success: true,
    message:'Registered successfully',
  })
})

app.listen(4000, () => {
  console.log('Server is working')
})
