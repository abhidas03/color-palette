import React from 'react'
import styles from '@/app/page.module.css'
import ColorThief from 'colorthief'

export default function CatButton( {setUploadedImage, setColorPalette}) {
    async function handleClick() {
        const url = 'https://cataas.com/cat'
        const response = await fetch(url);
        const imageBlob = await response.blob();
        const imageUrl = URL.createObjectURL(imageBlob);
        console.log(imageUrl);
        setUploadedImage(imageUrl)
        const img = new Image();
        img.src = imageUrl
        img.onload = () => {
            const colorThief = new ColorThief();
            const colorPalette = colorThief.getPalette(img, 6);
            setColorPalette(colorPalette);
          }


        return imageUrl
    }
  return (
    <>
        <button onClick={handleClick} className={styles.catButton}> 
            <p>Find a Cat</p>
        </button>
    </>
  )
}
