import { connect } from 'react-redux';
import React from 'react';

import { getSoldiers } from '../duck';
import SoldierCard from './SoldierCard';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  card: {
    width: '25.1%',
  }
};

const SoldierList = ({soldiers}) => (
  <div style={styles.root}>
    {Object.values(soldiers).map((soldier) => (
      <SoldierCard soldier={soldier} contextStyle={styles.card}></SoldierCard>
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    soldiers: getSoldiers(state),
  };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     refreshSoldiers: () => dispatch(refreshSoldiers()),
//     recruitSoldier: (recruitId) => dispatch(recruitSoldier(recruitId))
//   };
// };

export default connect(mapStateToProps, null)(SoldierList);
