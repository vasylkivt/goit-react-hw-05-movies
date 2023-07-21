import { Notification } from 'components';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Notification $textAlign="center">
      ❌ Something went wrong - return to the{' '}
      {
        <Link
          style={{
            textDecoration: 'underline dotted',
            textTransform: 'uppercase',
            color: '#37b5e1',
          }}
          to="/"
        >
          home page
        </Link>
      }{' '}
      and reload the page...
    </Notification>
  );
};
export default ErrorPage;
