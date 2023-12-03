<template>
  <div>
    <section id="HeroSection">
    <div class="container">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src="/images/hero/Maskgroup.webp" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="400" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3"><!-- {{  $t('welcome') }} --> كل طفل يولد عبقريا</h1>
          <p class="lead">
            نحن نقدم دروسًا مخصصة مدعومة بالذكاء الاصطناعي تستهدف
الأطفال بين 3-12 سنة. مع مناهجنا المتقاطعة
النهج، ونحن نضمن حصول طفلك على الأفضل.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" arget="_blank" class="btn btn-primary btn-lg px-4 me-md-2">استكشاف الدورات</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  </div>
</template>

<script>
export default {
  name: "Hero",
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
#HeroSection{
  background: #E6FFE1;
  h1{
    color: #000;
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: 110px; /* 110% */
}
p{

color: #000;

font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 32px;
}
.btn.btn-primary{
  cursor: pointer;
    position: relative;
    display: block;
    overflow: hidden;
    z-index: 1;
    padding: 15px 40px;
    transition: all 0.5s ease-in-out;
    border-width: 2px;
    box-shadow: 6px 6px #000;
    border: 2.5px solid #000;
    border-color: #000 !important;
    background-color: #ffe500;
    color: #000;
    &:hover {
    transform: scale(0.95);
    box-shadow: none;
    transition: all 0.5s ease-in-out;

}
}
}

</style>

