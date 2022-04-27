import './widget.scss';
import React from 'react';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Widget = ({ type }) => {
  let data;

  //TEMP
  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'see all users',
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
          />
        ),
      };
      break;
  }

  return <div>Widget</div>;
};

export default Widget;
