<template>
  <main-navigation />
</template>

<script>
import { StackNavigator } from 'vue-native-router';
import MenuScreen from './screens/MenuScreen.vue';
import FunFactsScreen from './screens/FunFactsScreen.vue';
import GeneralKnowledgeScreen from './screens/GeneralKnowledgeScreen.vue';
import HistoryScreen from './screens/HistoryScreen.vue';
import SportsScreen from './screens/SportsScreen.vue';

const MainNavigation = StackNavigator(
    {
        Menu: MenuScreen,
        FunFacts: FunFactsScreen,
        GeneralKnowledge: GeneralKnowledgeScreen,
        History: HistoryScreen,
        Sports: SportsScreen
    },
    {
        initialRouteName: 'Menu'
    }
)

export default {
  components: {
    MainNavigation
  }
}
</script>