
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '@screens_SplashScreen';
const {Navigator, Screen} = createNativeStackNavigator();
function App(props) {
    const AppNavigator = () => (
        <>
          <StatusBar
            animated={true}
            backgroundColor={Themes.linear_gradient_end}
            barStyle={'light-content'}
          />
          <Navigator screenOptions={{headerShown: false}} initialRouteName="Splash">           
            <Screen name="Splash" component={SplashScreen} header="null" />             
          </Navigator>
        </>
      );
   
    useEffect(() => {
      console.log("App.js")
    }, []);
    return (
     
        <NavigationContainer
          >
          <AppNavigator />
        </NavigationContainer>
     
    );
  }
  export default App;