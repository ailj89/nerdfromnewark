<template>
    <div class="d-flex align-center flex-column">
        <h1>Andre Jordan</h1>
        <div class="mt-4">
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

            <v-card width="800" class="mt-4">
                <v-card-item>
                    <v-card-title>Nerd Extraordinaire</v-card-title>

                    <v-card-subtitle>This is a subtitle</v-card-subtitle>
                </v-card-item>

                <v-card-text>
                    When I'm not developing or keeping up with the lastest dev trends, I enjoy spending my time:

                    <v-list-item
                        v-for="hobby in hobbies"
                        :key="hobby.name"
                        :title="hobby.activity + ' ' + hobby.name"
                        :subtitle="'Favorites include ' + hobby.favorites"
                    ></v-list-item>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
    interface Hobby {
        activity: string;
        name: string;
        favorites?: string
    }

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

    const hobbies: Hobby[] = [
        {   
            activity: "Playing",
            name: 'Board Games',
            favorites: 'Codenames, Ex Libris, Nemesis, Street Fighter'
        },
        {
            activity: "Playing",
            name: 'Video Games',
            favorites: 'Diablo, Final Fantasy, Mortal Kombat, Street Fighter'
        },
        {
            activity: "Watching",
            name: 'Anime',
            favorites: 'Cowboy Bebop, Dragon Ball Z, Gundam, Outlaw Star, Trigun'
        },
        {
            activity: "Watching",
            name: 'Comedy Movies',
            favorites: 'Codenames, Ex Libris, Nemesis, Street Fighter'
        },
        {
            activity: "Watching",
            name: 'Horror Movies',
            favorites: 'Child\'s Play, Friday the 13th, Halloween, Night of the Living Dead, Nightmare on Elm Street, Return of the Living Dead'
        },
        {
            activity: "Watching",
            name: 'Sports',
            favorites: 'Baseball, Basketball, Football, Wrestling'
        },
    ]
</script>