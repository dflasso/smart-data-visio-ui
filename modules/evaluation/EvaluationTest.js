import {
  Typography,
  Grid,
  Card,
  TextField,
  InputAdornment,
  FormHelperText,
  Button,
  Radio,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Search } from "@mui/icons-material";
import React from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Juego a videojuegos en ordenador", 159, 6.0, 24, 4.0),
  createData("Juego a videojuegos en 3D", 237, 9.0, 37, 4.3),
  createData("Veo películas en 3D", 262, 16.0, 24, 6.0),
];

const EvaluationTest = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Grid container item xs={12} md={10} lg={9} justify="center" >
        <Typography type="title" color="inherit" variant="h4">
          Seleccione la opción adecuada, de acuerdo a su experiencia en cuanto a
          videojuegos
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Experiencias</StyledTableCell>
                <StyledTableCell align="right">Nunca</StyledTableCell>
                <StyledTableCell align="right">Alguna vez</StyledTableCell>
                <StyledTableCell align="right">
                  Alguna vez a la semana
                </StyledTableCell>
                <StyledTableCell align="right">Todos los días</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Radio />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Radio />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Radio />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Radio />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default EvaluationTest;
