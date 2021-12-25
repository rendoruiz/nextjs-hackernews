import Link from 'next/link';
import clsx from 'clsx';

const UserLink = ({ className, userId, withPrefix }) => {
  return !userId ? null : (  
    <Link href={'/user/' + userId}>
      <a className={clsx(className, "sm:hover:underline")}>
        { withPrefix && "u/" }
        { userId }
      </a>
    </Link>
  );
}
 
export default UserLink;