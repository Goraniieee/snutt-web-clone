import { useNavigate } from 'react-router-dom';

import appleLogo from '../assets/images/apple_logo.png';
import facebookLogo from '../assets/images/facebook_logo.png';
import googleLogo from '../assets/images/google_logo.png';
import kakaoLogo from '../assets/images/kakao_logo.png';

export const DefaultPage = () => {
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate('/login');
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div
          id="logo"
          className="mb-20 mt-[50%] flex h-40 w-40 flex-col items-center gap-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="60"
            viewBox="0 0 61 60"
            fill="none"
          >
            <rect
              x="40.3521"
              y="39.1343"
              width="20.1467"
              height="20.8626"
              fill="#EC8572"
            />
            <rect
              x="40.3521"
              y="15.522"
              width="20.1467"
              height="20.8626"
              fill="#EF975D"
            />
            <rect
              x="16.7397"
              y="39.1343"
              width="20.1467"
              height="20.8626"
              fill="#EF975D"
            />
            <rect
              x="16.7397"
              y="15.522"
              width="20.1467"
              height="20.8626"
              fill="#EF975D"
            />
            <rect x="11.4976" width="6.71266" height="59.9969" fill="#26181D" />
            <rect x="35.4077" width="6.71266" height="59.9969" fill="#26181D" />
            <rect
              x="0.501953"
              y="41.2847"
              width="6.71266"
              height="59.9969"
              transform="rotate(-90 0.501953 41.2847)"
              fill="#26181D"
            />
            <rect
              x="0.501465"
              y="17.3745"
              width="6.71266"
              height="59.9969"
              transform="rotate(-90 0.501465 17.3745)"
              fill="#26181D"
            />
          </svg>
          <div className="font-sf-pro text-xl font-black">TimeTable</div>
        </div>

        <div
          id="buttons"
          className="mb-7 flex w-full flex-col items-center justify-center gap-0.5"
        >
          <button
            className="h-10 w-10/12 rounded-md bg-[#F58D3D] p-3 font-pretendard text-sm font-semibold leading-3 text-white"
            onClick={onClickLogin}
          >
            로그인
          </button>
          <button className="h-10 w-10/12 rounded-md p-3 font-pretendard text-sm font-semibold leading-3">
            회원가입
          </button>
        </div>

        <div
          id="divider"
          className="mb-7 flex w-11/12 flex-row items-center justify-center"
        >
          <div className="mr-3 flex-grow border-t border-[#C4C4C4]"></div>
          <span className="font-pretendard text-sm text-[#C4C4C4]">
            SNS 계정으로 계속하기
          </span>
          <div className="ml-3 flex-grow border-t border-[#C4C4C4]"></div>
        </div>

        <div id="social-login" className="flex flex-row gap-2.5">
          <button
            id="kakao"
            className="flex h-11 w-11 items-center justify-center rounded-3xl p-0"
          >
            <img src={kakaoLogo} alt="kakao logo" />
          </button>
          <button
            id="google"
            className="flex h-11 w-11 items-center justify-center rounded-3xl border-[0.5px] border-[#C4C4C4] p-1"
          >
            <img src={googleLogo} alt="google logo" />
          </button>
          <button
            id="facebook"
            className="flex h-11 w-11 items-center justify-center rounded-3xl p-0"
          >
            <img src={facebookLogo} alt="facebook logo" />
          </button>
          <button
            id="apple"
            className="flex h-11 w-11 items-center justify-center rounded-3xl p-0"
          >
            <img src={appleLogo} alt="apple logo" />
          </button>
        </div>
      </div>
    </div>
  );
};
