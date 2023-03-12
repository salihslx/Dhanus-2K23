import React, {createContext} from 'react'

export const TopBannerViewContext = React.createContext();

export const TopBannerViewProvider = ({children}) => {
    const [topBannerView, setTopBannerView] = React.useState(true);

    return (
        <TopBannerViewContext.Provider value={{topBannerView, setTopBannerView}}>
            {
                children
            }
        </TopBannerViewContext.Provider>
    )
}