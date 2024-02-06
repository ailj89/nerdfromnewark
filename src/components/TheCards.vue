<template>
  <v-container class="my-4">
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <div class="animated_card animate_color">
          <router-link class="navLink" :to="'/roles'">
            <v-card
              width="200"
              max-width="400"
              class="mx-auto"
              height="200"
              image="../../public/images/profile.jpg"
              title="Career"
              theme="dark"
            ></v-card>
          </router-link>
        </div>
      </v-col>
      <v-col cols="auto">
        <div class="animated_card animate_color">
          <router-link class="navLink" :to="'/about'">
            <v-card
              width="200"
              max-width="400"
              height="200"
              class="mx-auto"
              title="Hobbies"
              theme="dark"
              image="../../public/images/shelf.jpg"
            >
            </v-card>
          </router-link>
        </div>
      </v-col>

      <v-col cols="auto">
        <div class="animated_card animate_color">
          <router-link class="navLink" :to="'/projects'">
            <v-card
              width="200"
              max-width="400"
              class="mx-auto"
              height="200"
              title="Projects"
              theme="dark"
              image="../../public/images/shelf.jpg"
            >
            </v-card>
          </router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped>
.animated_card {
  height: 200px;
  width: 200px;
}
.animate_color::before {
  position: absolute;
  content: '';
  height: 200px;
  width: 200px;
  background: var(--vt-c-forget-me-not);
  border-radius: 5px;
  /* z-index: -1; */
  transition: 0.3s;
}

.animate_color:hover::before {
  animation: animate 2s linear infinite;
  height: 202px;
  width: 203px;
}

@keyframes animate {
  50% {
    filter: hue-rotate(350deg);
  }
}
</style>
