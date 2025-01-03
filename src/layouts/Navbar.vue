<script setup>
import { ref, reactive } from "vue";
import { useRouter, RouterLink } from "vue-router";

const router = useRouter();

// State management
const authStore = reactive({
  isAuthenticated: true,
  user: {
    fullname: "John Doe",
    email: "john.doe@example.com",
    profileImage: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/461897536_3707658799483986_794048670785055411_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHVG0UH5FgwbVkdtl70b39it0I862Qbciu3QjzrZBtyK4PmJExwkjQwGNMpc0Sbm9HeXRE2Yi7Fvc_GrvrUrXJN&_nc_ohc=wr6rT2BFWA0Q7kNvgFDoePu&_nc_oc=Adj1Q1vcvazXT03cBW3bKQy6YLG6vPsppIdOJbLZ_A9RZWcLTAHpZ8nDVf4qZwTenZRbtsMxJaUYa-kRuj4tRRVV&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=AY9Yz97Zkb24BwEjmpnTbcu&oh=00_AYAi7KVwtgN_U5v4vvoqNz0O8Ur9FXRd65TElAtDW0v0fw&oe=677D9B71",
  },
});


const isDropdownVisible = ref(false);
const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

const logout = () => {
  authStore.isAuthenticated = false;
  console.log("User logged out");
  // Optional: Redirect to the login page
  router.push({ name: "LoginView" });
};
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

      <!-- Logo -->
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/461897536_3707658799483986_794048670785055411_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHVG0UH5FgwbVkdtl70b39it0I862Qbciu3QjzrZBtyK4PmJExwkjQwGNMpc0Sbm9HeXRE2Yi7Fvc_GrvrUrXJN&_nc_ohc=wr6rT2BFWA0Q7kNvgFDoePu&_nc_oc=Adj1Q1vcvazXT03cBW3bKQy6YLG6vPsppIdOJbLZ_A9RZWcLTAHpZ8nDVf4qZwTenZRbtsMxJaUYa-kRuj4tRRVV&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=AY9Yz97Zkb24BwEjmpnTbcu&oh=00_AYAi7KVwtgN_U5v4vvoqNz0O8Ur9FXRd65TElAtDW0v0fw&oe=677D9B71" class="h-8" alt="Logo" />
        <span class="text-2xl font-semibold whitespace-nowrap dark:text-white">App Name</span>
      </a>

      <!-- Authenticated User Menu -->
      <div v-if="authStore.isAuthenticated">

        <div class="flex items-start space-x-3 rtl:space-x-reverse">
           <!-- Button Open Main Menu Toggle -->
           <button
            data-collapse-toggle="navbar-user"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <!-- Main Menu -->
          <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <RouterLink
                aria-current="page"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                :to="{ name: 'HomeView' }"
              >
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                :to="{ name: 'Dashboard_UsersView' }"
              >
                Users
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                :to="{ name: 'Dashboard_PostsView' }"
              >
                Posts
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                :to="{ name: 'Dashboard_ProductsView' }"
              >
                Products
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                :to="{ name: 'Dashboard_ProfileView' }"
              >
                Profile
              </RouterLink>
            </li>
          </ul>
          </div>
        </div>

        <div class="flex items-end space-x-3 rtl:space-x-reverse">

          <!-- Button Open Dropdown Toggle -->
          <button
            @click="toggleDropdown"
            class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="isDropdownVisible"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              :src="authStore.user.profileImage"
              alt="User Photo"
            />
          </button>

          <!-- Dropdown Menu -->
          <div
            v-show="isDropdownVisible"
            class="absolute right-0 z-50 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <div class="px-4 py-3">
              <span class="block text-sm font-medium text-gray-900 dark:text-white">{{ authStore.user.fullname }}</span>
              <span class="block text-sm text-gray-500 truncate dark:text-gray-400">{{ authStore.user.email }}</span>
            </div>
            <ul class="py-2">
              <li>
                <RouterLink
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200"
                  :to="{ name: 'Dashboard_ProfileView' }"
                >
                  Profile
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200"
                  :to="{ name: 'SettingView' }"
                >
                  Settings
                </RouterLink>
              </li>
              <li>
                <button
                  @click="logout"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200"
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>

        </div>

      </div>

      <!-- Guest Menu -->
      <div v-else>
        <ul class="flex space-x-4">
          <li>
            <RouterLink
              class="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              :to="{ name: 'LoginView' }"
            >
              Login
            </RouterLink>
          </li>
          <li>
            <RouterLink
              class="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              :to="{ name: 'RegisterView' }"
            >
              Register
            </RouterLink>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<style scoped>
nav {
  position: relative;
}
</style>
