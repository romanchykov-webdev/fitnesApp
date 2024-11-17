
import "../global.css";
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Stack, useRouter} from "expo-router";

const RootLayout = () => {
  return (
      <Stack
      screenOptions={{
          headerShown: false,
      }}
      >
          <Stack.Screen
              name='exercises'
              options={{presentation:'fullScreenModal'}}
          />
          <Stack.Screen
              name='exercisesDetails'
              options={{presentation:'modal'}}
          />
      </Stack>
  );
};

const styles = StyleSheet.create({})

export default RootLayout;
