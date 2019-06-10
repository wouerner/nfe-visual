<template>
    <v-container>
        <v-card>
            <v-container fluid>
                <v-layout
                        row
                        wrap>
                    <v-flex xs6>
                        <h2 class="mr-3 blue--text">Lista de Certificados</h2>
                    </v-flex>
                    <v-flex
                            xs5
                            offset-xs1
                            class=" text-xs-right">
                        <!--                      <h6>-->
                        <!--                          <div class="page-title">-->
                        <!--                              <div class="row">-->
                        <!--                                  <div-->
                        <!--                                          class="col s12 m3 l2 right-align">-->
                        <!--                                      <a-->
                        <!--                                              title="Voltar"-->
                        <!--                                              class="btn small grey lighten-3 grey-text z-depth-0 chat-toggle"-->
                        <!--                                              @click="$router.go(-1)"-->
                        <!--                                      ><i class="material-icons">arrow_back</i>-->
                        <!--                                      </a>-->
                        <!--                                  </div>-->
                        <!--                              </div>-->
                        <!--                          </div>-->
                        <!--                      </h6>-->
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>

        <v-data-table
                :headers="headers"
                :items="listarCertificadoGetter"
                class="elevation-1"
                :pagination.sync="pagination"
        >
            <template v-slot:items="props">
                <td class="text-xs-left">{{ props.item.razaosocial }}</td>
                <td class="text-xs-left">{{ props.item.cnpj | cnpj }}</td>
                <td class="text-xs-center">{{ props.item.tpAmb }}</td>
                <td class="text-xs-left">{{ props.item.path }}</td>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'ListarCertificados',
        data(){
            return {
                pagination:{rowsPerPage: 10},
                headers: [
                    {
                        text: 'Razão Social',
                        align: 'left',
                        value: 'razaosocial',
                    },
                    {
                        text: 'CNPJ',
                        align: 'left',
                        value: 'cnpj',
                    },
                    {
                        text: 'Ambiente',
                        align: 'center',
                        value: 'tpAmb',
                    },
                    {
                        text: 'Certificado',
                        align: 'left',
                        value: 'path',
                    },
                ],
                data: []
            }
        },
        filters: {
            cpf: function (value) {
                return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            },
            cnpj: function (value) {
                return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
            }
        },
        created(){
            this.listarCertificadoAction();
        },
        computed: {
            ...mapGetters({
                listarCertificadoGetter: 'certificado/listarCertificadoGetter'
            })
        },
        methods: {
            ...mapActions({
                listarCertificadoAction: 'certificado/listarCertificadoAction',
            })
        }
    }
</script>
