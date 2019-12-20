import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Students from '../pages/Students';
import StudentsForm from '../pages/Students/Form';
import Plans from '../pages/Plans';
import PlanForm from '../pages/Plans/Form';
import Registrations from '../pages/Registrations';
import RegistrationForm from '../pages/Registrations/Form';

import Help from '../pages/Help';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students/form" component={StudentsForm} isPrivate />
      <Route path="/students" component={Students} isPrivate />
      <Route path="/plans/form" component={PlanForm} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route
        path="/registrations/form"
        component={RegistrationForm}
        isPrivate
      />
      <Route path="/registrations" component={Registrations} isPrivate />
      <Route path="/help" component={Help} isPrivate />
    </Switch>
  );
}
