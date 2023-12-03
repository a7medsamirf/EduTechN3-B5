<template>
  <!-- Top Header -->
  <div class="top-header py-3">
    <div class="container">
      <h5>Web Zone</h5>
    </div>
  </div>

  <!-- Navbar  -->
  <nav class="navbar sticky-top navbar-expand-lg">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand m-0">
        <img src="/images/logo/white.png" class="img-fluid w-50" />
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 200px"
        >
          <li class="nav-item" v-for="(link, i) in links" :key="i">
            <NuxtLink class="nav-link" :to="link.to">
              {{ link.title }}
            </NuxtLink>
          </li>

          <!--           <LanguageSelector /> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      links: [
        { title: "الرئيسية", to: "/" },
        { title: "Getting Started", to: "/getting-started" },
        { title: "Blank", to: "/blank" },
        { title: "Home", to: "/" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background: #e6ffe1;
  border-bottom: 1px solid #a3ce9b;
}
.navbar-brand svg {
  color: rgba(59, 166, 118);
}

.top-header {
  background: #b4d8ae;
}
</style>
