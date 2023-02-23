const app = Vue.createApp({

    data() {
        return {
            tasks: [
                {
                    description: "Svegliati, possibilmente, ma soprattutto tardi",
                    done: true,
                },
                {
                    description: "Pranzo alle 14",
                    done: true,
                },
                {
                    description: "Accendi il PC e guarda youtube",
                    done: false,
                },
                {
                    description: "Comprare gpu nuova",
                    done: true,
                },
                {
                    description: "Pulire la camera",
                    done: true,
                },
                {
                    description: "Gioca un po' su Steam",
                    done: false,
                },
                {
                    description: "Senti il tuo gruppetto di amici su discord",
                    done: true,
                },
                {
                    description: "Dissociati",
                    done: false,
                },

            ],

            newObj: {
                description: "",
                done: false,
            },

        }
    },

    methods: {
        removeTask(index) {
            this.tasks.splice(index, 1)
        },

        addTask() {

            const objCopy = {
                ...this.newObj,
            };

            this.tasks.push(objCopy);
        },
    },

    //created() {},


});

app.mount('#app');
