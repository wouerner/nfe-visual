<template>
    <v-container>
        <nFolha :data="dataMod" />
    </v-container>
</template>

<script>
  import nFolha from '@/components/nFolha'
  export default {
    name: 'emitente',
      components:{
          nFolha: nFolha
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
                        value: this.data.xNome
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
                        value: this.data.enderEmit.xLgr
                    },
                    {
                        label: 'Bairro/Distrito',
                        value: this.data.enderEmit.xBairro
                    },
                    {
                        label: 'CEP',
                        value: this.data.enderEmit.CEP
                    },
                    {
                        label: 'Municípios',
                        value: this.data.enderEmit.xMun
                    },
                    {
                        label: 'Telefone',
                        value: this.data.telefone
                    },
                    {
                        label: 'UF',
                        value: this.data.enderEmit.UF
                    },
                    {
                        label: 'País',
                        value: this.data.enderEmit.xPais
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
