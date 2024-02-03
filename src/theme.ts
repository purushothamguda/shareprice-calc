import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        primaryDark: Palette['primary'];
    }
    interface PaletteOptions {
        primaryDark: PaletteOptions['primary'];
    }
}

const theme = createTheme({
    palette: {
        primary: {
            light: '#CDF3FF',
            main: '#2D4FBA',
            dark: '#1A3487',
        },
        primaryDark: {
            main: '#12192E',
            dark: '#222222',
        },
  
    },
    typography: {
        fontFamily: '"Barlow", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        h1: {
            fontSize: '2.2rem',
        },
        // ... other typography settings
    },
    spacing: 8, // This is the base unit. spacing(2) = 2 * 8 = 16px
    breakpoints: {
        values: {
            xs: 390,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    zIndex: {
        appBar: 1200,
        drawer: 1100,
        // ... other zIndex values
    },
    transitions: {
        // You can customize the transitions globally
        easing: {
            // This is just an example
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            // ... other easing transitions
        },
        duration: {
            shortest: 150,
            // ... other duration values
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
                font-family: 'Barlow, sans-serif';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap;
            }
            body {
                background-color: #E5E5E5;
            }
        `,
        },
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    fontSize: '18px',
                    textTransform: 'none',
                    padding: '3px 30px',
                    ...(ownerState.variant === 'contained' && ownerState.color === 'primary' && {
                        backgroundColor: theme.palette.primary.main,
                        // color: '#2D4FBA',
                    }),
                }),
            },
        },
        // ... overrides for other components
    },
});

export default theme