import React from 'react';

import HUD from '../layout/HUD';
import RecruitList from './layout/RecruitList';
import SoldierList from './layout/SoldierList';

const Warrior = () => (
  <HUD>
    <SoldierList display={'Soldiers'} />
    <RecruitList display={'Recruits'}/>
  </HUD>
);

export default Warrior;
