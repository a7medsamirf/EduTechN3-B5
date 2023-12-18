<script setup lang="ts">
import CountUp from "vue-countup-v3";
</script>

<template>
  <div>
    <section id="countup" class="section-padding d-grid gap-3">
      <div class="container">
        <div
          class="row row-cols-1 row-cols-lg-6 row-cols-md-3 g-4 justify-content-center text-center"
        >
          <div class="col">
            <div class="number">
              <count-up :decimal="0" :start-val="0" :end-val="20">
                <template #prefix>
                  <span>+</span>
                </template>
                <template #suffix>
                  <span>k</span>
                </template>
              </count-up>
            </div>
            <div class="number-title fs-5 text-body-secondary">
              شركاء العلامة التجارية
            </div>
          </div>
          <div class="col">
            <div class="number">
              <count-up :decimal="0" :start-val="0" :end-val="62">
                <template #prefix>
                  <span>+</span>
                </template>
              </count-up>
            </div>
            <div class="number-title fs-5 text-body-secondary">جوائز التميز</div>
          </div>
          <div class="col">
            <div class="number">
              <count-up :decimal="0" :start-val="0" :end-val="9">
                <template #prefix>
                  <span>+</span>
                </template>
              </count-up>
            </div>
            <div class="number-title fs-5 text-body-secondary">سنوات من الخبرة</div>
          </div>
          <div class="col">
            <div class="number">
              <count-up :decimal="0" :start-val="0" :end-val="12">
                <template #prefix>
                  <span>+</span>
                </template>
                <template #suffix>
                  <span>k</span>
                </template>
              </count-up>
            </div>
            <div class="number-title fs-5 text-body-secondary">الاطفال سنويا</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#countup {
  background-color: #e0f7db;
  .number {
    font-size: 50px;
  }
}
</style>
