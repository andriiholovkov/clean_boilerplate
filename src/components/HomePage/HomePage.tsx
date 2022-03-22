import React from 'react';
import {Data1} from './defaultData';
import './HomePage.scss';
import Button from '../_common/Button/Button';

const HomePageContent = () => {
  return (
    <div>
      <h1>Home Page Component55</h1>
      <h1>Home Page Component</h1>
      {Data1.map(({title}, index) => {
        return <div key={index}>{title}</div>;
      })}
      <Button title="Button" className={'test22'}/>
    </div>
  );
};

export default HomePageContent;
