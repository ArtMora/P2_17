<template>
    <div>
        <p>Question: {{ question }} </p>
        <button @click="checkA(1)"> {{ answer1 }}</button>
        <button @click="checkA(2)"> {{ answer2 }}</button>
        <button @click="checkA(3)"> {{ answer3 }}</button>
        <button @click="checkA(4)"> {{ answer4 }}</button>
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
        checkA: function(a) {
            this.$parent.checkAnswer(a);
        }
    },
}
</script>

<style >

</style>