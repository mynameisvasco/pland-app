import { get, writable } from "svelte/store";
import { request } from "./ApiService";

export class User {
  id: number;
  phone: string;
  name: string;
  email: string;
  createdAt: string;
}

export const user = writable({} as User);
export const jwtToken = writable(localStorage.getItem("token") ?? "");

export async function login(email: string, password: string) {
  try {
    const res = await request("/users/login", "POST", { email, password });
    jwtToken.set(res.accessToken);
    localStorage.setItem("token", res.accessToken);
  } catch (e) {}
}

export async function fetchUserDetails() {
  try {
    const res = await request("/users/details", "GET", undefined, {
      Authorization: get(jwtToken),
    });
    user.set(res.user);
  } catch (e) {}
}

export async function register(
  name: string,
  email: string,
  password: string,
  phone: string
) {
  try {
    request("/users/register", "POST", { email, password, name, phone });
  } catch (e) {}
}

export function logout() {}
