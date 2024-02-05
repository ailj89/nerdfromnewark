<template>
  <div class="d-flex align-center flex-column">
    <h2 class="text-h2 text-center pa-4">Welcome to Nerd From Newark!</h2>

    <p class="text-body-1 text-center pa-4">
      Here you will find details highlighting my
      <router-link :to="'/roles'">Career</router-link> as a Front-End Developer, my
      <router-link :to="'/about'">Hobbies/Interest</router-link>, and
      <router-link :to="'/projects'">Projects</router-link> I've worked on or currently working on.
    </p>

    <p class="text-body-1 pa-4">
      If you've visited my portfolio previously, you're probably wondering why the change? I updated
      my portfolio using Vue to reflect the path my career has taken since previously developing my
      portfolio using React. Why Vue? The simple anwser is that it is syntactically similar to
      AngularJS so it was an easier transtion. On top of that, there was a need to migrate from
      AngularJS during my time at gen.video as AngularJS was sunsetting. After evaluating Angular,
      React, and Vue, ultimately we decided upon Vue which has become my personal framework of
      choice. However, I am looking forward to learning Angular, React, or whatever the next
      industry changing framework is in this ever evolving field.
    </p>

    <hello-world />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
</script>
