import { TOKEN } from '@/constants/common/constant';

export class Session {
  static getItem(key: string): string | null {
    return typeof window !== 'undefined' ? sessionStorage.getItem(key) : null;
  }

  static setItem(key: string, value: string): void {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(key, value);
    }
  }

  static getRefreshToken(): string | null {
    return this.getItem(TOKEN.REFRESH);
  }

  static setRefreshToken(value: string): void {
    this.setItem(TOKEN.REFRESH, value);
  }
}
