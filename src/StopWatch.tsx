import { Text, View, StyleSheet } from 'react-native';
import { formatTime } from './utils';


// Define the props interface
interface StopWatchProps {
  timeElapsed: number;
}

const StopWatch: React.FC<StopWatchProps> = ({ timeElapsed }) => {

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>{formatTime(timeElapsed)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  timerText: {
    color: 'black',
    fontSize: 70,
    fontWeight: '100',
  },
});

export default StopWatch;