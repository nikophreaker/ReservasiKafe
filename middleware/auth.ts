export default defineNuxtRouteMiddleware((to, from) => {
  const store = useTokenStore();
  function isAuthenticatedAdmin() {
    console.log(store.userRole === "admin");
    return store.userRole === "admin" && store.userToken != "";
  }

  function isAuthenticatedUser() {
    console.log(store.userRole === "customer");
    return store.userRole === "customer" && store.userToken != "";
  }

  if (!isAuthenticatedAdmin() === true) {
    return navigateTo("/");
  }
});
