<template>
    <v-card>
        <v-card-text>
            <v-alert :value="erroAlert" color="red" elevation="3" outlined type="warning">{{messageError}}</v-alert>
            <v-progress-linear :active="loading" :indeterminate="loading" absolute top height="6">
            </v-progress-linear>
            <v-form @submit.prevent="auth" v-model="valid">
                <v-text-field prepend-icon="perm_identity" name="userName" label="Nome Completo" type="text"
                    :rules="[rules.required]" v-model="userData.userName">
                </v-text-field>
                <v-text-field prepend-icon="calendar_month" name="birthDate" label="Data de nascimento" type="date"
                    :rules="[rules.required]" v-model="userData.birthDate">
                </v-text-field>
                <v-text-field prepend-icon="mail_outline" name="userEmail" label="E-mail" type="email"
                    :rules="[rules.required, rules.email]" v-model="userData.userEmail">
                </v-text-field>
                <v-text-field prepend-icon="password" name="userPassword" label="Senha"
                    :rules="[rules.required, rules.min ]" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1" v-model="userData.userPassword">
                </v-text-field>
                <v-text-field prepend-icon="password" name="password_confirm" label="Comfirmar senha"
                    :rules="[rules.required, rules.min, rules.matchPassword]"
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

//import Auth from "../services/auth"

export default {
    data() {
        return {
            userData: {
                userName: "",
                userEmail: "",
                userPassword: "",
                birthDate: ""
            },
            password_confirm: "",
            messageError: "",
            loading: false,
            erroAlert: false,
            show1: false,
            show2: false,
            valid: false,
            rules: {
                required: value => !!value || 'Obrigatório.',
                min: value => value.length >= 6 || 'Mínimo 6 caracteres',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'E-mail inválido.'
                },
                matchPassword: () => this.userData.userPassword === this.password_confirm || `Senhas diferentes`,
            }
        }
    },
    methods: {
        async auth() {
            this.$router.push('/home')
            /* this.loading = true
            try {
                const res = await Auth.signin(this.userData)
                if (res.status == 200) {
                    this.loading = false
                    this.$router.push('/home')
                }
            } catch (error) {
                const response = error.response
                this.loading = false
                this.erroAlert = true
                this.messageError = response.data
                console.log(response.data)
            } */
        }
    },
    watch: {
        erroAlert(val) {
            if (!val) return
            setTimeout(() => (this.erroAlert = false), 3000)
        }
    },
}
</script>