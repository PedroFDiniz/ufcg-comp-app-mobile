// AUTH
export const AUTH_ENDPOINT_TOKEN_REQUEST = "https://eureca.lsd.ufcg.edu.br/as/tokens"

// API
export const API_BASE_URL = "http://192.168.0.13:8091/";
export const API_ENDPOINT_GUIDE_ACTIVITIES = '/guide/activities';
export const API_ENDPOINT_AUTH_STUDENT = '/auth/user/student';
export const API_ENDPOINT_ACTIVITY_REGISTER = '/activity/register';
export const API_ENDPOINT_ACTIVITY_FIND_BY_OWNER_STATE = '/activities/find_by_owner_state';
export const API_ENDPOINT_ACTIVITY_COMPUTE_CREDITS = '/activities/computeCredits';
export const API_ENDPOINT_ACTIVITY_METRICS = '/activities/metrics';
export const API_ENDPOINT_PROCESS_GENERATE = '/process/generate';
export const API_ENDPOINT_ACTIVITY_KIND_STATS = '/activities/creditPoolActivities';

// ACTIVITY
export const ACTIVITY_UNITY_EVENT = ["-"];
export const ACTIVITY_UNITY_SEMESTER = ["semestre(s)"];
export const ACTIVITY_UNITY_RUNNING_TIME = ["hora(s)"];
export const ACTIVITY_UNITY_CALENDAR = ["meses", "ano(s)"];

export const ACTIVITY_STATE_APPROVED = "APPROVED";
export const ACTIVITY_STATE_REJECTED = "REJECTED";
export const ACTIVITY_STATE_CREATED = "CREATED";
export const ACTIVITY_STATE_ASSIGNED = "ASSIGNED";
export const ACTIVITY_STATE_TRANSLATION_MAP = [
  { key: ACTIVITY_STATE_CREATED, value: "CRIADO" },
  { key: ACTIVITY_STATE_ASSIGNED, value: "ATRIBUÍDO" },
  { key: ACTIVITY_STATE_APPROVED, value: "APROVADO" },
  { key: ACTIVITY_STATE_REJECTED, value: "REJEITADO" }
];
