import express from 'express';

const app = express();

let greetings: any = {
    "hu": "Szia",
    "en": "Hello"
};

app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.get('/api/greet/:person', (req, res) => {
    // read parameter from the URL path (e.g. /api/greet/Lajos)
    const name = req.params.person;

    // read parameter from the query string (e.g. /api/greet/Lajos?lang=hu)
    const lang = String(req.query.lang);

    const greeting = greetings[lang];

    if (!greeting) {
        return res.status(400).json({ error: `Language "${lang}" is not supported yet.` });
    }

    res.json({ message: greeting + ', ' + name });
});

app.post('/api/greet', (req, res) => {
    const lang = req.body.lang;
    const greeting = req.body.greeting;

    if (!lang || !greeting) {
        return res.status(400).json({ error: 'Missing data: language and greeting must be defined.' });
    }

    greetings[lang] = greeting;

    res.status(200);
    res.send();
});

app.listen(3000, () => {
    console.log('Server is listening at port 3000 ...');
});