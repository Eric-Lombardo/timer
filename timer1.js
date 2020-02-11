// how to make a sound
// process.stdout.write("\x07");

const alarmTimer = process.argv.slice(2).sort();

if (alarmTimer.length !== 0) {
  for (const ele of alarmTimer) {
    // check if number is greater than zero
    if (Number(ele) >= 0 && Number(ele) !== NaN) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, ele * 1000);
    }
  }
}
