module.exports = async (app) => {
    var port;
    switch(process.env.NODE_ENV) {
        case "devel":
            port = 8080;
            app.listen(port);
            console.log("\x1b[34m", "Local: ", "\x1b[0m", "Listening on port " + port.toString() + " under development mode.")
        break;
        case "prod-local":
            port = 80;
            app.listen(port);
            console.log("\x1b[34m", "Local: ", "\x1b[0m", "Listening on port " + port.toString() + " under local production mode.")
        break;
        default:
            const ngrok = require("ngrok");
            const settings = require("./settings.json");
            app.listen(80);
            const url = await ngrok.connect({
                proto: "http",
                addr: 80,
                authtoken: settings["auth_token"],
                region: settings["region"]
            })
            console.log("\x1b[32m", "HTTPS (Secure):", "\x1b[0m", url);
            console.log("\x1b[31m", "HTTP (Insecure): ", "\x1b[0m", "http" + url.substring(5));
        break;
    }
}