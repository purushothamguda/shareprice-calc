import React from 'react'
import LayoutAdmins from './LayoutAdmins'
import { auth } from "../firebase/firebase";
import Header from './Header';

const LayoutCommon = () => {
  return (
    <>
    <Header/>
    </>
  )
}

export default LayoutCommon