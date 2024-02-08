<template>
  <div>
    <h3 class="text-h3 text-center pa-4">
      Interested in my career? Here are the details you seek!
    </h3>

    <p class="text-center">
      <a href="https://www.linkedin.com/in/andre-l-jordan" target="_blank" class="navLink"
        >LinkedIn</a
      >
      |
      <a href="../assets/Andre_Jordan_Resume.pdf" target="_blank" class="navLink" download
        >Resume</a
      >
    </p>

    <v-container class="roles-container">
      <v-row>
        <v-col cols="1"></v-col>

        <v-col cols="10">
          <roles-list />
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
// import RolesFilter from '@/components/SideBars/RolesFilter.vue'
import RolesList from '@/components/MyRoles/RolesList.vue'
</script>

<style></style>
