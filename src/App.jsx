import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./components/Form/Form";
import Input from "./components/Input/Input";

const Checkbox = (props) => <Input type="checkbox" {...props} />;

const MARKETPLACE = [
  "Amazon",
  "FlipKart",
  "Shopify",
  "Ebay",
  "Noon",
  "Walmart",
];

function App() {
  const [value, setValue] = useState({});
  const [tnc, setTnc] = useState(false);
  const [marketplaceChecked, setMarketplaceChecked] = useState(() =>
    MARKETPLACE.map((m) => ({ [m]: false }))
  );

  const [showPassword, toggleShowPassword] = useReducer((s) => !s, false);

  const [passwordMismatch, setPasswordMismatch] = useState(false);

  function onSubmit() {
    if (tnc) {
      //send data
    } else {
      alert("Terms and conditions should be accepted to proceed further");
    }
  }

  function onChange(e) {
    if (e.target.name === "confirm-pw") {
      if (!value["create-pw"]) return;
      if (e.target.value !== value["create-pw"]) {
        setPasswordMismatch(true);
      } else if (e.target.value !== value["create-pw"]) {
        setPasswordMismatch(false);
      }
    }
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  return (
    <div className="App">
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="name"
          value={value["name"] ?? ""}
          label="FullName"
        />
        <Input
          onChange={onChange}
          name="email"
          value={value["email"] ?? ""}
          label="Email Address"
        />
        <div className="phone-number">
          <Input
            onChange={onChange}
            name="country-code"
            value={value["country-code"] ?? ""}
            label="Country Code"
            style={{ width: "20%" }}
          />
          <Input
            onChange={onChange}
            name="phone-number"
            value={value["phone-number"] ?? ""}
            label="Phone Number"
          />
        </div>
        <Input
          onChange={onChange}
          name="company-name"
          value={value["company-name"] ?? ""}
          label="Company Name"
        />
        <div>
          {MARKETPLACE.map((marketplace) => (
            <Checkbox
              onChange={() =>
                setMarketplaceChecked({
                  ...marketplaceChecked,
                  [marketplace]: !marketplaceChecked[marketplace],
                })
              }
              checked={marketplaceChecked[marketplace]}
              label={marketplace}
              labelPositionRight
              key={marketplace}
            />
          ))}
        </div>

        <Input
          onChange={onChange}
          name="create-pw"
          value={value["create-pw"] ?? ""}
          label="Create Password"
          type={showPassword ? "text" : "password"}
        />

        <Checkbox
          onChange={toggleShowPassword}
          checked={showPassword}
          name="show-password"
          label="Show password"
          labelPositionRight
        />
        <Input
          onChange={onChange}
          name="confirm-pw"
          value={value["confirm-pw"] ?? ""}
          label="Confirm Password"
          style={{ borderColor: showPassword ? "#ee1b25" : "" }}
        />

        <Checkbox
          onChange={() => setTnc(!tnc)}
          checked={tnc}
          name="terms-and-condition"
          label="I agree to the terms and conditions"
          labelPositionRight
        />
      </Form>
    </div>
  );
}

export default App;
