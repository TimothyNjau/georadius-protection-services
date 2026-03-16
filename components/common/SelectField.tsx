import React from "react";

interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  options: string[];
  required?: boolean;
  onChange: (value: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  value,
  options,
  required = false,
  onChange,
}) => {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block font-semibold">
        {label} {required && "*"}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded-md border border-slate-300 p-2 focus:border-prim focus:ring-2 focus:ring-prim/30"
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;