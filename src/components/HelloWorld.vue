<template>
  <div class="mx-auto" width="800">
    <router-link :to="'/roles'">
      <div class="animated_card animate_color">
        <v-card
          width="200"
          max-width="400"
          height="200"
          image="../../public/images/profile.jpeg"
          title="Career"
          theme="dark"
        ></v-card>
      </div>
    </router-link>

    <router-link :to="'/about'">
      <div class="animated_card animate_color">
        <v-card
          width="200"
          max-width="400"
          height="200"
          title="Hobbies"
          theme="dark"
          image="../../public/images/shelf.jpg"
        >
        </v-card>
      </div>
    </router-link>
  </div>
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

/* .animate_border {
  overflow: hidden;
}

.animate_border::before {
  position: absolute;
  content: '';
  height: 180%;
  width: 10%;
  height: 200px;
  width: 200px;
  background: white;
  transform: rotate(45deg);
  z-index: -1;
}

.animate_border:hover::before {
  animation: animate2 2s linear infinite;
  height: 202px;
  width: 203px;
}

.animate_border::after {
  position: absolute;
  content: '';
  inset: 5px;
  background: black;
  border-radius: 8px;
  z-index: -1;
}

@keyframes animate2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
} */
</style>
