import RForm from "@/components/form/RForm";
import RInput from "@/components/form/RInput";
import RContainer from "@/components/layout/RContainer";
import RButtonSmall from "@/components/layout/ui/RButtonSmall";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import { addUser } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import handleMutation from "@/utils/handleMutation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RSectionTitle from "@/components/layout/ui/RSectionTitle";
import { TJwtPayload, TResponse, TUser } from "@/types";
import { Helmet } from "react-helmet";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSuccess = (res: TResponse<TUser>) => {
    const token = res.token;
    const { email, role } = jwtDecode(token!) as TJwtPayload;

    const user = { email, role };
    const payload = { token, user };
    dispatch(addUser(payload));
    if (location?.state?.targetPath) {
      return navigate(location?.state?.targetPath, { replace: true });
    }
    return navigate(`/dashboard/${role}`, { replace: true });
  };
  const handleForm: SubmitHandler<FieldValues> = (data) => {
    handleMutation(data, login, "User is being logged in...", onSuccess);
  };
  return (
    <section>
      <div className="md:ml-24 ml-8 sm:mt-10 mt-6">
        <Link to={"/"} className="text-xl font-medium flex items-center gap-2">
          <ArrowLeft size={25} />
          Back to home
        </Link>
      </div>
      <div className="md:py-24 py-16">
        <Helmet>
          <title>Login - Rideflow</title>
        </Helmet>
        <RContainer>
          <div className="md:w-[600px] mx-auto">
            <RSectionTitle heading="Login now" subHeading="Welcome back" />
            <RForm handleFormSubmit={handleForm}>
              <RInput
                label="Email"
                name="email"
                placeholder="Enter your email"
              />
              <RInput
                label="Password"
                name="password"
                placeholder="Enter your password"
              />
              <RButtonSmall type="submit">Login</RButtonSmall>
            </RForm>
            <div className="mt-6">
              <p>
                Don not have an account?{" "}
                <Link
                  className="underline font-medium hover:text-accentColor duration-200"
                  to={"/sign-up"}
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </RContainer>
      </div>
    </section>
  );
};

export default Login;
