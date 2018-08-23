import express from 'express';

const app = express();

app.use('/', (req, res) => {
  const x = {a: 42, b: 69, ts: Date.now()};
  res.json(x);
});

app.listen(8080, () => {
  console.log('listening on http://localhost:8080');
});
