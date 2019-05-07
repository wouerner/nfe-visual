<template>
    <v-container grid-list-md text-xs-center>
        <nFolha :data="dataMod" v-if="data"/>
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
                        value: this.data.ICMSTot.vBC
                    },
                    {
                        label: 'Valor do ICMS ',
                        value: 1320
                    },
                    {
                        label: 'Valor do ICMS Desonerado   ',
                        value: this.data.ICMSTot.vICMSDeson
                    },
                    {
                        label: 'Valor Total do FCP',
                        value: this.data.ICMSTot.vFCP
                    },
                   ]},
                  {data: [
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
                  ]},
                  {data: [
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
                  ]},
                  {data: [
                    {
                        label: 'Valor do Frete',
                        value: this.data.ICMSTot.vFrete
                    },
                       {
                           label: 'Valor do Seguro 0,00',
                           value: this.data.ICMSTot.vSeg
                       },
                       {label: 'Valor Total dos Descontos',
                           value: this.data.ICMSTot.vDesc
                       },
                       {
                           label: 'Valor Total do II',
                           value: this.data.ICMSTot.vII
                       },
                  ]},
                  {data: [
                       {
                           label: 'Valor Total do IPI 0,00',
                           value: this.data.ICMSTot.vIPI
                       },
                       {
                           label: 'Valor Total do IPI Devolvido',
                           value: this.data.ICMSTot.vIPIDevol
                       },
                       {
                           label: 'Valor do PIS',
                           value: this.data.ICMSTot.vPIS
                       },
                       {
                           label: 'Valor da COFINS 0,00',
                           value: this.data.ICMSTot.vCOFINS
                       },
                  ]},
                  {data: [
                       {
                           label: 'Outras Despesas Acessórias',
                           value: this.data.ICMSTot.vOutro
                       },
                       {
                           label: 'Valor Total da NFe 0,00',
                           value: this.data.ICMSTot.vNF
                       },
                       {
                           label: 'Valor Aproximado dos Tributos',
                           value: this.data.ICMSTot.vTotTrib
                       }
                   ]
                 }
              ]
          }
      }
  }
</script>
