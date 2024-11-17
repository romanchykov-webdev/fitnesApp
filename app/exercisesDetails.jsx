import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useLocalSearchParams} from "expo-router";
import ButtonBack from "../components/ButtonBack";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Image} from 'expo-image'
import {shadowBoxBlack} from "../hooks";
import {ScrollView} from "react-native-virtualized-view";

import Animated, {FadeInDown} from 'react-native-reanimated';

const ExercisesDetails = () => {

    const {item}=useLocalSearchParams()

    const parseItem=item ? JSON.parse(item) : {};
    console.log(item)

  return (
    <View className="flex-1">
        <View
            className="absolute z-10 top-[40] left-[20] w-[50] h-[50] border-[1px] border-neutral-700 bg-white rounded-full justify-center items-center ">
            <ButtonBack/>
        </View>

    {/*    image*/}
        <View  >
            <Image
                source={{uri:parseItem?.gifUrl}}
                style={[{width:wp(100),height:hp(45),borderBottomLeftRadius:40,borderBottomRightRadius:40},shadowBoxBlack]}
                contentFit='cover'
                transition={1000}

            />


        </View>

        {/*details*/}
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:60}}
            className=" mx-4 gep-y-2 pt-5"
        >
            <Animated.Text
                entering={FadeInDown.duration(400).delay(200).springify()}
                // numberOfLines={1}
                style={{fontSize:hp(2.7)}}
                className="text-neutral-800 tracking-wide mb-5"
            >
                {parseItem?.name.charAt(0).toUpperCase() + parseItem.name.slice(1)}
            </Animated.Text>

            {/**/}
            <Animated.Text
                entering={FadeInDown.duration(400).delay(300).springify()}
                style={{fontSize:hp(2)}} className="text-neutral-700 tracking-wide mb-2">
                Equipment :
                <Text className="font-bold text-neutral-800 capitalize"> {parseItem?.equipment}</Text>
            </Animated.Text>

        {/* secondaryMuscles   */}
            <Animated.Text
                entering={FadeInDown.duration(400).delay(400).springify()}
                style={{fontSize:hp(2)}} className="text-neutral-700 tracking-wide mb-2">
                Secondary Muscles :
                <Text
                    style={{fontSize:hp(1.2)}}
                    className="font-bold text-neutral-800 capitalize"> {parseItem?.secondaryMuscles?.join(', ')}</Text>
            </Animated.Text>

            {/* target   */}
            <Animated.Text
                entering={FadeInDown.duration(400).delay(500).springify()}
                style={{fontSize:hp(2)}} className="text-neutral-700 tracking-wide mb-2">
                Target :
                <Text
                    style={{fontSize:hp(1.2)}}
                    className="font-bold text-neutral-800 capitalize"> {parseItem?.target}</Text>
            </Animated.Text>

        {/* instructions   */}
            <Animated.Text
                entering={FadeInDown.duration(400).delay(600).springify()}
                style={{fontSize:hp(3)}}
                  className="text-neutral-800 tracking-wide  mb-2">
                Instructions
            </Animated.Text>

            {
                parseItem?.instructions?.map((instruction,index)=>{
                    return(
                        <Animated.Text
                            entering={FadeInDown.duration(400).delay((index+6)*200).springify()}
                            key={index}
                            style={{fontSize:hp(1.7)}}
                            className="text-neutral-800 tracking-wide  mb-2"
                        >
                            {index+1}) {instruction}
                        </Animated.Text>
                    )
                })
            }
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({})

export default ExercisesDetails;
