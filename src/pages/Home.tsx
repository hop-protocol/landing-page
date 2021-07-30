import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import background from '../assets/landing-page-bg.svg';
import logo from '../assets/hop-logo.svg';
import discord from '../assets/discord.svg';
import github from '../assets/github.svg';
import medium from '../assets/medium.svg';
import twitter from '../assets/twitter.svg';
import useHop from '../assets/use-hop.svg';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'
import {
  hopUrl,
  discordUrl,
  docsUrl,
  faqUrl,
  githubUrl,
  mediumUrl,
  twitterUrl
} from '../config'

const useStyles = makeStyles(theme => ({
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
    width: '3.0rem',
    opacity: '35%',
    '&:hover': {
      opacity: '70%'
    }
  },
  links: {
    position: 'absolute',
    bottom: '1.4rem'
  },
  footerLink: {
    textDecoration: 'none',
    margin: `0 ${theme.padding.extraLight}`,
    '&:hover': {
      textDecoration: 'inherit'
    }
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
        <MuiLink
          href={hopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.appButton}
        >
          <img src={useHop} className={styles.useHop} alt="logo" />
        </MuiLink>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          className={styles.links}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <MuiLink
              href={discordUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={discord} className={styles.link} alt="logo" />
            </MuiLink>
            <MuiLink
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} className={styles.link} alt="logo" />
            </MuiLink>
            <MuiLink
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className={styles.link} alt="logo" />
            </MuiLink>
            <MuiLink
              href={mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={medium} className={styles.link} alt="logo" />
            </MuiLink>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <MuiLink
              href={faqUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              <Typography variant="subtitle2" color="primary">
                FAQ
              </Typography>
            </MuiLink>
            <MuiLink
              href={docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              <Typography variant="subtitle2" color="primary">
                Docs
              </Typography>
            </MuiLink>
            <Link to="/careers" className={styles.footerLink}>
              <Typography variant="subtitle2" color="primary">
                Careers
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home