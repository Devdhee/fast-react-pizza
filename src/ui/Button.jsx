import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'text-sm inline-block font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' md:px-6 md:py-4 px-4 py-3',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      'text-sm inline-block font-semibold tracking-wide uppercase transition-colors duration-300 border-2 border-stone-200 rounded-full text-stone-400 hover:bg-stone-300 focus:outline-none focus:ring hover:text-stone-800 focus:text-stone-800 focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5 px-4 py-2.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
