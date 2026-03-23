const express = require('express');
const fs = require('fs');
const app = express();

// funkcja wczytująca klucze przy każdym request
function loadLicenses() {
    const data = fs.readFileSync("keys.json");
    return JSON.parse(data);
}

// endpoint sprawdzający licencję
app.get('/check', (req, res) => {
    const key = req.query.key;
    if (!key) return res.send("INVALID");

    const licenses = loadLicenses(); // wczytanie aktualnych kluczy
    if (licenses[key] === undefined) return res.send("INVALID");

    res.send(licenses[key] ? "OK" : "DISABLED");
});

// start serwera
app.listen(3000, () => console.log("License server running on port 3000"));
