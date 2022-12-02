const express = require("express");

const app = express();
const port = process.env.PORT || 3001;

app.get(["/", "/:name"], (req, res) => {
    const html = `
        <h1>Cookie test</h1>
        <br/>
        Cookies: ${req.headers.cookie}
        <br/>
        <button style="border:1px #eee solid; padding: 10px; margin: 10px 0" onclick="location.reload()">Reload</button>
    `;
    res.cookie("testcookie", "cookieval1", { httpOnly: true, sameSite: 'none', secure: true }).send(html);
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));