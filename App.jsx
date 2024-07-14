import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StatusBar as NativeStatusBar, Image, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

const diceImages = {
  1: require('./assets/dice1.png'),
  2: require('./assets/dice2.png'),
  3: require('./assets/dice3.png'),
  4: require('./assets/dice4.png'),
  5: require('./assets/dice5.png'),
  6: require('./assets/dice6.png')
}
const statusBarHeight = NativeStatusBar.currentHeight;

export default function App() {

  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(5);

  const [result, setResult] = useState(dice1 + dice2);

  // console.log(statusBarHeight);

  const rollDice = () => {
    const randomDice1 = Math.floor(Math.random() * 6) + 1;
    const randomDice2 = Math.floor(Math.random() * 6) + 1;

    setDice1(randomDice1);
    setDice2(randomDice2);

    setResult(randomDice1 + randomDice2);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Dice Simulator</Text>
      <View style={styles.card}>
        <View style={styles.diceContainer}>
          <Image style={styles.dice} source={diceImages[dice1]} />
          <Image style={styles.dice} source={diceImages[dice2]} />
        </View>

        <TouchableOpacity style={styles.rollBtn} onPress={rollDice}>
          <Text style={styles.btnText}>Roll Dice</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 50,
    paddingTop: statusBarHeight,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  card: {
    flex: 3,
    padding: 20,
    backgroundColor: '#fff',
    elevation: 5,
  },
  diceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  rollBtn: {
    backgroundColor: '#ffb4c2',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#f00',
  },
});
