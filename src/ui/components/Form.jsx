import { Button } from "./Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import selectors from "../../engine/todo/selectors.js";
import { setData } from '../../engine/todo/thunks.js';
export function Form() {
    const dispatch = useDispatch();
    const loading = useSelector(selectors.loadingSelector);
    const onSubmitClick = (event) => {
        dispatch(setData(event));
    };

    return (
        <form className="form" onSubmit={onSubmitClick}>
            <input className="form-control form-control-sm" type='text' name='text_input'/>
            <Button className="btn-outline-success mx-1" disabled={loading}>Send</Button>
        </form>
    )
}