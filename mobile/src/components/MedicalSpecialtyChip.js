import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Chip, Text} from 'react-native-paper';
import axios from 'axios';
import {server} from '../common';

const MedicalSpecialtyChip = ({onChangeChip}) => {
  const [selected, setSelected] = useState(null);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${server}/medicalspecialtys/`);
      if (Array.isArray(response.data)) {
        setDataSource(response.data);
      }
    };

    getData();
  }, []);

  const handlePress = idx => {
    setSelected(idx);
    if (onChangeChip) {
      onChangeChip(idx);
    }
  };

  return (
    <View style={style.view}>
      <Text style={style.margin}>Select your Medical Specialty</Text>
      {dataSource.map(item => {
        return (
          <Chip
            key={item.id}
            mode="outlined"
            icon="stethoscope"
            onPress={() => handlePress(item.id)}
            selected={item.id === selected}
            style={style.margin}>
            {item.name}
          </Chip>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    flexWrap: 'wrap',
    margin: 5,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  margin: {
    marginBottom: 5,
  },
});

export default MedicalSpecialtyChip;
