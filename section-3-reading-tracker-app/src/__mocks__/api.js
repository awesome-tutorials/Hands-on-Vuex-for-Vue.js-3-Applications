import axios from "axios";
import books from "@/../backend/books";

let CURRENT_USER = null;

export function getBooks() {
  return Promise.resolve(books);
}

export function registerUser(newUser) {
  newUser.id = 0;
  CURRENT_USER = newUser;
  return Promise.resolve({
    accessToken: "fakeToken"
  });
}

export function login(credentials) {
  return Promise.resolve({
    accessToken: "fakeToken"
  });
}

export function parseJWT(token) {
  return { sub: 0 };
}

export function setToken(newToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
}

export function getUser(userId) {
  return Promise.resolve(CURRENT_USER);
}

export function createList(newList) {
  newList.id = 0;
  return Promise.resolve(newList);
}

export const getLists = jest
  .fn()
  .mockResolvedValueOnce([])
  .mockResolvedValueOnce([])
  .mockRejectedValueOnce({
    response: {
      status: 403
    }
  });

export function updateList(listId, update) {
  return Promise.resolve();
}
