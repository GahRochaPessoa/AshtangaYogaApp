import React from 'react';
import {View, StyleSheet, } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const CalendarComponent = () => {
    return ( 
        <View style={styles.container}>
        <Calendar
          markedDates={{
            '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
            '2012-05-17': {marked: true},
            '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2012-05-19': {disabled: true, disableTouchEvent: true}
          }}
        />
        
        </View>


     );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});
 
export default CalendarComponent;