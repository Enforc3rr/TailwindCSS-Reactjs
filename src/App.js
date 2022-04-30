import ComponentOne from "./Components/ComponentOne";
import NewsLetterPopup from "./Components/NewsLetterPopup";

export default function App() {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <ComponentOne />
    </>
  );
}

/*
bg-sky-600 sm:bg-yellow-400 md:bg-red-400 : it means that below 640px color will be sky blue , from sm to md  color will be yellow and above md color will be red
      <button class="bg-sky-600 sm:bg-yellow-400 md:bg-red-400">
        Save changes
      </button>
Flex box       
      <div className="flex flex-col sm:flex-row"> //justify-center items-center
        <div className="sm:h-50 h-96 sm:flex-1 bg-red-800 "></div> // flex-grow (it will take max space)
        <div className="sm:h-50 h-96 sm:flex-1 bg-green-800 "></div>
        <div className="sm:h-50 h-96 sm:flex-1 bg-blue-800 "></div>
    </div>

Grid 
    <div className="grid lg:grid-cols-3 gap-2">
      <div style={{ border: "2px solid black", minHeight: "50vh" }}>Hello</div>
      <div
        style={{ border: "2px solid black" }}
        className="grid lg:grid-cols-3 gap-2"
      >
        <div style={{ border: "2px solid blue" }} className="col-span-3">
          Hello
        </div>
        <div style={{ border: "2px solid blue" }}>Hello</div>
        <div style={{ border: "2px solid blue" }}>Hello</div>
      </div>
      <div style={{ border: "2px solid black" }}>Hello</div>
    </div>

        <div className="grid lg:grid-cols-2 gap-3">
      {arr.map((val) => {
        return (
          <>
            <div className="flex justify-center">
              <div
                className="bg-gray-300 rounded-md overflow-hidden shadow-sm "
                style={{
                  border: "1px solid black",
                }}
              >
                <img
                  src="https://wallpapercave.com/wp/wp5348399.jpg"
                  className="w-full h-30 sm:h-50 object-cover"
                />
                <h2 className="m-4">Hello</h2>
              </div>
            </div>
          </>
        );
      })}
    </div>
*/
