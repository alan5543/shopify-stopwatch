import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

interface StopWatchButtonProps {
  isRunning: boolean;
  onStartStop: () => void;
  onLapReset: () => void;
}


const StopWatchButton: React.FC<StopWatchButtonProps> = ({ isRunning, onStartStop, onLapReset }) => {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        onPress={onLapReset}
        style={[styles.button, isRunning ? styles.lapButton : styles.resetButton]}
        activeOpacity={0.5}
      >
        <Text style={styles.buttonText}>{isRunning ? 'Lap' : 'Reset'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onStartStop}
        style={[styles.button, isRunning ? styles.stopButton : styles.startButton]}
        activeOpacity={0.5}
      >
        <Text style={styles.buttonText}>{isRunning ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
  startButton: {
    backgroundColor: '#90EE90',
  },
  stopButton: {
    backgroundColor: 'red',
  },
  lapButton: {
    backgroundColor: 'grey',
  },
  resetButton: {
    backgroundColor: '#ADD8E6',
  },
});

export default StopWatchButton;
