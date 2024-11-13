import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView,Image} from 'react-native';
import ButtonBack from "../components/ButtonBack";
import {useLocalSearchParams} from "expo-router";
import {fetchExercisesByBodyPart} from "../api/exerciseDB";
import {demoExercises} from '../constants'

// response
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StatusBar} from "expo-status-bar";
import {LinearGradient} from "expo-linear-gradient";

const Exercises = () => {

    const item =useLocalSearchParams()

    const [exercises, setExercises] = useState([])

    // console.log('item',item)


    useEffect(() => {

        // if(item)getExercises(item?.name)

    }, []);

    const getExercises=async (bodyPart) => {
        let data = await fetchExercisesByBodyPart(bodyPart);
        console.log('data',data);
    }


  return (
    <ScrollView >
        <StatusBar style='light'/>

        <View className="relative ">
            <LinearGradient
                colors={['transparent', '#18181b']}
                    style={{ position: 'absolute',  zIndex:10, width:'100%',height:'100%',borderRadius: 35}}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 0.8}}
            />
            <Image
                source={item.image}
                style={{width:wp(100),height:hp(45)}}
                className="rounded-b-[45]"

            />

        </View>
        <View className="absolute top-[60] left-[20] w-[50] h-[50] border-1 border-neutral-300 bg-white rounded-full justify-center items-center ">

            <ButtonBack/>
        </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({})

export default Exercises;
