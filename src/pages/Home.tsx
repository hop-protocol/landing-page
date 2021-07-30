import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import background from '../assets/landing-page-bg.svg';
import logo from '../assets/hop-logo.svg';
import discord from '../assets/discord.svg';
import github from '../assets/github.svg';
import docs from '../assets/docs.svg';
import twitter from '../assets/twitter.svg';
import useHop from '../assets/use-hop.svg';
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import {
  hopUrl,
  discordUrl,
  docsUrl,
  githubUrl,
  twitterUrl
} from '../config'

const useStyles = makeStyles(() => ({
  background: {
    zIndex: -1,
    position: 'fixed',
    top: '-50%',
    left: '-50%',
    height: '200%',
    width: '200%'
  },
  container: {
    height: '100vh',
    width: '100%'
  },
  logo: {
    width: '24rem'
  },
  link: {
    margin: '1.8rem',
    width: '3.5rem',
    opacity: '35%',
    '&:hover': {
      opacity: '70%'
    }
  },
  links: {
    marginLeft: '0.4rem',
    position: 'absolute',
    bottom: '2.4rem'
  },
  useHop: {
    height: '5.0rem'
  },
  appButton: {
    marginTop: '5.6rem',
    borderRadius: '3.0rem',
    padding: 0,
    height: '5.0rem',
    '&:hover': {
      background: 'rgba(247, 189, 181, 0.05)'
    }
  }
}))

type Props = {}

const Home: FC<Props> = () => {
  const styles = useStyles()

  return (
    <>
      <img src={background} className={styles.background} alt="logo" />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className={styles.container}
      >
        <img src={logo} className={styles.logo} alt="logo" />
        <Link
          href={hopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.appButton}
        >
          <img src={useHop} className={styles.useHop} alt="logo" />
        </Link>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          className={styles.links}
        >
          <Link
            href={discordUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={discord} className={styles.link} alt="logo" />
          </Link>
          <Link
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} className={styles.link} alt="logo" />
          </Link>
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} className={styles.link} alt="logo" />
          </Link>
          <Link
            href={docsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={docs} className={styles.link} alt="logo" />
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default Home