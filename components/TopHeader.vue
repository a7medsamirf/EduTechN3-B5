<template>
  <!-- Top Header -->
  <div class="top-header py-3 d-none d-lg-block">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <NuxtLink to="/" class="navbar-brand m-0">
            <img src="/images/logo/white.png" class="img-fluid logo" />
          </NuxtLink>
        </div>

        <div class="col-md-4">
          <div class="search-box rounded-3 d-flex align-items-center">
            <i class="bi bi-search"></i>
            <input
              type="text"
              class="form-control rounded-3"
              placeholder="بحث في أي دورة"
            />
          </div>
        </div>

        <div class="col d-flex flex-row-reverse align-items-center">
          <div class="">
            <button type="button" class="btn btn-outline-light rounded-3 btn-lg mx-2">
              انضم كمدرس
            </button>
            <button type="button" class="btn btn-primary rounded-3 btn-lg mx-2">
              احجز فصلًا مجانيًا
            </button>
          </div>
        </div>
      </div>
    </div>
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
.top-header {
  background: #b4d8ae;
  img.logo {
    width: 30%;
  }
  .search-box {
    position: relative;
    transition: all 0.5s ease-in-out;
    box-shadow: 3px 4px #000;
    border: 2.5px solid #000;
    border-color: #000 !important;
    background-color: #ffffff;
    color: #000;
    font-size: 14px;
    input {
      height: 45px;
      text-indent: 25px;
      &:focus {
        box-shadow: none;
        border: none;
      }
    }
    .bi-search {
      position: absolute;
      left: 20px;
      font-size: 16px;
    }
  }
}
</style>
