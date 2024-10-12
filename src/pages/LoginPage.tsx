import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../apis/login";


export const LoginPage = () => {

  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const loginMutation = useMutation({
    mutationFn: () => login(id, pw),
    onSuccess: (token) => {
      sessionStorage.setItem('token', token);
      navigate("/home");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const idAndPwFull = id.length > 0 && pw.length > 0;

  const onClickBack = () => {
    navigate('/');
  }

  const onClickLogin = () => {
    handleLogin();
  }

  const onSubmitLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    handleLogin();
  }

  const onIdChange = (e: { target: { value: string; }; }) => {
    setId(e.target.value);
  }

  const onPwChange = (e: { target: { value: string; }; }) => {
    setPw(e.target.value);
  }

  const handleLogin = () => {
    if (!idAndPwFull) return;
    loginMutation.mutate();
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start">
      <div className="w-full flex flex-row p-2 items-center ">
        <button id="navigate-back" className="absolute left-1 flex flex-row items-center justify-center" onClick={onClickBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left"
            width="24"
            height="24"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <div className="font-pretendard font-semibold text-base">뒤로</div>
        </button>

        <div className="mx-auto text-center font-pretendard font-semibold text-lg">로그인</div>
      </div>

      <div className="w-full border-t border-[#dbdbdb]"></div>

      <form className="w-full h-full flex flex-col items-start justify-between p-2" onSubmit={onSubmitLogin}>
        <div className="w-full flex flex-col p-2 gap-4">
          <div id="id-input" className="w-full py-1">
            <div className="font-pretendar font-semibold text-sm text-gray-500">아이디</div>
            <input type="text" className="w-full border-b-2 p-1 mt-1 font-pretendar text-xs text-gray-500" placeholder="아이디를 입력하세요" onChange={onIdChange}/>
          </div>

          <div id="pw-input" className="w-full py-1">
            <div className="font-pretendard font-semibold text-sm text-gray-500">비밀번호</div>
            <input type="password" className="w-full border-b-2 p-1 mt-1 font-pretendar text-xs text-gray-500" placeholder="비밀번호를 입력하세요" onChange={onPwChange}/>
          </div>
        </div>
        <button className="mx-auto w-11/12 h-10 p-3 rounded-md font-pretendard font-semibold text-sm leading-3 my-8"
          disabled={!idAndPwFull}
          style={{ backgroundColor: idAndPwFull ? '#F58D3D' : '#dfdfdf' }}
          onClick={onClickLogin}
        >
          로그인
        </button>
      </form>
    </div>
  );
}