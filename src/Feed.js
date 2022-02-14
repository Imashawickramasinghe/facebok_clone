import React from 'react';
import "./feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
  return <div className='feed'>
      
      <StoryReel />
      <MessageSender />
      <Post 
      profilePic="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc="
      message="Check this out guys !"
      timestamp="5 min ago"
      username="Jacob denial"
      image="https://dotnet.microsoft.com/static/images/education/vscode-csharp.png?v=HkQHGx75jG4xd39ERi7yIxWYzQ32UH4qGs3QY6cRg80"
      />

      <Post 
      profilePic="https://1.bp.blogspot.com/-siEMkijJ33w/X_as1EqQ7JI/AAAAAAAAETk/pmQ0eR31h_oeT8ONRhOIuBxlHPha93oxgCEwYBhgLKtQDAL1OcqxobF1wN1T7ePZR8syDu10paifExJiElT8TOFEyBU5AdVqZmJi8SyXHMJNoIvkZy1Bk5Ya8TYAVd07EwuNxUJBic7eJ7WBAAdwNtMEYcVp4qnNk-_ihpLoZupuNCG3Txyrj6K3VW2C4UB_AvxMk_4Z2rKZK9faQkco9ulNQJBksnqJvI5z4IPlrz-c8x0kHgfl6qcl0-0jv14qC64sUh8yAY9n37Ago4I0QsU2AUMhGUWy2p4kHUDGyM8b0ZFssEtXgD9Y_HUlMp3IiW6vTS1cDYTRWTWSdfYfXQ2R4daG74fhrTSSo9SPdscSBx83DBWZn8MMAA3gK7KwXiu4gODyZhfXRZBZN7VErNSfkfNd9bxSLH9FF9q5I_o9OrfVjQX0O0OBiA0IMe7mQn1V1tRhx2xjzAUAUx3MIuryQZO-8r-zsewmGP9G47GL3AOGH5ddK-op8ExrNkuae_MeKM_QaCd6r0Y_dwiTEkNauFdq6jiEkWbcTtuca1cNoVZ7QQRmEfvwF_iCWixbFAOvcoNHZVrkv2MHclH3zwvH68tdI3-sP8nbrqhhiYak_uqerMPFYl3h9_8BF6NFpjX7lQjy2ZYkuZIP20TAV5MuaPSH7MMDe2v8F/s1280/awesome%2Bbeautiful%2Bgirl%2Bimage%2Bfor%2Bprofile%2Bpicture.jpg"
      message="#travel #Galle #evening"
      timestamp="2 hours ago"
      username="Amaya Ranathunga"
      image="https://www.crazysexyfuntraveler.com/wp-content/uploads/2019/11/visit-Galle-Fort-Sri-Lanka-5.jpg"
      />
      <Post 
      profilePic="https://images.unsplash.com/photo-1611637576109-b6f76185ec9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJveXN8ZW58MHx8MHx8&w=1000&q=80"
      message="Evening ride with my friends...... #enjoy"
      timestamp="12.30 PM"
      username="Saveen Yatagama"
      image="https://agirlsguidetocars.com/wp-content/uploads/2016/05/View-from-the-drivers-seat-in-the-2017-Mercedes-Benz-C300-800x600.jpg"
      />
      <Post 
      profilePic="https://mlrvxqgam43e.i.optimole.com/lfvX0JY-n_CvDj74/w:1500/h:1500/q:auto/https://deeprhythm.net/my_media/2020/08/79917169_10157238253874177_6573466078096130048_o.jpg"
      message="Are you ready for the biggest festival in 2022"
      timestamp="02/08/2022 3.00 PM"
      username="Tommorowland"
      image="https://i.pinimg.com/originals/32/8a/90/328a909dc76a51fab556598e6966d793.jpg"
      />
      <Post 
      profilePic="https://w0.peakpx.com/wallpaper/133/862/HD-wallpaper-bad-boy-anime-bad-boy.jpg"
      message="Bike ride in the evening #enjoylife #Bikeover #yamahar1"
      timestamp="02/08/2022 1.00 PM"
      username="Pasindu Lakshan"
      image="https://i.pinimg.com/originals/1c/d9/42/1cd942582fbdaa6bfc2e4444240b3c96.jpg"
      />
  </div>;
}

export default Feed;
