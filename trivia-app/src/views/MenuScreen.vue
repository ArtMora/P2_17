<template>
    <div>
        <h1>Texas Tech Trivia Game</h1>
        <general-knowledge v-if="takingGK===1" v-bind:gkScore="gkScore"/>
        <history v-if="takingH===1" v-bind:hScore="hScore"/>
        <fun-facts v-if="takingFF===1" v-bind:ffScore="ffScore"/>
        <sports v-if="takingS===1" v-bind:sScore="sScore"/>
        <stats v-if="statsHidden===0" v-bind:ffScore="ffScore" :gkScore="gkScore" :hScore="hScore" :sScore="sScore"/>
        <button class="button button1" @click="takingGK = 1">General Knowledge</button>
        <button class="button button2" @click="takingH = 1">History</button>
        <button class="button button3" @click="takingFF = 1">Fun Facts</button>
        <button class="button button4" @click="takingS = 1">Sports</button>
        <button class="button button5" @click="statsHidden = (statsHidden + 1) % 2">Stats</button>
    </div>
</template>

<script>
import Stats from '../components/Stats';
import History from '../components/History';
import FunFacts from '../components/FunFacts';
import GeneralKnowledge from '../components/GeneralKnowledge';
import Sports from '../components/Sports';


export default {
    name: "MenuScreen",
    components: {
        Stats,
        FunFacts,
        GeneralKnowledge,
        History,
        Sports
    },
    data: function() {
        return {
            gkScore:    [0, 0, 0],// [0, 0, 0] each element represents a question, 0=hasnt attempted, 1=attempted but wrong, 2=attempted and correct
            hScore:     [0, 0, 0],
            ffScore:    [0, 0, 0],
            sScore:     [0, 0, 0],
            state: 0,//0 - has not started a quiz, 1 - has started a quiz, 2 - has completed all quizzes
            statsHidden: 0,
            takingQuiz: 0,
            takingFF: 0,
            takingGK: 0,
            takingH: 0,
            takingS: 0,
        };
    },
    watch: {
        state: function (val) {
            switch(val){
                case 1:
                    this.startedQuizzes();
                    break;
                case 2:
                    this.showStats();
                    break;
                default:
                    this.reset();
            }
        }
    },
    created: function() {
        this.gkScore = [0, 0, 0];
        this.hScore = [0, 0, 0];
        this.ffScore = [0, 0, 0];
        this.sScore = [0, 0, 0];
        this.statsHidden = 1;
    },
    methods: {
        reset: function() {
            this.gkScore = [0, 0, 0];
            this.hScore = [0, 0, 0];
            this.ffScore = [0, 0, 0];
            this.sScore = [0, 0, 0];
        },
        nextState: function() {
            this.state = (this.state + 1) % 3;
        },
        startedQuizzes: function() {
            if(this.completedQuizzes()){
                this.nextState();
            }
        },
        completedQuizzes: function() {
            let gkSum = 0;
            this.gkScore.forEach(question => {
                gkSum+= question;
            });
            let hSum = 0;
            this.hScore.forEach(question => {
                hSum+= question;
            });
            let ffSum = 0;
            this.ffScore.forEach(question => {
                ffSum+= question;
            });
            let sSum = 0;
            this.sScore.forEach(question => {
                sSum+= question;
            });
            return gkSum >= 3 && hSum >= 3 && ffSum >= 3 && sSum >= 3;
        },

        showStats: function() {
            this.statsHidden = 0;
        },
        hideStats: function() {
            this.statsHidden = 1;
        },
    },
    
}
</script>

<style>
.container {
    background-color: white;
}

.banner {
    width: 100%;
    background-color: aqua;
    border-radius: 20;
    height: 150;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button {
  border: 2px black;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: 100%;
}
.button1 {background-color: green;}
.button2 {background-color: blue;}
.button3 {background-color: red;}
.button4 {
    background-color: yellow;
    color:black;
}
.button5 {
    background-color: white;
    color:black;
}
</style>