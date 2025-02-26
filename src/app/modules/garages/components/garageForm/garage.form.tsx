import { Button, Form, Input } from "antd";
import { FC } from "react";
import type { Garage } from "@modules/garages";
import { CheckOutlined } from "@ant-design/icons";

const { Item, useForm } = Form;
type Props = {
  garage?: Garage;
  loading?: boolean;
  onSubmit?: (g: Garage) => void;
};

const GarageForm: FC<Props> = (p) => {
  const [form] = useForm();

  const onFinish = (values: Garage) => {
    p.onSubmit?.(values);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Item
        required
        name={"name"}
        label="Name"
        rules={[{ required: true, message: "Garage name is required" }]}
      >
        <Input
          disabled={p.loading}
          size="large"
          placeholder="Enter garage name..."
        />
      </Item>
      <Item name={"address"} label="Address">
        <Input.TextArea
          disabled={p.loading}
          size="large"
          placeholder="Enter garage address..."
        />
      </Item>
      <Button
        loading={p.loading}
        type="primary"
        htmlType="submit"
        icon={<CheckOutlined />}
      >
        Submit
      </Button>
    </Form>
  );
};

export default GarageForm;
