import { writable } from "svelte/store";
import { request } from "./ApiService";
import { Coordinates } from "./LocationService";

export class Place {
  id: number;
  name: string;
  location: Coordinates;
  price: number;
  opensAt: string;
  closesAt: string;
  availableDates: number[];
}

export const nearPlaces = writable([] as Place[]);

export async function fetchPlaceByLocation(location: Coordinates) {
  return await request("/places/findByLocation", "POST", {
    coordinates: { latitude: location.lat, longitude: location.lon },
    radius: 30,
  });
}

export async function fetchPlaceByName(name: string) {
  return (await request(
    `/places/findByNameLike?name=${name}`,
    "GET"
  )) as Place[];
}
