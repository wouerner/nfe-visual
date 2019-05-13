<template>
  <v-container>
      <v-btn to="/nfe/listar">Voltar</v-btn>
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
      >
          <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Name"
              required
              placeholder="Placeholder"
              outline
          ></v-text-field>
          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              placeholder="Placeholder"
              outline
              ></v-text-field>

          <v-select
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              label="Item"
              required
              placeholder="Placeholder"
              outline
          ></v-select>

          <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
          ></v-checkbox>

          <v-btn
              :disabled="!valid"
              color="success"
              @click="validate"
          >
              Validate
          </v-btn>

          <v-btn
              color="error"
              @click="reset"
              >
              Reset Form
          </v-btn>

          <v-btn
              color="warning"
              @click="resetValidation"
              >
              Reset Validation
          </v-btn>
      </v-form>
  </v-container>
</template>

<script>
export default {
    name: 'Cadastrar',
    data(){
        return {
            headers: [
                {
                  text: 'ID',
                  value: 'id',
                },
                {
                  text: 'Data',
                  value: 'data',
                },
                {
                  text: 'Destinatario',
                  value: 'destinatario',
                }
            ],
            data: [

            ]
        }
    },
}
</script>

<style>

</style>
