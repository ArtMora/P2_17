<template>
    <div>
        <h1>GeneralKnowledge</h1>
        <question v-bind:question="currentQuestion" :answers="currentAnswers" :correct="currentCorrect"/>
    </div>
</template>

<script>
import Question from "./Question.vue";

export default {
    name: "general-knowledge",
    props: {
        gkScore: {
            type: Array,
            required: true
        }
    },
    components: {
        Question,
    },
    data: function() {
        return {
           questions: ['blah', 'foo', 'bar'],
           answers: [
               ['yes','no','uhh','maybe'],
               ['yes','no','uhh','maybe'],
               ['yes','no','uhh','maybe']
            ],
            correct: [1, 2, 3, 4]
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