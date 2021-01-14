const express = require('express')
const ConnectDB = require('./config/db')
const app = express()

ConnectDB()

// middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => {
  res.send('API running')
})

app.use('/meta', require('./routes/meta'))
app.use('/posts', require('./routes/posts'))
app.use('/users', require('./routes/users'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is listening on ${PORT}`))
