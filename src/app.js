import env from "./config/env.js";
import server from "./utils/server.js";

const port = env.port;

server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
