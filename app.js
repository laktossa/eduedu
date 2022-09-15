const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('masukbang')
});

app.listen(3000, () => {
    console.log(`Ciee mikiirrr`);
});

//npm start, open your browser and run localhost:port