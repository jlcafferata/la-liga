export function authHeader() {
  let token = JSON.parse(localStorage.getItem("token"));

  if (token) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
}

export function getAuthUser() {
  let token = JSON.parse(localStorage.getItem("token"));

  if (token) {
    return token;
  } else {
    return {};
  }
}

const getDateWithoutTime = (date) => {
  let dateWithoutHour = new Date(date);
  dateWithoutHour.setHours(0, 0, 0, 0);
  return dateWithoutHour;
};

const getTomorrow = () => {
  const tomorrow = ((d) => new Date(d.setDate(d.getDate() + 1)))(new Date());
  return tomorrow;
};

const getToday = () => {
  const today = new Date();
  return today;
};

const isTokenExpired = () => {
  const expireToken = localStorage.getItem("expire") || null;
  const tomorrow = getTomorrow();
  const today = getToday();

  const isNotExpiredToken =
    getDateWithoutTime(expireToken || today) >= getDateWithoutTime(tomorrow);

  if (!isNotExpiredToken) {
    removeToken();
  }

  return !isNotExpiredToken;
};

export const setTimeExpirationToken = () => {
  return getTomorrow();
};

export const getCurrentToken = () => {
  return !isTokenExpired() ? localStorage.getItem("token") : undefined;
};

export const isValidToken = () => {
  return !isTokenExpired() ? getCurrentToken() != null : false;
};

export const removeToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expire");
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
  localStorage.setItem("expire", setTimeExpirationToken());
};
