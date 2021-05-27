var app = new Vue({
    el: '.app',
    data: {
        greet: "",
        name: "",
        greetings: [
            "Hello",
            "Hi",
            "Good day",
            "Welcome",
            "Hola"
        ],
        names: [
            "Nicolas",
            "Dusan",
            "Mia",
            "William",
            "Veljko",
        ]
    },
    methods: {
        randomBtn(){
            this.greet = this.greetings[Math.round(Math.random() * this.greetings.length)];
            this.name = this.names[Math.round(Math.random() * this.names.length)];
        }
    }
})