import Link from "next/link";
import Head from "next/head"
import { useEffect,useState } from "react";


export default function Home() {
    const [data,setData]= useState([])
    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('@user'))
        setData(users)
    },[])
    return (
    <>
        <Head>
            <title>Inicio </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <p>Hello  {data.name}</p>
          </div>
    </>
    )
   
}
