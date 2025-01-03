<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./layouts/Navbar.vue";

// const testAPI = ref([]);

// onMounted(async () => {
//   try {
//     const response = await fetch("/api/test_api", {
//       method: "GET",
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     testAPI.value = await response.json();
//     console.log(testAPI.value);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     testAPI.value = { message: "Error fetching data." };
//   }
// });

</script>

<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div>
      <RouterView />
    </div>
    <div>
      <!-- footer  -->
    </div>
  </div>
</template>


<style scoped>
header {
  max-width: 100%;
  /* line-height: 1.5; */
  /* max-height: 100vh; */
}
/* body {
  max-width: 80%;
  margin: auto;
}
footer {
  max-width: 100%;
  max-height: 15%;
  /* line-height: 1.5; 
} */

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
