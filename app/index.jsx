import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {LinearGradient} from 'expo-linear-gradient';
import {StatusBar} from "expo-status-bar";
import {shadowBox} from "../hooks";

import Animated, {
    FadeInUp, FadeInRight, FadeInDown,
} from 'react-native-reanimated';
import {useRouter} from "expo-router";

const Index = () => {

    const router=useRouter();

    return (
        <View className="flex-1 flex justify-end">
            <StatusBar style='light'/>


            {/*image for background welcome page*/}
            <Image
                className="h-full w-full absolute"
                source={require('../assets/img/welcome.png')}
            />

            {/*    Gradient*/}
                <LinearGradient
                    colors={['transparent', '#18181b']}
                    style={{width: wp(100), height: hp(70)}}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 0.8}}
                >
                    {/* Footer at the bottom */}
                    <View className="absolute bottom-12 left-0 right-0 items-center">
                        <Animated.Text
                            entering={FadeInUp.delay(100).springify()}
                            style={{fontSize:hp(4)}} className=" font-bold tracking-wide text-white">Best
                            <Text>{'  '}</Text>
                            <Text
                                className="text-rose-500">Workouts
                            </Text>
                        </Animated.Text>

                        <Animated.Text
                            entering={FadeInRight.delay(300).springify()}
                            style={{fontSize:hp(4)}} className=" font-bold tracking-wide text-white">
                            For you
                        </Animated.Text>

                    {/*    Button*/}
                        <Animated.View
                            entering={FadeInDown.delay(500).springify()}
                            className="mt-12 pb-12  p-5">

                            <TouchableOpacity
                                onPress={()=>router.push('home')}
                                style={[{ height: hp(7), width: wp(70) }, shadowBox]}
                                className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200 "
                            >
                                <Text style={{fontSize:hp(3)}} className="text-white font-bold tracking-widest">Get Started</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </LinearGradient>



        </View>
    );
};

const styles = StyleSheet.create({})

export default Index;
