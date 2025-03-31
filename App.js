import { View, Text, Button } from "react-native";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";

const AUDIO_URL = "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3";
export default function App() {
  const player = useAudioPlayer(AUDIO_URL);
  const { currentTime, playing } = useAudioPlayerStatus(player);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: 200 }}>
      <View>
        <Text>Audio Player</Text>
        <Text>Current Time: {currentTime.toFixed(2)}</Text>
      </View>
      <Button title={playing ? "⏸️" : "▶️"} color="transparent" onPress={() => playing ? player.pause() : player.play()} />
    </View>
  )
}
