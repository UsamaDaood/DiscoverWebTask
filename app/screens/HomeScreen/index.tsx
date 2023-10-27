import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import Colors from '../../libs/Colors';
import {
  IC_FILTER,
  IC_FILTER_COLORED,
  IC_INSTITUTE_1,
  IC_INSTITUTE_2,
  IC_INSTITUTE_3,
  IC_PROFILE_IMG,
  IC_SEARCH,
  IC_SETTING,
  IC_STAR_FILLED,
  IC_STAR_UNFILLED,
  IC_TEACHER_1,
  IC_TEACHER_2,
  IC_TEACHER_3,
} from '../../utils/ImageSource';
import {
  PRIMARY_EXO_FONT_REGULAR_400,
  PRIMARY_EXO_FONT_SEMI_BOLD_600,
  PRIMARY_ROBOTO_FONT_LIGHT_300,
  PRIMARY_ROBOTO_FONT_MEDIUM_500,
  PRIMARY_ROBOTO_FONT_REGULAR_400,
} from '../../utils/fonts';
import {
  areaArr,
  instituteList,
  institutions,
  samp,
  subjectsArr,
  teach,
  teacherLists,
} from '../../utils/Consts';

interface HomeProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const [teacherArea, setTeacherArea] = useState<string>();
  const [teacherSub, setTeacherSub] = useState<string>();
  const [instituteArea, setInstituteArea] = useState<string>();
  const [filterTeacher, setFilterTeacher] = useState<boolean>(false);
  const [filterInst, setFilterInst] = useState<boolean>(false);

  // rende Top Header
  const renderHeader = () => {
    return (
      <View style={styles.headerView}>
        {/* Left Render */}
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.goodEveningText}>Good evening</Text>
          <Text style={styles.nameTextStyle}>Hardline scott</Text>
        </View>

        {/* right Render */}
        <View>
          <Image
            source={IC_PROFILE_IMG}
            style={{width: 82, height: 82, marginTop: 5}}
            resizeMode={'cover'}
          />
        </View>
      </View>
    );
  };

  // render Search Bar View
  const renderSearch = () => {
    return (
      <View style={styles.searchView}>
        {/* SearchView */}
        <View style={styles.search}>
          <TextInput placeholder="Search" style={{paddingLeft: 20}} />
          <TouchableOpacity>
            <Image
              source={IC_SEARCH}
              style={{width: 44, height: 44}}
              resizeMode={'cover'}
            />
          </TouchableOpacity>
        </View>

        {/* Filter View */}
        <TouchableOpacity>
          <Image
            source={IC_SETTING}
            style={styles.icFilterStyle}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    );
  };

  // render Popular Teachers Section
  const renderPopularTeachers = (title: string) => {
    return (
      <View style={{flexDirection: 'column'}}>
        <View style={styles.popularView}>
          <Text style={styles.popularTextStyle}>{title}</Text>
          <TouchableOpacity
            onPress={() => {
              if (title == teach) {
                setFilterTeacher(!filterTeacher);
              } else {
                setFilterInst(!filterInst);
              }
            }}>
            <Image
              source={
                title == teach
                  ? filterTeacher
                    ? IC_FILTER_COLORED
                    : IC_FILTER
                  : filterInst
                  ? IC_FILTER_COLORED
                  : IC_FILTER
              }
              style={styles.filterIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // popular Teachers List
  const renderTeaacherLists = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <FlatList
          data={teacherLists}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => teacherListItem(item, index)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  // render Teacher List Item
  const teacherListItem = (item: any, index: number) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.teacherListItem}>
          <View
            style={{
              backgroundColor: item?.bgColor,
              borderRadius: 15,
              alignItems: 'center',
            }}>
            <Image
              source={item?.pic}
              style={{width: 110, height: 115, alignSelf: 'center'}}
              resizeMode={'cover'}
            />
          </View>
          <Text style={styles.teacherName}>{item?.name}</Text>
          <Text style={styles.subject}>{item?.subject}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // rendering Subjects
  const renderSubjectsList = () => {
    return (
      <View style={{flexDirection: 'column', marginTop: 20}}>
        <Text>{'Subjects'}</Text>
        {/* render Arr */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            // marginTop: 20,
          }}>
          {subjectsArr.map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setTeacherSub(item);
                }}>
                <View
                  style={{
                    paddingHorizontal: 13,
                    marginTop: 10,
                    backgroundColor:
                      teacherSub == item
                        ? Colors.primaryColor
                        : Colors.whiteColor,
                    paddingVertical: 4,
                    borderRadius: 10,
                    marginRight: 7,
                  }}>
                  <Text
                    style={{
                      color:
                        teacherSub == item
                          ? Colors.whiteColor
                          : Colors.boardingTitleColor,
                      fontFamily: PRIMARY_ROBOTO_FONT_REGULAR_400,
                      fontSize: 15,
                    }}>
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  // render Institution List
  const renderInstituteList = () => {
    return (
      <View style={{flexDirection: 'column', marginTop: 10}}>
        <FlatList
          data={instituteList}
          ListHeaderComponent={() => {
            return (
              <View style={{marginBottom: 20}}>
                {/* render Header */}
                {renderHeader()}
                {/* render Search View */}
                {renderSearch()}
                {/* render Popular Teacher View */}
                {renderPopularTeachers(teach)}

                {filterTeacher && (
                  <View style={{flexDirection: 'column', marginTop: 20}}>
                    <Text
                      style={{
                        fontFamily: PRIMARY_EXO_FONT_SEMI_BOLD_600,
                        fontSize: 12,
                        color: Colors.grayDark,
                      }}>
                      {'Area'}
                    </Text>
                    {/* render Arr */}
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        marginTop: 20,
                      }}>
                      {areaArr.map(item => {
                        return (
                          <TouchableOpacity
                            onPress={() => {
                              var val = 'teacher_' + item;
                              setTeacherArea(val);
                            }}>
                            <View
                              style={{
                                paddingHorizontal: 13,
                                backgroundColor:
                                  teacherArea == 'teacher_' + item
                                    ? Colors.primaryColor
                                    : Colors.whiteColor,
                                paddingVertical: 4,
                                borderRadius: 10,
                                marginRight: 7,
                              }}>
                              <Text
                                style={{
                                  color:
                                    teacherArea == 'teacher_' + item
                                      ? Colors.whiteColor
                                      : Colors.boardingTitleColor,
                                  fontFamily: PRIMARY_ROBOTO_FONT_REGULAR_400,
                                  fontSize: 15,
                                }}>
                                {item}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </View>
                )}
                {/* filter of Subjects */}
                {filterTeacher && renderSubjectsList()}
                {/* Teachers List */}
                {renderTeaacherLists()}
                {/* institute Lists */}
                {renderPopularTeachers(institutions)}

                {filterInst && (
                  <View style={{flexDirection: 'column', marginTop: 20}}>
                    <Text
                      style={{
                        fontFamily: PRIMARY_EXO_FONT_SEMI_BOLD_600,
                        fontSize: 12,
                        color: Colors.grayDark,
                      }}>
                      {'Area'}
                    </Text>
                    {/* render Arr */}
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        marginTop: 20,
                      }}>
                      {areaArr.map(item => {
                        return (
                          <TouchableOpacity
                            onPress={() => {
                              var val = 'inst_' + item;
                              setInstituteArea(val);
                            }}>
                            <View
                              style={{
                                paddingHorizontal: 13,
                                backgroundColor:
                                  instituteArea == 'inst_' + item
                                    ? Colors.primaryColor
                                    : Colors.whiteColor,
                                paddingVertical: 4,
                                borderRadius: 10,
                                marginRight: 7,
                              }}>
                              <Text
                                style={{
                                  color:
                                    instituteArea == 'inst_' + item
                                      ? Colors.whiteColor
                                      : Colors.boardingTitleColor,
                                  fontFamily: PRIMARY_ROBOTO_FONT_REGULAR_400,
                                  fontSize: 15,
                                }}>
                                {item}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </View>
                )}
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => renderInstituteItem(item, index)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  // const
  const renderInstituteItem = (item: any, index: number) => {
    return (
      <View style={styles.instituteView}>
        <View
          style={[
            {
              backgroundColor: item?.bgColor,
            },
            styles.instituteImageView,
          ]}>
          <Image
            source={item?.image}
            style={{width: 145, height: 161}}
            resizeMode={'contain'}
          />
        </View>

        {/* Info View */}
        <View style={{flexDirection: 'column', marginLeft: 8}}>
          <Text style={styles.instituteName}>{item?.name}</Text>

          {/* star Rating View */}

          <View style={styles.instituteRating}>
            {samp.map(optionItem => {
              return optionItem <= item?.rating ? (
                <Image source={IC_STAR_FILLED} style={styles.starRatingStyle} />
              ) : (
                <Image
                  source={IC_STAR_UNFILLED}
                  style={styles.starRatingStyle}
                />
              );
            })}

            <Text style={styles.ratingText}>{item?.ratingText}</Text>
          </View>
          {/* section */}
          <View style={{width: 150}}>
            <Text style={styles.insTitle}>{item?.title}</Text>
            <Text style={styles.instDesc}>{item?.desc}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.centered}>
      {/* institute List */}
      {renderInstituteList()}
    </View>
  );
};
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: Colors.screenbg,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    // marginHorizontal: 20,
  },
  goodEveningText: {
    fontFamily: PRIMARY_EXO_FONT_SEMI_BOLD_600,
    fontSize: 32,
    color: Colors.boardingTitleColor,
  },
  nameTextStyle: {
    fontFamily: PRIMARY_EXO_FONT_SEMI_BOLD_600,
    fontSize: 20,
    color: Colors.grayDark,
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    // marginHorizontal: 20,
  },
  search: {
    backgroundColor: Colors.whiteColor,
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  icFilterStyle: {
    width: 24,
    height: 24,
    marginLeft: 30,
  },
  popularView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  popularTextStyle: {
    fontFamily: PRIMARY_EXO_FONT_SEMI_BOLD_600,
    fontSize: 20,
    color: Colors.boardingTitleColor,
  },
  filterIcon: {
    width: 28,
    height: 28,
    marginRight: 20,
  },
  teacherListItem: {
    marginRight: 10,
    backgroundColor: Colors.whiteColor,
    padding: 10,
    borderRadius: 7,
    borderWidth: 0.2,
    borderColor: Colors.colorGray,
  },
  teacherName: {
    fontFamily: PRIMARY_EXO_FONT_SEMI_BOLD_600,
    fontSize: 16,
    color: Colors.boardingTitleColor,
    marginTop: 5,
  },
  subject: {
    fontFamily: PRIMARY_ROBOTO_FONT_REGULAR_400,
    fontSize: 12,
    color: Colors.boardingTitleColor,
  },
  instituteView: {
    flexDirection: 'row',
    backgroundColor: Colors.whiteColor,
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 15,
  },
  instituteImageView: {
    width: 145,
    height: 161,
    borderRadius: 10,
  },
  instituteName: {
    fontFamily: PRIMARY_EXO_FONT_SEMI_BOLD_600,
    fontSize: 20,
    color: Colors.boardingTitleColor,
  },
  instituteRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  starRatingStyle: {
    width: 8,
    height: 8,
    marginHorizontal: 2,
  },
  ratingText: {
    fontFamily: PRIMARY_EXO_FONT_REGULAR_400,
    fontSize: 8,
    color: Colors.grayDark,
    marginLeft: 5,
  },
  insTitle: {
    marginTop: 5,
    fontFamily: PRIMARY_EXO_FONT_SEMI_BOLD_600,
    fontSize: 12,
    color: Colors.boardingTitleColor,
    marginBottom: 5,
  },
  instDesc: {
    fontFamily: PRIMARY_ROBOTO_FONT_LIGHT_300,
    fontSize: 12,
    color: Colors.desccolor,
    textAlign: 'left',
  },
});

export default HomeScreen;
