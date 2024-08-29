import RForm from "@/components/form/RForm";
import RInput from "@/components/form/RInput";
import RContainer from "@/components/layout/RContainer";
import RButtonSmall from "@/components/ui/RButtonSmall";
import { signValidationSchema } from "@/validation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import RSectionTitle from "@/components/ui/RSectionTitle";

const Login = () => {
  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="md:py-24 py-16">
      <RContainer>
        <div className="md:w-[600px] mx-auto">
          <RSectionTitle heading="Login Now" subHeading="Welcome Back" />
          <RForm
            resolver={zodResolver(signValidationSchema)}
            handleFormSubmit={handleFormSubmit}
          >
            <RInput label="Email" name="email" placeholder="enter your email" />
            <RInput
              label="Password"
              name="password"
              placeholder="enter a password"
            />

            <RButtonSmall type="submit">Submit</RButtonSmall>
          </RForm>
          <div className="mt-6">
            <p>
              Do not have any account?{" "}
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
  );
};

export default Login;
