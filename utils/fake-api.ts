import { find, merge, findIndex } from "lodash";

const fetchUser = () =>
  new Promise((resolve, reject) => {
    try {
      const db = JSON.parse(localStorage.getItem("db") as string);

      const data = find(db.profiles, { user_id: db.session.user_id });

      setTimeout(() => resolve(data), 1000);
    } catch (e) {
      reject(e);
    }
  });

const updateUser = (data: any) =>
  new Promise((resolve, reject) => {
    try {
      const db = JSON.parse(localStorage.getItem("db") as string);

      const index = findIndex(db.profiles, { user_id: db.session.user_id });

      const oldData = find(db.profiles, { user_id: db.session.user_id });

      const newData = merge(oldData, data);

      db.profiles.splice(index, 1, newData);

      localStorage.setItem("db", JSON.stringify(db));

      setTimeout(() => resolve(newData), 1000);
    } catch (e) {
      reject(e);
    }
  });

export const fakeApi = { fetchUser, updateUser };
