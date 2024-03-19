import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="lable p-4">
                <span className="text-base label-text text-black">
                  Username
                </span>
              </label>
              <input
                type="text"
                className="w-full h-10 input input-bordered background-white"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <div>
                <label className="lable p-2">
                  <span className="text-base label-text text-black">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  className="w-full h-10 input input-bordered background-white"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <Link
                  to="/signup"
                  className="text-sm text-white mt-2 inline-block hover:underline hover:text-blue-500"
                >
                  {"Don't"} have an account?
                </Link>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full h-10 btn"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Login"
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

export default Login;
