import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'


const SignUp = () => {
    const initialValue = {
        username: '',
    };

    let content;
    const handleSubmit = (values , {resetForm ,setSubmitting} )=>{
        console.log(values)   ;
        resetForm('username') ;
        setSubmitting(true)
    }
    content= (
        <>
            <div>sign up </div>
        </>
    )
    return (
    <div>
        <Formik initialValues={initialValue} onSubmit={handleSubmit }>
        {({ isSubmitting , values  }) => (
          <Form>
            <div className="mb-4">
                {isSubmitting && content}
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Your Name</label>
              <Field id="username" type="text" name = "username" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                <ErrorMessage component={'div'} name = 'username'/>
            </div>


            <button type="submit" disabled={isSubmitting}>
            Submit{` ${isSubmitting}`}
          </button>
          </Form>
        )}
        </Formik>
    </div>
  )
}

export default SignUp
