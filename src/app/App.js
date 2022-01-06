import * as React from "react";
import {Route} from "react-router";
import {fetchUtils, Admin, Resource, ListGuesser} from 'react-admin';

import {authProvider, getToken} from '../data/AuthProvider';
import simpleRestProvider from 'ra-data-simple-rest';
import {API_BASE_URL} from '../constant/Config';
import Dashboard from "../pages/dashboard/Dashboard";
import CustomLayout from "../layout/Layout";
//TODO : encapsulate to array for each page index.js
import {ProfileShow} from "../pages/profile/ProfileShow";
import {VaccineList} from "../pages/vaccine/vaccine/VaccineList";
import {ClinicList} from "../pages/clinic/clinic/ClinicList";

import LoginWithTheme from "../pages/login/Login";
import {ClinicCreate} from "../pages/clinic/clinic/ClinicCreate";
import {AdminList} from "../pages/clinic/admin/AdminList";
import {AdminCreate} from "../pages/clinic/admin/AdminCreate";
import {VaccineCreate} from "../pages/vaccine/vaccine/VaccineCreate";
import {OrderList} from "../pages/vaccine/order/OrderList";
import {DiseaseCreate} from "../pages/vaccine/disease/DiseaseCreate";
import {DiseaseList} from "../pages/vaccine/disease/DiseaseList";


const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({Accept: 'application/json'});
  }
  const auth = getToken();
  options.headers.set('Authorization', `Bearer ${auth.authenticationToken}`);
  return fetchUtils.fetchJson(url, options);
}
const dataProvider = simpleRestProvider(API_BASE_URL, httpClient);
/*,

<Route exact path="/resetPassword" component={ResetPassword} noLayout/>*/
//TODO : Vaccine SHOW EDIT detail
//TODO: Clinic SHOW EDIT detail
//TODO: Order EDIT detail
//TODO: Reset password
//TODO: Edit Profile
//TODO: Api Resource for SelectInput
//TODO: Configure Dockerfile and nginx.conf
const App = () => (
    <Admin disableTelemetry
           dashboard={Dashboard}
           loginPage={LoginWithTheme}
           authProvider={authProvider}
           dataProvider={dataProvider}
           layout={CustomLayout}
           customRoutes={[
             <Route
                 key="profile"
                 path="/profile"
                 render={() => <ProfileShow/>}
             />
           ]}
    >
        <Resource name="profile"/>
        <Resource name="clinic/admins" list={AdminList} create={AdminCreate} options={{ label: 'Clinic\'s Admins'}}/>
        <Resource name="clinic" list={ClinicList} create={ClinicCreate} options={{ label: 'Clinic' }}/>
        <Resource name="diseases" list={DiseaseList} create={DiseaseCreate}/>
        <Resource name="vaccines/orders" list={OrderList} options={{ label: 'Vaccines Orders'}}/>
        <Resource name="vaccines" list={VaccineList} create={VaccineCreate}/>
      {/*Resource for SelectInput  */}
        <Resource name="clinic/admins/selectInput"/>
      {/*        <Resource name="clinic/roles"/>
        <Resource name="shift/board/statuses"/>    */}
    </Admin>
);

export default App;