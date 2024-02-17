export default defineNuxtRouteMiddleware((to) => {
  const db = JSON.parse(localStorage.getItem("db") || "{}");

  if (!db?.session?.id && to.name !== "login") {
    return navigateTo("/login");
  } else if (db?.session?.id && to.name === "login") {
    return navigateTo("/");
  }
});
