<template>
  <section class="hero">
    <div class="footer-container">
      <h1 class="hero-title">I’m a designer specialising in <span>UI/UX</span> and <span>Interaction Design</span></h1>
      <button class="hero-arrow"></button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.footer-container {
}

.hero-title {
  font-weight: 300;
  font-size: 56px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: rgba(227, 228, 230, 0.55);
  text-align: center;
}

.hero-title span {
  font-weight: 600;
  color: #E3E4E6;
}

.hero-arrow {
  background: transparent url("@/assets/arrow.svg") center center no-repeat;
  border: none;
  width: 40px;
  height: 40px;
  rotate: 90deg;
  position: absolute;
  left: 50%;
  bottom: 42px;
  transform: translateX(-50%);
  cursor: pointer;
}
</style>