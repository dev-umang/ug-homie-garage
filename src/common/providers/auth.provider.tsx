import React, { FC, ReactNode, useEffect } from 'react'

type Props = {
    children: ReactNode
}

const AuthProvider: FC<Props> = ({children}) => {
    
    useEffect(() => {
      
    }, [])
    

  return children
}

export default AuthProvider