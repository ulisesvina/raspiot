module.exports = (express, app) => {
    app.get("/", (_, res) => {
        res.render("main")
    });
}