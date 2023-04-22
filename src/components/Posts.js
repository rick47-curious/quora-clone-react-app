import React from 'react'
import './css/Posts.css'
import { PopupDialog } from './PopupDialog';

export const Posts = (props) => {
  const hashBackground = () => {
    document.querySelector(".post-section").style.opacity = "0.5";
  }
  const returnState = () => {
    document.querySelector(".post-section").style.opacity = "1";
  }
  // Fake Data in JSON Array format
  const suggestionLists = [
    {
      id:1,
      icon:"code-slash.svg",
      title:"The Programmer's Guide",
      description: "The space is to guide the newbies with coding ideas"
    },
    {
      id:2,
      icon:"globe.svg",
      title:"The Python Guide",
      description: "The space is to introduce python libraries"
    },
    {
      id:3,
      icon:"chat-dots.svg",
      title:"ChatGPT discussion",
      description: "The space is to discuss about ChatGPT"
    },
    {
      id:4,
      icon:"book.svg",
      title:"Physics Gyan",
      description: "Physics gyan space is to teach undergrad students with elementary physics problems"
    },
    {
      id:5,
      icon:"database-check.svg",
      title:"AI and ML",
      description: "Space is discuss about recent updates in AI and ML world"
    }
  ]
  return (
    <div>
      <div className='my-5 post-section'>
        <div className="container text-centered">
          <div className="row">
            <div className="col-2 me-4" id="space-section">
              <ul className="space-list">
                <li className='d-flex'>
                  <button type='button' className='btn' id="add-space">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                  </svg>
                  </button>
                  <div className='ms-2'>Create Space</div>
                </li>
                <li className='d-flex'>
                  <img src="code-slash.svg" alt="" />
                  <div className='ms-2'>Unboxing Full-Stack</div>
                </li>
                <li className='d-flex'>
                  <img src="book.svg" alt="" />
                  <div className='ms-2'>UPSC CSE</div>
                </li>
                <li className='d-flex'>
                  <img src="gear.svg" alt="" />
                  <div className='ms-2'>Engineering</div>
                </li>
                <li className='d-flex'>
                  <img src="cash-coin.svg" alt="" />
                  <div className='ms-2'>Business</div>
                </li>
                <li className='d-flex'>
                  <img src="bank.svg" alt="" />
                  <div className='ms-2'>Banking</div>
                </li>
              </ul>

            </div>
            <div className="col-6 me-3" id="user-post-section">
              <div className="container-create">
                <div className="d-flex">
                  <img className='profile-pic' src="person-fill.svg" alt="profile" />
                  <div className="input-container mb-1 ms-4">
                    <input type="text" className="form-control" id="post-input" placeholder="What do you want to ask or share?"/>
                  </div>
                </div>
                <div className="footer-buttons d-flex">
                  <button className="btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                  </svg>
                  <span className='ms-1'>Ask</span>
                  </button>
                  <span className='seperator'></span>
                  <button className="btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                  <span className="ms-1">Answer</span>
                  </button>
                  <span className='seperator'></span>
                  <button className="btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                  <span className='ms-1'>Post</span>
                  </button>
                </div>
              </div>

              <div className="individualPosts mt-3">
                  <div className="postheader d-flex">
                    <img className="post-logo" src="cash-coin.svg" alt=""/>
                    <div className='desc ms-3'>
                      <div className='fw-bold'>Stoicism <img src="dot.svg" alt="" /> <span className='follow-link text-primary'>Follow</span></div>
                      <div className='text-secondary'>Answered By Sarah Connor <img src="dot.svg" alt="" />  <span className='date text-decoration-underline'>Oct 16</span></div>
                    </div>
                  </div>
                  <div className='post-question'>
                    
                  </div>
              </div>
            </div>
            <div className="col-3" id="suggestion-section">
              <div className="head px-3 pb-2 mt-2 fw-bold">Spaces to follow</div>
              <ul className='suggestion-list'>
                {suggestionLists.map((element,index)=>{
                  return <li className='d-flex px-3 pt-1' key={index}>
                    <img className="sugg-logo" src={element.icon} alt={`icon-${index}`}/>
                    <div className='ms-2'>
                      <small className="sugg-header fw-bold">{element.title}</small>
                      <p className="sugg-desc">{element.description}</p>
                    </div>
                  </li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Darken background */}
      {props.activeTab != null ? hashBackground() : ""}
      {props.opaque === 1 ? returnState() : ""}
      {props.activeTab !== null ? <PopupDialog userAction={props.activeTab} setActive={props.onTabClick}
        opaque={props.opaque} makeOpaque={props.makeOpaque} /> : ""}
    </div>
  )
}
