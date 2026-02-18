const express = require("express"); const app = express(); app.get("/", (req, res) => res.send("<h1>Monitoring Project is Live! 📈</h1>")); app.listen(3000, () => console.log("Ready!"));
