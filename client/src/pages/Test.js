import React from "react";
import { useSelector } from "react-redux";
function Test() {
    const userStore = useSelector(state => state.userStore)
    return (
        <>
            <div>
                Current User :: {JSON.stringify(userStore)}
            </div>
        </>
    );
}
export default Test;