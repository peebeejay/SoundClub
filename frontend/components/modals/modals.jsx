import React from 'react';
import LoginForm from './login_form.jsx';
import CreateUserForm from './create_user_form.jsx';

const Modals = ({ children }) => {
  return (
    <div>
      <LoginForm />
      <CreateUserForm />
    </div>
  );
};

export default Modals;
