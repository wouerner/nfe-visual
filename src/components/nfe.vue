<template>
    <v-container >
    <v-sheet
        v-if=" data && typeof data !== 'undefined' && Object.keys(data).length > 0"
        color="grey lighten-3"
    >
    <v-container grid-list-md text-xs-center>
        <template v-for="data in dataMod">
            <v-subheader>{{data.title}}</v-subheader>
            <v-layout  row wrap>
                <v-flex v-for="field in data.data" >
                    <nCel :label="field.label" :value="field.value" ></nCel>
                </v-flex>
            </v-layout>
        </template >
     </v-container >
        </v-sheet>
     </v-container >
</template>
<script>
  import  nCel from '@/components/nCel'

  export default {
    name: 'NFe',
      components:{
          nCel: nCel
      },
      props: {
          data: Object
      },
      computed:{
        dataMod(){
            return [
                {
                   title: 'Dados da NF-e',
                   data: [
                    {
                        label: 'Modelo',
                        value: this.data.data.NFe.infNFe.ide.mod
                    },
                    {
                        label: 'Série',
                        value: this.data.data.NFe.infNFe.ide.serie
                    },
                    {
                        label: 'Número',
                        value: this.data.data.NFe.infNFe.ide.nNF
                    },
                    {
                        label: 'Data de Emissão',
                        value: this.data.data.NFe.infNFe.ide.dhEmi
                    },
                    {
                        label: 'Data Saída/Entrada',
                        value: this.data.data.NFe.infNFe.ide.dhSaiEnt
                    },
                    {
                        label: 'Valor Total da Nota Fiscal',
                        value: this.data.data.NFe.infNFe.pag.detPag.vPag
                    },
                   ]
                },
                {
                   title: 'Emitente',
                   data: [
                    {
                        label: 'CNPJ',
                        value: this.data.data.NFe.infNFe.emit.CNPJ
                    },
                    {
                        label: 'Nome / Razão Social',
                        value: this.data.data.NFe.infNFe.emit.xNome
                    },
                    {
                        label: 'Inscrição Estadual',
                        value: this.data.data.NFe.infNFe.emit.IE
                    },
                    {
                        label: 'UF',
                        value: this.data.data.NFe.infNFe.emit.enderEmit.UF
                    },
                   ]
                },
                {
                   title: 'Destinatário',
                   data: [
                    {
                        label: 'CPF',
                        value: this.data.data.NFe.infNFe.dest.CPF
                    },
                    {
                        label: 'Nome / Razão Social',
                        value: this.data.data.NFe.infNFe.dest.xNome
                    },
                    {
                        label: 'UF',
                        value: this.data.data.NFe.infNFe.dest.enderDest.UF
                    },
                    {
                        label: 'Inscrição Estadual',
                        value: this.data.inscricaoEstadualDestinatario
                    },
                    {
                        label: 'Destino da operação',
                        value: this.data.destinoOperacao
                    },
                    {
                        label: 'Consumidor final',
                        value: this.data.consumidorFinal
                    },
                    {
                        label: 'Presença do Comprador',
                        value: this.data.presencaComprador
                    },
                   ]
                },
                {
                    title: 'Emissão',
                    data: [
                        {
                            label: 'Processo',
                            value: this.data.data.NFe.infNFe.ide.procEmi
                        },
                        {
                            label: 'Versão do Processo',
                            value: this.data.data.NFe.infNFe.ide.verProc
                        },
                        {
                            label: 'Tipo de Emissão',
                            value: this.data.tipoEmissao
                        },
                        {
                            label: 'Finalidade',
                            value: this.data.finalidade
                        },
                        {
                            label: 'Natureza da Operação',
                            value: this.data.natureza
                        },
                        {
                            label: 'Tipo da Operação',
                            value: this.data.tipoOperacao
                        },
                        {
                            label: 'Forma de Pagamento',
                            value: this.data.formaPagamento
                        },
                        {
                            label: 'Digest Value da NF-e',
                            value: this.data.digest
                        },
                    ]
                },
                {
                   title: 'Situação Atual',
                   data: [
                    {
                        label: 'Eventos da NF-e',
                        value: this.data.data.protNFe.infProt.xMotivo
                    },
                    {
                        label: 'Protocolo',
                        value: this.data.data.protNFe.infProt.nProt
                    },
                    {
                        label: 'Data Autorização',
                        value: this.data.data.protNFe.infProt.dhRecbto
                    },
                    {
                        label: 'Data Inclusão AN',
                        value: this.data.CNPJ
                    },
                   ]
                }
            ]
        }
      }
  }
</script>
