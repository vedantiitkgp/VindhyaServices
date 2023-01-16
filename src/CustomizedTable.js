import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './CustomizedTable.css'
import { padding } from '@mui/system';
import { grey } from '@mui/material/colors';

function ActionBtn({ row }){
	const onClick = () => {
		console.log(row.id)
	}
	return(
		<div className={`action-btn${row.status === 'Available' ? ' accept' : ' closed'}`} onClick={onClick}>
			{row.status === 'Available' ? 'Accept' : 'Closed'}
		</div>
	)
}
	
const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#6f48eb',
		color: theme.palette.common.white,
		fontSize: 20,
		fontFamily : 'monospace',
		fontWeight : 'bold',
		padding : '24px 12px'
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 18,
		fontFamily : 'monospace',
		fontWeight : '500'
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: '#e7e7e7',
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

function createData(s_no, name, id, time, cost, no_person, status) {
	return { s_no, name, id, time, cost, no_person, status };
}

const rows = [
	createData(1, 'Vedant', 'emp_006470', '9:00 PM', 'Rs 3400', 2, 'Available'),
	createData(2, 'Yash', 'emp_006471', '8:00 AM', 'Rs 3800', 4, 'Filled'),
	createData(3, 'Sharukh Khan', 'dps_4669','11:00 PM', 'Rs 2800', 2, 'Available'),
	createData(4, 'Akshay Kumar', 'gen_2233', '3:30 PM', 'Rs 3600', 2, 'Available'),
	createData(5, 'Singham', 'emp_0099', '19:00', '$ 100', 2, 'Closed'),
];

export default function CustomizedTable() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 700 }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="center">S. No</StyledTableCell>
						<StyledTableCell align="center">Intiator Name</StyledTableCell>
						<StyledTableCell align="center">ID</StyledTableCell>
						<StyledTableCell align="center">Time</StyledTableCell>
						<StyledTableCell align="center">Total Cost</StyledTableCell>
						<StyledTableCell align="center">Available Seats</StyledTableCell>
						<StyledTableCell align="center">Status</StyledTableCell>
						<StyledTableCell align="center">Accept</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.s_no}>
							<StyledTableCell component="th" scope="row" align="center">
								{row.s_no}
							</StyledTableCell>
							<StyledTableCell align="center">{row.name}</StyledTableCell>
							<StyledTableCell align="center">{row.id}</StyledTableCell>
							<StyledTableCell align="center">{row.time}</StyledTableCell>
							<StyledTableCell align="center">{row.cost}</StyledTableCell>
							<StyledTableCell align="center">{row.no_person}</StyledTableCell>
							<StyledTableCell align="center">{row.status}</StyledTableCell>
							<StyledTableCell align="center">
								<ActionBtn row={row} />
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}