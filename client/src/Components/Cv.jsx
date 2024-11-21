import React from 'react'
import {NavLink} from 'react-router-dom';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import TimerIcon from '@mui/icons-material/Timer';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Cv = () => {
  return (
   <>
    <div className='box'>

    <div className='float'>
    <div className='left'>
    <h1>Resumes</h1>
    </div>
    <div className='right'>
    <NavLink className="nav-link active" aria-current="page" to="/body" style={{ fontSize: '20px' }}><TextSnippetIcon />Add New</NavLink>
    </div>
    </div>

    <div className='grayline'>
      <p  style={{ fontSize: '20px' }}>No Resumes available</p>
    </div>


    <div className='float'>
    <div className='left'>
    <div className='cvbox'>
    <h2>Web Developer Consultant</h2>
    <p><TimerIcon /> last updated 23 september 2023, 08:09 AM</p>

    <div className='items'>
    <a href="/"><TextSnippetIcon />Open</a>
    <a href="/"><EditIcon />Edit</a>
    <a href="/"><DeleteIcon />Delete</a>
    <a href="/"><ShareIcon />Share</a>
    <a href="/"><ContentCopyIcon />Clone</a>
    </div>
    </div>
    </div>


    <div className='right'>
    <div className='cvbox'>
    <h2>Android Developer Engineer</h2>
    <p><TimerIcon /> last updated 30 August 2023, 12:30 PM</p>

    <div className='items'>
    <a href="/"><TextSnippetIcon />Open</a>
    <a href="/"><EditIcon />Edit</a>
    <a href="/"><DeleteIcon />Delete</a>
    <a href="/"><ShareIcon />Share</a>
    <a href="/"><ContentCopyIcon />Clone</a>
    </div>

    </div>
    </div>
    </div>


    </div>
   </>
  )
}

export default Cv