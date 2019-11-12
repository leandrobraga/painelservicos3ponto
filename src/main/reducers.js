import { combineReducers } from 'redux';

import MenuTopReducer from '../common/templates/MenuTop/reducer';
// import MenuAsideReducer from '../common/templates/MenuAside/reducer';
// import TabsReducer from '../common/Tabs/reducer';
// import InfoSintegraReducer from '../components/registers/enterprise/GetInfoSintegra/reducer';

const rootReducer = combineReducers({
  menuTop: MenuTopReducer,
  // menuAside: MenuAsideReducer,
  // tabsReducer: TabsReducer,
  // infoSintegraReducer: InfoSintegraReducer,
});

export default rootReducer;
