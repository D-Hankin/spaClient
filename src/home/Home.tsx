import "./home.css";

function Home() {
  return (
    <>
      <h1>Welcome Pathetic Demon!</h1>
      <h3>A hard day torturing the souls of the damned? We offer two relaxation treatments sure to sooth any aching scales!</h3>
      <div id="content">
        <div id="screaming">
          <h2>Screaming Scrub</h2>
          <img id="screamingImg" src="src\home\images\Scrub.jpg"/>
          <p>With each scrub, you'll feel the stress and sins of the day melt away along with large slices of your demonic scales, replaced by an otherworldly glow and a newfound appreciation for the agonizing beauty of hellish indulgence. It's not just a spa treatment; it's a symphony of screams for your soul!</p>
        </div>
        <div id="hotCoals">
         <h2>Hot Coals Cool Down</h2>
         <img id="hotCoalsImg" src="src\home\images\HotCoals.jpg" />
          <p>As you recline upon a bed of scorching coals, our demon therapists expertly apply a concoction of volcanic ash and fiery embers to your skin. Feel the intense heat penetrate your pores, melting away stress and tension with every fiery touch. Then just when you think you can't take the heat any longer, we unleash a wave of scalding steam that envelops your body in a sweltering embrace. </p>
       </div>
      </div>
      <h3>Make a booking using the menu on the left!</h3>
    </>
  )
}

export default Home