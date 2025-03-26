
  // export default function Example({users}) {
  //   return (
  //     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  //       {users?.items?.map((person) => (
  //         <div
  //           // key={user.email}
  //           className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
  //         >
  //           <div className="shrink-0">
  //             <img alt="" src={person.avatar_url} className="size-10 rounded-full" />
  //           </div>
  //           <div className="min-w-0 flex-1">
  //             <a href="#" className="focus:outline-none">
  //               <span aria-hidden="true" className="absolute inset-0" />
  //               <p className="text-sm font-medium text-gray-900">{person.login}</p>
  //               <p className="truncate text-sm text-gray-500">VIsit profile</p>
  //             </a>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
  

  import { Link } from "react-router-dom";

export default function Example({ users = [] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {users?.items?.map((person) => (
        <Link
          key={person.id}
          to={`/user-details/${person.login}`} 
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400"
        >
          <div className="shrink-0">
            <img alt="" src={person.avatar_url} className="size-10 rounded-full" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900">{person.login}</p>
            <p className="truncate text-sm text-gray-500">Visit Profile</p>
          </div>
        </Link>
      ))}
    </div>
  );
}