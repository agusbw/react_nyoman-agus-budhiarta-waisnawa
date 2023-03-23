import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";

const emailRegex = /^\S+@\S+$/i;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: {
      message: "",
    },
    password: {
      message: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setErrors((prev) => {
        return {
          ...prev,
          password: {
            message: "Password must be at least 8 characters!",
          },
        };
      });
    }

    if (!email) {
      setErrors((prev) => {
        return {
          ...prev,
          email: {
            message: "Email is required!",
          },
        };
      });
    }

    if (password.length >= 8 && emailRegex.test(email)) {
      const response = {
        login: true,
        email,
        password,
      };
      alert(`${JSON.stringify(response, null, 2)}`);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;

    if (!emailRegex.test(value)) {
      setErrors({
        ...errors,
        email: {
          message: "Email is not valid!",
        },
      });
    } else {
      setErrors({
        ...errors,
        email: {
          message: "",
        },
      });
    }
    setEmail(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (value.length < 8) {
      setErrors({
        ...errors,
        password: {
          message: "Password must be at least 8 characters!",
        },
      });
    } else {
      setErrors({
        ...errors,
        password: {
          message: "",
        },
      });
    }
    setPassword(value);
  };

  return (
    <div className="w-screen flex h-screen justify-center items-center flex-col">
      <h1 className="font-bold text-3xl mb-5 text-sky-800">Login</h1>
      <form
        className="flex flex-col gap-4 w-full md:w-80 px-3 max-w-xs"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="mb-2">
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            type="email"
            name="email"
            placeholder="your@email.com"
            onChange={handleEmailChange}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            onChange={handlePasswordChange}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>
        <Button type="submit" className="mt-3">
          Submit
        </Button>
      </form>
      <p className="text-blue-500 mt-3">
        Don't have any account?{" "}
        <Link to="/register" className="hover:text-blue-700 ">
          <span className="font-medium">Register</span>
        </Link>
      </p>
    </div>
  );
}
