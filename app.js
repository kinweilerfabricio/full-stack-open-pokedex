const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.send('¡API funcionando correctamente!');
});

module.exports = app;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
