export class LocalStorageService {
  static getToken() {
    return localStorage.getItem('token');
  }

  static setToken(token) {
    localStorage.setItem('token', token);
  }

  static setPersonalData(user) {
    localStorage.setItem('personalData', JSON.stringify(user));
  }

  static getPersonalData() {
    return JSON.parse(localStorage.getItem('personalData'));
  }

  static getUID() {
    return localStorage.getItem('uid');
  }

  static setUID(id) {
    localStorage.setItem('uid', id);
  }
  
  static getUserId() {
    return localStorage.getItem('userId');
  }

  static setUserId(id) {
    localStorage.setItem('userId', id);
  } 

  static clearStorage() {
    localStorage.clear();
  }
}
