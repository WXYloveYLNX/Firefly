// GetOwnedGames response
export interface SteamOwnedGamesResponse {
	response: {
		game_count: number;
		games: SteamOwnedGame[];
	};
}

export interface SteamOwnedGame {
	appid: number;
	name: string;
	playtime_forever: number;
	playtime_2weeks?: number;
	playtime_windows_forever: number;
	playtime_mac_forever: number;
	playtime_linux_forever: number;
	rtime_last_played: number;
	img_icon_url: string;
	img_logo_url: string;
	content_descriptorids?: number[];
	has_community_visible_stats?: boolean;
	playtime_disconnected?: number;
}

// GetRecentlyPlayedGames response
export interface SteamRecentlyPlayedResponse {
	response: {
		total_count: number;
		games: SteamRecentlyPlayedGame[];
	};
}

export interface SteamRecentlyPlayedGame {
	appid: number;
	name: string;
	playtime_2weeks: number;
	playtime_forever: number;
	img_icon_url: string;
	img_logo_url: string;
}

// GetPlayerSummaries response
export interface SteamPlayerSummariesResponse {
	response: {
		players: SteamPlayer[];
	};
}

export interface SteamPlayer {
	steamid: string;
	personaname: string;
	profileurl: string;
	avatar: string;
	avatarmedium: string;
	avatarfull: string;
	personastate: number;
	communityvisibilitystate: number;
	lastlogoff: number;
	realname?: string;
	timecreated?: number;
	loccountrycode?: string;
}

// Unified game type used internally
export interface UnifiedSteamGame {
	appid: number;
	name: string;
	playtimeForever: number;
	playtime2Weeks: number;
	lastPlayed: number;
	imgIconUrl: string;
	imgLogoUrl: string;
	headerUrl: string;
}

// Steam CDN image URL helpers (no API key needed)
export function getSteamImageUrl(
	appid: number,
	hash: string,
	type: "icon" | "logo" | "header" | "capsule" | "library_600x900" | "library_hero",
): string {
	const cdn = "https://steamcdn-a.akamaihd.net/steam";
	switch (type) {
		case "icon":
			return `${cdn}/apps/${appid}/${hash}.jpg`;
		case "logo":
			return `${cdn}/apps/${appid}/${hash}.jpg`;
		case "header":
			return `${cdn}/apps/${appid}/header.jpg`;
		case "capsule":
			return `${cdn}/apps/${appid}/capsule_231x87.jpg`;
		case "library_600x900":
			return `${cdn}/apps/${appid}/library_600x900.jpg`;
		case "library_hero":
			return `${cdn}/apps/${appid}/library_hero.jpg`;
		default:
			return "";
	}
}

export interface SteamConfig {
	steamId: string;
	apiKey: string;
}
