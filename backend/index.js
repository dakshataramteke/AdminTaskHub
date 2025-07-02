const express = require('express');
const Router = require("./Routes/RegisterRouter.js");
const DashboardRouter = require("./Routes/DashboardRouter.js");
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.use("/api", Router);
app.use("/dashboard", DashboardRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
