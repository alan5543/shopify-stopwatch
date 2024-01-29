// Timer Display
export const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    
    // handling the hour case (longer time)
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
    } else {
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
    }
  };

// Lap Record Display
export const formatLapRecord = (lap: number): string => {
    const lapString = `Lap ${lap + 1}`
    return lapString
};

// Time Record Display
export const formatTimeRecord = (time: number): string => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    
    // handling the hour case (longer time)
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')} hrs, ${minutes.toString().padStart(2, '0')} mins, ${seconds.toString().padStart(2, '0')} secs, ${milliseconds.toString().padStart(2, '0')} ms`;
    } else {
      return `${minutes.toString().padStart(2, '0')} mins, ${seconds.toString().padStart(2, '0')} secs, ${milliseconds.toString().padStart(2, '0')} ms`;
    }
}