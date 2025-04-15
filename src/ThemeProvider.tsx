import React, { createContext, useContext, useMemo, useState } from 'react'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Extend the theme's TypeBackground interface
declare module '@mui/material/styles' {
  interface TypeBackground {
    contrast: string;
  }
}

type ColorMode = 'light' | 'dark'

interface ThemeContextType {
  mode: ColorMode
  toggleColorMode: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleColorMode: () => {}
})

export const useColorMode = () => useContext(ThemeContext)

// Box shadows configuration
const boxShadows = {
  light: {
    input: {
      normal: `
        inset -3px -3px 6px rgba(255, 255, 255, 0.5),
        inset 3px 3px 6px rgba(174, 174, 192, 0.16)
      `,
      bold: `
        inset -12px -12px 24px rgba(255, 255, 255, 0.5),
        inset 12px 12px 24px rgba(174, 174, 192, 0.16)
      `,
    },
    inner: `
      inset 4px -4px 3px #FFFFFF,
      inset 8px -8px 60px -5px #F1E9EC,
      inset -7px 7px 5px -4px rgba(174, 174, 192, 0.4)
    `,
    card: `
      8px 8px 30px rgba(174, 174, 192, 0.35),
      inset -8px -8px 12px rgba(255, 255, 255, 0.15),
      inset 8px 8px 8px rgba(174, 174, 192, 0.04)
    `,
    button: {
      default: `
        10px -10px 30px #FFFFFF,
        -10px 10px 30px #D8D5DC,
        inset -8px 4px 10px rgba(102, 96, 119, 0.04)
      `,
      disabled: `
        10px -10px 30px #FFFFFF,
        -10px 10px 30px #D8D5DC,
        inset -8px 4px 10px rgba(102, 96, 119, 0.04)
      `,
      highlighted: `
        10px -10px 30px #FFFFFF,
        -10px 10px 30px rgba(216, 213, 220, 0.8)
      `,
    },
    select: `
      -6px 6px 12px #D8D5DC,
      5px -5px 12px #FFFFFF,
      inset -6px 6px 12px rgba(233, 229, 232, 0.4),
      inset -5px -5px 14px rgba(255, 255, 255, 0.15)
    `,
  },
  dark: {
    input: {
      normal: `
        inset -8px -8px 60px -5px rgba(21, 20, 29, 0.6),
        inset 4px -4px 3px rgba(102, 96, 119, 0.5),
        inset -7px 7px 5px -4px #161222
      `,
      bold: `
        inset -16px -16px 60px -5px rgba(21, 20, 29, 0.6),
        inset 8px -8px 6px rgba(102, 96, 119, 0.5),
        inset -14px 14px 10px -8px #161222
      `,
    },
    inner: `
      inset -8px -8px 60px -5px rgba(21, 20, 29, 0.6),
      inset 4px -4px 3px rgba(102, 96, 119, 0.5),
      inset -7px 7px 5px -4px #161222
    `,
    card: `8px 8px 30px rgba(174, 174, 192, 0.35)`,
    button: {
      default: `
        10px -10px 30px rgba(79, 74, 94, 0.3),
        -10px 10px 30px rgba(11, 9, 30, 0.48),
        inset -8px 4px 10px rgba(11, 9, 30, 0.1)
      `,
      disabled: `
        -10px 10px 30px rgba(11, 9, 30, 0.48),
        inset -8px 4px 10px rgba(11, 9, 30, 0.1)
      `,
      highlighted: `
        10px -10px 30px rgba(79, 74, 94, 0.3),
        -10px 10px 30px rgba(11, 9, 30, 0.48),
        inset -8px 4px 10px rgba(11, 9, 30, 0.1)
      `,
    },
    select: `
      -6px 6px 12px rgba(11, 9, 30, 0.5),
      5px -5px 12px rgba(79, 74, 94, 0.3),
      inset -6px 6px 12px rgba(11, 9, 30, 0.24),
      inset -5px -5px 20px rgba(102, 96, 119, 0.2)
    `,
  }
}

interface Props {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<ColorMode>('dark')

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [mode]
  )

  const theme = useMemo(() => {
    const isLight = mode === 'light'
    
    return createTheme({
      palette: {
        mode,
        primary: {
          light: '#c462fc',
          main: '#B32EFF',
          dark: '#7213a8',
          contrastText: 'white',
        },
        background: {
          default: isLight ? '#FDF7F9' : '#272332',
          paper: isLight ? '#FDF7F9' : '#272332',
          contrast: isLight ? '#FFFFFF' : '#1F1E23',
        },
        action: {
          active: '#B32EFF',
          hover: isLight ? '#e8c1ff' : '#af64c5',
          selected: '#B32EFF',
          disabled: isLight ? 'white' : '#66607738',
        },
        secondary: {
          main: isLight ? '#666077' : '#968FA8',
          light: isLight ? '#6660777f' : '#968FA87f',
        },
        success: {
          main: '#00a72f',
          light: '#00a72f33',
        },
        error: {
          main: '#c50602',
          light: '#c506021e',
        },
        info: {
          main: '#2172e5',
          light: '#2172e51e',
        },
        text: {
          primary: isLight ? '#0F0524' : '#E3DDF1',
          secondary: isLight ? '#666077' : '#968FA8',
          disabled: isLight ? '#6660777f' : '#968FA87f',
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              margin: 'inherit',
              backgroundColor: isLight ? 'transparent' : '#272332',
              boxShadow: isLight 
                ? boxShadows.light.button.default 
                : boxShadows.dark.button.default,
              color: '#B32EFF',
              borderRadius: '8px',
              minWidth: '20rem',
              padding: '1.2rem 5rem',
              fontSize: '1.1rem',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, rgba(179, 46, 255, 0.1), rgba(242, 164, 152, 0.1))',
                opacity: 0,
                transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              },
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: isLight 
                  ? `
                    15px -15px 35px #FFFFFF,
                    -15px 15px 35px #D8D5DC,
                    inset -8px 4px 10px rgba(102, 96, 119, 0.04)
                  `
                  : `
                    15px -15px 35px rgba(79, 74, 94, 0.3),
                    -15px 15px 35px rgba(11, 9, 30, 0.48),
                    inset -8px 4px 10px rgba(11, 9, 30, 0.1)
                  `,
                '&::before': {
                  opacity: 1,
                },
              },
              '&:active': {
                transform: 'translateY(0)',
                transition: 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
              },
              '&:disabled': {
                background: isLight ? '#FDF7F9' : '#272332',
                boxShadow: isLight 
                  ? boxShadows.light.button.disabled 
                  : boxShadows.dark.button.disabled,
                color: isLight ? '#6660777f' : '#968FA87f',
                transform: 'none',
                '&::before': {
                  opacity: 0,
                },
              },
            },
            text: {
              boxShadow: 'none !important'
            }
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              padding: '2.8rem',
              borderRadius: '8px',
              transition: 'none',
              backgroundColor: isLight ? '#FDF7F9' : '#272332',
              boxShadow: isLight 
                ? boxShadows.light.card 
                : boxShadows.dark.card,
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              backgroundColor: isLight ? '#FDF7F9' : '#272332',
            },
          },
        },
        MuiAlert: {
          styleOverrides: {
            standardSuccess: {
              borderRadius: '4px',
              backgroundColor: isLight ? '#e0faf2' : '#2e7d3212',
              color: isLight ? '#0b4d00' : '#a5d6a7',
              border: isLight 
                ? '1px solid #004d1c2b' 
                : '1px solid #a5d6a738',
            },
            standardError: {
              borderRadius: '4px',
              backgroundColor: isLight ? '#ffebee' : '#c628281c',
              color: isLight ? '#9f1919' : '#ffcccb',
              border: isLight 
                ? '1px solid #c628283d' 
                : '1px solid #ffcccb30',
            },
            standardWarning: {
              borderRadius: '4px',
              backgroundColor: isLight ? '#fff3e0b3' : '#ff980012',
              color: isLight ? '#ef7d00' : '#fff59d',
              border: isLight 
                ? '1px solid #ef6c002e' 
                : '1px solid #fff59d1a',
            },
            standardInfo: {
              borderRadius: '4px',
              backgroundColor: isLight ? '#e3f2fd' : '#1976d20d',
              color: isLight ? '#0277bd' : '#bbdefb',
              border: isLight 
                ? '1px solid #0277bd2e' 
                : '1px solid #bbdefb0d',
            },
          },
        },
        MuiTypography: {
          styleOverrides: {
            root: {
              color: isLight ? '#0F0524' : '#E3DDF1',
            },
          },
        },
      },
    })
  }, [mode])

  return (
    <ThemeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
} 