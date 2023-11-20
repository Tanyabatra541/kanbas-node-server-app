import express from 'express';
import Hello from "./hello.js";
import lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());
CourseRoutes(app);
ModuleRoutes(app);
Hello(app);
lab5(app);
app.listen(process.env.PORT || 4000);
