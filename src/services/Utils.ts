import { Cake, Chat, MusicNote, Flag, Sparkles } from "svelte-hero-icons";

export function tagToIcon(tag: string) {
  if (tag === "party" || tag === "birthday") {
    return Cake;
  } else if (tag === "music" || tag === "show") {
    return MusicNote;
  } else if (tag === "talk" || tag === "meeting" || tag === "conference") {
    return Chat;
  } else if (tag === "sports" || tag === "game") {
    return Flag;
  } else {
    return Sparkles;
  }
}
