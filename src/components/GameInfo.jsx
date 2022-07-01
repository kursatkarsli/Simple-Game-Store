import { Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingliItemCard from './SingliItemCard'

function GameInfo() {
  const [singleItem, setSingleItem] = useState(null)
  const params = useParams()
  useEffect(() => {
    setSingleItem(JSON.parse(localStorage.getItem(params.id)))
  }, [])
  return (
    <Grid container justifyContent='center' marginTop='20px'>
      {singleItem && (
        <SingliItemCard
          title={singleItem.Name}
          description={singleItem.Summary}
          price={singleItem.Price}
          id={singleItem.Id}
          game={singleItem}
        />
      )}
    </Grid>
  )
}

export default GameInfo
