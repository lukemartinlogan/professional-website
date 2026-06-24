const express = require('express');
const path = require('path');

const app = express();
const PORT = 4555;

app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
