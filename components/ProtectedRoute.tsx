import { RootState } from "@/redux/Store";
import { Redirect } from "expo-router";
import { useSelector } from "react-redux";


const ProtectedRoute = ({ children } : { children : any}) => {
  const { user, loading } = useSelector((state: RootState) => state.auth);

  if (loading) return null; // Prevent flickering
  if (!user) return <Redirect href="/login" />; // Redirect if not authenticated

  return children;
};

export default ProtectedRoute;
