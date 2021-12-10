import clsx from 'clsx';
import Link from 'next/link';

const UserAvatar = ({ className, userId }) => {
  return !userId ? null : (  
    <Link href={'/user/' + userId}>
      <a 
        className={clsx(className ?? "w-5 h-5", "rounded-full bg-brandOrange")}
        title="app generated avatar"
      />
    </Link>
  );
}
 
export default UserAvatar;