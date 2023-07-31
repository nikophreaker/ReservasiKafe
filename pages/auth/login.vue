<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">
                Sign in with
              </h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img
                  alt="..."
                  class="w-5 mr-1"
                  src="~/assets/img/github.svg"
                />
                Github
              </button>
              <button
                class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img
                  alt="..."
                  class="w-5 mr-1"
                  src="~/assets/img/google.svg"
                />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div>
            <form @submit.prevent="login">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  v-model="form.email"
                  placeholder="Email"
                  required
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  v-model="form.password"
                  placeholder="Password"
                  required
                />
              </div>
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-blueGray-600">
                    Remember me
                  </span>
                </label>
              </div>

              <p
                class="mt-2 text-sm text-red-600 dark:text-red-500"
                :hidden="!hasError"
              ><span class="font-medium">Oh,
                  snapp!</span> Wrong email or password.</p>
              <div class="text-center mt-6">
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  :disabled="isLoading"
                  type="submit"
                >
                  <svg
                    aria-hidden="true"
                    class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    :class="{ 'hidden': !isLoading, 'visible': isLoading }"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  {{ !isLoading ? "Sign In" : "" }}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2">
            <a
              href="javascript:void(0)"
              class="text-blueGray-200"
            >
              <small>Forgot password?</small>
            </a>
          </div>
          <div class="w-1/2 text-right">
            <NuxtLink
              to="/auth/register"
              class="text-blueGray-200"
            >
              <small>Create new account</small>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// const store = useTokenStore()
// const isLoading = ref(false)
// const hasError = ref(false)
// var form = {
//     email: "",
//     password: ""
// }

export default defineNuxtComponent({
  data() {
    return {
      store: useTokenStore(),
      isLoading: ref(false),
      hasError: ref(false),
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login: async function () {
      let $this = this;
      $this.isLoading = !$this.isLoading;
      const formData = new FormData();
      for (let [key, value] of Object.entries($this.form)) {
        console.log(key + " : " + value);
        formData.append(key, value);
      }
      const { data, error, pending } = await useAPIFetch("/login", {
        method: "POST",
        body: formData,
        onRequest({ request, options }) {
          // Set the request headers
          options.headers = options.headers || {};
        },
        onRequestError({ request, options, error }) {
          // Handle the request errors
        },
        onResponse({ request, response, options }) {
          // Process the response data
          if (response.status === 200) {
            $this.hasError === false
              ? $this.hasError
              : ($this.hasError = !$this.hasError);
            $this.store.saveToken(response._data.data.token);
            $this.store.setRole(response._data.data.role);
            console.log(response._data.data);
            console.log($this.store.userToken);
            console.log($this.store.userRole);
            if ($this.store.userRole == "admin") {
              navigateTo("/admin");
            } else {
              navigateTo("/");
            }
          } else {
            $this.hasError === true
              ? $this.hasError
              : ($this.hasError = !$this.hasError);
            console.log(response._data);
          }
        },
        onResponseError({ request, response, options }) {
          // Handle the response errors
        },
      });
      $this.isLoading = !$this.isLoading;
    },
  },
});

// async function login() {
//     isLoading.value = !isLoading.value
//     const formData = new FormData();
//     for (let [key, value] of Object.entries(form)) {
//       console.log(key+" : "+value);
//       formData.append(key, value);
//     }

//     const { data, error, pending } = await useAPIFetch("/login", {
//       method: "POST",
//       body: formData,
//       onRequest({ request, options }) {
//         // Set the request headers
//         options.headers = options.headers || {}
//       },
//       onRequestError({ request, options, error }) {
//         // Handle the request errors
//       },
//       onResponse({ request, response, options }) {
//         // Process the response data
//         if(response.status === 200) {
//           hasError.value === false ? hasError.value : hasError.value = !hasError.value
//           store.saveToken(response._data.data.token);
//           store.setRole(response._data.data.role);
//           console.log(response._data.data);
//           console.log(store.userToken);
//           console.log(store.userRole);
//           navigateTo('/admin');
//         } else {
//           hasError.value === true ? hasError.value : hasError.value = !hasError.value
//           console.log(response._data);
//         }
//       },
//       onResponseError({ request, response, options }) {
//         // Handle the response errors
//       }
//     })
//     isLoading.value = !isLoading.value
// }
</script>
  