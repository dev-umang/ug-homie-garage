import { Button, Flex, Form, Input } from "antd";
import { FC } from "react";
import { ImArrowRight } from "react-icons/im";
import { Link } from "react-router-dom";
import { GetStartedWrapper } from "..";

const { Item, useForm, useWatch } = Form;

type GarageFormValues = {
  garageName: string;
  garageId: string;
};

const InitAddGaragePage: FC = () => {
  const [form] = useForm<GarageFormValues>();
  const garageId = useWatch("garageId", form);

  const onFinish = (values: GarageFormValues) => {
    console.info("Received values of form: ", values);
  };

  const onValuesChange = (changedValues: GarageFormValues) => {
    form.setFieldValue(
      "garageId",
      changedValues.garageName.toLowerCase().replace(/\s+/g, "-"),
    );
  };

  return (
    <GetStartedWrapper key="add-garage">
      <div>
        <h1 className="text-2xl text-white font-black">
          Let&apos;s Add a Garage
        </h1>
        <p>Ready to set up your garage? Let&apos;s get started! 🛠️</p>
        <Form<GarageFormValues>
          onFinish={onFinish}
          layout="vertical"
          className="mt-8"
          onValuesChange={onValuesChange}
          form={form}
        >
          <Item
            label={<label className="text-white">Garage Name</label>}
            name="garageName"
            required
            style={{ marginBottom: 0 }}
          >
            <Input size="large" placeholder="Enter your garage name" />
          </Item>
          <Item name={"garageId"}>
            <span className="text-sm font-semibold text-white/80">
              {garageId}
            </span>
          </Item>
          <Item>
            <Flex className="justify-end gap-default pr-0.5">
              <Link tabIndex={-1} to={"/get-started/welcome"}>
                <Button type="text" className="text-neutral-300">
                  Skip Now
                </Button>
              </Link>
              <Button
                type="primary"
                htmlType="submit"
                icon={<ImArrowRight />}
                iconPosition="end"
              >
                Create
              </Button>
            </Flex>
          </Item>
        </Form>
      </div>
    </GetStartedWrapper>
  );
};

export default InitAddGaragePage;
