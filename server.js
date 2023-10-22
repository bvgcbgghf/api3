const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
app.listen(PORT, "0.0.0.0", function () {});
console.log("koneksi berhasil");
