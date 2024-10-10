import './style.css';
import {useState} from 'react'
import smarthomeData from '../../smartHomeData';
import { Header } from '../../components/header';
import { Dashboard } from '../../components/dashboard';



export const HomePage = () => {
  return (
    <>
      
<div className='container'>
<Header title = "Chytrý dům" />
<Dashboard data={smarthomeData} />

</div>        
       
    </>
  );
};
