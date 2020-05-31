const express = require('express');
const hbs = require('hbs');
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials/');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'Daniel Rivera',
        semester : '4°',
        group : 'E',
        exercise : 'Pagina Web Dinámica',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000')
});
app.get('/pica', (req, res)=>{
    res.render('picasso', {
        autor : 'Daniel Rivera',
        semester : '4°',
        group : 'E',
        year : new Date().getFullYear(),
        title : 'Pablo Picasso',
        location : 'Cbtis 122'
    });
});
app.get('/riv', (req, res)=>{
    res.render('rivera', {
        autor : 'Daniel Rivera',
        semester : '4°',
        group : 'E',
        year : new Date().getFullYear(),
        title : 'Pablo Picasso',
        location : 'Cbtis 122'

    });
});
app.get('/van', (req, res)=>{
    res.render('van', {
        autor : 'Daniel Rivera',
        semester : '4°',
        group : 'E',
        year : new Date().getFullYear(),
        title : 'Pablo Picasso',
        location : 'Cbtis 122'
    });
});
app.get('/vinci', (req, res)=>{
    res.render('vinci', {
        autor : 'Daniel Rivera',
        semester : '4°',
        group : 'E',
        year : new Date().getFullYear(),
        title : 'Pablo Picasso',
        location : 'Cbtis 122'
    });
});
