const app = require("quik-server")
const cors = require('cors')
// adding cors support (see https://github.com/expressjs/cors)
app.use(cors())
app.quikAdd("quik-dom")

app.settings = {
    // default settings (all are optional)
    host: "localhost",
    port: 3000,
    // server can also be https (see: https://stackoverflow.com/questions/11744975/enabling-https-on-express-js)
    server: require("http").createServer(app),
    websiteFile: "./website.jsx",
    codeFolder: "./main",
    computerGeneratedFolder: "./autogenerated.ignore",
    bundlerOptions: {
        outDir: "./docs",
    }, // see https://parceljs.org/api.html for options
    // afterSystemMiddlewareSetup: () => {
    //     // anything you want to do
    // },
    // afterSystemFrontendSetup: () => {
    //     // anything you want to do
    // },
    // afterSystemBundlerSetup: () => {
    //     // anything you want to do
    // },
    // afterServerStarted: () => {
    //     // anything you want to do
    // },
}
app.start()
