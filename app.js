import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import urlRouter from './src/modules/url/url.router.js'
const app = express()
const port = 6000

app.use(express.json())
app.use('/api/v1/url',urlRouter)

dbConnection()


app.get('/', (req, res) => res.send('Hello Task!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))