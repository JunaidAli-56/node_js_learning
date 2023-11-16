const express = require('express');
const sendemail = require('./controllers/sendMail');
const app = express()
const PORT = 5000;

app.get('/', (req, res) => {
    res.end('Jarviz live on server')
})
app.get('/mail', sendemail);
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Listening on port: ${PORT}`)
        })
    } catch (error) {

    }
}
start();