export function setItemSelected(value) {
  return {
    type: 'CHANGE_ITEM_SELECTED',
    payload: value,
  };
}

export function oi(value) {
  return {
    type: 'CHANGE_DOCUMENT_ENTERPRISE',
    payload: value,
  };
}
