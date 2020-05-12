class DebugConsole {
  track(event, data) {
    console.log('TRACK', event, data);
  }
}

module.exports = new DebugConsole();
