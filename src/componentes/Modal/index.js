import * as React from "react";
import Modal from "@mui/material/Modal";
// import { MovieCreationIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import MovieIcon from "@mui/icons-material/Movie";
import InboxIcon from "@mui/icons-material/Inbox";
import "./index.css";

export default function BasicModal({ open, handleClose }) {
  const history = useHistory();

  const handleMyfilm = () => {
    history.push("/MeusFilmes");
  };

  const handleMyfilm2 = () => {
    history.push("/");
  };
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className="App-Modal">
          <button className="App-Modal-Home" onClick={() => handleMyfilm2()}>
            <MovieIcon fontSize="large" />
            <p className="App-Modal-Home-P">Home</p>
          </button>
          <button className="App-Modal-Home" onClick={() => handleMyfilm()}>
            <InboxIcon fontSize="large" />
            <p className="App-Modal-Home-P">Meus Filmes</p>
          </button>
        </div>
      </Modal>
    </div>
  );
}
