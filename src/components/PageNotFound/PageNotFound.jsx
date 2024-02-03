import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-green-600">
        <img
          src={
            showMessage
              ? `https://media.tenor.com/EKbGRpPSgtMAAAAd/matlab-kuch-bhi-bhai-sahab-ye-kuch-zyada-nahi-ho-gaya-meme.gif`
              : `https://media.tenor.com/sWEY8anP4dwAAAAd/chala-ja-chala-ja-b-sd-k.gif`
          }
          className="border rounded-full w-[200px] h-[200px]"
          alt=""
        />

        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-[white] text-[green] font-bold uppercase px-2 text-sm rounded rotate-30 mt-[8rem] absolute">
          Page Not Found - {window.location.href}
        </div>
        <p className=" text-base 2xl:text-lg mt-5  ">
          <p className=" 2xl:text-lg relative inline-block text-sm font-medium text-[green] group   focus:outline-none focus:ring">
            <span className="relative block px-8 py-4 bg-[white] border border-current text-[1.2rem] uppercase font-[500] rounded-[6px] ">
              <Link to="/">Go to Dashboard</Link>
            </span>
          </p>
        </p>
      </main>
    </>
  );
};

export default PageNotFound;
