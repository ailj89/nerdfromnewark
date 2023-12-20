<template>
    <v-card width="800">
        <v-card-item>
            <v-card-title>Front-End Developer</v-card-title>

            <v-card-subtitle>View <a href="https://www.linkedin.com/in/andre-l-jordan" target="_blank">LinkedIn</a> | Download  <a href="../assets/Andre_Jordan_Resume.pdf" target="_blank" download>Resume</a></v-card-subtitle>
        </v-card-item>

        <v-card-text>
            I've began developing in 2006 at the age of 16 and my career as a developer began in 2008. In the 15 years since, I have developed sites and web apps for F500 companies, investment firms, finiancial institutions, motion pictures, marketing, influencer marketing, analytics and startups. 
            During that time, I also have 2 years experience of teaching and assisting in Front-End Development courses.

            <v-list-item
                v-for="skill in skills"
                :key="skill.skill"
                :title="skill.skill"
                :subtitle="skill.years + ' years'"
            ></v-list-item>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
    interface Skill{
        skill: string;
        years: number;
    }

    const skills: Skill[] = [
        {
            skill: 'HTML',
            years: 15,
        },
        {
            skill: 'CSS',
            years: 15,
        },
        {
            skill: 'JavaScript',
            years: 15,
        },
        {
            skill: 'jQuery',
            years: 11,
        },
        {
            skill: 'Node.js',
            years: 9,
        },
        {
            skill: 'Restful APIs',
            years: 11,
        },
        {
            skill: 'AngularJS',
            years: 9,
        },
        {
            skill: 'Bootstrap',
            years: 9,
        },
        {
            skill: 'Vue',
            years: 2,
        },
        {
            skill: 'Vuetify',
            years: 2,
        },
        {
            skill: 'Responsive Web Design',
            years: 11,
        },
    ]
</script>