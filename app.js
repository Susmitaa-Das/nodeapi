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



app.get('/', (req, res) => {
  res.send('Nice working')
})

app.listen(4000, () => {
  console.log('Server is working')
})
