import React from 'react'
import HeadStyle from './Containt.module.css'
import img2 from './image/image (7) (1) (copy 1).png'
import Button from '@mui/material/Button';
import { color } from '@mui/system';
export const Containt = () => {
  return (
    <div className='Page'>
        <div className='Containt'>
        <div className='Headings'>
            <h2 className={HeadStyle.head1}>ONLINE</h2>
            <h2 className={HeadStyle.head2} >EDUCATION</h2>
        </div>
        <div>
            <b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus similique tempora natus sapiente quod beatae, sit atque eligendi voluptatibus rerum? Dignissimos obcaecati amet minima nemo distinctio fugiat, voluptatem neque quo.</b>
        </div>
        <br />
        <div>
            <Button variant='contained' style={{borderRadius:50}} sx={{ color: 'black', backgroundColor: 'pink', borderColor: 'green' }}>Learn more</Button>
        </div>
        </div>
        <div className='image'>
            <img className='img2' src={img2} alt="" srcset="" />
        </div>
    </div>
  )
}
