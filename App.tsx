import { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text, AppState } from 'react-native';
import StopWatch from './src/StopWatch';
import StopWatchButton from './src/StopWatchButton';
import { formatLapRecord, formatTimeRecord } from './src/utils';

export default function App() {
  // define the states of the app
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);
  const timeRef = useRef<any>(null);

  // handle the background state of the app
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: any) => {
      if (appState.current === 'active' && nextAppState.match(/inactive|background/)) {
        if (isRunning) {
          clearInterval(timeRef.current)
          setIsRunning(!isRunning);
        }
      }
      appState.current = nextAppState;
    };
    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove();
    };
  }, [isRunning, timeElapsed]);


  // function to handle the switching between start and stop
  const handleStartStopAction = () => {
    console.log("handleStartStopAction")
    if (isRunning) {
      clearInterval(timeRef.current)
    } else {
      const startTime = Date.now() - timeElapsed;
      timeRef.current = setInterval(() => {
        setTimeElapsed(Date.now() - startTime);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  // function to handle the switching between reset and lap
  const handleLapResetAction = () => {
    console.log("handleLapResetAction")
    if (isRunning) {
      setLaps([...laps, timeElapsed]);
    } else {
      setTimeElapsed(0);
      setLaps([]);
    }
  };

  return (
    <View style={styles.container}>
      <StopWatch timeElapsed={timeElapsed} />
      <StopWatchButton isRunning={isRunning} onStartStop={handleStartStopAction} onLapReset={handleLapResetAction} />
      <View style={styles.divider} />
      <ScrollView style={styles.lapsContainer}>
        {laps.map((lap, index) => (
          <View style={styles.recordContainer} key={index}>
            <Text style={styles.lapText}>
              {formatLapRecord(index)}
            </Text>
            <Text style={styles.lapText}>
              {formatTimeRecord(lap)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'space-between',
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  lapsContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
  lapText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    marginVertical: 30,
  },
  recordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  }
});