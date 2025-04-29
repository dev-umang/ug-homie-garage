import { Button, Form, Input } from "antd";
import { FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const { Item, useForm } = Form;

const AddGarageForm: FC = () => {
  const [form] = useForm();

  const handleSubmit = (values: { name: string }) => {
    console.info(values);
  };

  return (
    <Form
      name="addGarage"
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Item name={"name"} label="Garage Name">
        <Input placeholder="Enter garage name" />
      </Item>
      <Item>
        <Button icon={<AiOutlinePlus />} type="primary" htmlType="submit">
          Add
        </Button>
      </Item>
    </Form>
  );
};

export default AddGarageForm;
