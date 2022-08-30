import * as React from "react";

const Menu = () => {
    return (
        <>
            <div id="container-menu">
                <div>
                    <a className="btn blur" href="#inicio"><i className="fa-solid fa-arrow-up"></i></a>
                </div>
                <div>
                    <a className="btn blur" href="#info"><i className="fa-solid fa-info"></i></a>
                </div>
                <div>
                    <a className="btn blur" href="#fim"><i className="fa-solid fa-arrow-down"></i></a>
                </div>
            </div>
        </>
    );
}

export default Menu;