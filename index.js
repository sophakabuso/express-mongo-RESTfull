import express from 'express';
import routes from './src/routes/Routes';

const app = express(); // create app variable and run the express server
const PORT = 8080;

routes(app);

app.get('/', (req, res) =>
  res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your server is running on port ${PORT}`)
);
