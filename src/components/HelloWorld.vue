<template>
  <v-container>
  <v-data-table
      :headers="headers"
      :items="data"
      class="elevation-1"
  >
      <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.calories }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="text-xs-right">{{ props.item.iron }}</td>
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

            ],
            data: [

            ]
        }
    },
    created(){
       console.log('created')
       this.notasAction()
    },
    computed: {
      ...mapGetters({
          modalVisible: 'modal/default',
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
