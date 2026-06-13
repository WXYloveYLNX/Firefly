import type { SteamConfig } from "../types/steam";

export const steamConfig: SteamConfig = {
	steamId: "76561199819682244",
	apiKey: import.meta.env.STEAM_API_KEY || "",
};
