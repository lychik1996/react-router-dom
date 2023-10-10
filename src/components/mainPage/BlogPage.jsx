import { useState } from 'react';
import {
  Link,
  useLoaderData,
  useNavigate,
  useSearchParams,
  defer,
  Await,
} from 'react-router-dom';
import { Suspense } from 'react';

async function getData() {
  const res = await fetch('/para.json');
  if(!res.ok){
    throw  new Response("", {status:res.status, statusText: 'Not Found'})
  }
  return res.json();
}
export const blogLoader = async () => {
  return defer({
    data: getData(),
  });
};
export default function BlogPage() {
  const { data } = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams(); //dlya poiska
  const latest = searchParams.has('latest');
  const navigate = useNavigate(-1);
  const postQuery = searchParams.get('post') || '';

  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const startsFrom = latest ? 2 : 1;

  // 'post' = URL.com/blogpage?post=abc&data
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value;
    const isLatest = form.latest.checked;

    const params = {};
    if (query.length) params.post = query;
    if (isLatest) params.latest = true;
    setSearchParams(params);
    //?post=potato&latest=true
  };

  return (
    <>
      <p className="body">This is BlogPage</p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <label style={{ padding: '10px' }}>
          <input
            type="checkbox"
            name="latest"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          NewOnly
        </label>
        <button type="submit">Search</button>
      </form>

      <Link to={'new'} style={{ backgroundColor: 'blue', color: 'white' }}>
        Add Post
      </Link>
      {searchParams.size !== 0 ? (
        <button onClick={() => navigate()}> Back</button>
      ) : (
        ''
      )}
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={data}>
          {(resolveData) => (
            <>
              {resolveData.page
                .filter(
                  (item) =>
                    item.name.includes(postQuery) && item.id >= startsFrom
                )
                .map((item) => (
                  <Link key={item.id} to={`/blogpage/${item.id}`}>
                    <li>{item.name}</li>
                  </Link>
                ))}
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
}
