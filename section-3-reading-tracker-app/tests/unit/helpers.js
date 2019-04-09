import store from "@/store";

const DEFAULT_STATE = JSON.parse(JSON.stringify(store.state));
export function resetState() {
  store.replaceState(DEFAULT_STATE);
}

export const NEW_USER = {
  name: "John Doe",
  bio: "I like books",
  email: "test@email.com",
  password: "123456"
};

export const AUTH_RESPONSE = {
  accessToken: `abcd.${btoa(JSON.stringify({ sub: 0 }))}.efgh`
};

export const SERVER_USER = Object.assign(NEW_USER, {
  id: 0,
  listIds: []
});

export const TEST_LIST = {
  id: 0,
  userId: 0,
  name: "Cool Books",
  description: "Books I think are cool",
  bookIds: [3, 4]
};

export { books as BOOKS } from "@/../backend/books";
