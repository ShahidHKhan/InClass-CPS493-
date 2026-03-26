//users model

import type { user } from '../types';
import data from '../data/users.json';
import { PagingRequest } from '../types/dataEnvelopes';
import { count } from 'console';

const users = data as user[];

export function getAll(params: PagingRequest): user[] {
    let users = data.users as user[];
    const count = users.length;

    if (params?.search) {
        const search = params.search.toLowerCase();
        users = users.filter(u =>
            `${u.firstname} ${u.lastname}`.toLowerCase().includes(search)
        );
    }

    if (params?.sortBy) {
        users.sort((a, b) => {
            const aValue = a[params.sortBy as keyof user];
            const bValue = b[params.sortBy as keyof user];

            if (aValue < bValue) {
                return params.descending ? 1 : -1;
            }
            if (aValue > bValue) {
                return params.descending ? -1 : 1;
            }
            return 0;
        });
    }

    const page = params?.page || 1
    const pageSize = params?.pageSize || 10;
    const start = (page - 1) * pageSize;
    users = users.slice(start, start + pageSize);
    return {users, count};
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