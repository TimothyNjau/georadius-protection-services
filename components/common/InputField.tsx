import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  value,
  placeholder,
  required = false,
  onChange,
}) => {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block font-semibold">
        {label} {required && "*"}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-md border border-slate-300 p-2 focus:border-prim focus:ring-2 focus:ring-prim/30"
      />
    </div>
  );
};

export default InputField;