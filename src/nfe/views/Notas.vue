<template>
  <v-container>
      <v-btn to="/nfe/cadastrar">Cadastrar Nota</v-btn>
  <v-data-table
      :pagination.sync="pagination"
      :headers="headers"
      :items="notasGetter"
      class="elevation-1"
  >
      <template v-slot:items="props">
          <td class="">{{ props.item.infNFe.emit.xNome }}</td>
          <td class="">{{ props.item.infNFe.dest.CPF }}</td>
          <td class="">{{ props.item.infNFe.dest.xNome }}</td>
          <td class="">{{ props.item.infNFe.ide.nNF }}</td>
          <td class="">
              <v-tooltip bottom>
                  <v-btn
                      slot="activator"
                      flat
                      icon
                      to="/nfe/nota"
                  >
                      <v-icon>visibility</v-icon>
                  </v-btn>
                  <span>Visualizar</span>
              </v-tooltip>
          </td>
      </template>
  </v-data-table>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
data(){
    return {
        pagination: {
            rowsPerPage: 10
        },
        headers: [
            {
              text: 'Emitente',
              value: 'id',
            },
            {
              text: 'CNPJ',
              value: 'data',
            },
            {
              text: 'Destinatario',
              value: 'destinatario',
            },,
            {
              text: 'N. Nota',
              value: 'infNFe.ide.nNF',
            },
            {
              text: 'Ação',
              value: '',
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
