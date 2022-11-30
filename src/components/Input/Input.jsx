import "./Input.scss";
export default function Input({
  label,
  required = false,
  labelPositionRight = false,
  ...rest
}) {
  return (
    <label className={required ? "required" : ""} htmlFor={rest.id}>
      {!labelPositionRight && label}
      <input {...rest} />
      {labelPositionRight && label}
    </label>
  );
}
