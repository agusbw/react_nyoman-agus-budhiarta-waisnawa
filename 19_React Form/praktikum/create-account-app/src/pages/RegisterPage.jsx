import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import later from "../utils/Delay";
import ErrorMessage from "../components/ErrorMessage";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();
  const watchPassword = watch("password");

  const onSubmit = async (data) => {
    await later(1500);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="w-screen flex h-screen justify-center items-center flex-col">
      <h1 className="font-bold text-3xl mb-5 text-sky-800">Create Account</h1>
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="flex gap-3 mb-2">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="firstName " value="Firstname*" />
            </div>
            <TextInput
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Firstname"
              color={errors.name?.firstName ? "failure" : ""}
              {...register("name.firstName", {
                required: "Firstname is required!",
                minLength: {
                  value: 3,
                  message: "Firstname must be at least 3 characters",
                },
              })}
            />
            <ErrorMessage>{errors.name?.firstName?.message}</ErrorMessage>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="lastName" value="Lastname*" />
            </div>
            <TextInput
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Lastname"
              color={errors.name?.lastName ? "failure" : ""}
              {...register("name.lastName", {
                required: "Lastname is required!",
                minLength: {
                  value: 3,
                  message: "Lastname must be at least 3 characters",
                },
              })}
            />
            <ErrorMessage>{errors.name?.lastName?.message}</ErrorMessage>
          </div>
        </div>
        <div className="mb-2">
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email*" />
          </div>
          <TextInput
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            color={errors.email ? "failure" : ""}
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email is not valid!",
              },
            })}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </div>

        <div className="mb-2">
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password*" />
          </div>
          <TextInput
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            color={errors.password ? "failure" : ""}
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>
        <div className="mb-2">
          <div className="mb-2 block">
            <Label
              id="confirmPassword"
              htmlFor="confirmPassword"
              value="Confirm Password*"
            />
          </div>
          <TextInput
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            color={errors.confirmPassword ? "failure" : ""}
            {...register("confirmPassword", {
              required: "Confirm Password is required!",
              validate: (value) =>
                value === watchPassword || "Passwords do not match!",
            })}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
        </div>
        <Button type="submit" className="mt-3" disabled={isSubmitting}>
          Register
        </Button>
      </form>
      <p className="text-blue-500 mt-3">
        Already have account?{" "}
        <Link to="/" className="hover:text-blue-700 ">
          <span className="font-medium">Login</span>
        </Link>
      </p>
    </div>
  );
}
