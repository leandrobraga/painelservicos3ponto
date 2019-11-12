import { OPTIONS_MENU } from '../../consts';

const INITIAL_STATE = {
  itemSelected: OPTIONS_MENU.START,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_ITEM_SELECTED':
      return {
        ...state,
        itemSelected: action.payload,
      };

    default:
      return state;
  }
}
