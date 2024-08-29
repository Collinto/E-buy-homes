import ImageSlider from './ImageSlider.jsx';

ImageSlider
function Section() {
  const containerStyles={
    // backgroundColor:"blue",
    backgroundColor:"#F1F6F7",
    width:"80vw",
    height:"480px",
    margin:"0 auto"

  }
  
 
  return(
  <div>
    <div style={containerStyles }>
    <ImageSlider/>
    </div>
  </div>

  ) 
}
export default Section;