import { Button, Form, Input, Select, Upload } from "antd";
import { FC } from "react";
import { Vehicle } from "@modules/vehicles";
import { PlusOutlined } from "@ant-design/icons";

const { Item, useForm, useWatch } = Form;

type Props = {
  onSubmit: (v: Vehicle) => void;
};

const normFile = (e: { fileList: File[] }) => {
  if (Array.isArray(e)) return e;
  return e?.fileList;
};

const VehicleForm: FC<Props> = (p) => {
  const [form] = useForm();
  const files: File[] = useWatch("gallery", form);

  return (
    <Form<Vehicle> form={form} onFinish={p.onSubmit}>
      <div className="grid grid-cols-[128px_1fr] gap-2">
        <Item label="Brand">
          <Select
            options={[
              { label: "Royal Enfield", value: "royalEnfield" },
              { label: "Honda", value: "honda" },
            ]}
          />
        </Item>
        <Item label="Model">
          <Input />
        </Item>
      </div>
      <Item name={"name"} label="Nickname">
        <Input placeholder="Enter your vehicle's nick name if any." />
      </Item>
      <Item name={"garageId"} label="Garage">
        <Select />
      </Item>

      <Item
        label="Select images of your vehicle"
        valuePropName="fileList"
        name={"gallery"}
        getValueFromEvent={normFile}
      >
        <Upload beforeUpload={() => false} listType="picture-card" maxCount={4}>
          {(!files?.length || files.length < 3) && (
            <button
              style={{
                color: "inherit",
                cursor: "inherit",
                border: 0,
                background: "none",
              }}
              type="button"
            >
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Select</div>
            </button>
          )}
        </Upload>
      </Item>

      <Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default VehicleForm;
