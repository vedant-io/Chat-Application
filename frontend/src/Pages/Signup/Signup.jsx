/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <div className="flex flex-col items-enter justify-center min-w-96 mx-auto">
        <div className="w-full p-4 bg-gray-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            Signup
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="my-2">
                <label className="lable p-2">
                  <span className="text-base label-text text-black">
                    Username
                  </span>
                </label>
                <input
                  type="text"
                  className="w-full h-10 input input-bordered background-white"
                  placeholder="Enter Username"
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                />
              </div>
              <div className="my-2">
                <label className="lable p-2">
                  <span className="text-base label-text text-black">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  className="w-full h-10 input input-bordered background-white"
                  placeholder="Full Name"
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                />
              </div>
              <div className="my-2">
                <label className="lable p-2">
                  <span className="text-base label-text text-black">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  className="w-full h-10 input input-bordered background-white"
                  placeholder="Enter Password"
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>
              <div className="my-2">
                <label className="lable p-2">
                  <span className="text-base label-text text-black">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  className="w-full h-10 input input-bordered background-white"
                  placeholder="Confirm Password"
                  value={inputs.confirmPassword}
                  onChange={(e) =>
                    setInputs({ ...inputs, confirmPassword: e.target.value })
                  }
                />
              </div>

              <GenderCheckBox
                onCheckboxChange={handleCheckboxChange}
                selectedGender={inputs.gender}
              />

              <div className="my-2">
                <Link
                  to="/login"
                  className="text-sm text-white mt-2 inline-block hover:underline hover:text-blue-500"
                >
                  {"Already"} have an account?
                </Link>
              </div>
              <div className="my-2">
                <button
                  type="submit"
                  className="w-full h-10 btn"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
