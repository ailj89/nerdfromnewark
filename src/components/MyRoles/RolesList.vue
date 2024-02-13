<template>
  <div class="careers">
    <div class="career">
      <v-card
        v-for="role in roles"
        :key="role.company"
        class="ma-4 pa-6"
        flat
        outlined
        color="transparent"
      >
        <div class="custom-list pt-5">
          <v-list-item :title="role.company" :subtitle="role.title" class="d-block text-h4">
            <template v-slot:title="{ title }">
              <v-tooltip :text="role.company">
                <template v-slot:activator="{ props }">
                  <a :href="role.url" target="_blank" class="navLink">
                    <v-img
                      :width="100"
                      aspect-ratio="16/9"
                      cover
                      :src="`../../../images/${role.logo}`"
                      :alt="role.company"
                      class="d-inline-block"
                      v-bind="props"
                    ></v-img>
                  </a>
                </template>
              </v-tooltip>

              <h4 class="text-h6">
                <a :href="role.url" target="_blank" class="navLink">
                  {{ role.company }}
                </a>
              </h4>
            </template>

            <template v-slot:subtitle="{ subtitle }">
              <p class="text-subtitle-1">{{ role.title }}</p>
              <p class="text-subtitle-1">{{ role.date }}</p>
            </template>

            <h5 class="text-h5 my-3">Responsibilites:</h5>

            <v-list-item v-for="(duty, index) in role.duties" :key="index" class="mb-1">
              <p class="text-body-1">
                {{ duty }}
              </p>
            </v-list-item>

            <h5 v-if="role?.projects" class="text-h5 my-3">Projects:</h5>

            <v-list-item v-for="(project, index) in role?.projects" :key="index" class="mb-2">
              <div v-if="project.url != ''">
                <a :href="project.url" target="_blank" class="text-h6 navLink mb-1">
                  {{ project.name }}
                </a>
                <p class="text-body-1">{{ project.details }}</p>
              </div>
              <div v-if="project.url == ''">
                <h6 class="text-h6 mb-1">{{ project.name }}</h6>

                <p class="text-body-1">{{ project.details }}</p>
              </div>
            </v-list-item>
          </v-list-item>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { onMounted, computed } from 'vue'
// import { useRolesStore } from '@/stores/roles'

// const rolesStore = useRolesStore()
// const roles = computed(() => rolesStore.roles)

// // const UNIQUE_ROLES = computed(() => rolesStore.UNIQUE_ROLES)

// onMounted(rolesStore.FETCH_ROLES)

const roles = [
  {
    title: 'Senior Front-End Developer',
    company: 'gen.video',
    location: 'Remote',
    logo: 'genvideo.png',
    date: 'Oct 2018 - Oct 2023',
    url: 'https://www.gen.video',
    duties: [
      'Develop Influencer Marketing and Retail Analytic tools used by F500 companies.',
      'Work with Back-End Developers to plan/suggest API changes and debug.',
      'Assist in migrating the application from AngularJS to Vue.',
      'Participate in daily stand-up to discuss tasks and goals for the day.'
    ],
    projects: [
      {
        name: 'Campaign Wizard',
        details:
          'Backstage tool which allows users to create campaigns, track products, add/interact with influencers, and view/provide feedback for content, an all-in-one process.',
        url: ''
      },
      {
        name: 'Reporting Platform',
        details:
          'Backstage platform to view statistics, such as sales, top performers, day-to-day views for content on a per product/per influencer/ or per platform basis.',
        url: ''
      },
      {
        name: 'Influencer Portal',
        details:
          'Allows influencers to upload concepts, content, and reports for social media posts.',
        url: ''
      },
      {
        name: 'Custom Landing Pages',
        details:
          'Tool to allow followers/viewers of social media posts to select the retailer where the product is available to purchase the product.',
        url: ''
      },
      {
        name: 'Retail Syndication',
        details:
          'Content syndication for products allowing users of Backstage to track every step of syndication from content creation to placement of the content on the product page of retailers.',
        url: ''
      }
    ],
    type: 'Contract to Hire'
  },
  {
    title: 'Front-End Developer',
    company: 'Robert Half International, Professional Services – Technology',
    logo: 'roberthalf.png',
    location: 'Hybrid',
    date: 'May 2018 - July 2018',
    company_logo: 'roberthalf.png',
    url: 'https://www.roberthalf.com/work-with-us/our-services/long-term-project-consultants',
    duties: [
      'Senior Consultant within the Salaried Professional Services division for Web Development.',
      'Leveraged Pluralsight React training to redevelop portfolio.'
    ]
  },
  {
    title: 'Front-End Developer',
    company: 'Inc Design',
    logo: 'incdesign.webp',
    location: 'Hybrid',
    date: 'Mar 2018 - Apr 2018',
    url: 'https://www.incdesign.com/',
    duties: [
      'Updated W.R. Berkley Annual Report site, highlighting yearly revenue for 2017.',
      'Enhance user experience by incorporating animations, carousel, and charts utilizing HTML, CSS, JS, and jQuery.',
      'Worked directly with the designer to ensure pixel perfect representation and responsive design.'
    ],
    projects: [
      {
        name: 'W. R. Berkley 2017 Annual Report',
        details:
          "Redesign of W. R. Berkley's Annual Report site, including animations, updated with 2017 stats.",
        url: 'https://products.wrberkley.com/AR/index.html',
        url2: 'https://www.incdesign.com/berkley-case-study'
      }
    ]
  },
  {
    title: 'Front-End Developer',
    company: 'AllianceBernstein',
    date: 'Sept 2016 - Jan 2018',
    logo: 'alliancebernstein.png',
    url: 'https://www.alliancebernstein.com/',
    duties: [
      'Developed and maintained various AB portal sites via Methode.',
      'Worked with QA team to debug and test prior to publishing to production.',
      'Support existing sites via requests from internal clients.',
      "Collaborated on the creation of the company's pattern library."
    ],
    projects: [
      {
        name: 'Corporate Responsibility',
        details:
          'Highlights AllianceBernstein"s efforts in Global Sustainability, giving back to communities, and active participation in equality and representation.',
        url: 'https://www.alliancebernstein.com/corporate/our-firm/corporate-responsibility.htm'
      },
      {
        name: 'Inside the Mind of Plan Sponsors',
        details:
          'In 2016, AllianceBernstein defined contribution team conducted a web-based survey of over 1,000 plan sponsors. This site focuses on the trends and problem areas as reported by the sponsors.',
        url: 'https://www.alliancebernstein.com/investments/us/retirement/inside-the-minds-of-plan-sponsors.htm'
      },
      {
        name: 'Institutions pages for The Americas, EMEA, and Asia-Pacific',
        details:
          'Overview of investment solutions offered by AllianceBernstein for Alternatives, Equities, Fixed-Income, Multi-Asset and Defined Contribution.',
        url: 'https://www.alliancebernstein.com/institutions/americas/home.htm'
      }
    ]
  },
  {
    title: 'Front-End Developer',
    company: 'Alchemy50',
    date: 'Mar 2016 - May 2016',
    logo: 'alchemy50.png',
    url: 'http://www.alchemy50.com/',
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
    logo: 'mammoth.png',
    url: 'https://www.mammothnyc.com/',
    duties: [
      'Developed sites for motion pictures My Big Fat Greek Wedding 2 and Miracles from Heaven.',
      'Built an e-card generator for Miracles from Heaven.',
      'Utilized Tumblr as a CMS'
    ],
    projects: [
      {
        name: 'My Big Fat Greek Wedding 2',
        details:
          'Developed the site to the motion picture which displayed the trailer and gifs of scenes from the film.',
        url: 'https://web.archive.org/web/20160331120526/http://mybigfatgreekweddingmovie.com/'
      },
      {
        name: 'Share A Praryer: Miracles From Heaven',
        details:
          'An e-card generator, via Canvas, where users selected a message, a background, and entered a recipient. The generated e-card may be downloaded by users or shared via social media.',
        url: ''
      }
    ]
  },
  {
    title: 'Front-End Developer',
    company: 'Pink Stone Capital Incubator',
    date: 'July 2014 - Dec 2015',
    logo: 'psci.png',
    url: 'https://www.pinkstoneincubator.com/',
    duties: [
      'Utilize AngularJS, Canvas, and Node to create various web applications such as social network, avatar creator, ride-sharing, and a bike delivery service.',
      'Worked closely with the designer to insure pixel perfect design and optimal user interaction.'
    ],
    projects: [
      {
        name: 'CureHero',
        details: 'A social eduction platform for children and teens.',
        url: ''
      },
      {
        name: 'Avatar Creator',
        details:
          'An avatar creator for children and teens to be used for CureHero and Token, a money management app.',
        url: ''
      },
      {
        name: 'Gypsy',
        details:
          'A ride sharing Uber-like service, converted to a webapp via Phonegap, and connected to a custom API, RAPID.',
        url: ''
      },
      {
        name: 'JetPack',
        details: 'A same-day delivery service via bike messengers.',
        url: ''
      }
    ]
  },
  {
    title: 'Mentor',
    company: 'Thinkful',
    date: 'Jan 2014 - July 2014',
    logo: 'thinkful.png',
    url: 'https://www.thinkful.com/',
    duties: [
      'Held weekly one-on-one sessions with students learning HTML, CSS, JS, and jQuery.',
      'Provided feedback for assignments, alternative solutions, and introduced current development trends.'
    ]
  },
  {
    title: 'Front-End Web Developement Instructor',
    company: '3rd Ward',
    date: 'August 2013 - Oct 2013',
    logo: '3rdward.png',
    url: 'https://www.3rdward.com',
    duties: [
      'Instructed a Front-End Development course with a focus on HTML5, CSS3, JS, and jQuery.',
      'Created a curriculum and exercises to highlight semantic HTML, CSS Animations, implementing jQuery plugins, and creating a slideshow.'
    ]
  },
  {
    title: 'Expert-in-Residence',
    company: 'General Assembly',
    date: 'August 2013 - Oct 2013',
    logo: 'generalassembly.png',
    url: 'https://generalassemb.ly/',
    duties: [
      'Assisted instructors in full-time and part-time Front-End courses.',
      'Worked one-on-one with students, graded assignments, provided feedback to help improve skills as developers.'
    ],
    projects: [
      {
        name: 'Front-End Web Developement (FEWD)',
        url: 'https://generalassemb.ly/education/front-end-web-development'
      },
      {
        name: 'Web Development Immersive (WDI)',
        url: ''
      }
    ]
  },
  {
    title: 'Front-End Developer',
    company: 'Nextdrift Technologies',
    date: 'Jan 2012 - May 2012',
    logo: 'nextdrift.png',
    url: 'http://nextdrift.com/',
    duties: [
      'Developed projects to Tech-Strap companies, helping them get off the ground with websites/web applications'
    ],
    projects: [
      {
        name: 'Become A Leader (BALO)',
        details:
          'Developed a virtual library for those who would like to improve their leadership skills.',
        url: ''
      },
      {
        name: 'Topcast',
        details:
          'Created a customizable ticker feed for restaurants via jQuery which displayed news for sports (Sportcast) and local weather (Weathercast).',
        url: 'http://topcast.tv/ndr/'
      }
    ]
  },
  {
    title: 'Assistant Front-End Developer',
    company: 'Bentley University, Center of Alumni, Parents, and Friends',
    date: 'Oct 2009 - Dec 2011',
    logo: 'bentley.png',
    url: 'https://www.bentley.edu/alumni',
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
    logo: 'bentley.png',
    url: 'https://www.bentley.edu/',
    date: 'Dec 2008 - May 2009',
    duties: [
      'Managed, maintained, and updated HTML and CSS, QA and bug fixes for bentley.edu sites.'
    ]
  }
]
</script>

<style scoped>
a {
  color: var(--color-text);
}
</style>
