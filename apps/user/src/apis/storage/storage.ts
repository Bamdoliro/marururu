import { Cookies } from 'react-cookie';

type CookieKey = 'access-token' | 'refresh-token';
const cookies = new Cookies();

export class Storage {
  static getItem(key: CookieKey) {
    return typeof window !== 'undefined' ? cookies.get(key) : null;
  }

  static setItem(key: CookieKey, value: string) {
    if (typeof window === 'undefined') return;
    cookies.set(key, value, { path: '/' });
  }
}
