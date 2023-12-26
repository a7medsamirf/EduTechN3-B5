<script setup lang="ts">
const scrollTop = () => {
  window.scrollTo(0, 0);
};
</script>
<template>
  <div>
    <footer class="py-10" id="footer">
      <div class="container">
        <div class="row row-cols-1 row-cols-lg-5 g-4">
          <div class="col-lg-3 mb-3">
            <form>
              <h5 class="Newsletter">اشترك في نشرتنا الإخبارية</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
          <div class="col-lg-2 mb-3">
            <h5>القائمة</h5>
            <ul class="nav flex-column p-0">
              <li class="nav-item mb-2">
                <a href="" class="nav-link p-0 text-body-secondary">التصنيفات</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">الدورات</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">جديد</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">الشهادات</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 mb-3">
            <h5>الشركة</h5>
            <ul class="nav flex-column p-0">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">معلومات عنا</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">أخبار</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">الموجهون</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">مدونة</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 mb-3">
            <h5>الدعم</h5>
            <ul class="nav flex-column p-0">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">حماية</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">الشروط والأحكام</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">وظائف</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">مجتمع</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 mb-3">
            <form>
              <h5 class="Newsletter">اشترك في نشرتنا الإخبارية</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <NuxtLink class="btn btn-primary" @click="scrollTop"><slot /></NuxtLink>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
#footer {
  border-radius: 56px 56px 0px 0px;
  border: 3px solid #d2d2d2;
  background: #f8f8f8;
  .Newsletter {
    color: #000;
    font-size: 42px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
