import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CommonActions } from '@react-navigation/native';

//Screens
import HomeScreen from '@pages/HomeScreen';
import SettingsScreen from '@pages/SettingScreen';
import DetailsScreen from '@pages/DetailScreen';
import ApiScreen from '@pages/ApiScreen';
import DbServerScreen from '@pages/DbServerScreen';

// Screen names

const homeName = 'Home';
const detailsName = 'Detail';
const settingsName = 'Setting';
const apiName = 'api';
const dbName = 'DBServer';

const Stack = createBottomTabNavigator();

export default function MainContainer() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={homeName}
				screenOptions={({route}) => ({
					tabBarIcon: ({focused, color, size}) => {
						let iconName;
						let rn = route.name;

						if (rn === homeName) {
							iconName = focused ? 'home' : 'home-outline';
						} else if (rn === detailsName) {
							iconName = focused ? 'list' : 'list-outline';
						} else if (rn === settingsName) {
							iconName = focused ? 'settings' : 'settings-outline';
						} else if (rn === apiName) {
							iconName = focused ? 'list' : 'list-outline';
						} else if (rn === dbName) {
							iconName = focused ? 'list' : 'list-outline';
						}
						return <Ionicons name={iconName} size={size} color={color} />;
					},
				})}>
				<Stack.Screen name={homeName} component={HomeScreen} />

				<Stack.Screen name={detailsName} component={DetailsScreen} />

				<Stack.Screen name={settingsName} component={SettingsScreen} />

				<Stack.Screen name={apiName} component={ApiScreen} />

				<Stack.Screen component={DbServerScreen} onPress={() => NavigationContainer.dispatch(
					commonActions.navigate({
						name: dbName
					})
				)} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
