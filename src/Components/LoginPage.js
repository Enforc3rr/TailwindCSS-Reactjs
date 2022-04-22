function LoginPage() {
  return (
    <>
      <div
        class="mainContainer flex flex-col items-center justify-center"
        style="min-height:100vh"
      >
        <p class="mb-6 text-5xl font-bold text-white">Login</p>
        <div class="flex bg-gray-100 h-3/4 w-full flex-col items-center justify-center rounded-xl backdrop-blur-sm sm:w-9/12 lg:w-7/12 duration-300 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:m-6 overflow-hidden">
          <input
            class="inputBox mt-7 mb-3 w-11/12 rounded-sm p-3  font-bold"
            placeholder="Email"
            type="email"
          />
          <input
            class="inputBox m-3 w-11/12 rounded-sm p-3 font-bold"
            placeholder="Password"
            type="password"
          />
          <div class="flex">
            <p class="font-medium text-base antialiased">
              Are You A Business Owner ? :
            </p>
            <input
              type="checkbox"
              class="peer absolute left-1/2 h-full w-full -translate-x-1/2 appearance-none rounded-md"
            />
            <span class="ml-4 flex h-6 w-16 flex-shrink-0 items-center rounded-full bg-black p-1 duration-300 ease-in-out after:h-8 after:w-8 after:rounded-full after:bg-white after:shadow-md after:duration-300 peer-checked:bg-blue-800 peer-checked:after:translate-x-6"></span>
          </div>
          <button
            class="m-3 w-20 rounded-md p-2 text-sm font-semibold"
            style="border:1px solid #003979; color : #003979"
          >
            Login
          </button>
          <button
            class="m-3 w-40 rounded-md p-2 text-sm font-semibold"
            style="border:1px solid #003979; color : #003979"
          >
            Create Account
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
