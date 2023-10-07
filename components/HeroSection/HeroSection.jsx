import React from 'react'
import Image from "next/image";

//INTERNAL IMPORT
import Style from './HeroSection.module.css';
import { Button } from '../Componentsindex';
import images from '../../img';


const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Explore, Acquire, and Trade Unique NFTs 🖼️</h1>
          <p>
          Explore, Collect, and Trade the Finest NFTs Across Every Realm – Your One-Stop NFT Marketplace!💎
          </p>
          <Button btnName="Start your search" />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
             src={images.hero}
             alt="Hero section"
             width={550}
             height={220}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection