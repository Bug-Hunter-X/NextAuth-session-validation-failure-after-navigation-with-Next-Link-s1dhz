```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function About({ session }) {
  if (!session) {
    return <div>You are not logged in.</div>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>You are logged in! {session.user.email}</p>
    </div>
  );
}
```