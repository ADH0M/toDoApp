import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup'

const SignUp = () => {
  const initialValues = {
    username: '',
    password: '',
    confirmpassword: '',
    useremail: '',
    phone1: '',
    phone2: '',
    gender: '',
    birthdate: '',
    toggle: false,
  };

  const validation = Yup.object().shape({
    username:Yup.string().required('your name is required'),
    confirmpassword:Yup.string().required('confirm password is required'),
    password:Yup.string().required('Password is required'),
    useremail:Yup.string().email('Invalid email').required('your name is required'),
    phone1:Yup.number().required('Phone 1  is required'),
    phone2:Yup.string().required('Phone 2  is required'),
    birthdate:Yup.string().required('birthdate is required')
  })

  const handleSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values,null,2));
    console.log(values);
    
    setSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <Formik initialValues={initialValues} validationSchema={validation} onSubmit={handleSubmit} >
        {({ values }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Your Name</label>
              <Field id="username" type="text" name="username" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                <ErrorMessage component={'div'} name='username'/>
            </div>

            <div className="mb-4">
              <label htmlFor="useremail" className="block text-sm font-medium text-gray-700">Your Email</label>
              <Field id="useremail" type="email" name="useremail" placeholder="john@yho.co" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              <ErrorMessage component={'div'} name='useremail'/>

            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Field id="password" type="password" name="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              <ErrorMessage component={'div'} name='password'/>

            </div>

            <div className="mb-4">
              <label htmlFor="confirmpass" className="block text-sm font-medium text-gray-700">Confirm password</label>
              <Field id="confirmpass" type="password" name="confirmpassword" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              <ErrorMessage component={'div'} name='confirmpassword'/>

            </div>

            <div className="mb-4">
              <label htmlFor="phone1" className="block text-sm font-medium text-gray-700">Phone 1</label>
              <Field id="phone1" type="tel" name="phone1" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              <ErrorMessage component={'div'} name='phone1'/>

            </div>

            <div className="mb-4">
              <label htmlFor="phone2" className="block text-sm font-medium text-gray-700">Phone 2</label>
              <Field id="phone2" type="tel" name="phone2" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              <ErrorMessage component={'div'} name='phone2'/>
            
            </div>

            <div className="mb-4">
              <div className="text-sm font-medium text-gray-700">Gender</div>
              <label htmlFor="male" className="inline-flex items-center mr-4">
                <Field name="gender" id="male" type="radio" value="male" className="form-radio" />
                <span className="ml-2">Male</span>
              </label>
              <label htmlFor="female" className="inline-flex items-center">
                <Field name="gender" id="female" type="radio" value="female" className="form-radio" />
                <span className="ml-2">Female</span>
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Birthdate</label>
              <Field name="birthdate" id="birthdate" type="date" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
              <ErrorMessage component={'div'} name='birthdate'/>

            </div>

            <div className="mb-4">
              <label htmlFor="toggle" className="inline-flex items-center">
                <Field name="toggle" id="toggle" type="checkbox" className="form-checkbox" />
                <span className="ml-2">Save all data: {`${values.toggle}`}</span>
              </label>
            </div>

            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;



