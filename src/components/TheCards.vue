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
              title="Career"
              theme="dark"
            >
              <v-img
                src="../../public/images/profile.jpg"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
              </v-img>
            </v-card>
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
              title="About"
              theme="dark"
            >
              <v-img
                src="../../public/images/shelf.jpg"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
              </v-img>
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
            >
              <v-img
                src="../../public/images/projects.jpg"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
              </v-img>
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
.animated_card:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
.animated_card:hover .v-card-title {
  background: var(--vt-c-forget-me-not) !important;
}
.animate_color::before {
  position: absolute;
  content: '';
  height: 200px;
  width: 200px;
  background: var(--vt-c-forget-me-not);
  border-radius: 5px;
  transition: 0.3s;
}
.animate_color:hover::before {
  animation: animate 2s linear infinite;
  height: 202px;
  width: 203px;
}

.v-card-title {
  color: var(--vt-c-forget-me-not);
}

@keyframes animate {
  50% {
    filter: hue-rotate(350deg);
  }
}
</style>
