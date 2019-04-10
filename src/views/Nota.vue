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
                    <component :is="t.component" :data="{}"/>
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

    export default {
        name: 'nota',
        components: { nfe },
          data(){
              return {
                  model:'tab-0',
                  tabs:[
                      {id: 0, text:'NFe', component: nfe},
                      {id: 1, text:'Emitente', component: emitente},
                      {id: 2, text:'Destinatario', component: destinatario},
                      {id: 3, text:'Produtos e Serviços', component: produtosServicos},
                      {id: 4, text:'Totais ', component: totais},
                      {id: 5, text:'Transportes', component: transporte},
                      {id: 6, text:'Cobrança ', component: cobranca},
                      {id: 7, text:'Informações Adicionais ', component: informacoesAdicionais},
                  ]
              }
          }
    }
</script>
