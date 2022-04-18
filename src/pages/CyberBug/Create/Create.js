import { Editor } from '@tinymce/tinymce-react';
import { withFormik } from 'formik';
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { ActionCreate } from '../../../redux/actions/CyberBugSagaAction';
import { GET_CATEGORY } from '../../../redux/contants/CyberBug';

function Create(props) {
    const arrCategory = useSelector(state => state.CategoryReducer.arrCategory)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: GET_CATEGORY
        })
    }, [])
    const {

        handleSubmit, handleChange, setFieldValue

    } = props;
    const handleEditorChange = (content, editor) => {
        setFieldValue("description", content)
    }
    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit} className='container'>
                <div className='form-group'>
                    <label>Name</label>
                    <input className='form-control' onChange={handleChange} name='projectName' />
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <Editor name='description' onEditorChange={handleEditorChange}
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
                <div className='form-group'>
                    <label for="">Category Id</label>
                    <select defaultValue="sa" onChange={handleChange} className='form-control' name='categoryId'>
                        {arrCategory?.map((item, index) => {
                            return <option value={item.id} key={index}>{item.projectCategoryName}</option>

                        })}
                    </select>
                </div>

                <button type="submit" className='btn btn-outline-primary'>Create</button>
            </form>
        </div>
    )
}
const CreateWithFormik = withFormik({
    // moi lan props cua redux thay doi thi se chay lai return
    enableReinitialize: true,
    mapPropsToValues: () => {
        return {
            projectName: "",
            description: "",
            categoryId: ""
        }



    },
    handleSubmit: (values, { props }) => {

        // props.dispatch({
        //     type: CREATE,
        //     createForm: values
        // })
        props.dispatch(ActionCreate(values))

    }
})(Create);

export default connect()(CreateWithFormik)