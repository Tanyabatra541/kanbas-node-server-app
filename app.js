import express from "express";
import hello from "./hello.js";
import lab5 from "./lab5.js";
import cors from "cors";
import UserRoutes from "./users/routes.js";
import mongoose from "mongoose";
const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);
// mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
import courseRoutes from "./courses/routes.js";
import moduleRoutes from "./modules/routes.js";
import "dotenv/config";
import session from "express-session";

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

courseRoutes(app);
moduleRoutes(app);
hello(app);
lab5(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);
