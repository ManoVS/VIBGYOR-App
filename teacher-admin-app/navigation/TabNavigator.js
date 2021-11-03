import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

import ParentScreen from '../screens/ParentScreen';
import TeacherScreen from '../screens/TeacherScreen';
import StudentScreen from '../screens/StudentScreen';
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Teacher') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Parent') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'Student') {
            iconName = focused ? 'school' : 'school-outline';
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(25)}
              color={color}
              style={styles.icons}
            />
          );
        },
      })}
      activeColor={'#ee8249'}
      inactiveColor={'gray'}>
      <Tab.Screen name="Teacher" component={TeacherScreen} />
      <Tab.Screen name="Parent" component={ParentScreen} />
      <Tab.Screen name="Student" component={StudentScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: '#2f345d',
    height: '8%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
  },
});

export default BottomTabNavigator;
