<template>
    <div>
    <v-tabs
            v-model="model"
        fixed-tabs>
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
