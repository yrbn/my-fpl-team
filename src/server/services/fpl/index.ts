import type {
  Bootstrap,
  Fixture,
  PlayerSummary,
  GameweekLivePlayers,
  ManagerTeam,
  ManagerHistory,
  ManagerGameweek,
  ClassicLeague,
  H2HLeague,
  GameweekStatus,
  H2HMatches,
  GameweekDreamTeam,
  SetPieceNotes,
  CupStatus,
  ClassicLeagueOptionsParams,
  LeagueOptionsParams,
  H2HMatchesOptionsParams,
} from "./types";

import { get } from "../http";
import { API_BASE_URL } from "~/utils/constants";

/**
 * General data
 * Summary of the previous game weeks, fpl phases, teams and players
 * FPL settings
 */
export const getBootstrap = (): Promise<Bootstrap> =>
  get(`${API_BASE_URL}/bootstrap-static/`) as Promise<Bootstrap>;

/**
 * All fixtures or on a specific gameweek
 * @param gameweekId - ID of a gameweek.
 */
export const getFixtures = async (gameweekId?: number): Promise<Fixture[]> =>
  get(
    `${API_BASE_URL}/fixtures/${gameweekId ? `?event=${gameweekId}` : ""}`,
  ) as Promise<Fixture[]>;

/**
 * Data on a player
 * Current season fixtures and summary of the past seasons
 * @param playerId - player ID.
 */
export const getPlayerSummary = (playerId: number): Promise<PlayerSummary> =>
  get(`${API_BASE_URL}/element-summary/${playerId}/`) as Promise<PlayerSummary>;

/**
 * Gameweek live data on every player
 * @param gameweekId - ID of a gameweek.
 */
export const getGameweekLiveData = (
  gameweekId: number,
): Promise<GameweekLivePlayers> =>
  get(
    `${API_BASE_URL}/event/${gameweekId}/live/`,
  ) as Promise<GameweekLivePlayers>;

/**
 * Data on a manager
 * @param managerId - ID of a manager team.
 */
export const getManagerTeam = (managerId: number): Promise<ManagerTeam> =>
  get(`${API_BASE_URL}/entry/${managerId}/`) as Promise<ManagerTeam>;

/**
 * Manager history
 * Current season gameweeks summary, past years stats, played chips
 * @param managerId - ID of a manager team.
 */
export const getManagerHistory = (managerId: number): Promise<ManagerHistory> =>
  get(`${API_BASE_URL}/entry/${managerId}/history/`) as Promise<ManagerHistory>;

/**
 * Manager data on a given gameweek
 * Shows played chip, autosubs, gameweek summary, picked squad
 * @param managerId - ID of a manager team.
 * @param gameweekId - ID of a gameweek.
 */
export const getManagerGameweek = (
  managerId: number,
  gameweekId: number,
): Promise<ManagerGameweek> =>
  get(
    `${API_BASE_URL}/entry/${managerId}/event/${gameweekId}/picks/`,
  ) as Promise<ManagerGameweek>;

/**
 * Classic league standings
 * @param leagueId - ID of a classic league.
 * @param options - Page options.
 * @param options.pageStandings - Page number of standings.
 * @param options.pageNewEntries - Page number of new entries.
 * @param options.phase - Phase months: Overall - 1, September - 2, October - 3.
 */
export const getClassicLeague = (
  leagueId: number,
  options?: ClassicLeagueOptionsParams,
): Promise<ClassicLeague> =>
  get(
    `${API_BASE_URL}/leagues-classic/${leagueId}/standings/?page_new_entries=${
      options?.pageNewEntries ?? 1
    }&page_standings=${options?.pageStandings ?? 1}&phase=${
      options?.phase ?? 1
    }`,
  ) as Promise<ClassicLeague>;

/**
 * H2H league standings
 * @param leagueId - ID of a H2H league.
 * @param options Page options.
 * @param options.pageStandings Page number of standings.
 * @param options.pageNewEntries Page number of new entries.
 */
export const getH2HLeague = (
  leagueId: number,
  options?: LeagueOptionsParams,
): Promise<H2HLeague> =>
  get(
    `${API_BASE_URL}/leagues-h2h/${leagueId}/standings/?page_new_entries=${
      options?.pageNewEntries ?? 1
    }&page_standings=${options?.pageStandings ?? 1}`,
  ) as Promise<H2HLeague>;

/**
 * Fetch an entrys matches from a H2H league.
 * @param leagueId ID of the H2H league.
 * @param options
 * @param options.pageStandings Page number of standings.
 * @param options.pageNewEntries Page number of new entries.
 * @param managerId ID of the entry whos matches should be fetched.
 * @param gameweekId - ID of a gameweek.
 * @param page Page number to fetch.
 */
export const getH2HMatches = (
  leagueId: number,
  options?: H2HMatchesOptionsParams,
): Promise<H2HMatches> => {
  const params: string[] = [];

  if (options?.managerId) {
    params.push(`&entry=${options.managerId}`);
  }

  if (options?.gameweekId) {
    params.push(`&event=${options.gameweekId}`);
  }

  return get(
    `${API_BASE_URL}/leagues-h2h-matches/league/${leagueId}/?page=${
      options?.page ?? "1"
    }${params.join("")}`,
  ) as Promise<H2HMatches>;
};

/**
 * Current gameweek update status
 */
export const getGameweekStatus = (): Promise<GameweekStatus> =>
  get(`${API_BASE_URL}/event-status/`) as Promise<GameweekStatus>;

/**
 * Current gameweek dream team
 * @param gameweekId - ID of a gameweek.
 */
export const getGameweekDreamTeam = (
  gameweekId: number,
): Promise<GameweekDreamTeam> =>
  get(
    `${API_BASE_URL}/dream-team/${gameweekId}/`,
  ) as Promise<GameweekDreamTeam>;

/**
 * Set piece notes
 */
export const getSetPieceNotes = (): Promise<SetPieceNotes> =>
  get(`${API_BASE_URL}/team/set-piece-notes/`) as Promise<SetPieceNotes>;

/**
 * League cup status
 * @param leagueId - ID of a H2H league.
 */
export const getLeagueCupStatus = (leagueId: number): Promise<CupStatus> =>
  get(`${API_BASE_URL}/league/${leagueId}/cup-status/`) as Promise<CupStatus>;
