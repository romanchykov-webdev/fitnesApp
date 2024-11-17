import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Image} from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {LinearGradient} from "expo-linear-gradient";
import {useRouter} from "expo-router";
import Animated, {FadeInDown} from 'react-native-reanimated';
const ExercisesCard = ({item, index}) => {

    const router=useRouter();
    // console.log('item',item)
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
            <TouchableOpacity
                onPress={()=>router.push({
                    pathname:'/exercisesDetails',
                    params: {item: JSON.stringify(item)}
                })}
                className="flex py-3 gap-y-2">
                <View className="bg-neutral-200 shadow rounded-[25px] items-center">
                    <LinearGradient
                        colors={['transparent', '#18181b']}
                        style={{position: 'absolute', zIndex: 10, width: '100%', height: '100%', borderRadius: 25}}
                        start={{x: 0.5, y: 0}}
                        end={{x: 0.5, y: 1.5}}
                    />
                    <Image
                        source={{uri: item?.gifUrl}}
                        // placeholder={{ blurhash }}
                        style={{width:wp(44),height:wp(52),borderRadius:25}}
                        contentFit="cover"
                        transition={1000}
                    />
                    <Text
                        className="absolute z-10 bottom-5 text-center  text-white font-semibold tracking-wide"
                        numberOfLines={1} 
                        ellipsizeMode="tail" 
                        style={{ width: wp(30) }}
                    >
                        {item?.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </Text>
                </View>

            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({})

export default ExercisesCard;
