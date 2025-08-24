import Hello from "@/app/components/hello";

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Home() {

  console.log('What am I doing here? -- SERVER');

  const data = await getData();
  console.log(data);
  

  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js</h1>
      <p>{data.length}</p>
      <Hello />
    </>
  );
}
