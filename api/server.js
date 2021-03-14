const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
    name: 'session',
    secret: 'password',
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
}))

const usersRoute = require("./routes/users");
const portfolioRoute = require("./routes/portfolio");
app.use("/users",usersRoute(dbHelpers));
app.use("/portfolio",portfolioRoute(dbHelpers));
app.use("/wallet", walletRoute(dbHelpers));



app.get("/", (req, res) => {
    res.send("From backend");
});
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});