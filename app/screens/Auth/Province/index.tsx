import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CustomButton from '../../../common/Components/CustomButton';
import Colors from '../../../libs/Colors';
import {provinceArr} from '../../../utils/Consts';
import {
  PRIMARY_EXO_FONT_MEDIUM_500,
  PRIMARY_EXO_FONT_REGULAR_400,
  PRIMARY_EXO_FONT_SEMI_BOLD_600,
} from '../../../utils/fonts';

interface ProvinceProps {
  navigation: any;
}

const Province: React.FC<ProvinceProps> = ({navigation}) => {
  const [provinceList, setProvinceList] = useState<any>(provinceArr);
  const [province, setProvince] = useState<string>('');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  // render Buttons
  const renderButtons = () => {
    return (
      <View style={styles.buttonViewstyle}>
        <CustomButton
          btnTitle="Next"
          //   btnStyle={{marginHorizontal: 60}}
          onClick={() => {
            navigation.navigate('HomeTabs');
          }}
        />

        {/* skip Button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeTabs');
          }}>
          <Text style={styles.skipTextStyle}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // render List Item
  const renderListItem = (item: any, index: number) => {
    return (
      <TouchableOpacity
        style={{width: windowWidth / 2.55}}
        onPress={() => {
          setProvince(item);
        }}>
        <View
          style={{
            margin: 6,
            // padding: 10,
            paddingHorizontal: 5,
            paddingVertical: 10,
            borderRadius: 8,
            backgroundColor:
              item == province ? Colors.primaryColor : Colors.itemGradeBg,
          }}>
          <Text
            style={{
              fontFamily: PRIMARY_EXO_FONT_MEDIUM_500,
              fontSize: 16,
              color:
                item == province
                  ? Colors.whiteColor
                  : Colors.boardingTitleColor,
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.centered}>
      <View
        style={{marginHorizontal: 20, marginTop: 30, paddingHorizontal: 10}}>
        <Text style={styles.title}>What's your province?</Text>

        {/* render Province List */}
        <View style={styles.listViewStyle}>
          <Text style={styles.titleStyle}>Provinces of Sri Lanka</Text>
          {/* Render Flat List */}
          <View>
            <FlatList
              numColumns={2}
              data={provinceList}
              renderItem={({item, index}) => renderListItem(item, index)}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>

      {renderButtons()}
    </View>
  );
};
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    backgroundColor: Colors.screenbg,
  },
  title: {
    fontFamily: PRIMARY_EXO_FONT_SEMI_BOLD_600,
    fontSize: 25,
    color: Colors.boardingTitleColor,
    marginBottom: 20,
  },
  skipTextStyle: {
    fontFamily: PRIMARY_EXO_FONT_REGULAR_400,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.primaryColor,
    marginTop: 30,
  },
  buttonViewstyle: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },
  listViewStyle: {
    flexDirection: 'column',
    backgroundColor: Colors.itemBg,
    padding: 10,
    borderRadius: 10,
  },
  titleStyle: {
    color: Colors.grayDark,
    fontFamily: PRIMARY_EXO_FONT_SEMI_BOLD_600,
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Province;
