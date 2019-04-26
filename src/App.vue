<template>
  <v-app>
    <v-toolbar
        color="blue darken-3"
        dark
        app
        :clipped-left="$vuetify.breakpoint.mdAndUp"
        fixed
    >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3" to="/">
        <v-btn class="hidden-sm-and-down " flat to="/nfe">NF-E Visual</v-btn>
    </v-toolbar-title>
    <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down"
        @keyup.enter="search()"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-menu
        :close-on-content-click="false"
        offset-y
    >
        <v-avatar 
            color="indigo"
            slot="activator"
        >
            <v-icon dark>account_circle</v-icon>
        </v-avatar>
        <v-card style="width: 440px;">
            <v-list>
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <v-avatar
                            color="teal"
                            size="35px"
                            class="mr-1 left"
                        >
                            <span class="white--text headline">U</span>
                        </v-avatar>
                    </v-list-tile-avatar>
                    <v-list-tile-content v-if="(typeof this.usuarioGetter !== 'undefined' && Object.keys(this.usuarioGetter).length > 0)">
                        <v-list-tile-title >{{this.usuarioGetter.data.auth.usu_identificacao}}</v-list-tile-title>
                        <v-list-tile-sub-title>{{this.usuarioGetter.data.auth.usu_nome}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-divider/>
        </v-card>
    </v-menu>
    </v-toolbar>

    <v-content>
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'App',
    data () {
        return {
            //
        }
    },
    created(){
        this.syncUsuarioAction(this.$route.params.token)
    },
    computed:{
        ...mapGetters({
            usuarioGetter: 'usuario/usuarioGetter'
        }),
        usuario() {
            console.log(Object.keys(this.usuarioGetter).length)
            return (typeof this.usuarioGetter !== 'undefined' && Object.keys(this.usuarioGetter).length > 0) ? this.usuarioGetter : {}
        }
    },
    methods:{
        ...mapActions({
            syncUsuarioAction: 'usuario/syncUsuarioAction'
        }),
        search() {
            this.$router.push('/nfe/nota');
        }
    }
}
</script>
