import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {Colors} from '../../constants/Colors';
import Pile from '../Pile';
import {RFValue} from 'react-native-responsive-fontsize';
import {ArrowSpots, SafeSpots, StarSpots} from '../../helper/PlotData';
import {ArrowRightIcon, StarIcon} from 'react-native-heroicons/outline';

const Cell = ({color, id}) => {
  const isSafeSpot = useMemo(() => SafeSpots.includes(id), [id]);
  const isStarSpot = useMemo(() => StarSpots.includes(id), [id]);
  const isArrowSpot = useMemo(() => ArrowSpots.includes(id), [id]);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isSafeSpot ? color : '#fff'},
      ]}>
      {isStarSpot && <StarIcon size={20} color="grey" />}
      {isArrowSpot && (
        <ArrowRightIcon
          color="grey"
          style={{
            transform: [
              {
                rotate:
                  id === 38
                    ? '180deg'
                    : id === 25
                    ? '90deg'
                    : id === 51
                    ? '270deg'
                    : '0deg',
              },
            ],
          }}
          size={RFValue(12)}
        />
      )}
      {/* <Pile
        color={color}
        cell={true}
        player={2}
        onPress={() => {}}
        pieceId={id}
      /> */}
      {/* <Text style={{fontSize: 12}}>{id}</Text> */}
    </View>
  );
};

export default React.memo(Cell);

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.4,
    borderColor: Colors.borderColor,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieceContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 99,
  },
});
