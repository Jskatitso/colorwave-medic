import { Modal, Box } from "@mui/material";
import { RingLoader } from "react-spinners";

function LoadingModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          //boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <div className="flex flex-col items-center">
          <RingLoader color="white" size={130} />
          <p className="text-white text-2xl font-bold ">Scaning Image . . .</p>
        </div>
      </Box>
    </Modal>
  );
}

export default LoadingModal;
