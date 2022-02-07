
export const BASE_URL = 'api.football-data.org/v2'

export const CURRENT_PLAN = 'plan=TIER_ONE'

export const LINKS = {
  COMPETITIONS_LINK: `https://${BASE_URL}/competitions/?${CURRENT_PLAN}`,
  TEAMS_LINK: `https://${BASE_URL}/teams/`,
  COMPETITION_LINK: (id) => `https://${BASE_URL}/competitions/${id}`,
  COMPETITION_STANDINGS: (id) => `https://${BASE_URL}/competitions/${id}/standings`,
  TEAM_LINK: (id) => `https://${BASE_URL}/v2/teams/${id}`,
  TEAM_MATCHES_LINK: (id) => `https://${BASE_URL}/teams/${id}/matches`
}
