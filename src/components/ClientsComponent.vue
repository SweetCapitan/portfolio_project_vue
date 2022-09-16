<template>
  <section class="clients">
    <div class="container">
      <h2 class="clients-title"><span>Some of</span> the clients I have
        designed for</h2>
      <div class="clients-body">
        <div class="clients-item"><img src="@/assets/logos/air.svg" alt=""></div>
        <div class="clients-item"><img src="@/assets/logos/google.svg" alt=""></div>
        <div class="clients-item"><img src="@/assets/logos/microsoft.svg" alt=""></div>
        <div class="clients-item"><img src="@/assets/logos/fedex.svg" alt=""></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "@/assets/main.css";
.clients {
  padding: 80px 0 130px;
}

.container {
}

.clients-title {
  font-size: 40px;
  line-height: 150%;
  font-weight: 600;
  color: #E3E4E6;
  max-width: 520px;
}

.clients-title span {
  color: rgba(227, 228, 230, 0.55);
  font-weight: 300;
}

.clients-body {
  margin-top: 95px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.clients-item {
}
</style>