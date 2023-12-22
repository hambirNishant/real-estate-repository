import React, { useState } from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel,AccordionItemState } from 'react-accessible-accordion';
// import{MdOutLineArrowDropDown} from 'react-icons'
import { MdArrowDropDown,MdOutlineArrowDropDown,MdCall } from 'react-icons/md';
import'./Value.css'
import data from '../../Utils/accordion'

const Value = () => {
  
  return (
  <section className='v-wrapper'>
    <div className='paddings innerwidth flexCenter v-container'>
      {/* left section */}
      <div className="v-left">
        <div className="image-container">
          <img src="./value.png" alt="" />
        </div>
      </div>

      {/* right section */}
      <div className="flexColStart v-right">
        <span className='orangeText'>Our Value</span>
        <span className='primaryText'>Value We Give to You</span>
        <span className='secondaryText'>We always ready to help by providing the best services for you.
          <br/>
          We beleive a good blace to live can make your life better
        </span>

      <Accordion
      className='accordian'
      allowMultipleExpanded={false}
      preExpanded={[0]}
      >
        {
          data.map((item,i)=>{
            // const [className, setClassName] = useState(null);
            return(
              <AccordionItem className={`accordianItem `} key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className='flexCenter accordianButton'>

                  {/* <AccordionItemState>
                  {({ expanded }) =>
                          expanded
                            ? setClassName('expanded')
                            : setClassName('collapsed')
                        }
                  </AccordionItemState> */}


                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">
                      {item.heading}
                    </span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20}/>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            )
          })
        }
        
      </Accordion>

      </div>
    </div>
  </section>
  )
}

export default Value
