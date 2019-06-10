<template>
  <v-container>
      <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1"
          :pagination.sync="pagination"
      >
          <template v-slot:items="props">
              <td class=""></td>
          </template>
      </v-data-table>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ListarCertificados',
    data(){
        return {
            pagination:{rowsPerPage: 10},
            desserts: [],
            headers: [
                {
                  text: 'Razão Social',
                  value: 'id',
                },
                {
                  text: 'CNPJ',
                  value: 'data',
                },
                {
                  text: 'Ambiente',
                  value: 'data',
                },
                {
                  text: 'Certificado',
                  value: 'destinatario',
                },
            ],
        }
    },
    filters: {
      cpf: function (value) {
          return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      },
      cnpj: function (value) {
          return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
      }
    },
    created(){
       this.syncNotasByUserAction(this.usuarioGetter.data.auth.usu_identificacao)
    },
    computed: {
      ...mapGetters({
          notasGetter: 'nota/notasGetter',
          usuarioGetter: 'usuario/usuarioGetter'
      })
    },
    methods: {
        ...mapActions({
            notasAction: 'nota/notasAction',
            syncNotasByUserAction : 'nota/syncNotasByUserAction'
        })
    }
}
</script>
