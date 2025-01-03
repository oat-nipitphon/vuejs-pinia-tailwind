import { defineStore } from 'pinia'

export const authStore = defineStore('userStore', {
    state: () => ({
        dataStore: null,
        errors: {},
    }),
    actions: {

        // Login and Register
        async authenticate() {
            
        },

    },
})