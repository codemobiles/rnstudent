import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {YouTubeStandaloneAndroid} from 'react-native-youtube';
import {useSelector, useDispatch} from 'react-redux';
import * as jsonActions from './actions/json.action';

export default function JSONFeedScreen() {
  const homeReducer = useSelector((state) => state.homeReducer);
  const jsonReducer = useSelector((state) => state.jsonReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // loadData();
    dispatch(jsonActions.loadData());
  }, []);

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

        {index % 2 == 0 && (
          <Text
            style={{
              backgroundColor: 'black',
              color: 'yellow',
              width: 150,
              height: 100,
              position: 'absolute',
              top: 270 / 2 - 50,
              left: Dimensions.get('screen').width / 2 - 75 - 20,
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: 30,
              borderRadius: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            หมดแล้ว
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/img/bg.png')}>
      <Text>{homeReducer.onlineUsername}</Text>
      <FlatList
        onRefresh={
          jsonReducer.dataArray.lenght > 0 && dispatch(jsonActions.loadData())
        }
        refreshing={jsonReducer.isRefreshing}
        data={jsonReducer.dataArray}
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
