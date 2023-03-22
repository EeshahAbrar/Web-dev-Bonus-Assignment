import {Button} from 'react-bootstrap';

export const TestButton = ({ButtonName}) => {
  return(
    <div className='TestButton'>
        <Button variant='danger'>{ButtonName}</Button>
    </div>
  );
}

export const PrimaryButton = ({ButtonName}) => {
   return(
    <div className='PrimaryButton'>
    <Button variant="primary">{ButtonName}</Button>
    </div>
   );
}