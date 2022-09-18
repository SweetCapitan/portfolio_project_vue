<template>
  <section class="works">
    <div class="works-container footer-container">
      <h2 class="works-title">Selected <span>Works</span></h2>
      <div class="work-body">
        <div class="works-card card">
          <div class="card-img">
            <img alt="" src="@/assets/cards/card-1.png">
          </div>
          <div class="card-info">
            <span class="card-title">Real estate Template</span>
            <div class="card-text">
              Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit. Ultrices lorem non feugiat egestas amet.</span>
            </div>
            <div class="card-category">
              Website Design
            </div>
            <a href="" class="card-button">
              View Work
<!--              <img alt="" src="@/assets/arrow.svg">-->
            </a>
          </div>
        </div>
        <div class="works-card card card-r">
          <div class="card-img">
            <img alt="" src="@/assets/cards/card-2.png">
          </div>
          <div class="card-info">
            <span class="card-title">Plant identification app</span>
            <div class="card-text">
              Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit. Ultrices lorem non feugiat egestas amet.</span>
            </div>
            <div class="card-category">
              Mobile App
            </div>
            <a href="" class="card-button">
              View Work
<!--              <img alt="" src="@/assets/arrow.svg">-->
            </a>
          </div>
        </div>
        <div class="works-card card">
          <div class="card-img">
            <img alt="" src="@/assets/cards/card-3.png">
          </div>
          <div class="card-info">
            <span class="card-title">Smart Home App</span>
            <div class="card-text">
              Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit. Ultrices lorem non feugiat egestas amet.</span>
            </div>
            <div class="card-category">
              Mobile App
            </div>
            <a href="" class="card-button">
              View Work
<!--              <img alt="" src="@/assets/arrow.svg">-->
            </a>
          </div>
        </div>
        <div class="works-card card card-r">
          <div class="card-img">
            <img alt="" src="@/assets/cards/card-4.png">
          </div>
          <div class="card-info">
            <span class="card-title">Logo Animation</span>
            <div class="card-text">
              Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit. Ultrices lorem non feugiat egestas amet.</span>
            </div>
            <div class="card-category">
              Animation
            </div>
            <a href="" class="card-button">
              View Work
<!--              <img alt="" src="@/assets/arrow.svg">-->
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "@/assets/main.css";
.works {
  padding: 80px 0 120px;
}

.works-container {
}

.works-title {
  font-weight: 300;
  font-size: 40px;
  line-height: 150%;
  color: rgba(227, 228, 230, 0.55);
  margin-bottom: 96px;
}
.works-title span {
  font-weight: 600;
  color: #E3E4E6;
}

.work-body {

}

.works-card {
}

.card {
  display: flex;
  gap: 32px
}

.card-r {
  flex-direction: row-reverse;
}

.card:not(:last-child) {
  margin-bottom: 96px;
}

.card-img {
  border-radius: 16px;
  overflow: hidden;
  flex: 0 0 50%
}

.card-img img {
  max-width: 100%;
}

.card-info {
  flex: 1 1 auto;
  align-self: flex-end;
}

.card-title {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #E3E4E6;
  margin-bottom: 16px;
}

.card-text {
  font-weight: 300;
  font-size: 32px;
  line-height: 150%;
  color: rgba(227, 228, 230, 0.55);
  margin-bottom: 24px;
}

.card-text span {
  font-weight: 600;
  color: #E3E4E6;
}

.card-category {
  font-weight: 300;
  font-size: 18px;
  color: #E3E4E6;
}

.card-button {
  display: inline-block;
  margin-top: 32px;
  padding: 8px 48px 8px 16px;
  border: 1px solid rgba(227, 228, 230, 0.55);
  border-radius: 100px;
  color: #fff;
  text-decoration: none;
  /*background: transparent url("@/assets/arrow.svg") right 15px center no-repeat;*/
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  position: relative;
}

.card-button::before{
  content: "";
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  background: transparent url("@/assets/arrow.svg") center center no-repeat;
}

.card-button:hover{
  background: linear-gradient(99.05deg, #BC3CD8 0.07%, #C54B8C 106.32%);
  border: 1px solid #E3E4E6;
}

.card-button:hover::before {
  background: transparent url("@/assets/arrow-hover.svg") center center no-repeat;
}
</style>