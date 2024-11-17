import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList, Image, Animated, ActivityIndicator} from 'react-native';
import {sliderImages} from '../constants'
import {shadowBox, shadowBoxBlack} from "../hooks";
import {sliderImagesArray} from "../constants/sliderImg";

const {width, height} = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;
// const ITEM_HEIGHT = 200;

const ImageSlider = () => {



    const scrollX = React.useRef(new Animated.Value(0)).current



    // console.log('sliderImagesArray:', sliderImagesArray);
    return (
        <Animated.FlatList
            // data={sliderImages}
            data={sliderImagesArray}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: true}
            )}
            renderItem={({item, index}) => {


                const inputRange = [
                    (index - 1) * width,
                    index * width,
                    (index + 1) * width
                ]

                // for translate x
                const translateX = scrollX.interpolate({
                    inputRange,
                    outputRange: [-width * .7, 0, width * .7]
                })

                // for scale
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [1, 1.5, 1]
                })

                return (


                                <View
                        style={[{width, justifyContent: 'center', alignItems: 'center', paddingVertical: 15}, shadowBoxBlack]}>
                        <View
                            style={{
                                width: ITEM_WIDTH,
                                height: 200,
                                overflow: 'hidden',
                                alignItems: 'center',
                                borderRadius: 18,
                                borderWidth: 5,
                                borderColor: 'white',
                                // box shadow
                                shadowColor: '#000',
                                shadowOffset: {width: 0, height: 0},
                                shadowOpacity: 1,
                                shadowRadius: 20,
                                elevation: 5,
                            }}
                        >
                          <Animated.Image
                                        source={item}
                                        // onLoad={() => handleImageLoad(index)}
                                        style={{
                                            // borderRadius: '30px',
                                            width: ITEM_WIDTH * 1.4,
                                            height: 200,
                                            resizeMode: 'cover',
                                            transform: [

                                                {translateX},
                                                {scale}

                                            ]
                                        }}


                                    />
                        </View>
                    </View>



                )
            }}
        />
    );
};

const styles = StyleSheet.create({})

export default ImageSlider;
