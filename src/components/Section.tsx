import React, { FC, ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.padding.default
  },
  sectionTitle: {
    marginBottom: theme.padding.light
  },
  sectionBody: {

  }
}))

type Props = {
  title: string,
  body: ReactNode
}

const Section: FC<Props> = props => {
  const styles = useStyles()
  const { title, body } = props

  return (
    <div className={styles.root}>
      <Typography variant="h4" color="textSecondary" className={styles.sectionTitle}>
        {title}
      </Typography>
      <Typography variant="body1" color="textSecondary" className={styles.sectionBody}>
        {body}
      </Typography>
    </div>
  )
}

export default Section