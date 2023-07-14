import type { IClientStoredContact, IUser } from "chat-app-server";

/**
 * This function is responsible for fetching all contacts from the backend.
 * The idea is that we only want to store as much messages as needed.
 * And as well having filter to retrieve only specific fields of the IUserObject. 
 */
export async function fetchUsers(filterList?: (keyof IUser)[]
): Promise<IClientStoredContact[] | []> {
  let filterString = "";
  if (filterList) {
    filterString = `?fields=${filterList.join(",")}`;
  }
  const url = `http://localhost:3000/api/users${filterString}`;
  const response = await fetch(url);
  const data = await response.json(); // Use response.json() to retrieve the response data
  return data;
}
