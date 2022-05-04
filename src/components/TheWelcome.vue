<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <img src="../assets/loupe.png">
    </template>
    <template #heading>Search on movie title</template>

  <p>
    You don't know which movie to watch alone or toghter?
    Feel free to make use of this free movie picker. Type in a title you might be intersted in.
    And you will receive a list with movies containing that name.
  </p>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <img src="../assets/light-bulb.png">
    </template>
    <template #heading>Get to know all you need about the movie</template>

    <p>
    You still can't decide after only seeing the title of a movie and when it's made.
    Click on it and check all the details you need to know to make your decision.
    </p>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <img src="../assets/popcorn.png" width="30" height="30">
    </template>
    <template #heading>Pick & enjoy your movie!</template>

    <p>
      After you searched, read all the details of the movie.
      There are only two things left to do for you... Pick and enjoy the movie!
    </p>

  </WelcomeItem>

</template>

<style scoped>

p {
  font-size: 1.1rem;
  color: #EAEBED;
}

img {
  width: 32px;
  height: 32px;
}

</style>
