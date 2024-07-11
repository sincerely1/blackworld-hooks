import { useRequest } from 'blackworld-hooks';
import Mock from 'mockjs';
import React from 'react';

async function getEmail(search?: string): Promise<string[]> {
  console.log('throttle getEmail', search);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock({ 'data|5': ['@email'] }).data);
    }, 300);
  });
}

export default () => {
  const { data, loading, run } = useRequest(getEmail, {
    throttleWait: 1000,
    manual: true,
  });

  return (
    <div>
      <input placeholder="Search Emails" onChange={(e) => run(e.target.value)} />
      {loading ? (
        <p>loading</p>
      ) : (
        <ul style={{ marginTop: 8 }}>
          {data?.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
