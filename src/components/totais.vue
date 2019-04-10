<template>
    <v-container grid-list-md text-xs-center>
        <v-subheader>
            Totais
        </v-subheader>
        <v-subheader>
           ICMS
        </v-subheader>
        <v-layout row wrap>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">Modelo:
                        Base de Cálculo ICMS
                        <strong>
                            188,61
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor do ICMS
                        <strong>
                            13,20
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor do ICMS Desonerado
                        <strong>
                            0,00
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor Total do FCP
                        <strong>
                            0,00
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor Total ICMS FCP
                        <strong>
                            0,00
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor Total ICMS Interestadual UF Destino
                        <strong>
                            20,75
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor Total ICMS Interestadual UF Rem.
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Base de Cálculo ICMS ST
                        <strong>
                            0,00
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor ICMS Substituição
                        <strong>
                            0,00
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor Total do FCP retido por ST
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor Total do FCP retido anteriormente por ST
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor Total dos Produtos
                        <strong>
                            167,00
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor do Frete
                        <strong>
                            41,32
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor do Seguro
                        <strong>
                            0,00
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor Total dos Descontos
                        <strong>
                            19,71
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor Total do II
                        <strong>
                            0,00
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor Total do IPI
                        <strong>
                            0,00
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        Valor Total do IPI Devolvido
                        <strong>
                            0,00
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor do PIS
                        <strong>
                            0,00
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor da COFINS
                        <strong>
                            0,00
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Outras Despesas Acessórias
                        <strong>
                            0,00
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor Total da NFe
                        <strong>
                            0,00
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Valor Aproximado dos Tributos
                        <strong>
                            0,00
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
  export default {
    name: 'totais',
      props: {
          data: Object
      }
  }
</script>
