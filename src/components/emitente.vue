<template>
    <v-container>
        <v-sheet
            color="grey lighten-3"
        >
            <v-container grid-list-md text-xs-center>
                <template v-for="data in dataMod">
                    <v-subheader>{{data.title}}</v-subheader>
                    <v-layout  row wrap>
                        <v-flex v-for="field in data.data" >
                            <nCel :label="field.label" :value="field.value" ></nCel>
                        </v-flex>
                    </v-layout>
                </template >
            </v-container>
        </v-sheet>
    </v-container>
</template>

<script>
  import  nCel from '@/components/nCel'
  export default {
    name: 'emitente',
      components:{
          nCel: nCel
      },
      props: {
          data: Object
      },
      computed:{
        dataMod(){
            return [
                {
                   title: 'Dados do Emitente',
                   data: [
                    {
                        label: 'Nome / Razão Social',
                        value: this.data.nomeRazaoSocial
                    },
                    {
                        label: 'Nome Fantasia',
                        value: this.data.nomeFantasia
                    },
                    {
                        label: 'CNPJ',
                        value: this.data.CNPJ
                    },
                    {
                        label: 'Endereço',
                        value: this.data.endereco
                    },
                    {
                        label: 'Bairro/Distrito',
                        value: this.data.bairroDistrito
                    },
                    {
                        label: 'CEP',
                        value: this.data.CEP
                    },
                    {
                        label: 'Municípios',
                        value: this.data.municipios
                    },
                    {
                        label: 'Telefone',
                        value: this.data.telefone
                    },
                    {
                        label: 'UF',
                        value: this.data.UF
                    },
                    {
                        label: 'País',
                        value: this.data.pais
                    },
                    {
                        label: 'Inscrição Estadual',
                        value: this.data.pais
                    },
                    {
                        label: 'Inscrição Estadual do Substituto Tributário',
                        value: this.data.pais
                    },
                    {
                        label: 'Inscrição Municipal',
                        value: this.data.pais
                    },
                    {
                        label: 'Município da Ocorrência do Fato Gerador do ICMS',
                        value: this.data.pais
                    },
                    {
                        label: 'CNAE Fiscal ',
                        value: this.data.pais
                    },
                    {
                        label: 'Código de Regime Tributário',
                        value: this.data.pais
                    },
                   ]
                }
            ]
        }
      }
  }
</script>
