<script setup lang="ts">
import {onMounted, ref} from "vue";
import {sectionStore, Selection} from "@/store/store";

const menuList = ref('')

function changeMenuList () {
  menuList.value === '' ? menuList.value = 'active' : menuList.value = ''
}

function handleButtonClick(event: any) {
  // console.log(event.target) // Для дебагга
  const blockId = event.target.getAttribute("href").substring(1)
  document.getElementById(blockId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

</script>

<template>
  <header class="header">
    <div class="footer-container header-container">
      <a href="" class="header-logo">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="95.2" height="28" />
      </a>
      <nav class="header-menu">
        <ul :class="menuList" class="menu-list">
          <li class="menu-item"><a href="#home" class="menu-link" @click.prevent="handleButtonClick">HOME</a></li>
          <li class="menu-item"><a href="#works" class="menu-link" @click.prevent="handleButtonClick">WORK</a></li>
          <li class="menu-item"><a href="#about" class="menu-link" @click.prevent="handleButtonClick">ABOUT</a></li>
          <li class="menu-item"><a href="#contacts" class="menu-link" @click.prevent="handleButtonClick">CONTACT ME</a></li>
        </ul>
      </nav>
      <div @click="changeMenuList" :class="menuList" class="menu-icon" >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<style>
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
  gap: 32px;
  transition: all .2s;
}

.menu-link:hover{
  background: linear-gradient(99.05deg, #BC3CD8 0.07%, #C54B8C 106.32%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /*background-clip: text;*/
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

.menu-icon {
  display: none;
  width: 30px;
  height: 18px;
  position: relative;
  z-index: 5;
  cursor: pointer;
}

.menu-list.active {
  transform: translateX(0);
}

.menu-icon.active span {
  transform: scale(0);
}

.menu-icon.active span:first-child {
  transform: rotate(-45deg);
  top: calc(50% - 1px);
}

.menu-icon.active span:last-child {
  transform: rotate(45deg);
  bottom: calc(50% - 1px);
}

.menu-icon span {
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  top: calc(50% - 1px);
  background-color: #E3E4E6;
  transition: all .2s;
}

.menu-icon span:first-child {
  top: 0;
}
.menu-icon span:last-child {
  top: auto;
  bottom: 0;
}

@media (max-width: 576px) {
  .menu-icon {
    display: block;
  }
  .menu-list {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #010208;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(-100%);
  }

  .menu-link {
    font-size: 30px;
  }
}

</style>
