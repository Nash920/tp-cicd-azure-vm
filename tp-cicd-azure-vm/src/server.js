const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

app.get("/hello", (req, res) => {
  const name = req.query.name || "world";
  res.status(200).json({ message: `Hello, ${name}!` });
});

const port = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;
