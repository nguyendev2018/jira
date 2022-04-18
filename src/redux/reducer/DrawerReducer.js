import { CLOSE_DRAWER, GET_DETAIL, OPEN_DRAWER, OPEN_FORM_EDIT, SET_SUBMIT_EDIT } from "../contants/CyberBug";
const initialState = {
    visible: false,
    ComponentContent: <p>Default</p>,
    callBackSubmit: () => {
        alert("click demo")
    }
}
export const DrawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DRAWER: {
            state.visible = action.visible;
            return { ...state }
        }
        case CLOSE_DRAWER: {
            state.visible = action.visible;
            return { ...state }
        }
        case OPEN_FORM_EDIT: {
            state.ComponentContent = action.Component;
            state.visible = action.visible;
            return { ...state }
        }
        case SET_SUBMIT_EDIT: {
            state.callBackSubmit = action.submitFunction;
            return { ...state }
        }
        default:
            return state;
    }
}