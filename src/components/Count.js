import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ActionCreator from '../actions';
import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';

function Count() {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count, []);

  const countUp = (num) => {
    dispatch(ActionCreator.countUp(num));
  };
  const countDouble = (num)=>{
      dispatch(ActionCreator.countDouble(num))
  }
  return (
    <View style={s.container}>
      <Text style={{fontSize: 20}}>{count}</Text>
      <TouchableOpacity style={s.upButton} onPress={() => countUp(1)}>
        <Text style={{fontSize: 20}}>+1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.upButton} onPress={() => countUp(2)}>
        <Text style={{fontSize: 20}}>+2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.downButton} onPress={() => countUp(-1)}>
        <Text style={{fontSize: 20}}>-1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.downButton} onPress={() => countUp(-2)}>
        <Text style={{fontSize: 20}}>-2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={s.downButton} onPress={() => countDouble(2)}>
        <Text style={{fontSize: 20}}>*2</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  upButton: {
    marginLeft: 20,
    backgroundColor: 'cyan',
    padding: 10,
    borderRadius: 20,
  },
  downButton: {
    marginLeft: 20,
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 20,
  },
});

export default Count;
