import "./Form.scss";
export default function Form({ onSubmit, children }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
    >
      {children}
      <button type="submit">Submit</button>
    </form>
  );
}
