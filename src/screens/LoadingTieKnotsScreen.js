import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {View, ImageBackground, Dimensions, TouchableOpacity, Text} from 'react-native';
import * as Storage from '../AppManager/Storage';

const LoadingAdmiralTieKnotsScreen = () => {
  const navigation = useNavigation();
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    let getSave = async () => {
      await Storage.get('skip').then((data) => {
        console.log(data);
        if (data) navigation.navigate('Home');
      });
    };
    getSave();
  }, []);

  const SkipPreview = async () => {
    await Storage.save('skip', 1);
    navigation.navigate('Home');
  };

  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    }}>
      <ImageBackground
        source={require('../assets/images/loader3.png')}
        style={{
          width: dimensions.width,
          position: 'absolute',
          alignSelf: 'center',
          height: dimensions.height,
        }}
        resizeMode='stretch'
      />

      <TouchableOpacity style={{position: 'absolute', bottom: 70}} onPress={SkipPreview}>
        <View style={{width: 300, height: 70, backgroundColor: '#F1B900', borderRadius: 15, shadowOpacity: 0.5, shadowRadius: 10, shadowOffset: {width: 0, height: 4}, shadowColor: 'white', justifyContent: 'center', alignItems: 'center', opacity: 0.8}}>
          <Text style={{fontSize: 20, fontWeight: '50', fontFamily: 'SFProText-Regular'}}>Get Started</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoadingAdmiralTieKnotsScreen;
