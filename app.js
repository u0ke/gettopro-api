import express from "express";
import "dotenv/config";
import projectsRouter from './routes/projects.js';


const app = express();
app.use(express.json());

app.use("/projects", projectsRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is UP on ${PORT}`);
});