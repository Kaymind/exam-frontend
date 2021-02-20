import styled from 'styled-components';
import { fadeInFromBottom } from '../../../../lib/theme';

import { TextField } from '../../../../components/TextField';
import { SubmitButton, Button } from '../../../../components/Button';

function CreateRoomForm({
  className,
  roomName,
  setRoomName,
  handleGoBack,
  inputRef,
  ...props
}) {
  return (
    <div className={className}>
      <h1 className='title'>สร้างห้องใหม่</h1>
      <TextField
        ref={inputRef}
        name='roomName'
        autoComplete={false}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <div className='button-wrapper'>
        <Button onClick={handleGoBack}>กลับ</Button>
        <SubmitButton disabled={!roomName}>ยืนยัน</SubmitButton>
      </div>
    </div>
  );
}

const StyledCreateRoomForm = styled(CreateRoomForm)`
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
    position: relative;
    animation: ${fadeInFromBottom} 0.4s ease-out;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    animation: ${fadeInFromBottom} 0.4s ease-in 0.15s backwards;

    ${SubmitButton} {
      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`;

export { StyledCreateRoomForm as CreateRoomForm };
