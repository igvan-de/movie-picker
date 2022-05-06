<template>
  <section>
    <!-- List of about items for the webapp, Every AboutItem request an item and heading.
         - Item reference for the item img next to the block of content
         - Heading reference to the title of the block of content
         The advantage of this is that the AboutItem component is easy to reuse in this component
     -->
    <AboutItem>
      <template #icon>
        <img src="../assets/loupe.png">
      </template>
      <template #heading>Search on movie title</template>
      <p>
        You don't know which movie to watch alone or toghter?
        Feel free to make use of this free movie picker. Type in a title you might be intersted in.
        And you will receive a list with movies containing that name.
      </p>
    </AboutItem>

    <AboutItem>
      <template #icon>
        <img src="../assets/light-bulb.png">
      </template>
      <template #heading>Get to know all you need about the movie</template>
      <p>
      You still can't decide after only seeing the title of a movie and when it's made.
      Click on it and check all the details you need to know to make your decision.
      </p>
    </AboutItem>

    <AboutItem>
      <template #icon>
        <img src="../assets/popcorn.png" width="30" height="30">
      </template>
      <template #heading>Pick & enjoy your movie!</template>
      <p>
        After you searched, read all the details of the movie.
        There are only two things left to do for you... Pick and enjoy the movie!
      </p>
    </AboutItem>
  </section>
</template>
<script setup>
  import AboutItem from './AboutItem.vue'
</script>
<style scoped>
@import '../assets/base.css';

p {
  font-size: 1.1rem;
  color: #EAEBED;
}

img {
  width: 32px;
  height: 32px;
}
</style>
