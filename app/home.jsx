import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, Platform, ActivityIndicator} from 'react-native';
import {StatusBar} from "expo-status-bar";

import Ionicons from 'react-native-vector-icons/Ionicons';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";

const platform = Platform === 'ios' ? 20 : 50

export default function Home() {

    // for loading
    // Для хранения состояния загрузки изображений
    const [loadingImages, setLoadingImages] = useState(true);
    const [loadedComponents, setLoadedComponents] = useState({
        imageSlider: false,
        bodyParts: false,
    });

// Функция для обновления состояния загрузки в дочерних компонентах
    const handleImageLoaded = (componentName) => {
        setLoadedComponents((prevState) => ({
            ...prevState,
            [componentName]: true,
        }));
    };

// Проверка, завершена ли загрузка всех изображений
    useEffect(() => {
        if (loadedComponents.imageSlider && loadedComponents.bodyParts) {
            setLoadingImages(false);
        }
    }, [loadedComponents]);

    // for loading

    return (
        <SafeAreaView
            style={{paddingTop: platform}}
            className="flex-1 bg-white flex gap-5" edges={['top']}>
            <StatusBar style='light'/>


            {/*    punchline and avatar */}
            <View className="flex-row justify-between items-center mx-5">

                <View className="space-y-2">
                    <Text
                        style={{fontSize: hp(4.5)}}
                        className="font-bold tracking-wide text-neutral-700"
                    >
                        READY TO
                    </Text>

                    <Text
                        style={{fontSize: hp(4.5)}}
                        className="font-bold tracking-wide text-rose-500"
                    >
                        WORKOUT
                    </Text>
                </View>

                {/*avatar*/}
                <View className="flex justify-center items-center gap-2">
                    <Image
                        source={require('../assets/img/avatar.png')}
                        style={{width: hp(6), height: hp(6)}}
                        className="rounded-full"
                    />

                    {/*    icon*/}
                    <View
                        style={{width: hp(5), height: hp(5)}}
                        className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300">
                        <Ionicons name="notifications" size={hp(3)} color="gray"/>
                    </View>
                </View>

            </View>


            <View>
                <ImageSlider/>
            </View>

            {/*    body parts list*/}
            <View style={{flex: 1}}>
                <BodyParts/>
            </View>


        </SafeAreaView>
    )
        ;
};

const styles = StyleSheet.create({})


