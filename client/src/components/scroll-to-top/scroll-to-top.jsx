import {useEffect, useState} from "react";
import Wrapper from "./scroll.styles";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <Wrapper>
      {
        isVisible ?
          <button className='test' onClick={scrollToTop}>TOP</button> : ''
      }
    </Wrapper>
  )
}
export default ScrollToTop;