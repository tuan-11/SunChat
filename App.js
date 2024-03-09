import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import BottomTabNavigation from './navigations/BottomTabNavigation';
import Onboarding from './components/Onboarding';
import LoginScreen from './screens/LoginScreen';
import ResetPasswordScreen from './screens/ForgotPassword/ResetPasswordScreen';
import RetrievalPasswordScreen from './screens/ForgotPassword/RetrievalPasswordScreen';
import EnterCodeScreen from './screens/ForgotPassword/EnterCodeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoutName='SplashScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        <Stack.Screen name="RetrievalPasswordScreen" component={RetrievalPasswordScreen} />
        <Stack.Screen name="EnterCodeScreen" component={EnterCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
