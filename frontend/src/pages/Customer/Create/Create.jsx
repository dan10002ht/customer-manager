import React, { useState } from "react";
import "./Create.scss";
import { Button, Form, Input, Radio, Select, Space, Typography } from "antd";

const maleOptions = [
  [
    {
      label: "Vai",
      value: "10",
      name: "vai",
    },
    {
      label: "Cổ",
      value: "10",
      name: "co",
    },
    {
      label: "Ngực",
      value: "10",
      name: "nguc",
    },
  ],
  [
    { label: "Eo", value: "10", name: "eo" },
    { label: "Mông", value: "x", name: "mong " },
    { label: "Lưng", value: "x", name: "lung" },
  ],
  [
    { label: "Bắp tay", value: "10", name: "bap_tay" },
    { label: "Bụm tay", value: "x", name: "bum_tay" },
    { label: "Cúc tay", value: "x", name: "cuc_tay" },
  ],
  [
    { label: "Dài quần", value: "10", name: "dai_quan" },
    { label: "Gối", value: "x", name: "goi" },
    { label: "Bắp", value: "x", name: "bap" },
  ],
  [
    { label: "Đũng", value: "10", name: "dung" },
    { label: "Đùi", value: "x", name: "dui" },
  ],
];

const femaleOptions = [
  [
    { label: "Ngực", value: "10", name: "nguc" },
    { label: "Vai", value: "x", name: "vai" },
    { label: "Cổ", value: "x", name: "co" },
  ],
  [
    { label: "Eo", value: "10", name: "eo" },
    { label: "Lưng", value: "x", name: "lung" },
    { label: "Mông", value: "x", name: "mong" },
  ],
  [
    { label: "Hạ ngực", value: "10", name: "ha_nguc" },
    { label: "Hạ eo", value: "x", name: "ha_eo" },
  ],
  [
    { label: "Dài áo", value: "10", name: "dai_ao" },
    { label: "Dài tay", value: "x", name: "dai_tay" },
    { label: "Bắp tay", value: "x", name: "bap_tay" },
  ],
  [
    { label: "Bụm tay", value: "10", name: "bum_tay" },
    { label: "Cúc tay", value: "x", name: "cuc_tay" },
  ],
  [
    { label: "Dài quần", value: "10", name: "dai_quan" },
    { label: "Đũng", value: "x", name: "dung" },
  ],
];

const Create = () => {
  const [form] = Form.useForm();
  const [gender, setGender] = useState("");
  console.log({ outsideGender: gender });

  const onGenderChange = ({ gender: genderChange }) => {
    if (!genderChange) return;
    setGender(genderChange);
  };

  const genderOptions = gender === "female" ? femaleOptions : maleOptions;

  return (
    <Form
      onFinish={(values) => console.log({ values })}
      initialValues={{ gender: "male" }}
      onValuesChange={onGenderChange}
      layout="vertical"
      size="middle"
    >
      <Form.Item label="Giới tính" name="gender">
        <Radio.Group value={gender}>
          <Radio.Button value="male">Nam</Radio.Button>
          <Radio.Button value="female">Nữ</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <div className="Customer-Form__Control">
        <Form.Item label="Tên khách hàng">
          <Input placeholder="Tên khách hàng" />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input placeholder="Số điện thoại" />
        </Form.Item>
        <Form.Item label="Email">
          <Input placeholder="Email" />
        </Form.Item>
      </div>
      <Form.Item>
        <Typography.Title level={5}>Số đo cơ bản</Typography.Title>
      </Form.Item>

      {genderOptions.map((optionGroup, index) => (
        <div key={index} className="Customer-Form__Control">
          {optionGroup.map((x) => (
            <Form.Item name={x.name} key={x.label} label={x.label}>
              <Input placeholder={x.label} />
            </Form.Item>
          ))}
        </div>
      ))}
      <Button htmlType="submit" type="primary">
        Thêm khách hàng
      </Button>
    </Form>
  );
};

export default Create;
