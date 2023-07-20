export default defineNuxtRouteMiddleware((to, from) => {
    const store = useTokenStore()
    function isAuthenticatedAdmin() {
        console.log(store.userRole === "admin");
        return store.userRole === "admin"
    }

    function isAuthenticatedUser() {
        console.log(store.userRole === "customer");
        return store.userRole === "customer"
    }
    
    // if(!isAuthenticatedAdmin() === true) {
    //     return navigateTo('/');
    // }
})