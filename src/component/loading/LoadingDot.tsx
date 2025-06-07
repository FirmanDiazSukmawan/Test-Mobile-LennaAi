import React, {useEffect} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';

interface LoadingDots {
  dotColor?: string;
  dotSize?: number;
  containerStyle?: object;
  dotStyle?: object;
}

const LoadingDot: React.FC<LoadingDots> = ({
  dotColor = 'gray',
  dotSize = 32,
  containerStyle = {},
  dotStyle = {},
}) => {
  const dotAnimation = new Animated.Value(0);

  useEffect(() => {
    const animate = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(dotAnimation, {
            toValue: 1,
            duration: 600,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(dotAnimation, {
            toValue: 0,
            duration: 600,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    animate();

    return () => {
      dotAnimation.stopAnimation();
    };
  }, []);

  const dot1Opacity = dotAnimation.interpolate({
    inputRange: [0, 0.33, 0.66, 1],
    outputRange: [0.3, 1, 0.3, 0.3],
  });

  const dot2Opacity = dotAnimation.interpolate({
    inputRange: [0, 0.33, 0.66, 1],
    outputRange: [0.3, 0.3, 1, 0.3],
  });

  const dot3Opacity = dotAnimation.interpolate({
    inputRange: [0, 0.33, 0.66, 1],
    outputRange: [0.3, 0.3, 0.3, 1],
  });

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.dotsContainer}>
        <Animated.Text
          style={[
            styles.dot,
            {
              opacity: dot1Opacity,
              color: dotColor,
              fontSize: dotSize,
            },
            dotStyle,
          ]}>
          .
        </Animated.Text>
        <Animated.Text
          style={[
            styles.dot,
            {
              opacity: dot2Opacity,
              color: dotColor,
              fontSize: dotSize,
            },
            dotStyle,
          ]}>
          .
        </Animated.Text>
        <Animated.Text
          style={[
            styles.dot,
            {
              opacity: dot3Opacity,
              color: dotColor,
              fontSize: dotSize,
            },
            dotStyle,
          ]}>
          .
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    marginBottom: 4,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 24,
  },
  dot: {
    marginHorizontal: 2,
    lineHeight: 24,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

export default LoadingDot;
