import React from 'react'
import Xach from '../../assetc/png/gameplay_design_01/clubs.png';
import Sirt from '../../assetc/png/gameplay_design_01/hearts.png';
import Qyap from '../../assetc/png/gameplay_design_01/diamonds.png';
import Xar from '../../assetc/png/gameplay_design_01/clubs.png';
import TableGame from './TableGame/TableGame';

const Main = () => {

    return (
        <>
            <main role="main ">
                <div className="container">
                    <div className="row mt-5 mt-xl-0">
                        <div className="d-flex justify-content-between col-12 offset-md-1 col-md-10 col-lg-10 offset-lg-1">
                            {/* Game User View Silver */}
                            <div className="gamer-user">
                                <div className="d-flex user-number ">
                                    <span className="text-white oil-color font-50 silver-user gamer-number"> 6</span>
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
                            {/* Game User View Golden */}
                            <div className="gamer-user gamer-top active-grean">
                                <div className="d-flex ">
                                    <span className="text-white oil-color golden-user font-50 gamer-number "> 5</span>
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
                            {/* Game User View Silver */}
                            <div className="gamer-user ">
                                <div className="d-flex ">
                                    <span className="text-white oil-color font-50 gamer-number silver-user"> 4</span>
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
                            <TableGame />
                        </section>

                        <div className="d-flex justify-content-between col-12 offset-md-1 col-md-10 col-lg-10 offset-lg-1">
                            {/* Game User View Golden */}
                            <div className="gamer-user ">
                                <div className="d-flex ">
                                    <span className="text-white oil-color font-50 gamer-number golden-user">3</span>
                                </div>

                                <div className="d-flex flex-column">

                                    <div className="d-flex justify-content-between gamer-title gold-title ">
                                        <div className=" oil-color  mr-3"> C 1</div>
                                        <div className=" oil-color font-weight-bold"> FRIDDYT </div>
                                    </div>
                                    <div className="d-flex justify-content-between gamer-subtitle  gold-subtitle" >
                                        <div className="text-white"> +1 </div>
                                        <div className="text-white"> <img src={Xar} alt="" className="gamer-card" />  37 </div>
                                    </div>
                                </div>
                            </div>
                            {/* Game User View Silver */}
                            <div className="gamer-user gamer-bottom">
                                <div className="d-flex ">
                                    <span className="text-white oil-color font-50 gamer-number silver-user"> 2</span>
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
                            {/* Game User View Golden */}
                            <div className="gamer-user">
                                <div className="d-flex ">
                                    <span className="text-white oil-color font-50 gamer-number golden-user"> 1</span>
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