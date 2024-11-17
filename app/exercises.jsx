import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet,  Image} from 'react-native';
import ButtonBack from "../components/ButtonBack";
import {useLocalSearchParams} from "expo-router";
import {fetchExercisesByBodyPart} from "../api/exerciseDB";
import {demoExercises} from '../constants'

import {ScrollView} from 'react-native-virtualized-view'

// response
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StatusBar} from "expo-status-bar";
import {LinearGradient} from "expo-linear-gradient";
import ExercisesList from "../components/ExercisesList";

const Exercises = () => {

    const item = useLocalSearchParams()


    const [exercises, setExercises] = useState(demoExercises)

    // console.log('item',item)


    useEffect(() => {

        // if(item)getExercises(item?.name)

    }, []);

    const getExercises = async (bodyPart) => {
        let data = await fetchExercisesByBodyPart(bodyPart);
        console.log('data', data);
    }


    return (
        <ScrollView>
            <StatusBar style='light'/>

            {/*top image*/}
            <View className="relative ">
                <LinearGradient
                    colors={['transparent', '#18181b']}
                    style={{position: 'absolute', zIndex: 10, width: '100%', height: '100%', borderRadius: 35}}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}
                />
                <Image
                    source={item.image}
                    style={{width: wp(100), height: hp(45)}}
                    className="rounded-b-[45]"
                    resizeMode='cover'

                />

                <View
                    className="absolute z-10 top-[60] left-[20] w-[50] h-[50] border-1 border-neutral-300 bg-white rounded-full justify-center items-center ">
                    <ButtonBack/>
                </View>
            </View>
            
             {/*    exercises*/}
            <View className="mx-4 gap-3 mt-4">
                <Text style={{fontSize:hp(3)}} className="capitalize font-semibold text-neutral-700">
                    {item.name} exercises
                </Text>

                {/*    ExercisesList*/}
                <View>
                    <ExercisesList data={exercises}/>
                </View>
            </View>


        </ScrollView>
    );
};

const styles = StyleSheet.create({})

export default Exercises;
