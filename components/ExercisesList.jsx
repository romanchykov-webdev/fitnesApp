import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import {bodyParts} from "../constants";
import BodyPartCard from "./BodyPartCard";
import ExercisesCard from "./ExercisesCard";

const ExercisesList = ({data}) => {
    // console.log('data',data)
  return (
      <View >

          {/*    flat list*/}
          <FlatList
              data={data}
              numColumns={2}
              keyExtractor={item=>item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom:60,paddingTop:20}}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              renderItem={ ({item, index}) => <ExercisesCard item={item} index={index} />}
          />
      </View>
  );
};

const styles = StyleSheet.create({})

export default ExercisesList;
