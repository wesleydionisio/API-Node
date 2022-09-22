const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./config/routes.js');
const { route } = require('./config/routes.js');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes);

const convertToSlug = (text) => {
    const a = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
    const b = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
    const p = new RegExp(a.split('').join('|'), 'g')
    return text.toString().toLowerCase().trim()
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special chars
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[\s\W-]+/g, '_') // Replace spaces, non-word characters and dashes with a single dash (-)
}

const base = 'https://wesleydionisio.dev.br/agenda'
const filetype = '.png';
let db = [

    { Name: 'Agudo', Url: `${base}/agudo${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'Arroio do Tigre', Url: `${base}/arroio_do_tigre${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'Caçapava do Sul', Url: `${base}/cacapava_do_sul${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'Cachoeira do Sul', Url: `${base}/cachoeira_do_sul${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'Candelária', Url: `${base}/candelaria${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'Canguçu', Url: `${base}/cangucu${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'Encruzilhada do Sul', Url: `${base}/encruzilhada_do_sul${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'Faxinal do Soturno', Url: `${base}/faxinal_do_soturno${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'Nova Palma', Url: `${base}/nova_palma${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'Pantano Grande', Url: `${base}/pantano_grande${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'Paraíso do Sul', Url: `${base}/paraiso_do_sul${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'Salto do Jacuí', Url: `${base}/salto_do_jacui${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'São Gabriel', Url: `${base}/sao_gabriel${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'Sobradinho', Url: `${base}/sobradinho${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'Restinga Sêca', Url: `${base}/restinga_seca${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'Rio Pardo', Url: `${base}/rio_pardo${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'Vera Cruz', Url: `${base}/vera_cruz${filetype}`, Type: 'image', Active: true, Version: "v2", },
    { Name: 'Espumoso', Url: `${base}/espumoso${filetype}`, Type: 'image', Active: true, Version: "v2", },


];

// Buscar Dados

routes.get('/:name', (req, res) => {

    const name = req.params.name;
    let choosenDb;

    for (let i = 0; i < db.length; i++) {
        if (convertToSlug(db[i].Name) == convertToSlug(name) && db[i].Active == true) {

            choosenDb = db[i];

        }

    }

    return res.json(choosenDb);


});


// Buscar Dados

routes.get('/', (req, res) => {


    return res.json(db);


});



// Inserir dados

routes.post('/add', (req, res) => {

    const body = req.body;

    if (!body) {

        return res.status(400).end();

        db.push(body);

        return res.json(body);

    }

});


// Deletar dados

routes.delete('/:id', (req, res) => {

    const id = req.params.id;

    let newDB = db.filter(item => {

        if (!item[id]) {

            return item;

        }

    })

    db = newDB;

    return res.send(newDB);


});

app.listen(21262, () => {

    console.log(`Express started att http://localhost:21262`)

})