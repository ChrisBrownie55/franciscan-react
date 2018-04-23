import React, { Component, Fragment } from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

import Link from 'next/link'

const styles = theme => ({
  card: {
    width: '100%'
  },
  media: {
    minHeight: '280px',
    [theme.breakpoints.up('xl')]: {
      minHeight: '1366px'
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: 500
    }
  },
  category: {
    color: '#ffb41f',
    textTransform: 'uppercase',
    fontSize: '14px'
  },
  quote: {
    fontSize: '16px',
    paddingLeft: '8px',
    borderLeft: '4px solid rgba(0, 0, 0, 0.24)'
  }
})

class ProfileCard extends Component {
  render () {
    const {
      classes,
      profileImg,
      profileImgTitle,
      profileType,
      profileName,
      content,
      profileLink
    } = this.props
    return (
      <Card className={classes.card}>
        {/* <CardMedia
          className={classes.media}
          image={profileImg}
          title={profileImgTitle}
          style={{
            backgroundPositionY: bgPosY,
            backgroundSize: `${bgContain ? 'contain' : 'cover'}`
          }}
        /> */}
        <img
          src={profileImg}
          title={profileImgTitle}
          style={{ width: '100%' }}
        />
        <CardContent>
          <Typography variant="caption" className={classes.category}>
            {profileType}
          </Typography>
          <Typography variant="headline" component="h2">
            {profileName}
          </Typography>
          <Typography component="p" className={classes.quote}>
            {content}
          </Typography>
        </CardContent>
        {profileLink && (
          <CardActions>
            <Fragment>
              <Link prefetch href={profileLink}>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </Link>
            </Fragment>
          </CardActions>
        )}
      </Card>
    )
  }
}

export default withStyles(styles)(ProfileCard)
