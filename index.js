const express = require('express');
const path = require('path');
const app = express();
const port = 57775;

const isSEA = (() => {
    try { require('node:sea'); return true; } catch { return false; }
})();

app.get('/', (req, res) => {
    if (isSEA) {
        const sea = require('node:sea');
        const html = sea.getAsset('index.html', 'utf8');
        res.type('html').send(html);
    } else {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
