import React from 'react';
import { Provider } from 'react-redux';
import {  store } from '../store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from '../navigation/MainTabs';

import ChallengeDetailsScreen from '../screens/Challenge/ChallengeDetailsScreen';
import ChallengeSuccessScreen from '../screens/Challenge/ChallengeSuccessScreen';
import CreateChallengeScreen from '../screens/Challenge/CreateChallengeScreen';
import CreateChallengeStep2Screen from '../screens/Challenge/CreateChallengeStep2Screen';
import AddChallengeSuccessScreen from '../screens/Challenge/AddChallengeSuccessScreen';
import CrownChallengesScreen from '../screens/Challenge/CrownChallengesScreen';

import QuizMainScreen from '../screens/Quiz/QuizMainScreen';
import GameOverScreen from '../screens/Quiz/GameOverScreen';
import QuizSuccessScreen from '../screens/Quiz/QuizSuccessScreen';

import SettingsScreen from '../screens/SettingsScreen';
import QuizQuestionScreen from '../screens/Quiz/QuizQuestionScreen';
import MainSportScreen from '../screens/Sport/MainSportScreen';
import AddTrainingScreen from '../screens/Sport/AddTrainingScreen';
import AddTrainingStep2Screen from '../screens/Sport/AddTrainingStep2Screen';
import AddTrainingSuccessScreen from '../screens/Sport/AddTrainingSuccessScreen';
import TrainingDetailsScreen from '../screens/Sport/TrainingDetailsScreen';

const Stack = createNativeStackNavigator();

export default function MainRoot() {
    return (
        <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="MainTabs" component={MainTabs} />

                    <Stack.Screen name="ChallengeDetails" component={ChallengeDetailsScreen} />
                    <Stack.Screen name="ChallengeSuccess" component={ChallengeSuccessScreen} />
                    <Stack.Screen name="CreateChallenge" component={CreateChallengeScreen} />
                    <Stack.Screen name="CreateChallengeStep2" component={CreateChallengeStep2Screen} />
                    <Stack.Screen name="AddChallengeSuccess" component={AddChallengeSuccessScreen} />
                    <Stack.Screen name="CrownChallenges" component={CrownChallengesScreen} />

                    <Stack.Screen name="QuizMain" component={QuizMainScreen} />
                    <Stack.Screen name="QuizQuestion" component={QuizQuestionScreen} />
                    <Stack.Screen name="QuizSuccess" component={QuizSuccessScreen} />
                    <Stack.Screen name="GameOver" component={GameOverScreen} />

                    <Stack.Screen name="MainSport" component={MainSportScreen} />
                    <Stack.Screen name="TrainingDetails" component={TrainingDetailsScreen} />
                    <Stack.Screen name="AddTraining" component={AddTrainingScreen} />
                    <Stack.Screen name="AddTrainingStep2" component={AddTrainingStep2Screen} />
                    <Stack.Screen name="AddTrainingSuccess" component={AddTrainingSuccessScreen} />

                    <Stack.Screen name="Settings" component={SettingsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
            {/* </PersistGate> */}
        </Provider>
    );
}
