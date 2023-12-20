<template>
    <div>

        <filter-sidebar />
        
        <div class="d-flex align-center flex-column">
            <h1>Andre Jordan</h1>
    
            <div class="">
                    <v-tabs
                        v-model="tab"
                        color="deep-purple-accent-4"
                        align-tabs="center"
                    >
                        <v-tab :value="1">Skills</v-tab>
                        <v-tab :value="2">Hobbies</v-tab>
                    </v-tabs>
    
                    <v-window v-model="tab">
                        <v-window-item
                            v-for="n in 2"
                            :key="n"
                            :value="n"
                        >
                            <v-container fluid>
                                <v-row>
                                    <my-skills v-if="n == 1" />
                                    <my-hobbies v-if="n == 2"/>
                                </v-row>
                            </v-container>
                        </v-window-item>
                    </v-window>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import FilterSidebar from '@/components/SideBars/FilterSidebar.vue';
    import MySkills from '@/components/Shared/MySkills.vue';
    import MyHobbies from '@/components/Shared/MyHobbies.vue';

    const tab = ref(null);
</script>