import types from './category.types';

//category list
const getCategoriesRequest = () => ({
		type:types.GET_CATEGORIES_REQUEST
})

const getCategoriesSuccess = (categories) => ({
		type:types.GET_CATEGORIES_SUCCESS,
		payload:categories
})
const getCategoriesError = (error) => ({
		type:types.GET_CATEGORIES_ERROR,
		payload:error
})


export default {
	getCategoriesRequest, getCategoriesSuccess, getCategoriesError
}