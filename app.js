const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Get the container name from the HOSTNAME environment variable
const containerName = process.env.HOSTNAME;

app.get('/', (req, res) => {
  res.send(`Hello from container: ${containerName}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
