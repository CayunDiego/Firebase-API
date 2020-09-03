const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');

const app = express();

admin.initializeApp({
    credential: admin.credential.cert('./permissions.json'),
    databaseURL: 'https://fir-api-1b408.firebaseio.com'
});


app.get('/hello-word', (req, res) => {
    return res.status(200).json({
        message: 'Hello word'
    });
});

app.use(require('./routes/products.routes'));

//pasamos nuestro backend dentro de firebase para que pueda ser ejecutado.
exports.app = functions.https.onRequest(app);