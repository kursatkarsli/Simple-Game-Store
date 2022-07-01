import React, { memo, useContext, useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'
import { StyledCardImage } from '../assets/materialUi/CardImage'
import { FavoritesContext } from '../context/favoritesContext'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { BasketContext } from '../context/BasketContext'
import { addToLocalStorage } from './helper/addToLocalStorage'
import CustomModal from './common/Modal'
import { getDataFromLocalStorage } from './helper/getFromLocalStorage'
import { useTranslation } from 'react-i18next'

function CardItem(props) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isInBasket, setIsInBasket] = useState(false)
  const { addToFavorite, removeFromFavorite } = useContext(FavoritesContext)
  const { removeFromBasket, addToBasket } = useContext(BasketContext)

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { t } = useTranslation()
  const { image, title, description, price, id, game } = props

  const handleAddFavorite = () => {
    addToFavorite(game)
    setIsFavorite(true)
  }
  const handleRemoveFavorite = (game) => {
    removeFromFavorite(game)
    setIsFavorite(false)
  }

  const handleAddBasket = () => {
    addToBasket(game)
    setIsInBasket(true)
  }
  const handleRemoveBasket = () => {
    removeFromBasket(game)
    setIsInBasket(false)
  }
  useEffect(() => {
    getDataFromLocalStorage('games').map(
      (item) => item.Id === game.Id && item.inBasket && setIsInBasket(true)
    )
  }, [])
  return (
    <Card sx={{ maxWidth: { sm: 400, md: 400, lg: 350 } }} className='card'>
      <Stack
        onClick={() => {
          addToLocalStorage(id, game)
          handleOpen()
        }}
      >
        <StyledCardImage
          component='img'
          height='140'
          image={image}
          alt={title}
        />
      </Stack>
      <CardContent>
        <Typography gutterBottom variant='subtitle2' component='div'>
          {title}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          className='content'
          paragraph={true}
        >
          {t(description)}
        </Typography>
        <Typography variant='subtitle1' color='text.secondary'>
          {price}$
        </Typography>
      </CardContent>
      <CardActions className='card-actions'>
        {isFavorite ? (
          <Button size='small' color='error' onClick={handleRemoveFavorite}>
            <FavoriteIcon />
          </Button>
        ) : (
          <Button size='small' color='error' onClick={handleAddFavorite}>
            <FavoriteBorderIcon />
          </Button>
        )}{' '}
        {isInBasket ? (
          <Button size='small' onClick={handleRemoveBasket}>
            <ShoppingBagIcon sx={{ color: '#069901c1' }} />
          </Button>
        ) : (
          <Button size='small' onClick={handleAddBasket}>
            <ShoppingBagOutlinedIcon sx={{ color: '#777777' }} />
          </Button>
        )}
      </CardActions>
      <CustomModal open={open} handleClose={handleClose} game={game} />
    </Card>
  )
}

export default memo(CardItem)
