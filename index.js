const express = require('express')
const app = express()
const PORT = 4000


app.get('/', (req, res) => {
  res.send('Welcome, your app is working well');
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app