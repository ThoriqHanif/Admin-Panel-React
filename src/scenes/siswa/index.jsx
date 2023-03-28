import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataSiswa } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Siswa = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "nis", headerName: "NIS", flex: 0.5 },
    {
      field: "nama",
      headerName: "Nama",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "kelas",
      headerName: "Kelas",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "alamat",
      headerName: "Alamat",
      flex: 1,
    },
    {
      field: "no",
      headerName: "No Handphone",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Siswa"
        subtitle="Daftar Siswa"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataSiswa}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Siswa;
