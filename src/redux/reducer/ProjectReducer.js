import { ALL, EDIT_PROJECT, PUT_DETAIL } from "../contants/CyberBug";

const stateDefault = {
    arrAll: [],
    projectEdit: {
        "id": 0,
        "projectName": "string",
        "creator": 0,
        "description": "<h1>sasas</h1>",
        "categoryId": "2"
    },
    projectDetail: {}
}
export const ProjectReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case ALL: {
            state.arrAll = action.dataAll;
            return { ...state }
        }
        case EDIT_PROJECT: {
            state.projectEdit = action.projectEditDraw;
            return { ...state }
        }
        case PUT_DETAIL: {
            console.log(action.projectDetail);
            state.projectDetail = action.projectDetail;
            return { ...state }
        }

        default:
            break;
    }
    return { ...state }
}