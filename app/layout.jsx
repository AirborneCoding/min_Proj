'use client'
import '@styles/globals.css'
import '@styles/mynormalize.css'
import '@styles/style.css'

import { store } from '@/redux/store'
import { Provider } from 'react-redux'

import Navbar from '@components/navbar/Navbar.jsx'

export const metadata = {
  title: 'ministry of justice',
  description: 'gov website',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        {/* <div className='main'>
          <div className='gradient' />
        </div> */}
        <main className=''>
          <Provider store={store}>
            <Navbar />
            {children}
          </Provider>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
