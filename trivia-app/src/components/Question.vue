<template>
    <div>
        <p>Question: {{ question }} </p>
        <button> {{ answer1 }}</button>
        <button> {{ answer2 }}</button>
        <button> {{ answer3 }}</button>
        <button> {{ answer4 }}</button>
    </div>
</template>

<script>
export default {
    name: "question",
    props: {
        question: {
            type: String,
            required: true
        },
        answers: {
            type: Array,
            required: true
        },
        correct: {
            type: Number,
            required: true
        }
    },
    data: function() {
        return {
           answer1: this.answers[0],
           answer2: this.answers[1],
           answer3: this.answers[2],
           answer4: this.answers[3],
        };
    },
    created: function() {

    },
    methods: {

    },
}
</script>

<style >

</style>