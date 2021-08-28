import React, { useState } from "react";
import cx from 'classnames';
import styles from "./ImgPreview.module.scss";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import img1 from "../images/1image.jpg";
import img2 from "../images/2image.jpg";
import img3 from "../images/3image.jpg";

const images = [img1, img2, img3];

const ImgPreview = () => {
    const [state, setState] = useState({ openImgPrev: false, imgIndex: 0 });
    return (
        <div>
            <h2 className={cx("my-3", styles.desc)}>
                react lightbox is a tool that helps in viewing a folder of images easily!
                <br/> <br/>
                <i>
                    <a href="https://www.npmjs.com/package/react-image-lightbox">
                        explore more here!
                        </a>
                </i>
            </h2>

            <button type="button" className={cx(styles.btn)} onClick={() => setState({ openImgPrev: true, imgIndex: state.imgIndex })}>
                open image preview!
            </button>


            {state.openImgPrev && (
                <Lightbox
                    mainSrc={images[state.imgIndex]}
                    nextSrc={images[(state.imgIndex + 1) % images.length]}
                    prevSrc={images[(state.imgIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setState({ openImgPrev: false })}
                    onMovePrevRequest={() =>
                        setState({
                            imgIndex: (state.imgIndex + images.length - 1) % images.length,
                        })
                    }
                    onMoveNextRequest={() =>
                        setState({
                            imgIndex: (state.imgIndex + 1) % images.length,
                        })
                    }
                    imageTitle="react lightbox"
                    enableZoom
                />
            )}
        </div>
    )
}

export default ImgPreview;