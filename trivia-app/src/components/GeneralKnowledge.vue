<template>
    <div>
        <h1>GeneralKnowledge</h1>
        <question @clicked="checkAnswer" v-bind:question="currentQuestion" :answers="currentAnswers" :correct="currentCorrect"/>
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
            corrects: [1, 2, 3],
            currentQuestion: String,
            currentAnswers: Array,
            currentCorrect: Number,
            IndexOfCurrentQ: 0,
            maxLength: Number,
            end: 0,
        };
    },
    created: function() {
        this.currentQuestion = this.questions[this.IndexOfCurrentQ];
        this.currentAnswers = this.answers[this.IndexOfCurrentQ];
        this.currentCorrect = this.corrects[this.IndexOfCurrentQ];
        this.maxLength = this.questions.length;
    },
    methods: {
        checkAnswer: function(attempt){
            let c = 2;
            let w = 1;
            if(attempt===this.currentCorrect){
                this.gkScore[this.IndexOfCurrentQ] = c;
            }
            else{
                this.gkScore[this.IndexOfCurrentQ] = w;
            }
            this.nextQuestion();
        },
        nextQuestion: function(){
            if(this.IndexOfCurrentQ + 1 < this.maxLength){
                this.IndexOfCurrentQ+=1;
                this.currentQuestion = this.questions[this.IndexOfCurrentQ];
                this.currentAnswers = this.answers[this.IndexOfCurrentQ];
                this.currentCorrect = this.corrects[this.IndexOfCurrentQ];
            }
            else
                this.returnScore();
        },
        returnScore: function(){
            //let score = this.gkScore;
            this.$emit("score-return",1,this.gkScore);
            //this.$parent.finishedQuiz(1,this.gkScore);
        }
    },
}
</script>

<style >

</style>