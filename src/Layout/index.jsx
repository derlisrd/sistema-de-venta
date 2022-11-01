import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const Layout = ({children}) => {

    const lightTheme = createTheme({
        type: 'light',
        theme: {
          
        }
      })


      const darkTheme = createTheme({
        type: 'dark',
        theme: {
          colors: {},
          fonts:{
            sans:'Montserrat'
          }
        }
      })


  return (
<NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
  <NextUIProvider>
    {children}
  </NextUIProvider>
</NextThemesProvider>
  )
}

export default Layout
