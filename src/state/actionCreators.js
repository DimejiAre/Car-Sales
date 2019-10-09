import * as types from './actionTypes';

export function addFeature(item){
    return {
        type: types.ADD_FEATURE,
        payload: item
    }
}