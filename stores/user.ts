import { defineStore } from "pinia";

export const useUser = defineStore("user", () => {
  const user = ref<any>({
    avatar: "",
    description: "",
  });

  const fetchUserData = async () => {
    return await fakeApi.fetchUser().then((data: any) => {
      user.value = {
        avatar: data.avatar,
        description: data.description,
      };
    });
  };

  const updateUserData = async (data: any) => {
    return await fakeApi.updateUser(data).then((data: any) => {
      user.value = data;
    });
  };

  return { user, updateUserData, fetchUserData };
});
