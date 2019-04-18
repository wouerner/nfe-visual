<template>
    <v-container grid-list-md text-xs-center>
        <nFolha :data="dataMod" />
    </v-container>
</template>
<script>
  import nFolha from '@/components/nFolha'
  export default {
    name: 'Transporte',
      props: {
          data: Object
      },
      components:{
          nFolha: nFolha
      },
      computed:{
          dataMod(){
              return [
                  {
                   title: 'Dados do Transporte',
                   data: [
                    {
                        label: 'Base de Cálculo ICMS',
                        value: 18861
                    },
                       {label: 'Nome / Razão Social Growth Supplements', value: 0 },
                       {label: 'Modalidade do Frete 0 - Contratação do Frete por Conta do Remetente', value: 0 },
                       {label: 'Transportador 0 - Contratação do Frete por Conta do Remetente', value: 0 },
                       {label: 'Razão Social / Nome EXPRESSO', value: 0 },
                       {label: 'Modelo: Inscrição Estadual', value: 0 },
                       {label: 'Endereço Completo', value: 0 },
                       {label: 'Município', value: 0 },
                       {label: 'UF', value: 0 },
                   ]
                  },
                  {
                   title: 'Volumes',
                   data: [
                       {label: 'Volume 1 Quantidade', value: 0 },
                       {label: 'Espécie Volumes', value: 0 },
                       {label: 'Marca dos Volumes Numeração', value: 0 },
                       {label: 'Peso Líquido 2,260', value: 0 },
                       {label: 'Peso Bruto 2,260 ', value: 0 }
                   ]}
              ]
          }
      }
  }
</script>
