<template>
    <div>
        <h3>Quiz Statistics</h3>
        <h4>Fun Facts Score</h4>
        <ol>
            <li><p>{{ ffCorrect }} correct out of {{ ffTotal }}</p></li>
            <li><p>{{ ffWrong }} wrong out of {{ ffTotal }}</p></li>
        </ol>
        <h4>General Knowledge Score</h4>
        <ol>
            <li><p>{{ gkCorrect }} correct out of {{ gkTotal }}</p></li>
            <li><p>{{ gkWrong }} wrong out of {{ gkTotal }}</p></li>
        </ol>
        <h4>History Score</h4>
        <ol>
            <li><p>{{ hCorrect }} correct out of {{ hTotal }}</p></li>
            <li><p>{{ hWrong }} wrong out of {{ hTotal }}</p></li>
        </ol>
        <h4>Sports Score</h4>
        <ol>
            <li><p>{{ sCorrect }} correct out of {{ sTotal }}</p></li>
            <li><p>{{ sWrong }} wrong out of {{ sTotal }}</p></li>
        </ol>
        <h3>Total</h3>
        <ol>
            <li><p>{{ finalCorrect }} correct out of {{ finalTotal }}</p></li>
            <li><p>{{ finalWrong }} wrong out of {{ finalTotal }}</p></li>
        </ol>
    </div>
</template>

<script>
export default {
    name: "stats",
    props: {
        ffScore: {
            type: Array,
            required: true
        },
        gkScore: {
            type: Array,
            required: true
        },
        hScore: {
            type: Array,
            required: true
        },
        sScore: {
            type: Array,
            required: true
        }
    },
    data: function() {
        return {
            ffCorrect: 0,
            ffWrong: 0,
            ffTotal: 0,
            ffTallies: 0,

            gkCorrect: 0,
            gkWrong: 0,
            gkTotal: 0,
            gkTallies: 0,
            
            hCorrect: 0,
            hWrong: 0,
            hTotal: 0,
            hTallies: 0,
            
            sCorrect: 0,
            sWrong: 0,
            sTotal: 0,
            sTallies: 0,
            
            finalCorrect: 0,
            finalWrong: 0,
            finalTotal: 0,
        };
    },
    created: function() {
        let answers = this.calcScore(this.ffScore);
        this.ffCorect=  answers[0];
        this.ffWrong=   answers[1];
        this.ffTotal=   answers[2];
        this.ffTallies= answers;
        answers = this.calcScore(this.gkScore);
        this.gkCorrect= answers[0];
        this.gkWrong=   answers[1];
        this.gkTotal=   answers[2];
        this.gkTallies= answers;
        answers = this.calcScore(this.hScore);
        this.hCorrect=  answers[0];
        this.hWrong=    answers[1];
        this.hTotal=    answers[2];
        this.hTallies=  answers;
        answers = this.calcScore(this.sScore);
        this.sCorrect=  answers[0];
        this.sWrong=    answers[1];
        this.sTotal=    answers[2];
        this.sTallies=  answers;
        answers = this.calcTotalScore();
        this.finalCorrect=   answers[0];
        this.finalWrong=     answers[1];
        this.finalTotal=     answers[2];
    },
    methods: {
        calcScore: function(score) {
            let correct=0;
            let wrong=0;
            let totalQs=0;
            
            score.forEach(question =>{
                totalQs+=1;
                if(question === 1) {
                    wrong+=1;
                }
                else if(question === 2) {
                    correct+=1;
                }
            });
            let answers=[correct, wrong, totalQs];
            return answers;
        },
        calcTotalScore: function() {
            let correct=0;
            let wrong=0;
            let totalQs=0;
            let scores = [this.ffTallies, this.gkTallies, this.hTallies, this.sTallies];
            scores.forEach(tallies =>{
                correct+= tallies[0];
                wrong+= tallies[1];
                totalQs+= tallies[2];
            });
            let answers=[correct, wrong, totalQs];
            return answers;
        }
    },
}
</script>

<style scoped>
ol {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-table;
  margin: 0 10px;
}
</style>