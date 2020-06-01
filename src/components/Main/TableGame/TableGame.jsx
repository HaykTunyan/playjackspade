import React from "react";
import Xach from '../../../assetc/png/gameplay_design_01/clubs.png';
import Sirt from '../../../assetc/png/gameplay_design_01/hearts.png';
import Qyap from '../../../assetc/png/gameplay_design_01/diamonds.png';
import Xar from '../../../assetc/png/gameplay_design_01/clubs.png';


const TableGame = () => {
    return (
        <>
          <div className="table-view">
                                <div className="d-flex justify-content-between step-one">

                                    <span className="increment-index square" >
                                        +
                                    </span>
                                    <span className="decrement-index  square">
                                        +1
                                    </span>
                                    <span className="decrement-index  square">

                                    </span>
                                    <span className="decrement-index  square">

                                    </span>
                                    <span className="decrement-index  rectangle">

                                    </span>

                                </div>
                                <div className="d-flex justify-content-between step-two">

                                    <span className="square-number square" >
                                        28
                                    </span>
                                    <span className="square-number square" >
                                        29
                                    </span>
                                    <span className="square-number square" >
                                        30
                                    </span>
                                    <span className="square-number square" >
                                        31
                                    </span>
                                    <span className="square-number square" >
                                        32
                                    </span>
                                    <span className="square-number square" >
                                        33
                                    </span>
                                    <span className="square-number square" >
                                        34
                                    </span>
                                    <span className="square-number square">
                                        35
                                    </span>
                                    <span className="square-number square">
                                        36
                                    </span>
                                    <span className="square-number square">
                                        37
                                    </span>

                                </div>
                                <div className="d-flex justify-content-between step-three">

                                    <span className="square-number square" >
                                        38
                                    </span>
                                    <span className="square-number square" >
                                        39
                                    </span>
                                    <span className="square-number square" >
                                        40
                                    </span>
                                    <span className="square-number square" >
                                        41
                                    </span>
                                    <span className="square-number square" >
                                        42
                                    </span>
                                    <span className="square-number square" >
                                        43
                                    </span>
                                    <span className="square-number square" >
                                        44
                                    </span>
                                    <span className="square-number square">
                                        45
                                    </span>
                                    <span className="square-number square">
                                        46
                                    </span>
                                    <span className="square-number square">
                                        47
                                    </span>

                                </div>
                                <div className="d-flex justify-content-between step-four">

                                    <span className="square-number square" >
                                        48
                                    </span>
                                    <span className="square-number square" >
                                        49
                                    </span>
                                    <span className="square-number square" >
                                        50
                                    </span>
                                    <span className="square-number rectangle-lg" >
                                        <img src={Xach} className="tab-img" alt="" />
                                        <img src={Sirt} className="tab-img" alt="" />
                                        <img src={Qyap} className="tab-img" alt="" />
                                        <img src={Xar} className="tab-img" alt="" />

                                    </span>

                                    <span className="square-number square">
                                        NS
                                    </span>
                                    <span className="square-number square">
                                        NT
                                    </span>
                                    <span className="square-number rectangle">
                                        PASS
                                    </span>

                                </div>

                                <div className="d-flex justify-content-between step-five">

                                    <span className="increment-index square" >
                                        X
                                    </span>
                                    <span className="decrement-index  square">
                                        X
                                    </span>



                                    <span className="decrement-index  rectangle-lg">

                                    </span>

                                </div>

                            </div>
        </>
    )
}

export default TableGame