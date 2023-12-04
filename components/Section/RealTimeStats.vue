<script setup>
const RealTime = [
  {
    title: "أفضل المدربين في العالم",
    description: "أكثر من 3500 دورة",
    images: "/images/svg/crown.svg",
    color: "#495AFF",
  },
  {
    title: "دروس حية ودورات فيديو",
    description: "4,12,000 دورة",
    images: "/images/svg/video-camera.svg",
    color: "#FF525C",
  },
  {
    title: "التعلم النشط للأطفال بشكل عام",
    description: "2,16,000 طالب",
    images: "/images/svg/tick-2.svg",
    color: "#A535D9",
  },
];
</script>

<template>
  <section id="RealTimeStats" class="py-10">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 col-md-6 py-3"
          v-for="(item, index) in RealTime"
          :key="index"
        >
          <div class="d-flex align-items-center">
            <div
              class="flex-shrink-0 icon rounded-circle d-flex justify-content-center"
              :style="{ backgroundColor: item.color }"
            >
              <img :src="item.images" :alt="item.title" />
            </div>
            <div class="flex-grow-1 me-3">
              <h5>{{ item.title }}</h5>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#RealTimeStats {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #f8f3c7;
  .icon {
    width: 75px;
    height: 75px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    padding: 15px 30px;
    border-width: 2px;
    box-shadow: 0px 4px #000;
    border: 2.5px solid #000;
  }
}
</style>
