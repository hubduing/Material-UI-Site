import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <Header />
      <Main />
      <Footer value={value} handleChange={handleChange} />
    </div>
  );
}

export default App;
