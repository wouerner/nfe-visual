<template>
    <v-container grid-list-md text-xs-center>
        <nFolha :data="dataMod" />
    </v-container>
</template>
<script>
  import nFolha from '@/components/nFolha'
  export default {
    name: 'Totais',
      props: {
          data: Object
      },
      components:{
          nFolha: nFolha
      },
      computed:{
          dataMod() {
              return [
                  {
                   title: 'Totais',
                   data: [
                    {
                        label: 'Base de Cálculo ICMS',
                        value: 18861
                    },
                    {
                        label: 'Valor do ICMS ',
                        value: 1320
                    },
                    {
                        label: 'Valor do ICMS Desonerado   ',
                        value: 0
                    },
                    {
                        label: 'Valor Total do FCP',
                        value: 0
                    },
                    {
                        label: 'Valor Total ICMS FCP',
                        value: 0
                    },
                    {
                        label: 'Valor Total ICMS Interestadual UF Destino',
                        value: 0
                    },
                    {
                        label: 'Valor Total ICMS Interestadual UF Rem.',
                        value: 0
                    },
                    {
                        label: 'Base de Cálculo ICMS ST',
                        value: 0
                    },
                    {
                        label: 'Valor ICMS Substituição',
                        value: 0
                    },
                    {
                        label: 'Valor Total do FCP retido por ST',
                        value: 0
                    },
                    {
                        label: 'Valor Total do FCP retido anteriormente por ST',
                        value: 0
                    },
                    {
                        label: 'Valor Total dos Produtos',
                        value: 16700
                    },
                    {
                        label: 'Valor do Frete',
                        value: 16700
                    },
                       {label: 'Valor do Seguro 0,00'},
                       {label: 'Valor Total dos Descontos 19,71'},
                       {label: 'Valor Total do II 0,00'},
                       {label: 'Valor Total do IPI 0,00'},
                       {label: 'Valor Total do IPI Devolvido 0,00'},
                       {label: 'Valor do PIS 0,00'},
                       {label: 'Valor da COFINS 0,00'},
                       {label: 'Outras Despesas Acessórias 0,00'},
                       {label: 'Valor Total da NFe 0,00'},
                       {label: 'Valor Aproximado dos Tributos 0,00'}
                   ]
                 }
              ]
          }
      }
  }
</script>
