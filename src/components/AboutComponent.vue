<template>
  <section class="about" id="about">
    <div class="footer-container about-container">
      <div class="about-text">
        <h2 class="about-title">A bit about me</h2>
        <div class="about-text">
          <span>I am a UI/UX designer who is passionate about creating</span> beautiful and joyful digital experiences. Besides design, I love music, games and travelling.
        </div>
      </div>
      <div class="about-gallery">
        <div class="about-img"><img src="@/assets/about/about-1.png" alt=""></div>
        <div class="about-img"><img src="@/assets/about/about-2.png" alt=""></div>
        <div class="about-img"><img src="@/assets/about/about-3.png" alt=""></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 75px 0;
  scroll-margin-top: 25px;
}

.about-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.about-text span {
  font-weight: 300;
  font-size: 32px;
  color: rgba(227, 228, 230, 0.55);
}

.about-text {
  font-weight: 600;
  font-size: 32px;
  color: #E3E4E6;
  margin-top: 15px;
}

.about-title {
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #E3E4E6;
}

.about-gallery {
  flex: 0 0 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
}

.about-img {
  border-radius: 10px;
  overflow: hidden;
}
.about-img img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.about-img:nth-child(1){
  grid-column: 1/2;
  grid-row: 2/4;
}
.about-img:nth-child(2){
  grid-column: 2/3;
  grid-row: 1/3;
}
.about-img:nth-child(3){
  grid-column: 2/3;
  grid-row: 3/5;
}

@media (max-width: 992px) {
  .about-gallery {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: stretch;
  }
  .about-container {
    flex-direction: column;
  }
}

@media (max-width: 575px) {
  .about {
    padding: 30px 0;
  }
}

@media (max-width: 475px) {
  .about-text {
    font-size: 25px;
    margin-top: 10px;
  }
}
</style>