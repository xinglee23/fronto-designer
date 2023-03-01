import {createStore} from 'vuex';
import {v4 as uuidv4} from 'uuid';

export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

export interface TemplateProps {
  id: number;
  coverImg: string;
  author: string;
  copiedCount: number;
}

export interface GlobalDataProps {
  user: UserProps;
  template: TemplateProps[];
}

export const testData: TemplateProps[] = [
  {
    id: 1,
    coverImg:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e3a17c305b1070f455202.jpg',
    author: 'jack',
    copiedCount: 1,
  },
  {
    id: 2,
    coverImg:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e3a17c305b1070f455202.jpg',
    author: 'jack',
    copiedCount: 1,
  },
  {
    id: 3,
    coverImg:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e3a17c305b1070f455202.jpg',
    author: 'jack',
    copiedCount: 1,
  },
  {
    id: 4,
    coverImg:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e3a17c305b1070f455202.jpg',
    author: 'jack',
    copiedCount: 1,
  },
];

const store = createStore<GlobalDataProps>({
  state: {
    template: testData,
    user: {
      isLogin: false,
    },
  },
  mutations: {
    login(state) {
      return {...state.user, isLogin: true};
    },
    logout(state) {
      return {isLogin: false};
    },
  },
  getters: {
    getTemplateById: (state) => (id: number) => {
      return state.template.find((t) => t.id === id);
    },
  },
});

export default store;
