import { ShoppingBasket } from '@mui/icons-material'
import { useContext, useState } from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront'
import {
  Button,
  FormControl,
  InputLabel,
  Link,
  Menu,
  MenuItem,
  NativeSelect,
  Select,
  Typography,
} from '@mui/material'
import {
  StyledDiv,
  StyledContainer,
  StyledLink,
} from '../assets/materialUi/Header.jsx'
import LoginIcon from '@mui/icons-material/Login'
import { useTranslation } from 'react-i18next'
import { SelectBox } from '../assets/materialUi/SelectBox.jsx'
import { TranslationContext } from '../context/TranslationContext'

const Header = () => {
  const [open, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('tr')
  const { t } = useTranslation()
  const { handleChangeLanguage } = useContext(TranslationContext)

  return (
    <StyledDiv className='header'>
      <StyledContainer className='header_logo'>
        <StyledLink underline='none' href='/'>
          <StorefrontIcon
            fontSize='large'
            className='header_logo'
            sx={{ marginInline: '20px' }}
          />
          <h2 className='header_logo_title'>eShop</h2>
        </StyledLink>
      </StyledContainer>

      <StyledContainer
        className='header_nav'
        sx={{ display: { lg: 'flex', xs: 'none' } }}
      >
        {' '}
        <SelectBox
          id='select'
          value={language}
          onChange={(e) => {
            handleChangeLanguage(e.target.value)
            setLanguage(e.target.value)
          }}
          variant='outlined'
        >
          <MenuItem value='tr' selected>
            TR
          </MenuItem>
          <MenuItem value='en'>EN</MenuItem>
        </SelectBox>
        <Link
          underline='none'
          href='/checkoutPage'
          color='white'
          sx={{ ':hover': { color: 'greenyellow' } }}
        >
          {' '}
          <Typography
            className='nav_item'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginInline: '20px',
            }}
          >
            <Typography variant='span' sx={{ fontSize: '.7rem' }}>
              <LoginIcon />
            </Typography>
            <Typography
              variant='span'
              sx={{ fontSize: '.8rem', textAlign: 'center' }}
            >
              {t('Sign In')}
            </Typography>
          </Typography>
        </Link>
        <Link
          underline='none'
          href='/checkoutPage'
          color='white'
          sx={{ ':hover': { color: 'greenyellow' } }}
        >
          <Typography
            className='nav_item'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: '1rem',
              alignItems: 'center',
            }}
          >
            {' '}
            <ShoppingBasket fontSize='medium' />
            <span>0</span>
          </Typography>
        </Link>
      </StyledContainer>
      <StyledContainer
        sx={{ display: { lg: 'none', xs: 'flex' }, position: 'relative' }}
        onClick={() => setIsOpen(!open)}
      >
        <Button
          id='demo-positioned-button'
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
        ></Button>
        <Menu
          id='demo-positioned-menu'
          aria-labelledby='demo-positioned-button'
          open={open}
          onClose={(e) => setIsOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={() => setIsOpen(false)}>Profile</MenuItem>
          <MenuItem onClick={() => setIsOpen(false)}>My account</MenuItem>
          <MenuItem onClick={() => setIsOpen(false)}>Logout</MenuItem>
        </Menu>
      </StyledContainer>
    </StyledDiv>
  )
}
export default Header
