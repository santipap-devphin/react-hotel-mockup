import React from 'react';
import DrafBackend from '../../component/DrafBackend';
import WebMain from '../../wrappers/dashweb/WebMain';

const DashWeb = () => {
  return (<DrafBackend titlepage={"web"}>
            <WebMain />
          </DrafBackend>
  )
}

export default DashWeb