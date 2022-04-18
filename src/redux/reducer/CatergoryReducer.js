import { GET_CATEGORY } from "../contants/CyberBug";

const stateDefault = {
    arrCategory: []
}
export const CategoryReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_CATEGORY: {
            state.arrCategory = action.getCategory
            return { ...state }
        }
        default:
            break;
    }
    return { ...state }
}