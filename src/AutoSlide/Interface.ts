// 슬라이드에 들어가는 요소들의 타입 선언
export interface SlideProps {
    img: string;
    imgTitle: string;
    imgDesc: string;
  }
  
  // 슬라이드에 들어갈 요소들
  export const slideArr: SlideProps[] = [
    {
      img: "https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/ugc/recolor/rrhb16fm3b7pz3xo5ebp",
      imgTitle: "힘들어도",
      imgDesc: "just do it",
    },
    {
      img: "https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/ugc/recolor/lkziuti3kvoat9svfkgx",
      imgTitle: "따분해도",
      imgDesc: "just do it",
    },
    {
      img: "https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/ugc/recolor/ytfolnmbrruyedegyt5i",
      imgTitle: "넘어져도",
      imgDesc: "just do it",
    },
  ];
  
  // 슬라이드 버튼에 사용될 요소들의 타입 선언
  export interface DirectionBtnType {
    direction: string;
    onClick: () => void;
  }
  
  // 페이지네이션 버튼에 사용될 요소의 타입 선언
  export interface PaginationBtnType {
    slideIndex: number;
    setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
  }