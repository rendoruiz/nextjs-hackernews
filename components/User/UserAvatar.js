import clsx from 'clsx';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const UserAvatar = ({ className, userId }) => {
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [userInitial, setUserInitial] = useState(null);

  useEffect(() => {
    if (userId) {
      setBackgroundColor(generateHslColor(userId));
      setUserInitial(userId.split('').shift().toUpperCase());
    }
  }, [userId])

  return !userId ? null : (  
    <Link href={'/user/' + userId}>
      <a 
        className={clsx(
          className ?? "w-5 h-5 text-sm", 
          "grid place-items-center font-mono font-bold text-brandTextPrimary rounded-full shadow-sm"
        )}
        style={{ backgroundColor: backgroundColor }}
        title="app generated avatar"
      >
        { userInitial }
      </a>
    </Link>
  );
}

// https://stackoverflow.com/a/49562686
const getHashCode = (str) => {
  let hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}
const generateHslColor = (str) => {
  if (str) {
    return `hsl(${getHashCode(str) % 360}, 60%, 80%)`;
  }
  return false;
}
 
export default UserAvatar;