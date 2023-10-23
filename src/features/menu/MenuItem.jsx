import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className='flex gap-4 py-2'>
      <img
        src={imageUrl}
        alt={name}
        className={`h24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className='flex flex-col grow pt-0.5'>
        <p className='font-medium'>{name}</p>
        <p className='text-sm italic capitalize text-stone-500'>
          {ingredients.join(', ')}
        </p>
        <div className='flex items-center justify-between mt-auto'>
          {!soldOut ? (
            <p className='text-sm'>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className='text-sm font-medium uppercase text-stone-500'>
              Sold out
            </p>
          )}

          <Button type='small'>Add to Cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
