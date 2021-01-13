import { parse, parseISO } from "date-fns";
import { get, writable } from "svelte/store";
import { request } from "./ApiService";
import { jwtToken } from "./AuthService";
import { Coordinates } from "./LocationService";

export class Event {
  id?: number;
  name: string;
  _tags?: string;
  attendanceLimit: number;
  needsTicket: boolean;
  description?: string;
  createdAt: string;
  startsAt: string;
  duration: number;
}

export const searchedEvents = writable([] as Event[]);
export const nearEvents = writable([] as Event[]);

export async function fetchEventsByTags(tags: string[]) {
  return (await request("/events/findByTags", "POST", { tags })) as Event[];
}

export async function fetchEventsByName(name: string) {
  return (await request(
    `/events/findByNameLike?name=${name}`,
    "GET"
  )) as Event[];
}

export async function fetchEventsByLocation(coordinates: Coordinates) {
  return await request("/events/findByLocation", "POST", {
    coordinates: {
      latitude: coordinates.lat,
      longitude: coordinates.lon,
    },
  });
}

export async function createEvent(dto: any) {
  return await request(
    "/events/create",
    "POST",
    {
      name: dto.name,
      attendanceLimit: dto.attendance,
      placeId: dto.placeId,
      startsAt: parse(dto.startsAt, "dd/MM/yyyy HH:mm", new Date()),
      duration: dto.duration,
      _tags: dto.tags.split(",").map((t: string) => t.trim()),
      needsTicket: dto.ticketline,
      ticketPrice: dto.ticketPrice,
    },
    { Authorization: "Bearer " + get(jwtToken) }
  );
}
