import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Video } from "expo-av";

const VideoPlayer = ({ episode }) => {
  const [status, setStatus] = useState({});
  const video = useRef(null);

  useEffect(() => {
    if (!video) {
      return;
    }
    (async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync({ uri: episode.video }, {}, false);
    })();
  }, [episode]);

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        posterSource={{
          uri: episode.poster,
        }}
        usePoster={true}
        posterStyle={{ resizeMode: "cover" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 200,
    aspectRatio: 16 / 9,
  },
});
export default VideoPlayer;
