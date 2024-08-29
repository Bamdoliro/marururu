import { Cookies } from 'react-cookie';

type CookieKey = 'access-token' | 'refresh-token' | 'noticeModalClosed';
const cookies = new Cookies();

export class Storage {
  static getItem(key: CookieKey) {
    return typeof window !== 'undefined' ? cookies.get(key) : null;
  }

  static setItem(key: CookieKey, value: string) {
    if (typeof window === 'undefined') return;
    cookies.set(key, value, { path: '/' });
  }

  static getLocalItem(key: string) {
    return typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  }

  static setLocalItem(key: string, value: string) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, value);
  }

  static removeLocalItem(key: string) {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
  }
}
