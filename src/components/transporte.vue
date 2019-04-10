<template>
    <v-container grid-list-md text-xs-center>
        <v-subheader>
            Dados do Transporte
        </v-subheader>
        <v-layout row wrap>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">Modelo:
                        Nome / Razão Social
                        <strong>Growth Supplements</strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">Modelo:
                        Modalidade do Frete
                        <strong>
                            0 - Contratação do Frete por Conta do Remetente
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">Modelo:
                        Transportador
                        <strong>
                            0 - Contratação do Frete por Conta do Remetente
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">Modelo:
                        Razão Social / Nome
                        <strong>
                            EXPRESSO
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">Modelo:
                        Inscrição Estadual
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Endereço Completo
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Município
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        UF
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        UF
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-subheader>
                Volumes
            </v-subheader>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Volume 1
                        Quantidade
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Espécie
                        Volumes
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Marca dos Volumes
                        Numeração
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Peso Líquido
                        2,260
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Peso Bruto
                        2,260
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
    name: 'destinatario',
      props: {
          data: Object
      }
  }
</script>
