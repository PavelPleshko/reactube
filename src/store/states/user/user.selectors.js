

export const selectUser = (state)=>state.data;
export const selectUserEmail = (state)=>state.data && state.data.email;
export const selectUserFullname = (state)=> state.data && `${state.data.firstName} ${state.data.lastName}`;
export const selectIsProcessing = (state) =>state.processing;
export const selectErrorText = (state)=>state.isError ? state.isError : null;