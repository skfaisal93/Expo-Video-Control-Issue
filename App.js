import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

export default function App() {
  const player = useVideoPlayer(
      'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
      (player) => {
        player.loop = false;
        player.staysActiveInBackground = true;
        player.showNowPlayingNotification = true;
        player.subtitleTrack = null;
        player.timeUpdateEventInterval = 4;
        player.preservesPitch = true;
        player.play();
      }
  );

  return (
      <View style={styles.container}>
        <VideoView
            player={player}
            nativeControls
            allowsFullscreen
            allowsPictureInPicture
            startsPictureInPictureAutomatically
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').width * (9 / 16),
            }}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
