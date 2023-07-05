const express = require('express');
const cors = require("cors");
const UserCRUDRouter = require("./routes/users-crud.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", UserCRUDRouter);

app.listen(8080, () => {
    console.info('Express app server listening on PORT: 8080');
});
