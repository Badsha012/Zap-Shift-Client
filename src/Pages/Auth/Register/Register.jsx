import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { register,handleSubmit,formState:{errors}}=useForm();
     const { registerUser}=useAuth()

        const handleRegistration=(data)=>{
            console.log('after register',data);
            registerUser(data.email,data.password)
            .then(result=>{
              console.log(result.user);
            })
            .catch(error=>{
              console.log(error);
              
            })

        }

    return (
        <div>
            <form  onSubmit={handleSubmit(handleRegistration)}>
                
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email',{required:true})} className="input" placeholder="Email" />
             {
                errors.email?.type==='required' && <p className='text-red-500'>Email is Required</p>
             }
          {/* password */}
          <label className="label">Password</label>
          <input type="password" {...register('password',{required:true,minLength:6,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).+$/})} className="input" placeholder="Password" />
          {
            errors.password?.type==='required' && <p className='text-red-700'>Password is Required</p>

          }
          {
            errors.password?.type=== 'minLength'&& <p className='text-red-600'>Password is  characters o longer</p>
          }
          {
            errors.password?.type ==='pattern' && <p className='text-red-500'>Password must hava at least one Upper case,Atleast one lower case,at least one spacial character,at least one number </p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
            </form>
            
        </div>
    );
};

export default Register;