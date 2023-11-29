<script>

    export default {
      name: "WhyUs",
      data() {
        return {

          WhyUs: [{
              title: '1:1 Personalized Classes',
              description: 'We provide personalized 1:1 classes to help focus on your child’s strengths and minimize weakness.',
              color: "#E2FFA4",
            },
            {
              title: 'features.Branding',
              description: 'features.description',
              color: "#C2FCFC",
            },
            {
              title: 'features.Programming',
              description: 'features.description',
              color: "#FBEDFF",
            },
            {
              title: 'features.Marketing',
              description: 'features.description',
              color: "#E8EDFF",
            },
            {
              title: 'features.Marketing',
              description: 'features.description',
              color: "#FFCDD9",
            },
          ]
        }
      },
    }
</script>

<template>
    <div class="my-3">
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal text-body-emphasis">Why CuriousKids?</h1>
      <p class="fs-5 text-body-secondary">Engaging, enjoyable, retention, motivation, creativity, positive, adaptive, participation, social skills.</p>
    </div>
   
<div class="row">
<div class="col col-md-4" v-for="(item, index) in WhyUs" :key="index">
<div class="card" :style="{ backgroundColor: item.color }">

<!-- 
    <img
    src="require(`~/public/images/WhyUs/${item.avatar}`)"
     class="card-img-top"  alt="item.avatar"> -->


<div class="card-body">
  <h5 class="card-title">{{ item.title }}</h5>
  <p class="card-text">{{ item.description }}</p>
</div>
</div>

</div>
 </div>

    </div>
</template>

<style scoped>

.card{
  cursor: pointer;
    position: relative;
    display: block;
    overflow: hidden;
    z-index: 1;
    padding: 20px;
    transition: all 0.5s ease-in-out;
    border-width: 2px;
    box-shadow: 6px 6px #000;
    border: 2.5px solid #000;
    border-color: #000 !important;


}
.card:hover{
    transform: translateY(-10px);
    box-shadow: none;
    transition: all 0.5s ease-in-out;
    color: #fff;
}

</style>

