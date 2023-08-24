import express from 'express';
import bodyParser from 'body-parser';
import { render } from "ejs";

const app = express();
const port = 3000;

var dtasks = [];
var wtasks = [];
var disp = true;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { dtasks: dtasks, wtasks: wtasks, display: disp });
});

app.post("/submit", (req, res) => {
    var task = req.body["task"];
    dtasks.push(task);
    disp = true;
    res.render("index.ejs", { dtasks: dtasks, wtasks: wtasks, display: disp });
});

app.post("/submitwork", (req, res) => {
    var task = req.body["task"];
    wtasks.push(task);
    disp = false;
    res.render("index.ejs", { dtasks: dtasks, wtasks: wtasks, display: disp });
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


