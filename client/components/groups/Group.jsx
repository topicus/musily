import React, { PropTypes } from 'react';
import useSheet from 'react-jss';
import values from 'lodash/values';
import FilterList from '../filters/FilterList';
import round from 'lodash/round';
import partialRight from 'lodash/partialRight';

const round2 = partialRight(round, 2);

const Group = ({ sheet, group, index}) => (
  <div className={sheet.classes.group}>
    <ul className={sheet.classes.groupStatistics}>
      <li><strong>Hombres:</strong> {round2(group.statistics.men_count)}</li>
      <li><strong>Mujeres:</strong> {round2(group.statistics.women_count)}</li>
      <li><strong>Promedio de likes:</strong> {round2(group.statistics.like_avg)}</li>
      <li><strong>Edad promedio:</strong> {round2(group.statistics.age_avg)}</li>      
      <li><strong>Promedio de amigos:</strong> {round2(group.statistics.friends_avg)}</li>
      <li><strong>Edad promedio de amigos:</strong> {round2(group.statistics.friends_age_avg)}</li>
      <li><strong>Ccanciones compartidas: </strong>{round2(group.statistics.shared_songs)}</li>
      <li><strong>Amigos hombres: </strong>{round2(group.statistics.friends_men_count)}</li>
      <li><strong>Amigos mujeres:</strong> {round2(group.statistics.friends_women_count)}</li>
      <li><strong>Subgrupos:</strong> {round2(group.statistics.subgroups)}</li>
      {values(group.statistics.shared_songs_avg_group).map((avg, index) => (
        <li key={`subgroup-${index}`}><strong>Prom. canciones compartidas grupo {index}:</strong> {round2(avg)}</li>
      ))}
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
  groupStatistics: {
    listStyle: 'none',
    paddingTop: '15px',
    paddingLeft: '15px'
  }
};

export default useSheet(Group, STYLES);