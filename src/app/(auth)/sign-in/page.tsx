import React from 'react';

const SignInPage = () => {
   return (
     <section>
       <h1 className="text-2xl text-red-700 font-semibold text-center">
         সাইন ইন
       </h1>
       <form>
         <fieldset className="fieldset rounded-box w-md p-4">
           <label className="label">ইমেইল</label>
           <input
             type="email"
             name="email"
             className="input outline-none w-md focus::border focus:border-red-700"
           />

           <label className="label">পাসওয়ার্ড</label>
           <input
             type="password"
             className="input outline-none w-md focus::border focus:border-red-700"
             name="password"
           />

           <button type="submit" className="btn bg-red-700 text-white mt-4">
             সাইন ইন করুন
           </button>
         </fieldset>
       </form>
     </section>
   );
};

export default SignInPage;