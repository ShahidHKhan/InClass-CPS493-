//users model

import type { user } from '../types';
import data from '../data/users.json';

const users = data as user[];

export function getAll() {
    return users;
}   

export function get(id: number): user {
    const foundUser = users.find((u) => u.id === id);
    if (!foundUser) {
        throw new Error(`User with ID ${id} not found`);
    }
    return foundUser;
}

export function create(userInput: Omit<user, 'id'>) {
    const createdUser: user = {
        id: users.length + 1,
        ...userInput
    };
    users.push(createdUser);
    return createdUser;
}

export function update(id: number, userPatch: Partial<user>) {
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
        throw new Error(`User with ID ${id} not found`);
    }
    users[userIndex] = { ...users[userIndex], ...userPatch };
    return users[userIndex];
}

export function remove(id: number) {
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
        throw new Error("User not found")
    }
    const removedUser = users.splice(userIndex, 1);
    return removedUser[0];
}