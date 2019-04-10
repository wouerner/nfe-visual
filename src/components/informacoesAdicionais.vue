<template>
    <v-container grid-list-md text-xs-center>
        <v-subheader>Dados Gerais</v-subheader>
        <v-layout row wrap>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Formato de Impressão DANFE
                        <strong>
                            1 - DANFE normal, retrato
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
            <v-subheader>
                Informações Complementares de Interesse do Contribuinte
            </v-subheader>
        <v-layout row wrap>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Descrição
                        <strong>
                            Total aproximado de tributos: R$ 57,43 (30,45%) Federais R$ 25,36 (13,45%) Estaduais R$ 32,06 (17,00%) . Fonte IBPT.<br />Valor do ICMS DIFAL para UF de destino R$ 20,75<br />
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
  export default {
    name: 'informacoesAdicionais',
      props: {
          data: Object
      }
  }
</script>
