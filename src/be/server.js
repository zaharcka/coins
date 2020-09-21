const superagent = require("superagent");

const http = require("http");

const hostname = "127.0.0.1";
const port = 3743;

let MOCK_DATA = "";

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { url } = req;
  if (url === "/") {
    try {
      if (MOCK_DATA.length === 0) {
        console.log("Getting data from real API...");
        const data = await superagent(
          "get",
          "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=USD"
        )
          .withCredentials()
          .set("X-CMC_PRO_API_KEY", "9c02e2c9-e52c-49b0-8090-e86366a1376f");
        MOCK_DATA = JSON.stringify(data.text);
        res.write(MOCK_DATA);
        res.end();
      } else {
        console.log("We have data. Send MOCK");
        res.write(MOCK_DATA);
        res.end();
      }
    } catch (e) {
      res.end("Error");
    }
  } else {
    console.log("Other URL");
    res.write("somebody");
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Backend proxy is running at http://${hostname}:${port}/`);
});
