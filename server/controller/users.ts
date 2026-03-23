//users controller

import {Router} from "express";
import { getAll, get, create, update, remove } from "../models/users";

const app = Router();

app
//blank
.get("/", (req, res) => {
    res.send(getAll().map(x => ({
        ...x,
        password: undefined
    })));
})
.get("/count", (req, res) => {
    const count = getAll().length;
    res.send({ count });
})
//anything after the slash is considered an id
//this is a "param"
.get("/:id", (req, res) => {
    const userId = req.params.id;
    // Simulate fetching a user by ID
    res.send(get(parseInt(userId)));
})

.post("/", (req, res) => {
    // Simulate creating a new user
    const newUser = create(req.body);
    res.status(201).send(newUser);
})
.patch("/:id", (req, res) => {
    const userId = req.params.id;
    // Simulate updating a user
    res.send(update(parseInt(userId), req.body));
})
.delete("/:id", (req, res) => {
    const userId = req.params.id;
    // Simulate deleting a user
    const removedUser = remove(parseInt(userId));
    res.send({message: `User with ID ${userId} deleted`, user: removedUser});
});

export default app;