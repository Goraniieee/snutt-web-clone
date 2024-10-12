import { useNavigate } from "react-router-dom";


export const DefaultPage = () => {

  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate('/login');
  }

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div id="logo" className="w-40 h-40 flex flex-col items-center gap-4 mt-[50%] mb-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
            <rect x="40.3521" y="39.1343" width="20.1467" height="20.8626" fill="#EC8572"/>
            <rect x="40.3521" y="15.522" width="20.1467" height="20.8626" fill="#EF975D"/>
            <rect x="16.7397" y="39.1343" width="20.1467" height="20.8626" fill="#EF975D"/>
            <rect x="16.7397" y="15.522" width="20.1467" height="20.8626" fill="#EF975D"/>
            <rect x="11.4976" width="6.71266" height="59.9969" fill="#26181D"/>
            <rect x="35.4077" width="6.71266" height="59.9969" fill="#26181D"/>
            <rect x="0.501953" y="41.2847" width="6.71266" height="59.9969" transform="rotate(-90 0.501953 41.2847)" fill="#26181D"/>
            <rect x="0.501465" y="17.3745" width="6.71266" height="59.9969" transform="rotate(-90 0.501465 17.3745)" fill="#26181D"/>
          </svg>
          <div className="font-sf-pro font-black text-xl">TimeTable</div>
        </div>

        <div id="buttons" className="w-full flex flex-col items-center justify-center gap-0.5 mb-7">
          <button className="w-10/12 h-10 p-3 bg-[#F58D3D] rounded-md font-pretendard font-semibold text-sm text-white leading-3" onClick={onClickLogin}>
            로그인
          </button>
          <button className="w-10/12 h-10 p-3 rounded-md font-pretendard font-semibold text-sm leading-3">
            회원가입
          </button>
        </div>

        <div id="divider" className="w-11/12 flex flex-row items-center justify-center mb-7">
          <div className="border-t border-[#C4C4C4] flex-grow mr-3"></div>
          <span className="font-pretendard text-[#C4C4C4] text-sm">SNS 계정으로 계속하기</span>
          <div className="border-t border-[#C4C4C4] flex-grow ml-3"></div>
        </div>

        <div id="social-login" className="flex flex-row gap-2.5">
          <button id="kakao" className="flex items-center justify-center h-11 w-11 rounded-3xl p-0">
            <img src="/src/public/kakao_logo.png" alt="kakao logo" />
          </button>
          <button id="google" className="flex items-center justify-center h-11 w-11 rounded-3xl p-1 border-[0.5px] border-[#C4C4C4]">
            <img src="/src/public/google_logo.png" alt="google logo" />
          </button>
          <button id="facebook" className="flex items-center justify-center h-11 w-11 rounded-3xl p-0">
            <img src="/src/public/facebook_logo.png" alt="facebook logo"/>
          </button>
          <button id="apple" className="flex items-center justify-center h-11 w-11 rounded-3xl p-0">
            <img src="/src/public/apple_logo.png" alt="apple logo"/>
          </button>
        </div>
      </div>
    </div>
  );
}