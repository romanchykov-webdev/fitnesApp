
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
      />
  );
};

const styles = StyleSheet.create({})

export default RootLayout;
