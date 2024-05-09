import logo from "../assets/images/mainLogo.svg";
import close from "../assets/images/close.svg";
import errorIcon from "../assets/images/error.svg";
import successIcon from "../assets/images/success.svg";
import { Form, NavLink, useActionData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

const ProjectsForm = () => {
  const data = useActionData();
  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.error) setError(data.error);
    if (data?.success) {
      setSuccess(true);
      setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, [data, navigate]);

  useEffect(() => {
    if (nameState.trim() === "" || emailState.trim() === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [nameState, emailState]);

  return (
    <div>
      <div className="p-9 flex justify-between">
        <img src={logo} alt="Brunel" />
        {!success && (
          <NavLink
            to={"/"}
            className="border rounded-full h-16 w-16 flex justify-center items-center"
          >
            <img src={close} alt="" className="w-8 h-8" />
          </NavLink>
        )}
      </div>
      {success ? (
        <div className="w-full flex flex-col justify-center items-center">
          <div className="mt-24 flex flex-col justify-center items-center max-w-[720px] gap-7 relative">
            <img src={successIcon} alt="success" className="mb-10" />
            <p className="covered-by-your-grace-regular text-[#2DA950] text-4xl max-md:text-xl">
              Success Submitted
            </p>
            <h1 className="font-semibold text-6xl max-md:xl">Congratulations</h1>
            <p className="text-2xl text-[#727272] text-center max-md:text-sm">
              Your request has been successfully submitted to us. We will
              validate your information and reach out to your shortly with
              updates
            </p>
          </div>
          <p className="w-[720px] flex justify-center items-center text-xl absolute bottom-9">
            Redirecting you to Homepage in&nbsp;
            <span className="font-semibold">{timer} Seconds</span>
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-full w-full">
          <div className="flex flex-col justify-center max-w-[590px] gap-4">
            <p className="covered-by-your-grace-regular text-4xl text-[#2DA950] w-full flex justify-center max-md:text-xl">
              Registration Form
            </p>
            <p className="font-semibold text-6xl flex justify-center text-center max-md:text-2xl">
              Start your success Journey here!
            </p>
          </div>
          <Form
            method="POST"
            className="flex flex-col max-w-[590px] mt-16 gap-10 items-center max-md:scale-75"
          >
            <input
              type="text"
              name="name"
              className="w-[417px] h-[75px] bg-light-1 rounded-full py-6 px-9 outline-none text-xl"
              placeholder="Enter your name"
              onChange={(e) => {
                setNameState(e.target.value);
              }}
            />
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="email"
                className="w-[417px] h-[75px] bg-light-1 rounded-full py-6 px-9 outline-none text-xl"
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmailState(e.target.value);
                }}
              />
              {error && (
                <p className="flex gap-3 text-[#FF0808] text-base">
                  <img src={errorIcon} alt="error" />
                  Enter a valid email address
                </p>
              )}
            </div>
            <button
              type="submit"
              className={cn(
                "w-[417px] h-[75px] text-white  rounded-full py-6 px-9 outline-none text-xl",
                {
                  "bg-dark-2": isDisabled,
                  "bg-dark-1": !isDisabled,
                }
              )}
              disabled={isDisabled}
            >
              Submit
            </button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default ProjectsForm;
