import { Cookies } from 'react-cookie';

type CookieKey = 'refresh-token';

const cookies = new Cookies();

export class Cookie {
  static getItem(key: CookieKey) {
    return typeof window !== 'undefined' ? cookies.get(key) : null;
  }

  static setItem(key: CookieKey, value: string) {
    if (typeof window === 'undefined') return;
    cookies.set(key, value, { path: '/' });
  }

  static removeItem(key: CookieKey) {
    if (typeof window === 'undefined') return;
    cookies.remove(key, { path: '/' });
  }
}
