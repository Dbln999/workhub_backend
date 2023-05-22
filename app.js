const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const internRoutes = require("./routes/internData.routes");
const offerRoutes = require("./routes/offer.routes");
const companyRoutes = require("./routes/company.routes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: true }));

app.use("/auth", authRoutes);
app.use("/intern", internRoutes);
app.use("/offer", offerRoutes);
app.use("/company", companyRoutes);
const startApp = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(process.env.PORT, () =>
      console.log(`Server started on PORT: ${process.env.PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
};
startApp();
