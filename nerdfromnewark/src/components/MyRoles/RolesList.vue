<template>
  <div class="careers">
    <div class="career">
      <v-card v-for="role in roles" :key="role.company">
        <v-list lines="one">
          <v-list-item :title="role.title" :subtitle="role.company">
            <v-list-item v-for="duty in role.duties" :key="duty" :title="duty"> </v-list-item>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Role {
  company: string
  img?: string
  location?: string
  duties: string[]
  date: string
  title: string
  type?: string
}

const roles: Role[] = [
  {
    title: 'Senior Front-End Developer',
    company: 'gen.video',
    location: 'Remote',
    date: 'Oct 2018 - Oct 2023',
    duties: [
      'Develop Influencer Marketing and Retail Analytic tools used by F500 companies.',
      'Work with Back-End Developers to plan/suggest API changes and debug.',
      'Assist in migrating the application from AngularJS to Vue.',
      'Participate in daily stand-up to discuss tasks and goals for the day.'
    ],
    type: 'Contract to Hire'
  },
  {
    title: 'Front-End Developer',
    company: 'Robert Half International',
    location: 'Hybrid',
    date: 'May 2018 - July 2018',
    duties: [
      'Senior Consultant within the Salaried Professional Services division for Web Development.',
      'Leveraged Pluralsight React training to redevelop portfolio.'
    ]
  },
  {
    title: 'Front-End Developer',
    company: 'Inc Design',
    location: 'Hybrid',
    date: 'Mar 2018 - Apr 2018',
    duties: [
      'Updated W.R. Berkley Annual Report site, highlighting yearly revenue via jQuery.',
      'Enhance user experience by incorporating animations, carousel, and charts.',
      'Worked directly with the designer to ensure pixel perfect representation and responsive design.'
    ]
  },
  {
    title: 'Front-End Developer',
    company: 'AllianceBernstein',
    date: 'Sept 2016 - Jan 2018',
    duties: [
      'Developed and maintained various AB portal sites via Methode.',
      'Worked with QA team to debug and test prior to publishing to production.',
      'Support existing sites via requests from internal clients.',
      "Collaborated on the creation of the company's pattern library."
    ]
  },
  {
    title: 'Front-End Developer',
    company: 'Alchemy50',
    date: 'Mar 2016 - May 2016',
    duties: [
      'Developed a Financial Portfolio dashboard to help users manage stocks, get up-to-date ticker information.',
      'Created protyotype in jQuery which was migrated to AngularJS',
      'Used jQuery UI to include features such as arranging panels. highlight articles, note taking, and send e-mails.'
    ]
  },
  {
    title: 'Front-End Developer',
    company: 'Mammoth Advertising',
    location: 'On Site',
    date: 'Jan 2016 - Mar 2016',
    duties: [
      'Developed sites for motion pictures My Big Fat Greek Wedding 2 and Miracles from Heaven.',
      'Built an e-card generator for Miracles from Heaven.',
      'Utilized Tumblr as a CMS'
    ]
  },
  {
    title: 'Front-End Developer',
    company: 'Pink Stone Capital Incubator',
    date: 'July 2014 - Dec 2015',
    duties: [
      'Utilize AngularJS, Canvas, and Node to create various web applications such as social network, avatar creator, ride-sharing, and a bike delivery service.',
      'Worked closely with the designer to insure pixel perfect design and optimal user interaction.'
    ]
  },
  {
    title: 'Mentor',
    company: 'Thinkful',
    date: 'Jan 2014 - July 2014',
    duties: [
      'Held weekly one-on-one sessions with students learning HTML, CSS, JS, and jQuery.',
      'Provided feedback for assignments, alternative solutions, and introduced current development trends.'
    ]
  },
  {
    title: 'Teacher',
    company: '3rd Ward',
    date: 'August 2013 - Oct 2013',
    duties: [
      'Instructed a Front-End Development course with a focus on HTML5, CSS3, JS, and jQuery.',
      'Created a curriculum and exercises to highlight semantic HTML, CSS Animations, implementing jQuery plugins, and creating a slideshow.'
    ]
  },
  {
    title: 'Expert-in-Residence',
    company: 'General Assembly',
    date: 'August 2013 - Oct 2013',
    duties: [
      'Assisted instructors in full-time and part-time Front-End courses.',
      'Worked one-on-one with students, graded assignments, provided feedback to help improve skills as developers.'
    ]
  },
  {
    title: 'Front-End Developer',
    company: 'Nextdrift Technologies',
    date: 'Jan 2012 - May 2012',
    duties: [
      'Built a virtual library for books focusing on developing leadership skills.',
      'Developed a ticker which displayed local sports and weather news on televisions in bars and restaurants.'
    ]
  },
  {
    title: 'Assistant Front-End Developer',
    company: 'Bentley University, Center of Alumni',
    date: 'Oct 2009 - Dec 2011',
    duties: [
      'Implemented a flip-book plugin for the monthly newsletter, The Bentley Brief.',
      'Created custom macros in Excel for monthly reports based on Bentley Brief user interactions.',
      'QA and bug fixes for alumni related sites.',
      'Managed social media posts for Facebook, Twitter, and LinkedIn.'
    ]
  },
  {
    title: 'Assistant Front-End Developer',
    company: 'Bentley University, Web Services',
    date: 'Dec 2008 - May 2009',
    duties: ['QA and bug fixes for bentley.edu sites.']
  }
]
</script>
