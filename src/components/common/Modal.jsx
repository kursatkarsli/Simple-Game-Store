import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import SingliItemCard from '../SingliItemCard'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

export default function CustomModal({ open, handleClose, game }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <SingliItemCard
            title={game.Name}
            description={game.Summary}
            price={game.Price}
            id={game.Id}
            game={game}
          />
        </Box>
      </Modal>
    </div>
  )
}
