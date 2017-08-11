import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View, Platform,
  StatusBar,
} from 'react-native';

const MyStatusBar = ({ backgroundColor, barStyle }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar
      barStyle= {barStyle}
    />
  </View>
);

class NavigationHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar 
          backgroundColor={this.props.statusBarStyle.backgroundColor} 
          barStyle={this.props.statusBarStyle.barStyle} />
        <View style={[
          styles.naviagtionBar,
          this.props.navigationBarStyle,
          ]}>

        </View>  
      </View>
    );
  }
}

NavigationHeader.propTypes = {
  statusBarStyle: PropTypes.object,
  navigationBarStyle: PropTypes.object,
  componentLeft: PropTypes.element,
  componentCenter: PropTypes.element,
  componentRight: PropTypes.element,
};

NavigationHeader.defaultProps = {
  statusBarStyle: {
    barStyle:"light-content",
    backgroundColor:"#215e79",
  },
  navigationBarStyle: {
    backgroundColor:"#215e79",
  },
  componentLeft: <View></View>,
  componentCenter: <View></View>,
  componentRight: <View></View>,
};

export default NavigationHeader;

const StatusBar_Height = Platform.OS === 'ios' ? 20 : 0;
const AppBar_Height = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {

  },
  statusBar: {
    height: StatusBar_Height,
  },
  naviagtionBar: {
    flexDirection: 'row',
    height: AppBar_Height,
  },
});