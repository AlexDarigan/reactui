import { useSearchParams } from "react-router-dom";

function Cart () {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            <label>{searchParams.get("name")}</label>
            <label>{searchParams.get("age")}</label>
            Cart
        </div>
    );
}

export default Cart;