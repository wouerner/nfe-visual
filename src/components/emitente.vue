<template>
    <v-container grid-list-md text-xs-center>
        <v-subheader>Dados do Emitente</v-subheader>
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
                        Nome Fantasia
                        <strong>N/D</strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">Modelo:
                        CNPJ
                        <strong>10.832.644/0001-08</strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">Modelo:
                        Endereço
                        <strong>Rua Leopardo,  884  Growth Supplements</strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">Modelo:
                        Bairro / Distrito
                        <strong>
                            Jose Amandio
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">Modelo:
                        CEP
                        <strong>
                            09930-970
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">Modelo:
                        Município
                        <strong>
                            4202453 - Bombinhas
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">Modelo:
                        Telefone
                        <strong>
                            (47)3369-0062
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">Modelo:
                        UF
                        <strong>
                            SC
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">Modelo:
                        País
                        <strong>
                            1058 - Brasil
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Inscrição Estadual:
                        <strong>
                            255860099
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Inscrição Estadual do Substituto Tributário
                        <strong>
                            0775059400176
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        Inscrição Municipal:
                        <strong>
                          N/D 
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        Município da Ocorrência do Fato Gerador do ICMS:
                        <strong>
        4202453
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        CNAE Fiscal
                        <strong>
       N/D 
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
        Código de Regime Tributário
                        <strong>
        3 - Regime Normal
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>



    </v-layout>
    </v-container>
</template>

<script>
  export default {
    name: 'emitente',
      props: {
          data: Object
      }
  }
</script>
