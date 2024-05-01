const express = require('express');

const app = express();
const port = process.envPORT || 5001

app.use(express.static('server/public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
  });
  
app.listen(port, () => {
    console.log('listening on port', port);
});

