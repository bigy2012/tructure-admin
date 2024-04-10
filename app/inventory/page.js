import Image from "next/image";

export default function Inventory() {
  return (
    <div>
      <div className="">
        <h1 className="text-xl font-bold">Inventory Overview</h1>
      </div>
      <div className="grid grid-cols-4 gap-3 bg-white rounded-lg p-5 mt-5">
        <div className="p-5 bg-gray-100 border-l-8 border-blue-500 rounded-lg drop-shadow-lg">
          <h1 className="text-md">Total inventory</h1>
          <h1 className="text-lg font-bold">90</h1>
        </div>
        <div className="p-5 bg-gray-100 border-l-8 border-green-500 rounded-lg drop-shadow-lg">
          <h1 className="text-md">
            inventory{" "}
            <span className="bg-green-500 text-white px-2 rounded-full">
              Open
            </span>
          </h1>
          <h1 className="text-lg font-bold">50</h1>
        </div>
        <div className="p-5 bg-gray-100 border-l-8 border-yellow-500 rounded-lg drop-shadow-lg">
          <h1 className="text-md">
            inventory{" "}
            <span className="bg-yellow-500 text-white px-2 rounded-full">
              Booking
            </span>
          </h1>
          <h1 className="text-lg font-bold">49</h1>
        </div>
        <div className="p-5 bg-gray-100 border-l-8 border-red-500 rounded-lg drop-shadow-lg">
          <h1 className="text-md">
            inventory{" "}
            <span className="bg-red-500 text-white px-2 rounded-full">
              Close
            </span>
          </h1>
          <h1 className="text-lg font-bold">1</h1>
        </div>
      </div>

      <div className="mt-5 bg-white p-5 rounded-lg">
        <div className="flex justify-between">
          <div />
          <div>
            <button
              type="button"
              className="text-white bg-green-500 py-1 px-5 rounded-lg hover:opacity-80"
            >
              New +
            </button>
          </div>
        </div>
        <table class="table-auto w-full mt-5">
          <thead class="text-md border-y">
            <tr>
              <th className="text-start py-3">SKU</th>
              <th className="text-start py-3">Name</th>
              <th className="text-start py-3">Quantity</th>
              <th className="text-start py-3">Price</th>
              <th className="text-center py-3">Status</th>
              <th className="text-center py-3" />
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b ">
              <td className="py-3">White</td>
              <td className="py-3">Laptop PC</td>
              <td className="py-3">12</td>
              <td className="py-3">$1999</td>
              <td className="py-3 w-[10%] text-center">
                <span className="bg-green-500 text-white px-2 rounded-full">
                  Open
                </span>
              </td>
              <td className="py-3 text-end w-[10%]">
                <button type="button" className="mx-3">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                      stroke="#60A5FA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                      stroke="#60A5FA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button type="button" className="mx-3">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40974 4.40973 4.7157 4.21799 5.09202C4 5.51985 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V12.5M15.5 5.5L18.3284 8.32843M10.7627 10.2373L17.411 3.58902C18.192 2.80797 19.4584 2.80797 20.2394 3.58902C21.0205 4.37007 21.0205 5.6364 20.2394 6.41745L13.3774 13.2794C12.6158 14.0411 12.235 14.4219 11.8012 14.7247C11.4162 14.9936 11.0009 15.2162 10.564 15.3882C10.0717 15.582 9.54378 15.6885 8.48793 15.9016L8 16L8.04745 15.6678C8.21536 14.4925 8.29932 13.9048 8.49029 13.3561C8.65975 12.8692 8.89125 12.4063 9.17906 11.9786C9.50341 11.4966 9.92319 11.0768 10.7627 10.2373Z"
                      stroke="#60A5FA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
