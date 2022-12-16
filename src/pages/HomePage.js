// import { BugButton } from "../components/BugButton";
import mowerPile from '../app/assets/mowerPile.jpg';
import reviews from '../app/assets/reviews.jpg';
import Lt2000 from '../app/assets/Lt2000.jpg';

const HomePage = () => {
    return (
      <>
        
          
          <div className="container">
            <div className="row row-content align-items-center">
                <div className="col-sm-6 order-sm-first col-md-6 border border-danger mt-1">
                    <div className='media'>
                        <div className='media-body' >  
                            <h2 className="subTitleFontStyle">Here to serve our community by keeping our small engines running.</h2>
                            <p className="pFontStyle" >So many small engine machines don't get to live through thier useful life, due to user error and lack of maintance. You can change that by properly maintaining your machine. By doing so you are effectivly reducing waste and lowering your machine costs by extending the useful life. Another benefit would be the reduced waste and manafacturing impact. By lowering enviormental cost we all win. And the cost gets lower the longer the machine stays in use.</p>
                        </div>
                        <hr/>
                        <img className="d-flex mr-3 mb-3 img-fluid mx-auto rounded" src={Lt2000} alt='Riding Mower' />
                    </div>
                </div>
                <div className="col-sm-6 order-sm-first col-md-6 border border-danger mt-1">
                    <div className="media">
                        <img className="d-flex mr-3 img-fluid mt-3 mx-auto rounded" src={mowerPile} alt='mowerPile' />
                        <div className="media-body allign-self-center">
                            <h3 className='subTitleFontStyle' >Why is important to care for your machines?</h3>
                            <p className="mr-2 pFontStyle">Have you ever bought a small engine machine and when it didn't start blame the quality of the machine? Well you could be right, however, most of the time the machines don't start due to improper maintance. The spark plug always seems the first to get changed, brought on by the old 2 strokes that use to foul plugs. Depending on what the machine does when trying to start will usually provide the solution or atleast the path to a proper diaganosis. It can be easy to order parts and put them on... but finding what part you need is key.</p>
                        </div>
                    </div>
                </div>    
            </div>
        
    
            <div className="row row-content align-items-center border border-primary">
                <div className="col-sm-4 col-md-3">
                    <h2 className='subTitleFontStyle' >Why pick the Mobile Mechanic?</h2>
                </div> 
                <div className="col">   
                    <h3 className='subTitleFontStyle' >Things that set us apart from the rest.</h3>
                    <p className="mr-2 pFontStyle">As a small family owned business we take pride in serving our community along with re-investing into the community. Ways we re-invest are simple. We repair and donate some machines to those in need. We also train our new hires to learn a much needed skill and offer classes on mower repair basics to our community a couple times a year. We also help our community by helping to recycle mower parts when allowed vs. new parts saving our clients money and sometimes finding obsolete parts to keep an old machine running. </p>
                </div>    
            </div>
    
            <div className="row row-content align-items-center">
                  
                <div className="col">
                    <div className="media">
                        <img className="d-flex mr-2 img-thumbnail mx-auto" src={reviews} alt="review thumbnail" />
                        <div className="media-body align-self-center mr-2">
                            <h3 className='subTitleFontStyle' >Customer Reviews</h3>
                            <p className="pFontStyle">"The Mobile Mechanic came out on time and saved us from buying another mower, turns out it was a blown head gasket!" - <strong>Customer 1</strong></p>
                            <hr/>
                            <p className="pFontStyle">"The mechanic was fast effective and affordible" - <strong>Customer 2</strong></p>
                            <hr/>
                            <p className='pFontStyle'>"Showed up ontime. Showed us where our engine failed, explained why it failed, suggested good replacement options for my situation and was willing to recycle our broken mower for no extra charge!" - <strong>Customer 3</strong></p>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
          
        
      </>
    )
    ;
  };
  
  export default HomePage;