'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Text
} = React;

var NavBar = require('./NavBar');
var HomeScreen = require('./HomeScreen');
var GameScreen = require('./GameScreen');

var routes = require('../routes');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

class Dashboard extends React.Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={routes.dashboard.home}
        renderScene={this.renderScene}
        navigationBar={NavBar} />
    );
  }

  renderScene(route, navigator) {
    if(route.name === 'home') {
      return <HomeScreen navigator={navigator} />
    } else if(route.name === 'game') {
      return <GameScreen navigator={navigator} />
    }
  }
};

module.exports = Dashboard;
