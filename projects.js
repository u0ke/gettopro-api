import {router} from "express";
import 'dotenv/config';


const router = Router();

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

router.get("/", (req, res) => {
    res.status(200).json(projects);
});

router.post("/", (req, res) => {
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

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const project = projects.find((p) => p.id === Number(id));
    if (!project) {
        return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const projectIndex = projects.findIndex((p) => p.id === Number(id));
    if (projectIndex === -1) {
        return res.status(404).json({ message: "Project not found" });
    }
    projects.splice(projectIndex, 1);
    res.status(200).json({ message: "Project deleted" });
});

export default router;