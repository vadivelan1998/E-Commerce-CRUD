const app = require("./index");

const connect = require("./configs/db");
var port = process.env.PORT || 5000;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});