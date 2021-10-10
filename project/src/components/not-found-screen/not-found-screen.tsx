import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <section className="game__screen">
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundScreen;
