import "./bar.css";

export default function footer(){
    return(
            <nav>
                <div className="bg-white">
                    <div className="py-5">
                        <ul className=" fon1 text-xs py-1 inline-table " >
                            <li className="px-5">(주)SHOPNAME</li>
                            <li className="px-5">CEO.김철수</li>
                            <li className="px-5">business no.[010-00-00000]</li>
                            <li className="px-5">mail order license. 2024-경기김포-0000</li>
                        </ul>
                        <ul className=" fon1 text-xs py-1 inline-table   ">
                            <li className="px-5">tel. 1577-8332</li>
                            <li className="px-5">address. 00000 경기도 김포시 김포한강4로 (구래동) 000동 000호</li>
                            <li className="px-5">CPO.수퍼에이전시(shopname@superagency.co.kr)</li>
                            <li className="px-5">hosting provider. cafe24</li>
                        </ul>
                    </div>
                        <div className="flex justify-between fon3 text-base">
                                <p className="px-5 py-5">© 2024 SUPERAGENCY. All rights reserved.</p>
                                <p className="px-5 py-5">SITE BY JUNG.</p>
                        </div>
                </div>
            </nav>
    )
}