/* eslint-env jest */

import * as mockData from "@/tests/unit/helpers";

export const getBooks = jest.fn().mockResolvedValue(mockData.BOOKS);

export const registerUser = jest.fn().mockResolvedValue(mockData.AUTH_RESPONSE);

export const login = jest.fn().mockResolvedValue(mockData.AUTH_RESPONSE);

export { parseJWT, setToken } from "@/api";

export const getUser = jest.fn().mockResolvedValue(mockData.SERVER_USER);

export const createList = jest.fn().mockResolvedValue(mockData.TEST_LIST);

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
  return Promise.resolve(Object.assign(mockData.TEST_LIST, update));
}