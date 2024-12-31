import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Wrapper from '../components/Wrapper';
import MenuIcon from '../assets/images/menu.png';
import {deviceHeight, deviceWidth} from '../constants/Scaling';
import Dice from '../components/Dice';
import {Colors} from '../constants/Colors';
import Pocket from '../components/Pocket';
import VerticalPath from '../components/path/VerticalPath';
import {Plot1Data, Plot2Data, Plot3Data, Plot4Data} from '../helper/PlotData';
import HorizontalPath from '../components/path/HorizontalPath';
import FourTriangels from '../components/FourTriangels';
const LudoBoardScreen = () => {
  return (
    <Wrapper>
      <TouchableOpacity style={styles.menuIconStyle}>
        <Image source={MenuIcon} style={{height: 30, width: 30}} />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <Dice color={Colors.green} />
          <Dice color={Colors.yellow} rotate />
        </View>
        <View style={styles.ludoBoard}>
          <View style={styles.plotContainer}>
            <Pocket color={Colors.green} player={2} />
            <VerticalPath color={Colors.yellow} cells={Plot2Data} />
            <Pocket color={Colors.yellow} player={3} />
          </View>
          <View style={styles.pathContainer}>
            <HorizontalPath color={Colors.green} cells={Plot1Data} />
            <FourTriangels />
            <HorizontalPath color={Colors.blue} cells={Plot3Data} />
          </View>
          <View style={styles.plotContainer}>
            <Pocket color={Colors.red} player={1} />
            <VerticalPath cells={Plot4Data} color={Colors.red} />
            <Pocket color={Colors.blue} player={4} />
          </View>
        </View>
        <View style={styles.flexRow}>
          <Dice color={Colors.red} />
          <Dice color={Colors.blue} rotate />
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  menuIconStyle: {
    position: 'absolute',
    left: 20,
    top: 60,
  },
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: deviceHeight * 0.5,
    width: deviceWidth,
  },
  flexRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  ludoBoard: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    padding: 10,
  },
  plotContainer: {
    width: '100%',
    height: '40%',
    backgroundColor: '#ccc',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  pathContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '20%',
    justifyContent: 'space-between',
    backgroundColor: '#1E5162',
  },
});
export default LudoBoardScreen;
