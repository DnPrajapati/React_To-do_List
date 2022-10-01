import React from 'react'

export default function Footer() {
  let FooterStyle = {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
  };
return (
  <footer>
    <p style={FooterStyle}>Copyright &copy; www.SaveMyList.com</p>
  </footer>
)
}
