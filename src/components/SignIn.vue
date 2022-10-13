<template>
    <v-card>
        <v-card-text>
            <v-img :src="require('../assets/logo.png')" class="my-3" contain height="190" />
            <v-form @submit.prevent="" v-model="valid">
                <v-text-field prepend-icon="mail_outline" name="userEmail" label="E-mail" type="text"
                    :rules="[rules.required, rules.email]" v-model="userAuth.userEmail">
                </v-text-field>
                <v-text-field prepend-icon="password" name="encryptedPassword" label="Senha"
                    :rules="[rules.required, rules.min ]" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1" v-model="userAuth.userPassword">
                </v-text-field>
                <v-btn :disabled="!valid" block color="primary" elevation="6" type="submit">Entrar</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>
   
<script>

export default {
    data() {
        return {
            userAuth: {
                userEmail: "",
                userPassword: ""
            },
            show1: false,
            valid: false,
            rules: {
                required: value => !!value || 'Obrigatório.',
                min: value => value.length >= 6 || 'Mínimo 6 caracteres',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'E-mail inválido.'
                },
            }
        }
    },
    methods: {
    }
}
</script>