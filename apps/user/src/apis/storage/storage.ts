type LocalStorageKey =
  | 'access-token'
  | 'noticeModalClosed'
  | 'isUploadPicture'
  | 'downloadUrl'
  | 'correct';

export class Storage {
  static getItem(key: LocalStorageKey) {
    return typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  }

  static setItem(key: LocalStorageKey, value: string) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, value);
  }
}
