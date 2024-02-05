<template>
  <div>
    <div class="d-flex align-center flex-column">
      <h1>Andre Jordan</h1>

      <v-container>
        <v-row>
          <v-col cols="2"> </v-col>

          <v-col cols="10">
            <v-tabs v-model="tab" color="deep-purple-accent-4">
              <v-tab :value="1">Skills</v-tab>
              <v-tab :value="2">Hobbies</v-tab>
            </v-tabs>

            <v-window v-model="tab">
              <v-window-item v-for="n in 2" :key="n" :value="n">
                <v-container fluid>
                  <v-row>
                    <v-card width="1000" class="bg-grey-lighten-2">
                      <my-skills v-if="n == 1" />
                      <my-hobbies v-if="n == 2" />
                    </v-card>
                  </v-row>
                </v-container>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import FilterSidebar from '@/components/SideBars/FilterSidebar.vue'
import MySkills from '@/components/Shared/MySkills.vue'
import MyHobbies from '@/components/Shared/MyHobbies.vue'

const tab = ref(null)
</script>

<style scoped>
a {
  color: var(--color-text);
}
</style>
