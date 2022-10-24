Vue.createApp({
    data() {
        return {
            Message: null,
            How_many: null,
            Output: [],
            errors: [],
            MessageOutput: null
        }
    },
    methods: {
        getOutput(Message, How_many) {
            this.errors = [];
            if (!this.How_many) {
                this.errors.push('Count required.');
            }
            if (!this.Message) {
                this.errors.push('Message required.');
            }

            if (How_many < 0) {
                this.MessageOutput = "Must be non-negative number: " + this.How_many;
            }
            else if (How_many == 0 || How_many == null) {
                this.MessageOutput = "Empty";
            }
            else {
                this.MessageOutput = "";
                for (i = 0; i < How_many; i++) {
                    this.MessageOutput = this.MessageOutput + this.Message
                }
            }
            e.preventDefault();
        }
    }
}).mount("#app")

