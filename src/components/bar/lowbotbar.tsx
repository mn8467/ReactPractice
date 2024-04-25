import "./bar.css";

export default function lowbotbar(){
    return(
        <>
            <div className="flex flex-row justify-start">
                <div className="py-6 px-6">
                    <ul>
                        <h2 className="fon2 text-xl">INFORMATION</h2>
                        <li>
                        <br/>
                            <p className="fon1">컨택트</p>
                        </li>
                    </ul>
                </div>
                <div className="py-6 px-36">
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
                <div className="py-6 px-16">
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
        </>
    )
}