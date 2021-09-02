import React, { useState } from "react";
import movie from "../assets/data/movie";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons, Entypo, AntDesign } from "@expo/vector-icons";
import { EpisodeItem, VideoPlayer } from "../components";

const firstEpisode = movie.seasons.items[0].episodes.items[0];

const firstSeason = movie.seasons.items[0];

const MovieDetailsScreen = ({ route }) => {
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  const [currentEpisode, setCurrentEpisode] = useState(
    firstSeason.episodes.items[0]
  );
  const seasonNames = movie.seasons.items.map((season) => season.name);
  return (
    <View style={styles.container}>
      <VideoPlayer episode={currentEpisode} />
      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => (
          <EpisodeItem episode={item} onPress={setCurrentEpisode} />
        )}
        ListHeaderComponent={() => (
          <>
            <View style={{ padding: 12 }}>
              <Text style={styles.title}>{movie.title}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "80%",
                  paddingVertical: 3,
                }}>
                <Text style={styles.match}>90% match</Text>
                <Text style={styles.year}>{movie.year}</Text>
                <View style={styles.ageContainer}>
                  <Text style={styles.age}>12 +</Text>
                </View>
                <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                <MaterialIcons name="hd" size={24} color="white" />
              </View>
            </View>
            <Pressable style={styles.playButton}>
              <Text style={styles.playButtonText}>
                <Entypo name="controller-play" size={22} color="black" />
                Play
              </Text>
            </Pressable>
            <Pressable style={styles.downloadButton}>
              <Text style={styles.downloadButtonText}>
                <AntDesign name="download" size={24} color="white" />
                {"   "}
                Download
              </Text>
            </Pressable>

            <Text style={styles.plot}>{movie.plot}</Text>
            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text style={styles.year}>Creator: {movie.creator}</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "60%",
                marginVertical: 4,
                marginHorizontal: 20,
              }}>
              <View style={{ alignItems: "center" }}>
                <AntDesign name="plus" size={24} color="white" />
                <Text style={{ color: "white" }}>My List</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <AntDesign name="like2" size={24} color="white" />
                <Text style={{ color: "white" }}>Rate</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Entypo name="share" size={24} color="white" />
                <Text style={{ color: "white" }}>Share</Text>
              </View>
            </View>
            <Picker
              style={{
                color: "white",
                width: 120,
                marginVertical: 10,
                fontWeight: "bold",
              }}
              selectedValue={currentSeason.name}
              dropdownIconColor={"white"}
              onValueChange={(itemValue, itemIndex) =>
                setCurrentSeason(movie.seasons.items[itemIndex])
              }>
              {seasonNames.map((name) => (
                <Picker.Item label={name} value={name} key={name} />
              ))}
            </Picker>
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    color: "white",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  match: {
    color: "#507332",
    fontWeight: "bold",
  },
  year: {
    color: "#85837f",
  },
  ageContainer: {
    backgroundColor: "#e0a52f",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    padding: 4,
  },
  age: {
    color: "black",
    fontWeight: "bold",
  },
  playButton: {
    backgroundColor: "white",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
  },
  downloadButton: {
    backgroundColor: "#2b2b2b",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    marginTop: 8,
  },
  playButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  downloadButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  plot: {
    color: "white",
    marginVertical: 12,
    fontWeight: "bold",
    lineHeight: 17,
  },
});

export default MovieDetailsScreen;
