import React, { useActionState } from 'react'

export const Useaction = () => {
  const logindata = (prevData, formData) => {
    let name = formData.get('name');
    let password = formData.get('password');
    let regex = /^[A-Z0-9]+$/i;

    if (name.length < 5) {
      return { error: 'name should be at least 5 characters',name,password };
    } else if (!regex.test(password)) {
      return { error: 'password can contain only numbers and alphabets',name,password };
    } else {
      return  {message:'logindone',name,password} ;
    }
  };

  const [data, action, pending] = useActionState(logindata);
  console.log(data);

  return (
    <div>
      <h1>useaction hook</h1>
      
      {data?.error && <p style={{ color: 'red' }}>{data.error}</p>}
      {data?.message && <p style={{ color: 'green' }}>{data?.message}</p>}

      <form action={action}>
        <input name="name" placeholder="enter name" />
        <input name="password" placeholder="enter password" />
        <button type="submit" disabled={pending}>login</button>
      </form>

    </div>
  );
};
