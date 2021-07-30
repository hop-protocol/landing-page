import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import background from '../assets/page-bg.svg';

const useStyles = makeStyles(theme => ({
  background: {
    zIndex: -1,
    position: 'fixed',
    top: '-50%',
    left: '-50%',
    height: '200%',
    width: '200%'
  },
  outerContainer: {
    width: '100%',
    padding: '6.4rem 4.8rem',
    boxSizing: 'border-box'
  },
  innerContainer: {
    maxWidth: '72.0rem',
    width: '100%'
  }
}))

type Props = {}

const BasePage: FC<Props> = props => {
  const styles = useStyles()
  const { children } = props
  return (
    <>
      <img src={background} className={styles.background} alt="logo" />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className={styles.outerContainer}
      >
        <div className={styles.innerContainer}>
          {children}
        </div>
      </Box>
    </>
  )
}

export default BasePage