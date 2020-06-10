import types from './types';

export function countUp(num) {
  return {
    type: types.COUNT_UP,
    payload: num,
  };
}

export function countDown(num) {
  return {
    type: types.COUNT_DOWN,
    payload: num,
  };
}

export function countDouble(num) {
  return {
    type: types.COUNT_DOUBLE,
    payload: num,
  };
}

