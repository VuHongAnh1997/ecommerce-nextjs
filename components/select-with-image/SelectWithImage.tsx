// // components/SelectWithImage.tsx
// import React from "react";
// import Select, { OptionsType } from "react-select";

// interface OptionWithImage {
//   value: string;
//   label: string;
//   image: string;
// }

// const SelectWithImage: React.FC<{
//   options: OptionsType<OptionWithImage>;
//   onChange: (option: OptionWithImage) => void;
// }> = ({ options, onChange }) => {
//   const customStyles = {
//     option: (provided: any, state: any) => ({
//       ...provided,
//       display: "flex",
//       alignItems: "center",
//     }),
//     optionLabel: {
//       marginLeft: "10px",
//     },
//     optionImage: {
//       width: "20px",
//       height: "20px",
//       borderRadius: "50%",
//       objectFit: "cover",
//     },
//   };

//   const formatOptionLabel = ({ label, image }: OptionWithImage) => (
//     <div style={customStyles.option}>
//       <img src={image} alt="" style={customStyles.optionImage} />
//       <span style={customStyles.optionLabel}>{label}</span>
//     </div>
//   );

//   return (
//     <Select
//       options={options}
//       formatOptionLabel={formatOptionLabel}
//       isSearchable={true}
//       onChange={onChange}
//     />
//   );
// };

// export default SelectWithImage;
