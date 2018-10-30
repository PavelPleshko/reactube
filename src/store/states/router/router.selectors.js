const selectPathname = (state)=>{
  return (state && state.location) ? state.location.pathname : '/';
}

export {
	selectPathname
}