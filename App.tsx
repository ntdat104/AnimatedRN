import React from "react";

import { Animated, Easing, SafeAreaView, Button, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Animation: React.FC = (): JSX.Element => {
  const translateXAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0);

  function runBasicAnimation(): void {
    function animatedTiming() {
      Animated.timing(translateXAnim, {
        toValue: width - 50,
        duration: 1000,
        // delay: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(({ finished }) => {
        console.log(finished);
        translateXAnim.setValue(0);
        animatedSpring();
      });
    }

    function animatedSpring() {
      Animated.spring(translateXAnim, {
        toValue: width - 50,
        // friction: 7,
        // tension: 40,
        // speed: 12,
        bounciness: 8,
        useNativeDriver: true,
      }).start(({ finished }) => {
        console.log(finished);
        translateXAnim.setValue(0);
        animatedDecay();
      });
    }

    function animatedDecay() {
      Animated.decay(translateXAnim, {
        velocity: 1,
        deceleration: 0.997,
        useNativeDriver: true,
      }).start(({ finished }) => {
        console.log(finished);
        translateXAnim.setValue(0);
      });
    }

    animatedTiming();
  }

  function runAdvanceAnimation(): void {
    function animatedTiming() {
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        // delay: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(({ finished }) => {
        console.log(finished);
        scaleAnim.setValue(0);
        animatedSpring();
      });
    }

    function animatedSpring() {
      Animated.spring(scaleAnim, {
        toValue: 1,
        // friction: 7,
        // tension: 40,
        // speed: 12,
        bounciness: 8,
        useNativeDriver: true,
      }).start(({ finished }) => {
        console.log(finished);
        scaleAnim.setValue(0);
        animatedDecay();
      });
    }

    function animatedDecay() {
      Animated.decay(scaleAnim, {
        velocity: 1,
        deceleration: 0.997,
        useNativeDriver: true,
      }).start(({ finished }) => {
        console.log(finished);
        scaleAnim.setValue(0);
      });
    }

    animatedTiming();
  }

  return (
    <>
      <Button title="Basic Animation" onPress={runBasicAnimation} />
      <Button title="Advance Animation" color="tomato" onPress={runAdvanceAnimation} />
      <Animated.View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: "dodgerblue",
          transform: [{ translateX: translateXAnim }],
        }}
      />
      <Animated.View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: "tomato",
          transform: [
            {
              translateX: scaleAnim.interpolate({
                inputRange: [0, 0.3, 0.7, 1],
                outputRange: [0, width / 2, width / 3, width - 50],
              }),
            },
            {
              scale: scaleAnim.interpolate({
                inputRange: [0, 0.3, 0.7, 1],
                outputRange: [1, 2, 0.5, 1],
              }),
            },
          ],
        }}
      />
    </>
  );
};

const App: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-evenly", backgroundColor: "black" }}>
      <Animation />
    </SafeAreaView>
  );
};

export default App;
