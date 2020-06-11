const express = require('express');
const path = require('path');
// REST_API :
const members = require('./Members');
const app = express();




app.get('/api/members', (req, res) => res.json(members)); // no need of curly braces;

// set Static Folder:
app.use(express.static(path.join(__dirname, 'public')));



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`[STATUS] Server SLC-40 started on PORT: ${PORT}`));