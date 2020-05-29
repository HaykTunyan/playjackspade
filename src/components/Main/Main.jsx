import React from 'react'
import Xach from '../../assetc/png/gameplay_design_01/clubs.png';
import Sirt from '../../assetc/png/gameplay_design_01/hearts.png';
import Qyap from '../../assetc/png/gameplay_design_01/diamonds.png';
import Xar from '../../assetc/png/gameplay_design_01/clubs.png';

const Main = () => {

    return (
        <>
            <main role="main">
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-between col-12 offset-md-1 col-md-10 col-lg-10 offset-lg-1">
                            <div className="gamer-user">
                                <div className="d-flex">
                                    <span className="text-white oil-color font-50 gamer-number"> 6</span>
                                </div>

                                <div className="d-flex flex-column">

                                    <div className="d-flex justify-content-between gamer-title ">
                                        <div className=" oil-color  mr-3"> C 1</div>
                                        <div className=" oil-color font-weight-bold"> FRIDDYT </div>
                                    </div>
                                    <div className="d-flex justify-content-between gamer-subtitle">
                                        <div className="text-white"> +1 </div>
                                        <div className="text-white"> <img src={Xach} alt="" className="gamer-card" />  37 </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gamer-user gamer-top active-grean">
                                <div className="d-flex ">
                                    <span className="text-white oil-color font-50 gamer-number"> 5</span>
                                </div>
                                <div className="d-flex flex-column">

                                    <div className="d-flex justify-content-between gamer-title ">
                                        <div className=" oil-color  mr-3"> C 1</div>
                                        <div className=" oil-color font-weight-bold"> FRIDDYT </div>
                                    </div>
                                    <div className="d-flex justify-content-between gamer-subtitle">
                                        <div className="text-white"> +1 </div>
                                        <div className="text-white"> <img src={Qyap} alt="" className="gamer-card" />  37 </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gamer-user ">
                                <div className="d-flex">
                                    <span className="text-white oil-color font-50 gamer-number"> 4</span>
                                </div>

                                <div className="d-flex flex-column">

                                    <div className="d-flex justify-content-between gamer-title ">
                                        <div className=" oil-color  mr-3"> C 1</div>
                                        <div className=" oil-color font-weight-bold"> FRIDDYT </div>
                                    </div>
                                    <div className="d-flex justify-content-between gamer-subtitle">
                                        <div className="text-white"> +1 </div>
                                        <div className="text-white"> <img src={Qyap} alt="" className="gamer-card" />  37 </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="game-table col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
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
                        </section>

                        <div className="d-flex justify-content-between col-12 offset-md-1 col-md-10 col-lg-10 offset-lg-1">

                            <div className="gamer-user">
                                <div className="d-flex">
                                    <span className="text-white oil-color font-50 gamer-number">3</span>
                                </div>

                                <div className="d-flex flex-column">

                                    <div className="d-flex justify-content-between gamer-title ">
                                        <div className=" oil-color  mr-3"> C 1</div>
                                        <div className=" oil-color font-weight-bold"> FRIDDYT </div>
                                    </div>
                                    <div className="d-flex justify-content-between gamer-subtitle">
                                        <div className="text-white"> +1 </div>
                                        <div className="text-white"> <img src={Xar} alt="" className="gamer-card" />  37 </div>
                                    </div>
                                </div>
                            </div>

                            <div className="gamer-user gamer-bottom">
                                <div className="d-flex">
                                    <span className="text-white oil-color font-50 gamer-number"> 2</span>
                                </div>

                                <div className="d-flex flex-column">

                                    <div className="d-flex justify-content-between gamer-title ">
                                        <div className=" oil-color  mr-3"> C 1</div>
                                        <div className=" oil-color font-weight-bold"> FRIDDYT </div>
                                    </div>
                                    <div className="d-flex justify-content-between gamer-subtitle">
                                        <div className="text-white"> +1 </div>
                                        <div className="text-white"> <img src={Qyap} alt="" className="gamer-card" />  37 </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gamer-user">
                                <div className="d-flex">
                                    <span className="text-white oil-color font-50 gamer-number"> 1</span>
                                </div>

                                <div className="d-flex flex-column">

                                    <div className="d-flex justify-content-between gamer-title ">
                                        <div className=" oil-color  mr-3"> C 1</div>
                                        <div className=" oil-color font-weight-bold"> FRIDDYT </div>
                                    </div>
                                    <div className="d-flex justify-content-between gamer-subtitle">
                                        <div className="text-white"> +1 </div>
                                        <div className="text-white"> <img src={Qyap} alt="" className="gamer-card" />  37 </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </>
    )
}

export default Main;