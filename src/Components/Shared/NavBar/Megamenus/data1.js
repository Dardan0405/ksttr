import React from 'react'
import { FormattedMessage } from 'react-intl'
import{IoIosArrowForward} from 'react-icons/io'

import JavaScript from '../../../../assets/Home/Categories/JavaScript.svg'
import Reactjs from '../../../../assets/Home/Categories/Reactjs.svg'
import Css from '../../../../assets/Home/Categories/Css.svg'
import Angular from '../../../../assets/Home/Categories/Angular.svg'
import TypeScript from '../../../../assets/Home/Categories/TypeScript.svg'
import Node from '../../../../assets/Home/Categories/Node.svg'
import Html from '../../../../assets/Home/Categories/Html.svg'



export const Cat=[
    {
        
items:[
        {
            to :'/',
            title:<FormattedMessage id='Dev' defaultMessage='Development'/>,
            icon:<IoIosArrowForward/>,
        },
        {
            to :'/',
            title:<FormattedMessage id='Busines' defaultMessage='Bussines'/>,
            icon: <IoIosArrowForward/>
        },
        
        {
            to :'/',
            title:<FormattedMessage id='Finance' defaultMessage='Finance & Accounting'/>,
            icon:<IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='IT' defaultMessage='IT & Software'/>,
            icon:<IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='Office' defaultMessage='Office Prductivity'/>,
            icon:<IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='Prsonal' defaultMessage='Personal Development'/>,
            icon:<IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='Des' defaultMessage='Design'/>,
            icon:<IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='Market' defaultMessage='Marketing'/>,
            icon:<IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='Life' defaultMessage='Lifestyle'/>,
            icon:<IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='Photo' defaultMessage='Photography & Video'/>,
            icon:<IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='Health' defaultMessage='Health & Fitess'/>,
            icon: <IoIosArrowForward/>
           },
           {
            to :'/',
            title:<FormattedMessage id='Music' defaultMessage='Music'/>,
            icon: <IoIosArrowForward/>
           },
           {
            to :'/',
             title:<FormattedMessage id='Teaching' defaultMessage='Teaching  & Academics'/>,
             icon: <IoIosArrowForward/>
            },
    ],
    
    item:[
        { 
            to :'/',
            title:<FormattedMessage id='Web' defaultMessage='Web Development'/>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='Data' defaultMessage='Data Science'/>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='Mobile' defaultMessage='Mobile Development'/>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='Programing' defaultMessage='Programing Languages'/>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='Game' defaultMessage='Game Devlopment'/>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='DB' defaultMessage='Database Design'/>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='Software' defaultMessage='Software Testing'/>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='Soft' defaultMessage='Software Engineering'/>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='Tools' defaultMessage='Software Development Tools'/>,
            icon: <IoIosArrowForward/>
        },
        {
            to :'/',
            title:<FormattedMessage id='No' defaultMessage='No-code Development'/>,
            icon: <IoIosArrowForward/>
        },
    ]
    }
]
export const Popular =[
    {
        to: '/',
        icon:JavaScript,
        title:<FormattedMessage id='JS' defaultMessage= 'Javascript'/>,
        bg:'#48494B',
        color:'#F7DF1E'
        

    },
    {
        to: '/',
        icon:Reactjs,
        title:<FormattedMessage id='Rea' defaultMessage= 'React'/>,
        bg:'#48494B',
        color:'#61DAFB' 
    },
    {
        to: '/',
        icon:Css,
        title:<FormattedMessage id='CS' defaultMessage= 'CSS'/>,
        bg:'#48494B',
        color:'#62196F3' 
    },
    {
        to: '/',
        icon:Angular,
        title:<FormattedMessage id='Ang' defaultMessage= 'Angular'/>,
        bg:'#48494B',
        color:'#E23237' 
    },
    {
        to: '/',
        icon:TypeScript,
        title:<FormattedMessage id='Type' defaultMessage= 'Typescript'/>,
        bg:'#48494B',
        color:'#007FACC' 
    },
    {
        to: '/',
        icon:Node,
        title:<FormattedMessage id='Node' defaultMessage= 'Node.Js'/>,
        bg:'#48494B',
        color:'#3765AF' 
    },
    {
        to: '/',
        icon:Html,
        title:<FormattedMessage id='Html' defaultMessage= 'HTML5'/>,
        bg:'#48494B',
        color:'#FF5722' 
    },
]
        
