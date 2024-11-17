import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {LinearGradient} from "expo-linear-gradient";
import {shadowBox, shadowBoxBlack} from "../hooks";
import {useRouter} from "expo-router";

import Animated, {FadeInDown} from 'react-native-reanimated';

const BodyPartCard = ({item, index}) => {

    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const loadingImage = () => {
        console.log('is loadong')
        setLoading(false)
    }


    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
            <TouchableOpacity
                onPress={() => router.push({pathname: '/exercises', params: item})}
                style={[{width: wp(44), height: wp(52)}, shadowBoxBlack]}
                className="flex justify-end mb-5"
            >

                <Image
                    source={item.image}
                    resizeMode='cover'
                    style={{width: '100%', height: '100%'}}
                    className="rounded-[35] absolute"
                    onLoad={loadingImage}
                />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    style={[{width: wp(44), height: hp(15), position: 'absolute', bottom: 0, borderRadius: 35}]}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}
                />
                <Text
                    style={{fontSize: hp(2.3)}}
                    className='text-white font-semibold text-center tracking-wide pb-5 capitalize'
                >
                    {item?.name}
                </Text>

            </TouchableOpacity>

            {
                loading &&
                <View
                    style={[{width: wp(44), height: wp(52), borderRadius: 35}, shadowBoxBlack]}
                    className="flex  mb-5 border-[1px] border-neutral-500 justify-center "
                >
                    <ActivityIndicator size={30} color="grey"/>
                </View>

            }

        </Animated.View>
    );
};


const styles = StyleSheet.create({});

export default BodyPartCard;
