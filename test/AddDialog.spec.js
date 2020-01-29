import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import AddDialog from '../components/AddDialog.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()

describe('Add Dialog Component', () => {
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    it('Should mount properly', () => {
        const wrapper = mount(AddDialog, {
            localVue,
            vuetify,
            propsData: {
                show: true
            }
        })

        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
