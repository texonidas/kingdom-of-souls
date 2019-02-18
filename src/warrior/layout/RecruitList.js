import { connect } from 'react-redux';
import React from 'react';
import { getRecruits, refreshRecruits, recruitSoldier } from '../duck';
import SoldierCard from './SoldierCard';

const RecruitList = ({recruits, recruitSoldier, refreshRecruits}) => (
  <div>
    <h1>Recruits</h1>
    <div>
      {recruits.map((recruit) => (
        <SoldierCard soldier={recruit} handleClick={() => recruitSoldier(recruit.id)}></SoldierCard>
      ))}
    </div>
    <button onClick={refreshRecruits}>LETS GET SOME RECRUITS</button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    recruits: getRecruits(state),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    refreshRecruits: () => dispatch(refreshRecruits()),
    recruitSoldier: (recruitId) => dispatch(recruitSoldier(recruitId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecruitList);
