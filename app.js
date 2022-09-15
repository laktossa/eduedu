const express = require('express');
const app = express();
const router = require('./routers');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/',router)

app.listen(3000, () => {
    console.log(`Ciee mikiirrr`);
});

//npm start, open your browser and run localhost:port