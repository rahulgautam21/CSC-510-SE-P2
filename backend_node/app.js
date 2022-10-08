require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// All routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const paymentBRoutes = require("./routes/paymentBRoutes");

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "SE Project",
      jsonEditor: true,
      description: "Walpaper Store API Information",
      contact: {
        name: "Group 17",
      },
      servers: ["http://localhost:5000"],
    },
  },
  apis: [
    "app.js",
    "./routes/auth.js",
    "./routes/user.js",
    "./routes/product.js",
    "./routes/category.js",
  ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch(console.log("DB CONNECTION FAILED"));

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", paymentBRoutes);

// PORT
const port = process.env.PORT || 8000;

// Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
