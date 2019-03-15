import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';

const AppNavigator = createStackNavigator({
    Main,
},{
    defaultNavigationOptions: {
        headerStyle: {
        backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
    }
);


const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;