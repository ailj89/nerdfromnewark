<template>
    <div class="about">
        <h1>This is my career page</h1>

      <div class="careers">
        <div class="career">
            <v-card text="..."></v-card>

            <v-list lines="one">
                <v-list-item
                    v-for="n in 3"
                    :key="n"
                    :title="'Item ' + n"
                    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                ></v-list-item>
            </v-list>
        </div>
      </div>
    </div>
</template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  