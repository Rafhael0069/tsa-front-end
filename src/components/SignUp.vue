<template>
    <v-card>
        <v-card-text>
            <v-form @submit.prevent="" v-model="valid">
                <v-text-field prepend-icon="perm_identity" name="userName" label="Nome Completo" type="text"
                    :rules="[rules.required]" v-model="userData.userName">
                </v-text-field>
                <v-text-field prepend-icon="calendar_month" name="birthDate" label="Data de nascimento" type="date"
                    :rules="[rules.required]" v-model="userData.birthDate">
                </v-text-field>
                <v-text-field prepend-icon="mail_outline" name="userEmail" label="E-mail" type="email"
                    :rules="[rules.required, rules.email]" v-model="userData.userEmail">
                </v-text-field>
                <v-text-field prepend-icon="password" name="password" label="Senha"
                    :rules="[rules.required, rules.min ]" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1"
                    v-model="userData.encryptedPassword">
                </v-text-field>
                <v-text-field prepend-icon="password" name="password_confirm" label="Comfirmar senha"
                    :rules="[rules.required, rules.min, rules.password]"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :type="show2 ? 'text' : 'password'"
                    @click:append="show2 = !show2" v-model="password_confirm">
                </v-text-field>
                <v-spacer></v-spacer>
                <v-btn :disabled="!valid" block color="primary" elevation="6" type="submit">Cadastre-se</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>
<script>

export default {
    data() {
        return {
            userData: {
                userName: "",
                userEmail: "",
                encryptedPassword: "",
                birthDate: ""
            },
            password_confirm: "",
            show1: false,
            show2: false,
            valid: false,
            rules: {
                required: value => !!value || 'Obrigatório.',
                min: value => value.length >= 6 || 'Min 6 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'E-mail inválido.'
                },
                matchPassword: () => this.userData.password === this.password_confirm || `Senhas diferentes`,
            }
        }
    },
    methods: {
    }
}
</script>