<template>
  <TopHeader />

  <!-- Navbar  -->
  <nav class="navbar sticky-top navbar-expand-lg">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand m-0 d-lg-none w-25">
        <img src="/images/logo/white.png" class="img-fluid logo" />
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
        <span class="bi bi-list-ul"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav p-0 navbar-nav-scroll" style="--bs-scroll-height: 200px">
          <li class="nav-item" v-for="(link, i) in links" :key="i">
            <NuxtLink class="nav-link" :to="link.to">
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!--   <MobileNav /> -->
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
        { title: "Test", to: "/test" },
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

button.navbar-toggler {
  box-shadow: 3px 4px #000;
  border: 2.5px solid #000;
  border-color: #000 !important;
  background-color: #ffffff;
  color: #000;
  font-size: 25px;
}
</style>
