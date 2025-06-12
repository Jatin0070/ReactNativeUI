import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TabsComp from "../components/TabsComp";
import MeditationCard from "../components/MeditationCard";
import { dummyData } from "../Data/data";

const HomeScreen = () => {
  return (
    <View
      style={{
        paddingTop: vs(50),
        paddingHorizontal: s(16),
      }}
    >
      <Text
        style={{
          fontWeight: "semibold",
          fontSize: s(20),
          marginBottom: vs(6),
        }}
      >
        Meditation
      </Text>
      <Text
        style={{
          fontSize: s(14),
          marginBottom: vs(16),
        }}
      >
        Do meditation everyday
      </Text>
      <TabsComp />
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MeditationCard
            image={item.image}
            title={item.title}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: vs(16),
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          paddingBottom: vs(150),
          paddingTop: vs(24),
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
