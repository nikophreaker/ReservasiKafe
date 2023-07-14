export default defineNuxtRouteMiddleware((to, from) => {
    function isAuthenticated() {
        return true
    }
    
    if(isAuthenticated() === true) {
        return navigateTo('/');
    }
})