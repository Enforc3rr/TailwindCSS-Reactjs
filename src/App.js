export default function App() {
  return <div className="flex flex-col sm:flex-row"></div>;
}

/*
bg-sky-600 sm:bg-yellow-400 md:bg-red-400 : it means that below 640px color will be sky blue , from sm to md  color will be yellow and above md color will be red
      <button class="bg-sky-600 sm:bg-yellow-400 md:bg-red-400">
        Save changes
      </button>
Flex box       
      <div className="flex flex-col sm:flex-row">
        <div className="sm:h-50 h-96 sm:flex-1 bg-red-800 "></div> // flex-grow (it will take max space)
        <div className="sm:h-50 h-96 sm:flex-1 bg-green-800 "></div>
        <div className="sm:h-50 h-96 sm:flex-1 bg-blue-800 "></div>
    </div>
*/
