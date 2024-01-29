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
    color: 'white',
    fontSize: 75,
    fontWeight: '200',
  },
});

export default StopWatch;