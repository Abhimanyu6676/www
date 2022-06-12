enum TIMER_EVENT_TYPE_e {
  ON,
  OFF,
}

enum TIMER_DAYTIME_e {
  AM,
  PM,
}

enum TIMER_STATUS_e {
  INACTIVE,
  REPEAT,
  ONCE,
}

type TIMER_DAYS_t = [boolean, boolean, boolean, boolean, boolean, boolean, boolean];

/** @description >- Client side Local representation of timer Object */
interface TIMER_t {
  id: string;
  H: number;
  M: number;
  DT: TIMER_DAYTIME_e;
  ET: TIMER_EVENT_TYPE_e;
  STATUS: TIMER_STATUS_e;
  STATE?: String;
  DAYS: TIMER_DAYS_t;
}
