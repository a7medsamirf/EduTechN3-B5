<template>
  <div>
    <nav class="navbar fixed-bottom rounded-pill d-lg-none">
      <div class="container-fluid">
        <div class="navbar-collapse">
          <ul class="navbar-nav d-inline-block">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <i class="bi bi-list-ul"></i>
                الرئيسية
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="bi bi-list-ul"></i>
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="bi bi-list-ul"></i>
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.navbar.fixed-bottom {
  box-shadow: 3px 4px #000;
  border: 2.5px solid #000;
  border-color: #000 !important;
  background-color: #ffffff;
  color: #000;
  font-size: 25px;
  margin: 20px;
}

.nav-item {
  display: inline-block;
}
.nav-link {
  display: table-caption;
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
}
</style>
