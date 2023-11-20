import express from 'express';
import hello from "./hello.js";
import lab5 from "./lab5.js";
import cors from "cors";
import courseRoutes from "./courses/routes.js";
import moduleRoutes from "./modules/routes.js";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());
courseRoutes(app);
moduleRoutes(app);
hello(app);
lab5(app);
app.listen(process.env.PORT || 4000);
