const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(require('cors')());
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(port, () => console.log('Storyteller backend listening on port ' + port));
