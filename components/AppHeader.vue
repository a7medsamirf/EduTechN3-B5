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
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation"
      >
        <span class="bi bi-list-ul"></span>
      </button>

      <div
        class="offcanvas offcanvas-end w-100"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <NuxtLink
            id="offcanvasDarkNavbarLabel"
            to="/"
            class="offcanvas-title navbar-brand m-0 d-lg-none w-25"
          >
            <img src="/images/logo/white.png" class="img-fluid logo" />
          </NuxtLink>

          <button
            class="navbar-toggler close-icon"
            type="button"
            data-bs-dismiss="offcanvas"
          >
            <span class="bi bi bi-x-lg"></span>
          </button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav pe-3">
            <li class="nav-item dropdown" v-for="(link, i) in links" :key="i">
              <NuxtLink class="nav-link" v-if="!link.sublinks" :to="link.to">
                {{ link.title }}
              </NuxtLink>

              <a
                class="nav-link dropdown-toggle"
                v-else
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ link.title }}
              </a>
              <ul class="dropdown-menu">
                <li v-for="sublink in link.sublinks" :to="sublink.to">
                  <NuxtLink class="dropdown-item" :to="link.to">{{
                    sublink.title
                  }}</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
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
        {
          title: "Pages",
          sublinks: [
            { title: "gallery", to: "/gallery" },
            { title: "faq", to: "/faq" },
            { title: "TestPage", to: "/TestPage" },
          ],
        },

        { title: "Blank", to: "/blank" },
        { title: "Test", to: "/test" },
        { title: "المقالات", to: "/blogs" },
        {
          title: "Pages",
          sublinks: [
            { title: "gallery", to: "/gallery" },
            { title: "faq", to: "/faq" },
            { title: "TestPage", to: "/TestPage" },
          ],
        },
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
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(0.95);
    box-shadow: none;
    transition: all 0.5s ease-in-out;
  }
}

.offcanvas.offcanvas-end {
  transition: all 0.8s cubic-bezier(0.77, 0.2, 0.05, 1);
}

/* .close-icon {
  box-shadow: 3px 4px #000;
  border: 2.5px solid #000;
  border-color: #000 !important;
  background-color: #ffffff;
  color: #000;
  width: 40px;
  height: 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.close-icon:hover span.bi-x-lg {
  transition: 0.7s;
  transform: rotate(180deg);
} */

ul.dropdown-menu {
  transition: all 0.5s ease-in-out;
  box-shadow: 3px 4px #000;
  border: 2.5px solid #000;
  border-color: #000 !important;
  background-color: #ffffff;
  color: #000;
  font-size: 14px;
  text-align: right;
}
ul.dropdown-menu.show {
  transition: all 0.5s ease-in-out;
}
</style>
