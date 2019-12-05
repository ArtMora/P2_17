<template>
    <view class='container'>
        <view class='banner'>
            <text class='hero-text'>Texas Tech Trivia Game</text>
        </view>
        <touchable-opacity class='button' :on-press="startGeneralKnowledge">
            <text>Press to start General Knowledge Trivia</text>
        </touchable-opacity>
        <touchable-opacity class='button' :on-press="startHistory">
            <text>Press to start History Trivia</text>
        </touchable-opacity>
        <touchable-opacity class='button' :on-press="startFunFacts">
            <text>Press to start Fun Facts Trivia</text>
        </touchable-opacity>
        <touchable-opacity class='button' :on-press="startSports">
            <text>Press to start Sports Trivia</text>
        </touchable-opacity>
    </view>
</template>

<script>
export default {
    props: {
        navigation: {
            type: Object
        }
    },
    methods: {
        startHistory: function() {
            this.navigation.navigate('History');
        },
        startGeneralKnowledge: function() {
            this.navigation.navigate('GeneralKnowledge');
        },
        startFunFacts: function() {
            this.navigation.navigate('FunFacts');
        },
        startSports: function() {
            this.navigation.navigate('Sports');
        }
    }
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