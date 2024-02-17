import { find, merge, findIndex } from "lodash";

const authenticate = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const db = JSON.parse(localStorage.getItem("db") as string);

        const data = db.session;

        if (!db.session) return reject("unauthenticated");

        resolve(data);
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });

const login = (credential: any) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const db = JSON.parse(localStorage.getItem("db") as string);

        const data = find(db.users, { username: credential.username });

        if (!data || data.password !== credential.password) {
          return reject("unauthenticated");
        }

        db.session = data;

        localStorage.setItem("db", JSON.stringify(db));

        resolve(data);
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });

const logout = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const db = JSON.parse(localStorage.getItem("db") as string);

        delete db.session;

        localStorage.setItem("db", JSON.stringify(db));

        resolve({});
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });

const fetchUser = () =>
  new Promise((resolve, reject) => {
    try {
      const db = JSON.parse(localStorage.getItem("db") as string);

      const data = find(db.profiles, { user_id: db.session.id });

      setTimeout(() => resolve(data), 1000);
    } catch (e) {
      reject(e);
    }
  });

const updateUser = (data: any) =>
  new Promise((resolve, reject) => {
    try {
      const db = JSON.parse(localStorage.getItem("db") as string);

      const index = findIndex(db.profiles, { user_id: db.session.id });

      const oldData = find(db.profiles, { user_id: db.session.id });

      const newData = merge(oldData, data);

      db.profiles.splice(index, 1, newData);

      localStorage.setItem("db", JSON.stringify(db));

      setTimeout(() => resolve(newData), 1000);
    } catch (e) {
      reject(e);
    }
  });

const fetchSocial = () =>
  new Promise((resolve, reject) => {
    try {
      const db = JSON.parse(localStorage.getItem("db") as string);

      const data = find(db.socials, { user_id: db.session.id });

      setTimeout(() => resolve(data), 1000);
    } catch (e) {
      reject(e);
    }
  });

const updateScoial = (data: any) =>
  new Promise((resolve, reject) => {
    try {
      const db = JSON.parse(localStorage.getItem("db") as string);

      const index = findIndex(db.socials, { user_id: db.session.id });

      const oldData = find(db.socials, { user_id: db.session.id });

      const newData = { ...oldData, links: data };

      db.socials.splice(index, 1, newData);

      localStorage.setItem("db", JSON.stringify(db));

      setTimeout(() => resolve(newData), 1000);
    } catch (e) {
      reject(e);
    }
  });

export const fakeApi = {
  authenticate,
  login,
  logout,
  fetchUser,
  updateUser,
  fetchSocial,
  updateScoial,
};
