import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../baseUrl';

export const postFavorite = animalId => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(animalId));
    }, 2000);
};

export const addFavorite = animalId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: animalId
});