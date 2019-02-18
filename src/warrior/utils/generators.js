import {v1} from 'uuid';

export const generateRecruit = () => {
  return {
    id: v1(),
    strength: 5,
    vitality: 5,
    weight: 5,
    discipline: 5,
  };
};
