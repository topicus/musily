import React, { PropTypes } from 'react';
import useSheet from 'react-jss';
import values from 'lodash/values';
import FilterList from '../filters/FilterList';

const Group = ({ sheet, group}) => (
  <div className={sheet.classes.group}>
    <ul>
      <li>Cantidad de hombres: {group.statistics.men_count}</li>
      <li>Cantidad de mujeres: {group.statistics.women_count}</li>
      <li>Promedio de likes: {group.statistics.like_avg}</li>
      <li>Edad promedio: {group.statistics.age_avg}</li>      
      <li>Cantidad promedio de amigos: {group.statistics.friends_avg}</li>
      <li>Edad promedio de amigos: {group.statistics.friends_age_avg}</li>
      <li>Cantidad de canciones compartidas: {group.statistics.shared_songs}</li>
      <li>Cantidad de amigos hombres: {group.statistics.friends_men_count}</li>
      <li>Cantidad de amigos mujeres: {group.statistics.friends_women_count}</li>
      <li>Cantidad de subgrupos: {group.statistics.subgroups}</li>
      <ul>
        {values(group.statistics.shared_songs_avg_group).map((avg, index) => (
          <li key={`subgroup-${index}`}>Canciones compartidas grupo {index}: {avg}</li>
        ))}
      </ul>
    </ul>
  </div>
);

const STYLES = {
  group: {
    backgroundColor: '#ffffff',
    boxShadow: '1px 1px 1px #CDCDCD',
    padding: '3px',
    marginTop: '10px'
  },
};

export default useSheet(Group, STYLES);