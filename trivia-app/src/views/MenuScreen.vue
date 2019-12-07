<template>
    <div>
        <h1>Texas Tech Trivia Game</h1>
        <router-link to="/generalknowledge" tag="button">General Knowledge</router-link>
        <router-link to="/history" tag="button">History</router-link>
        <router-link to="/funfacts" tag="button">Fun Facts</router-link>
        <router-link to="/sports" tag="button">Sports</router-link>
        <button @click="statsHidden = (statsHidden + 1) % 2">Stats</button>
        
        <stats v-if="statsHidden===0" v-bind:ffScore="ffScore" :gkScore="gkScore" :hScore="hScore" :sScore="sScore"/>
        
    </div>
</template>

<script>
import Stats from '../components/Stats';

export default {
    name: "MenuScreen",
    components: {
        Stats
    },
    data: function() {
        return {
            gkScore:    [0, 0, 0],// [0, 0, 0] each element represents a question, 0=hasnt attempted, 1=attempted but wrong, 2=attempted and correct
            hScore:     [0, 0, 0],
            ffScore:    [0, 0, 0],
            sScore:     [0, 0, 0],
            state: 0,//0 - has not started a quiz, 1 - has started a quiz, 2 - has completed all quizzes
            statsHidden: 0,
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
        toggleStats: function() {
            this.statsHidden = (this.statsHidden + 1) % 2;
        },
        statsNotHidden: function() {
            return this.statsHidden === 0;
        }
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

.hero-text {
    font-size: 20;
}

.button {
    margin: 40;
    background-color: #55dd55;
    border-radius: 40;
    height: 80;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>