<template>
    <v-container grid-list-md text-xs-center>
        <v-subheader>Dados do Destinatário</v-subheader>
        <v-layout row wrap>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">Modelo:
                        Nome / Razão Social
                        <strong>Cleber Costa dos Santos</strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        CPF
                        <strong>
                            019.951.921-80
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Endereço
                        <strong>
                            SQS 404 Bloco K,  205
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Bairro / Distrito
                        <strong>
                            Asa Sul
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        CEP
                        <strong>
                            70238-110
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Município
                        <strong>
                            5300108 - Brasilia
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Telefone
                        <strong>
                            (61)99269-8358
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        UF
                        <strong>
                            DF
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
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
                        Indicador IE
                        <strong>
                            09 - Não Contribuinte, que pode ou não possuir Inscrição Estadual no Cadastro de Contribuintes do ICMS
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Inscrição Estadual
                        <strong>
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        Inscrição SUFRAMA
                        <strong>
                            IM
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card>
                    <v-card-text class="px-0">
                        E-mail
                        <strong>
                            oclebersantos@gmail.com
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
