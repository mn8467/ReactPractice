import "./bar.css";

export default function footer(){
    return(
    <>
            <div className="flex md:flex-row sm:flex-col ">
            <div className="flex py-6 px-6">
                <ul>
                    <h2 className="fon2 text-xl">INFORMATION</h2>
                    <li>
                    <br/>
                        <p className="fon1">컨택트</p>
                    </li>
                </ul>
            </div>
            <div className="flex py-6 md:px-36 sm:px-6">
                <ul>
                    <h1 className="fon2 text-xl">COSTOMER SERVICE</h1>
                    <li>
                        <br/>
                        <p className="fon1">배송</p>
                        <p className="fon1">교환 & 반품</p>
                        <p className="fon1">주문 조회</p>
                        <p className="fon1">멤버쉽</p>
                        <p className="fon1">이용약관</p>
                        <p className="fon1">개인정보처리방침</p>
                        <p className="fon1">FAQs</p>
                    </li>
                </ul>
            </div>
            <div className="flex py-6 px-6">
                <ul>
                    <h1 className="fon2 text-xl">SOCIAL</h1>
                    <li>
                    <br/>
                        <p className="fon1">인스타그램</p>
                        <p className="fon1">페이스북</p>
                        <p className="fon1">카카오</p>
                    </li>
                </ul>
            </div>
        </div>
 
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
    </>
    )
}