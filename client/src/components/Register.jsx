import { useState } from "react";
import { registerUser } from "../services/authService";

export default function Register({ onLoginClick }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await registerUser({
      name,
      email,
      password,
    });

    alert(result.message);

    if (result.message === "Registration successful!") {
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">
          Register
        </button>
      </form>

      <p>
        Already have an account?{" "}
        <button onClick={onLoginClick}>
          Login
        </button>
      </p>
    </div>
  );
}