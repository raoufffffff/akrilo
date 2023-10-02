import React from 'react'
import ImageGallery from 'react-image-gallery'

const Gal = (props) => {
    let a = props.photo
    let img = []
    for (let i = 0; i < a.length; i++) {
        img.push({ original: a[i] })
    }

    const photos = img

    return (
        <ImageGallery
            showThumbnails={false}
            showPlayButton={false}
            showNav={false}
            showFullscreenButton={false}
            items={photos}
            showBullets
            showIndex
        />
    )
}

export default Gal