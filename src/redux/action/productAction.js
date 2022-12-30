
import axios from "axios"
import * as actionType from "../constant/productConstant"
const URL = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {   //thunk used ()=>
    try {
        const { data } = await axios.get(`${URL}/products`)

        dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        console.log("error while calling getproducts api", error.message);
        dispatch({ type: actionType.GET_PRODUCTS_FAIL, payload: error.message })
    }
}
