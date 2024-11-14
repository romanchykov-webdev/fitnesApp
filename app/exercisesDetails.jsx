import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useLocalSearchParams} from "expo-router";
import ButtonBack from "../components/ButtonBack";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Image} from 'expo-image'

const ExercisesDetails = () => {

    const {item}=useLocalSearchParams()

    const parseItem=item ? JSON.parse(item) : {};
    console.log(item)

  return (
    <View className="flex-1">
        <View
            className="absolute z-10 top-[60] left-[20] w-[50] h-[50] border-[1px] border-neutral-700 bg-white rounded-full justify-center items-center ">
            <ButtonBack/>
        </View>

    {/*    image*/}
        <View  >
            <Image
                source={{uri:parseItem?.gifUrl}}
                style={{width:wp(100),height:hp(45)}}
                contentFit='cover'
                transition={1000}
            />
            <Text>{item.bodyPart}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({})

export default ExercisesDetails;
