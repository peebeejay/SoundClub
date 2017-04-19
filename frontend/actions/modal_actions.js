// See modal_reducer.js for all valid modal names

export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
export const TOGGLE_MODAL = "TOGGLE_MODAL";

export const showModal = (modal_name) => {
  return {
    type: SHOW_MODAL,
    modal_name
  };
};

export const hideModal = (modal_name) => {
  return {
    type: HIDE_MODAL,
    modal_name
  };
};

export const toggleModal = (modal_name) => {
  return {
    type: TOGGLE_MODAL,
    modal_name
  };
};
