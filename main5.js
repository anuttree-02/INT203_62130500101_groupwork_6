const constraints = {
    username: {
        presence: true,
        format: {
            pattern: "[a-z0-9]+",
            flags: "i",
            message: "can only contain a-z and 0-9"
          }

    },
    email: {
        presence: true,
        email: true
    },
    password: {
        presence: true,
        length : {
            minimum: 6,
            maximum: 30,
            message: "Must not be less than 6 and over 30"
        }
        
    },
    full_name: {
        presence: true,

    },
    title: {
        presence: true,
        
    },
    language: {
        presence: true
    }
}

const app =Vue.createApp({
    data() {
        return {
            username: null,
            email: null,
            password: null,
            full_name: null,
            title: null,
            language: null,
            language_lists: [{language_id:1,language_name:'England',
                                language_id:2,language_name:'Norway',
                                language_id:3,language_name:'France'}],
            errors: null,
        }
    },
    methods: {
        checkForm(){
            this.errors = validate({username: this.username,
                                    email: this.email,
                                    password: this.password,
                                    full_name: this.full_name,
                                    title: this.title,
                                    language: this.language,},
                                    constraints)
            if(!this.errors){
                alert("Your frofile is updated successfully.")
            }
        }
    }
})

app.mount('#app')


