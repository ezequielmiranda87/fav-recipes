import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import Recipe from '../components/Recipe.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()

describe('Recipe Component', () => {
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    it('should mount properly', () => {
        const wrapper = mount(Recipe, {
            localVue,
            vuetify,
            propsData: {
                recipe: {
                    name: ''
                }
            }
        })

        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
