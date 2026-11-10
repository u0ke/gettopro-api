import express from "express";
import "dotenv/config";
import prtojectsRouter from "./routes/projects.js";


const app = express();
app.use(express.json());

app.use("/projects", prtojectsRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("server is UP on 3000");
});