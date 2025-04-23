import { Button, Divider, Form, Input, Space } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useNav } from "@common/hooks";
import { AuthCard } from "@components/shared";
import { useSignIn } from "..";

const { Item, useForm } = Form;

const SignInPage: FC = () => {
  const [form] = useForm();
  const nav = useNav();
  const { signIn, loading } = useSignIn();

  const handleFinish = (values: { email: string; password: string }) => {
    console.info("Form values:", values);
    nav("/dashboard");
  };

  return (
    <AuthCard>
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold">LOG IN</h1>
        <div className="text-muted max-w-[80%] m-auto text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
          nemo
        </div>
        <Button
          type="primary"
          variant="outlined"
          size="large"
          className="inline-flex items-center justify-center mt-6"
          onClick={signIn.google}
          loading={loading}
          icon={
            <div className="bg-white rounded-full p-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="22"
                height="22"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            </div>
          }
        >
          Sign in with Google
        </Button>
        <Divider>OR</Divider>
        <Form
          className="w-[80%]"
          form={form}
          layout="vertical"
          onFinish={handleFinish}
        >
          <Item
            name={"email"}
            label={<label className="text-muted p-0">E-mail</label>}
            labelCol={{ offset: 0 }}
          >
            <Input placeholder="Enter your email..." />
          </Item>
          <Item name={"password"}>
            <Input type="password" placeholder="Enter your email..." />
          </Item>
          <Space align="center">
            <Item>
              <Button htmlType="submit" type="primary">
                Log In
              </Button>
            </Item>
            <Item>
              <Link to={"/forgot-password"}>Forgot password?</Link>
            </Item>
          </Space>
        </Form>
      </div>
    </AuthCard>
  );
};

export default SignInPage;
