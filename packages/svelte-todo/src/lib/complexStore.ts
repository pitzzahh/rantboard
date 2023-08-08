// TODO: use Map instead of array

import { writable } from 'svelte/store';

const users = writable<Map<string, User>>();
const todos = writable<Map<string, Todo[]>>();
