const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

app.post('/login', (request, response) => {
    let success = request.body.email === 'admin@example.com' && request.body.password === 'hellothere'
    response.send({success});
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
