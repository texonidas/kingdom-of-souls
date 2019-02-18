import { generateRecruit } from './utils/generators';

// actions
const RECRUIT_SOLDIER = 'warrior/RECRUIT_SOLDIER';
const REFRESH_RECRUITS = 'warrior/REFRESH_RECRUITS';

// action creators
export const recruitSoldier = (recruitId) => ({
  type: RECRUIT_SOLDIER,
  payload: recruitId,
});

export const refreshRecruits = (number = 3) => ({
  type: REFRESH_RECRUITS,
  payload: number,
});

// selectors
const root = (state) => state.warrior;

export const getRecruits = (state) => {

  return Object.keys(state.warrior.recruits).map(id => ({
    id,
    ...state.warrior.recruits[id],
  }));
};

export const getSoldiers = (state) => {
  return Object.keys(state.warrior.soldiers).map(id => ({
    id,
    ...state.warrior.soldiers[id],
  }));
};

// reducer
const initialState = {
  soldiers: {},
  recruits: {},
  resources: {},
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case REFRESH_RECRUITS:
      const newRecruits = [...Array(payload)].reduce((acc) => {
        const {id, ...recruit} = generateRecruit();

        return {
          ...acc,
          [id]: recruit
        };
      }, {});

      return {
        ...state,
        recruits: newRecruits,
      }
    case RECRUIT_SOLDIER:
      const {[payload]: newRecruit, ...recruits} = state.recruits;

      return  {
        ...state,
        soldiers: {...state.soldiers, [payload]: newRecruit},
        recruits
      };
    default:
      return state;
  }
};

export default reducer;
