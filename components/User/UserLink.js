import clsx from 'clsx';
import Link from 'next/link';

const UserLink = ({ className, userId, withPrefix }) => {
  return !userId ? null : (  
    <Link href={'user/' + userId}>
      <a className={clsx(className, "sm:hover:underline")}>
        { withPrefix && "u/" }
        { userId }
      </a>
    </Link>
  );
}
 
export default UserLink;