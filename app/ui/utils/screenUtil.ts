import {Dimensions, Platform, PixelRatio} from 'react-native';

export let screenW = Dimensions.get('window').width;
export let screenH = Dimensions.get('window').height;
const fontScale = PixelRatio.getFontScale();
export let pixelRatio = PixelRatio.get();
// pixel density
export const DEFAULT_DENSITY = 2;

export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
// convert pixels (px) to density independent pixels (dp)

/*
 takes iPhone 6 as benchmark
 if you use other sizes as benchmark, modify defaultWidth and defaultHeight
 the following is a 1x size
*/
const defaultWidth = 750;
const defaultHeight = 1624;
// scaling ratio
const _scaleWidth = screenW / defaultWidth;
const _scaleHeight = screenH / defaultHeight;

/**
 * screen adaptation, scaling size, default adaptation according to width, portrait can also use this method
 * Use this method directly for horizontal dimensions
 * like：width, paddingHorizontal, paddingLeft, paddingRight, marginHorizontal, marginLeft, marginRight
 * @param size design drawing size
 * @returns {number}
 */
export const scaleSize = (size: number) => {
  return size * _scaleWidth;
};

/**
 * Screen adaptation, the vertical size using this method should be closer to the design draft
 * like：height, paddingVertical, paddingTop, paddingBottom, marginVertical, marginTop, marginBottom
 * @param size design drawing size
 * @returns {number}
 */
export const scaleHeight = (size: number) => {
  return size * _scaleHeight;
};

export const setSpText = (size: number, allowFontScaling = false) => {
  const scale = Math.min(_scaleWidth, _scaleHeight);
  const fontSize = allowFontScaling ? 1 : fontScale;
  return (size * scale) / fontSize;
};

export const px2dp = (uiElementPx: number) => {
  return uiElementPx * _scaleWidth;
};

export const matchlatDeltaRegion = (centroid: {
  longitude: string;
  latitude: string;
}) => {
  if (!centroid || !centroid.longitude) {
    return null;
  }
  const {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;

  const latitude = parseFloat(centroid.latitude);
  const longitude = parseFloat(centroid.longitude);
  const latitudeDelta = 0.0922;
  // const latitudeDelta = 0.0522;
  const longitudeDelta = latitudeDelta * ASPECT_RATIO;

  // 1 mile = 1.609344 kilometers
  return {
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
  };
};

export const matchlatDeltaCamera = (
  centroid: {longitude: string; latitude: string},
  zoom: any,
) => {
  if (!centroid || !centroid.longitude) {
    return null;
  }
  const latitude = parseFloat(centroid.latitude);
  const longitude = parseFloat(centroid.longitude);

  // 1 mile = 1.609344 kilometers
  return {
    center: {
      latitude,
      longitude,
    },
    pitch: 1,
    heading: 10,
    altitude: 10,
    zoom,
  };
};
