<template>
    <div class="careers">
        <div class="career">
            <v-card v-for="role in roles" :key="role.company">
                <v-list lines="one">
                    <v-list-item
                        :title="role.title"
                        :subtitle="role.company"
                    >
                        <v-list-item v-for="duty in role.duties" 
                            :key="duty"
                            :title="duty"
                        >
                        </v-list-item>
                    </v-list-item>
                </v-list>
            </v-card>
        </div>
    </div>
</template>

<script lang="ts" setup>

    interface Role {
        company: string,
        duties: string[],
        date: string,
        title: string,
    }

    const roles: Role[] = [
        {
            title: 'Senior Front-End Developer',
            company: 'gen.video',
            date: 'Oct 2018 - Oct 2023',
            duties: [
                'Develop Influencer Marketing and Retail Analytic tools used by F500 companies.', 
                'Work with Back-End Developers to plan/suggest API changes and debug.',
                'Assist in migrating the application from AngularJS to Vue.',
                'Participate in daily stand-up to discuss tasks and goals for the day.'
            ]
        },
    ]

        // {
        // title: 'Front-End Developer'
        // company: 'Robert Half International'
        // date: May 2018 - July 2018
        // Senior Consultant within the Salaried Professional Services
        // division for Web Development
        // Leveraged Pluralsight React training to redevelop
        // portfolio.

        // },
        // {
        // title: 'Front-End Developer'
        // company: 'Inc Design'
        // date: Mar 2018 - Apr 2018
        // Updated W.R. Berkley Annual Report site, highlighting yearly
        // revenue via jQuery.
        // Enhance user experience by incorporating animations,
        // carousel, and charts.
        // Worked directly with the designer to ensure pixel perfect
        // representation and responsive design.

        // },
        // {
        // title: 'Front-End Developer'
        // company: 'AllianceBernstein'
        // date: Sept 2016 - Jan 2018
        // Developed and maintained various AB portal sites via Methode.
        // Worked with QA team to debug and test prior to publishing to
        // production.
        // Support existing sites via requests from internal clients.
        // Collaborated on the creation of the company’s pattern
        // library.

        // },
        // {
        // title: 'Front-End Developer'
        // company: 'Alchemy50'
        // date: Sept 2016 - Jan 2018
        // Developed and maintained various AB portal sites via
        // Methode.
        // Worked with QA team to debug and test prior to publishing
        // to production.
        // Support existing sites via requests from internal clients.
        // Collaborated on the creation of the company’s pattern
        // library.

        // },
        // {
        //     title: 'Front-End Developer'
        //     company: 'Mammoth Advertising'
        //     date: Jan 2016 - Mar 2016
        //     Developed sites for motion pictures My Big Fat Greek
        //     Wedding 2 and Miracles from Heaven.
        //     Built an e-card generator for Miracles from Heaven.
        // },
        // {
        // title: 'Front-End Developer'
        // company: 'Pink Stone Capital Incubator'
        // date: July 2014 - Dec 2015
        // Utilize AngularJS, Canvas, and Node to create various web
        // applications such as social network, avatar creator,
        // ride-sharing, and a bike delivery service.
        // Worked closely with the designer to insure pixel perfect
        // design and optimal user interaction.

        // },
        // {
        // title: 'Mentor'
        // company: 'Thinkful'
        // date: Jan 2014 - July 2014
        // Held weekly one-on-one sessions with students learning
        // HTML, CSS, JS, and jQuery.
        // Provided feedback for assignments, alternative solutions,
        // and introduced current development trends.

        // },
        // {
        // title: 'Teacher'
        // company: '3rd Ward'
        // date: August 2013 - Oct 2013
        // Instructed a Front-End Development course with a focus on
        // HTML5, CSS3, JS, and jQuery.
        // Created a curriculum and exercises to highlight semantic
        // HTML, CSS Animations, how to use jQuery plugins, and
        // creating a slideshow.

        // },
        // {
        // title: 'Expert-in-Residence'
        // company: 'General Assembly'
        // date: August 2013 - Oct 2013
        // Assisted instructors in full-time and part-time Front-End
        // courses.
        // Worked one-on-one with students, graded assignments,
        // provided feedback to help improve skills as developers.

        // },

        // {
        // title: 'Front-End Developer'
        // company: 'Nextdrift Technologies'
        // date: Jan 2012 - May 2012
        // Built a virtual library for books focusing on developing
        // leadership skills.
        // Developed a ticker which displayed local sports and weather
        // news on televisions in bars and restaurants.

        // },
        // {
        // title: 'Assistant Front-End Developer'
        // company: 'Bentley University, Center of Alumni'
        // date: Oct 2009 - Dec 2011
        // Implemented a flip-book plugin for the monthly newsletter,
        // The Bentley Brief.
        // Created custom macros in Excel for monthly reports based on
        // Bentley Brief user interactions.
        // QA and bug fixes for alumni related sites.
        // Managed social media posts for Facebook, Twitter, and
        // LinkedIn.

        // },
        // {
        // title: 'Assistant Front-End Developer'
        // company: 'Bentley University, Web Services'
        // date: Dec 2008 - May 2009
        // QA and bug fixes for bentley.edu sites.
        // }
    
</script>