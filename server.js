    const { request } = require("express");
const express = require("express");
    const app = express();

    const PORT =process.env.PORT ||6000;

    const connectDb=require("./config/connectDb");
    connectDb();
        const user =require("./routes/user");
        app.use(express.json());
        app.use("/use",user);

        const product =require("./routes/user");
        app.use("/product",product);

        const upload =require("./routes/upload");
        app.use("/api",cart);

        app.listen(PORT,err =>err ?console.log(err):console.log(`server run on ${PORT}`))