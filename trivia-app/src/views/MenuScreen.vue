<template>
    <div>
        <h1>Texas Tech Trivia Game</h1>
        <router-link to="/generalknowledge" tag="button">General Knowledge</router-link>
        <router-link to="/history" tag="button">History</router-link>
        <router-link to="/funfacts" tag="button">Fun Facts</router-link>
        <router-link to="/sports" tag="button">Sports</router-link>
        <button>Stats</button>
    </div>
</template>

<script>
export default {
    
    
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