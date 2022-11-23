const express = require("express");
const app = express();
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ayush:ayush@todoappnodeexpress.ipbsj.mongodb.net/graphqlBooksApp?retryWrites=true&w=majority"
    );
    console.log("Connected to DB");
    app.listen(5000, () => {
      console.log("Server started at port 5000");
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
