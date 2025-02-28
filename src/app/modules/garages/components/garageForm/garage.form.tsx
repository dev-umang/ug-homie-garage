import { Button, Form, Input } from "antd";
import { FC } from "react";
import { useAtomValue } from "jotai";
import { useSearch } from "@common/hooks";
import { generate } from "@common/utils";
import { AtomGarageList, type Garage, useGarage } from "@modules/garages";
import { CheckOutlined } from "@ant-design/icons";

const { Item, useForm } = Form;
type Props = {
  garage?: Garage;
};

const GarageForm: FC<Props> = () => {
  const [form] = useForm();
  const { updateQuery } = useSearch();
  const garages = useAtomValue(AtomGarageList);
  const { addGarage, loading } = useGarage();

  const onFinish = (values: Required<Garage>) =>
    addGarage({ ...values, key: generate.key(values.name, garages) }, () =>
      updateQuery({}, true),
    );

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Item
        required
        name={"name"}
        label="Name"
        rules={[{ required: true, message: "Garage name is required" }]}
      >
        <Input
          disabled={loading}
          size="large"
          placeholder="Enter garage name..."
        />
      </Item>
      <Item name={"address"} label="Address" initialValue={""}>
        <Input.TextArea
          disabled={loading}
          size="large"
          placeholder="Enter garage address..."
        />
      </Item>
      <Button
        loading={loading}
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
