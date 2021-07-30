import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Section from '../components/Section'
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

const FEDeveloper: FC<Props> = () => {
  const styles = useStyles()

  return (
    <BasePage>
      <Breadcrumbs className={styles.breadcrumbs}>
        <Link color="inherit" href="/">
          <Typography color="primary">Hop</Typography>
        </Link>
        <Link color="inherit" href="/careers">
          <Typography color="primary">Careers</Typography>
        </Link>
        <Typography color="textPrimary">Senior Frontend Developer</Typography>
      </Breadcrumbs>
      <Typography variant="h3" color="textSecondary" className={styles.title}>
        Senior Frontend Developer
      </Typography>
      <Section
        title="About Hop"
        body="Hop Protocol is bringing composability to Ethereum's layer-2 by enabling seamless cross-chain asset transfers and contract calls for scaling solutions. Our mission is to unify Ethereum's layer-2 and connect Ethereum with the broader crypto ecosystem."
      />
      <Section
        title="Your Mission"
        body={
          <>
            You will lead frontend development at Hop Protocol including development of Hop's primary user interface.
            {" "}(
            <Link
              href={"https://app.hop.exchange/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://app.hop.exchange/
            </Link>
            ){" "}
            You will be responsible for ensuring that Hop is the simplest and most intuitive bridge experience by engaging with users and building delightful user interfaces.
          </>
        }
      />
      <Section
        title="About You"
        body="You are an experienced frontend developer capable of building, deploying, and maintaining robust UIs. You care deeply about user experience and know what it takes to distill user requirements into an elegant interface.

        You're a regular user of Ethereum and DeFi and have a deep understanding of the pain points users face on a day-to-day basis. You sympathize with users who trust protocols with their assets and understand the role a highly responsive UI plays in building that trust."
      />
      <Section
        title="Core Responsibilities"
        body={
          <ul>
            <li>Improve and maintain the core Hop interface as well as auxiliary interfaces</li>
            <li>Interact with users and determine their needs and pain points</li>
            <li>Manage and prioritize features, deadlines, and deliverables</li>
            <li>Help recruit, interview, train, and manage a growing frontend team</li>
          </ul>
        }
      />
      <Section
        title="Required Skills and Experience"
        body={
          <ul>
            <li>Highly experienced with React</li>
            <li>Familiarity with React Hooks</li>
            <li>Experience with TypeScript</li>
            <li>Experience with ethers.js</li>
            <li>Ability to read Solidity and interact with smart contracts</li>
          </ul>
        }
      />
      <Section
        title="Contract Details"
        body={
          <ul>
            <li>Based in Los Angeles but remote for the right candidate</li>
            <li>Competitive compensation and equity</li>
            <li>Full medical, dental, and vision insurance</li>
            <li>Unlimited vacation</li>
            <li>Company sponsored travel for conferences, retreats, and on-sites across the world</li>
          </ul>
        }
      />
      <Section
        title="How to Apply"
        body={
          <>
            Reach out in our
            {" "}
            <Link
              href={"https://discord.gg/2BxafMKP"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </Link>
            {" "}
            . Let us know why you want to join Hop and why you're a good fit.
          </>
        }
      />
    </BasePage>
  )
}

export default FEDeveloper