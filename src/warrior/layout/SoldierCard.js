import React from 'react';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    textAlign: 'center',
    textDecoration: 'underline',
    width: '100%',
  },
  statRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const getSoldierStats = (soldier) => Object.keys(soldier);

const SoldierCard = ({soldier, contextStyle = {}, handleClick = () => {}}) => (
  <div key={soldier.id} style={{...styles.root, ...contextStyle}} onClick={handleClick}>
    <div style={styles.header}>
      <h4>{soldier.name || 'Name'}</h4>
    </div>
    {getSoldierStats(soldier).map(stat => (
      <div key={stat} style={styles.statRow}>
        <div>{stat}</div>
        <div>{soldier[stat]}</div>
      </div>
    ))}
  </div>
);

export default SoldierCard;
