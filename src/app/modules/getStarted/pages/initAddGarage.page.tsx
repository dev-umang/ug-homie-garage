import { Button, Flex, Form, Input } from "antd";
import { FC } from "react";
import { ImArrowRight } from "react-icons/im";
import { Link } from "react-router-dom";
import { GarageFormValues, useGarages } from "@modules/garages";
import { GetStartedWrapper } from "..";

const { Item, useForm, useWatch } = Form;

const InitAddGaragePage: FC = () => {
  const [form] = useForm<GarageFormValues>();
  const garageKey = useWatch("key", form);
  const { onInitAddGarage, loading } = useGarages();

  const onFinish = (values: GarageFormValues) => {
    console.info("Received values of form: ", values);
    onInitAddGarage(values);
  };

  const onValuesChange = (changedValues: GarageFormValues) => {
    if (changedValues.name !== undefined)
      form.setFieldValue(
        "key",
        changedValues.name.toLowerCase().replace(/\s+/g, "-"),
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
            name="name"
            required
            style={{ marginBottom: 0 }}
          >
            <Input
              className="bg-white text-black border-slate-500"
              size="large"
              placeholder="Enter your garage name"
            />
          </Item>
          <Item name={"key"}>
            <span className="text-sm font-semibold text-white/80">
              {garageKey}
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
                loading={loading}
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
