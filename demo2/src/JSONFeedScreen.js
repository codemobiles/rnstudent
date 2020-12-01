import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {YouTubeStandaloneAndroid} from 'react-native-youtube';

export default function JSONFeedScreen() {
  const [dataArray, setDataArray] = React.useState([]);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsRefreshing(true);
      setDataArray([]);

      const regUsername = 'admin';
      const regPassword = 'password';
      const data = `username=${regUsername}&password=${regPassword}&type=foods`;
      const url = 'https://codemobiles.com/adhoc/youtubes/index_new.php';
      const result = await axios.post(url, data);

      setIsRefreshing(false);
      setDataArray(result.data.youtubes);
    } catch (e) {
      alert('Fetching failed');
    }
  };

  const renderRow = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.listCard}
        onPress={() => {
          // props.navigation.navigate("Youtube", {item})
          YouTubeStandaloneAndroid.playVideo({
            apiKey: 'YOUR_API_KEY', // Your YouTube Developer API Key
            videoId: item.id, // YouTube video ID
            autoplay: true, // Autoplay the video
            startTime: 120, // Starting point of video (in seconds)
          })
            .then(() => console.log('Standalone Player Exited'))
            .catch((errorMessage) => console.error(errorMessage));
        }}>
        {/* Header section */}
        <View style={styles.listCardView}>
          <Image source={{uri: item.avatar_image}} style={styles.listAvatar} />

          {/* Title and Subtitle */}
          <View style={styles.listTitleSubtitleContainer}>
            <Text style={styles.listTitle}>{item.title}</Text>
            <Text style={styles.listSubTitle}>{item.subtitle}</Text>
          </View>
        </View>

        {/* Big Image section */}
        <Image
          source={{uri: item.youtube_image}}
          style={styles.listYoutubeImage}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/img/bg.png')}>
      <FlatList
        onRefresh={loadData}
        refreshing={isRefreshing}
        data={dataArray}
        renderItem={renderRow}
        keyExtractor={(item) => item.id}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list_header: {
    width: '100%',
    height: 100,
  },
  listCard: {
    overflow: 'hidden',
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 0,
  },
  listCardView: {
    flexDirection: 'row',
    marginBottom: 16,
    height: 45,
    alignItems: 'center',
  },
  listAvatar: {
    width: 45,
    height: '100%',
    marginRight: 16,
  },
  listTitleSubtitleContainer: {
    flexDirection: 'column',
    marginRight: 16,
    flex: 1,
  },
  listTitle: {
    fontWeight: '700',
  },
  listSubTitle: {
    fontWeight: '100',
  },
  listYoutubeImage: {
    width: '100%',
    height: 190,
  },
});
