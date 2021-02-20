import { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromBottom } from '../../../../lib/theme';

import { TextField } from '../../../../components/TextField';
import { SubmitButton } from '../../../../components/Button';

function UserNameForm({ className, setUserName, userName, ...props }) {
  return (
    <div className={className}>
      <h1 className='title'>ชื่อของคุณ</h1>
      <TextField
        name='userName'
        autoComplete={false}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {!!userName && (
        <SubmitButton className='fade-in-bottom'>ยืนยัน</SubmitButton>
      )}
    </div>
  );
}

const StyledUserNameForm = styled(UserNameForm)`
  width: 60%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin-bottom: 40px;
  }

  ${TextField} {
    width: 100%;
  }

  .fade-in-bottom {
    position: relative;
    animation: ${fadeInFromBottom} 0.4s ease-out;
  }
`;

export { StyledUserNameForm as UserNameForm };
