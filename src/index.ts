/**
 * Set Cookie Browser
 * 
 * @param name key of cookie
 * @param value value of data
 * @param expiredDays count expires day (default: 1 day)
 */
export const setCookie = (
  name: string,
  value: string,
  expiredDays: number = 1
) => {
  let expires = "";
  if (expiredDays) {
    const date = new Date();
    date.setTime(date.getTime() + expiredDays * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

/**
 * Get Cookie browser
 * @param name name of key cookie
 * @returns data | null
 */
export const getCookie = (name: string): string | null => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

/**
 * Erase Cookie
 * @param name key of cookie
 */
export const eraseCookie = (name: string) => {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

export {
  /**
   * Alias `setCookie` for `js-cookies` compatible
   */
  setCookie as set,
  /**
   * Alias `getCookie` for `js-cookies` compatible
   */
  getCookie as get,
  /**
   * Alias `eraseCookie`
   */
  eraseCookie as erase,
  /**
   * Alias `eraseCookie` for `js-cookies` compatible
   */
  eraseCookie as remove,
};
