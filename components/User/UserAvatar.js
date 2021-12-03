import clsx from 'clsx';
import Link from 'next/link';

const UserAvatar = ({ className, userId }) => {
  return (  
    <Link href={'user/' + userId}>
      <a 
        className={clsx(className, "rounded-full w-6 h-6 bg-brandOrange sm:w-7 sm:h-7")}
        title="app generated avatar"
      />
    </Link>
  );
}
 
export default UserAvatar;