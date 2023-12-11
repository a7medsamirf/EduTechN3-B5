<script setup>
const WhyUs = [
  {
    title: "فصول مخصصة",
    description:
      "نحن نقدم دروسا مخصصة 1:1 للمساعدة في التركيز على نقاط القوة لدى طفلك وتقليل الضعف.",
    images: "/images/svg/WhyUs-3.svg",
    Bgcolor: "#FFCDD9",
    color: "#66172A",
  },
  {
    title: "تقنية رواية القصص",
    description:
      "نحن نقدم دروسًا مبنية على سرد القصص تكون ممتعة وجذابة ومجزية. تغرس دروسنا حب التعلم مدى الحياة للمساعدة في النجاح الأكاديمي والشخصي والمهني.",
    images: "/images/svg/WhyUs-4.svg",
    Bgcolor: "#E8EDFF",
    color: "#13235A",
  },
  {
    title: "التركيز على المهارات الحياتية مع مواضيع الحياة الحقيقية",
    description:
      "موضوعات من الحياة الواقعية تعزز معرفة الأطفال، وتهيئهم للمقابلات والحياة والوظائف.",
    images: "/images/svg/WhyUs-5.svg",
    Bgcolor: "#FBEDFF",
    color: "#451651",
  },
  {
    title: "المساعدة في التطور بشكل كلي",
    description:
      "تعمل دروسنا على زيادة الأداء الأكاديمي وتزويد الطلاب بالمهارات الشاملة التي تؤهلهم للجامعة أو للمهن المستقبلية.",
    images: "/images/svg/WhyUs-1.svg",
    Bgcolor: "#C2FCFC",
    color: "#225050",
  },
  {
    title: "استخدم التفكير النقدي والذكاء العاطفي",
    description:
      "يتم تشجيع المتعلمين على التفكير بوضوح وعقلانية، لفهم العلاقة المنطقية بين الأفكار وإصدار أحكام منطقية بشكل جيد.",
    images: "/images/svg/WhyUs-2.svg",
    Bgcolor: "#E2FFA4",
    color: "#465528",
  },
];
</script>

<template>
  <section id="WhyUs" class="py-10">
    <div class="container">
      <div class="my-3">
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h2 class="display-4 fw-normal text-body-emphasis">لماذا إديوتك؟</h2>
          <p class="fs-5 text-body-secondary">
            المشاركة، المتعة، الاحتفاظ، التحفيز، الإبداع، الإيجابية، التكيف، المشاركة،
            المهارات الاجتماعية.
          </p>
        </div>

        <div class="row row-cols-1 row-cols-lg-5 row-cols-md-3 g-4">
          <div class="col" v-for="(item, index) in WhyUs" :key="index">
            <div class="card h-100 p-3" :style="{ backgroundColor: item.Bgcolor }">
              <img class="card-img-top" :src="item.images" :alt="item.title" />
              <div class="card-body mb-md-5 p-0">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text" :style="{ color: item.color }">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#WhyUs {
  .card {
    padding: 20px 5px;
    transition: all 0.5s ease-in-out;
    border-width: 2px;
    box-shadow: 6px 6px 0px 0px var(--p-darkcolor);
    border: 2.5px solid var(--p-darkcolor);
    border-color: var(--p-darkcolor);
    border-radius: 16px;
    cursor: pointer;
    &:hover {
      transform: translateY(-10px);
      box-shadow: none;
      transition: all 0.5s ease-in-out;
    }
    .card-img-top {
      width: 80px;
    }
    .card-body {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 27px;
      white-space: break-spaces;
    }
  }
}
</style>
