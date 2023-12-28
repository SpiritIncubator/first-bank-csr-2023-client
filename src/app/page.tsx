'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import PublicGoogleSheetsParser from 'public-google-sheets-parser'
const spreadsheetId = '1j4pziNq3RI1slNrBapJsDUtZ0n1qJX8_P832mPYQ3PM';

export default function Home() {

  useEffect(() => {
    new PublicGoogleSheetsParser().parse(spreadsheetId).then((data) => {
      console.log(data);
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      This page is empty
    </ThemeProvider>
  )
}
