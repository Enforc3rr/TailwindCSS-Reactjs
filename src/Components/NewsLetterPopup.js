function NewsLetterPopup() {
  return (
    <div
      class="mainContainer md:w-5xl flex flex-col items-center justify-center overflow-hidden rounded-md border-2 border-black shadow-2xl"
      style="height : 50vh"
    >
      <p class="text-center font-sans text-xl font-bold text-white sm:text-2xl">
        Enter your Email To Subscribe To Our Daily News Letter
      </p>
      <span class="m-3 flex flex-col items-center justify-center overflow-hidden sm:m-7 sm:flex-row">
        <input
          placeholder="Your Email"
          class="inputBox mt-5 w-screen rounded-sm p-2 font-bold sm:m-0 sm:w-96 sm:p-3"
        />
        <button class="subscribeButto m-3 w-48 rounded-md border-2 p-1 text-white">
          Subscribe
        </button>
      </span>
    </div>
  );
}

export default NewsLetterPopup;
