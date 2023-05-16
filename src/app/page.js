"use client"
import styles from './page.module.css'
import ImageDisplay from '@/components/imageDisplay'
import ColorDisplay from '@/components/colorDisplay'
import ColorThief from 'colorthief'
import { useState } from 'react'

const imageIcon = <i className="fa-solid fa-image"></i>
export default function Home() {

  const [uploadedImage, setUploadedImage] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);
  console.log("What you looking here for? 🫥")
  const uploadImage = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();
      
      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 6);
        console.log(colorPalette);
        setUploadedImage(event.target.result);
        setColorPalette(colorPalette);
      }
      img.src = event.target.result;
    }
    reader.readAsDataURL(imageFile);
  }
  return (
    <>
      <header>
        <h1>Palette Generator</h1>
        <div className='input'>
          <label htmlFor='file'>{imageIcon} Upload your Image</label>
          <input type='file' id='file' hidden onChange={uploadImage}/>
        </div>
      </header>
      <main className={styles.main}>
        <ImageDisplay uploadedImage={uploadedImage} />
        <ColorDisplay colorPalette={colorPalette}/>
      </main>
    </>

  )
}
