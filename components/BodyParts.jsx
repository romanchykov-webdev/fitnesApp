import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {bodyParts} from "../constants";
import BodyPartCard from "./BodyPartCard";



const BodyParts = () => {



    return (
        <View className="mx-4">
            <Text style={{fontSize: hp(3)}}
                  className="font-semibold text-neutral-700"
            >Exercises</Text>

            {/*    flat list*/}
            <FlatList
                data={bodyParts}
                numColumns={2}
                keyExtractor={item=>item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:50,paddingTop:20}}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                renderItem={ ({item, index}) => <BodyPartCard item={item} index={index} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({})

export default BodyParts;
