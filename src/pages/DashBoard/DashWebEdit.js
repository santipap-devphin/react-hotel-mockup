import React from 'react';
import DrafBackend from '../../component/DrafBackend';
import WebEdit from '../../wrappers/dashweb/WebEdit';

const DashWebEdit = () => {
  return (<DrafBackend titlepage="แก้ไขข้อความเว็บ">
              <WebEdit />
          </DrafBackend>
        )
}

export default DashWebEdit