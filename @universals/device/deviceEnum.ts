export enum deviceType_e {
  deviceType_unknown,
  deviceType_RGB,
  deviceType_RGBW,
  deviceType_NW4,
  deviceType_NW,
}
/**
 * @description colorChannel object types
 *              outputChannel pair address [ 0 , 1, 2 ]
 *              Ex: #aabbcc (`aa` first pair) (`bb` second pair) (`cc` third pair)
 */

export enum outputChannelTypes_e {
  colorChannel_hsv,
  colorChannel_temprature,
}

export enum channelState_e {
  CH_STATE_OFF,
  CH_STATE_1,
  CH_STATE_2,
  CH_STATE_3,
  CH_STATE_4,
  CH_STATE_5,
  CH_STATE_RGB,
  CH_STATE_CW,
  CH_STATE_WW,
  CH_STATE_NW,
  CH_STATE_ALL_ON,
}
