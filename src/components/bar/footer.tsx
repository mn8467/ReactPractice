import "./bar.css";

export default function footer(){
    return(
            <nav>
                <div className="bg-white flex flex-col py-5">
                    <div className="flex fon1 text-xs py-1">
                        <p className="px-5">(주)SHOPNAME</p>
                        <p className="px-5">CEO.김철수</p>
                        <p className="px-5">business no.[010-00-00000]</p>
                        <p className="px-5">mail order license. 2024-경기김포-0000</p>
                    </div>
                    <div className="flex fon1 text-xs py-1">
                        <p className="px-5">tel. 1577-8332</p>
                        <p className="px-5">address. 00000 경기도 김포시 김포한강4로 (구래동) 000동 000호</p>
                        <p className="px-5">CPO.수퍼에이전시(shopname@superagency.co.kr)</p>
                        <p className="px-5">hosting provider. cafe24</p>
                    </div>
                    <div className="flex fon3 text-base">
                        <p className="px-5 py-5">© 2024 SUPERAGENCY. All rights reserved.</p>
                    </div>
                </div>
            </nav>
    )
}