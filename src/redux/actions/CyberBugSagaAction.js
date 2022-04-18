import { ALL, CREATE, DELETE_FORM, GET_DETAIL, SIGNIN_API, UPDATE_FORM } from "../contants/CyberBug";

export const action_signIn = (value, history) => ({
    type: SIGNIN_API,
    userLogin: {
        email: value.email,
        password: value.password,
        history: history
    }
})
export const ActionCreate = (values) => {
    console.log(values);
    return {

        type: CREATE,
        createForm: {
            projectName: values.projectName,
            description: values.description,
            categoryId: values.categoryId
        }
    }
}
export const ActionAll = () => {
    return {
        type: ALL
    }
}
export const ActionGetDetail = (id) => {
    return {
        type: GET_DETAIL,
        id: id
    }
}
export const ActionUpdateForm = (values) => {
    return {
        type: UPDATE_FORM,
    }
}
export const ActionRemoveForm = (deleteId) => {
    return {
        type: DELETE_FORM,
    }
}