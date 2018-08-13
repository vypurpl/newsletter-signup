const express = require('express');
const bodyParser = require('body-parser');
const Airtable = require('airtable');
const subscribersBase = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE);

const app = express();

app.use(express.static(__dirname +'./../../')); //serves the index.html
app.use(bodyParser.json());

app.post('/subscribe', (req, res) => {
    if (req.body.email) {
        subscribersBase('subscribers').create({email: req.body.email, creation_date: Date.now()}, function(err, record) {
            if (err) { console.error(err); return; }
            console.log(record.getId());
            console.log(record.get('id'));
            console.log(record.get('email'));
        });
    }
});
/*

    const options = {
        hostname: process.env.AIRTABLE_HOST,
        port: 3002,
        path: process.env.AIRTABLE_PATH,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': req.get('Content-Length'),
            'Authorization' : 'Bearer ' + process.env.AIRTABLE_API_KEY
        }
    };

    const subscribeReq = http.request(options, (rdata) => {
        console.log(rdata);
    });

    subscribeReq.write(JSON.stringify(req.body));
    subscribeReq.end();
*/

app.get('/healthcheck', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: "healthy" }));
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/