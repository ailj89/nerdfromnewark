<template>
  <div>
    <h3 class="text-h3 text-center pa-4">
      Interested in my career? Here are the details you seek!
    </h3>

    <v-container class="roles-container">
      <v-row>
        <v-col cols="2">
          <p>
            <a href="https://www.linkedin.com/in/andre-l-jordan" target="_blank">LinkedIn</a> |
            <a href="../assets/Andre_Jordan_Resume.pdf" target="_blank" download>Resume</a>
          </p>
          <!-- <roles-filter /> -->
        </v-col>

        <v-col cols="10">
          <roles-list />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
// import RolesFilter from '@/components/SideBars/RolesFilter.vue'
import RolesList from '@/components/MyRoles/RolesList.vue'
</script>

<style></style>
