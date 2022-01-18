import { Radio, Typography } from "@mui/material";
import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const evaluation = require("./evaluation.json");
const itemsEvaluations = evaluation.evaluationsTest;

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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Juego a videojuegos en ordenador, teléfono móvil', 159, 6.0, 24, 4.0),
    createData('Juego a videojuegos en 3D', 237, 9.0, 37, 4.3),
    createData('Veo películas en 3D', 262, 16.0, 24, 6.0),
  ];

export const ItemsEvaluation = ({ itemIndex }) => {
    const [frequencies, setFrequencies] = useState([])
    itemsEvaluations.map((item, index) => {
        //console.log(`Estoy en esta vuelta: ${index} y tengo: `);
        frequencies.push(item.frequencies)
        //setFrequencies(item.frequencies);
        //console.log(frequencies);
        //const frecuencias = item.frequencies;
        //console.log(item.frequencies)
    })

  return (
    <>
      {/*<Typography sx={{ mt: 2, mb: 1 }}>
        Pasando esto {itemIndex }
  </Typography>*/}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Experiencias</StyledTableCell>
              <StyledTableCell align="right">Nunca</StyledTableCell>
              <StyledTableCell align="right">Alguna vez</StyledTableCell>
              <StyledTableCell align="right">Alguna vez a la semana</StyledTableCell>
              <StyledTableCell align="right">Casi todos los días</StyledTableCell>
              <StyledTableCell align="right">Todos los días</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{<Radio />}</StyledTableCell>
                <StyledTableCell align="right">{<Radio />}</StyledTableCell>
                <StyledTableCell align="right">{<Radio />}</StyledTableCell>
                <StyledTableCell align="right">{<Radio />}</StyledTableCell>
                <StyledTableCell align="right">{<Radio />}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
