<template>
    <div>
        <v-container grid-list-md text-xs-center>

        <v-subheader>
            Dados Gerais
        </v-subheader>
        <v-layout row wrap>
            <v-flex >
                <v-card
                    :hover="true"
                    color="amber lighten-4"
                    flat
                >
                    <v-card-text class="px-0 py-0">
                        <h5>Chave de Acesso:</h5>
                        <strong>
                            4219 0110 8326 4400 0108 5500 4000 0456 4919 1688 6995
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card
                    flat
                >
                    <v-card-text
                        class="px-0 py-0"
                    >
                        <h5>Número:</h5>
                        <strong>
                            45649
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex >
                <v-card
                    flat
                >
                    <v-card-text
                        class="px-0 py-0"
                    >
                        <h5>Versão XML</h5>
                        <strong>
                            4.00
                        </strong>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        </v-container>

    <v-tabs
        v-model="model"
        fixed-tabs
        show-arrows
        color="blue"
        dark
    >
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab
            v-for="n in tabs"
            :key="n.id"
            :href="`#tab-${n.id}`"
        >
            {{ n.text }}
        </v-tab>

        </v-tabs>
            <v-tabs-items v-model="model">
                <v-tab-item
                    v-for="t in tabs"
                    :key="t.id"
                    :value="`tab-${t.id}`"
                >
                 <v-card flat>
                    <component :is="t.component" :data="t.data"/>
                 </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import  nfe from '@/components/nfe'
import  emitente from '@/components/emitente'
import  destinatario from '@/components/destinatario'
import  cobranca from '@/components/cobranca'
import  produtosServicos from '@/components/produtosServicos'
import  totais from '@/components/totais'
import  transporte from '@/components/transporte'
import  informacoesAdicionais from '@/components/informacoesAdicionais'

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'nota',
    components: { nfe },
      data(){
          return {
              model:'tab-0',
              tabs:[
                  {id: 0, text:'NFe', component: nfe, data: this.nfe()},
                  {id: 1, text:'Emitente', component: emitente, data: this.emitente()},
                  {id: 2, text:'Destinatario', component: destinatario},
                  {id: 3, text:'Produtos e Serviços', component: produtosServicos},
                  {id: 4, text:'Totais ', component: totais},
                  {id: 5, text:'Transportes', component: transporte},
                  {id: 6, text:'Cobrança ', component: cobranca},
                  {id: 7, text:'Informações Adicionais ', component: informacoesAdicionais},
              ]
          }
      },
    created(){
        this.syncNotaAction()
    },
    computed:{
        ...mapGetters({
            notaGetter: 'nota/notaGetter',
        })
    },
    methods: {
        ...mapActions({
            syncNotaAction: 'nota/syncNotaAction',
        }),
        nfe(){
            return {
             numero: 9,
             modelo: 55,
             serie: 4,
             dtEmissao: '31/01/2019 10:43:26-02:00',
             dtSaidaEntrada: 'N/D',
             valorTotalNotaFiscal: '188,61',
             CNPJ: '10.832.644/0001-08',
             razaoSocial: 'Growth Supplements',
             inscricaoEstadual: '255860099',
             UF: 'SC',
             CPF: '111.111.111-91',
             razaoSocialDestinatario: 'Kleber C. S. ',
             UFDestinatario: 'DF',
             inscricaoEstadualDestinatario: 'N/D',
             destinoOperacao: '2 - Operação Interestadual',
             consumidorFinal: '1 - Consumidor final',
             presencaComprador: '9 - Operação não presencial (outros)',
             processo: '0 - com aplicativo do Contribuinte',
             versaoProcesso: 'Bling 1.0',
             tipoEmissao: '1 - Normal',
             finalidade: '1 - Normal',
             natureza: 'Venda de mercadorias',
             tipoOperação: ' 1 - Saída',
             formaPagamento: ' N/D',
             digest: 'ycmODCHW3K+G3jp/E2ebEixsyaw=',
            }
        },
        emitente(){
            return {
                nomeRazaoSocial: 'Growth Supplements',
                nomeFantasia: 'N/D',
                CNPJ: '10.832.644/0001-08',
                endereco: 'Rua Leopardo, 884',
                bairroDistrito: 'Jose Amandio',
                CEP: '09930-970',
                municipio: '4202453 - Bombinhas',
                telefone: '(47)3369-0062',
                UF: 'SC',
            }
        }
    }
}
</script>
