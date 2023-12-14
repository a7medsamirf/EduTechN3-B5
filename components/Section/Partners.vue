<script setup>
const Partners = [
  {
    images: "/images/blog/blog-3.png",
  },
  {
    images: "/images/blog/blog-3.png",
  },
  {
    images: "/images/blog/blog-2.png",
  },
  {
    images: "/images/blog/blog-1.png",
  },
  {
    images: "/images/blog/blog-1.png",
  },
  {
    images: "/images/blog/blog-1.png",
  },
];
</script>

<template>
  <section id="Partners" class="section-padding d-grid gap-3">
    <div class="container">
      <div class="my-3">
        <div class="section-head p-3 pb-md-4 text-center">
          <h2 class="fs-2 header-title">بعض شركائنا</h2>
        </div>

        <div class="row row-cols-1 row-cols-lg-6 row-cols-md-3 g-4">
          <div class="col" v-for="(item, index) in Partners" :key="index">
            <div class="card">
              <img class="card-img-top" :src="item.images" :alt="item.title" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#Partners {
  background-color: #fff2e5;
}
</style>
