import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 1000,
  },
  tableSet: {
    display: "flex",
    height: "80vh",
    marginLeft: "auto",
    marginRight: "auto",
  },
  spanNumberOne: {
    backgroundColor: "red",
    width: "30px",
    height: "30px",
    /* text-align: center; */
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  one: {
    color: "white",
    backgroundColor: "#F6C945",
    width: "30px",
    height: "30px",
    /* text-align: center; */
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  two: {
    color: "white",
    backgroundColor: "#C6D1DD",
    width: "30px",
    height: "30px",
    /* text-align: center; */
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  three: {
    color: "white",
    backgroundColor: "#DDAF84",
    width: "30px",
    height: "30px",
    /* text-align: center; */
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pointsOne: {
    color: "white",
    backgroundColor: "#F6C945",
    width: "50px",
    // height: "30px",
    /* text-align: center; */
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pointsTwo: {
    color: "white",
    backgroundColor: "#C6D1DD",
    width: "50px",
    // height: "30px",
    /* text-align: center; */
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pointsThree: {
    color: "white",
    backgroundColor: "#DDAF84",
    width: "50px",
    // height: "30px",
    /* text-align: center; */
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  points: {
    color: "#8B929E",
    backgroundColor: "#D3DBE3",
    width: "50px",
    // height: "30px",
    /* text-align: center; */
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    borderRadius: "10px",
    width: "35%",
    backgroundColor: theme.palette.background.paper,
    border: "5px solid #6461AB",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function BasicTable() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [point, setPoint] = useState(0);
  const [selectedDate, setSelectedDate] = useState();
  const [data, setData] = useState([]);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [allData, setAllData] = useState({
    id: getRandomInt(20),
    participantName: "",
    location: "",
    units: "",
    type: "",
    points: "",
    selectedDate: "",
  });
  const positions = { 1: classes.one, 2: classes.two, 3: classes.three };
  const pointPositions = {
    1: classes.pointsOne,
    2: classes.pointsTwo,
    3: classes.pointsThree,
  };
  const [rows, setRows] = useState([
    {
      id: 1,
      participantName: "Madelyn Vetrovs",
      location: "USA",
      selectedDate: "01.05.2021",
      units: "18.9 km",
      type: "Running",
      points: 4.2,
    },
    {
      id: 2,
      participantName: "Danny",
      location: "USA",
      selectedDate: "01.05.2021",
      units: "18.9 km",
      type: "Running",
      points: 4.2,
    },
    {
      id: 3,
      participantName: "Bob",
      location: "USA",
      selectedDate: "01.05.2021",
      units: "18.9 km",
      type: "Running",
      points: 4.2,
    },
  ]);

  const handleClose = () => {
    setModalOpen(false);
  };
  const formOpen = () => {
    setModalOpen(true);
  };
  const handleDateChange = (date, value) => {
    setAllData({ ...allData, selectedDate: date.toString() });
  };
  const handleChange = (e, index) => {
    var newObj = [...rows];
    var changePoint = newObj[index];
    changePoint.points =parseFloat(e.target.value);
    var newPoint = [
      ...rows.slice(0, index),
      changePoint,
      ...rows.slice(index + 1, rows.length),
    ];
    setRows(newPoint);
    console.log(newPoint);
  };

  const increment = (index) => {
    var newObj = [...rows];
    var changePoint = newObj[index];
    changePoint.points = parseFloat(changePoint.points + 1);
    var newPoint = [
      ...rows.slice(0, index),
      changePoint,
      ...rows.slice(index + 1, rows.length),
    ];
    setRows(newPoint);
    console.log(newPoint);
  };

  const decrement = (index) => {
    var newObj = [...rows];
    var changePoint = newObj[index];
    changePoint.points = parseFloat(changePoint.points - 1);
    var newPoint = [
      ...rows.slice(0, index),
      changePoint,
      ...rows.slice(index + 1, rows.length),
    ];
    setRows(newPoint);
    console.log(newPoint);
  };

  const formSubmit = () => {
    setData(allData);
  };

  const inputsHandler = (e) => {
    setAllData({ ...allData, [e.target.name]: e.target.value });
  };
  function createData() {
    if (
      allData.participantName.length > 2 &&
      allData.location.length > 2 &&
      allData.units.length > 2 &&
      allData.type.length > 2 &&
      allData.points.length > 2
    ) {
      setRows([...rows, allData]);
      setModalOpen(false);
      setAllData(null);
      console.log(allData);
    }
  }

  return (
    <div
      style={{
        background: "#9c9ad6",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            // width: "52.5%",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <div style={{ fontSize: "30px" }}>
            <h2>Leaderboard</h2>
          </div>
          <div style={{ justifyContent: "center" }}>
            <Button
              onClick={formOpen}
              variant="contained"
              style={{
                backgroundColor: "#605D9E",
                color: "white",
                textTransform: "capitalize",
                width: "150px",
                borderRadius: "7px",
              }}
            >
              Add Player
            </Button>
          </div>
        </div>

        <div className={classes.tableSet}>
          <TableContainer style={{ borderRadius: "10px" }} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead
                id="abc"
                style={
                  {
                    // background: "#ECEEF0",
                    // color: "#2B303B",
                    // lineHeight: "2.0rem",
                    // fontWeight: "600",
                  }
                }
              >
                <TableRow>
                  <TableCell align="center">#</TableCell>
                  <TableCell>Participant name</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Units</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell align="center">Points</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => {
                  let date = new Date(row.selectedDate);
                  let counter = row.points;

                  return (
                    <TableRow key={row.id}>
                      <TableCell
                        style={{ textAlign: "center" }}
                        width="5%"
                        component="th"
                        scope="row"
                      >
                        <div className={positions[row.id]}>
                          <span>{row.id}</span>
                        </div>
                      </TableCell>
                      <TableCell>{row.participantName}</TableCell>
                      <TableCell>{row.location}</TableCell>
                      <TableCell>{date.toLocaleDateString()}</TableCell>
                      <TableCell>{row.units}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell
                        style={{ textAlign: "center" }}
                        width="5%"
                        component="th"
                        scope="row"
                      >
                        <div>
                          {/* <span>{row.points}</span> */}
                          <ButtonGroup
                            size="small"
                            aria-label="small outlined button group"
                          >
                            <Button onClick={() => increment(index)}>+</Button>
                            <TextField
                              className={
                                row.id <= 3
                                  ? pointPositions[row.id]
                                  : classes.points
                              }
                              value={counter}
                              onChange={(e) => handleChange(e, index)}
                              style={{ width: "50px", textAlign: "center" }}
                            ></TextField>
                            <Button onClick={() => decrement(index)}>-</Button>
                          </ButtonGroup>
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <IconButton aria-label="delete">
                            <DeleteIcon
                              onClick={() => {
                                let temp = rows.filter((r) => r.id !== row.id);
                                setRows(temp);
                              }}
                              fontSize="medium"
                              style={{ color: "red" }}
                            />
                          </IconButton>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={modalOpen}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modalOpen}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Add New Player</h2>
              <Grid>
                <div style={{ marginTop: "10px" }}>
                  <TextField
                    style={{ width: "100%" }}
                    required
                    id="outlined-required"
                    label="Participant Name"
                    name="participantName"
                    variant="outlined"
                    onChange={inputsHandler}
                  />
                  <div style={{ display: "flex" }}>
                    <TextField
                      style={{
                        width: "60%",
                        marginTop: "16px",
                        marginRight: "20px",
                      }}
                      required
                      id="outlined-required"
                      label="Location"
                      name="location"
                      variant="outlined"
                      onChange={inputsHandler}
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        inputVariant="outlined"
                        label="Date"
                        value={selectedDate}
                        name="selectedDate"
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </div>

                  <div style={{ display: "flex" }}>
                    <TextField
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        marginRight: "10px",
                      }}
                      required
                      id="outlined-required"
                      label="Units"
                      variant="outlined"
                      name="units"
                      onChange={inputsHandler}
                    />
                    <TextField
                      style={{ width: "100%", marginTop: "10px" }}
                      required
                      id="outlined-required"
                      label="Type"
                      variant="outlined"
                      name="type"
                      onChange={inputsHandler}
                    />
                    <TextField
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        marginLeft: "10px",
                      }}
                      required
                      id="outlined-required"
                      label="Points"
                      variant="outlined"
                      name="points"
                      onChange={inputsHandler}
                    />
                  </div>
                  <pre>{JSON.stringify(allData, null, 2)}</pre>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <Button
                    onClick={createData}
                    style={{
                      backgroundColor: "#605D9E",
                      color: "white",
                      textTransform: "capitalize",
                      width: "150px",
                    }}
                    variant="contained"

                    // onClick={formsubmit}
                  >
                    Submit
                  </Button>
                </div>
              </Grid>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
