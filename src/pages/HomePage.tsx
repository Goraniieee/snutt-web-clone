import { useQuery } from "@tanstack/react-query";

import { getMe } from "../apis/me";


export const HomePage = () => {

  const getMeQuery = useQuery({
    queryKey: ['me'],
    queryFn: getMe,
  });

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {getMeQuery.isLoading && <div>Loading...</div>}
      {getMeQuery.isError && <div>Error: {getMeQuery.error.message}</div>}
      {getMeQuery.isSuccess && (
          <div className="font-pretendard font-bold text-3xl">{getMeQuery.data.nickname.nickname}#{getMeQuery.data.nickname.tag}</div>
      )}
    </div>
  );
}