import React, { Component } from 'react';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const margin = height / 80;
const borderradius = height / 150
const MaxPickerHeight = height / 1.5
const HeaderFontSize = height / 32
const TitleBigFontSize = height / 43
const HeaderMediumFontSize = height / 35
const TitleSemiBigFontSize = height / 48
const TitleMediumFontSize = height / 55
const TitleSmallFontSize = height / 60
const TitleSemiSmallFontSize = height / 73
const TitleVerySmallFontSize = height / 80
const PriceFontSize = height / 52
const PickerFontSize = height / 50
const Product = 'https://mindler-dashboard.s3.us-east-2.amazonaws.com/products.json'

export default {
      margin: margin,
      borderradius: borderradius,
      MaxPickerHeight: MaxPickerHeight,
      HeaderFontSize: HeaderFontSize,
      TitleBigFontSize: TitleBigFontSize,
      TitleSemiBigFontSize: TitleSemiBigFontSize,
      TitleMediumFontSize: TitleMediumFontSize,
      TitleSmallFontSize: TitleSmallFontSize,
      PriceFontSize: PriceFontSize,
      PickerFontSize: PickerFontSize,
      TitleSemiSmallFontSize: TitleSemiSmallFontSize,
      HeaderMediumFontSize: HeaderMediumFontSize,
      TitleVerySmallFontSize: TitleVerySmallFontSize,
      Product:Product
}