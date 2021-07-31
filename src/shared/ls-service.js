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

    static clearStorage() {
        localStorage.clear();
    }

    static getUID() {
        return localStorage.getItem('uid');
    }

    static setUID(id) {
        localStorage.setItem('uid', id);
    }

    static getUserID() {
        return localStorage.getItem('userid');
    }

    static setUserID(id) {
        localStorage.setItem('userid', id);
    }
}