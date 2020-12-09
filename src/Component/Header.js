import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Icon, Text, Image, Badge } from "react-native-elements";
import Colors from "../../src/Utils/Colorss";
import styles from '../Component/Styles';
import Fonts from '../../src/Utils/CustomFonts';
import Styles from '../Component/Styles';
import Config from '../Utils/Config';
import GlobalInput from './GlobalInput';

const { height, width } = Dimensions.get('window')
const aspectRatio = height / width;

export default Header = (props) => {
  return (
    <View style={Styles().HeaderMainView}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={props.onMenuPress}
          style={{ justifyContent: 'center' }}>
          <Icon
            name='menu'
            type='entypo'
            color={Colors.Black}
            size={height / 33}
            containerStyle={{
              justifyContent: 'center',
            }}
            underlayColor='transparent'
          />
        </TouchableOpacity>
      </View>

      <View style={[Styles().SearchInputMainView, { justifyContent: 'center', alignItems: 'center', width: (width - (Config.margin)) / 1.2 }]}>
        <GlobalInput
          Value={props.ChangeValue}
          Placeholder="Search"
          InputStyle={{ fontFamily: Fonts.GeometricLight, height: '100%' }}
          LeftIcon={< Icon
            name='search'
            type='evilicons'
            color={Colors.Grey70}
            size={height / 33}
            underlayColor='transparent'
          />}
          Ref={props.Refs}
          OnChangeText={props.onChangeValue}
          ReturnKeyType='search'
          OnSubmitEditing={props.OnSubmit}
          RightIcon={props.ChangeValue != '' ? < Icon
            name='cross'
            type='entypo'
            color={Colors.Grey70}
            size={height / 30}
            overlayColor='transparent'
            onPress={props.ClearSearch}
          /> : null}
        />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ justifyContent: 'center' }}>
          <Icon
            name='shopping-cart'
            type='entypo'
            color={Colors.Black}
            size={height / 35}
            containerStyle={{
              justifyContent: 'center',
            }}
            underlayColor='transparent'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}


