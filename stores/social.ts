import { defineStore } from "pinia";

export const useSocial = defineStore("social", () => {
  const socials = ref<any>([]);

  const fetchSocial = async () => {
    return await fakeApi.fetchSocial().then((data: any) => {
      socials.value = data.links;
    });
  };

  const updateSocial = async (data: any) => {
    return await fakeApi.updateScoial(data).then((data: any) => {
      socials.value = data.links;
    });
  };

  return { socials, fetchSocial, updateSocial };
});
