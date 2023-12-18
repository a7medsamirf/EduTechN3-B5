<script setup>
const WeOffer = [
  {
    title: "الأنجليزيه",
    description: "يعزز خفة الحركة ويجعلها فعالة في حل المشكلات.",
    images: "/images/svg/WeOffer-1.svg",
  },
  {
    title: "كتابة إبداعية",
    description: " عملية مصممة لتحفيز طفلك على إنشاء أعماله الخاصة",
    images: "/images/svg/WeOffer-2.svg",
  },
  {
    title: "التحدث أمام الجمهور",
    description: "تحديد نقاط القوة الفريدة لدى طفلك وتسخيرها.",
    images: "/images/svg/WeOffer-3.svg",
  },
  {
    title: "التدريب على الآداب",
    description: "اترك انطباعًا أوليًا جيدًا في كل مكان وفي أي مكان",
    images: "/images/svg/WeOffer-4.svg",
  },
];
</script>

<template>
  <section id="WeOffer" class="py-10">
    <div class="container">
      <div class="my-3">
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h2 class="fs-1 header-title">ما نقدمه</h2>
          <p class="fs-4 header-description">
            فهم كيفية تقديم مفاهيم التعلم في سياقات واقعية
          </p>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item Public-speaking">
              <a class="nav-link" href="#">التحدث أمام الجمهور</a>
            </li>
          </ul>

          <p class="header-Sabtitle">
            ساعد الأطفال على تطوير المهارات الاجتماعية وتعلم كيفية العمل ضمن فريق لتحقيق
            هدف مشترك
          </p>
        </div>

        <div class="row g-4">
          <div class="col-lg-6 col-md-12" v-for="(item, index) in WeOffer" :key="index">
            <div class="d-flex WeOffer">
              <div class="m-2 icon">
                <img class="WeOffer-img-top" :src="item.images" :alt="item.title" />
              </div>
              <div class="flex-grow-1 me-3 mt-3 WeOffer-body rounded">
                <h5 class="card-title font-light mb-3">{{ item.title }}</h5>
                <p class="card-text">{{ item.description }}</p>
                <button type="button" class="btn btn-light btn-lg d-lg-none">
                  مشاهدة المزيد
                </button>
              </div>
              <div class="m-2 icon d-flex align-items-center">
                <button type="button" class="btn btn-light btn-lg d-none d-lg-block">
                  مشاهدة المزيد
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#WeOffer {
  .WeOffer {
    cursor: pointer;
    position: relative;
    padding: 20px 5px;
    transition: all 0.5s ease-in-out;
    border-width: 2px;
    box-shadow: 5px 5px #ffcdd9, 5px 5px 0px 2.5px #000;
    border: 2.5px solid #000;
    border-radius: 16px !important;
    &:hover {
      transform: translateY(-10px);
      box-shadow: none;
      transition: all 0.5s ease-in-out;
    }
    .WeOffer-img-top {
      width: 60px;
      height: 80px;
    }
    .WeOffer-body {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 27px;
      white-space: break-spaces;
    }
  }
}

button.btn.btn-light {
  transition: all 0.5s ease-in-out;
  box-shadow: 3px 4px #000;
  border: 2.5px solid #000;
  border-color: #000 !important;
  background-color: #fffacd;
  color: #000;
  font-size: 14px;
}

.Public-speaking {
  transition: all 0.5s ease-in-out;
  border-width: 2px;
  box-shadow: 3px 3px #ffc46c, 3px 3px 0px 2.5px #000;
  border: 2.5px solid #000;
  border-color: #000 !important;
  border-radius: 16px !important;
  background: #70fff6;
  a {
    color: #000000;
  }
}

.header-title {
  color: #000;
  text-align: center;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
}

.header-description {
  color: #797979;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
}

.header-Sabtitle {
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
}
</style>
