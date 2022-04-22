function Component1() {
  return (
    <>
      <div
        class="flex flex-col items-center justify-center"
        style="min-height:100vh;background-color : #E8F3FE  ; border : 2px solid black"
      >
        <p
          class="mb-5 font-sans font-bold"
          style="color:#003979; font-size:2em"
        >
          Add Custom Coupon
        </p>
        <div class="flex w-11/12 flex-col items-center rounded-lg bg-white shadow-lg sm:w-11/12 md:w-2/12 lg:w-4/5">
          <input
            placeholder="Coupon Name"
            class="m-5 h-2/3 w-10/12 rounded-md border p-3 font-extrabold"
          />
          <input
            placeholder="Number of Days"
            class="m-5 h-2/3 w-10/12 rounded-md border p-3 font-extrabold"
          />
          <button
            style="border: 1px solid #003979 ; color : #003979 "
            class="m-5 h-2/3 w-3/12 rounded-md"
          >
            CREATE
          </button>
        </div>
      </div>
    </>
  );
}

export default Component1;
