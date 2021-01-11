module.exports = (express, app) => {
    app.get("/", (req, res) => {
        res.send("hello world")
    })
}