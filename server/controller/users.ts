//users controller

import {Router} from "express";

const app = Router();

app
.get("/", (req, res) => {
    res.send([
        {id: 1, name: "John Doe", email: "john.doe@example.com"},
        {id: 2, name: "Jane Smith", email: "jane.smith@example.com"}
    ])
})
.get("/:id", (req, res) => {
    const userId = req.params.id;
    // Simulate fetching a user by ID
    res.send({id: userId, name: "User Name", email: "user@example.com"});
})
.post("/", (req, res) => {
    // Simulate creating a new user
    res.send({id: 3, name: "New User", email: "new.user@example.com"});
})
.patch("/:id", (req, res) => {
    const userId = req.params.id;
    // Simulate updating a user
    res.send({id: userId, name: "Updated User", email: "updated.user@example.com"});
})
.delete("/:id", (req, res) => {
    const userId = req.params.id;
    // Simulate deleting a user
    res.send({message: `User with ID ${userId} deleted`});
});

export default app;