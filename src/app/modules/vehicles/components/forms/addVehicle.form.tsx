import { Button, DatePicker, Form, Input, Select } from "antd";
import { FC } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { serverTimestamp } from "firebase/firestore";
import dayjs from "dayjs";
import { Vehicle } from "@common/constants";
import { fbAuth } from "@configs/backend";
import { VehicleType } from "@modules/vehicles";

type Props = {
  vehicle?: Partial<VehicleType>;
  onSubmit?: (v: VehicleType) => void;
};

const { Item, useForm } = Form;

const AddVehicleForm: FC<Props> = (p) => {
  const [form] = useForm();

  const handleSubmit = (values: VehicleType) => {
    const vehicle: VehicleType = {
      ...values,
      year: dayjs(values.year).format("YYYY"),
      createdAt: serverTimestamp(),
      createdBy: fbAuth.currentUser?.email ?? "UNKNOWN_USER",
      ownerCount: 0,
    };
    p.onSubmit?.(vehicle);
  };

  return (
    <Form
      layout="vertical"
      name="addVehicle"
      form={form}
      onFinish={handleSubmit}
    >
      <div className="grid grid-cols-2 gap-default">
        <Item
          name={"vehicleType"}
          label="Vehicle Type"
          rules={[{ required: true }]}
        >
          <Select
            options={Vehicle.vehicleTypes}
            placeholder="Select Type"
            allowClear
          />
        </Item>
        <Item name={"fuelType"} label="Fuel Type" rules={[{ required: true }]}>
          <Select
            options={Vehicle.fuelTypes}
            placeholder="Select Fuel"
            allowClear
          />
        </Item>
      </div>
      <Item name={["brand", "name"]} label="Brand" rules={[{ required: true }]}>
        <Input placeholder="Enter Brand Name" />
      </Item>
      <div className="grid grid-cols-[1fr_128px] gap-default">
        <Item rules={[{ required: true }]} name={"name"} label="Model Name">
          <Input placeholder="Enter model name" />
        </Item>
        <Item name={"year"} label="Year">
          <DatePicker format={"YYYY"} picker="year" placeholder="Select Year" />
        </Item>
        <Item>
          <Button
            type="primary"
            htmlType="submit"
            icon={
              <div className="flex">
                <MdOutlineAdd size={18} />
              </div>
            }
          >
            Add
          </Button>
        </Item>
      </div>
    </Form>
  );
};

export default AddVehicleForm;
