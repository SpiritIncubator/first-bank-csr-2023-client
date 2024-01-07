'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { ThemeProvider } from '@mui/material'
import theme from './theme'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      This page is empty
    </ThemeProvider>
  )
}
