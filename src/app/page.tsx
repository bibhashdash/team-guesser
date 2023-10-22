export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Team Guesser</h1>
      <h2>Like Wordle, but for football teams!</h2>
      <div className="border-2 border-black h-96 w-full max-w-lg rounded-md p-2">
       <div className="w-full grid grid-cols-5 gap-2">
         <input className="h-20" />
         <input className="h-20" />
         <input className="h-20" />
         <input className="h-20" />
         <input className="h-20" />
       </div>
      </div>
    </main>
  )
}
