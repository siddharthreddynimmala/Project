const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const cors = require("cors");

//rest app
const app = express();

//dotenv config
dotenv.config();

//database config
connectDB();

//middlewares
app.use(cors());
app.use(morgan());
app.use(express.json());

//routes
app.use("/api/v1/auth", require("./routes/authRoutes.js"));
app.use('/api/v1/members',require('./routes/volunteerRoutes.js'))

//PORT number
const PORT = 8000;

//Listening the PORT
app.listen(PORT, () => {
  console.log(`Server is running`);
});
