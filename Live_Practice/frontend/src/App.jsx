import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:3000/api";

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));
  const [page, setPage] = useState(authToken ? "dashboard" : "login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("mani@test.com");
  const [password, setPassword] = useState("123456");

  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (authToken) {
      fetchNotes(authToken);
    }
  }, [authToken]);

  async function registerUser() {
    try {
      await axios.post(`${API_URL}/auth/register`, {
        name,
        email,
        password,
      });

      alert("Registered successfully. Please login.");
      setPage("login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  }

  async function loginUser() {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      const token = response.data.token;

      localStorage.setItem("token", token);
      setAuthToken(token);
      setPage("dashboard");

      alert("Login successful");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  }

  async function fetchNotes(token) {
    try {
      const response = await axios.get(`${API_URL}/notes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setNotes(response.data);
    } catch (error) {
      alert(error.response?.data?.message || "Cannot fetch notes");
    }
  }

  async function addNote() {
    try {
      await axios.post(
        `${API_URL}/notes`,
        {
          text: noteText,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setNoteText("");
      fetchNotes(authToken);
    } catch (error) {
      alert(error.response?.data?.message || "Cannot add note");
    }
  }

  function logout() {
    localStorage.removeItem("token");
    setAuthToken(null);
    setNotes([]);
    setPage("login");
  }

  if (page === "register") {
    return (
      <div className="container">
        <div className="card">
          <h1>Student Register</h1>

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={registerUser}>Register</button>

          <p>
            Already have an account?{" "}
            <span onClick={() => setPage("login")}>Login</span>
          </p>
        </div>
      </div>
    );
  }

  if (page === "dashboard") {
    return (
      <div className="container">
        <div className="card">
          <h1>Secret Notes Dashboard</h1>

          <button className="logout" onClick={logout}>
            Logout
          </button>

          <div className="note-box">
            <input
              placeholder="Write your secret note"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            />

            <button onClick={addNote}>Add Note</button>
          </div>

          <h2>Your Notes</h2>

          {notes.length === 0 && <p>No notes yet</p>}

          {notes.map((note) => (
            <div className="note" key={note._id}>
              {note.text}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Student Login</h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={loginUser}>Login</button>

        <p>
          New student?{" "}
          <span onClick={() => setPage("register")}>Register</span>
        </p>
      </div>
    </div>
  );
}

export default App;