

const selectUser = (state)=>state.data;
const selectUserEmail = (state)=>state.data && state.data.email;
const selectUserFullname = (state)=> state.data && `${state.data.firstName} ${state.data.lastName}`;
const selectUserFirstName = (state)=> state.data && state.data.firstName;
const selectIsProcessing = (state) =>state.processing;
const selectErrorText = (state)=>state.isError ? state.isError : null;
const selectIsAuthenticated = (state)=>state.data && state.data.token;


export {
	selectUser,selectUserEmail,selectUserFullname,selectUserFirstName,
	selectIsProcessing,selectErrorText,
	selectIsAuthenticated
}