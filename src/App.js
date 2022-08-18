import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feedbar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/system";
import Add from "./components/Add";
function App() {
  return (
    <Box className="App">
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
}

export default App;
