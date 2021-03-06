import Vue from 'vue'
import Vuex from 'vuex'
import { SkillType, ProjectType } from '@/types'


Vue.use(Vuex)

class State {
    scrollDirection: 'top' | 'bottom' | 'none' | null = null;
    skills: SkillType[] = [
        {
            name: 'Python',
            logo: require('@/assets/python_logo.png'),
            experience: 3
        },
        {
            name: 'Django',
            logo: require('@/assets/django_logo.png'),
            experience: 2,
        },
        {
            name: 'Celery',
            logo: require('@/assets/celery_logo.png'),
            experience: 0.5
        },
        {
            name: 'HTML',
            logo: require('@/assets/html_logo.png'),
            experience: 4
        },
        {
            name: 'CSS',
            logo: require('@/assets/css_logo.png'),
            experience: 4
        },
        {
            name: 'JavaScript',
            logo: require('@/assets/javascript_logo.png'),
            experience: 1.5
        },
        {
            name: 'Vue',
            logo: require('@/assets/vue_logo.png'),
            experience: 1
        },
        {
            name: 'TypeScript',
            logo: require('@/assets/typescript_logo.png'),
            experience: 0.5
        },
        {
            name: 'Linux',
            logo: require('@/assets/linux_logo.png'),
            experience: 2
        },
        {
            name: 'Git',
            logo: require('@/assets/git_logo.png'),
            experience: 1.5
        }
    ];
    projects: ProjectType[] = [
        {
            id: 'glaze',
            logo: require('@/assets/glaze_logo.png'),
            text: 'Glaze is an image processing service providing a simple API for easy programmatic usage.',
            screenshot: require('@/assets/glaze_screenshot.png'),
            url: 'glaze.ndawn.ru',
            tech: ['Python', 'Django', 'Pillow', 'Django Rest Framework', 'Linux', 'JavaScript', 'Vue', 'TypeScript']
        },
        {
            id: 'selfiecopter',
            logo: require('@/assets/selfiecopter_logo.png'),
            text: '«We bet that we will help you do more than just taking selfie with your phone\'s camera? ' +
                'You stroll, travel and share things on social networks every day. And what if you add a little ' +
                'innovation, courage and awesome friends to this? We really want to be those friends who will ' +
                'teach you to make cool and unique memories. We will make for you an unforgettable video from ' +
                'your favourite city, one which you won\'t be ashamed or bragging about to your family and ' +
                'friends on social media.»',
            screenshot: require('@/assets/selfiecopter_screenshot.png'),
            url: 'selfiecopter.ru',
            tech: ['JavaScript', 'React']
        }
    ];
}

export default new Vuex.Store({
  state: new State(),
  mutations: {},
  actions: {},
  getters: {
      skills (state: State): SkillType[] {
          return state.skills;
      },
      projects (state: State): ProjectType[] {
          return state.projects;
      }
  }
})
