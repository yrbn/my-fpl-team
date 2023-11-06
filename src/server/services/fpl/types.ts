export interface Bootstrap {
  events: Gameweek[];
  game_settings: GameSettings;
  phases: Phase[];
  teams: Team[];
  total_players: number;
  elements: Player[];
  element_stats: PlayerStats[];
  element_types: PlayerTypes[];
}

export interface Gameweek {
  id: number;
  name: string;
  deadline_time: string;
  average_entry_score: number;
  finished: boolean;
  data_checked: boolean;
  highest_scoring_entry: number | null;
  deadline_time_epoch: number;
  deadline_time_game_offset: number;
  highest_score: number | null;
  is_previous: boolean;
  is_current: boolean;
  is_next: boolean;
  cup_leagues_created: boolean;
  h2h_ko_matches_created: boolean;
  chip_plays: GameweekChipInPlay[];
  most_selected: number | null;
  most_transferred_in: number | null;
  most_captained: number | null;
  most_vice_captained: number | null;
  top_element: number | null;
  top_element_info: GameweekTopPlayer | null;
  transfers_made: number;
}

export interface GameweekChipInPlay {
  chip_name: ChipName;
  num_played: number;
}

export type ChipName = "bboost" | "3xc" | "freehit" | "wildcard";

export interface GameweekTopPlayer {
  id: number;
  points: number;
}

export interface GameSettings {
  league_join_private_max: number;
  league_join_public_max: number;
  league_max_size_public_classic: number;
  league_max_size_public_h2h: number;
  league_max_size_private_h2h: number;
  league_max_ko_rounds_private_h2h: number;
  league_prefix_public: string;
  league_points_h2h_win: number;
  league_points_h2h_draw: number;
  league_points_h2h_lose: number;
  league_ko_first_instead_of_random: boolean;
  cup_start_event_id: number | null;
  cup_stop_event_id: number | null;
  cup_qualifying_method: string | null;
  cup_type: string;
  squad_squadplay: number;
  squad_squadsize: number;
  squad_team_limit: number;
  squad_total_spend: number;
  ui_currency_multiplier: number;
  ui_use_special_shirts: boolean;
  ui_special_shirt_exclusions: unknown[]; // ?
  stats_form_days: number;
  sys_vice_captain_enabled: boolean;
  transfers_cap: number;
  transfers_sell_on_fee: number;
  league_h2h_tiebreak_stats: string[];
  timezone: string;
}

export interface Phase {
  id: number;
  name: string;
  start_event: number;
  stop_event: number;
}

export interface Team {
  code: number;
  draw: number;
  form: string | null;
  id: number;
  loss: number;
  name: string;
  played: number;
  points: number;
  position: number;
  short_name: string;
  strength: number;
  team_division: null;
  unavailable: boolean;
  win: number;
  strength_overall_home: number;
  strength_overall_away: number;
  strength_attack_home: number;
  strength_attack_away: number;
  strength_defence_home: number;
  strength_defence_away: number;
}

export interface Player {
  first_name: string;
  second_name: string;
  web_name: string;
  chance_of_playing_next_round: number | null;
  chance_of_playing_this_round: number | null;
  code: number;
  cost_change_event: number;
  cost_change_event_fall: number;
  cost_change_start: number;
  cost_change_start_fall: number;
  dreamteam_count: number;
  element_type: number;
  ep_next: string;
  ep_this: string;
  event_points: number;
  form: string;
  id: number;
  in_dreamteam: boolean;
  news: string;
  news_added: string | null;
  now_cost: number;
  photo: string;
  points_per_game: string;
  selected_by_percent: string;
  special: boolean;
  squad_number: number | null;
  status: PlayerStatus;
  team: number;
  team_code: number;
  total_points: number;
  transfers_in: number;
  transfers_in_event: number;
  transfers_out: number;
  transfers_out_event: number;
  value_form: string;
  value_season: string;
  minutes: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  goals_conceded: number;
  own_goals: number;
  penalties_missed: number;
  penalties_saved: number;
  yellow_cards: number;
  red_cards: number;
  saves: number;
  bonus: number;
  bps: number;
  influence: string;
  creativity: string;
  threat: string;
  ict_index: string;
  starts: number;
  expected_goals: string;
  expected_assists: string;
  expected_goal_involvements: string;
  expected_goals_conceded: string;
  influence_rank: number;
  influence_rank_type: number;
  creativity_rank: number;
  creativity_rank_type: number;
  threat_rank: number;
  threat_rank_type: number;
  ict_index_rank: number;
  ict_index_rank_type: number;
  corners_and_indirect_freekicks_order: number | null;
  corners_and_indirect_freekicks_text: string;
  direct_freekicks_order: number | null;
  direct_freekicks_text: string;
  penalties_order: number | null;
  penalties_text: string;
  expected_goals_per_90: number;
  saves_per_90: number;
  expected_assists_per_90: number;
  expected_goal_involvements_per_90: number;
  expected_goals_conceded_per_90: number;
  goals_conceded_per_90: number;
  now_cost_rank: number;
  now_cost_rank_type: number;
  form_rank: number;
  form_rank_type: number;
  points_per_game_rank: number;
  points_per_game_rank_type: number;
  selected_rank: number;
  selected_rank_type: number;
  starts_per_90: number;
  clean_sheets_per_90: number;
}

export enum PlayerStatus {
  AVAILABLE = "a",
  UNAVAILABLE = "u",
  INJURED = "i",
  SUSPENDED = "s",
  NOT_PLAYING = "n",
  DEPARTED = "d",
}

export interface PlayerStats {
  label: string;
  name: string;
}

export interface PlayerTypes {
  id: number;
  plural_name: string;
  plural_name_short: string;
  singular_name: string;
  singular_name_short: string;
  squad_max_play: number;
  squad_min_play: number;
  squad_select: number;
  sub_positions_locked: number[];
  ui_shirt_specific: boolean;
}

export interface Fixture {
  code: number;
  event: number | null;
  finished: boolean;
  finished_provisional: boolean;
  id: number;
  kickoff_time: string | null;
  minutes: number;
  provisional_start_time: boolean;
  started: boolean | null;
  team_a: number;
  team_a_score: number | null;
  team_h: number;
  team_h_score: number | null;
  stats: FixtureStat[];
  team_h_difficulty: number;
  team_a_difficulty: number;
  pulse_id: number;
}

export interface FixtureStat {
  identifier: FixtureStatIdentifier;
  a: FixtureStatMap[];
  h: FixtureStatMap[];
}

export type FixtureStatIdentifier =
  | "minutes"
  | "goals_scored"
  | "assists"
  | "clean_sheets"
  | "goals_conceded"
  | "own_goals"
  | "penalties_saved"
  | "penalties_missed"
  | "yellow_cards"
  | "red_cards"
  | "saves"
  | "bonus"
  | "bps";

export interface FixtureStatMap {
  value: number;
  element: number;
}

export interface PlayerSummary {
  fixtures: PlayerUpcomingFixture[];
  history: PlayerPastFixture[];
  history_past: PlayerPastSeason[];
}

export interface PlayerUpcomingFixture {
  id: number;
  code: number;
  team_h: number;
  team_h_score: number | null;
  team_a: number;
  team_a_score: number | null;
  event: number;
  finished: boolean;
  minutes: number;
  provisional_start_time: boolean;
  kickoff_time: string;
  event_name: string;
  is_home: boolean;
  difficulty: number;
}

export interface PlayerPastFixture {
  element: number;
  fixture: number;
  opponent_team: number;
  total_points: number;
  was_home: boolean;
  kickoff_time: string;
  team_h_score: number;
  team_a_score: number;
  round: number;
  minutes: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  goals_conceded: number;
  own_goals: number;
  penalties_saved: number;
  penalties_missed: number;
  yellow_cards: number;
  red_cards: number;
  saves: number;
  bonus: number;
  bps: number;
  influence: string;
  creativity: string;
  threat: string;
  ict_index: string;
  starts: number;
  expected_goals: string;
  expected_assists: string;
  expected_goal_involvements: string;
  expected_goals_conceded: string;
  value: number;
  transfers_balance: number;
  selected: number;
  transfers_in: number;
  transfers_out: number;
}

export interface PlayerPastSeason {
  season_name: string;
  element_code: number;
  start_cost: number;
  end_cost: number;
  total_points: number;
  minutes: number;
  goals_conceded: number;
  assists: number;
  clean_sheets: number;
  goals_scored: number;
  own_goals: number;
  penalties_saved: number;
  penalties_missed: number;
  yellow_cards: number;
  red_cards: number;
  saves: number;
  bonus: number;
  bps: number;
  influence: string;
  creativity: string;
  threat: string;
  ict_index: string;
  starts: number;
  expected_goals: string;
  expected_assists: string;
  expected_goal_involvements: string;
  expected_goals_conceded: string;
}

export interface GameweekLivePlayers {
  elements: GameweekLivePlayer[];
}

export interface GameweekLivePlayer {
  id: number;
  stats: GameweekLivePlayerStats;
  explain: GameweekLivePlayerExplain[];
}

export interface GameweekLivePlayerStats {
  minutes: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  goals_conceded: number;
  own_goals: number;
  penalties_saved: number;
  penalties_missed: number;
  yellow_cards: number;
  red_cards: number;
  saves: number;
  bonus: number;
  bps: number;
  influence: string;
  creativity: string;
  threat: string;
  ict_index: string;
  starts: number;
  expected_goals: string;
  expected_assists: string;
  expected_goal_involvements: string;
  expected_goals_conceded: string;
  total_points: number;
  in_dreamteam: boolean;
}

export interface GameweekLivePlayerExplain {
  fixture: number;
  stats: GameweekLivePlayerExplainStat[];
}

export interface GameweekLivePlayerExplainStat {
  identifier: FixtureStatIdentifier;
  points: number;
  value: number;
}

export interface ManagerTeam {
  id: number;
  joined_time: string;
  started_event: number;
  favourite_team: number;
  player_first_name: string;
  player_last_name: string;
  player_region_id: number;
  player_region_name: string;
  player_region_iso_code_short: string;
  player_region_iso_code_long: string;
  summary_overall_points: number;
  summary_overall_rank: number;
  summary_event_points: number;
  summary_event_rank: number;
  current_event: number;
  leagues: ManagerLeagues;
  name: string;
  name_change_blocked: boolean;
  kit: string | null;
  last_deadline_bank: number;
  last_deadline_value: number;
  last_deadline_total_transfers: number;
}

export interface ManagerLeagues {
  classic: ManagerClassicLeague[];
  h2h: ManagerH2HLeague[];
  cup: ManagerCup;
  cup_matches: ManagerCupMatch[];
}

interface ManagerLeague {
  id: 10;
  name: string;
  short_name: string;
  created: string;
  closed: boolean;
  rank: number | null;
  max_entries: number | null;
  league_type: LeagueType;
  admin_entry: number | null;
  start_event: number;
  entry_can_leave: boolean;
  entry_can_admin: boolean;
  entry_can_invite: boolean;
  has_cup: boolean;
  cup_league: string | null;
  cup_qualified: string | null;
  entry_rank: number;
  entry_last_rank: number;
}

export interface ManagerClassicLeague extends ManagerLeague {
  scoring: "c";
}

export interface ManagerH2HLeague extends ManagerLeague {
  scoring: "h";
}

export type LeagueType = "x" | "s";

export interface ManagerCup {
  matches: ManagerCupMatch[];
  status: ManagerCupStatus;
  cup_league: string | null;
}

export interface ManagerCupMatch {
  id: number;
  entry_1_entry: number;
  entry_1_name: string;
  entry_1_player_name: string;
  entry_1_points: number;
  entry_1_win: number;
  entry_1_draw: number;
  entry_1_loss: number;
  entry_1_total: number;
  entry_2_entry: number;
  entry_2_name: string;
  entry_2_player_name: string;
  entry_2_points: number;
  entry_2_win: number;
  entry_2_draw: number;
  entry_2_loss: number;
  entry_2_total: number;
  is_knockout: boolean;
  winner: number;
  seed_value: null;
  event: number;
  tiebreak: null;
}

export interface ManagerCupStatus {
  qualification_event: number | null;
  qualification_numbers: number | null;
  qualification_rank: number | null;
  qualification_state: "QUALIFIED" | "NOT_QUALIFIED_RANK" | null;
}

export interface ManagerHistory {
  current: ManagerGameweekSummary[];
  past: ManagerPastHistory[];
  chips: ManagerChipsHistory[];
}

export interface ManagerGameweekSummary {
  event: number;
  points: number;
  total_points: number;
  rank: number;
  rank_sort: number;
  overall_rank: number;
  bank: number;
  value: number;
  event_transfers: number;
  event_transfers_cost: number;
  points_on_bench: number;
}

export interface ManagerPastHistory {
  season_name: string;
  total_points: number;
  rank: number;
}

export interface ManagerChipsHistory {
  name: ChipName;
  time: string;
  event: number;
}

export interface ManagerGameweek {
  active_chip: ChipName | null;
  automatic_subs: AutomaticSub[];
  entry_history: ManagerGameweekSummary;
  picks: ManagerGameweekPick[];
}

export interface AutomaticSub {
  entry: number;
  element_in: number;
  element_out: number;
  event: number;
}

export interface ManagerGameweekPick {
  element: number;
  position: number;
  multiplier: number;
  is_captain: boolean;
  is_vice_captain: boolean;
}

export interface ClassicLeague {
  new_entries: NewLeagueManager[];
  league: ClassicLeagueInfo;
  standings: ClassicLeagueStandings;
}

export interface H2HLeague {
  new_entries: NewLeagueManager[];
  league: H2HLeagueInfo;
  standings: H2HLeagueStandings;
}

export interface NewLeagueManager {
  entry: number;
  entry_name: string;
  joined_time: string;
  player_first_name: string;
  player_last_name: string;
}

interface LeagueInfo {
  id: number;
  name: string;
  created: string;
  closed: boolean;
  max_entries: number | null;
  league_type: LeagueType;
  admin_entry: number | null;
  start_event: number;
  code_privacy: "p";
  has_cup: true;
  cup_league: string | null;
  rank: null;
}

export interface ClassicLeagueInfo extends LeagueInfo {
  scoring: "c";
}

export interface H2HLeagueInfo extends LeagueInfo {
  scoring: "h";
  ko_rounds: number | null;
}

interface LeagueStandings {
  has_next: boolean;
  page: number;
}

export interface ClassicLeagueStandings extends LeagueStandings {
  results: ClassicLeagueManager[];
}

export interface H2HLeagueStandings extends LeagueStandings {
  results: H2HLeagueManager[];
}

interface LeagueManager {
  id: number;
  player_name: string;
  rank: number;
  last_rank: number;
  rank_sort: number;
  total: number;
  entry: number;
  entry_name: string;
}

export interface ClassicLeagueManager extends LeagueManager {
  event_total: number;
}

export interface H2HLeagueManager extends LeagueManager {
  division: number;
  matches_drawn: number;
  matches_lost: number;
  matches_played: number;
  matches_won: number;
  points_for: number;
}

export interface H2HMatches {
  has_next: boolean;
  page: number;
  results: H2HMatch[];
}

export interface H2HMatch {
  id: number;
  entry_1_entry: number;
  entry_1_name: string;
  entry_1_player_name: string;
  entry_1_points: number;
  entry_1_win: number;
  entry_1_draw: number;
  entry_1_loss: number;
  entry_1_total: number;
  entry_2_entry: number;
  entry_2_name: string;
  entry_2_player_name: string;
  entry_2_points: number;
  entry_2_win: number;
  entry_2_draw: number;
  entry_2_loss: number;
  entry_2_total: number;
  is_knockout: boolean;
  league: number;
  winner: null;
  seed_value: null;
  event: number;
  tiebreak: null;
  is_bye: boolean;
  knockout_name: string;
}

export interface GameweekStatus {
  status: GameweekStatusDay[];
  leagues: string;
}

export interface GameweekStatusDay {
  bonus_added: boolean;
  date: string;
  event: number;
  points: GameweekStatusDayPoints;
}

export type GameweekStatusDayPoints = "l" | "p" | "r" | "";

export interface GameweekDreamTeam {
  top_player: GameweekTopPlayer;
  team: DreamTeamPlayer[];
}

export interface DreamTeamPlayer {
  element: number;
  points: number;
  position: number;
}

export interface SetPieceNotes {
  last_updated: string;
  teams: SetPieceNotesTeam[];
}

export interface SetPieceNotesTeam {
  notes: SetPieceNote[];
  id: number;
}

export interface SetPieceNote {
  external_link: boolean;
  info_message: string;
  source_link: string;
}

export interface CupStatus {
  qualifying_league: number;
  qualifying_method: string; // findout which strings and make a type
  draw_type: string; // findout which strings and make a type
  league: number | null;
  qualification_event: number | null;
  qualification_numbers: number | null;
  name: string;
  has_byes: boolean;
  is_large: boolean;
  pulse_article_id: number | null;
}

export interface LeagueOptionsParams {
  pageStandings?: number;
  pageNewEntries?: number;
}

export interface ClassicLeagueOptionsParams extends LeagueOptionsParams {
  phase?: number;
}

export interface H2HMatchesOptionsParams {
  managerId?: number;
  gameweekId?: number;
  page?: number;
}
