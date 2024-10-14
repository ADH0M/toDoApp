import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const validation = Yup.object().shape({
  username: Yup.string().required("your  name is required "),
  useremail: Yup.string()
    .email("Invalid email")
    .required("your  email is required "),
});



const FormComponent = () => {
const initialValues = {
    username:'',
    useremail:'',
    gender:'' ,
    toggle:false,
    numbers:[]
}

const handleSumbit = (values , {setSubmitting} )=>{
    console.log(values);
    setSubmitting(false)
}


  return (
    <div className="w-full h-[100vh] bg-slate-500 ">
      
        <Formik initialValues={initialValues} onSubmit={handleSumbit} validationSchema={validation}>

            {({ handleSubmit ,values, isSubmitting }) => (
                <Form onSubmit={ handleSubmit }>
                    <div>
                        <label htmlFor="username" > your name </label>
                        < Field type={'text'} name={'username'} id={'username'} />
                        <ErrorMessage name="username" component={'div'} className="erro text-red-500" />
                    </div>
                    
                    <div>
                        <label htmlFor="useremail" > your email </label>
                        < Field type={'email'} name={'useremail'} id={'useremail'} />
                        <ErrorMessage name="useremail" component={'div'} className="erro text-red-500" />

                    </div>
                    
                    <div>
                        <h5>gender</h5>
                        <label htmlFor="male" > male </label>
                        < Field type={'radio'} name={'gender'} id={'male'} value={"male"}/>
                        <label htmlFor="female" > female </label>
                        < Field type={'radio'} name={'gender'} id={'female'} value={"female"}/>
                        <ErrorMessage name="gender" component={'div'} className="erro text-red-500" />
                        <p>{values.gender}</p>

                    </div>

                    <div>
                        <label htmlFor="save"> {`${values.toggle}`}
                        <Field name='toggle' id='save' type='checkbox' />
                        <label htmlFor="num">num1
                            <Field name='numbers' value='1' id='num' type='checkbox' />
                        </label>
                        <label htmlFor="num">num2
                            <Field name='numbers' value='2' id='num' type='checkbox' />
                        </label>
                        <label htmlFor="num">num3
                            <Field name='numbers' value='3' id='num' type='checkbox' />
                        </label>

                        </label>

                    </div>


                    <button type="submit" disabled={isSubmitting}>submit { isSubmitting && <span>....</span>} </button>
                    
                </Form>

            )}


        </Formik>
      
    </div>
  );
};

export default FormComponent;
