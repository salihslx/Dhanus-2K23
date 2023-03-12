import React from 'react'
import './TopBanner.scss'
import {AiFillCloseCircle} from 'react-icons/ai'
import { TopBannerViewContext } from '../../context/TopBannerViewContext'

function TopBanner() {

    const {topBannerView, setTopBannerView} = React.useContext(TopBannerViewContext);

    return (
        <>
        {
            topBannerView ? (
                 <div className="top-banner">
                    <h5>We are excited to share our brochure! 🎉🎉<a href="./Brochure_Dhanus.pdf" download>View here</a></h5>
                    <AiFillCloseCircle className="top-banner-close-icon" onClick={() => {
                        setTopBannerView(false);
                    }} />
                 </div>
            ) : null
        }
       </>
    )
}

export default TopBanner
