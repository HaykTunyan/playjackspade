import React from 'react';
import ListIcon from '../../assetc/png/gameplay_design_01/list_icon.png';

const Header = () => {

    return (
        <>
        <header>
            <div className="d-flex justify-content-between p-4">
                <div className="d-flex align-items-center">
                    <h1 className="oil-color">ROOM ID -FRED -N </h1>
                </div>
                <div className="">
                <img src={ListIcon} alt="LIST-ICON" />
                </div>
                
            </div>
        </header>
        </>
    )
}

export default Header;