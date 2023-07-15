import type {
  IClientStoredContact,
  IUser,
  UsersFilterList,
} from "chat-app-server";
import { SERVER_BASE_URL } from "./Constants";
/**
 * This function is responsible for fetching all contacts from the backend.
 * The idea is that we only want to store as much messages as needed.
 * And as well having filter to retrieve only specific fields of the IUserObject.
 */
export async function fetchUsers(
  filterList?: UsersFilterList
): Promise<IClientStoredContact[] | []> {
  let filterString = "";
  if (filterList) {
    filterString = `?fields=${filterList.join(",")}`;
  }
  const url = `${SERVER_BASE_URL}/api/users${filterString}`;
  const response = await fetch(url);
  const data = await response.json(); // Use response.json() to retrieve the response data
  return data;
}
