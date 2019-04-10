<template>
    <v-container grid-list-md text-xs-center>
        <v-subheader>
            Dados de Cobrança
        </v-subheader>
        <v-subheader>
            Fatura
        </v-subheader>
        <v-layout row wrap>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        Número
                        <strong>
        045649  
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        Valor Original
                        <strong>
        208,32  
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor do Desconto
                        <strong>
                            19,71
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        Valor Líquido
                        <strong>
        188,61
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        Duplicatas
                        <strong>
        Número
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        Vencimento
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        Valor
                        <strong>
        001 31/01/2019  188,61
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        Formas de Pagamento
        Forma de Pagamento
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        Valor do Pagamento
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        Tipo de Integração Pagamento
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        CNPJ da Credenciadora
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        Bandeira da operadora
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        Número de autorização
                        <strong>
        15  188,61              
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        Troco
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>
<script>
  export default {
    name: 'cobranca',
      props: {
          data: Object
      }
  }
</script>
