<template>
    <v-container>
        <v-btn to="/nfe/cadastrar">Cadastrar Nota</v-btn>
        <v-data-table
                :headers="headers"
                :items="notasGetter"
                class="elevation-1"
        >
            <template v-slot:items="props">
                <td class="">{{ props.item._id }}</td>
                <td class="">{{ props.item.infNFe.dest.CNPJ }}</td>
                <td class="">{{ props.item.infNFe.dest.xNome }}</td>
                <td class=""><v-btn to="/nfe/nota">Visualizar</v-btn></td>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        data(){
            return {
                headers: [
                    {
                        text: 'ID',
                        value: 'id',
                    },
                    {
                        text: 'CNPJ',
                        value: 'data',
                    },
                    {
                        text: 'Destinatario',
                        value: 'destinatario',
                    }
                ],
                data: [

                ]
            }
        },
        created(){
            this.notasAction()
        },
        computed: {
            ...mapGetters({
                notasGetter: 'nota/notasGetter',
            })
        },
        methods: {
            ...mapActions({
                notasAction: 'nota/notasAction',
            })
        }
    }
</script>

<style>

</style>
