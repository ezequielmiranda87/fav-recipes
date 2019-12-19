<template>
    <v-app>
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant="miniVariant"
            :clipped="clipped"
            fixed
            app
        >
            <v-list>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                    router
                    exact
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" />
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar :clipped-left="clipped" fixed app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

            <v-toolbar-title
                style="width: 300px"
                class="ml-0 pl-4"
                v-text="title"
            />
            <v-spacer />
        </v-app-bar>

        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>

        <v-footer :fixed="fixed" app>
            <span>&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    methods: {
        getRecipes() {
            this.$store.dispatch('getRecipes', {}).then(data => {})
        }
    },

    mounted() {
        this.getRecipes()
    },
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: 'mdi-food',
                    title: 'Home',
                    to: '/recipes'
                },
                {
                    icon: 'mdi-book',
                    title: 'My Recipes',
                    to: '/'
                },
                {
                    icon: 'mdi-lock-open',
                    title: 'Sign in',
                    to: '/signin'
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Fav Recipes App'
        }
    }
}
</script>
