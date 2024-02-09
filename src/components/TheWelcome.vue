<template>
  <v-container>
    <v-row>
      <v-col cols="10" sm="12" offset="1" offset-sm="0">
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <h3 class="text-h3 font-weight-bold pa-4">Welcome To Nerd From Newark!</h3>
              <p class="text-body-1 pa-4">
                Here you will find details highlighting my
                <router-link class="navLink" :to="'/roles'">Career</router-link> as a Front-End
                Developer, more <router-link class="navLink" :to="'/about'">About</router-link> me
                outside of development, and
                <router-link class="navLink" :to="'/projects'">Projects</router-link> I've worked on
                or currently in the works.
              </p>

              <p class="text-body-1 pa-4">
                If you've visited my portfolio previously, you're probably wondering why the change?
                I updated my portfolio using Vue to reflect the path my career has taken since
                previously developing my portfolio using
                <a class="link" href="https://react.dev/" target="_blank">React</a>. Why
                <a class="link" href="https://vuejs.org/" target="_blank">Vue?</a> The simple anwser
                is that it is syntactically similar to
                <a class="link" href="https://angularjs.org/" target="_blank">AngularJS</a> so it
                was an easier transtion. On top of that, there was a need to migrate from AngularJS
                during my time at gen.video as AngularJS was sunsetting. After evaluating
                <a class="link" href="https://angular.io/" target="_blank">Angular</a>, React, and
                Vue, ultimately we decided upon Vue because of the familiarity of the Dev Team.
                While Vue has become my framework of choice, I am looking forward to learning
                Angular, React, or whatever the next industry changing
                <a
                  class="link"
                  href="https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190"
                  target="_blank"
                  >framework</a
                >
                is in this ever evolving field.
              </p>
            </v-col>

            <v-col cols="12" sm="12" md="6">
              <about-portfolio />
            </v-col>
            <the-cards />
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import TheCards from '@/components/TheCards.vue'
import AboutPortfolio from '@/components/home/AboutPortfolio.vue'
</script>
