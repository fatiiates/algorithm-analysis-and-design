import * as actionTypes from '../../../actions/actionTypes';
import initialState from '../../initialState';

export function changeAlgorithms(state=initialState.PAGES.INDEX.ALGORITHMS, action){
    
    switch (action.type) {
        case actionTypes.CHANGE_INDEX_ALGORITHMS_DATA:
            return action.payload;
        default:
            return state;
    }
}

export function changeSelectedAlgorithm(state=initialState.PAGES.INDEX.SELECTED_ALGORITHM, action){
    
    switch (action.type) {
        case actionTypes.CHANGE_INDEX_SELECTED_ALGORITHMS_DATA:
            return action.payload;
        default:
            return state;
    }
}

