import React, { useEffect, useState } from 'react'
import axios from 'axios'

function SignUpPage() {
  const [ email       , setEmail] =useState('');
  const [ password    , setPassword] =useState('');

//   const upload = () => {
//         const form_data = new FormData();
//         form_data.append('name'      , name);
//         form_data.append('email'     , email);
//         form_data.append('password'  , password);
//         form_data.append('passwordConfirm', confirmPass);
//         form_data.append('phones', phone1);
//         form_data.append('phones', phone2);
        
//         axios.post(`http://localhost:3009/auth/signup?birthdate=${date}`, form_data)
//           .then(response => console.log('File uploaded successfully:', response))
//           .catch(error => console.error('Error uploading file:', error)); // Handle errors
//       };

const login = async(e) => {

    const formData = { password, email };

    try {
      const response = await axios.post(`http://localhost:3009/auth//login/rev`, formData);
      console.log('Data submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }      }
    
    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                    sign up     
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>


                        {/* <form>
                            <div className='name'>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                <input type="name" name="name" onChange={(e)=>{ setName(e.target.value)}} id="name" required=""/>
                            </div>

                            <div className='email'>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" onChange={(e)=>{ setEmail(e.target.value)}} name="email" id="email" required=""/>
                            </div>

                            <div className='birthdate'>
                                <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your birthdate</label>
                                <input type="date" name="date" id="date" onChange={(e)=>{ setDate(e.target.value)}} required=""/>
                            </div>

                            <div className='phones '>
                                <label for="phones" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
                                <input type="phone" name="phone1" id="phones" onChange={(e)=>{ setPhone1(e.target.value)}} required="" className='mr-2'/>
                                <input type="phone" name="phone2" id="phones" onChange={(e)=>{ setPhone2(e.target.value)}} required=""/>
                            </div>

                            <div className='password'>
                                <label for="phones" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" onChange={(e)=>{ setPassword(e.target.value)}} name="phone1" id="phones" placeholder='********' required="" />
                            </div>

                            <div className='confirmpassword'>
                                <label for="confrim" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">confirm password</label>
                                <input type="password" onChange={(e)=>{ setComfirmPass(e.target.value)}} name="cofirmpass" id="confirm" placeholder='********' required="" />
                            </div>
                            <div className='profileImage'>
                                <label for="userimg" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">confirm password</label>
                                <input type="file" name="userimg" id="userimg"  />
                            </div>

                            <div className='gender flex gap-2 items-center justify-start text-center pt-1'>
                                <input type='radio' name="phone1" id="phones" placeholder='********' required="" />
                                <label for="confrim" class="block  text-sm font-medium text-gray-900 dark:text-white">male</label>
                                
                                <input type='radio' name="phone1" id="phones" placeholder='********' required="" />
                                <label for="confrim" class="block  text-sm font-medium text-gray-900 dark:text-white">female</label>
                            </div>

                            <button type="button" onClick={upload()} class="w-full mt-4 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>

                        </form> */}
                            <div className='email'>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" onChange={(e)=>{ setEmail(e.target.value)}} id="email" required=""/>
                            </div>
                            <div className='email'>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" name="password" onChange={(e)=>{ setPassword(e.target.value)}} id="password" required=""/>
                            </div>
                            <button type="button" onClick={login} class="w-full mt-4 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>

                    </div>
                </div>
            </div>
        </section>
  )
}

export default SignUpPage
