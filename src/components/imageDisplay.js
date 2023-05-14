import styles from '../app/page.module.css'
export default function ImageDisplay({ uploadedImage, colorPalette }) {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.image}>
                    {uploadedImage ? <img src={uploadedImage} alt="Uploaded image" /> : <h2>put image here</h2>}
                </div>
            </div>
        </>
    )
}