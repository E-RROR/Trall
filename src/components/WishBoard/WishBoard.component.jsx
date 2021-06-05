import {useState} from 'react';

// react bootstrap
import Button from 'react-bootstrap/Button';

// redux
import {useSelector,useDispatch} from 'react-redux';
import {Wish} from '../../redux/Actions';


function Wishboard() {

    // states
    const [wish, setWish] = useState(null);

    // redux
    const reducer = useSelector(state => state.reducer);
    const dispatch = useDispatch();

    return (
        <h1 className="text-center mt-5">
            {reducer.wish}
        </h1>
    );

};

export default Wishboard;
