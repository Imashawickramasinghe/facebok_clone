import React from 'react';
import "./Widgets.css"


function Widgets() {
  return (
  <div className='widgets'>
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMeta%2F%3Fbrand_redir%3D393008104050284&tabs=timeline&width=340&height=3200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
      width="340" 
      height="100%" 
      style={{border:"none", overflow:"hidden"}}
      scrolling="no" 
      frameborder="0" 
      allowfullscreen="true" 
      allow="encrypted-media;">
</iframe>
  </div>
  );
}

export default Widgets;
