import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import RecipesList from '../components/RecipesList.vue'

Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('Recipe List', () => {
    let vuetify
    let store

    beforeEach(() => {
        vuetify = new Vuetify()
        const actions = {
            getRecipes: jest.fn(() => true)
        }

        const mutations = {
            someMutation: jest.fn(() => false)
        }

        const state = {
            recipes: []
        }

        store = new Vuex.Store({
            actions,
            mutations,
            state
        })
        localVue.use(Vuex)
    })

    it('should mount properly', () => {
        const wrapper = mount(RecipesList, {
            localVue,
            vuetify,
            store,
            propsData: {
                recipes: [],
                search: '',
                show: true
            }
        })

        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
