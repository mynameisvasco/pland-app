import { writable } from "svelte/store";

export class Coordinates {
  lat: number;
  lon: number;
}

export const locationCoordinates = writable({} as Coordinates);

export function geolocate() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.watchPosition(
      (position) => {
        locationCoordinates.set({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        resolve(undefined);
      },
      (error) => {
        reject(error);
      }
    );
  });
}
