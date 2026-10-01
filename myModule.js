const http = require("http");
require("dotenv").config(); // to use .env fil
const app = require("./app");

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
