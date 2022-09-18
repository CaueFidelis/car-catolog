import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { TabBarIcons } from '../components/TabBarIcon';
import { Catalog } from '../screens/Catalog';
import { MyCars } from '../screens/MyCars';
import { colorPalette } from '../utils/colorPalette';
import { IconsNameProps } from './models';

const { Navigator, Screen } = createBottomTabNavigator();

const styles = StyleSheet.create({
  bottomTab: {
    height: verticalScale(85),
    paddingTop: verticalScale(15),
    paddingBottom: verticalScale(15),
    alignItems: 'center',
    backgroundColor: colorPalette.mediumRed,
  },
});

export function Routes() {
  const iconsName: IconsNameProps = {
    Catálogo: 'menu-outline',
    MeusCarros: 'car-sport-outline',
  };
  const iconsNameOnFocus: IconsNameProps = {
    Catálogo: 'menu-outline',
    MeusCarros: 'car-sport',
  };

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Catálogo"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarHideKeyboard: true,
          tabBarIcon: ({ focused }) => (
            <TabBarIcons
              routeName={route.name.replace(/ /g, '')}
              onFocus={focused}
              iconsName={iconsName}
              iconsNameOnFocus={iconsNameOnFocus}
            />
          ),
          tabBarActiveTintColor: colorPalette.paleGray,
          tabBarInactiveTintColor: colorPalette.darkRed,
          tabBarLabelStyle: { fontSize: scale(12), fontWeight: 'bold' },
          tabBarStyle: styles.bottomTab,
        })}
      >
        <Screen name="Catálogo" component={Catalog} />
        <Screen name="Meus Carros" component={MyCars} />
      </Navigator>
    </NavigationContainer>
  );
}
