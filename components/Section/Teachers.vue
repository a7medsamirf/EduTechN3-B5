<script setup>
const Teachers = [
  {
    title: " تعلم الاسبانية",
    name: "Diego",
    images: "/images/Learn/1.png",
    Bgcolor: "#FF7A7A",
    color: "#66172A",
  },
  {
    title: "تعلم لغة الماندرين",
    name: "Ming Yue",
    images: "/images/Learn/3.png",
    Bgcolor: "#7AC7FF",
    color: "#13235A",
  },
  {
    title: "تعلم الانجليزية",
    name: "Aarav",
    images: "/images/Learn/2.png",
    Bgcolor: "#e2ffa4",
    color: "#451651",
  },
  {
    title: "تعلم الفرنسية",
    name: "Mandy",
    images: "/images/Learn/4.png",
    Bgcolor: "#75FFE6",
    color: "#225050",
  },
];
</script>

<template>
  <section id="Teachers" class="py-10">
    <div class="container">
      <div class="my-3">
        <div class="section-header p-3 pb-md-4 text-center">
          <h2 class="fs-1 header-title">تعلم اللغات الأجنبية</h2>
          <p class="fs-5 text-body-secondary">
            اختر بين المعلمين الدوليين لمنح طفلك أفضل تعليم
          </p>
        </div>

        <div class="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
          <div class="col" v-for="(item, index) in Teachers" :key="index">
            <div class="card rounded-4">
              <div class="img-box rounded-4" :style="{ backgroundColor: item.Bgcolor }">
                <img
                  class="card-img-top rounded-4"
                  :src="item.images"
                  :alt="item.title"
                />
                <span class="name font-bold" :style="{ backgroundColor: item.Bgcolor }">{{
                  item.name
                }}</span>
              </div>

              <div class="card-body p-3">
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary">
                    <h5 class="card-title mb-2">{{ item.title }}</h5>
                    <p class="card-text">اضغط لتتعلم المزيد</p>
                  </small>
                  <button
                    type="button"
                    arget="_blank"
                    class="btn btn-light btn-md rounded-4"
                  >
                    استكشاف
                  </button>
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
#Teachers {
  background: #eee7ff;
  .card {
    border-width: 2px;
    border: 2.5px solid var(--p-darkcolor);
    border-color: var(--p-darkcolor);
    cursor: pointer;
    .card-img-top {
      width: 150px;
    }
    .card-body {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 27px;
      white-space: break-spaces;
    }
  }
}

button.btn.btn-light {
  transition: all 0.5s ease-in-out;
  box-shadow: 3px 4px var(--p-darkcolor);
  border: 2.5px solid var(--p-darkcolor);
  border-color: var(--p-darkcolor);
  background-color: #fffacd;
  color: var(--p-darkcolor);
  font-size: 14px;
}

.card .name {
  position: absolute;
  top: 25px;
  border-radius: 6px;
  padding: 2px 15px;
  left: 20px;
}

.img-box {
  border-bottom: 2.5px solid var(--p-darkcolor);
}
</style>
