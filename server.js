const express = require("express")

const app = express()


//routes

// Greetings
// Make a route '/greeting' that sends a generic greeting to the screen like "Hello, stranger".


app.get("/greeting", (req, res) => {
    res.send(`<h1>Hello, stranger.</h1>`)
})


// Give the greeting route a param /:name

// When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy' should display Wow! Hello there, Jimmy-boy on the page).

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name
    res.send(`<h1>Hello there, ${name}</h1>`)
})



























app.listen(3000, () => {console.log("listening on port 3000")})