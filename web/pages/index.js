
import Head from 'next/head'
import Link from 'next/link'
import { connectToDatabase } from '../util/mongodb'

import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './home'


export default function Index({ isConnected }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main>
        <div className="">

        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>


    </div>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected() // Returns true or false
  return {
    props: { isConnected},
  }
}
