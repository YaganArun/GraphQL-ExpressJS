const express = require('express');

app = express();
const PORT = 5000;

app.listen(PORT, () => console.log(`SERVER LISTENING AT PORT ${PORT}`))