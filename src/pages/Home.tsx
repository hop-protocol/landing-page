// React and Material-UI imports
import React, { FC } from 'react'
import { styled } from '@mui/material/styles'
import { Box, Typography, Link as MuiLink, Container, Grid, Avatar, Stack } from '@mui/material'
import Button, { ButtonProps } from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import DescriptionIcon from '@mui/icons-material/DescriptionOutlined'
import MenuBookIcon from '@mui/icons-material/MenuBookOutlined'
import ExploreIcon from '@mui/icons-material/ExploreOutlined'
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined'
import ForumIcon from '@mui/icons-material/ForumOutlined'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import SecurityIcon from '@mui/icons-material/Security'
import SavingsIcon from '@mui/icons-material/Savings'
import { useColorMode } from '../ThemeProvider'

// Import URLs from config
import {
  discordUrl,
  docsUrl,
  faqUrl,
  githubUrl,
  hopUrl,
  mediumUrl,
  twitterUrl,
  forumUrl
} from '../config'

// Import assets
import logoBlack from '../assets/hop-logo-black.svg'
import logoWhite from '../assets/hop-logo-white.svg'
import discord from '../assets/discord.svg'
import github from '../assets/github.svg'
import medium from '../assets/medium.svg'
import twitter from '../assets/twitter-x.svg'
import circlesBg from '../assets/circles-bg.svg'
import discourse from '../assets/discourse.svg'

// Constants
const EXPLORER_URLS = {
  v1: 'https://explorer.hop.exchange/',
  v2: 'https://v2-explorer.hop.exchange/'
}

const WHITEPAPER_URLS = {
  v1: 'https://hop.exchange/whitepaper.pdf',
  v2: 'https://hop.exchange/whitepaper-v2.pdf'
}

const CHAIN_ICONS = {
  ethereum: 'https://assets.hop.exchange/logos/ethereum.svg',
  optimism: 'https://assets.hop.exchange/logos/optimism.svg',
  arbitrumOne: 'https://assets.hop.exchange/logos/arbitrum.svg',
  arbitrumNova: 'https://assets.hop.exchange/logos/nova.svg',
  polygon: 'https://assets.hop.exchange/logos/polygon.svg',
  polygonZkEvm: 'https://assets.hop.exchange/logos/polygonzkevm.svg',
  gnosis: 'https://assets.hop.exchange/logos/gnosis.svg',
  base: 'https://assets.hop.exchange/logos/base.svg',
  linea: 'https://assets.hop.exchange/logos/linea.svg',
}

// Create styled components
const Background = styled('div')(({ theme }) => ({
    zIndex: -1,
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  alignItems: 'stretch',
  backgroundImage: `url(${circlesBg})`,
  backgroundSize: '120%',
  backgroundBlendMode: theme.palette.mode === 'dark' ? 'soft-light' : 'normal',
  backgroundColor: theme.palette.background.default,
  opacity: theme.palette.mode === 'dark' ? 0.5 : 1,
  transition: theme.transitions.create(['background-color', 'background-blend-mode'], {
    duration: theme.transitions.duration.standard
  }),
  minHeight: '100vh'
}))

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.mode === 'dark' 
    ? 'rgba(39, 35, 50, 0.8)' 
    : 'rgba(253, 247, 249, 0.8)',
  backdropFilter: 'blur(20px)',
  boxShadow: theme.palette.mode === 'dark'
    ? 'inset 0 -1px 0 0 rgba(150, 143, 168, 0.1)'
    : 'inset 0 -1px 0 0 rgba(102, 96, 119, 0.1)',
  transition: theme.transitions.create(['background-color', 'border-color']),
  padding: theme.spacing(1, 0)
}))

const Logo = styled('img')(({ theme }) => ({
  height: '3rem',
  marginRight: theme.spacing(2),
  transition: 'opacity 0.2s',
  '&:hover': {
    opacity: 0.8
  },
  [theme.breakpoints.down('sm')]: {
    height: '2.5rem'
  }
}))

const NavLink = styled(MuiLink)(({ theme }) => ({
  marginLeft: theme.spacing(4),
  color: theme.palette.text.primary,
  textDecoration: 'none',
  transition: 'opacity 0.2s',
  display: 'flex',
  alignItems: 'center',
  fontSize: '1rem',
  fontWeight: 500,
    '&:hover': {
    textDecoration: 'none',
    opacity: 0.8,
    color: theme.palette.primary.main
  },
  '&.disabled': {
    color: theme.palette.text.disabled,
    cursor: 'not-allowed',
    '&:hover': {
      opacity: 1
    }
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(2)
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))

const Card = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  transition: 'all 0.3s ease-in-out',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.5)',
  backdropFilter: 'blur(10px)',
  boxShadow: theme.palette.mode === 'dark'
    ? `
      8px 8px 24px rgba(11, 9, 30, 0.4),
      -8px -8px 24px rgba(79, 74, 94, 0.2)
    `
    : `
      8px 8px 24px rgba(174, 174, 192, 0.4),
      -8px -8px 24px rgba(255, 255, 255, 0.7)
    `,
    '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.palette.mode === 'dark'
      ? `
        12px 12px 40px rgba(11, 9, 30, 0.5),
        -12px -12px 40px rgba(79, 74, 94, 0.3)
      `
      : `
        12px 12px 40px rgba(174, 174, 192, 0.45),
        -12px -12px 40px rgba(255, 255, 255, 0.8)
      `,
    borderColor: theme.palette.primary.main,
    '& .card-gradient': {
      opacity: 1
    }
  }
}))

interface StyledButtonProps extends ButtonProps {
  highlighted?: boolean;
  large?: boolean;
  target?: string;
  href?: string;
}

const StyledButton = styled(Button, {
  shouldForwardProp: prop => !['highlighted', 'large'].includes(prop as string)
})<StyledButtonProps>(({ theme, highlighted, large }) => ({
  fontFamily: [
    'Nunito',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  WebkitFontSmoothing: 'antialiased',
  whiteSpace: 'nowrap',
  border: 0,
  cursor: 'pointer',
  display: 'inline-flex',
  outline: 0,
  position: 'relative',
  alignItems: 'center',
  userSelect: 'none',
  verticalAlign: 'middle',
  justifyContent: 'center',
  textDecoration: 'none',
  appearance: 'none',
  WebkitTapHighlightColor: 'transparent',
  margin: 'inherit',
  minWidth: '64px',
  boxSizing: 'border-box',
  fontWeight: 700,
  color: 'white',
  padding: large ? '0.8rem 2.8rem' : '0.8rem 2.4rem',
  fontSize: large ? '1.2rem' : '1rem',
  background: 'linear-gradient(99.85deg, rgb(179, 46, 255) -18.29%, rgb(242, 164, 152) 109.86%)',
  boxShadow: 'rgba(179, 46, 255, 0.3) 0px 4px 16px, rgba(242, 164, 152, 0.2) 0px 2px 8px',
  transition: 'all 0.15s ease-out',
  borderRadius: '3rem',
  textTransform: 'none',
  letterSpacing: 0,
  lineHeight: 1,
  '&:hover': {
    background: 'linear-gradient(99.85deg, rgb(242, 164, 152) -18.29%, rgb(179, 46, 255) 109.86%)',
    boxShadow: 'rgba(179, 46, 255, 0.4) 0px 4px 18px, rgba(242, 164, 152, 0.3) 0px 2px 10px',
    transform: 'translateY(-2px)'
  },
  [theme.breakpoints.down('sm')]: {
    padding: large ? '0.8rem 2.4rem' : '0.8rem 2rem',
    fontSize: large ? '1.1rem' : '0.9rem'
  }
}));

interface NetworkCardProps {
  icon: string;
  name: string;
  description: string;
  comingSoon?: boolean;
}

const NetworkCard: React.FC<NetworkCardProps> = ({ icon, name, description, comingSoon }) => (
  <Card sx={{ 
    minHeight: '180px', 
    position: 'relative', 
    overflow: 'visible',
    display: 'flex',
    flexDirection: 'column',
    p: 3,
    '& .card-gradient': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '100%',
      background: 'linear-gradient(135deg, rgba(179, 46, 255, 0.08), rgba(242, 164, 152, 0.08))',
      borderRadius: '8px',
      opacity: 0,
      transition: 'opacity 0.3s ease-in-out',
      zIndex: -1
    }
  }}>
    <div className="card-gradient" />
    <Box display="flex" alignItems="center" mb={3}>
      <Avatar 
        src={icon} 
        alt={name} 
        sx={{ 
          width: 48, 
          height: 48, 
          mr: 2,
          p: 1,
          background: theme => theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(0, 0, 0, 0.03)',
          backdropFilter: 'blur(10px)',
          border: theme => `1px solid ${theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.05)'}`,
        }} 
      />
      <Box>
        <Typography 
          variant="h6" 
          sx={{ 
            fontSize: '1.25rem',
            fontWeight: 600,
            lineHeight: 1.2,
            mb: 0.5
          }}
        >
          {name}
        </Typography>
        {comingSoon && (
          <Typography 
            variant="caption" 
            sx={{ 
              color: 'text.secondary',
              background: theme => theme.palette.mode === 'dark' 
                ? 'rgba(150, 143, 168, 0.1)' 
                : 'rgba(102, 96, 119, 0.1)',
              px: 1,
              py: 0.5,
              borderRadius: '4px',
              fontSize: '0.75rem'
            }}
          >
            Coming Soon
          </Typography>
        )}
      </Box>
    </Box>
    <Typography 
      variant="body2" 
      color="textSecondary" 
      sx={{ 
        flex: 1,
        lineHeight: 1.6,
        fontSize: '0.95rem'
      }}
    >
      {description}
    </Typography>
  </Card>
)

const DarkModeSwitch = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  color: theme.palette.text.primary
}))

interface TokenCardProps {
  icon: string
  name: string
  fullName: string
  description?: string
}

const TokenCard: React.FC<TokenCardProps> = ({ icon, name, fullName, description }) => (
  <Card
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      p: 2,
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(179, 46, 255, 0.15), rgba(242, 164, 152, 0.15))',
        opacity: 0,
        transition: 'opacity 0.3s ease-in-out',
        className: 'card-gradient'
      },
      '&:hover::before': {
        opacity: 1
      }
    }}
  >
    <Avatar
      src={icon}
      alt={name}
      sx={{
        width: 40,
        height: 40,
        bgcolor: 'transparent',
        position: 'relative',
        zIndex: 1
      }}
    />
    <Box sx={{ position: 'relative', zIndex: 1 }}>
      <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5 }}>
        {fullName}
      </Typography>
    </Box>
  </Card>
)

const Home: FC = () => {
  const { mode, toggleColorMode } = useColorMode()

  const supportedTokens = [
    { 
      name: 'ETH',
      fullName: 'Ethereum',
      icon: 'https://assets.hop.exchange/logos/eth.svg'
    },
    { 
      name: 'USDC',
      fullName: 'USD Coin',
      icon: 'https://assets.hop.exchange/logos/usdc.svg'
    },
    { 
      name: 'USDT',
      fullName: 'Tether USD',
      icon: 'https://assets.hop.exchange/logos/usdt.svg'
    },
    { 
      name: 'DAI',
      fullName: 'Dai Stablecoin',
      icon: 'https://assets.hop.exchange/logos/dai.svg'
    },
    { 
      name: 'rETH',
      fullName: 'Rocket Pool ETH',
      icon: 'https://assets.hop.exchange/logos/reth.svg'
    },
    { 
      name: 'MATIC',
      fullName: 'Polygon',
      icon: 'https://assets.hop.exchange/logos/matic.svg'
    },
    { 
      name: 'MAGIC',
      fullName: 'Magic',
      icon: 'https://assets.hop.exchange/logos/magic.svg'
    },
    { 
      name: 'SNX',
      fullName: 'Synthetix Network Token',
      icon: 'https://assets.hop.exchange/logos/snx.svg'
    },
    { 
      name: 'sUSD',
      fullName: 'Synthetix USD',
      icon: 'https://assets.hop.exchange/logos/susd.svg'
    }
  ]

  return (
    <>
      <Background />
      
      <StyledAppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Logo src={mode === 'dark' ? logoWhite : logoBlack} alt="Hop Protocol" />
            <Box sx={{ flexGrow: 1 }} />
            
            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
              <NavLink href={docsUrl} target="_blank">
                Docs
              </NavLink>
              <StyledButton 
                href={hopUrl}
                target="_blank"
                highlighted
                sx={{ ml: 4 }}
              >
                Launch App
              </StyledButton>
            </Box>

            {/* Mobile Navigation */}
            <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
              <StyledButton 
                href={hopUrl}
                target="_blank"
                highlighted
                size="small"
                sx={{ mr: 1 }}
              >
                Launch
              </StyledButton>
            </Box>

            <DarkModeSwitch onClick={toggleColorMode} aria-label="toggle dark mode">
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </DarkModeSwitch>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box sx={{
          pt: { xs: 15, sm: 20 },
          pb: { xs: 10, sm: 15 },
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <Typography variant="h1" sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
            fontWeight: 800,
            mb: 3,
            background: 'linear-gradient(90deg, rgb(226, 123, 216), rgb(142, 104, 224) 70%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: theme => theme.palette.mode === 'dark'
              ? '0 0 40px rgba(226, 123, 216, 0.3)'
              : '0 0 40px rgba(226, 123, 216, 0.1)'
          }}>
            The Cross-Chain Bridge Protocol
          </Typography>
          <Typography variant="h5" sx={{
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            color: 'text.secondary',
            mb: 6,
            maxWidth: '800px',
            mx: 'auto'
          }}>
            Fast, secure, and cost-effective token transfers between Ethereum rollups
          </Typography>
          <StyledButton 
          href={hopUrl}
          target="_blank"
            highlighted
            large
          >
            Start Bridging
          </StyledButton>
        </Box>
      </Container>

      {/* Features Section */}
      <Box sx={theme => ({
        py: { xs: 8, sm: 10 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(232, 65, 66, 0.05) 100%)'
          : 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(232, 65, 66, 0.03) 100%)',
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`
      })}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: 6,
              background: 'linear-gradient(90deg, rgb(226, 123, 216), rgb(142, 104, 224) 70%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: theme => theme.palette.mode === 'dark'
                ? '0px 0px 40px rgba(226, 123, 216, 0.25)'
                : '0px 0px 40px rgba(226, 123, 216, 0.15)'
            }}
          >
            Bridge Securely, Faster, and Cheaper
          </Typography>
          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <FlashOnIcon color="primary" sx={{ fontSize: '3rem', mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    Lightning Fast
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Experience near-instant transfers between networks with our optimized bridging protocol.
                  </Typography>
                </Box>
                <Box
                  className="card-gradient"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(179, 46, 255, 0.15), rgba(242, 164, 152, 0.15))',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out'
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <SecurityIcon color="primary" sx={{ fontSize: '3rem', mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    Battle-tested Security
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Built on proven technology with rigorous security measures and continuous auditing.
                  </Typography>
                </Box>
                <Box
                  className="card-gradient"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(179, 46, 255, 0.15), rgba(242, 164, 152, 0.15))',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out'
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <SavingsIcon color="primary" sx={{ fontSize: '3rem', mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    Cost Effective
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Save on gas fees with optimized cross-chain transfers and competitive rates.
                  </Typography>
                </Box>
                <Box
                  className="card-gradient"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(179, 46, 255, 0.15), rgba(242, 164, 152, 0.15))',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out'
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Networks Section */}
      <Box sx={theme => ({
        py: { xs: 8, sm: 10 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, rgba(232, 65, 66, 0.05) 0%, rgba(0, 0, 0, 0) 100%)'
          : 'linear-gradient(180deg, rgba(232, 65, 66, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
        borderBottom: `1px solid ${theme.palette.divider}`
      })}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{
            fontSize: { xs: '2rem', sm: '2.5rem' },
            fontWeight: 700,
            mb: 2,
            textAlign: 'center'
          }}>
            Supported Networks
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" sx={{ 
            mb: { xs: 4, sm: 6 },
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1rem', sm: '1.1rem' }
          }}>
            Hop Protocol supports major Ethereum Layer 2 networks, enabling fast and secure cross-chain transfers
          </Typography>
          
          <Grid container spacing={3}>
            {[
              {
                name: "Ethereum",
                icon: CHAIN_ICONS.ethereum,
                description: "The foundation layer for secure settlement"
              },
              {
                name: "Optimism",
                icon: CHAIN_ICONS.optimism,
                description: "Optimistic rollup with fast transactions"
              },
              {
                name: "Arbitrum One",
                icon: CHAIN_ICONS.arbitrumOne,
                description: "Optimistic rollup with low fees"
              },
              {
                name: "Arbitrum Nova",
                icon: CHAIN_ICONS.arbitrumNova,
                description: "Gaming-focused L2 with lower costs"
              },
              {
                name: "Polygon PoS",
                icon: CHAIN_ICONS.polygon,
                description: "High-performance PoS chain"
              },
              {
                name: "Polygon zkEVM",
                icon: CHAIN_ICONS.polygonZkEvm,
                description: "ZK rollup with Ethereum compatibility"
              },
              {
                name: "Base",
                icon: CHAIN_ICONS.base,
                description: "Coinbase's L2 built on OP Stack"
              },
              {
                name: "Gnosis",
                icon: CHAIN_ICONS.gnosis,
                description: "Stable and efficient sidechain"
              },
              {
                name: "Linea",
                icon: CHAIN_ICONS.linea,
                description: "Consensys ZK rollup"
              }
            ].map((network, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <NetworkCard {...network} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Supported Tokens Section */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 600
            }}
          >
            Supported Tokens
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" sx={{ 
            mb: { xs: 4, sm: 6 },
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1rem', sm: '1.1rem' }
          }}>
            Bridge your favorite tokens across networks with fast, secure, and cost-effective transfers
          </Typography>
          <Grid container spacing={3}>
            {supportedTokens.map((token) => (
              <Grid item xs={12} sm={6} md={4} key={token.name}>
                <TokenCard
                  icon={token.icon}
                  name={token.name}
                  fullName={token.fullName}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Community Section */}
      <Box component="section" sx={theme => ({
        py: { xs: 8, sm: 10 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(232, 65, 66, 0.05) 100%)'
          : 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(232, 65, 66, 0.03) 100%)',
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`
      })}>
        <Container maxWidth="lg">
          <Box sx={{
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto'
          }}>
            <Typography
              variant="h2"
              align="center"
              sx={{
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 600
              }}
            >
              Join Our Community
            </Typography>
            <Typography 
              variant="h6" 
              align="center" 
              color="textSecondary" 
              sx={{ 
                mb: 6,
                fontSize: { xs: '1rem', sm: '1.1rem' }
              }}
            >
              Connect with developers, users, and contributors. Get support, share ideas, and be part of the Hop ecosystem.
            </Typography>
            <StyledButton
              href={discordUrl}
              target="_blank"
              large
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: 4,
                py: 2
              }}
            >
              <img 
                src={discord} 
                alt="Discord"
                style={{
                  width: '24px',
                  height: '24px',
                  filter: 'brightness(0) invert(1)'
                }}
              />
              Join Discord
            </StyledButton>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={theme => ({
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3 },
        background: theme.palette.mode === 'dark'
          ? 'rgba(0, 0, 0, 0.6)'
          : 'rgba(255, 255, 255, 0.9)',
        position: 'relative',
        zIndex: 1,
        backdropFilter: 'blur(20px)',
        borderTop: `1px solid ${theme.palette.divider}`
      })}>
        <Container maxWidth="lg">
          {/* Social Links */}
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 3, sm: 4 },
            mb: { xs: 5, sm: 6 }
          }}>
            {[
              { icon: discord, alt: "Discord", url: discordUrl },
              { icon: twitter, alt: "Twitter", url: twitterUrl },
              { icon: github, alt: "GitHub", url: githubUrl },
              { icon: medium, alt: "Blog", url: mediumUrl },
              { icon: discourse, alt: "Forum", url: forumUrl }
            ].map((social, index) => (
              <NavLink 
                key={index} 
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  ml: 0,
                  display: 'flex !important',
                  alignItems: 'center',
                  fontSize: { xs: '1.1rem', sm: '1.2rem' },
                  fontWeight: 600,
                  '& img': {
                    width: '24px',
                    height: '24px',
                    marginRight: '12px'
                  }
                }}
              >
                <img 
                  src={social.icon} 
                  alt={social.alt}
                /> 
                {social.alt}
              </NavLink>
            ))}
          </Box>

          {/* Footer Links Grid */}
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {/* Empty column for logo */}
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ mb: { xs: 2, md: 0 } }}>
                <Logo
                  src={mode === 'dark' ? logoWhite : logoBlack}
                  alt="Hop Protocol"
                  sx={{
                    height: '2rem',
                    filter: theme => theme.palette.mode === 'dark' ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)',
                    cursor: 'pointer'
                  }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ mb: { xs: 2, md: 0 } }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    fontWeight: 600
                  }}
                >
                  Documentation
                </Typography>
                <Stack spacing={1.5}>
                  <NavLink 
                    href={WHITEPAPER_URLS.v1} 
                    target="_blank"
                    sx={{ 
                      ml: 0,
                      display: 'flex !important',
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }}
                  >
                    <DescriptionIcon sx={{ mr: 1, fontSize: '1.2rem' }} /> 
                    Whitepaper V1
                  </NavLink>
                  <NavLink 
                    href={WHITEPAPER_URLS.v2} 
                    target="_blank"
                    sx={{ 
                      ml: 0,
                      display: 'flex !important',
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }}
                  >
                    <DescriptionIcon sx={{ mr: 1, fontSize: '1.2rem' }} /> 
                    Whitepaper V2
                  </NavLink>
                  <NavLink 
                    href={docsUrl} 
                    target="_blank"
                    sx={{ 
                      ml: 0,
                      display: 'flex !important',
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }}
                  >
                    <MenuBookIcon sx={{ mr: 1, fontSize: '1.2rem' }} /> 
                    Documentation
                  </NavLink>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ mb: { xs: 2, md: 0 } }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    fontWeight: 600
                  }}
                >
                  Explorer
                </Typography>
                <Stack spacing={1.5}>
                  <NavLink 
                    href={EXPLORER_URLS.v1} 
                    target="_blank" 
                    sx={{ 
                      ml: 0,
                      display: 'flex !important',
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }}
                  >
                    <ExploreIcon sx={{ mr: 1, fontSize: '1.2rem' }} /> 
                    Explorer V1
                  </NavLink>
                  <Box 
                    component="div" 
                    sx={{ 
                      opacity: 0.5,
                      cursor: 'not-allowed',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }}
                  >
                    <ExploreIcon sx={{ mr: 1, fontSize: '1.2rem' }} /> 
                    Explorer V2
                    <Box 
                      component="span" 
                      sx={{
                        bgcolor: 'rgba(0, 0, 0, 0.1)',
                        px: 1,
                        py: 0.5,
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        ml: 1,
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Coming Soon
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ mb: { xs: 2, md: 0 } }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    fontWeight: 600
                  }}
                >
                  Help
                </Typography>
                <Stack spacing={1.5}>
                  <NavLink 
                    href={faqUrl}
                    target="_blank"
                    sx={{ 
                      ml: 0,
                      display: 'flex !important',
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }}
                  >
                    <HelpIcon sx={{ mr: 1, fontSize: '1.2rem' }} /> 
                    FAQ
                  </NavLink>
                  <NavLink 
                    href={discordUrl}
                    target="_blank"
                    sx={{ 
                      ml: 0,
                      display: 'flex !important',
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }}
                  >
                    <ChatBubbleOutlineIcon sx={{ mr: 1, fontSize: '1.2rem' }} /> 
                    Discord
                  </NavLink>
                  <NavLink 
                    href={forumUrl}
                    target="_blank"
                    sx={{ 
                      ml: 0,
                      display: 'flex !important',
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }}
                  >
                    <ForumIcon sx={{ mr: 1, fontSize: '1.2rem' }} /> 
                    Forum
                  </NavLink>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Home