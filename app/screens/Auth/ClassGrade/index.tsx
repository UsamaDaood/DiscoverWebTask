import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CustomButton from '../../../common/Components/CustomButton';
import Colors from '../../../libs/Colors';
import {listData} from '../../../utils/Consts';
import {
  PRIMARY_EXO_FONT_MEDIUM_500,
  PRIMARY_EXO_FONT_REGULAR_400,
  PRIMARY_EXO_FONT_SEMI_BOLD_600,
} from '../../../utils/fonts';
import {IC_DOWN_ARROW, IC_UP_ARROW} from '../../../utils/ImageSource';

interface ClassGradeProps {
  navigation: any;
}

const ClassGrade: React.FC<ClassGradeProps> = ({navigation}) => {
  const [collapseId, setCollapseId] = useState<number>();
  const [listArr, setListArr] = useState<any>(listData);
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
            navigation.navigate('Province');
          }}
        />

        {/* skip Button */}
        <TouchableOpacity>
          <Text style={styles.skipTextStyle}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // grade Item Rendering
  const renderGradeItem = (item: any, index: number) => {
    return (
      <View style={styles.gradeItem}>
        {/* First row */}
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{item?.title}</Text>
          <TouchableOpacity
            onPress={() => {
              if (collapseId) {
                setCollapseId(undefined);
              } else {
                setCollapseId(index + 1);
              }
            }}>
            <Image
              style={{width: 30, height: 30}}
              resizeMode={'contain'}
              source={collapseId == index + 1 ? IC_UP_ARROW : IC_DOWN_ARROW}
            />
          </TouchableOpacity>
        </View>
        {/* Render Options */}
        {/* Drop Down Part */}
        {collapseId == index + 1 && (
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
            {item?.options.map((optionItem, optionIndex) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    var arr: any = [...listArr];
                    arr[index].selected = optionIndex;
                    setListArr(arr);
                  }}>
                  <View
                    style={[
                      {
                        width: windowWidth / 2.7,
                        backgroundColor:
                          optionIndex == item?.selected
                            ? Colors.primaryColor
                            : Colors.itemGradeBg,
                      },
                      styles.gradeItemStyle,
                    ]}>
                    <Text
                      style={{
                        marginRight: 10,
                        fontFamily: PRIMARY_EXO_FONT_MEDIUM_500,
                        fontSize: 20,
                      }}>
                      {optionItem?.imageText}
                    </Text>
                    <Text
                      style={{
                        fontFamily: PRIMARY_EXO_FONT_MEDIUM_500,
                        fontSize: 16,
                        color:
                          optionIndex == item?.selected
                            ? Colors.whiteColor
                            : Colors.boardingTitleColor,
                      }}>
                      {optionItem?.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.centered}>
      <View style={{marginHorizontal: 25}}>
        <Text style={styles.title}>What's your grade?</Text>
        {/* Render Flat List */}
        <FlatList
          data={listArr}
          renderItem={({item, index}) => renderGradeItem(item, index)}
          keyExtractor={item => item.id}
        />
      </View>

      {renderButtons()}
    </View>
  );
};
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
    // paddingHorizontal: 25,
  },
  title: {
    fontFamily: PRIMARY_EXO_FONT_SEMI_BOLD_600,
    fontSize: 25,
    color: Colors.grayDark,
    marginTop: 30,
    marginBottom: 10,
  },
  buttonViewstyle: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },
  skipTextStyle: {
    fontFamily: PRIMARY_EXO_FONT_REGULAR_400,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.primaryColor,
    marginTop: 30,
  },
  gradeItem: {
    flexDirection: 'column',
    backgroundColor: Colors.itemBg,
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 7,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontFamily: PRIMARY_EXO_FONT_SEMI_BOLD_600,
    fontSize: 18,
    color: Colors.grayDark,
  },
  gradeItemStyle: {
    flexDirection: 'row',
    marginRight: 10,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default ClassGrade;
