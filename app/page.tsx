import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/solid'


function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-5xl font-bold mb-20 " >AI-Chat </h1>

      <div className='flex space-x-2 text-center '>  
        <div>
          <div className="flex flex-col items-center justify-center mb-5 ">
            {/* icons */}
            <SunIcon className="h-8 w-8 " />
            <h2> Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText" >
              "Explain something to me"
            </p>
            <p className="infoText" >
              "Remembers what user said earlier in the conversation"
            </p>
            <p className="infoText" >
              "May occasionally generate incorrect information"
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5 ">
            {/* icons */}
            <SunIcon className="h-8 w-8 " />
            <h2> Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText" >
              "Explain something to me"
            </p>
            <p className="infoText" >
              "Remembers what user said earlier in the conversation"
            </p>
            <p className="infoText" >
              "May occasionally generate incorrect information"
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5 ">
            {/* icons */}
            <SunIcon className="h-8 w-8 " />
            <h2> Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText" >
              "Explain something to me"
            </p>
            <p className="infoText" >
              "Remembers what user said earlier in the conversation"
            </p>
            <p className="infoText" >
              "May occasionally generate incorrect information"
            </p>
          </div>
        </div>
        
      </div>

    </div>
    

  )
}

export default Homepage

