import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import {useRouter} from "expo-router";

const ButtonBack = () => {
    const router =useRouter();

  return (
    <TouchableOpacity
    onPress={()=>router.back()}
    >
        <Entypo name="back" size={hp(3)} color="gray" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({})

export default ButtonBack;
