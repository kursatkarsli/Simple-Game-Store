import { TextField } from '@mui/material'
import { styled } from '@mui/system'

export const CustomTextField = styled(TextField)(({ theme }) => ({
  color: 'white',
  backgroundColor: '#494949',
  '::placeholder': { backgroundColor: 'white' },
  borderRadius: '10px',
}))
