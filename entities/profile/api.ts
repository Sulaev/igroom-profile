import "server-only";
import { ProfileSchema, Profile } from "./types";
import { mockProfile } from "../../mock/profile";

export async function getProfile(): Promise<Profile> {
  try {
    const res = await fetch(
      "https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591",
      {
        headers: { Origin: "http://localhost:3000" },
        cache: "no-store",
      }
    );
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    return ProfileSchema.parse(data.data);
  } catch (e) {
    return ProfileSchema.parse(mockProfile);
  }
}
