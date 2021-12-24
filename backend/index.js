
const hbs = require("hbs")
const express = require("express")
const app = express();
const path = require("path")

const template = path.join(__dirname, "../")
const static = path.join(__dirname, "../")
const partial = path.join(__dirname, "../partials")


hbs.registerPartials(partial)
app.set("view engine", "hbs")
app.set("views", template)

app.use(express.static(static))

app.get("/", (req, res)=>{
  res.render("index")
})

app.listen(8000, "127.0.0.1", ()=>{
  console.log("server started")
})