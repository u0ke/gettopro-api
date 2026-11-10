import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());

let projects = [
    {
        id: 1,
        name: "Site vitrine ",
        determine: false,
    },

    {
        id: 2,
        name: "Application web ",
        determine: false,
    },
];

app.get("/", (req, res) => {
    res.json({ message: "GestoPro  V1" });
});

// Get all projects
app.get("/projects", (req, res) => {
    res.status(200).json(projects);
});

// Create a new project
app.post("/projects", (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: "invalid data" });
    }
    const newProject = {
        id: projects.length + 1,
        name,
        determine: false,
    };
    projects.push(newProject);
    res.status(201).json(projects);
});

// Get a specific project by ID
app.get("/projects/:id", (req, res) => {
    const { id } = req.params;
    const project = projects.find((p) => p.id === Number(id));
    if (!project) {
        return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
});

// Delete a project by ID
app.delete("/projects/:id", (req, res) => {
    const { id } = req.params;
    const projectIndex = projects.findIndex((p) => p.id === Number(id));
    if (projectIndex === -1) {
        return res.status(404).json({ message: "Project not found" });
    }
    projects.splice(projectIndex, 1);
    res.status(200).json({ message: "Project deleted" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running`);
});