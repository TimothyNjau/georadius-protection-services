import React from "react";

interface TextAreaFieldProps {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (value: string) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id,
  label,
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
      <textarea
        id={id}
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-md border border-slate-300 p-3 focus:border-prim focus:ring-2 focus:ring-prim/30"
      />
    </div>
  );
};

export default TextAreaField;