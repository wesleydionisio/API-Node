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

    {
        "name": "Agudo",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "Arroio do Tigre",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "Caçapava do Sul",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "Cachoeira do Sul",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "Candelária",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "Canguçu",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "Encruzilhada do Sul",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "Faxinal do Soturno",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "Nova Palma",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "Pantano Grande",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "Paraíso do Sul",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "Salto do Jacuí",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "São Gabriel",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "Sobradinho",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "Restinga Sêca",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "Rio Pardo",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "Vera Cruz",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

    {
        "name": "Espumoso",
        "isActive": true,
        "version": "v2",
        "content": {
            "messages": [
                {
                    "type": "image",
                    "url": null,
                    "buttons": []
                }
            ],
            "actions": [],
            "quick_replies": []
        }

    },

]

// Buscar Dados

routes.get('/:name', (req, res) => {

    const name = req.params.name;
    let choosenDb;
    let choosenUrl;

    for (let i = 0; i < db.length; i++) {
        if (convertToSlug(db[i].name) == convertToSlug(name) && db[i].isActive == true) {

            choosenUrl = db[i].content.messages[0].url = `${base}/${convertToSlug(db[i].name)}${filetype}`;
            choosenDb = db[i];

        }

    }

    return res.json(choosenDb);


});


// Buscar Dados

routes.get('/', (req, res) => {

    for (let i = 0; i < db.length; i++) {

        if (db[i].isActive) {

            choosenUrl = db[i].content.messages[0].url = `${base}/${convertToSlug(db[i].name)}${filetype}`;

        }

    }

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