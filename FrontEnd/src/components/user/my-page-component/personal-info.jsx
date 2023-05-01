import { useQuery } from "react-query";
import { getUserDataByToken } from "../../../api/api-auth";

const PersonalInfo = () => {
  const { data, isLoading, isError, error } = useQuery(
    ["auth"],
    async () => await getUserDataByToken()
  );
  return (
    <>
      {isLoading ? (
        <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
          Loading...
        </div>
      ) : !data ? (
        <div className="h-[800px] flex justify-center items-center ">
          <div className="w-[80%] flex justify-center items-center h-[80%] mb-[10%] rounded-xl border-2 border-c1">
            <div>
              <div className="text-3xl text-center">
                로그인 후 이용해주세요.
              </div>
            </div>
          </div>
        </div>
      ) : !isError ? (
        <div className=" flex justify-center items-center ">
          <div className="w-[80%] h-[80%] ">
            <div className="h-[15%] ">
              <h1 className="text-3xl mb-[10%]">내 정보</h1>
            </div>
            <div className=" h-[60%] border-2 border-c1 rounded-xl mb-[150px]">
              <div className="w-[100%] m-[10px] ">
                <span className="inline-block w-[120px] m-[20px] mb-[20px] ">
                  이름
                </span>
                <span className="inline-block w-[120px] m-[20px] mb-[20px]">
                  {data.name}
                </span>
              </div>
              <div className="m-[10px]">
                <span className="m-[20px] mb-[20px] inline-block w-[120px]">
                  아이디
                </span>
                <span className="m-[20px] mb-[20px] ">{data.email}</span>
              </div>

              <div className="flex-row">
                <span className="m-[10px] ">
                  <span className="m-[20px] mb-[0px] inline-block w-[120px]">
                    주소
                  </span>
                </span>
                <span className="m-[10px]">
                  <span className="">{data.address1}</span>
                </span>
                <div className="m-[10px] ">
                  <span className="m-[20px]  inline-block w-[120px]">
                    상세주소
                  </span>
                  <span className="m-[10px] ml-[20px]">{data.address2}</span>
                </div>
              </div>
              <div className="m-[10px]">
                <span className="m-[20px] inline-block w-[120px] ">연락처</span>
                <span className=" m-[10px] ml-[20px]"> {data.phoneNumber}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
          {error.message}
        </div>
      )}
    </>
  );
};

export default PersonalInfo;
