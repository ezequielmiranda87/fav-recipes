import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import DeleteDialog from '../components/DeleteDialog.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()

describe('Delete Dialog Component', () => {
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    it('should mount properly', () => {
        const wrapper = shallowMount(DeleteDialog, {
            localVue,
            vuetify,
            propsData: {
                show: true,
                recipeId: 1
            }
        })

        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    // it('should renders properly', () => {
    //     const wrapper = shallowMount(DeleteDialog, {
    //         localVue,
    //         vuetify,
    //         propsData: {
    //             show: true,
    //             recipeId: 1
    //         }
    //     })
    //     expect(wrapper.html()).toMatchSnapshot()
    // })
})
