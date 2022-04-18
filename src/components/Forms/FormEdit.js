import { Editor } from '@tinymce/tinymce-react';
import { withFormik } from 'formik';
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { GET_CATEGORY, SET_SUBMIT_EDIT, UPDATE_FORM } from '../../redux/contants/CyberBug';

function FormEdit(props) {
    const arrCategory = useSelector(state => state.CategoryReducer.arrCategory)

    const {
        handleSubmit, handleChange, setFieldValue, values
    } = props;
    const handleEditorChange = (content, editor) => {
        setFieldValue("description", content)
    }
    const dispatch = useDispatch()
    const submitForm = (e) => {
        e.preventDefault();
        alert("submit edit")
    }
    useEffect(() => {

        dispatch({
            type: GET_CATEGORY
        })
        dispatch({
            type: SET_SUBMIT_EDIT,
            submitFunction: handleSubmit
        })
    }, [])
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label>Name</label>
                            <input value={values.projectName} className='form-control' name='projectName' onChange={handleChange} />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label>Category</label>
                            <select onChange={handleChange} className='form-control' value={values.categoryId} name='categoryId'>
                                {arrCategory?.map((item, index) => {
                                    return <option value={item.id} key={index}>{item.projectCategoryName}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label>Description</label>
                            <Editor name='description' onEditorChange={handleEditorChange} initialValue={values.description}
                                init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                        'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}

                            />
                        </div>
                    </div>

                </div>
                <button className='mb-3 btn btn-primary submit'> Submit</button>
            </form>

        </div>
    )
}
const EditWithFormik = withFormik({
    // moi lan props cua redux thay doi thi se chay lai return
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        const { projectEdit } = props;
        return {
            id: projectEdit.id,
            projectName: projectEdit.projectName,
            description: projectEdit.description,
            categoryId: projectEdit.categoryId
        }
    },
    handleSubmit: (values, { props }) => {

        props.dispatch({
            type: UPDATE_FORM,
            values
        })

    }
})(FormEdit);
const mapStateToProps = (state) => ({
    projectEdit: state.ProjectReducer.projectEdit
})

export default connect(mapStateToProps)(EditWithFormik)