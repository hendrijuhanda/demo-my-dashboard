import { defineStore } from "pinia";

export const useAuth = defineStore("auth", () => {
  const auth = ref<any>({});

  const authenticateUser = async () => {
    return await fakeApi.authenticate().then((data: any) => {
      auth.value = data;
    });
  };

  const logUserIn = async (data: any) => {
    return await fakeApi.login(data).then((data: any) => {
      auth.value = data;
    });
  };

  const logUserOut = async () => {
    return await fakeApi.logout().then(() => {
      auth.value = {};
    });
  };

  return { auth, authenticateUser, logUserIn, logUserOut };
});
