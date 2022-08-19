type InputProps = {
  type: string;
  id: string;
  value: string;
  label: string;
};

export const Input = ({ type, id, value, label }: InputProps) => {
  return (
    <div className="form-check form-check-inline">
      <input className="form-check-input" type={type} id={id} value={value} />
      <label className="form-check-label">{label}</label>
    </div>
  );
};
