import todoSlice from "./todoSlice.js";

const setData = (event) => {
    return( (dispatch) => {
            event.preventDefault();
            dispatch(todoSlice.actions.setLoading(true));
            setTimeout(() => {
                dispatch(todoSlice.actions.addItem(event.target.text_input.value));
                dispatch(todoSlice.actions.setLoading(false));
                event.target.text_input.value = '';
            }, 1000);
        }
    )
}

export {setData};