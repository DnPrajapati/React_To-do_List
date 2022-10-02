import React from 'react'

export default function Footer() {
  let FooterStyle = {
    position: 'absolute',
    bottom: '0px',
    marginBottom: '0px',
    width: '100%',
    backgroundColor: '#4c4238',
    color: '#edede9',
    padding: '10px',
  };
return (
  <footer>
    <p style={FooterStyle}>Copyright &copy; www.SaveMyList.com</p>
  </footer>
)
}
