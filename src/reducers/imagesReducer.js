import { IMAGES } from "../constatns";

export const imagesReducer = (state = [], action) => {
    if (action.type === IMAGES.LOAD_SUCCESS) {
        return [...state, ...action.images]
    }
    return state
};


