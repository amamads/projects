import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showAddProductModal: false,
  showUsersListModal: false,
  showProductsListModal: false,
  dashboardTest: true
};

const dashboardSlice = createSlice({
  name: 'dashboardSlice',
  initialState,
  reducers: {
    toggleAddProductModal(state) {
      state.showAddProductModal = !state.showAddProductModal;
    },
    toggleShowUsersListModal(state) {
      state.showUsersListModal = !state.showUsersListModal;
    },
    toggleShowProductsListModal(state) {
      state.showProductsListModal = !state.showAddProductModal;
    },
  },
});

export const selectShowAddProductModal = s => s.dashboard.showAddProductModal;
export const selectShowUsersListModal = s => s.dashboard.showUsersListModal;
export const selectShowProductsListModal = s => s.dashboard.showProductsListModal;

export const {
  toggleAddProductModal,
  toggleShowUsersListModal,
  toggleShowProductsListModal
} = dashboardSlice.actions;

export default dashboardSlice.reducer