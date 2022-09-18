<template>
  <header class="header">
    <div class="footer-container header-container">
      <a href="" class="header-logo">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="95.2" height="28" />
      </a>
      <nav class="header-menu">
        <ul class="menu-list">
          <li class="menu-item"><a href="" class="menu-link">HOME</a></li>
          <li class="menu-item"><a href="" class="menu-link">WORK</a></li>
          <li class="menu-item"><a href="" class="menu-link">ABOUT</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@import "@/assets/main.css";

.header {
  padding: 35px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background: #010208;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-logo {
}

.logo {
}

.header-menu {
}

.menu-list {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 32px
}

.menu-link:hover{
  background: linear-gradient(99.05deg, #BC3CD8 0.07%, #C54B8C 106.32%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.menu-link:hover::before {
  opacity: 1;
  visibility: visible;
}

.menu-link {
  font-weight: 600;
  font-size: 14px;
  color: #E3E4E6;
  text-decoration: none;
  position: relative;
}
.menu-link::before {
  content: '';
  width: 9px;
  height: 5px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  left: 50%;
  bottom: -8px;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
}

</style>
