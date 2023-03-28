import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Rekap from "./scenes/rekap";
import Siswa from "./scenes/siswa";
import Guru from "./scenes/guru";
import Login from "./scenes/login";

import Form from "./scenes/form";

import FAQ from "./scenes/faq";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Sidebar isSidebar={isSidebar} />
          <App className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/siswa" element={<Siswa />} />
              <Route path="/guru" element={<Guru />} />
              <Route path="/rekap" element={<Rekap />} />
            </Routes>
          </App>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;