import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import UpdateDialog from '../components/UpdateDialog.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()

describe('Update Dialog Component', () => {
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    it('should mount properly', () => {
        const wrapper = mount(UpdateDialog, {
            localVue,
            vuetify,
            propsData: {
                recipe: {
                    name: ''
                },
                show: true,
                dataApp: true
            }
        })

        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
