export const AffiliateAd = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-white100 text-xs">Ad</p>
      <p className="text-white100 text-xs italic">
        Got an eye for the ball? Then you'll love our partner game!
      </p>
      <a href="https://playstb.com/" target="_blank">
        <img alt="spot the ball banner" src="/assets/stbAdBannerPhoto.jpg" className="w-full rounded-md"/>
      </a>
      <p className="text-xxs text-white100">NOTE: ?ERFECT will earn a small revenue when you click on partner links</p>
    </div>
  )
}
