import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import MuiLink from '@material-ui/core/Link'
import BasePage from './BasePage'

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.padding.default
  },
  link: {
    textDecoration: 'none'
  },
  breadcrumbs: {
    marginBottom: theme.padding.light
  }
}))

type Props = {}

const Careers: FC<Props> = () => {
  const styles = useStyles()

  return (
    <BasePage>
      <Breadcrumbs className={styles.breadcrumbs}>
        <MuiLink color="inherit" href="/">
          <Typography color="primary">Hop</Typography>
        </MuiLink>
        <Typography color="textPrimary">Careers</Typography>
      </Breadcrumbs>
      <Typography variant="h3" color="textSecondary" className={styles.title}>
        Careers
      </Typography>
      <Link to={'careers/senior-frontend-developer'} className={styles.link}>
        <Typography variant="h5" color="primary">
          Senior Frontend Developer
        </Typography>
      </Link>
    </BasePage>
  )
}

export default Careers