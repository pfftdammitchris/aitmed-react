import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { MdStarHalf, MdStarBorder, MdStar } from 'react-icons/md'

const styles = (theme) => {
  return {
    unselectedStar: {
      '&:hover': {
        color: '#c59b08',
      },
    },
    selectedStar: {
      color: '#c59b08',
    },
  }
}

const StarRating = ({
  classes,
  totalStars,
  rating = null,
  onClick: handleSetRating,
  size = 50,
}) => {
  const [starsSelected, selectStar] = useState(0)
  const Star = ({ selected = false, onClick }) => {
    return (
      <>
        {selected ? (
          <MdStar
            size={size}
            className={classes.selectedStar}
            onClick={onClick}
          />
        ) : (
          <MdStarBorder
            size={size}
            className={classes.unselectedStar}
            onClick={onClick}
          />
        )}
      </>
    )
  }

  const handleOnSelectStar = (index) => {
    selectStar(index + 1)
    handleSetRating(index + 1)
  }
  let starArray = []
  if (rating) {
    for (let i = 0; i < totalStars; i++) {
      let starPercentage
      let star
      if (i + 1 === Math.ceil(rating)) {
        starPercentage = i + 1 - rating
      }
      if (starPercentage > 0.5) {
        star = (
          <MdStarHalf key={i} size={size} className={classes.selectedStar} />
        )
      } else if (i + 1 > Math.ceil(rating)) {
        star = <MdStarBorder key={i} size={size} />
      } else {
        star = <MdStar key={i} size={size} className={classes.selectedStar} />
      }
      starArray.push(star)
    }
  } else {
    for (let i = 0; i < totalStars; i++) {
      starArray.push(
        <Star
          key={i}
          selected={i < starsSelected}
          onClick={(e) => handleOnSelectStar(i)}
        />,
      )
    }
  }
  return <div>{starArray}</div>
}
StarRating.propTypes = {
  classes: PropTypes.object.isRequired,
  totalStars: PropTypes.number.isRequired,
  rating: PropTypes.number,
  onClick: PropTypes.func,
  size: PropTypes.number,
}

export default withStyles(styles)(StarRating)
