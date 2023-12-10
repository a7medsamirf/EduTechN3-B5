<script setup>
const blogs = [
  {
    title: "ما هو التعليم المنزلي وكيف يساعد؟",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، ",
    category: "التعليم",
    images: "/images/blog/blog-3.png",
    Bgcolor: "#E4B9FF",
  },
  {
    title: "العوامل الهامة التي تؤثر على نمو شخصية طفلك",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، ",
    category: "التطوير",
    images: "/images/blog/blog-2.png",
    Bgcolor: "#83E9E3",
  },
  {
    title: "ألغاز إنجليزية للأطفال: 22 ألغاز قصيرة وسهلة",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، ",
    category: "اللغة",
    images: "/images/blog/blog-1.png",
    Bgcolor: "#C4EFAA",
  },
];
</script>

<template>
  <section id="blogs" class="py-10">
    <div class="container">
      <div class="my-3">
        <div class="section-head p-3 pb-md-4 text-center">
          <h2 class="fs-2 header-title">إقرأ مدوناتنا اليومية</h2>
        </div>

        <div class="row row-cols-1 row-cols-lg-3 g-4">
          <div class="col" v-for="(item, index) in blogs" :key="index">
            <div class="card p-2 rounded-5">
              <img class="card-img-top rounded-5" :src="item.images" :alt="item.title" />
              <span class="category" :style="{ backgroundColor: item.Bgcolor }">{{
                item.category
              }}</span>
              <div class="card-body p-4">
                <h5 class="card-title fw-bold mb-3">{{ item.title }}</h5>
                <p class="card-text">{{ item.description }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary">تم النشر في 8 نوفمبر 2023</small>
                  <small class="text-body-secondary">9 دقائق</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#blogs {
  background: #fbebff;
  .section-head {
    margin-bottom: 40px;
  }
  .card {
    position: relative;
    border: 3px solid #000;
    background: #fff;
    .card-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .category {
      position: absolute;
      top: 25px;
      border-radius: 6px;
      padding: 2px 15px;
      right: 20px;
    }
    img.card-img-top {
      border: 3px solid #000;
    }
  }
}
</style>
