import Image from "next/image";
import Select, { components } from "react-select";
const { SingleValue, Option } = components;

const IconSingleValue = (props: any) => (
  <SingleValue {...props}>
    <Image
      src={props.data.imageUrl}
      style={{
        borderRadius: "50%",
        marginRight: "10px",
      }}
      alt=""
      width={20}
      height={20}
    ></Image>
    <div>{props.data.label}</div>
  </SingleValue>
);

const IconOption = (props: any) => (
  <Option {...props}>
    <Image
      src={props.data.imageUrl}
      style={{
        borderRadius: "50%",
        marginRight: "10px",
      }}
      alt=""
      width={20}
      height={20}
    ></Image>
    {props.data.label}
  </Option>
);

const customStyles = {
  option: (provided: any) => ({
    ...provided,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }),
};

interface CustomSelectProps {
  onChange: any;
  options: any;
  value: any;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  onChange,
  options,
  value,
}) => {
  return (
    <Select
      styles={customStyles}
      components={{ SingleValue: IconSingleValue, Option: IconOption }}
      options={options}
      onChange={(e) => onChange(e)}
      value={value}
    />
  );
};

export default CustomSelect;
