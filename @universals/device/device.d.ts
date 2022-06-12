/** @description >- Client side Local representation of device Object */
interface DEVICE_t
  extends Omit<
      Omit<
        Omit<Omit<Omit<Omit<Omit<Omit<Omit<Device_t, 'id'>, 'hsv'>, 'IP'>, 'timers'>, 'ts'>, 'channel'>, 'deviceInfo'>,
        'user'
      >,
      'config'
    >,
    optional_timestamp_i {
  id?: string;
  IP: string;
  channel: deviceColorChannel_t & {
    state: import('./deviceEnum').channelState_e;
    preState?: import('./deviceEnum').channelState_e;
  };
  timers: TIMER_t[];
  localTimeStamp: number;
  icon?: number;
  config?: {
    saveLastState: boolean;
  };
  deviceInfo: {
    /**
     * @default `0.1`
     */
    firmwareVersion: number;
  };
}
/** @description >- backend representation of device Object */
interface Device_t extends timestamp_i {
  id: string;
  Hostname: string;
  deviceName: string;
  Mac: string;
  IP: string;
  ssid?: string;
  channel: string;
  groupName?: string;
  lastState?: string;
  timers?: string;
  user?: User_t;
  config?: string;
  deviceInfo?: string;
  //add timers to data type timers
}

interface GROUP_t {
  groupName: string;
  groupType: import('./deviceEnum').deviceType_e;
  devices: DEVICE_t[];
}

interface deviceColorChannel_deviceType_NW4_i {
  deviceType: import('./deviceEnum').deviceType_e.deviceType_NW4;
  outputChannnel: [
    outputChannel_tempratureValue_i,
    outputChannel_tempratureValue_i,
    outputChannel_tempratureValue_i,
    outputChannel_tempratureValue_i
  ];
}
interface deviceColorChannel_deviceType_NW_i {
  deviceType: import('./deviceEnum').deviceType_e.deviceType_NW;
  outputChannnel: [outputChannel_tempratureValue_i];
}

interface deviceColorChannel_deviceType_RGB_i {
  deviceType: import('./deviceEnum').deviceType_e.deviceType_RGB;
  outputChannnel: [outputChannel_hue_i];
}

interface deviceColorChannel_deviceType_RGBW_i {
  deviceType: import('./deviceEnum').deviceType_e.deviceType_RGBW;
  outputChannnel: [outputChannel_hue_i, outputChannel_tempratureValue_i];
}

type deviceColorChannel_t =
  | deviceColorChannel_deviceType_NW_i
  | deviceColorChannel_deviceType_NW4_i
  | deviceColorChannel_deviceType_RGB_i
  | deviceColorChannel_deviceType_RGBW_i;

/**
 * @description colorChannel object types
 *              outputChannel pair address [ 0 , 1, 2 ]
 *              Ex: #aabbcc (`aa` first pair) (`bb` second pair) (`cc` third pair)
 */
interface outputChannel_hue_i {
  type: import('./deviceEnum').outputChannelTypes_e.colorChannel_hsv;
  h: number;
  s: number;
  v: number;
}
/**
 * @description single value_i for
 */
interface outputChannel_tempratureValue_i {
  type: import('./deviceEnum').outputChannelTypes_e.colorChannel_temprature;
  temprature: number;
  v: number;
}
