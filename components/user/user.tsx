import { useUserContext } from "@/app/context";

export default function User() {
  const user = useUserContext();
  
  return (
    <div className="max-w-md mx-auto p-4 mt-4 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="flex flex-col space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username:
          </label>
          <p className="text-gray-700">{user.username}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <p className="text-gray-700">{user.email}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <p className="text-gray-700">{user.name}</p>
        </div>
      </div>
    </div>
  );
}
