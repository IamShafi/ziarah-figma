import React from 'react'

const Layout = ({children}: React.PropsWithChildren) => {
  return (
    <main className='min-h-screen'>
      {children}
    </main>
  )
}

export default Layout
