import React from 'react'
import Link from 'next/link';
//internal import
import style from './Discover.module.css';

const Discover = () => {

  //------Discover Navigation Menu
  const discover = [
    {
      name: "Collection",
      Link: "collection"
    },
    
    {
      name: "Search",
      Link: "search"
    },
    {
      name: "Author Profile",
      Link: "author-profile"
    },
    {
      name: "NFT Details",
      Link: "NFT-details"
    },
    {
      name: "Account-Setting",
      Link: "account-setting"
    },
    {
      name: "Connect Wallet",
      Link: "connect-wallet"
    },
    {
      name: "Blog",
      Link: "blog"
    }
  ]
  return (
    <div>{discover.map((eL, i)=> (
      <div key={i + 1}className={style.discover}>
        <Link href={{pathname:`${eL.link}`}}>{eL.name}</Link>
      </div>
    ))}</div>
  )
}

export default Discover