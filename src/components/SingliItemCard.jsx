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
import { useTranslation } from 'react-i18next'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

function CardItem(props) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isInBasket, setIsInBasket] = useState(false)
  const { addToFavorite, removeFromFavorite } = useContext(FavoritesContext)
  const { removeFromBasket, addToBasket } = useContext(BasketContext)
  const { t } = useTranslation()
  const { title, description, price, id, game } = props
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
  const handleRemoveBasket = (game) => {
    removeFromBasket(game)
    setIsInBasket(false)
  }

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  }

  return (
    <Card sx={{ maxWidth: { sm: 600 } }} className='card'>
      <Stack direction='row'>
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          controlsStrategy='alternate'
          items={game.Screenshots.map((image, index) => (
            <StyledCardImage
              component='img'
              height='140'
              sx={{ marginInline: '20px' }}
              key={index}
              image={image}
              alt={title}
            />
          ))}
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
          {description}
        </Typography>
        <Typography variant='subtitle1' component='span' color='text.secondary'>
          {price}$
        </Typography>
        <Typography
          variant='subtitle1'
          component='span'
          color='text.secondary'
          sx={{ float: 'right' }}
        >
          {t('Release Date')}: {new Date(game.ReleaseDate).toDateString()}
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
    </Card>
  )
}

export default memo(CardItem)
