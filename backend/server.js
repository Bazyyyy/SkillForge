const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('frontend'));

app.get('/api/greeting', (req, res) => {
    res.json({ message: 'Hallo von Backend!' });
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});