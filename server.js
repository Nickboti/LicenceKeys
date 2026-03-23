const express = require('express');
const app = express();

// przykładowe klucze licencyjne
const licenses = {
    "TEST-SERVER-001": true,
    "TEST-SERVER-002": false
};

// endpoint sprawdzający licencję
app.get('/check', (req, res) => {
    const key = req.query.key;
    if (!key || licenses[key] === undefined) return res.send("INVALID");

    res.send(licenses[key] ? "OK" : "DISABLED");
});

// start serwera na porcie 3000
app.listen(3000, () => console.log("License server running on port 3000"));