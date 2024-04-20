import { useState } from "react";
import "./banner.scss";

interface SliedeSwProps{
    title : String;
    content : String;
}

const slides : SliedeSwProps [] = [
    {title : "Nike",
     content : "요즘 하락세 달리는중 주가 반토막 남"},
    {title : "Adidas",
    content : "나이키 치고 올라오는 중"},
    {title : "Hoka",
    content : "디자인 너무 못생김 내스타일 아님 근데 발 편하다네?"},
    {title : "Mizuno",
    content : "발이 정말 편한 신발 (동양인 특화)"},
    {title : "UMBRO",
    content : "옷 디자인 은근 이쁜거 많음 살짝 레트로 느낌"},
];



export default function Banner() {
    const [animate, setAnimate] = useState(true);
    const onStop = () => setAnimate(false);
    const onRun = () => setAnimate(true);

    return (
        <div className="wrapper">
            <div className="slide_container">
                <ul className="slide_wrapper" onMouseEnter={onStop} onMouseLeave={onRun}>
                    <div className={"slide original".concat(animate ? "" : " stop")}>
                        {slides.map((s, i) => (<li key={i} className={"big"}>
                                <div className="item">
                                    <h2>{s.title}</h2>
                                    <p>{s.content}</p>
                                </div>
                            </li>
                        ))}
                    </div>
                    <div className={"slide clone".concat(animate ? "" : " stop")}>
                        {slides.map((s, i) => (<li key={i} className={"big"}>
                                <div className="item">
                                    <h2>{s.title}</h2>
                                    <p>{s.content}</p>
                                </div>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    );
}