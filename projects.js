import {router} from "express";
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

router.get("/projects", (req, res) => {
    res.status(200).json(projects);
});

router.post("/projects", (req, res) => {
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
