import React from 'react'
import styles from '../app/page.module.css'
import ListItem from './listItem';
export default function ColorDisplay( {colorPalette} ) {
    const toHex = (rgb) => {
        let hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex
        }

        return hex;
    }
    
    return (
    <>
        <div className={styles.content}>
            {colorPalette && 
            (
            <ul className={styles.colorList}>
                {colorPalette.map((color, index) => {
                    const rgb = `rgb(${color.join(",")})`;
                    const hex = ('#' + toHex(color[0]) + toHex(color[1]) + toHex(color[2]));
                    return <ListItem key={index} rgb={rgb} hex={hex} />
                })
                
                }
            </ul> 
            )
            }
        </div>
    </>
    )
}
