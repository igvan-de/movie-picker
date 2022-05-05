<template>
  <header>
      <section class="welcome">
        <div class="wrapper">
            <h1>Movie Picker</h1>
            <h3>
              Search the next movie you want to see!
            </h3>
        </div>
        <AboutView />
      </section>
  </header>
  <RouterView />
</template>
<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import AboutView from '@/views/AboutView.vue'
</script>
<style>
@import '@/assets/base.css';

header {
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
    top: 9rem;
}

.welcome {
  display: flex;
  flex-direction: row;
  width: 80%;
  padding-right: calc(160px / 2);
  padding-left: calc(160px / 2);
  gap: 5rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

  .wrapper h1 {
    font-weight: 900;
    font-size: 6rem;
    top: -10px;
    color: #46d6d4;
    line-height: normal;
  }

  .wrapper h3 {
    font-size: 1.5rem;
  }

@media (max-width: 1024px) {

  header {
    top: 4rem;
  }

  .welcome {
    display: flex;
    flex-direction: column;
    gap: 0rem;
  }
}
</style>
