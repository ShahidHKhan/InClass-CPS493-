//users controller

import {Router} from "express";
import { getAll, get, create, update, remove } from "../models/users";
import { user, DataEnvelope, DataListEnvelope } from "../types";

const app = Router();

app
//blank
.get("/", (req, res) => {
    const {users, count} = getAll(req.query);
    const sanitizedUsers = users.map(({id, firstname, lastname, email}) => ({id, firstname, lastname, email}));
    const dataEnvelope: DataListEnvelope<user> = {
        data: sanitizedUsers,
        isSuccess: true,
        total: count
    };
    res.send(dataEnvelope);
})
.get("/count", (req, res) => {
    const { count } = getAll(req.query);
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
    const response: DataEnvelope<user> = {
        data: removedUser,
        isSuccess: true,
        message: `${removedUser.firstname} ${removedUser.lastname} deleted`
    };
    res.send(response);
});

export default app;