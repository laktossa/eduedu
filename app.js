const express = require('express');
const sess = require('express-session');
const app = express();
const router = require('./routers');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(sess({
    secret: "dumdum",
    resave: false,
    saveUninitialized : false,
    cookie: {
        secure: false
    }
}))

app.use('/',router);

app.listen(3000, () => {
    console.log(`Ciee mikiirrr`);
});
