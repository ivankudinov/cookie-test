const express = require("express");

const app = express();
const port = process.env.PORT || 3001;

app.get(["/", "/:name"], (req, res) => {
    greeting = "<h1>Hello From Node on Fly!</h1>";
    res.send(greeting);
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));