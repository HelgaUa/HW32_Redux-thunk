import {Button} from "./Button.jsx";
import {useSelector, useDispatch } from "react-redux";
import selectors from "../../engine/todo/selectors.js";
import todoSlice from "../../engine/todo/todoSlice.js";

export function Footer() {
    const items = useSelector(selectors.itemsSelector);
    const dispatch = useDispatch();
    const onClear = () => {
        dispatch(todoSlice.actions.setItems([]))
    };

    return (
        <div className='d-flex justify-content-between'>
            <span>Total number of tasks: {items.length}</span>
            <Button className='btn-outline-danger mx-3' onClick={onClear}>Clear</Button>
        </div>
    )
}