const express = require("express");
const cors = require("cors");
const initDB = require("./db/connect");
const routerAPI = require("./routes/indexRouter");
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

routerAPI(app);

app.listen(port, () => {
  console.log(`the port ${port} is active`);
});

initDB();
