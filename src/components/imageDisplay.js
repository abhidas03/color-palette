import styles from '../app/page.module.css'
import CatButton from './catButton'


export default function ImageDisplay({ uploadedImage, setUploadedImage, setColorPalette }) {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.image}>
                    {uploadedImage ? <img src={uploadedImage} alt="Uploaded image" /> : <h2>Image will appear here</h2>}
                </div>
                <div>
                    <CatButton setUploadedImage={setUploadedImage} setColorPalette={setColorPalette}/>
                </div>
            </div>
        </>
    )
}