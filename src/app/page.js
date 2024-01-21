import HomePage from '@/components/Home';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Check from '@/components/Check';
import SplitCheck from '@/components/SplitCheck';
import { ITEMIZED_CHECK } from '@/constants/test_data/test_data';

export default function Home() {
  const subtotal = 23.00;
  const tax = 1.73;
  const tip = 4.60;
  return(
    <Check />
  );
}
