import React, {useRef, useEffect, useMemo} from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackgroundImage} from '../helper/GetIcons';
import Svg, {Circle} from 'react-native-svg';

const Pile = ({color, cell, player, onPress, pieceId}) => {
  const pileImage = BackgroundImage.GetImage(color);
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    rotateAnimation.start();

    return () => rotateAnimation.stop();
  }, [rotation]);

  const rotateInterpolate = useMemo(
    () =>
      rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      }),
    [rotation],
  );
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.hollowCircle}>
        <View style={styles.dashedCircleContainer}>
          <Animated.View
            style={[
              styles.dashedCircle,
              {transform: [{rotate: rotateInterpolate}]},
            ]}>
            <Svg height={'18'} width={'18'}>
              <Circle
                cx="9"
                cy="9"
                r="8"
                stroke={'#fff'}
                strokeDasharray={'4 4'}
                strokeWidth={'2'}
                strokeDashoffset={'0'}
              />
            </Svg>
          </Animated.View>
        </View>
      </View>
      <Image
        source={pileImage}
        style={{width: 32, height: 32, position: 'absolute', top: -15}}
      />
    </TouchableOpacity>
  );
};

export default Pile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  hollowCircle: {
    width: 15,
    height: 15,
    position: 'absolute',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
